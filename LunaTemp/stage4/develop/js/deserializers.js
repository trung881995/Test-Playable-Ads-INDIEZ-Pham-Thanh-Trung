var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.JointSpring' )
  var i389 = data
  i388.spring = i389[0]
  i388.damper = i389[1]
  i388.targetPosition = i389[2]
  return i388
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.JointMotor' )
  var i391 = data
  i390.m_TargetVelocity = i391[0]
  i390.m_Force = i391[1]
  i390.m_FreeSpin = i391[2]
  return i390
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.JointLimits' )
  var i393 = data
  i392.m_Min = i393[0]
  i392.m_Max = i393[1]
  i392.m_Bounciness = i393[2]
  i392.m_BounceMinVelocity = i393[3]
  i392.m_ContactDistance = i393[4]
  i392.minBounce = i393[5]
  i392.maxBounce = i393[6]
  return i392
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.JointDrive' )
  var i395 = data
  i394.m_PositionSpring = i395[0]
  i394.m_PositionDamper = i395[1]
  i394.m_MaximumForce = i395[2]
  i394.m_UseAcceleration = i395[3]
  return i394
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i397 = data
  i396.m_Spring = i397[0]
  i396.m_Damper = i397[1]
  return i396
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i399 = data
  i398.m_Limit = i399[0]
  i398.m_Bounciness = i399[1]
  i398.m_ContactDistance = i399[2]
  return i398
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i401 = data
  i400.m_ExtremumSlip = i401[0]
  i400.m_ExtremumValue = i401[1]
  i400.m_AsymptoteSlip = i401[2]
  i400.m_AsymptoteValue = i401[3]
  i400.m_Stiffness = i401[4]
  return i400
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i403 = data
  i402.m_LowerAngle = i403[0]
  i402.m_UpperAngle = i403[1]
  return i402
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i404 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i405 = data
  i404.m_MotorSpeed = i405[0]
  i404.m_MaximumMotorTorque = i405[1]
  return i404
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i407 = data
  i406.m_DampingRatio = i407[0]
  i406.m_Frequency = i407[1]
  i406.m_Angle = i407[2]
  return i406
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i409 = data
  i408.m_LowerTranslation = i409[0]
  i408.m_UpperTranslation = i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i411 = data
  i410.position = new pc.Vec3( i411[0], i411[1], i411[2] )
  i410.scale = new pc.Vec3( i411[3], i411[4], i411[5] )
  i410.rotation = new pc.Quat(i411[6], i411[7], i411[8], i411[9])
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i413 = data
  i412.mass = i413[0]
  i412.drag = i413[1]
  i412.angularDrag = i413[2]
  i412.useGravity = !!i413[3]
  i412.isKinematic = !!i413[4]
  i412.constraints = i413[5]
  i412.maxAngularVelocity = i413[6]
  i412.collisionDetectionMode = i413[7]
  i412.interpolation = i413[8]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i415 = data
  request.r(i415[0], i415[1], 0, i414, 'sharedMesh')
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i417 = data
  request.r(i417[0], i417[1], 0, i416, 'additionalVertexStreams')
  i416.enabled = !!i417[2]
  request.r(i417[3], i417[4], 0, i416, 'sharedMaterial')
  var i419 = i417[5]
  var i418 = []
  for(var i = 0; i < i419.length; i += 2) {
  request.r(i419[i + 0], i419[i + 1], 2, i418, '')
  }
  i416.sharedMaterials = i418
  i416.receiveShadows = !!i417[6]
  i416.shadowCastingMode = i417[7]
  i416.sortingLayerID = i417[8]
  i416.sortingOrder = i417[9]
  i416.lightmapIndex = i417[10]
  i416.lightmapSceneIndex = i417[11]
  i416.lightmapScaleOffset = new pc.Vec4( i417[12], i417[13], i417[14], i417[15] )
  i416.lightProbeUsage = i417[16]
  i416.reflectionProbeUsage = i417[17]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i423 = data
  i422.center = new pc.Vec3( i423[0], i423[1], i423[2] )
  i422.size = new pc.Vec3( i423[3], i423[4], i423[5] )
  i422.enabled = !!i423[6]
  i422.isTrigger = !!i423[7]
  request.r(i423[8], i423[9], 0, i422, 'material')
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i425 = data
  i424.name = i425[0]
  i424.tagId = i425[1]
  i424.enabled = !!i425[2]
  i424.isStatic = !!i425[3]
  i424.layer = i425[4]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i429 = data
  i428.name = i429[0]
  i428.halfPrecision = !!i429[1]
  i428.useUInt32IndexFormat = !!i429[2]
  i428.vertexCount = i429[3]
  i428.aabb = i429[4]
  var i431 = i429[5]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( !!i431[i + 0] );
  }
  i428.streams = i430
  i428.vertices = i429[6]
  var i433 = i429[7]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i433[i + 0]) );
  }
  i428.subMeshes = i432
  var i435 = i429[8]
  var i434 = []
  for(var i = 0; i < i435.length; i += 16) {
    i434.push( new pc.Mat4().setData(i435[i + 0], i435[i + 1], i435[i + 2], i435[i + 3],  i435[i + 4], i435[i + 5], i435[i + 6], i435[i + 7],  i435[i + 8], i435[i + 9], i435[i + 10], i435[i + 11],  i435[i + 12], i435[i + 13], i435[i + 14], i435[i + 15]) );
  }
  i428.bindposes = i434
  var i437 = i429[9]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i437[i + 0]) );
  }
  i428.blendShapes = i436
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i443 = data
  i442.triangles = i443[0]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i449 = data
  i448.name = i449[0]
  var i451 = i449[1]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i451[i + 0]) );
  }
  i448.frames = i450
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i452 = root || new pc.UnityMaterial()
  var i453 = data
  i452.name = i453[0]
  request.r(i453[1], i453[2], 0, i452, 'shader')
  i452.renderQueue = i453[3]
  i452.enableInstancing = !!i453[4]
  var i455 = i453[5]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i455[i + 0]) );
  }
  i452.floatParameters = i454
  var i457 = i453[6]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i457[i + 0]) );
  }
  i452.colorParameters = i456
  var i459 = i453[7]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i459[i + 0]) );
  }
  i452.vectorParameters = i458
  var i461 = i453[8]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i461[i + 0]) );
  }
  i452.textureParameters = i460
  var i463 = i453[9]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i463[i + 0]) );
  }
  i452.materialFlags = i462
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i467 = data
  i466.name = i467[0]
  i466.value = i467[1]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i471 = data
  i470.name = i471[0]
  i470.value = new pc.Color(i471[1], i471[2], i471[3], i471[4])
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i475 = data
  i474.name = i475[0]
  i474.value = new pc.Vec4( i475[1], i475[2], i475[3], i475[4] )
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i479 = data
  i478.name = i479[0]
  request.r(i479[1], i479[2], 0, i478, 'value')
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i483 = data
  i482.name = i483[0]
  i482.enabled = !!i483[1]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i485 = data
  i484.name = i485[0]
  i484.width = i485[1]
  i484.height = i485[2]
  i484.mipmapCount = i485[3]
  i484.anisoLevel = i485[4]
  i484.filterMode = i485[5]
  i484.hdr = !!i485[6]
  i484.format = i485[7]
  i484.wrapMode = i485[8]
  i484.alphaIsTransparency = !!i485[9]
  i484.alphaSource = i485[10]
  i484.graphicsFormat = i485[11]
  i484.sRGBTexture = !!i485[12]
  i484.desiredColorSpace = i485[13]
  i484.wrapU = i485[14]
  i484.wrapV = i485[15]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i487 = data
  i486.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i487[0], i486.main)
  i486.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i487[1], i486.colorBySpeed)
  i486.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i487[2], i486.colorOverLifetime)
  i486.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i487[3], i486.emission)
  i486.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i487[4], i486.rotationBySpeed)
  i486.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i487[5], i486.rotationOverLifetime)
  i486.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i487[6], i486.shape)
  i486.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i487[7], i486.sizeBySpeed)
  i486.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i487[8], i486.sizeOverLifetime)
  i486.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i487[9], i486.textureSheetAnimation)
  i486.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i487[10], i486.velocityOverLifetime)
  i486.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i487[11], i486.noise)
  i486.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i487[12], i486.inheritVelocity)
  i486.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i487[13], i486.forceOverLifetime)
  i486.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i487[14], i486.limitVelocityOverLifetime)
  i486.useAutoRandomSeed = !!i487[15]
  i486.randomSeed = i487[16]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i488 = root || new pc.ParticleSystemMain()
  var i489 = data
  i488.duration = i489[0]
  i488.loop = !!i489[1]
  i488.prewarm = !!i489[2]
  i488.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[3], i488.startDelay)
  i488.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[4], i488.startLifetime)
  i488.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[5], i488.startSpeed)
  i488.startSize3D = !!i489[6]
  i488.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[7], i488.startSizeX)
  i488.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[8], i488.startSizeY)
  i488.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[9], i488.startSizeZ)
  i488.startRotation3D = !!i489[10]
  i488.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[11], i488.startRotationX)
  i488.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[12], i488.startRotationY)
  i488.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[13], i488.startRotationZ)
  i488.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i489[14], i488.startColor)
  i488.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[15], i488.gravityModifier)
  i488.simulationSpace = i489[16]
  request.r(i489[17], i489[18], 0, i488, 'customSimulationSpace')
  i488.simulationSpeed = i489[19]
  i488.useUnscaledTime = !!i489[20]
  i488.scalingMode = i489[21]
  i488.playOnAwake = !!i489[22]
  i488.maxParticles = i489[23]
  i488.emitterVelocityMode = i489[24]
  i488.stopAction = i489[25]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i490 = root || new pc.MinMaxCurve()
  var i491 = data
  i490.mode = i491[0]
  i490.curveMin = new pc.AnimationCurve( { keys_flow: i491[1] } )
  i490.curveMax = new pc.AnimationCurve( { keys_flow: i491[2] } )
  i490.curveMultiplier = i491[3]
  i490.constantMin = i491[4]
  i490.constantMax = i491[5]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i492 = root || new pc.MinMaxGradient()
  var i493 = data
  i492.mode = i493[0]
  i492.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i493[1], i492.gradientMin)
  i492.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i493[2], i492.gradientMax)
  i492.colorMin = new pc.Color(i493[3], i493[4], i493[5], i493[6])
  i492.colorMax = new pc.Color(i493[7], i493[8], i493[9], i493[10])
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i495 = data
  i494.mode = i495[0]
  var i497 = i495[1]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i497[i + 0]) );
  }
  i494.colorKeys = i496
  var i499 = i495[2]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i499[i + 0]) );
  }
  i494.alphaKeys = i498
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i500 = root || new pc.ParticleSystemColorBySpeed()
  var i501 = data
  i500.enabled = !!i501[0]
  i500.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i501[1], i500.color)
  i500.range = new pc.Vec2( i501[2], i501[3] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i505 = data
  i504.color = new pc.Color(i505[0], i505[1], i505[2], i505[3])
  i504.time = i505[4]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i509 = data
  i508.alpha = i509[0]
  i508.time = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i510 = root || new pc.ParticleSystemColorOverLifetime()
  var i511 = data
  i510.enabled = !!i511[0]
  i510.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i511[1], i510.color)
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i512 = root || new pc.ParticleSystemEmitter()
  var i513 = data
  i512.enabled = !!i513[0]
  i512.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[1], i512.rateOverTime)
  i512.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[2], i512.rateOverDistance)
  var i515 = i513[3]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i515[i + 0]) );
  }
  i512.bursts = i514
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i518 = root || new pc.ParticleSystemBurst()
  var i519 = data
  i518.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[0], i518.count)
  i518.cycleCount = i519[1]
  i518.minCount = i519[2]
  i518.maxCount = i519[3]
  i518.repeatInterval = i519[4]
  i518.time = i519[5]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemRotationBySpeed()
  var i521 = data
  i520.enabled = !!i521[0]
  i520.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[1], i520.x)
  i520.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[2], i520.y)
  i520.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[3], i520.z)
  i520.separateAxes = !!i521[4]
  i520.range = new pc.Vec2( i521[5], i521[6] )
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemRotationOverLifetime()
  var i523 = data
  i522.enabled = !!i523[0]
  i522.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[1], i522.x)
  i522.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[2], i522.y)
  i522.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[3], i522.z)
  i522.separateAxes = !!i523[4]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i524 = root || new pc.ParticleSystemShape()
  var i525 = data
  i524.enabled = !!i525[0]
  i524.shapeType = i525[1]
  i524.randomDirectionAmount = i525[2]
  i524.sphericalDirectionAmount = i525[3]
  i524.randomPositionAmount = i525[4]
  i524.alignToDirection = !!i525[5]
  i524.radius = i525[6]
  i524.radiusMode = i525[7]
  i524.radiusSpread = i525[8]
  i524.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[9], i524.radiusSpeed)
  i524.radiusThickness = i525[10]
  i524.angle = i525[11]
  i524.length = i525[12]
  i524.boxThickness = new pc.Vec3( i525[13], i525[14], i525[15] )
  i524.meshShapeType = i525[16]
  request.r(i525[17], i525[18], 0, i524, 'mesh')
  request.r(i525[19], i525[20], 0, i524, 'meshRenderer')
  request.r(i525[21], i525[22], 0, i524, 'skinnedMeshRenderer')
  i524.useMeshMaterialIndex = !!i525[23]
  i524.meshMaterialIndex = i525[24]
  i524.useMeshColors = !!i525[25]
  i524.normalOffset = i525[26]
  i524.arc = i525[27]
  i524.arcMode = i525[28]
  i524.arcSpread = i525[29]
  i524.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[30], i524.arcSpeed)
  i524.donutRadius = i525[31]
  i524.position = new pc.Vec3( i525[32], i525[33], i525[34] )
  i524.rotation = new pc.Vec3( i525[35], i525[36], i525[37] )
  i524.scale = new pc.Vec3( i525[38], i525[39], i525[40] )
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i526 = root || new pc.ParticleSystemSizeBySpeed()
  var i527 = data
  i526.enabled = !!i527[0]
  i526.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[1], i526.x)
  i526.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[2], i526.y)
  i526.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[3], i526.z)
  i526.separateAxes = !!i527[4]
  i526.range = new pc.Vec2( i527[5], i527[6] )
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i528 = root || new pc.ParticleSystemSizeOverLifetime()
  var i529 = data
  i528.enabled = !!i529[0]
  i528.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[1], i528.x)
  i528.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[2], i528.y)
  i528.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[3], i528.z)
  i528.separateAxes = !!i529[4]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i530 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i531 = data
  i530.enabled = !!i531[0]
  i530.mode = i531[1]
  i530.animation = i531[2]
  i530.numTilesX = i531[3]
  i530.numTilesY = i531[4]
  i530.useRandomRow = !!i531[5]
  i530.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[6], i530.frameOverTime)
  i530.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[7], i530.startFrame)
  i530.cycleCount = i531[8]
  i530.rowIndex = i531[9]
  i530.flipU = i531[10]
  i530.flipV = i531[11]
  i530.spriteCount = i531[12]
  var i533 = i531[13]
  var i532 = []
  for(var i = 0; i < i533.length; i += 2) {
  request.r(i533[i + 0], i533[i + 1], 2, i532, '')
  }
  i530.sprites = i532
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i537 = data
  i536.enabled = !!i537[0]
  i536.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[1], i536.x)
  i536.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[2], i536.y)
  i536.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[3], i536.z)
  i536.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[4], i536.radial)
  i536.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[5], i536.speedModifier)
  i536.space = i537[6]
  i536.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[7], i536.orbitalX)
  i536.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[8], i536.orbitalY)
  i536.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[9], i536.orbitalZ)
  i536.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[10], i536.orbitalOffsetX)
  i536.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[11], i536.orbitalOffsetY)
  i536.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[12], i536.orbitalOffsetZ)
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemNoise()
  var i539 = data
  i538.enabled = !!i539[0]
  i538.separateAxes = !!i539[1]
  i538.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[2], i538.strengthX)
  i538.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[3], i538.strengthY)
  i538.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[4], i538.strengthZ)
  i538.frequency = i539[5]
  i538.damping = !!i539[6]
  i538.octaveCount = i539[7]
  i538.octaveMultiplier = i539[8]
  i538.octaveScale = i539[9]
  i538.quality = i539[10]
  i538.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[11], i538.scrollSpeed)
  i538.scrollSpeedMultiplier = i539[12]
  i538.remapEnabled = !!i539[13]
  i538.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[14], i538.remapX)
  i538.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[15], i538.remapY)
  i538.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[16], i538.remapZ)
  i538.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[17], i538.positionAmount)
  i538.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[18], i538.rotationAmount)
  i538.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[19], i538.sizeAmount)
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i540 = root || new pc.ParticleSystemInheritVelocity()
  var i541 = data
  i540.enabled = !!i541[0]
  i540.mode = i541[1]
  i540.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[2], i540.curve)
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i542 = root || new pc.ParticleSystemForceOverLifetime()
  var i543 = data
  i542.enabled = !!i543[0]
  i542.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[1], i542.x)
  i542.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[2], i542.y)
  i542.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[3], i542.z)
  i542.space = i543[4]
  i542.randomized = !!i543[5]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i544 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i545 = data
  i544.enabled = !!i545[0]
  i544.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[1], i544.limit)
  i544.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[2], i544.limitX)
  i544.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[3], i544.limitY)
  i544.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[4], i544.limitZ)
  i544.dampen = i545[5]
  i544.separateAxes = !!i545[6]
  i544.space = i545[7]
  i544.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[8], i544.drag)
  i544.multiplyDragByParticleSize = !!i545[9]
  i544.multiplyDragByParticleVelocity = !!i545[10]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i547 = data
  i546.enabled = !!i547[0]
  request.r(i547[1], i547[2], 0, i546, 'sharedMaterial')
  var i549 = i547[3]
  var i548 = []
  for(var i = 0; i < i549.length; i += 2) {
  request.r(i549[i + 0], i549[i + 1], 2, i548, '')
  }
  i546.sharedMaterials = i548
  i546.receiveShadows = !!i547[4]
  i546.shadowCastingMode = i547[5]
  i546.sortingLayerID = i547[6]
  i546.sortingOrder = i547[7]
  i546.lightmapIndex = i547[8]
  i546.lightmapSceneIndex = i547[9]
  i546.lightmapScaleOffset = new pc.Vec4( i547[10], i547[11], i547[12], i547[13] )
  i546.lightProbeUsage = i547[14]
  i546.reflectionProbeUsage = i547[15]
  request.r(i547[16], i547[17], 0, i546, 'mesh')
  i546.meshCount = i547[18]
  i546.activeVertexStreamsCount = i547[19]
  i546.alignment = i547[20]
  i546.renderMode = i547[21]
  i546.sortMode = i547[22]
  i546.lengthScale = i547[23]
  i546.velocityScale = i547[24]
  i546.cameraVelocityScale = i547[25]
  i546.normalDirection = i547[26]
  i546.sortingFudge = i547[27]
  i546.minParticleSize = i547[28]
  i546.maxParticleSize = i547[29]
  i546.pivot = new pc.Vec3( i547[30], i547[31], i547[32] )
  request.r(i547[33], i547[34], 0, i546, 'trailMaterial')
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i551 = data
  i550.enabled = !!i551[0]
  i550.type = i551[1]
  i550.color = new pc.Color(i551[2], i551[3], i551[4], i551[5])
  i550.cullingMask = i551[6]
  i550.intensity = i551[7]
  i550.range = i551[8]
  i550.spotAngle = i551[9]
  i550.shadows = i551[10]
  i550.shadowNormalBias = i551[11]
  i550.shadowBias = i551[12]
  i550.shadowStrength = i551[13]
  i550.shadowResolution = i551[14]
  i550.lightmapBakeType = i551[15]
  i550.renderMode = i551[16]
  request.r(i551[17], i551[18], 0, i550, 'cookie')
  i550.cookieSize = i551[19]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i553 = data
  i552.enabled = !!i553[0]
  i552.isTrigger = !!i553[1]
  request.r(i553[2], i553[3], 0, i552, 'material')
  request.r(i553[4], i553[5], 0, i552, 'sharedMesh')
  i552.convex = !!i553[6]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i555 = data
  i554.name = i555[0]
  i554.atlasId = i555[1]
  i554.mipmapCount = i555[2]
  i554.hdr = !!i555[3]
  i554.size = i555[4]
  i554.anisoLevel = i555[5]
  i554.filterMode = i555[6]
  var i557 = i555[7]
  var i556 = []
  for(var i = 0; i < i557.length; i += 4) {
    i556.push( UnityEngine.Rect.MinMaxRect(i557[i + 0], i557[i + 1], i557[i + 2], i557[i + 3]) );
  }
  i554.rects = i556
  i554.wrapU = i555[8]
  i554.wrapV = i555[9]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i561 = data
  i560.name = i561[0]
  i560.index = i561[1]
  i560.startup = !!i561[2]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i563 = data
  i562.enabled = !!i563[0]
  i562.aspect = i563[1]
  i562.orthographic = !!i563[2]
  i562.orthographicSize = i563[3]
  i562.backgroundColor = new pc.Color(i563[4], i563[5], i563[6], i563[7])
  i562.nearClipPlane = i563[8]
  i562.farClipPlane = i563[9]
  i562.fieldOfView = i563[10]
  i562.depth = i563[11]
  i562.clearFlags = i563[12]
  i562.cullingMask = i563[13]
  i562.rect = i563[14]
  request.r(i563[15], i563[16], 0, i562, 'targetTexture')
  i562.usePhysicalProperties = !!i563[17]
  i562.focalLength = i563[18]
  i562.sensorSize = new pc.Vec2( i563[19], i563[20] )
  i562.lensShift = new pc.Vec2( i563[21], i563[22] )
  i562.gateFit = i563[23]
  i562.commandBufferCount = i563[24]
  i562.cameraType = i563[25]
  return i562
}

Deserializers["SmoothFollowCamera"] = function (request, data, root) {
  var i564 = root || request.c( 'SmoothFollowCamera' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'target')
  i564.offset = new pc.Vec3( i565[2], i565[3], i565[4] )
  i564.followSpeed = i565[5]
  i564.rotationSpeed = i565[6]
  return i564
}

Deserializers["CameraSequence"] = function (request, data, root) {
  var i566 = root || request.c( 'CameraSequence' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'pointA')
  request.r(i567[2], i567[3], 0, i566, 'pointB')
  request.r(i567[4], i567[5], 0, i566, 'pointC')
  request.r(i567[6], i567[7], 0, i566, 'smoothFollowCamera')
  i566.rotateDuration = i567[8]
  i566.moveDuration = i567[9]
  i566.rotationSpeed = i567[10]
  request.r(i567[11], i567[12], 0, i566, 'flashEffect')
  return i566
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'm_FirstSelected')
  i568.m_sendNavigationEvents = !!i569[2]
  i568.m_DragThreshold = i569[3]
  return i568
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i571 = data
  i570.m_HorizontalAxis = i571[0]
  i570.m_VerticalAxis = i571[1]
  i570.m_SubmitButton = i571[2]
  i570.m_CancelButton = i571[3]
  i570.m_InputActionsPerSecond = i571[4]
  i570.m_RepeatDelay = i571[5]
  i570.m_ForceModuleActive = !!i571[6]
  i570.m_SendPointerHoverToParent = !!i571[7]
  return i570
}

Deserializers["AICarController"] = function (request, data, root) {
  var i572 = root || request.c( 'AICarController' )
  var i573 = data
  i572.moveSpeed = i573[0]
  i572.maxSpeed = i573[1]
  i572.smoothTime = i573[2]
  i572.turnSpeed = i573[3]
  i572.checkpointRadius = i573[4]
  i572.slowTurnThreshold = i573[5]
  i572.driftIntensity = i573[6]
  i572.obstacleDetectionRange = i573[7]
  i572.avoidanceStrength = i573[8]
  i572.obstacleLayers = UnityEngine.LayerMask.FromIntegerValue( i573[9] )
  request.r(i573[10], i573[11], 0, i572, 'checkpointManager')
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i575 = data
  i574.enabled = !!i575[0]
  i574.center = new pc.Vec3( i575[1], i575[2], i575[3] )
  i574.radius = i575[4]
  i574.height = i575[5]
  i574.minMoveDistance = i575[6]
  i574.skinWidth = i575[7]
  i574.enableOverlapRecovery = !!i575[8]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i577 = data
  i576.enabled = !!i577[0]
  i576.isTrigger = !!i577[1]
  request.r(i577[2], i577[3], 0, i576, 'material')
  i576.center = new pc.Vec3( i577[4], i577[5], i577[6] )
  i576.radius = i577[7]
  return i576
}

Deserializers["PlayerCarController"] = function (request, data, root) {
  var i578 = root || request.c( 'PlayerCarController' )
  var i579 = data
  i578.moveSpeed = i579[0]
  i578.smoothTime = i579[1]
  i578.maxSpeed = i579[2]
  i578.turnSpeed = i579[3]
  i578.maxTurnAngle = i579[4]
  i578.checkpointRadius = i579[5]
  i578.slowTurnThreshold = i579[6]
  i578.driftIntensity = i579[7]
  i578.groundCheckDistance = i579[8]
  i578.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i579[9] )
  request.r(i579[10], i579[11], 0, i578, 'checkpointManager')
  request.r(i579[12], i579[13], 0, i578, 'Arrow')
  return i578
}

Deserializers["CheckpointManager"] = function (request, data, root) {
  var i580 = root || request.c( 'CheckpointManager' )
  var i581 = data
  var i583 = i581[0]
  var i582 = []
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 2, i582, '')
  }
  i580.checkpoints = i582
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i587 = data
  i586.pivot = new pc.Vec2( i587[0], i587[1] )
  i586.anchorMin = new pc.Vec2( i587[2], i587[3] )
  i586.anchorMax = new pc.Vec2( i587[4], i587[5] )
  i586.sizeDelta = new pc.Vec2( i587[6], i587[7] )
  i586.anchoredPosition3D = new pc.Vec3( i587[8], i587[9], i587[10] )
  i586.rotation = new pc.Quat(i587[11], i587[12], i587[13], i587[14])
  i586.scale = new pc.Vec3( i587[15], i587[16], i587[17] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i589 = data
  i588.enabled = !!i589[0]
  i588.planeDistance = i589[1]
  i588.referencePixelsPerUnit = i589[2]
  i588.isFallbackOverlay = !!i589[3]
  i588.renderMode = i589[4]
  i588.renderOrder = i589[5]
  i588.sortingLayerName = i589[6]
  i588.sortingOrder = i589[7]
  i588.scaleFactor = i589[8]
  request.r(i589[9], i589[10], 0, i588, 'worldCamera')
  i588.overrideSorting = !!i589[11]
  i588.pixelPerfect = !!i589[12]
  i588.targetDisplay = i589[13]
  i588.overridePixelPerfect = !!i589[14]
  return i588
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i591 = data
  i590.m_UiScaleMode = i591[0]
  i590.m_ReferencePixelsPerUnit = i591[1]
  i590.m_ScaleFactor = i591[2]
  i590.m_ReferenceResolution = new pc.Vec2( i591[3], i591[4] )
  i590.m_ScreenMatchMode = i591[5]
  i590.m_MatchWidthOrHeight = i591[6]
  i590.m_PhysicalUnit = i591[7]
  i590.m_FallbackScreenDPI = i591[8]
  i590.m_DefaultSpriteDPI = i591[9]
  i590.m_DynamicPixelsPerUnit = i591[10]
  i590.m_PresetInfoIsWorld = !!i591[11]
  return i590
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i593 = data
  i592.m_IgnoreReversedGraphics = !!i593[0]
  i592.m_BlockingObjects = i593[1]
  i592.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i593[2] )
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i595 = data
  i594.cullTransparentMesh = !!i595[0]
  return i594
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.Image' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'm_Sprite')
  i596.m_Type = i597[2]
  i596.m_PreserveAspect = !!i597[3]
  i596.m_FillCenter = !!i597[4]
  i596.m_FillMethod = i597[5]
  i596.m_FillAmount = i597[6]
  i596.m_FillClockwise = !!i597[7]
  i596.m_FillOrigin = i597[8]
  i596.m_UseSpriteMesh = !!i597[9]
  i596.m_PixelsPerUnitMultiplier = i597[10]
  request.r(i597[11], i597[12], 0, i596, 'm_Material')
  i596.m_Maskable = !!i597[13]
  i596.m_Color = new pc.Color(i597[14], i597[15], i597[16], i597[17])
  i596.m_RaycastTarget = !!i597[18]
  i596.m_RaycastPadding = new pc.Vec4( i597[19], i597[20], i597[21], i597[22] )
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i599 = data
  i598.m_Alpha = i599[0]
  i598.m_Interactable = !!i599[1]
  i598.m_BlocksRaycasts = !!i599[2]
  i598.m_IgnoreParentGroups = !!i599[3]
  i598.enabled = !!i599[4]
  return i598
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Text' )
  var i601 = data
  i600.m_FontData = request.d('UnityEngine.UI.FontData', i601[0], i600.m_FontData)
  i600.m_Text = i601[1]
  request.r(i601[2], i601[3], 0, i600, 'm_Material')
  i600.m_Maskable = !!i601[4]
  i600.m_Color = new pc.Color(i601[5], i601[6], i601[7], i601[8])
  i600.m_RaycastTarget = !!i601[9]
  i600.m_RaycastPadding = new pc.Vec4( i601[10], i601[11], i601[12], i601[13] )
  return i600
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.FontData' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'm_Font')
  i602.m_FontSize = i603[2]
  i602.m_FontStyle = i603[3]
  i602.m_BestFit = !!i603[4]
  i602.m_MinSize = i603[5]
  i602.m_MaxSize = i603[6]
  i602.m_Alignment = i603[7]
  i602.m_AlignByGeometry = !!i603[8]
  i602.m_RichText = !!i603[9]
  i602.m_HorizontalOverflow = i603[10]
  i602.m_VerticalOverflow = i603[11]
  i602.m_LineSpacing = i603[12]
  return i602
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.Button' )
  var i605 = data
  i604.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i605[0], i604.m_OnClick)
  i604.m_Navigation = request.d('UnityEngine.UI.Navigation', i605[1], i604.m_Navigation)
  i604.m_Transition = i605[2]
  i604.m_Colors = request.d('UnityEngine.UI.ColorBlock', i605[3], i604.m_Colors)
  i604.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i605[4], i604.m_SpriteState)
  i604.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i605[5], i604.m_AnimationTriggers)
  i604.m_Interactable = !!i605[6]
  request.r(i605[7], i605[8], 0, i604, 'm_TargetGraphic')
  return i604
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i607 = data
  i606.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i607[0], i606.m_PersistentCalls)
  return i606
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i609 = data
  var i611 = i609[0]
  var i610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i611.length; i += 1) {
    i610.add(request.d('UnityEngine.Events.PersistentCall', i611[i + 0]));
  }
  i608.m_Calls = i610
  return i608
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'm_Target')
  i614.m_TargetAssemblyTypeName = i615[2]
  i614.m_MethodName = i615[3]
  i614.m_Mode = i615[4]
  i614.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i615[5], i614.m_Arguments)
  i614.m_CallState = i615[6]
  return i614
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i617 = data
  i616.m_Mode = i617[0]
  i616.m_WrapAround = !!i617[1]
  request.r(i617[2], i617[3], 0, i616, 'm_SelectOnUp')
  request.r(i617[4], i617[5], 0, i616, 'm_SelectOnDown')
  request.r(i617[6], i617[7], 0, i616, 'm_SelectOnLeft')
  request.r(i617[8], i617[9], 0, i616, 'm_SelectOnRight')
  return i616
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i619 = data
  i618.m_NormalColor = new pc.Color(i619[0], i619[1], i619[2], i619[3])
  i618.m_HighlightedColor = new pc.Color(i619[4], i619[5], i619[6], i619[7])
  i618.m_PressedColor = new pc.Color(i619[8], i619[9], i619[10], i619[11])
  i618.m_SelectedColor = new pc.Color(i619[12], i619[13], i619[14], i619[15])
  i618.m_DisabledColor = new pc.Color(i619[16], i619[17], i619[18], i619[19])
  i618.m_ColorMultiplier = i619[20]
  i618.m_FadeDuration = i619[21]
  return i618
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_HighlightedSprite')
  request.r(i621[2], i621[3], 0, i620, 'm_PressedSprite')
  request.r(i621[4], i621[5], 0, i620, 'm_SelectedSprite')
  request.r(i621[6], i621[7], 0, i620, 'm_DisabledSprite')
  return i620
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i623 = data
  i622.m_NormalTrigger = i623[0]
  i622.m_HighlightedTrigger = i623[1]
  i622.m_PressedTrigger = i623[2]
  i622.m_SelectedTrigger = i623[3]
  i622.m_DisabledTrigger = i623[4]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i625 = data
  i624.ambientIntensity = i625[0]
  i624.reflectionIntensity = i625[1]
  i624.ambientMode = i625[2]
  i624.ambientLight = new pc.Color(i625[3], i625[4], i625[5], i625[6])
  i624.ambientSkyColor = new pc.Color(i625[7], i625[8], i625[9], i625[10])
  i624.ambientGroundColor = new pc.Color(i625[11], i625[12], i625[13], i625[14])
  i624.ambientEquatorColor = new pc.Color(i625[15], i625[16], i625[17], i625[18])
  i624.fogColor = new pc.Color(i625[19], i625[20], i625[21], i625[22])
  i624.fogEndDistance = i625[23]
  i624.fogStartDistance = i625[24]
  i624.fogDensity = i625[25]
  i624.fog = !!i625[26]
  request.r(i625[27], i625[28], 0, i624, 'skybox')
  i624.fogMode = i625[29]
  var i627 = i625[30]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i627[i + 0]) );
  }
  i624.lightmaps = i626
  i624.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i625[31], i624.lightProbes)
  i624.lightmapsMode = i625[32]
  i624.mixedBakeMode = i625[33]
  i624.environmentLightingMode = i625[34]
  i624.ambientProbe = new pc.SphericalHarmonicsL2(i625[35])
  i624.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i625[36])
  i624.useReferenceAmbientProbe = !!i625[37]
  request.r(i625[38], i625[39], 0, i624, 'customReflection')
  request.r(i625[40], i625[41], 0, i624, 'defaultReflection')
  i624.defaultReflectionMode = i625[42]
  i624.defaultReflectionResolution = i625[43]
  i624.sunLightObjectId = i625[44]
  i624.pixelLightCount = i625[45]
  i624.defaultReflectionHDR = !!i625[46]
  i624.hasLightDataAsset = !!i625[47]
  i624.hasManualGenerate = !!i625[48]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'lightmapColor')
  request.r(i631[2], i631[3], 0, i630, 'lightmapDirection')
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i632 = root || new UnityEngine.LightProbes()
  var i633 = data
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i641 = data
  i640.name = i641[0]
  i640.bounciness = i641[1]
  i640.dynamicFriction = i641[2]
  i640.staticFriction = i641[3]
  i640.frictionCombine = i641[4]
  i640.bounceCombine = i641[5]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i643 = data
  var i645 = i643[0]
  var i644 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i645.length; i += 1) {
    i644.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i645[i + 0]));
  }
  i642.ShaderCompilationErrors = i644
  i642.name = i643[1]
  i642.guid = i643[2]
  var i647 = i643[3]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( i647[i + 0] );
  }
  i642.shaderDefinedKeywords = i646
  var i649 = i643[4]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i649[i + 0]) );
  }
  i642.passes = i648
  var i651 = i643[5]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i651[i + 0]) );
  }
  i642.usePasses = i650
  var i653 = i643[6]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i653[i + 0]) );
  }
  i642.defaultParameterValues = i652
  request.r(i643[7], i643[8], 0, i642, 'unityFallbackShader')
  i642.readDepth = !!i643[9]
  i642.isCreatedByShaderGraph = !!i643[10]
  i642.compiled = !!i643[11]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i657 = data
  i656.shaderName = i657[0]
  i656.errorMessage = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i662 = root || new pc.UnityShaderPass()
  var i663 = data
  i662.id = i663[0]
  i662.subShaderIndex = i663[1]
  i662.name = i663[2]
  i662.passType = i663[3]
  i662.grabPassTextureName = i663[4]
  i662.usePass = !!i663[5]
  i662.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[6], i662.zTest)
  i662.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[7], i662.zWrite)
  i662.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[8], i662.culling)
  i662.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i663[9], i662.blending)
  i662.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i663[10], i662.alphaBlending)
  i662.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[11], i662.colorWriteMask)
  i662.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[12], i662.offsetUnits)
  i662.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[13], i662.offsetFactor)
  i662.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[14], i662.stencilRef)
  i662.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[15], i662.stencilReadMask)
  i662.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[16], i662.stencilWriteMask)
  i662.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i663[17], i662.stencilOp)
  i662.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i663[18], i662.stencilOpFront)
  i662.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i663[19], i662.stencilOpBack)
  var i665 = i663[20]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i665[i + 0]) );
  }
  i662.tags = i664
  var i667 = i663[21]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( i667[i + 0] );
  }
  i662.passDefinedKeywords = i666
  var i669 = i663[22]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i669[i + 0]) );
  }
  i662.passDefinedKeywordGroups = i668
  var i671 = i663[23]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i671[i + 0]) );
  }
  i662.variants = i670
  var i673 = i663[24]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i673[i + 0]) );
  }
  i662.excludedVariants = i672
  i662.hasDepthReader = !!i663[25]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i675 = data
  i674.val = i675[0]
  i674.name = i675[1]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i677 = data
  i676.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[0], i676.src)
  i676.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[1], i676.dst)
  i676.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[2], i676.op)
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i679 = data
  i678.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[0], i678.pass)
  i678.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[1], i678.fail)
  i678.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[2], i678.zFail)
  i678.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[3], i678.comp)
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i683 = data
  i682.name = i683[0]
  i682.value = i683[1]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i687 = data
  var i689 = i687[0]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( i689[i + 0] );
  }
  i686.keywords = i688
  i686.hasDiscard = !!i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i693 = data
  i692.passId = i693[0]
  i692.subShaderIndex = i693[1]
  var i695 = i693[2]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( i695[i + 0] );
  }
  i692.keywords = i694
  i692.vertexProgram = i693[3]
  i692.fragmentProgram = i693[4]
  i692.exportedForWebGl2 = !!i693[5]
  i692.readDepth = !!i693[6]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'shader')
  i698.pass = i699[2]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i703 = data
  i702.name = i703[0]
  i702.type = i703[1]
  i702.value = new pc.Vec4( i703[2], i703[3], i703[4], i703[5] )
  i702.textureValue = i703[6]
  i702.shaderPropertyFlag = i703[7]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i705 = data
  i704.name = i705[0]
  request.r(i705[1], i705[2], 0, i704, 'texture')
  i704.aabb = i705[3]
  i704.vertices = i705[4]
  i704.triangles = i705[5]
  i704.textureRect = UnityEngine.Rect.MinMaxRect(i705[6], i705[7], i705[8], i705[9])
  i704.packedRect = UnityEngine.Rect.MinMaxRect(i705[10], i705[11], i705[12], i705[13])
  i704.border = new pc.Vec4( i705[14], i705[15], i705[16], i705[17] )
  i704.transparency = i705[18]
  i704.bounds = i705[19]
  i704.pixelsPerUnit = i705[20]
  i704.textureWidth = i705[21]
  i704.textureHeight = i705[22]
  i704.nativeSize = new pc.Vec2( i705[23], i705[24] )
  i704.pivot = new pc.Vec2( i705[25], i705[26] )
  i704.textureRectOffset = new pc.Vec2( i705[27], i705[28] )
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i707 = data
  i706.name = i707[0]
  i706.ascent = i707[1]
  i706.originalLineHeight = i707[2]
  i706.fontSize = i707[3]
  var i709 = i707[4]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i709[i + 0]) );
  }
  i706.characterInfo = i708
  request.r(i707[5], i707[6], 0, i706, 'texture')
  i706.originalFontSize = i707[7]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i713 = data
  i712.index = i713[0]
  i712.advance = i713[1]
  i712.bearing = i713[2]
  i712.glyphWidth = i713[3]
  i712.glyphHeight = i713[4]
  i712.minX = i713[5]
  i712.maxX = i713[6]
  i712.minY = i713[7]
  i712.maxY = i713[8]
  i712.uvBottomLeftX = i713[9]
  i712.uvBottomLeftY = i713[10]
  i712.uvBottomRightX = i713[11]
  i712.uvBottomRightY = i713[12]
  i712.uvTopLeftX = i713[13]
  i712.uvTopLeftY = i713[14]
  i712.uvTopRightX = i713[15]
  i712.uvTopRightY = i713[16]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i715 = data
  var i717 = i715[0]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i717[i + 0]) );
  }
  i714.files = i716
  i714.componentToPrefabIds = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i721 = data
  i720.path = i721[0]
  request.r(i721[1], i721[2], 0, i720, 'unityObject')
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i723 = data
  var i725 = i723[0]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i725[i + 0]) );
  }
  i722.scriptsExecutionOrder = i724
  var i727 = i723[1]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i727[i + 0]) );
  }
  i722.sortingLayers = i726
  var i729 = i723[2]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i729[i + 0]) );
  }
  i722.cullingLayers = i728
  i722.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i723[3], i722.timeSettings)
  i722.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i723[4], i722.physicsSettings)
  i722.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i723[5], i722.physics2DSettings)
  i722.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i723[6], i722.qualitySettings)
  i722.enableRealtimeShadows = !!i723[7]
  i722.enableAutoInstancing = !!i723[8]
  i722.enableDynamicBatching = !!i723[9]
  i722.lightmapEncodingQuality = i723[10]
  i722.desiredColorSpace = i723[11]
  var i731 = i723[12]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i722.allTags = i730
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i735 = data
  i734.name = i735[0]
  i734.value = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i739 = data
  i738.id = i739[0]
  i738.name = i739[1]
  i738.value = i739[2]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i743 = data
  i742.id = i743[0]
  i742.name = i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i745 = data
  i744.fixedDeltaTime = i745[0]
  i744.maximumDeltaTime = i745[1]
  i744.timeScale = i745[2]
  i744.maximumParticleTimestep = i745[3]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i747 = data
  i746.gravity = new pc.Vec3( i747[0], i747[1], i747[2] )
  i746.defaultSolverIterations = i747[3]
  i746.bounceThreshold = i747[4]
  i746.autoSyncTransforms = !!i747[5]
  i746.autoSimulation = !!i747[6]
  var i749 = i747[7]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i749[i + 0]) );
  }
  i746.collisionMatrix = i748
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i753 = data
  i752.enabled = !!i753[0]
  i752.layerId = i753[1]
  i752.otherLayerId = i753[2]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'material')
  i754.gravity = new pc.Vec2( i755[2], i755[3] )
  i754.positionIterations = i755[4]
  i754.velocityIterations = i755[5]
  i754.velocityThreshold = i755[6]
  i754.maxLinearCorrection = i755[7]
  i754.maxAngularCorrection = i755[8]
  i754.maxTranslationSpeed = i755[9]
  i754.maxRotationSpeed = i755[10]
  i754.baumgarteScale = i755[11]
  i754.baumgarteTOIScale = i755[12]
  i754.timeToSleep = i755[13]
  i754.linearSleepTolerance = i755[14]
  i754.angularSleepTolerance = i755[15]
  i754.defaultContactOffset = i755[16]
  i754.autoSimulation = !!i755[17]
  i754.queriesHitTriggers = !!i755[18]
  i754.queriesStartInColliders = !!i755[19]
  i754.callbacksOnDisable = !!i755[20]
  i754.reuseCollisionCallbacks = !!i755[21]
  i754.autoSyncTransforms = !!i755[22]
  var i757 = i755[23]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i757[i + 0]) );
  }
  i754.collisionMatrix = i756
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i761 = data
  i760.enabled = !!i761[0]
  i760.layerId = i761[1]
  i760.otherLayerId = i761[2]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i763 = data
  var i765 = i763[0]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i765[i + 0]) );
  }
  i762.qualityLevels = i764
  var i767 = i763[1]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i762.names = i766
  i762.shadows = i763[2]
  i762.anisotropicFiltering = i763[3]
  i762.antiAliasing = i763[4]
  i762.lodBias = i763[5]
  i762.shadowCascades = i763[6]
  i762.shadowDistance = i763[7]
  i762.shadowmaskMode = i763[8]
  i762.shadowProjection = i763[9]
  i762.shadowResolution = i763[10]
  i762.softParticles = !!i763[11]
  i762.softVegetation = !!i763[12]
  i762.activeColorSpace = i763[13]
  i762.desiredColorSpace = i763[14]
  i762.masterTextureLimit = i763[15]
  i762.maxQueuedFrames = i763[16]
  i762.particleRaycastBudget = i763[17]
  i762.pixelLightCount = i763[18]
  i762.realtimeReflectionProbes = !!i763[19]
  i762.shadowCascade2Split = i763[20]
  i762.shadowCascade4Split = new pc.Vec3( i763[21], i763[22], i763[23] )
  i762.streamingMipmapsActive = !!i763[24]
  i762.vSyncCount = i763[25]
  i762.asyncUploadBufferSize = i763[26]
  i762.asyncUploadTimeSlice = i763[27]
  i762.billboardsFaceCameraPosition = !!i763[28]
  i762.shadowNearPlaneOffset = i763[29]
  i762.streamingMipmapsMemoryBudget = i763[30]
  i762.maximumLODLevel = i763[31]
  i762.streamingMipmapsAddAllCameras = !!i763[32]
  i762.streamingMipmapsMaxLevelReduction = i763[33]
  i762.streamingMipmapsRenderersPerFrame = i763[34]
  i762.resolutionScalingFixedDPIFactor = i763[35]
  i762.streamingMipmapsMaxFileIORequests = i763[36]
  i762.currentQualityLevel = i763[37]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i773 = data
  i772.weight = i773[0]
  i772.vertices = i773[1]
  i772.normals = i773[2]
  i772.tangents = i773[3]
  return i772
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'm_ObjectArgument')
  i774.m_ObjectArgumentAssemblyTypeName = i775[2]
  i774.m_IntArgument = i775[3]
  i774.m_FloatArgument = i775[4]
  i774.m_StringArgument = i775[5]
  i774.m_BoolArgument = !!i775[6]
  return i774
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.WheelCollider":{"enabled":0,"center":1,"radius":4,"mass":5,"suspensionDistance":6,"forceAppPointDistance":7,"suspensionSpring":8,"forwardFriction":9,"sidewaysFriction":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[14],"50":[1],"51":[1],"52":[1],"53":[1],"54":[1],"55":[1],"56":[1],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[14],"72":[4],"73":[74],"75":[74],"30":[29],"76":[29],"77":[29],"32":[30],"34":[33,29],"78":[29],"31":[30],"79":[29],"80":[29],"81":[29],"82":[29],"83":[29],"84":[29],"85":[29],"86":[29],"87":[29],"88":[33,29],"89":[29],"90":[29],"91":[29],"92":[29],"36":[33,29],"93":[29],"94":[21],"95":[21],"22":[21],"96":[21],"97":[14],"98":[14],"99":[29],"100":[4,29],"101":[29,33],"102":[29],"103":[33,29],"104":[4],"105":[33,29],"106":[29],"107":[108],"109":[108],"110":[14],"111":[112],"113":[108]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.WheelCollider","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Light","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","SmoothFollowCamera","CameraSequence","UnityEngine.CanvasGroup","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AICarController","UnityEngine.CharacterController","UnityEngine.SphereCollider","PlayerCarController","CheckpointManager","UnityEngine.PhysicMaterial","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "INDIEZ";

Deserializers.lunaInitializationTime = "04/29/2025 09:21:16";

Deserializers.lunaDaysRunning = "5.5";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "29436";

Deserializers.projectId = "c15883569d6bc4f039b50232f623b7dd";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.10.3\ncom.unity.textmeshpro: 4.0.0-pre.2\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1791";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3053";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.DefaultCompany.INDIEZ";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "7da96a91-fd80-46d7-9fdd-ee41c92d65ea";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

