var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.JointSpring' )
  var i355 = data
  i354.spring = i355[0]
  i354.damper = i355[1]
  i354.targetPosition = i355[2]
  return i354
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.JointMotor' )
  var i357 = data
  i356.m_TargetVelocity = i357[0]
  i356.m_Force = i357[1]
  i356.m_FreeSpin = i357[2]
  return i356
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.JointLimits' )
  var i359 = data
  i358.m_Min = i359[0]
  i358.m_Max = i359[1]
  i358.m_Bounciness = i359[2]
  i358.m_BounceMinVelocity = i359[3]
  i358.m_ContactDistance = i359[4]
  i358.minBounce = i359[5]
  i358.maxBounce = i359[6]
  return i358
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.JointDrive' )
  var i361 = data
  i360.m_PositionSpring = i361[0]
  i360.m_PositionDamper = i361[1]
  i360.m_MaximumForce = i361[2]
  i360.m_UseAcceleration = i361[3]
  return i360
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i363 = data
  i362.m_Spring = i363[0]
  i362.m_Damper = i363[1]
  return i362
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i365 = data
  i364.m_Limit = i365[0]
  i364.m_Bounciness = i365[1]
  i364.m_ContactDistance = i365[2]
  return i364
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i367 = data
  i366.m_ExtremumSlip = i367[0]
  i366.m_ExtremumValue = i367[1]
  i366.m_AsymptoteSlip = i367[2]
  i366.m_AsymptoteValue = i367[3]
  i366.m_Stiffness = i367[4]
  return i366
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i369 = data
  i368.m_LowerAngle = i369[0]
  i368.m_UpperAngle = i369[1]
  return i368
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i371 = data
  i370.m_MotorSpeed = i371[0]
  i370.m_MaximumMotorTorque = i371[1]
  return i370
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i373 = data
  i372.m_DampingRatio = i373[0]
  i372.m_Frequency = i373[1]
  i372.m_Angle = i373[2]
  return i372
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i375 = data
  i374.m_LowerTranslation = i375[0]
  i374.m_UpperTranslation = i375[1]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i377 = data
  i376.position = new pc.Vec3( i377[0], i377[1], i377[2] )
  i376.scale = new pc.Vec3( i377[3], i377[4], i377[5] )
  i376.rotation = new pc.Quat(i377[6], i377[7], i377[8], i377[9])
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i379 = data
  i378.mass = i379[0]
  i378.drag = i379[1]
  i378.angularDrag = i379[2]
  i378.useGravity = !!i379[3]
  i378.isKinematic = !!i379[4]
  i378.constraints = i379[5]
  i378.maxAngularVelocity = i379[6]
  i378.collisionDetectionMode = i379[7]
  i378.interpolation = i379[8]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i389 = data
  i388.center = new pc.Vec3( i389[0], i389[1], i389[2] )
  i388.size = new pc.Vec3( i389[3], i389[4], i389[5] )
  i388.enabled = !!i389[6]
  i388.isTrigger = !!i389[7]
  request.r(i389[8], i389[9], 0, i388, 'material')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.WheelCollider"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.WheelCollider' )
  var i393 = data
  i392.enabled = !!i393[0]
  i392.center = new pc.Vec3( i393[1], i393[2], i393[3] )
  i392.radius = i393[4]
  i392.mass = i393[5]
  i392.suspensionDistance = i393[6]
  i392.forceAppPointDistance = i393[7]
  i392.suspensionSpring = request.d('UnityEngine.JointSpring', i393[8], i392.suspensionSpring)
  i392.forwardFriction = request.d('UnityEngine.WheelFrictionCurve', i393[9], i392.forwardFriction)
  i392.sidewaysFriction = request.d('UnityEngine.WheelFrictionCurve', i393[10], i392.sidewaysFriction)
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i395 = data
  i394.name = i395[0]
  i394.halfPrecision = !!i395[1]
  i394.useUInt32IndexFormat = !!i395[2]
  i394.vertexCount = i395[3]
  i394.aabb = i395[4]
  var i397 = i395[5]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( !!i397[i + 0] );
  }
  i394.streams = i396
  i394.vertices = i395[6]
  var i399 = i395[7]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i399[i + 0]) );
  }
  i394.subMeshes = i398
  var i401 = i395[8]
  var i400 = []
  for(var i = 0; i < i401.length; i += 16) {
    i400.push( new pc.Mat4().setData(i401[i + 0], i401[i + 1], i401[i + 2], i401[i + 3],  i401[i + 4], i401[i + 5], i401[i + 6], i401[i + 7],  i401[i + 8], i401[i + 9], i401[i + 10], i401[i + 11],  i401[i + 12], i401[i + 13], i401[i + 14], i401[i + 15]) );
  }
  i394.bindposes = i400
  var i403 = i395[9]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i403[i + 0]) );
  }
  i394.blendShapes = i402
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i409 = data
  i408.triangles = i409[0]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i415 = data
  i414.name = i415[0]
  var i417 = i415[1]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i417[i + 0]) );
  }
  i414.frames = i416
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i418 = root || new pc.UnityMaterial()
  var i419 = data
  i418.name = i419[0]
  request.r(i419[1], i419[2], 0, i418, 'shader')
  i418.renderQueue = i419[3]
  i418.enableInstancing = !!i419[4]
  var i421 = i419[5]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i421[i + 0]) );
  }
  i418.floatParameters = i420
  var i423 = i419[6]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i423[i + 0]) );
  }
  i418.colorParameters = i422
  var i425 = i419[7]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i425[i + 0]) );
  }
  i418.vectorParameters = i424
  var i427 = i419[8]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i427[i + 0]) );
  }
  i418.textureParameters = i426
  var i429 = i419[9]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i429[i + 0]) );
  }
  i418.materialFlags = i428
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i433 = data
  i432.name = i433[0]
  i432.value = i433[1]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i437 = data
  i436.name = i437[0]
  i436.value = new pc.Color(i437[1], i437[2], i437[3], i437[4])
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i441 = data
  i440.name = i441[0]
  i440.value = new pc.Vec4( i441[1], i441[2], i441[3], i441[4] )
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i445 = data
  i444.name = i445[0]
  request.r(i445[1], i445[2], 0, i444, 'value')
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i449 = data
  i448.name = i449[0]
  i448.enabled = !!i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i451 = data
  i450.name = i451[0]
  i450.width = i451[1]
  i450.height = i451[2]
  i450.mipmapCount = i451[3]
  i450.anisoLevel = i451[4]
  i450.filterMode = i451[5]
  i450.hdr = !!i451[6]
  i450.format = i451[7]
  i450.wrapMode = i451[8]
  i450.alphaIsTransparency = !!i451[9]
  i450.alphaSource = i451[10]
  i450.graphicsFormat = i451[11]
  i450.sRGBTexture = !!i451[12]
  i450.desiredColorSpace = i451[13]
  i450.wrapU = i451[14]
  i450.wrapV = i451[15]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i453 = data
  i452.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i453[0], i452.main)
  i452.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i453[1], i452.colorBySpeed)
  i452.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i453[2], i452.colorOverLifetime)
  i452.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i453[3], i452.emission)
  i452.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i453[4], i452.rotationBySpeed)
  i452.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i453[5], i452.rotationOverLifetime)
  i452.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i453[6], i452.shape)
  i452.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i453[7], i452.sizeBySpeed)
  i452.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i453[8], i452.sizeOverLifetime)
  i452.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i453[9], i452.textureSheetAnimation)
  i452.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i453[10], i452.velocityOverLifetime)
  i452.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i453[11], i452.noise)
  i452.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i453[12], i452.inheritVelocity)
  i452.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i453[13], i452.forceOverLifetime)
  i452.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i453[14], i452.limitVelocityOverLifetime)
  i452.useAutoRandomSeed = !!i453[15]
  i452.randomSeed = i453[16]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i454 = root || new pc.ParticleSystemMain()
  var i455 = data
  i454.duration = i455[0]
  i454.loop = !!i455[1]
  i454.prewarm = !!i455[2]
  i454.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i455[3], i454.startDelay)
  i454.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i455[4], i454.startLifetime)
  i454.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i455[5], i454.startSpeed)
  i454.startSize3D = !!i455[6]
  i454.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i455[7], i454.startSizeX)
  i454.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i455[8], i454.startSizeY)
  i454.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i455[9], i454.startSizeZ)
  i454.startRotation3D = !!i455[10]
  i454.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i455[11], i454.startRotationX)
  i454.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i455[12], i454.startRotationY)
  i454.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i455[13], i454.startRotationZ)
  i454.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i455[14], i454.startColor)
  i454.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i455[15], i454.gravityModifier)
  i454.simulationSpace = i455[16]
  request.r(i455[17], i455[18], 0, i454, 'customSimulationSpace')
  i454.simulationSpeed = i455[19]
  i454.useUnscaledTime = !!i455[20]
  i454.scalingMode = i455[21]
  i454.playOnAwake = !!i455[22]
  i454.maxParticles = i455[23]
  i454.emitterVelocityMode = i455[24]
  i454.stopAction = i455[25]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i456 = root || new pc.MinMaxCurve()
  var i457 = data
  i456.mode = i457[0]
  i456.curveMin = new pc.AnimationCurve( { keys_flow: i457[1] } )
  i456.curveMax = new pc.AnimationCurve( { keys_flow: i457[2] } )
  i456.curveMultiplier = i457[3]
  i456.constantMin = i457[4]
  i456.constantMax = i457[5]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i458 = root || new pc.MinMaxGradient()
  var i459 = data
  i458.mode = i459[0]
  i458.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i459[1], i458.gradientMin)
  i458.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i459[2], i458.gradientMax)
  i458.colorMin = new pc.Color(i459[3], i459[4], i459[5], i459[6])
  i458.colorMax = new pc.Color(i459[7], i459[8], i459[9], i459[10])
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i461 = data
  i460.mode = i461[0]
  var i463 = i461[1]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i463[i + 0]) );
  }
  i460.colorKeys = i462
  var i465 = i461[2]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i465[i + 0]) );
  }
  i460.alphaKeys = i464
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i466 = root || new pc.ParticleSystemColorBySpeed()
  var i467 = data
  i466.enabled = !!i467[0]
  i466.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i467[1], i466.color)
  i466.range = new pc.Vec2( i467[2], i467[3] )
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i471 = data
  i470.color = new pc.Color(i471[0], i471[1], i471[2], i471[3])
  i470.time = i471[4]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i475 = data
  i474.alpha = i475[0]
  i474.time = i475[1]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i476 = root || new pc.ParticleSystemColorOverLifetime()
  var i477 = data
  i476.enabled = !!i477[0]
  i476.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i477[1], i476.color)
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i478 = root || new pc.ParticleSystemEmitter()
  var i479 = data
  i478.enabled = !!i479[0]
  i478.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[1], i478.rateOverTime)
  i478.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[2], i478.rateOverDistance)
  var i481 = i479[3]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i481[i + 0]) );
  }
  i478.bursts = i480
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i484 = root || new pc.ParticleSystemBurst()
  var i485 = data
  i484.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[0], i484.count)
  i484.cycleCount = i485[1]
  i484.minCount = i485[2]
  i484.maxCount = i485[3]
  i484.repeatInterval = i485[4]
  i484.time = i485[5]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i486 = root || new pc.ParticleSystemRotationBySpeed()
  var i487 = data
  i486.enabled = !!i487[0]
  i486.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[1], i486.x)
  i486.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[2], i486.y)
  i486.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[3], i486.z)
  i486.separateAxes = !!i487[4]
  i486.range = new pc.Vec2( i487[5], i487[6] )
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i488 = root || new pc.ParticleSystemRotationOverLifetime()
  var i489 = data
  i488.enabled = !!i489[0]
  i488.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[1], i488.x)
  i488.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[2], i488.y)
  i488.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[3], i488.z)
  i488.separateAxes = !!i489[4]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i490 = root || new pc.ParticleSystemShape()
  var i491 = data
  i490.enabled = !!i491[0]
  i490.shapeType = i491[1]
  i490.randomDirectionAmount = i491[2]
  i490.sphericalDirectionAmount = i491[3]
  i490.randomPositionAmount = i491[4]
  i490.alignToDirection = !!i491[5]
  i490.radius = i491[6]
  i490.radiusMode = i491[7]
  i490.radiusSpread = i491[8]
  i490.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[9], i490.radiusSpeed)
  i490.radiusThickness = i491[10]
  i490.angle = i491[11]
  i490.length = i491[12]
  i490.boxThickness = new pc.Vec3( i491[13], i491[14], i491[15] )
  i490.meshShapeType = i491[16]
  request.r(i491[17], i491[18], 0, i490, 'mesh')
  request.r(i491[19], i491[20], 0, i490, 'meshRenderer')
  request.r(i491[21], i491[22], 0, i490, 'skinnedMeshRenderer')
  i490.useMeshMaterialIndex = !!i491[23]
  i490.meshMaterialIndex = i491[24]
  i490.useMeshColors = !!i491[25]
  i490.normalOffset = i491[26]
  i490.arc = i491[27]
  i490.arcMode = i491[28]
  i490.arcSpread = i491[29]
  i490.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[30], i490.arcSpeed)
  i490.donutRadius = i491[31]
  i490.position = new pc.Vec3( i491[32], i491[33], i491[34] )
  i490.rotation = new pc.Vec3( i491[35], i491[36], i491[37] )
  i490.scale = new pc.Vec3( i491[38], i491[39], i491[40] )
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i492 = root || new pc.ParticleSystemSizeBySpeed()
  var i493 = data
  i492.enabled = !!i493[0]
  i492.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i493[1], i492.x)
  i492.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i493[2], i492.y)
  i492.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i493[3], i492.z)
  i492.separateAxes = !!i493[4]
  i492.range = new pc.Vec2( i493[5], i493[6] )
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i494 = root || new pc.ParticleSystemSizeOverLifetime()
  var i495 = data
  i494.enabled = !!i495[0]
  i494.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[1], i494.x)
  i494.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[2], i494.y)
  i494.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[3], i494.z)
  i494.separateAxes = !!i495[4]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i496 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i497 = data
  i496.enabled = !!i497[0]
  i496.mode = i497[1]
  i496.animation = i497[2]
  i496.numTilesX = i497[3]
  i496.numTilesY = i497[4]
  i496.useRandomRow = !!i497[5]
  i496.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[6], i496.frameOverTime)
  i496.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[7], i496.startFrame)
  i496.cycleCount = i497[8]
  i496.rowIndex = i497[9]
  i496.flipU = i497[10]
  i496.flipV = i497[11]
  i496.spriteCount = i497[12]
  var i499 = i497[13]
  var i498 = []
  for(var i = 0; i < i499.length; i += 2) {
  request.r(i499[i + 0], i499[i + 1], 2, i498, '')
  }
  i496.sprites = i498
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i502 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i503 = data
  i502.enabled = !!i503[0]
  i502.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[1], i502.x)
  i502.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[2], i502.y)
  i502.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[3], i502.z)
  i502.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[4], i502.radial)
  i502.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[5], i502.speedModifier)
  i502.space = i503[6]
  i502.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[7], i502.orbitalX)
  i502.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[8], i502.orbitalY)
  i502.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[9], i502.orbitalZ)
  i502.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[10], i502.orbitalOffsetX)
  i502.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[11], i502.orbitalOffsetY)
  i502.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[12], i502.orbitalOffsetZ)
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i504 = root || new pc.ParticleSystemNoise()
  var i505 = data
  i504.enabled = !!i505[0]
  i504.separateAxes = !!i505[1]
  i504.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[2], i504.strengthX)
  i504.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[3], i504.strengthY)
  i504.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[4], i504.strengthZ)
  i504.frequency = i505[5]
  i504.damping = !!i505[6]
  i504.octaveCount = i505[7]
  i504.octaveMultiplier = i505[8]
  i504.octaveScale = i505[9]
  i504.quality = i505[10]
  i504.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[11], i504.scrollSpeed)
  i504.scrollSpeedMultiplier = i505[12]
  i504.remapEnabled = !!i505[13]
  i504.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[14], i504.remapX)
  i504.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[15], i504.remapY)
  i504.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[16], i504.remapZ)
  i504.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[17], i504.positionAmount)
  i504.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[18], i504.rotationAmount)
  i504.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[19], i504.sizeAmount)
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i506 = root || new pc.ParticleSystemInheritVelocity()
  var i507 = data
  i506.enabled = !!i507[0]
  i506.mode = i507[1]
  i506.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[2], i506.curve)
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i508 = root || new pc.ParticleSystemForceOverLifetime()
  var i509 = data
  i508.enabled = !!i509[0]
  i508.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[1], i508.x)
  i508.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[2], i508.y)
  i508.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[3], i508.z)
  i508.space = i509[4]
  i508.randomized = !!i509[5]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i510 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i511 = data
  i510.enabled = !!i511[0]
  i510.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[1], i510.limit)
  i510.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[2], i510.limitX)
  i510.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[3], i510.limitY)
  i510.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[4], i510.limitZ)
  i510.dampen = i511[5]
  i510.separateAxes = !!i511[6]
  i510.space = i511[7]
  i510.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[8], i510.drag)
  i510.multiplyDragByParticleSize = !!i511[9]
  i510.multiplyDragByParticleVelocity = !!i511[10]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i513 = data
  i512.enabled = !!i513[0]
  request.r(i513[1], i513[2], 0, i512, 'sharedMaterial')
  var i515 = i513[3]
  var i514 = []
  for(var i = 0; i < i515.length; i += 2) {
  request.r(i515[i + 0], i515[i + 1], 2, i514, '')
  }
  i512.sharedMaterials = i514
  i512.receiveShadows = !!i513[4]
  i512.shadowCastingMode = i513[5]
  i512.sortingLayerID = i513[6]
  i512.sortingOrder = i513[7]
  i512.lightmapIndex = i513[8]
  i512.lightmapSceneIndex = i513[9]
  i512.lightmapScaleOffset = new pc.Vec4( i513[10], i513[11], i513[12], i513[13] )
  i512.lightProbeUsage = i513[14]
  i512.reflectionProbeUsage = i513[15]
  request.r(i513[16], i513[17], 0, i512, 'mesh')
  i512.meshCount = i513[18]
  i512.activeVertexStreamsCount = i513[19]
  i512.alignment = i513[20]
  i512.renderMode = i513[21]
  i512.sortMode = i513[22]
  i512.lengthScale = i513[23]
  i512.velocityScale = i513[24]
  i512.cameraVelocityScale = i513[25]
  i512.normalDirection = i513[26]
  i512.sortingFudge = i513[27]
  i512.minParticleSize = i513[28]
  i512.maxParticleSize = i513[29]
  i512.pivot = new pc.Vec3( i513[30], i513[31], i513[32] )
  request.r(i513[33], i513[34], 0, i512, 'trailMaterial')
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i517 = data
  i516.enabled = !!i517[0]
  i516.type = i517[1]
  i516.color = new pc.Color(i517[2], i517[3], i517[4], i517[5])
  i516.cullingMask = i517[6]
  i516.intensity = i517[7]
  i516.range = i517[8]
  i516.spotAngle = i517[9]
  i516.shadows = i517[10]
  i516.shadowNormalBias = i517[11]
  i516.shadowBias = i517[12]
  i516.shadowStrength = i517[13]
  i516.shadowResolution = i517[14]
  i516.lightmapBakeType = i517[15]
  i516.renderMode = i517[16]
  request.r(i517[17], i517[18], 0, i516, 'cookie')
  i516.cookieSize = i517[19]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i519 = data
  i518.enabled = !!i519[0]
  i518.isTrigger = !!i519[1]
  request.r(i519[2], i519[3], 0, i518, 'material')
  request.r(i519[4], i519[5], 0, i518, 'sharedMesh')
  i518.convex = !!i519[6]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i521 = data
  i520.name = i521[0]
  i520.atlasId = i521[1]
  i520.mipmapCount = i521[2]
  i520.hdr = !!i521[3]
  i520.size = i521[4]
  i520.anisoLevel = i521[5]
  i520.filterMode = i521[6]
  var i523 = i521[7]
  var i522 = []
  for(var i = 0; i < i523.length; i += 4) {
    i522.push( UnityEngine.Rect.MinMaxRect(i523[i + 0], i523[i + 1], i523[i + 2], i523[i + 3]) );
  }
  i520.rects = i522
  i520.wrapU = i521[8]
  i520.wrapV = i521[9]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i527 = data
  i526.name = i527[0]
  i526.index = i527[1]
  i526.startup = !!i527[2]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i529 = data
  i528.enabled = !!i529[0]
  i528.aspect = i529[1]
  i528.orthographic = !!i529[2]
  i528.orthographicSize = i529[3]
  i528.backgroundColor = new pc.Color(i529[4], i529[5], i529[6], i529[7])
  i528.nearClipPlane = i529[8]
  i528.farClipPlane = i529[9]
  i528.fieldOfView = i529[10]
  i528.depth = i529[11]
  i528.clearFlags = i529[12]
  i528.cullingMask = i529[13]
  i528.rect = i529[14]
  request.r(i529[15], i529[16], 0, i528, 'targetTexture')
  i528.usePhysicalProperties = !!i529[17]
  i528.focalLength = i529[18]
  i528.sensorSize = new pc.Vec2( i529[19], i529[20] )
  i528.lensShift = new pc.Vec2( i529[21], i529[22] )
  i528.gateFit = i529[23]
  i528.commandBufferCount = i529[24]
  i528.cameraType = i529[25]
  return i528
}

Deserializers["SmoothFollowCamera"] = function (request, data, root) {
  var i530 = root || request.c( 'SmoothFollowCamera' )
  var i531 = data
  request.r(i531[0], i531[1], 0, i530, 'target')
  i530.offset = new pc.Vec3( i531[2], i531[3], i531[4] )
  i530.followSpeed = i531[5]
  i530.rotationSpeed = i531[6]
  return i530
}

Deserializers["CameraSequence"] = function (request, data, root) {
  var i532 = root || request.c( 'CameraSequence' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'pointA')
  request.r(i533[2], i533[3], 0, i532, 'pointB')
  request.r(i533[4], i533[5], 0, i532, 'pointC')
  request.r(i533[6], i533[7], 0, i532, 'smoothFollowCamera')
  i532.rotateDuration = i533[8]
  i532.moveDuration = i533[9]
  i532.rotationSpeed = i533[10]
  request.r(i533[11], i533[12], 0, i532, 'flashEffect')
  return i532
}

Deserializers["AICarController"] = function (request, data, root) {
  var i534 = root || request.c( 'AICarController' )
  var i535 = data
  i534.moveSpeed = i535[0]
  i534.maxSpeed = i535[1]
  i534.smoothTime = i535[2]
  i534.turnSpeed = i535[3]
  i534.checkpointRadius = i535[4]
  i534.slowTurnThreshold = i535[5]
  i534.driftIntensity = i535[6]
  i534.obstacleDetectionRange = i535[7]
  i534.avoidanceStrength = i535[8]
  i534.obstacleLayers = UnityEngine.LayerMask.FromIntegerValue( i535[9] )
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i537 = data
  i536.enabled = !!i537[0]
  i536.center = new pc.Vec3( i537[1], i537[2], i537[3] )
  i536.radius = i537[4]
  i536.height = i537[5]
  i536.minMoveDistance = i537[6]
  i536.skinWidth = i537[7]
  i536.enableOverlapRecovery = !!i537[8]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i539 = data
  i538.enabled = !!i539[0]
  i538.isTrigger = !!i539[1]
  request.r(i539[2], i539[3], 0, i538, 'material')
  i538.center = new pc.Vec3( i539[4], i539[5], i539[6] )
  i538.radius = i539[7]
  return i538
}

Deserializers["PlayerCarController"] = function (request, data, root) {
  var i540 = root || request.c( 'PlayerCarController' )
  var i541 = data
  i540.moveSpeed = i541[0]
  i540.smoothTime = i541[1]
  i540.maxSpeed = i541[2]
  i540.turnSpeed = i541[3]
  i540.maxTurnAngle = i541[4]
  i540.checkpointRadius = i541[5]
  i540.slowTurnThreshold = i541[6]
  i540.driftIntensity = i541[7]
  i540.groundCheckDistance = i541[8]
  i540.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i541[9] )
  request.r(i541[10], i541[11], 0, i540, 'checkpointManager')
  request.r(i541[12], i541[13], 0, i540, 'Arrow')
  return i540
}

Deserializers["CheckpointManager"] = function (request, data, root) {
  var i542 = root || request.c( 'CheckpointManager' )
  var i543 = data
  var i545 = i543[0]
  var i544 = []
  for(var i = 0; i < i545.length; i += 2) {
  request.r(i545[i + 0], i545[i + 1], 2, i544, '')
  }
  i542.checkpoints = i544
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i549 = data
  i548.pivot = new pc.Vec2( i549[0], i549[1] )
  i548.anchorMin = new pc.Vec2( i549[2], i549[3] )
  i548.anchorMax = new pc.Vec2( i549[4], i549[5] )
  i548.sizeDelta = new pc.Vec2( i549[6], i549[7] )
  i548.anchoredPosition3D = new pc.Vec3( i549[8], i549[9], i549[10] )
  i548.rotation = new pc.Quat(i549[11], i549[12], i549[13], i549[14])
  i548.scale = new pc.Vec3( i549[15], i549[16], i549[17] )
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i551 = data
  i550.enabled = !!i551[0]
  i550.planeDistance = i551[1]
  i550.referencePixelsPerUnit = i551[2]
  i550.isFallbackOverlay = !!i551[3]
  i550.renderMode = i551[4]
  i550.renderOrder = i551[5]
  i550.sortingLayerName = i551[6]
  i550.sortingOrder = i551[7]
  i550.scaleFactor = i551[8]
  request.r(i551[9], i551[10], 0, i550, 'worldCamera')
  i550.overrideSorting = !!i551[11]
  i550.pixelPerfect = !!i551[12]
  i550.targetDisplay = i551[13]
  i550.overridePixelPerfect = !!i551[14]
  return i550
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i553 = data
  i552.m_UiScaleMode = i553[0]
  i552.m_ReferencePixelsPerUnit = i553[1]
  i552.m_ScaleFactor = i553[2]
  i552.m_ReferenceResolution = new pc.Vec2( i553[3], i553[4] )
  i552.m_ScreenMatchMode = i553[5]
  i552.m_MatchWidthOrHeight = i553[6]
  i552.m_PhysicalUnit = i553[7]
  i552.m_FallbackScreenDPI = i553[8]
  i552.m_DefaultSpriteDPI = i553[9]
  i552.m_DynamicPixelsPerUnit = i553[10]
  i552.m_PresetInfoIsWorld = !!i553[11]
  return i552
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i555 = data
  i554.m_IgnoreReversedGraphics = !!i555[0]
  i554.m_BlockingObjects = i555[1]
  i554.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i555[2] )
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i557 = data
  i556.cullTransparentMesh = !!i557[0]
  return i556
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.Image' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'm_Sprite')
  i558.m_Type = i559[2]
  i558.m_PreserveAspect = !!i559[3]
  i558.m_FillCenter = !!i559[4]
  i558.m_FillMethod = i559[5]
  i558.m_FillAmount = i559[6]
  i558.m_FillClockwise = !!i559[7]
  i558.m_FillOrigin = i559[8]
  i558.m_UseSpriteMesh = !!i559[9]
  i558.m_PixelsPerUnitMultiplier = i559[10]
  request.r(i559[11], i559[12], 0, i558, 'm_Material')
  i558.m_Maskable = !!i559[13]
  i558.m_Color = new pc.Color(i559[14], i559[15], i559[16], i559[17])
  i558.m_RaycastTarget = !!i559[18]
  i558.m_RaycastPadding = new pc.Vec4( i559[19], i559[20], i559[21], i559[22] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i561 = data
  i560.m_Alpha = i561[0]
  i560.m_Interactable = !!i561[1]
  i560.m_BlocksRaycasts = !!i561[2]
  i560.m_IgnoreParentGroups = !!i561[3]
  i560.enabled = !!i561[4]
  return i560
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'm_FirstSelected')
  i562.m_sendNavigationEvents = !!i563[2]
  i562.m_DragThreshold = i563[3]
  return i562
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i565 = data
  i564.m_HorizontalAxis = i565[0]
  i564.m_VerticalAxis = i565[1]
  i564.m_SubmitButton = i565[2]
  i564.m_CancelButton = i565[3]
  i564.m_InputActionsPerSecond = i565[4]
  i564.m_RepeatDelay = i565[5]
  i564.m_ForceModuleActive = !!i565[6]
  i564.m_SendPointerHoverToParent = !!i565[7]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i567 = data
  i566.ambientIntensity = i567[0]
  i566.reflectionIntensity = i567[1]
  i566.ambientMode = i567[2]
  i566.ambientLight = new pc.Color(i567[3], i567[4], i567[5], i567[6])
  i566.ambientSkyColor = new pc.Color(i567[7], i567[8], i567[9], i567[10])
  i566.ambientGroundColor = new pc.Color(i567[11], i567[12], i567[13], i567[14])
  i566.ambientEquatorColor = new pc.Color(i567[15], i567[16], i567[17], i567[18])
  i566.fogColor = new pc.Color(i567[19], i567[20], i567[21], i567[22])
  i566.fogEndDistance = i567[23]
  i566.fogStartDistance = i567[24]
  i566.fogDensity = i567[25]
  i566.fog = !!i567[26]
  request.r(i567[27], i567[28], 0, i566, 'skybox')
  i566.fogMode = i567[29]
  var i569 = i567[30]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i569[i + 0]) );
  }
  i566.lightmaps = i568
  i566.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i567[31], i566.lightProbes)
  i566.lightmapsMode = i567[32]
  i566.mixedBakeMode = i567[33]
  i566.environmentLightingMode = i567[34]
  i566.ambientProbe = new pc.SphericalHarmonicsL2(i567[35])
  i566.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i567[36])
  i566.useReferenceAmbientProbe = !!i567[37]
  request.r(i567[38], i567[39], 0, i566, 'customReflection')
  request.r(i567[40], i567[41], 0, i566, 'defaultReflection')
  i566.defaultReflectionMode = i567[42]
  i566.defaultReflectionResolution = i567[43]
  i566.sunLightObjectId = i567[44]
  i566.pixelLightCount = i567[45]
  i566.defaultReflectionHDR = !!i567[46]
  i566.hasLightDataAsset = !!i567[47]
  i566.hasManualGenerate = !!i567[48]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'lightmapColor')
  request.r(i573[2], i573[3], 0, i572, 'lightmapDirection')
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i574 = root || new UnityEngine.LightProbes()
  var i575 = data
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i583 = data
  i582.name = i583[0]
  i582.bounciness = i583[1]
  i582.dynamicFriction = i583[2]
  i582.staticFriction = i583[3]
  i582.frictionCombine = i583[4]
  i582.bounceCombine = i583[5]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i585 = data
  var i587 = i585[0]
  var i586 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i587.length; i += 1) {
    i586.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i587[i + 0]));
  }
  i584.ShaderCompilationErrors = i586
  i584.name = i585[1]
  i584.guid = i585[2]
  var i589 = i585[3]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( i589[i + 0] );
  }
  i584.shaderDefinedKeywords = i588
  var i591 = i585[4]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i591[i + 0]) );
  }
  i584.passes = i590
  var i593 = i585[5]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i593[i + 0]) );
  }
  i584.usePasses = i592
  var i595 = i585[6]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i595[i + 0]) );
  }
  i584.defaultParameterValues = i594
  request.r(i585[7], i585[8], 0, i584, 'unityFallbackShader')
  i584.readDepth = !!i585[9]
  i584.isCreatedByShaderGraph = !!i585[10]
  i584.compiled = !!i585[11]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i599 = data
  i598.shaderName = i599[0]
  i598.errorMessage = i599[1]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i604 = root || new pc.UnityShaderPass()
  var i605 = data
  i604.id = i605[0]
  i604.subShaderIndex = i605[1]
  i604.name = i605[2]
  i604.passType = i605[3]
  i604.grabPassTextureName = i605[4]
  i604.usePass = !!i605[5]
  i604.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[6], i604.zTest)
  i604.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[7], i604.zWrite)
  i604.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[8], i604.culling)
  i604.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i605[9], i604.blending)
  i604.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i605[10], i604.alphaBlending)
  i604.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[11], i604.colorWriteMask)
  i604.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[12], i604.offsetUnits)
  i604.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[13], i604.offsetFactor)
  i604.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[14], i604.stencilRef)
  i604.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[15], i604.stencilReadMask)
  i604.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[16], i604.stencilWriteMask)
  i604.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i605[17], i604.stencilOp)
  i604.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i605[18], i604.stencilOpFront)
  i604.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i605[19], i604.stencilOpBack)
  var i607 = i605[20]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i607[i + 0]) );
  }
  i604.tags = i606
  var i609 = i605[21]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( i609[i + 0] );
  }
  i604.passDefinedKeywords = i608
  var i611 = i605[22]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i611[i + 0]) );
  }
  i604.passDefinedKeywordGroups = i610
  var i613 = i605[23]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i613[i + 0]) );
  }
  i604.variants = i612
  var i615 = i605[24]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i615[i + 0]) );
  }
  i604.excludedVariants = i614
  i604.hasDepthReader = !!i605[25]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i617 = data
  i616.val = i617[0]
  i616.name = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i619 = data
  i618.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i619[0], i618.src)
  i618.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i619[1], i618.dst)
  i618.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i619[2], i618.op)
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i621 = data
  i620.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i621[0], i620.pass)
  i620.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i621[1], i620.fail)
  i620.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i621[2], i620.zFail)
  i620.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i621[3], i620.comp)
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i625 = data
  i624.name = i625[0]
  i624.value = i625[1]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i629 = data
  var i631 = i629[0]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( i631[i + 0] );
  }
  i628.keywords = i630
  i628.hasDiscard = !!i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i635 = data
  i634.passId = i635[0]
  i634.subShaderIndex = i635[1]
  var i637 = i635[2]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( i637[i + 0] );
  }
  i634.keywords = i636
  i634.vertexProgram = i635[3]
  i634.fragmentProgram = i635[4]
  i634.exportedForWebGl2 = !!i635[5]
  i634.readDepth = !!i635[6]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'shader')
  i640.pass = i641[2]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i645 = data
  i644.name = i645[0]
  i644.type = i645[1]
  i644.value = new pc.Vec4( i645[2], i645[3], i645[4], i645[5] )
  i644.textureValue = i645[6]
  i644.shaderPropertyFlag = i645[7]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i647 = data
  i646.name = i647[0]
  request.r(i647[1], i647[2], 0, i646, 'texture')
  i646.aabb = i647[3]
  i646.vertices = i647[4]
  i646.triangles = i647[5]
  i646.textureRect = UnityEngine.Rect.MinMaxRect(i647[6], i647[7], i647[8], i647[9])
  i646.packedRect = UnityEngine.Rect.MinMaxRect(i647[10], i647[11], i647[12], i647[13])
  i646.border = new pc.Vec4( i647[14], i647[15], i647[16], i647[17] )
  i646.transparency = i647[18]
  i646.bounds = i647[19]
  i646.pixelsPerUnit = i647[20]
  i646.textureWidth = i647[21]
  i646.textureHeight = i647[22]
  i646.nativeSize = new pc.Vec2( i647[23], i647[24] )
  i646.pivot = new pc.Vec2( i647[25], i647[26] )
  i646.textureRectOffset = new pc.Vec2( i647[27], i647[28] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i649 = data
  var i651 = i649[0]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i651[i + 0]) );
  }
  i648.files = i650
  i648.componentToPrefabIds = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i655 = data
  i654.path = i655[0]
  request.r(i655[1], i655[2], 0, i654, 'unityObject')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i657 = data
  var i659 = i657[0]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i659[i + 0]) );
  }
  i656.scriptsExecutionOrder = i658
  var i661 = i657[1]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i661[i + 0]) );
  }
  i656.sortingLayers = i660
  var i663 = i657[2]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i663[i + 0]) );
  }
  i656.cullingLayers = i662
  i656.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i657[3], i656.timeSettings)
  i656.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i657[4], i656.physicsSettings)
  i656.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i657[5], i656.physics2DSettings)
  i656.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i657[6], i656.qualitySettings)
  i656.enableRealtimeShadows = !!i657[7]
  i656.enableAutoInstancing = !!i657[8]
  i656.enableDynamicBatching = !!i657[9]
  i656.lightmapEncodingQuality = i657[10]
  i656.desiredColorSpace = i657[11]
  var i665 = i657[12]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( i665[i + 0] );
  }
  i656.allTags = i664
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i669 = data
  i668.name = i669[0]
  i668.value = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i673 = data
  i672.id = i673[0]
  i672.name = i673[1]
  i672.value = i673[2]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i677 = data
  i676.id = i677[0]
  i676.name = i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i679 = data
  i678.fixedDeltaTime = i679[0]
  i678.maximumDeltaTime = i679[1]
  i678.timeScale = i679[2]
  i678.maximumParticleTimestep = i679[3]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i681 = data
  i680.gravity = new pc.Vec3( i681[0], i681[1], i681[2] )
  i680.defaultSolverIterations = i681[3]
  i680.bounceThreshold = i681[4]
  i680.autoSyncTransforms = !!i681[5]
  i680.autoSimulation = !!i681[6]
  var i683 = i681[7]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i683[i + 0]) );
  }
  i680.collisionMatrix = i682
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i687 = data
  i686.enabled = !!i687[0]
  i686.layerId = i687[1]
  i686.otherLayerId = i687[2]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'material')
  i688.gravity = new pc.Vec2( i689[2], i689[3] )
  i688.positionIterations = i689[4]
  i688.velocityIterations = i689[5]
  i688.velocityThreshold = i689[6]
  i688.maxLinearCorrection = i689[7]
  i688.maxAngularCorrection = i689[8]
  i688.maxTranslationSpeed = i689[9]
  i688.maxRotationSpeed = i689[10]
  i688.baumgarteScale = i689[11]
  i688.baumgarteTOIScale = i689[12]
  i688.timeToSleep = i689[13]
  i688.linearSleepTolerance = i689[14]
  i688.angularSleepTolerance = i689[15]
  i688.defaultContactOffset = i689[16]
  i688.autoSimulation = !!i689[17]
  i688.queriesHitTriggers = !!i689[18]
  i688.queriesStartInColliders = !!i689[19]
  i688.callbacksOnDisable = !!i689[20]
  i688.reuseCollisionCallbacks = !!i689[21]
  i688.autoSyncTransforms = !!i689[22]
  var i691 = i689[23]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i691[i + 0]) );
  }
  i688.collisionMatrix = i690
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i695 = data
  i694.enabled = !!i695[0]
  i694.layerId = i695[1]
  i694.otherLayerId = i695[2]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i697 = data
  var i699 = i697[0]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i699[i + 0]) );
  }
  i696.qualityLevels = i698
  var i701 = i697[1]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i696.names = i700
  i696.shadows = i697[2]
  i696.anisotropicFiltering = i697[3]
  i696.antiAliasing = i697[4]
  i696.lodBias = i697[5]
  i696.shadowCascades = i697[6]
  i696.shadowDistance = i697[7]
  i696.shadowmaskMode = i697[8]
  i696.shadowProjection = i697[9]
  i696.shadowResolution = i697[10]
  i696.softParticles = !!i697[11]
  i696.softVegetation = !!i697[12]
  i696.activeColorSpace = i697[13]
  i696.desiredColorSpace = i697[14]
  i696.masterTextureLimit = i697[15]
  i696.maxQueuedFrames = i697[16]
  i696.particleRaycastBudget = i697[17]
  i696.pixelLightCount = i697[18]
  i696.realtimeReflectionProbes = !!i697[19]
  i696.shadowCascade2Split = i697[20]
  i696.shadowCascade4Split = new pc.Vec3( i697[21], i697[22], i697[23] )
  i696.streamingMipmapsActive = !!i697[24]
  i696.vSyncCount = i697[25]
  i696.asyncUploadBufferSize = i697[26]
  i696.asyncUploadTimeSlice = i697[27]
  i696.billboardsFaceCameraPosition = !!i697[28]
  i696.shadowNearPlaneOffset = i697[29]
  i696.streamingMipmapsMemoryBudget = i697[30]
  i696.maximumLODLevel = i697[31]
  i696.streamingMipmapsAddAllCameras = !!i697[32]
  i696.streamingMipmapsMaxLevelReduction = i697[33]
  i696.streamingMipmapsRenderersPerFrame = i697[34]
  i696.resolutionScalingFixedDPIFactor = i697[35]
  i696.streamingMipmapsMaxFileIORequests = i697[36]
  i696.currentQualityLevel = i697[37]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i707 = data
  i706.weight = i707[0]
  i706.vertices = i707[1]
  i706.normals = i707[2]
  i706.tangents = i707[3]
  return i706
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.WheelCollider":{"enabled":0,"center":1,"radius":4,"mass":5,"suspensionDistance":6,"forceAppPointDistance":7,"suspensionSpring":8,"forwardFriction":9,"sidewaysFriction":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[45],"46":[14],"47":[1],"48":[1],"49":[1],"50":[1],"51":[1],"52":[1],"53":[1],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[55],"63":[55],"64":[55],"65":[55],"66":[55],"67":[55],"68":[14],"69":[4],"70":[71],"72":[71],"27":[26],"73":[26],"74":[26],"30":[27],"32":[31,26],"75":[26],"29":[27],"76":[26],"77":[26],"78":[26],"79":[26],"80":[26],"81":[26],"82":[26],"83":[26],"84":[26],"85":[31,26],"86":[26],"87":[26],"88":[26],"89":[26],"90":[31,26],"91":[26],"92":[34],"93":[34],"35":[34],"94":[34],"95":[14],"96":[14],"97":[26],"98":[4,26],"99":[26,31],"100":[26],"101":[31,26],"102":[4],"103":[31,26],"104":[26],"105":[106],"107":[106],"108":[14],"109":[110],"111":[106]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.WheelCollider","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Light","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","SmoothFollowCamera","CameraSequence","UnityEngine.CanvasGroup","AICarController","UnityEngine.CharacterController","UnityEngine.SphereCollider","PlayerCarController","CheckpointManager","UnityEngine.PhysicMaterial","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "INDIEZ";

Deserializers.lunaInitializationTime = "04/29/2025 09:21:16";

Deserializers.lunaDaysRunning = "5.4";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "f40da62d-6212-413e-a44c-065c6ff023c3";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

