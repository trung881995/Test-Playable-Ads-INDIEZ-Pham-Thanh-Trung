if ( TRACE ) { TRACE( JSON.parse( '["AICarRigidbodyController#init","AICarRigidbodyController#Start","AICarRigidbodyController#FixedUpdate","AICarRigidbodyController#OnTriggerStay","AICarRigidbodyController#OnTriggerExit","CheckpointManager#TotalCheckpoints#get","CheckpointManager#GetCheckpoint","PlayerCarController#init","PlayerCarController#Start","PlayerCarController#Update","PlayerCarController#FixedUpdate","PlayerCarController#HandleInput","PlayerCarController#OnTriggerStay","PlayerCarController#OnTriggerExit"]' ) ); }
/**
 * @version 1.0.9253.20104
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AICarRigidbodyController start.*/
    Bridge.define("AICarRigidbodyController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            moveForce: 0,
            maxSpeed: 0,
            turnSpeed: 0,
            checkpointRadius: 0,
            slowTurnThreshold: 0,
            driftForce: 0,
            obstacleDetectionRange: 0,
            avoidanceForce: 0,
            obstacleLayers: null,
            rb: null,
            checkpointManager: null,
            currentCheckpointIndex: 0,
            isGrounded: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AICarRigidbodyController#init", this ); }

                this.obstacleLayers = new UnityEngine.LayerMask();
                this.moveForce = 1000.0;
                this.maxSpeed = 20.0;
                this.turnSpeed = 5.0;
                this.checkpointRadius = 5.0;
                this.slowTurnThreshold = 30.0;
                this.driftForce = 300.0;
                this.obstacleDetectionRange = 10.0;
                this.avoidanceForce = 1000.0;
                this.currentCheckpointIndex = 0;
                this.isGrounded = false;
            }
        },
        methods: {
            /*AICarRigidbodyController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AICarRigidbodyController#Start", this ); }

                this.rb = this.GetComponent(UnityEngine.Rigidbody);
                this.checkpointManager = UnityEngine.Object.FindObjectOfType(CheckpointManager);
            },
            /*AICarRigidbodyController.Start end.*/

            /*AICarRigidbodyController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "AICarRigidbodyController#FixedUpdate", this ); }

                this.rb.AddForce$1(this.transform.up.$clone().scale( -1 ).clone().scale( 1000.0 ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.Acceleration);
                if (this.isGrounded) {
                    var target = this.checkpointManager.GetCheckpoint(this.currentCheckpointIndex);
                    if (UnityEngine.Component.op_Equality(target, null)) {
                        return;
                    }

                    var targetDir = (target.position.$clone().sub( this.transform.position )).clone().normalize().$clone();

                    // Góc quay giữa hướng xe và checkpoint
                    var angleToTarget = pc.Vec3.signedAngle( this.transform.forward, targetDir, pc.Vec3.UP.clone() );

                    // Quay mượt theo hướng checkpoint
                    var targetRotation = new pc.Quat().lookRotation( targetDir, pc.Vec3.UP );
                    this.transform.rotation = new pc.Quat().slerpUnclamped( this.transform.rotation, targetRotation, pc.math.clamp( this.turnSpeed * UnityEngine.Time.fixedDeltaTime, 0, 1 ) );

                    // Giảm lực nếu cua gắt
                    var adjustedForce = this.moveForce;
                    if (Math.abs(angleToTarget) > this.slowTurnThreshold) {
                        adjustedForce *= 0.5;
                    }

                    // Drift nhẹ nếu cua gắt
                    if (Math.abs(angleToTarget) > this.slowTurnThreshold) {
                        var driftDir = this.transform.right.$clone().clone().scale( (angleToTarget === 0 ? 1 : Math.sign(angleToTarget)) ); // drift trái/phải
                        this.rb.AddForce$1(driftDir.$clone().clone().scale( this.driftForce ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.Acceleration);
                    }

                    // Thêm lực tiến nếu chưa quá tốc độ
                    if (this.rb.velocity.length() < this.maxSpeed) {
                        this.rb.AddForce$1(this.transform.forward.$clone().clone().scale( adjustedForce ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.Acceleration);
                    }

                    // Kiểm tra đến checkpoint
                    if (pc.Vec3.distance( this.transform.position, target.position ) < this.checkpointRadius) {
                        this.currentCheckpointIndex = (this.currentCheckpointIndex + 1) | 0;
                        if (this.currentCheckpointIndex >= this.checkpointManager.TotalCheckpoints) {
                            this.currentCheckpointIndex = 0;
                        }
                    }

                    // ==== Raycast né vật cản ====
                    var hit = { v : new UnityEngine.RaycastHit() };
                    var centerDir = this.transform.forward.$clone();
                    var leftDir = new pc.Quat().setFromAxisAngle( pc.Vec3.UP.clone(), -30 ).transformVector( this.transform.forward );
                    var rightDir = new pc.Quat().setFromAxisAngle( pc.Vec3.UP.clone(), 30 ).transformVector( this.transform.forward );

                    if (UnityEngine.Physics.Raycast$3(this.transform.position, centerDir, hit, this.obstacleDetectionRange, UnityEngine.LayerMask.op_Implicit(this.obstacleLayers.$clone()))) {
                        this.rb.AddForce$1(this.transform.right.$clone().clone().scale( this.avoidanceForce ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.Acceleration);
                    } else if (UnityEngine.Physics.Raycast$3(this.transform.position, leftDir, hit, this.obstacleDetectionRange, UnityEngine.LayerMask.op_Implicit(this.obstacleLayers.$clone()))) {
                        this.rb.AddForce$1(this.transform.right.$clone().clone().scale( this.avoidanceForce ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.Acceleration);
                    } else if (UnityEngine.Physics.Raycast$3(this.transform.position, rightDir, hit, this.obstacleDetectionRange, UnityEngine.LayerMask.op_Implicit(this.obstacleLayers.$clone()))) {
                        this.rb.AddForce$1(this.transform.right.$clone().scale( -1 ).clone().scale( this.avoidanceForce ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.Acceleration);
                    }

                    // Debug Ray
                    UnityEngine.Debug.DrawRay$1(this.transform.position, centerDir.$clone().clone().scale( this.obstacleDetectionRange ), new pc.Color( 1, 0, 0, 1 ));
                    UnityEngine.Debug.DrawRay$1(this.transform.position, leftDir.$clone().clone().scale( this.obstacleDetectionRange ), new pc.Color( 1, 1, 0, 1 ));
                    UnityEngine.Debug.DrawRay$1(this.transform.position, rightDir.$clone().clone().scale( this.obstacleDetectionRange ), new pc.Color( 1, 1, 0, 1 ));
                }

            },
            /*AICarRigidbodyController.FixedUpdate end.*/

            /*AICarRigidbodyController.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
if ( TRACE ) { TRACE( "AICarRigidbodyController#OnTriggerStay", this ); }

                if (other.gameObject.layer === 7) {
                    this.isGrounded = true;
                    UnityEngine.Debug.Log$1("onGround");
                }
            },
            /*AICarRigidbodyController.OnTriggerStay end.*/

            /*AICarRigidbodyController.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "AICarRigidbodyController#OnTriggerExit", this ); }

                if (other.gameObject.layer === 7) {
                    this.isGrounded = false;
                    UnityEngine.Debug.Log$1("exitGround");
                }
            },
            /*AICarRigidbodyController.OnTriggerExit end.*/


        }
    });
    /*AICarRigidbodyController end.*/

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
            moveForce: 0,
            maxSpeed: 0,
            turnSpeed: 0,
            maxTurnAngle: 0,
            driftThreshold: 0,
            driftForce: 0,
            obstacleDetectionRange: 0,
            avoidanceForce: 0,
            obstacleLayers: null,
            rb: null,
            screenCenterX: 0,
            isDragging: false,
            targetTurn: 0,
            isGrounded: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerCarController#init", this ); }

                this.obstacleLayers = new UnityEngine.LayerMask();
                this.moveForce = 1000.0;
                this.maxSpeed = 20.0;
                this.turnSpeed = 5.0;
                this.maxTurnAngle = 45.0;
                this.driftThreshold = 15.0;
                this.driftForce = 300.0;
                this.obstacleDetectionRange = 10.0;
                this.avoidanceForce = 1000.0;
                this.isDragging = false;
                this.targetTurn = 0.0;
                this.isGrounded = false;
            }
        },
        methods: {
            /*PlayerCarController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerCarController#Start", this ); }

                this.rb = this.GetComponent(UnityEngine.Rigidbody);
                this.screenCenterX = UnityEngine.Screen.width / 2.0;
                //rb.centerOfMass = new Vector3(0, -1f, 0); // Hạ trọng tâm xuống
            },
            /*PlayerCarController.Start end.*/

            /*PlayerCarController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerCarController#Update", this ); }

                this.HandleInput();
            },
            /*PlayerCarController.Update end.*/

            /*PlayerCarController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "PlayerCarController#FixedUpdate", this ); }


                this.rb.AddForce$1(this.transform.up.$clone().scale( -1 ).clone().scale( 1000.0 ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.Acceleration);

                if (this.isGrounded) {
                    // --- Quay xe dựa trên input chuột ---
                    var turnAmount = this.targetTurn * this.turnSpeed * UnityEngine.Time.fixedDeltaTime;
                    this.transform.Rotate$1(pc.Vec3.UP.clone(), turnAmount);

                    // --- Drift nếu rẽ mạnh ---
                    if (Math.abs(this.targetTurn) > this.driftThreshold / this.maxTurnAngle) {
                        var driftDir = this.transform.right.$clone().clone().scale( (this.targetTurn === 0 ? 1 : Math.sign(this.targetTurn)) );
                        this.rb.AddForce$1(driftDir.$clone().clone().scale( this.driftForce ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.Acceleration);
                    }

                    // --- Di chuyển về phía trước nếu chưa quá tốc độ ---
                    if (this.rb.velocity.length() < this.maxSpeed) {
                        this.rb.AddForce$1(this.transform.forward.$clone().clone().scale( this.moveForce ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.Acceleration);
                    }

                    // === Né vật cản ===
                    var hit = { v : new UnityEngine.RaycastHit() };
                    var centerDir = this.transform.forward.$clone();
                    var leftDir = new pc.Quat().setFromAxisAngle( pc.Vec3.UP.clone(), -30 ).transformVector( this.transform.forward );
                    var rightDir = new pc.Quat().setFromAxisAngle( pc.Vec3.UP.clone(), 30 ).transformVector( this.transform.forward );

                    if (UnityEngine.Physics.Raycast$3(this.transform.position, centerDir, hit, this.obstacleDetectionRange, UnityEngine.LayerMask.op_Implicit(this.obstacleLayers.$clone()))) {
                        this.rb.AddForce$1(this.transform.right.$clone().clone().scale( this.avoidanceForce ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.Acceleration);
                    } else if (UnityEngine.Physics.Raycast$3(this.transform.position, leftDir, hit, this.obstacleDetectionRange, UnityEngine.LayerMask.op_Implicit(this.obstacleLayers.$clone()))) {
                        this.rb.AddForce$1(this.transform.right.$clone().clone().scale( this.avoidanceForce ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.Acceleration);
                    } else if (UnityEngine.Physics.Raycast$3(this.transform.position, rightDir, hit, this.obstacleDetectionRange, UnityEngine.LayerMask.op_Implicit(this.obstacleLayers.$clone()))) {
                        this.rb.AddForce$1(this.transform.right.$clone().scale( -1 ).clone().scale( this.avoidanceForce ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.Acceleration);
                    }
                    // Debug Ray
                    UnityEngine.Debug.DrawRay$1(this.transform.position, centerDir.$clone().clone().scale( this.obstacleDetectionRange ), new pc.Color( 1, 0, 0, 1 ));
                    UnityEngine.Debug.DrawRay$1(this.transform.position, leftDir.$clone().clone().scale( this.obstacleDetectionRange ), new pc.Color( 1, 1, 0, 1 ));
                    UnityEngine.Debug.DrawRay$1(this.transform.position, rightDir.$clone().clone().scale( this.obstacleDetectionRange ), new pc.Color( 1, 1, 0, 1 ));

                }



            },
            /*PlayerCarController.FixedUpdate end.*/

            /*PlayerCarController.HandleInput start.*/
            HandleInput: function () {
if ( TRACE ) { TRACE( "PlayerCarController#HandleInput", this ); }

                // Mobile
                if (UnityEngine.Input.touchCount > 0) {
                    var delta = UnityEngine.Input.GetTouch(0).position.x - this.screenCenterX;
                    var percent = Math.max(-1.0, Math.min(-delta / this.screenCenterX, 1.0));
                    this.targetTurn = percent * this.maxTurnAngle;
                } else {
                    //targetTurn = 0f;
                }
            },
            /*PlayerCarController.HandleInput end.*/

            /*PlayerCarController.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
if ( TRACE ) { TRACE( "PlayerCarController#OnTriggerStay", this ); }

                if (other.gameObject.layer === 7) {
                    this.isGrounded = true;
                    UnityEngine.Debug.Log$1("onGround");
                }
            },
            /*PlayerCarController.OnTriggerStay end.*/

            /*PlayerCarController.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "PlayerCarController#OnTriggerExit", this ); }

                if (other.gameObject.layer === 7) {
                    this.isGrounded = false;
                    UnityEngine.Debug.Log$1("exitGround");
                }
            },
            /*PlayerCarController.OnTriggerExit end.*/


        }
    });
    /*PlayerCarController end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine"];

    /*AICarRigidbodyController start.*/
    $m("AICarRigidbodyController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Rigidbody)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"avoidanceForce","t":4,"rt":$n[0].Single,"sn":"avoidanceForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"checkpointManager","t":4,"rt":CheckpointManager,"sn":"checkpointManager"},{"a":2,"n":"checkpointRadius","t":4,"rt":$n[0].Single,"sn":"checkpointRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentCheckpointIndex","t":4,"rt":$n[0].Int32,"sn":"currentCheckpointIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"driftForce","t":4,"rt":$n[0].Single,"sn":"driftForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isGrounded","t":4,"rt":$n[0].Boolean,"sn":"isGrounded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"maxSpeed","t":4,"rt":$n[0].Single,"sn":"maxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Movement Settings")],"a":2,"n":"moveForce","t":4,"rt":$n[0].Single,"sn":"moveForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Obstacle Avoidance")],"a":2,"n":"obstacleDetectionRange","t":4,"rt":$n[0].Single,"sn":"obstacleDetectionRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"obstacleLayers","t":4,"rt":$n[1].LayerMask,"sn":"obstacleLayers"},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"at":[new UnityEngine.HeaderAttribute("Drift Settings")],"a":2,"n":"slowTurnThreshold","t":4,"rt":$n[0].Single,"sn":"slowTurnThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"turnSpeed","t":4,"rt":$n[0].Single,"sn":"turnSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*AICarRigidbodyController end.*/

    /*CheckpointManager start.*/
    $m("CheckpointManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetCheckpoint","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetCheckpoint","rt":$n[1].Transform,"p":[$n[0].Int32]},{"a":2,"n":"TotalCheckpoints","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_TotalCheckpoints","t":8,"rt":$n[0].Int32,"fg":"TotalCheckpoints","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"TotalCheckpoints"},{"a":2,"n":"checkpoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"checkpoints"}]}; }, $n);
    /*CheckpointManager end.*/

    /*PlayerCarController start.*/
    $m("PlayerCarController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Rigidbody)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"HandleInput","t":8,"sn":"HandleInput","rt":$n[0].Void},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"avoidanceForce","t":4,"rt":$n[0].Single,"sn":"avoidanceForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"driftForce","t":4,"rt":$n[0].Single,"sn":"driftForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Drift Settings")],"a":2,"n":"driftThreshold","t":4,"rt":$n[0].Single,"sn":"driftThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isGrounded","t":4,"rt":$n[0].Boolean,"sn":"isGrounded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"maxSpeed","t":4,"rt":$n[0].Single,"sn":"maxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maxTurnAngle","t":4,"rt":$n[0].Single,"sn":"maxTurnAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Movement Settings")],"a":2,"n":"moveForce","t":4,"rt":$n[0].Single,"sn":"moveForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Obstacle Avoidance")],"a":2,"n":"obstacleDetectionRange","t":4,"rt":$n[0].Single,"sn":"obstacleDetectionRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"obstacleLayers","t":4,"rt":$n[1].LayerMask,"sn":"obstacleLayers"},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":1,"n":"screenCenterX","t":4,"rt":$n[0].Single,"sn":"screenCenterX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"targetTurn","t":4,"rt":$n[0].Single,"sn":"targetTurn","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"turnSpeed","t":4,"rt":$n[0].Single,"sn":"turnSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PlayerCarController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
