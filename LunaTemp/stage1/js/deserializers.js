var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i300 = root || request.c( 'UnityEngine.JointSpring' )
  var i301 = data
  i300.spring = i301[0]
  i300.damper = i301[1]
  i300.targetPosition = i301[2]
  return i300
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i302 = root || request.c( 'UnityEngine.JointMotor' )
  var i303 = data
  i302.m_TargetVelocity = i303[0]
  i302.m_Force = i303[1]
  i302.m_FreeSpin = i303[2]
  return i302
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i304 = root || request.c( 'UnityEngine.JointLimits' )
  var i305 = data
  i304.m_Min = i305[0]
  i304.m_Max = i305[1]
  i304.m_Bounciness = i305[2]
  i304.m_BounceMinVelocity = i305[3]
  i304.m_ContactDistance = i305[4]
  i304.minBounce = i305[5]
  i304.maxBounce = i305[6]
  return i304
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i306 = root || request.c( 'UnityEngine.JointDrive' )
  var i307 = data
  i306.m_PositionSpring = i307[0]
  i306.m_PositionDamper = i307[1]
  i306.m_MaximumForce = i307[2]
  i306.m_UseAcceleration = i307[3]
  return i306
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i308 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i309 = data
  i308.m_Spring = i309[0]
  i308.m_Damper = i309[1]
  return i308
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i310 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i311 = data
  i310.m_Limit = i311[0]
  i310.m_Bounciness = i311[1]
  i310.m_ContactDistance = i311[2]
  return i310
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i312 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i313 = data
  i312.m_ExtremumSlip = i313[0]
  i312.m_ExtremumValue = i313[1]
  i312.m_AsymptoteSlip = i313[2]
  i312.m_AsymptoteValue = i313[3]
  i312.m_Stiffness = i313[4]
  return i312
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i314 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i315 = data
  i314.m_LowerAngle = i315[0]
  i314.m_UpperAngle = i315[1]
  return i314
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i316 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i317 = data
  i316.m_MotorSpeed = i317[0]
  i316.m_MaximumMotorTorque = i317[1]
  return i316
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i318 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i319 = data
  i318.m_DampingRatio = i319[0]
  i318.m_Frequency = i319[1]
  i318.m_Angle = i319[2]
  return i318
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i320 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i321 = data
  i320.m_LowerTranslation = i321[0]
  i320.m_UpperTranslation = i321[1]
  return i320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i323 = data
  i322.name = i323[0]
  i322.halfPrecision = !!i323[1]
  i322.useUInt32IndexFormat = !!i323[2]
  i322.vertexCount = i323[3]
  i322.aabb = i323[4]
  var i325 = i323[5]
  var i324 = []
  for(var i = 0; i < i325.length; i += 1) {
    i324.push( !!i325[i + 0] );
  }
  i322.streams = i324
  i322.vertices = i323[6]
  var i327 = i323[7]
  var i326 = []
  for(var i = 0; i < i327.length; i += 1) {
    i326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i327[i + 0]) );
  }
  i322.subMeshes = i326
  var i329 = i323[8]
  var i328 = []
  for(var i = 0; i < i329.length; i += 16) {
    i328.push( new pc.Mat4().setData(i329[i + 0], i329[i + 1], i329[i + 2], i329[i + 3],  i329[i + 4], i329[i + 5], i329[i + 6], i329[i + 7],  i329[i + 8], i329[i + 9], i329[i + 10], i329[i + 11],  i329[i + 12], i329[i + 13], i329[i + 14], i329[i + 15]) );
  }
  i322.bindposes = i328
  var i331 = i323[9]
  var i330 = []
  for(var i = 0; i < i331.length; i += 1) {
    i330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i331[i + 0]) );
  }
  i322.blendShapes = i330
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i337 = data
  i336.triangles = i337[0]
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i343 = data
  i342.name = i343[0]
  var i345 = i343[1]
  var i344 = []
  for(var i = 0; i < i345.length; i += 1) {
    i344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i345[i + 0]) );
  }
  i342.frames = i344
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i346 = root || new pc.UnityMaterial()
  var i347 = data
  i346.name = i347[0]
  request.r(i347[1], i347[2], 0, i346, 'shader')
  i346.renderQueue = i347[3]
  i346.enableInstancing = !!i347[4]
  var i349 = i347[5]
  var i348 = []
  for(var i = 0; i < i349.length; i += 1) {
    i348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i349[i + 0]) );
  }
  i346.floatParameters = i348
  var i351 = i347[6]
  var i350 = []
  for(var i = 0; i < i351.length; i += 1) {
    i350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i351[i + 0]) );
  }
  i346.colorParameters = i350
  var i353 = i347[7]
  var i352 = []
  for(var i = 0; i < i353.length; i += 1) {
    i352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i353[i + 0]) );
  }
  i346.vectorParameters = i352
  var i355 = i347[8]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i355[i + 0]) );
  }
  i346.textureParameters = i354
  var i357 = i347[9]
  var i356 = []
  for(var i = 0; i < i357.length; i += 1) {
    i356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i357[i + 0]) );
  }
  i346.materialFlags = i356
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i361 = data
  i360.name = i361[0]
  i360.value = i361[1]
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i365 = data
  i364.name = i365[0]
  i364.value = new pc.Color(i365[1], i365[2], i365[3], i365[4])
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i369 = data
  i368.name = i369[0]
  i368.value = new pc.Vec4( i369[1], i369[2], i369[3], i369[4] )
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i373 = data
  i372.name = i373[0]
  request.r(i373[1], i373[2], 0, i372, 'value')
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i377 = data
  i376.name = i377[0]
  i376.enabled = !!i377[1]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i379 = data
  i378.position = new pc.Vec3( i379[0], i379[1], i379[2] )
  i378.scale = new pc.Vec3( i379[3], i379[4], i379[5] )
  i378.rotation = new pc.Quat(i379[6], i379[7], i379[8], i379[9])
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i381 = data
  request.r(i381[0], i381[1], 0, i380, 'sharedMesh')
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i383 = data
  request.r(i383[0], i383[1], 0, i382, 'additionalVertexStreams')
  i382.enabled = !!i383[2]
  request.r(i383[3], i383[4], 0, i382, 'sharedMaterial')
  var i385 = i383[5]
  var i384 = []
  for(var i = 0; i < i385.length; i += 2) {
  request.r(i385[i + 0], i385[i + 1], 2, i384, '')
  }
  i382.sharedMaterials = i384
  i382.receiveShadows = !!i383[6]
  i382.shadowCastingMode = i383[7]
  i382.sortingLayerID = i383[8]
  i382.sortingOrder = i383[9]
  i382.lightmapIndex = i383[10]
  i382.lightmapSceneIndex = i383[11]
  i382.lightmapScaleOffset = new pc.Vec4( i383[12], i383[13], i383[14], i383[15] )
  i382.lightProbeUsage = i383[16]
  i382.reflectionProbeUsage = i383[17]
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i389 = data
  i388.enabled = !!i389[0]
  i388.isTrigger = !!i389[1]
  request.r(i389[2], i389[3], 0, i388, 'material')
  request.r(i389[4], i389[5], 0, i388, 'sharedMesh')
  i388.convex = !!i389[6]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i391 = data
  i390.name = i391[0]
  i390.tagId = i391[1]
  i390.enabled = !!i391[2]
  i390.isStatic = !!i391[3]
  i390.layer = i391[4]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i393 = data
  i392.name = i393[0]
  i392.width = i393[1]
  i392.height = i393[2]
  i392.mipmapCount = i393[3]
  i392.anisoLevel = i393[4]
  i392.filterMode = i393[5]
  i392.hdr = !!i393[6]
  i392.format = i393[7]
  i392.wrapMode = i393[8]
  i392.alphaIsTransparency = !!i393[9]
  i392.alphaSource = i393[10]
  i392.graphicsFormat = i393[11]
  i392.sRGBTexture = !!i393[12]
  i392.desiredColorSpace = i393[13]
  i392.wrapU = i393[14]
  i392.wrapV = i393[15]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i395 = data
  i394.name = i395[0]
  i394.atlasId = i395[1]
  i394.mipmapCount = i395[2]
  i394.hdr = !!i395[3]
  i394.size = i395[4]
  i394.anisoLevel = i395[5]
  i394.filterMode = i395[6]
  var i397 = i395[7]
  var i396 = []
  for(var i = 0; i < i397.length; i += 4) {
    i396.push( UnityEngine.Rect.MinMaxRect(i397[i + 0], i397[i + 1], i397[i + 2], i397[i + 3]) );
  }
  i394.rects = i396
  i394.wrapU = i395[8]
  i394.wrapV = i395[9]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i401 = data
  i400.name = i401[0]
  i400.index = i401[1]
  i400.startup = !!i401[2]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i403 = data
  i402.enabled = !!i403[0]
  i402.aspect = i403[1]
  i402.orthographic = !!i403[2]
  i402.orthographicSize = i403[3]
  i402.backgroundColor = new pc.Color(i403[4], i403[5], i403[6], i403[7])
  i402.nearClipPlane = i403[8]
  i402.farClipPlane = i403[9]
  i402.fieldOfView = i403[10]
  i402.depth = i403[11]
  i402.clearFlags = i403[12]
  i402.cullingMask = i403[13]
  i402.rect = i403[14]
  request.r(i403[15], i403[16], 0, i402, 'targetTexture')
  i402.usePhysicalProperties = !!i403[17]
  i402.focalLength = i403[18]
  i402.sensorSize = new pc.Vec2( i403[19], i403[20] )
  i402.lensShift = new pc.Vec2( i403[21], i403[22] )
  i402.gateFit = i403[23]
  i402.commandBufferCount = i403[24]
  i402.cameraType = i403[25]
  return i402
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i404 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i405 = data
  i404.m_ShowDebugText = !!i405[0]
  i404.m_ShowCameraFrustum = !!i405[1]
  i404.m_IgnoreTimeScale = !!i405[2]
  request.r(i405[3], i405[4], 0, i404, 'm_WorldUpOverride')
  i404.m_UpdateMethod = i405[5]
  i404.m_BlendUpdateMethod = i405[6]
  i404.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i405[7], i404.m_DefaultBlend)
  request.r(i405[8], i405[9], 0, i404, 'm_CustomBlends')
  i404.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i405[10], i404.m_CameraCutEvent)
  i404.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i405[11], i404.m_CameraActivatedEvent)
  return i404
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i406 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i407 = data
  i406.m_Style = i407[0]
  i406.m_Time = i407[1]
  i406.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i407[2] } )
  return i406
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i408 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i409 = data
  i408.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i409[0], i408.m_PersistentCalls)
  return i408
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i411 = data
  var i413 = i411[0]
  var i412 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i413.length; i += 1) {
    i412.add(request.d('UnityEngine.Events.PersistentCall', i413[i + 0]));
  }
  i410.m_Calls = i412
  return i410
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i417 = data
  request.r(i417[0], i417[1], 0, i416, 'm_Target')
  i416.m_TargetAssemblyTypeName = i417[2]
  i416.m_MethodName = i417[3]
  i416.m_Mode = i417[4]
  i416.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i417[5], i416.m_Arguments)
  i416.m_CallState = i417[6]
  return i416
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i418 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i419 = data
  i418.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i419[0], i418.m_PersistentCalls)
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i421 = data
  i420.enabled = !!i421[0]
  i420.type = i421[1]
  i420.color = new pc.Color(i421[2], i421[3], i421[4], i421[5])
  i420.cullingMask = i421[6]
  i420.intensity = i421[7]
  i420.range = i421[8]
  i420.spotAngle = i421[9]
  i420.shadows = i421[10]
  i420.shadowNormalBias = i421[11]
  i420.shadowBias = i421[12]
  i420.shadowStrength = i421[13]
  i420.shadowResolution = i421[14]
  i420.lightmapBakeType = i421[15]
  i420.renderMode = i421[16]
  request.r(i421[17], i421[18], 0, i420, 'cookie')
  i420.cookieSize = i421[19]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i423 = data
  i422.mass = i423[0]
  i422.drag = i423[1]
  i422.angularDrag = i423[2]
  i422.useGravity = !!i423[3]
  i422.isKinematic = !!i423[4]
  i422.constraints = i423[5]
  i422.maxAngularVelocity = i423[6]
  i422.collisionDetectionMode = i423[7]
  i422.interpolation = i423[8]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i425 = data
  i424.center = new pc.Vec3( i425[0], i425[1], i425[2] )
  i424.size = new pc.Vec3( i425[3], i425[4], i425[5] )
  i424.enabled = !!i425[6]
  i424.isTrigger = !!i425[7]
  request.r(i425[8], i425[9], 0, i424, 'material')
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.WheelCollider"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.WheelCollider' )
  var i427 = data
  i426.enabled = !!i427[0]
  i426.center = new pc.Vec3( i427[1], i427[2], i427[3] )
  i426.radius = i427[4]
  i426.mass = i427[5]
  i426.suspensionDistance = i427[6]
  i426.forceAppPointDistance = i427[7]
  i426.suspensionSpring = request.d('UnityEngine.JointSpring', i427[8], i426.suspensionSpring)
  i426.forwardFriction = request.d('UnityEngine.WheelFrictionCurve', i427[9], i426.forwardFriction)
  i426.sidewaysFriction = request.d('UnityEngine.WheelFrictionCurve', i427[10], i426.sidewaysFriction)
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint' )
  var i429 = data
  i428.angularXDrive = request.d('UnityEngine.JointDrive', i429[0], i428.angularXDrive)
  i428.angularXLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i429[1], i428.angularXLimitSpring)
  i428.angularXMotion = i429[2]
  i428.angularYLimit = request.d('UnityEngine.SoftJointLimit', i429[3], i428.angularYLimit)
  i428.angularYMotion = i429[4]
  i428.angularYZDrive = request.d('UnityEngine.JointDrive', i429[5], i428.angularYZDrive)
  i428.angularYZLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i429[6], i428.angularYZLimitSpring)
  i428.angularZLimit = request.d('UnityEngine.SoftJointLimit', i429[7], i428.angularZLimit)
  i428.angularZMotion = i429[8]
  i428.configuredInWorldSpace = !!i429[9]
  i428.highAngularXLimit = request.d('UnityEngine.SoftJointLimit', i429[10], i428.highAngularXLimit)
  i428.linearLimit = request.d('UnityEngine.SoftJointLimit', i429[11], i428.linearLimit)
  i428.linearLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i429[12], i428.linearLimitSpring)
  i428.lowAngularXLimit = request.d('UnityEngine.SoftJointLimit', i429[13], i428.lowAngularXLimit)
  i428.rotationDriveMode = i429[14]
  i428.secondaryAxis = new pc.Vec3( i429[15], i429[16], i429[17] )
  i428.slerpDrive = request.d('UnityEngine.JointDrive', i429[18], i428.slerpDrive)
  i428.swapBodies = !!i429[19]
  i428.targetAngularVelocity = new pc.Vec3( i429[20], i429[21], i429[22] )
  i428.targetPosition = new pc.Vec3( i429[23], i429[24], i429[25] )
  i428.targetRotation = new pc.Quat(i429[26], i429[27], i429[28], i429[29])
  i428.targetVelocity = new pc.Vec3( i429[30], i429[31], i429[32] )
  i428.xDrive = request.d('UnityEngine.JointDrive', i429[33], i428.xDrive)
  i428.xMotion = i429[34]
  i428.yDrive = request.d('UnityEngine.JointDrive', i429[35], i428.yDrive)
  i428.yMotion = i429[36]
  i428.zDrive = request.d('UnityEngine.JointDrive', i429[37], i428.zDrive)
  i428.zMotion = i429[38]
  request.r(i429[39], i429[40], 0, i428, 'connectedBody')
  i428.axis = new pc.Vec3( i429[41], i429[42], i429[43] )
  i428.anchor = new pc.Vec3( i429[44], i429[45], i429[46] )
  i428.connectedAnchor = new pc.Vec3( i429[47], i429[48], i429[49] )
  i428.autoConfigureConnectedAnchor = !!i429[50]
  i428.massScale = i429[51]
  i428.connectedMassScale = i429[52]
  i428.enableCollision = !!i429[53]
  i428.breakForce = i429[54]
  i428.breakTorque = i429[55]
  return i428
}

Deserializers["CheckpointManager"] = function (request, data, root) {
  var i430 = root || request.c( 'CheckpointManager' )
  var i431 = data
  var i433 = i431[0]
  var i432 = []
  for(var i = 0; i < i433.length; i += 2) {
  request.r(i433[i + 0], i433[i + 1], 2, i432, '')
  }
  i430.checkpoints = i432
  return i430
}

Deserializers["AICarRigidbodyController"] = function (request, data, root) {
  var i436 = root || request.c( 'AICarRigidbodyController' )
  var i437 = data
  i436.moveForce = i437[0]
  i436.maxSpeed = i437[1]
  i436.turnSpeed = i437[2]
  i436.checkpointRadius = i437[3]
  i436.slowTurnThreshold = i437[4]
  i436.driftForce = i437[5]
  i436.obstacleDetectionRange = i437[6]
  i436.avoidanceForce = i437[7]
  i436.obstacleLayers = UnityEngine.LayerMask.FromIntegerValue( i437[8] )
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i439 = data
  i438.enabled = !!i439[0]
  i438.isTrigger = !!i439[1]
  request.r(i439[2], i439[3], 0, i438, 'material')
  i438.center = new pc.Vec3( i439[4], i439[5], i439[6] )
  i438.radius = i439[7]
  return i438
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i440 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'm_LookAt')
  request.r(i441[2], i441[3], 0, i440, 'm_Follow')
  i440.m_Lens = request.d('Cinemachine.LensSettings', i441[4], i440.m_Lens)
  i440.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i441[5], i440.m_Transitions)
  var i443 = i441[6]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( i443[i + 0] );
  }
  i440.m_ExcludedPropertiesInInspector = i442
  var i445 = i441[7]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( i445[i + 0] );
  }
  i440.m_LockStageInInspector = i444
  i440.m_Priority = i441[8]
  i440.m_StandbyUpdate = i441[9]
  i440.m_LegacyBlendHint = i441[10]
  request.r(i441[11], i441[12], 0, i440, 'm_ComponentOwner')
  i440.m_StreamingVersion = i441[13]
  return i440
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i446 = root || request.c( 'Cinemachine.LensSettings' )
  var i447 = data
  i446.FieldOfView = i447[0]
  i446.OrthographicSize = i447[1]
  i446.NearClipPlane = i447[2]
  i446.FarClipPlane = i447[3]
  i446.Dutch = i447[4]
  i446.ModeOverride = i447[5]
  i446.LensShift = new pc.Vec2( i447[6], i447[7] )
  i446.GateFit = i447[8]
  i446.FocusDistance = i447[9]
  i446.m_SensorSize = new pc.Vec2( i447[10], i447[11] )
  return i446
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i448 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i449 = data
  i448.m_BlendHint = i449[0]
  i448.m_InheritPosition = !!i449[1]
  i448.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i449[2], i448.m_OnCameraLive)
  return i448
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i454 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i455 = data
  return i454
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i456 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i457 = data
  i456.m_TrackedObjectOffset = new pc.Vec3( i457[0], i457[1], i457[2] )
  i456.m_LookaheadTime = i457[3]
  i456.m_LookaheadSmoothing = i457[4]
  i456.m_LookaheadIgnoreY = !!i457[5]
  i456.m_HorizontalDamping = i457[6]
  i456.m_VerticalDamping = i457[7]
  i456.m_ScreenX = i457[8]
  i456.m_ScreenY = i457[9]
  i456.m_DeadZoneWidth = i457[10]
  i456.m_DeadZoneHeight = i457[11]
  i456.m_SoftZoneWidth = i457[12]
  i456.m_SoftZoneHeight = i457[13]
  i456.m_BiasX = i457[14]
  i456.m_BiasY = i457[15]
  i456.m_CenterOnActivate = !!i457[16]
  return i456
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i458 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i459 = data
  i458.m_BindingMode = i459[0]
  i458.m_FollowOffset = new pc.Vec3( i459[1], i459[2], i459[3] )
  i458.m_XDamping = i459[4]
  i458.m_YDamping = i459[5]
  i458.m_ZDamping = i459[6]
  i458.m_AngularDampingMode = i459[7]
  i458.m_PitchDamping = i459[8]
  i458.m_YawDamping = i459[9]
  i458.m_RollDamping = i459[10]
  i458.m_AngularDamping = i459[11]
  return i458
}

Deserializers["PlayerCarController"] = function (request, data, root) {
  var i460 = root || request.c( 'PlayerCarController' )
  var i461 = data
  i460.moveForce = i461[0]
  i460.maxSpeed = i461[1]
  i460.turnSpeed = i461[2]
  i460.maxTurnAngle = i461[3]
  i460.driftThreshold = i461[4]
  i460.driftForce = i461[5]
  i460.obstacleDetectionRange = i461[6]
  i460.avoidanceForce = i461[7]
  i460.obstacleLayers = UnityEngine.LayerMask.FromIntegerValue( i461[8] )
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i463 = data
  i462.ambientIntensity = i463[0]
  i462.reflectionIntensity = i463[1]
  i462.ambientMode = i463[2]
  i462.ambientLight = new pc.Color(i463[3], i463[4], i463[5], i463[6])
  i462.ambientSkyColor = new pc.Color(i463[7], i463[8], i463[9], i463[10])
  i462.ambientGroundColor = new pc.Color(i463[11], i463[12], i463[13], i463[14])
  i462.ambientEquatorColor = new pc.Color(i463[15], i463[16], i463[17], i463[18])
  i462.fogColor = new pc.Color(i463[19], i463[20], i463[21], i463[22])
  i462.fogEndDistance = i463[23]
  i462.fogStartDistance = i463[24]
  i462.fogDensity = i463[25]
  i462.fog = !!i463[26]
  request.r(i463[27], i463[28], 0, i462, 'skybox')
  i462.fogMode = i463[29]
  var i465 = i463[30]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i465[i + 0]) );
  }
  i462.lightmaps = i464
  i462.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i463[31], i462.lightProbes)
  i462.lightmapsMode = i463[32]
  i462.mixedBakeMode = i463[33]
  i462.environmentLightingMode = i463[34]
  i462.ambientProbe = new pc.SphericalHarmonicsL2(i463[35])
  i462.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i463[36])
  i462.useReferenceAmbientProbe = !!i463[37]
  request.r(i463[38], i463[39], 0, i462, 'customReflection')
  request.r(i463[40], i463[41], 0, i462, 'defaultReflection')
  i462.defaultReflectionMode = i463[42]
  i462.defaultReflectionResolution = i463[43]
  i462.sunLightObjectId = i463[44]
  i462.pixelLightCount = i463[45]
  i462.defaultReflectionHDR = !!i463[46]
  i462.hasLightDataAsset = !!i463[47]
  i462.hasManualGenerate = !!i463[48]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i469 = data
  request.r(i469[0], i469[1], 0, i468, 'lightmapColor')
  request.r(i469[2], i469[3], 0, i468, 'lightmapDirection')
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i470 = root || new UnityEngine.LightProbes()
  var i471 = data
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i479 = data
  var i481 = i479[0]
  var i480 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i481.length; i += 1) {
    i480.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i481[i + 0]));
  }
  i478.ShaderCompilationErrors = i480
  i478.name = i479[1]
  i478.guid = i479[2]
  var i483 = i479[3]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( i483[i + 0] );
  }
  i478.shaderDefinedKeywords = i482
  var i485 = i479[4]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i485[i + 0]) );
  }
  i478.passes = i484
  var i487 = i479[5]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i487[i + 0]) );
  }
  i478.usePasses = i486
  var i489 = i479[6]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i489[i + 0]) );
  }
  i478.defaultParameterValues = i488
  request.r(i479[7], i479[8], 0, i478, 'unityFallbackShader')
  i478.readDepth = !!i479[9]
  i478.isCreatedByShaderGraph = !!i479[10]
  i478.compiled = !!i479[11]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i493 = data
  i492.shaderName = i493[0]
  i492.errorMessage = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i496 = root || new pc.UnityShaderPass()
  var i497 = data
  i496.id = i497[0]
  i496.subShaderIndex = i497[1]
  i496.name = i497[2]
  i496.passType = i497[3]
  i496.grabPassTextureName = i497[4]
  i496.usePass = !!i497[5]
  i496.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i497[6], i496.zTest)
  i496.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i497[7], i496.zWrite)
  i496.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i497[8], i496.culling)
  i496.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i497[9], i496.blending)
  i496.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i497[10], i496.alphaBlending)
  i496.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i497[11], i496.colorWriteMask)
  i496.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i497[12], i496.offsetUnits)
  i496.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i497[13], i496.offsetFactor)
  i496.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i497[14], i496.stencilRef)
  i496.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i497[15], i496.stencilReadMask)
  i496.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i497[16], i496.stencilWriteMask)
  i496.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i497[17], i496.stencilOp)
  i496.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i497[18], i496.stencilOpFront)
  i496.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i497[19], i496.stencilOpBack)
  var i499 = i497[20]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i499[i + 0]) );
  }
  i496.tags = i498
  var i501 = i497[21]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( i501[i + 0] );
  }
  i496.passDefinedKeywords = i500
  var i503 = i497[22]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i503[i + 0]) );
  }
  i496.passDefinedKeywordGroups = i502
  var i505 = i497[23]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i505[i + 0]) );
  }
  i496.variants = i504
  var i507 = i497[24]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i507[i + 0]) );
  }
  i496.excludedVariants = i506
  i496.hasDepthReader = !!i497[25]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i509 = data
  i508.val = i509[0]
  i508.name = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i511 = data
  i510.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[0], i510.src)
  i510.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[1], i510.dst)
  i510.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[2], i510.op)
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i513 = data
  i512.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i513[0], i512.pass)
  i512.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i513[1], i512.fail)
  i512.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i513[2], i512.zFail)
  i512.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i513[3], i512.comp)
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i517 = data
  i516.name = i517[0]
  i516.value = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i521 = data
  var i523 = i521[0]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( i523[i + 0] );
  }
  i520.keywords = i522
  i520.hasDiscard = !!i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i527 = data
  i526.passId = i527[0]
  i526.subShaderIndex = i527[1]
  var i529 = i527[2]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( i529[i + 0] );
  }
  i526.keywords = i528
  i526.vertexProgram = i527[3]
  i526.fragmentProgram = i527[4]
  i526.exportedForWebGl2 = !!i527[5]
  i526.readDepth = !!i527[6]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'shader')
  i532.pass = i533[2]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i537 = data
  i536.name = i537[0]
  i536.type = i537[1]
  i536.value = new pc.Vec4( i537[2], i537[3], i537[4], i537[5] )
  i536.textureValue = i537[6]
  i536.shaderPropertyFlag = i537[7]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i539 = data
  var i541 = i539[0]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i541[i + 0]) );
  }
  i538.files = i540
  i538.componentToPrefabIds = i539[1]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i545 = data
  i544.path = i545[0]
  request.r(i545[1], i545[2], 0, i544, 'unityObject')
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i547 = data
  var i549 = i547[0]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i549[i + 0]) );
  }
  i546.scriptsExecutionOrder = i548
  var i551 = i547[1]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i551[i + 0]) );
  }
  i546.sortingLayers = i550
  var i553 = i547[2]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i553[i + 0]) );
  }
  i546.cullingLayers = i552
  i546.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i547[3], i546.timeSettings)
  i546.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i547[4], i546.physicsSettings)
  i546.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i547[5], i546.physics2DSettings)
  i546.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i547[6], i546.qualitySettings)
  i546.enableRealtimeShadows = !!i547[7]
  i546.enableAutoInstancing = !!i547[8]
  i546.enableDynamicBatching = !!i547[9]
  i546.lightmapEncodingQuality = i547[10]
  i546.desiredColorSpace = i547[11]
  var i555 = i547[12]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( i555[i + 0] );
  }
  i546.allTags = i554
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i559 = data
  i558.name = i559[0]
  i558.value = i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i563 = data
  i562.id = i563[0]
  i562.name = i563[1]
  i562.value = i563[2]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i567 = data
  i566.id = i567[0]
  i566.name = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i569 = data
  i568.fixedDeltaTime = i569[0]
  i568.maximumDeltaTime = i569[1]
  i568.timeScale = i569[2]
  i568.maximumParticleTimestep = i569[3]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i571 = data
  i570.gravity = new pc.Vec3( i571[0], i571[1], i571[2] )
  i570.defaultSolverIterations = i571[3]
  i570.bounceThreshold = i571[4]
  i570.autoSyncTransforms = !!i571[5]
  i570.autoSimulation = !!i571[6]
  var i573 = i571[7]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i573[i + 0]) );
  }
  i570.collisionMatrix = i572
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i577 = data
  i576.enabled = !!i577[0]
  i576.layerId = i577[1]
  i576.otherLayerId = i577[2]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'material')
  i578.gravity = new pc.Vec2( i579[2], i579[3] )
  i578.positionIterations = i579[4]
  i578.velocityIterations = i579[5]
  i578.velocityThreshold = i579[6]
  i578.maxLinearCorrection = i579[7]
  i578.maxAngularCorrection = i579[8]
  i578.maxTranslationSpeed = i579[9]
  i578.maxRotationSpeed = i579[10]
  i578.baumgarteScale = i579[11]
  i578.baumgarteTOIScale = i579[12]
  i578.timeToSleep = i579[13]
  i578.linearSleepTolerance = i579[14]
  i578.angularSleepTolerance = i579[15]
  i578.defaultContactOffset = i579[16]
  i578.autoSimulation = !!i579[17]
  i578.queriesHitTriggers = !!i579[18]
  i578.queriesStartInColliders = !!i579[19]
  i578.callbacksOnDisable = !!i579[20]
  i578.reuseCollisionCallbacks = !!i579[21]
  i578.autoSyncTransforms = !!i579[22]
  var i581 = i579[23]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i581[i + 0]) );
  }
  i578.collisionMatrix = i580
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i585 = data
  i584.enabled = !!i585[0]
  i584.layerId = i585[1]
  i584.otherLayerId = i585[2]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i587 = data
  var i589 = i587[0]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i589[i + 0]) );
  }
  i586.qualityLevels = i588
  var i591 = i587[1]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( i591[i + 0] );
  }
  i586.names = i590
  i586.shadows = i587[2]
  i586.anisotropicFiltering = i587[3]
  i586.antiAliasing = i587[4]
  i586.lodBias = i587[5]
  i586.shadowCascades = i587[6]
  i586.shadowDistance = i587[7]
  i586.shadowmaskMode = i587[8]
  i586.shadowProjection = i587[9]
  i586.shadowResolution = i587[10]
  i586.softParticles = !!i587[11]
  i586.softVegetation = !!i587[12]
  i586.activeColorSpace = i587[13]
  i586.desiredColorSpace = i587[14]
  i586.masterTextureLimit = i587[15]
  i586.maxQueuedFrames = i587[16]
  i586.particleRaycastBudget = i587[17]
  i586.pixelLightCount = i587[18]
  i586.realtimeReflectionProbes = !!i587[19]
  i586.shadowCascade2Split = i587[20]
  i586.shadowCascade4Split = new pc.Vec3( i587[21], i587[22], i587[23] )
  i586.streamingMipmapsActive = !!i587[24]
  i586.vSyncCount = i587[25]
  i586.asyncUploadBufferSize = i587[26]
  i586.asyncUploadTimeSlice = i587[27]
  i586.billboardsFaceCameraPosition = !!i587[28]
  i586.shadowNearPlaneOffset = i587[29]
  i586.streamingMipmapsMemoryBudget = i587[30]
  i586.maximumLODLevel = i587[31]
  i586.streamingMipmapsAddAllCameras = !!i587[32]
  i586.streamingMipmapsMaxLevelReduction = i587[33]
  i586.streamingMipmapsRenderersPerFrame = i587[34]
  i586.resolutionScalingFixedDPIFactor = i587[35]
  i586.streamingMipmapsMaxFileIORequests = i587[36]
  i586.currentQualityLevel = i587[37]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i597 = data
  i596.weight = i597[0]
  i596.vertices = i597[1]
  i596.normals = i597[2]
  i596.tangents = i597[3]
  return i596
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'm_ObjectArgument')
  i598.m_ObjectArgumentAssemblyTypeName = i599[2]
  i598.m_IntArgument = i599[3]
  i598.m_FloatArgument = i599[4]
  i598.m_StringArgument = i599[5]
  i598.m_BoolArgument = !!i599[6]
  return i598
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.WheelCollider":{"enabled":0,"center":1,"radius":4,"mass":5,"suspensionDistance":6,"forceAppPointDistance":7,"suspensionSpring":8,"forwardFriction":9,"sidewaysFriction":10},"Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint":{"angularXDrive":0,"angularXLimitSpring":1,"angularXMotion":2,"angularYLimit":3,"angularYMotion":4,"angularYZDrive":5,"angularYZLimitSpring":6,"angularZLimit":7,"angularZMotion":8,"configuredInWorldSpace":9,"highAngularXLimit":10,"linearLimit":11,"linearLimitSpring":12,"lowAngularXLimit":13,"rotationDriveMode":14,"secondaryAxis":15,"slerpDrive":18,"swapBodies":19,"targetAngularVelocity":20,"targetPosition":23,"targetRotation":26,"targetVelocity":30,"xDrive":33,"xMotion":34,"yDrive":35,"yMotion":36,"zDrive":37,"zMotion":38,"connectedBody":39,"axis":41,"anchor":44,"connectedAnchor":47,"autoConfigureConnectedAnchor":50,"massScale":51,"connectedMassScale":52,"enableCollision":53,"breakForce":54,"breakTorque":55},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"26":[27],"28":[27],"29":[27],"30":[27],"31":[27],"32":[27],"33":[34],"35":[8],"36":[13],"37":[13],"38":[13],"39":[13],"40":[13],"41":[13],"16":[13],"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[43],"50":[43],"51":[43],"52":[43],"53":[43],"54":[43],"55":[43],"56":[8],"57":[4],"58":[59],"60":[59],"61":[62],"18":[13],"24":[13],"63":[62],"64":[62],"65":[61],"66":[67,62],"68":[62],"69":[61],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[62],"76":[62],"77":[62],"78":[62],"79":[67,62],"80":[62],"81":[62],"82":[62],"83":[62],"84":[67,62],"85":[62],"86":[87],"88":[87],"89":[87],"90":[87],"91":[8],"92":[8],"93":[62],"94":[4,62],"95":[62,67],"96":[62],"97":[67,62],"98":[4],"99":[67,62],"100":[62],"101":[102],"103":[102],"104":[8],"105":[106],"107":[102]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","Cinemachine.CinemachineBrain","UnityEngine.Light","UnityEngine.Rigidbody","UnityEngine.BoxCollider","UnityEngine.WheelCollider","UnityEngine.ConfigurableJoint","CheckpointManager","AICarRigidbodyController","UnityEngine.SphereCollider","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","PlayerCarController","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "INDIEZ";

Deserializers.lunaInitializationTime = "04/29/2025 09:21:16";

Deserializers.lunaDaysRunning = "2.8";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "29436";

Deserializers.projectId = "c15883569d6bc4f039b50232f623b7dd";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.10.3\ncom.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "2002";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2680";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.INDIEZ";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "9e14ff7c-4943-4abd-9782-b93fcee6c5f6";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

