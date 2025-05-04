if ( TRACE ) { TRACE( JSON.parse( '["AICarController#init","AICarController#Start","AICarController#Update","CheckpointManager#TotalCheckpoints#get","CheckpointManager#GetCheckpoint","PlayerCarController#init","PlayerCarController#Start","PlayerCarController#Update","PlayerCarController#FixedUpdate","PlayerCarController#OnCollisionEnter","PlayerCarController#OnTriggerEnter","PlayerCarController#HandleInput","SmoothFollowCamera#init","SmoothFollowCamera#Start","SmoothFollowCamera#LateUpdate"]' ) ); }
/**
 * @version 1.0.9255.30685
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AICarController start.*/
    Bridge.define("AICarController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            moveSpeed: 0,
            maxSpeed: 0,
            smoothTime: 0,
            turnSpeed: 0,
            checkpointRadius: 0,
            slowTurnThreshold: 0,
            driftIntensity: 0,
            obstacleDetectionRange: 0,
            avoidanceStrength: 0,
            obstacleLayers: null,
            checkpointManager: null,
            currentCheckpointIndex: 0,
            lastPosition: null,
            velocity: null,
            moveVelocity: null,
            timeStopping: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AICarController#init", this ); }

                this.obstacleLayers = new UnityEngine.LayerMask();
                this.lastPosition = new UnityEngine.Vector3();
                this.velocity = new UnityEngine.Vector3();
                this.moveVelocity = new UnityEngine.Vector3();
                this.moveSpeed = 10.0;
                this.maxSpeed = 20.0;
                this.smoothTime = 0.2;
                this.turnSpeed = 100.0;
                this.checkpointRadius = 5.0;
                this.slowTurnThreshold = 30.0;
                this.driftIntensity = 0.5;
                this.obstacleDetectionRange = 10.0;
                this.avoidanceStrength = 3.0;
                this.currentCheckpointIndex = 0;
                this.velocity = pc.Vec3.ZERO.clone();
                this.moveVelocity = pc.Vec3.ZERO.clone();
                this.timeStopping = 0.0;
            }
        },
        methods: {
            /*AICarController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AICarController#Start", this ); }

                this.checkpointManager = UnityEngine.Object.FindObjectOfType(CheckpointManager);
                this.lastPosition = this.transform.position.$clone();
            },
            /*AICarController.Start end.*/

            /*AICarController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AICarController#Update", this ); }

                var $t;
                // === Tính vận tốc bằng tay ===
                this.velocity = (this.transform.position.$clone().sub( this.lastPosition )).scale( 1.0 / ( UnityEngine.Time.deltaTime ) );
                this.lastPosition = this.transform.position.$clone();

                // === Phát hiện kẹt xe ===
                if (this.velocity.length() < 1.0) {
                    this.timeStopping += UnityEngine.Time.deltaTime;
                } else {
                    this.timeStopping = 0.0;
                }

                // === Lấy checkpoint tiếp theo ===
                var target = this.checkpointManager.GetCheckpoint(this.currentCheckpointIndex);
                if (UnityEngine.Component.op_Equality(target, null)) {
                    return;
                }

                var targetDir = (target.position.$clone().sub( this.transform.position )).clone().normalize().$clone();
                var angleToTarget = pc.Vec3.signedAngle( this.transform.forward, targetDir, pc.Vec3.UP.clone() );

                // === Quay mượt về hướng mục tiêu ===
                var clampedTurn = Math.max(-this.turnSpeed * UnityEngine.Time.deltaTime, Math.min(angleToTarget, this.turnSpeed * UnityEngine.Time.deltaTime));
                this.transform.rotation = new pc.Quat().setFromAxisAngle( pc.Vec3.UP.clone(), clampedTurn ).clone().mul( this.transform.rotation );

                // === Xác định hướng di chuyển (lùi nếu kẹt) ===
                var moveDir = (this.timeStopping >= 1.5) ? this.transform.forward.$clone().scale( -1 ) : this.transform.forward.$clone();
                var moveStep = this.moveSpeed * UnityEngine.Time.deltaTime;

                // === Drift giả lập nếu cua gắt và đang chạy nhanh ===
                if (Math.abs(angleToTarget) > this.slowTurnThreshold && this.velocity.length() > 5.0) {
                    var driftOffset = this.transform.right.$clone().clone().scale( (angleToTarget === 0 ? 1 : Math.sign(angleToTarget)) ).clone().scale( this.driftIntensity );
                    this.transform.position = this.transform.position.$clone().add( driftOffset.$clone().clone().scale( UnityEngine.Time.deltaTime ) );
                    //Debug.Log(" Drift giả lập!");
                }

                // === Di chuyển chính ===
                //transform.position += moveDir * moveStep;
                //var moveVelocity = Vector3.zero;
                this.transform.position = pc.Vec3.smoothDamp( this.transform.position.$clone(), this.transform.position.$clone().add( moveDir.$clone().clone().scale( moveStep ) ), Bridge.ref(this, "moveVelocity"), this.smoothTime * UnityEngine.Time.deltaTime, Infinity, UnityEngine.Time.deltaTime );

                // === Kiểm tra qua checkpoint ===
                if (pc.Vec3.distance( this.transform.position, target.position ) < this.checkpointRadius) {
                    this.currentCheckpointIndex = (this.currentCheckpointIndex + 1) | 0;
                    if (this.currentCheckpointIndex >= this.checkpointManager.TotalCheckpoints) {
                        this.currentCheckpointIndex = 0;
                    }
                }

                // === Né vật cản bằng Raycast 3 hướng ===
                var hit = { v : new UnityEngine.RaycastHit() };
                var directions = System.Array.init([
                    this.transform.forward.$clone(), 
                    new pc.Quat().setFromAxisAngle( pc.Vec3.UP.clone(), -30 ).transformVector( this.transform.forward ), 
                    new pc.Quat().setFromAxisAngle( pc.Vec3.UP.clone(), 30 ).transformVector( this.transform.forward )
                ], UnityEngine.Vector3);

                $t = Bridge.getEnumerator(directions);
                try {
                    while ($t.moveNext()) {
                        var dir = $t.Current.$clone();
                        if (UnityEngine.Physics.Raycast$3(this.transform.position, dir, hit, this.obstacleDetectionRange, UnityEngine.LayerMask.op_Implicit(this.obstacleLayers.$clone()))) {
                            var avoidDir = new pc.Vec3().cross( pc.Vec3.UP.clone(), dir ).clone().normalize().$clone();
                            this.transform.position = this.transform.position.$clone().add( avoidDir.$clone().clone().scale( this.avoidanceStrength ).clone().scale( UnityEngine.Time.deltaTime ) );
                            UnityEngine.Debug.Log$1(" N\u00e9 v\u1eadt c\u1ea3n!");
                            break;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                // === Debug Raycast ===
                UnityEngine.Debug.DrawRay$1(this.transform.position, directions[0].$clone().clone().scale( this.obstacleDetectionRange ), new pc.Color( 1, 0, 0, 1 ));
                UnityEngine.Debug.DrawRay$1(this.transform.position, directions[1].$clone().clone().scale( this.obstacleDetectionRange ), new pc.Color( 1, 1, 0, 1 ));
                UnityEngine.Debug.DrawRay$1(this.transform.position, directions[2].$clone().clone().scale( this.obstacleDetectionRange ), new pc.Color( 1, 1, 0, 1 ));
            },
            /*AICarController.Update end.*/


        }
    });
    /*AICarController end.*/

    /*CheckpointManager start.*/
    Bridge.define("CheckpointManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            checkpoints: null
        },
        props: {
            TotalCheckpoints: {
                get: function () {
if ( TRACE ) { TRACE( "CheckpointManager#TotalCheckpoints#get", this ); }

                    return this.checkpoints.length;
                }
            }
        },
        methods: {
            /*CheckpointManager.GetCheckpoint start.*/
            GetCheckpoint: function (index) {
if ( TRACE ) { TRACE( "CheckpointManager#GetCheckpoint", this ); }

                if (index >= this.checkpoints.length) {
                    return null;
                }
                return this.checkpoints[index];
            },
            /*CheckpointManager.GetCheckpoint end.*/


        }
    });
    /*CheckpointManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*PlayerCarController start.*/
    Bridge.define("PlayerCarController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            moveSpeed: 0,
            smoothTime: 0,
            maxSpeed: 0,
            turnSpeed: 0,
            maxTurnAngle: 0,
            checkpointRadius: 0,
            slowTurnThreshold: 0,
            driftIntensity: 0,
            groundCheckDistance: 0,
            groundLayer: null,
            moveDirection: null,
            screenCenterX: 0,
            targetTurn: 0,
            turnAmount: 0,
            isDragging: false,
            isCollision: false,
            timeStopping: 0,
            currentCheckpointIndex: 0,
            checkpointManager: null,
            Arrow: null,
            lastPosition: null,
            velocity: null,
            moveVelocity: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerCarController#init", this ); }

                this.groundLayer = new UnityEngine.LayerMask();
                this.moveDirection = new UnityEngine.Vector3();
                this.lastPosition = new UnityEngine.Vector3();
                this.velocity = new UnityEngine.Vector3();
                this.moveVelocity = new UnityEngine.Vector3();
                this.moveSpeed = 10.0;
                this.smoothTime = 0.2;
                this.maxSpeed = 20.0;
                this.turnSpeed = 100.0;
                this.maxTurnAngle = 45.0;
                this.checkpointRadius = 10.0;
                this.slowTurnThreshold = 30.0;
                this.driftIntensity = 0.5;
                this.groundCheckDistance = 1.0;
                this.moveDirection = pc.Vec3.ZERO.clone();
                this.targetTurn = 0.0;
                this.turnAmount = 0.0;
                this.isDragging = false;
                this.isCollision = false;
                this.timeStopping = 0.0;
                this.currentCheckpointIndex = 0;
                this.velocity = pc.Vec3.ZERO.clone();
                this.moveVelocity = pc.Vec3.ZERO.clone();
            }
        },
        methods: {
            /*PlayerCarController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerCarController#Start", this ); }

                this.screenCenterX = UnityEngine.Screen.width / 2.0;

                this.lastPosition = this.transform.position.$clone();
                //transform.position = Vector3.SmoothDamp(transform.position, transform.position + Vector3.down * moveSpeed * Time.deltaTime, ref moveVelocity, smoothTime * Time.deltaTime);
            },
            /*PlayerCarController.Start end.*/

            /*PlayerCarController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerCarController#Update", this ); }


                this.HandleInput();

                // === Tính vận tốc bằng tay ===
                this.velocity = (this.transform.position.$clone().sub( this.lastPosition )).scale( 1.0 / ( UnityEngine.Time.deltaTime ) );
                this.lastPosition = this.transform.position.$clone();

                // === Lấy checkpoint tiếp theo ===
                var target = this.checkpointManager.GetCheckpoint(this.currentCheckpointIndex);
                if (UnityEngine.Component.op_Equality(target, null)) {
                    return;
                }

                var targetDir = (target.position.$clone().sub( this.Arrow.transform.position )).clone().normalize().$clone();

                //Arrow.transform.LookAt(target);

                // Tạo rotation mới hướng về tường
                var targetRotation = new pc.Quat().lookRotation( targetDir, pc.Vec3.UP.clone() );

                // Cập nhật rotation (chỉ hướng, giữ lại trục XArrow.transform.eulerAngles.x quay đều)
                this.Arrow.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( this.Arrow.transform.eulerAngles.x, targetRotation.getPositiveEulerAngles().y, this.Arrow.transform.eulerAngles.z );
                if (!this.isCollision) {

                    // Tính hướng tới mục tiêu
                    var targetDir2 = (target.position.$clone().sub( this.transform.position )).clone().normalize().$clone();

                    // Tạo rotation mục tiêu
                    var targetRotation2 = new pc.Quat().lookRotation( targetDir2, pc.Vec3.RIGHT.clone() );

                    // Lấy rotation hiện tại
                    var currentRotation = this.transform.rotation.$clone();

                    // Giữ lại các giá trị trục Y và Z, chỉ quay trục X mượt
                    var smoothRotation = new pc.Quat().setFromEulerAngles_Unity( UnityEngine.Mathf.LerpAngle(currentRotation.getPositiveEulerAngles().x, targetRotation2.getPositiveEulerAngles().x, UnityEngine.Time.deltaTime * 100.0), currentRotation.getPositiveEulerAngles().y, currentRotation.getPositiveEulerAngles().z );

                    // Áp dụng rotation mới
                    this.transform.rotation = smoothRotation.$clone();


                    // --- Quay xe dựa trên input chuột ---
                    this.turnAmount = this.targetTurn * this.turnSpeed * UnityEngine.Time.deltaTime;
                    this.transform.Rotate$1(pc.Vec3.UP.clone(), this.turnAmount);

                    // === Xác định hướng di chuyển ===
                    this.moveDirection = this.transform.forward.$clone();
                    var moveStep = this.moveSpeed * UnityEngine.Time.deltaTime;

                    // === Drift giả lập nếu cua gắt và đang chạy nhanh ===
                    if (Math.abs(this.turnAmount) > this.slowTurnThreshold && this.velocity.length() > 5.0) {
                        var driftOffset = this.transform.right.$clone().clone().scale( (this.turnAmount === 0 ? 1 : Math.sign(this.turnAmount)) ).clone().scale( this.driftIntensity );
                        this.transform.position = this.transform.position.$clone().add( driftOffset.$clone().clone().scale( UnityEngine.Time.deltaTime ) );
                        UnityEngine.Debug.Log$1("Drift gi\u1ea3 l\u1eadp!");
                    }

                    // === Di chuyển chính (áp dụng SmoothDamp) ===
                    var pos = this.transform.position.$clone();
                    pos.y = this.checkpointManager.GetCheckpoint(((this.currentCheckpointIndex + 1) | 0)).position.y - 1.0;
                    this.transform.position = pc.Vec3.smoothDamp( this.transform.position.$clone(), pos.$clone().add( this.moveDirection.$clone().clone().scale( moveStep ) ), Bridge.ref(this, "moveVelocity"), this.smoothTime * UnityEngine.Time.deltaTime, Infinity, UnityEngine.Time.deltaTime );



                    // === Kiểm tra qua checkpoint ===
                    if (pc.Vec3.distance( this.transform.position, target.position ) < this.checkpointRadius) {
                        this.currentCheckpointIndex = (this.currentCheckpointIndex + 1) | 0;
                        if (this.currentCheckpointIndex >= this.checkpointManager.TotalCheckpoints) {
                            this.currentCheckpointIndex = 0;
                        }
                    }
                    /* 
                    var pos = transform.position;
                    pos.y = checkpointManager.GetCheckpoint(currentCheckpointIndex+1).position.y-1f;
                    transform.position = pos;
                    */
                } else {
                    // === Phát hiện kẹt xe ===
                    if (this.timeStopping > 1.0) {

                        this.timeStopping -= UnityEngine.Time.deltaTime;
                    } else if (this.timeStopping > 0) {
                        //isCollision = false;
                        // === Xác định hướng lui ===
                        this.moveDirection = this.transform.forward.$clone().scale( -1 );
                        var moveStep1 = this.moveSpeed * UnityEngine.Time.deltaTime;
                        // === lui` xe (áp dụng SmoothDamp) ===


                        this.transform.position = pc.Vec3.smoothDamp( this.transform.position.$clone(), this.transform.position.$clone().add( this.moveDirection.$clone().clone().scale( moveStep1 ) ), Bridge.ref(this, "moveVelocity"), this.smoothTime * UnityEngine.Time.deltaTime, Infinity, UnityEngine.Time.deltaTime );
                        this.timeStopping -= UnityEngine.Time.deltaTime;
                    } else {
                        this.isCollision = false;
                        this.moveVelocity = pc.Vec3.ZERO.clone();
                        this.timeStopping = 0.0;
                    }
                }


            },
            /*PlayerCarController.Update end.*/

            /*PlayerCarController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "PlayerCarController#FixedUpdate", this ); }

                //rb.AddForce(Vector3.down * 800f * Time.fixedDeltaTime, ForceMode.Acceleration);
            },
            /*PlayerCarController.FixedUpdate end.*/

            /*PlayerCarController.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "PlayerCarController#OnCollisionEnter", this ); }

                if (collision.gameObject.layer === 6) {
                    this.timeStopping = 2.0;
                    this.moveVelocity = pc.Vec3.ZERO.clone();
                    this.isCollision = true;

                    UnityEngine.Debug.Log$1("va cham voi tuong !!!");
                }


            },
            /*PlayerCarController.OnCollisionEnter end.*/

            /*PlayerCarController.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "PlayerCarController#OnTriggerEnter", this ); }

                if (other.gameObject.layer === 7) {


                }
            },
            /*PlayerCarController.OnTriggerEnter end.*/

            /*PlayerCarController.HandleInput start.*/
            HandleInput: function () {
if ( TRACE ) { TRACE( "PlayerCarController#HandleInput", this ); }

                if (UnityEngine.Input.touchCount > 0) {
                    var delta = UnityEngine.Input.GetTouch(0).position.x - this.screenCenterX;
                    var percent = Math.max(-1.0, Math.min(-delta / this.screenCenterX, 1.0));
                    this.targetTurn = percent * this.maxTurnAngle;
                }
            },
            /*PlayerCarController.HandleInput end.*/


        }
    });
    /*PlayerCarController end.*/

    /*SmoothFollowCamera start.*/
    Bridge.define("SmoothFollowCamera", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            offset: null,
            followSpeed: 0,
            rotationSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SmoothFollowCamera#init", this ); }

                this.offset = new UnityEngine.Vector3();
                this.offset = new pc.Vec3( 0, 5, -10 );
                this.followSpeed = 5.0;
                this.rotationSpeed = 5.0;
            }
        },
        methods: {
            /*SmoothFollowCamera.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SmoothFollowCamera#Start", this ); }

                // Đặt vị trí và xoay camera đúng lúc bắt đầu để tránh nhảy hình
                if (UnityEngine.Component.op_Inequality(this.target, null)) {
                    this.transform.position = this.target.TransformPoint$1(this.offset);
                    this.transform.LookAt(this.target);
                }
            },
            /*SmoothFollowCamera.Start end.*/

            /*SmoothFollowCamera.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "SmoothFollowCamera#LateUpdate", this ); }

                if (UnityEngine.Component.op_Equality(this.target, null)) {
                    return;
                }

                // Vị trí mong muốn phía sau xe theo hướng xe đang quay
                var desiredPosition = this.target.TransformPoint$1(this.offset);

                // Di chuyển mượt
                this.transform.position = new pc.Vec3().lerp( this.transform.position, desiredPosition, UnityEngine.Time.deltaTime * this.followSpeed );

                // Xoay mượt để nhìn về xe
                var desiredRotation = new pc.Quat().lookRotation( this.target.position.$clone().sub( this.transform.position ), pc.Vec3.UP );
                this.transform.rotation = new pc.Quat().slerpUnclamped( this.transform.rotation, desiredRotation, pc.math.clamp( UnityEngine.Time.deltaTime * this.rotationSpeed, 0, 1 ) );
            },
            /*SmoothFollowCamera.LateUpdate end.*/


        }
    });
    /*SmoothFollowCamera end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine"];

    /*AICarController start.*/
    $m("AICarController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"avoidanceStrength","t":4,"rt":$n[0].Single,"sn":"avoidanceStrength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"checkpointManager","t":4,"rt":CheckpointManager,"sn":"checkpointManager"},{"a":2,"n":"checkpointRadius","t":4,"rt":$n[0].Single,"sn":"checkpointRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentCheckpointIndex","t":4,"rt":$n[0].Int32,"sn":"currentCheckpointIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"driftIntensity","t":4,"rt":$n[0].Single,"sn":"driftIntensity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lastPosition","t":4,"rt":$n[1].Vector3,"sn":"lastPosition"},{"a":2,"n":"maxSpeed","t":4,"rt":$n[0].Single,"sn":"maxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Movement Settings")],"a":2,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"moveVelocity","t":4,"rt":$n[1].Vector3,"sn":"moveVelocity"},{"at":[new UnityEngine.HeaderAttribute("Obstacle Avoidance")],"a":2,"n":"obstacleDetectionRange","t":4,"rt":$n[0].Single,"sn":"obstacleDetectionRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"obstacleLayers","t":4,"rt":$n[1].LayerMask,"sn":"obstacleLayers"},{"at":[new UnityEngine.HeaderAttribute("Drift Settings")],"a":2,"n":"slowTurnThreshold","t":4,"rt":$n[0].Single,"sn":"slowTurnThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"smoothTime","t":4,"rt":$n[0].Single,"sn":"smoothTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeStopping","t":4,"rt":$n[0].Single,"sn":"timeStopping","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"turnSpeed","t":4,"rt":$n[0].Single,"sn":"turnSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"velocity","t":4,"rt":$n[1].Vector3,"sn":"velocity"}]}; }, $n);
    /*AICarController end.*/

    /*CheckpointManager start.*/
    $m("CheckpointManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetCheckpoint","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetCheckpoint","rt":$n[1].Transform,"p":[$n[0].Int32]},{"a":2,"n":"TotalCheckpoints","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_TotalCheckpoints","t":8,"rt":$n[0].Int32,"fg":"TotalCheckpoints","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"TotalCheckpoints"},{"a":2,"n":"checkpoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"checkpoints"}]}; }, $n);
    /*CheckpointManager end.*/

    /*PlayerCarController start.*/
    $m("PlayerCarController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"HandleInput","t":8,"sn":"HandleInput","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Arrow","t":4,"rt":$n[1].Transform,"sn":"Arrow"},{"a":2,"n":"checkpointManager","t":4,"rt":CheckpointManager,"sn":"checkpointManager"},{"a":2,"n":"checkpointRadius","t":4,"rt":$n[0].Single,"sn":"checkpointRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentCheckpointIndex","t":4,"rt":$n[0].Int32,"sn":"currentCheckpointIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"driftIntensity","t":4,"rt":$n[0].Single,"sn":"driftIntensity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Ground Check")],"a":2,"n":"groundCheckDistance","t":4,"rt":$n[0].Single,"sn":"groundCheckDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"groundLayer","t":4,"rt":$n[1].LayerMask,"sn":"groundLayer"},{"a":1,"n":"isCollision","t":4,"rt":$n[0].Boolean,"sn":"isCollision","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastPosition","t":4,"rt":$n[1].Vector3,"sn":"lastPosition"},{"a":2,"n":"maxSpeed","t":4,"rt":$n[0].Single,"sn":"maxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maxTurnAngle","t":4,"rt":$n[0].Single,"sn":"maxTurnAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"moveDirection","t":4,"rt":$n[1].Vector3,"sn":"moveDirection"},{"at":[new UnityEngine.HeaderAttribute("Movement Settings")],"a":2,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"moveVelocity","t":4,"rt":$n[1].Vector3,"sn":"moveVelocity"},{"a":1,"n":"screenCenterX","t":4,"rt":$n[0].Single,"sn":"screenCenterX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Drift Settings")],"a":2,"n":"slowTurnThreshold","t":4,"rt":$n[0].Single,"sn":"slowTurnThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"smoothTime","t":4,"rt":$n[0].Single,"sn":"smoothTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"targetTurn","t":4,"rt":$n[0].Single,"sn":"targetTurn","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeStopping","t":4,"rt":$n[0].Single,"sn":"timeStopping","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"turnAmount","t":4,"rt":$n[0].Single,"sn":"turnAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"turnSpeed","t":4,"rt":$n[0].Single,"sn":"turnSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"velocity","t":4,"rt":$n[1].Vector3,"sn":"velocity"}]}; }, $n);
    /*PlayerCarController end.*/

    /*SmoothFollowCamera start.*/
    $m("SmoothFollowCamera", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Smoothing Settings")],"a":2,"n":"followSpeed","t":4,"rt":$n[0].Single,"sn":"followSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Camera Offset")],"a":2,"n":"offset","t":4,"rt":$n[1].Vector3,"sn":"offset"},{"a":2,"n":"rotationSpeed","t":4,"rt":$n[0].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Target Settings")],"a":2,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"}]}; }, $n);
    /*SmoothFollowCamera end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
