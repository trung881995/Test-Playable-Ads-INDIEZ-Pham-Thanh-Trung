var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.JointSpring' )
  var i335 = data
  i334.spring = i335[0]
  i334.damper = i335[1]
  i334.targetPosition = i335[2]
  return i334
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i336 = root || request.c( 'UnityEngine.JointMotor' )
  var i337 = data
  i336.m_TargetVelocity = i337[0]
  i336.m_Force = i337[1]
  i336.m_FreeSpin = i337[2]
  return i336
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i338 = root || request.c( 'UnityEngine.JointLimits' )
  var i339 = data
  i338.m_Min = i339[0]
  i338.m_Max = i339[1]
  i338.m_Bounciness = i339[2]
  i338.m_BounceMinVelocity = i339[3]
  i338.m_ContactDistance = i339[4]
  i338.minBounce = i339[5]
  i338.maxBounce = i339[6]
  return i338
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.JointDrive' )
  var i341 = data
  i340.m_PositionSpring = i341[0]
  i340.m_PositionDamper = i341[1]
  i340.m_MaximumForce = i341[2]
  i340.m_UseAcceleration = i341[3]
  return i340
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i343 = data
  i342.m_Spring = i343[0]
  i342.m_Damper = i343[1]
  return i342
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i345 = data
  i344.m_Limit = i345[0]
  i344.m_Bounciness = i345[1]
  i344.m_ContactDistance = i345[2]
  return i344
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i347 = data
  i346.m_ExtremumSlip = i347[0]
  i346.m_ExtremumValue = i347[1]
  i346.m_AsymptoteSlip = i347[2]
  i346.m_AsymptoteValue = i347[3]
  i346.m_Stiffness = i347[4]
  return i346
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i349 = data
  i348.m_LowerAngle = i349[0]
  i348.m_UpperAngle = i349[1]
  return i348
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i351 = data
  i350.m_MotorSpeed = i351[0]
  i350.m_MaximumMotorTorque = i351[1]
  return i350
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i353 = data
  i352.m_DampingRatio = i353[0]
  i352.m_Frequency = i353[1]
  i352.m_Angle = i353[2]
  return i352
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i355 = data
  i354.m_LowerTranslation = i355[0]
  i354.m_UpperTranslation = i355[1]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i357 = data
  i356.position = new pc.Vec3( i357[0], i357[1], i357[2] )
  i356.scale = new pc.Vec3( i357[3], i357[4], i357[5] )
  i356.rotation = new pc.Quat(i357[6], i357[7], i357[8], i357[9])
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i359 = data
  i358.mass = i359[0]
  i358.drag = i359[1]
  i358.angularDrag = i359[2]
  i358.useGravity = !!i359[3]
  i358.isKinematic = !!i359[4]
  i358.constraints = i359[5]
  i358.maxAngularVelocity = i359[6]
  i358.collisionDetectionMode = i359[7]
  i358.interpolation = i359[8]
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i361 = data
  request.r(i361[0], i361[1], 0, i360, 'sharedMesh')
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i363 = data
  request.r(i363[0], i363[1], 0, i362, 'additionalVertexStreams')
  i362.enabled = !!i363[2]
  request.r(i363[3], i363[4], 0, i362, 'sharedMaterial')
  var i365 = i363[5]
  var i364 = []
  for(var i = 0; i < i365.length; i += 2) {
  request.r(i365[i + 0], i365[i + 1], 2, i364, '')
  }
  i362.sharedMaterials = i364
  i362.receiveShadows = !!i363[6]
  i362.shadowCastingMode = i363[7]
  i362.sortingLayerID = i363[8]
  i362.sortingOrder = i363[9]
  i362.lightmapIndex = i363[10]
  i362.lightmapSceneIndex = i363[11]
  i362.lightmapScaleOffset = new pc.Vec4( i363[12], i363[13], i363[14], i363[15] )
  i362.lightProbeUsage = i363[16]
  i362.reflectionProbeUsage = i363[17]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i369 = data
  i368.center = new pc.Vec3( i369[0], i369[1], i369[2] )
  i368.size = new pc.Vec3( i369[3], i369[4], i369[5] )
  i368.enabled = !!i369[6]
  i368.isTrigger = !!i369[7]
  request.r(i369[8], i369[9], 0, i368, 'material')
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i371 = data
  i370.name = i371[0]
  i370.tagId = i371[1]
  i370.enabled = !!i371[2]
  i370.isStatic = !!i371[3]
  i370.layer = i371[4]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.WheelCollider"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.WheelCollider' )
  var i373 = data
  i372.enabled = !!i373[0]
  i372.center = new pc.Vec3( i373[1], i373[2], i373[3] )
  i372.radius = i373[4]
  i372.mass = i373[5]
  i372.suspensionDistance = i373[6]
  i372.forceAppPointDistance = i373[7]
  i372.suspensionSpring = request.d('UnityEngine.JointSpring', i373[8], i372.suspensionSpring)
  i372.forwardFriction = request.d('UnityEngine.WheelFrictionCurve', i373[9], i372.forwardFriction)
  i372.sidewaysFriction = request.d('UnityEngine.WheelFrictionCurve', i373[10], i372.sidewaysFriction)
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i375 = data
  i374.name = i375[0]
  i374.halfPrecision = !!i375[1]
  i374.useUInt32IndexFormat = !!i375[2]
  i374.vertexCount = i375[3]
  i374.aabb = i375[4]
  var i377 = i375[5]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( !!i377[i + 0] );
  }
  i374.streams = i376
  i374.vertices = i375[6]
  var i379 = i375[7]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i379[i + 0]) );
  }
  i374.subMeshes = i378
  var i381 = i375[8]
  var i380 = []
  for(var i = 0; i < i381.length; i += 16) {
    i380.push( new pc.Mat4().setData(i381[i + 0], i381[i + 1], i381[i + 2], i381[i + 3],  i381[i + 4], i381[i + 5], i381[i + 6], i381[i + 7],  i381[i + 8], i381[i + 9], i381[i + 10], i381[i + 11],  i381[i + 12], i381[i + 13], i381[i + 14], i381[i + 15]) );
  }
  i374.bindposes = i380
  var i383 = i375[9]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i383[i + 0]) );
  }
  i374.blendShapes = i382
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i389 = data
  i388.triangles = i389[0]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i395 = data
  i394.name = i395[0]
  var i397 = i395[1]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i397[i + 0]) );
  }
  i394.frames = i396
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i398 = root || new pc.UnityMaterial()
  var i399 = data
  i398.name = i399[0]
  request.r(i399[1], i399[2], 0, i398, 'shader')
  i398.renderQueue = i399[3]
  i398.enableInstancing = !!i399[4]
  var i401 = i399[5]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i401[i + 0]) );
  }
  i398.floatParameters = i400
  var i403 = i399[6]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i403[i + 0]) );
  }
  i398.colorParameters = i402
  var i405 = i399[7]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i405[i + 0]) );
  }
  i398.vectorParameters = i404
  var i407 = i399[8]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i407[i + 0]) );
  }
  i398.textureParameters = i406
  var i409 = i399[9]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i409[i + 0]) );
  }
  i398.materialFlags = i408
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i413 = data
  i412.name = i413[0]
  i412.value = i413[1]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i417 = data
  i416.name = i417[0]
  i416.value = new pc.Color(i417[1], i417[2], i417[3], i417[4])
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i421 = data
  i420.name = i421[0]
  i420.value = new pc.Vec4( i421[1], i421[2], i421[3], i421[4] )
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i425 = data
  i424.name = i425[0]
  request.r(i425[1], i425[2], 0, i424, 'value')
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i429 = data
  i428.name = i429[0]
  i428.enabled = !!i429[1]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i431 = data
  i430.name = i431[0]
  i430.width = i431[1]
  i430.height = i431[2]
  i430.mipmapCount = i431[3]
  i430.anisoLevel = i431[4]
  i430.filterMode = i431[5]
  i430.hdr = !!i431[6]
  i430.format = i431[7]
  i430.wrapMode = i431[8]
  i430.alphaIsTransparency = !!i431[9]
  i430.alphaSource = i431[10]
  i430.graphicsFormat = i431[11]
  i430.sRGBTexture = !!i431[12]
  i430.desiredColorSpace = i431[13]
  i430.wrapU = i431[14]
  i430.wrapV = i431[15]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i433 = data
  i432.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i433[0], i432.main)
  i432.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i433[1], i432.colorBySpeed)
  i432.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i433[2], i432.colorOverLifetime)
  i432.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i433[3], i432.emission)
  i432.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i433[4], i432.rotationBySpeed)
  i432.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i433[5], i432.rotationOverLifetime)
  i432.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i433[6], i432.shape)
  i432.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i433[7], i432.sizeBySpeed)
  i432.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i433[8], i432.sizeOverLifetime)
  i432.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i433[9], i432.textureSheetAnimation)
  i432.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i433[10], i432.velocityOverLifetime)
  i432.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i433[11], i432.noise)
  i432.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i433[12], i432.inheritVelocity)
  i432.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i433[13], i432.forceOverLifetime)
  i432.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i433[14], i432.limitVelocityOverLifetime)
  i432.useAutoRandomSeed = !!i433[15]
  i432.randomSeed = i433[16]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i434 = root || new pc.ParticleSystemMain()
  var i435 = data
  i434.duration = i435[0]
  i434.loop = !!i435[1]
  i434.prewarm = !!i435[2]
  i434.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[3], i434.startDelay)
  i434.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[4], i434.startLifetime)
  i434.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[5], i434.startSpeed)
  i434.startSize3D = !!i435[6]
  i434.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[7], i434.startSizeX)
  i434.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[8], i434.startSizeY)
  i434.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[9], i434.startSizeZ)
  i434.startRotation3D = !!i435[10]
  i434.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[11], i434.startRotationX)
  i434.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[12], i434.startRotationY)
  i434.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[13], i434.startRotationZ)
  i434.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i435[14], i434.startColor)
  i434.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[15], i434.gravityModifier)
  i434.simulationSpace = i435[16]
  request.r(i435[17], i435[18], 0, i434, 'customSimulationSpace')
  i434.simulationSpeed = i435[19]
  i434.useUnscaledTime = !!i435[20]
  i434.scalingMode = i435[21]
  i434.playOnAwake = !!i435[22]
  i434.maxParticles = i435[23]
  i434.emitterVelocityMode = i435[24]
  i434.stopAction = i435[25]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i436 = root || new pc.MinMaxCurve()
  var i437 = data
  i436.mode = i437[0]
  i436.curveMin = new pc.AnimationCurve( { keys_flow: i437[1] } )
  i436.curveMax = new pc.AnimationCurve( { keys_flow: i437[2] } )
  i436.curveMultiplier = i437[3]
  i436.constantMin = i437[4]
  i436.constantMax = i437[5]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i438 = root || new pc.MinMaxGradient()
  var i439 = data
  i438.mode = i439[0]
  i438.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i439[1], i438.gradientMin)
  i438.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i439[2], i438.gradientMax)
  i438.colorMin = new pc.Color(i439[3], i439[4], i439[5], i439[6])
  i438.colorMax = new pc.Color(i439[7], i439[8], i439[9], i439[10])
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i441 = data
  i440.mode = i441[0]
  var i443 = i441[1]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i443[i + 0]) );
  }
  i440.colorKeys = i442
  var i445 = i441[2]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i445[i + 0]) );
  }
  i440.alphaKeys = i444
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i446 = root || new pc.ParticleSystemColorBySpeed()
  var i447 = data
  i446.enabled = !!i447[0]
  i446.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i447[1], i446.color)
  i446.range = new pc.Vec2( i447[2], i447[3] )
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i451 = data
  i450.color = new pc.Color(i451[0], i451[1], i451[2], i451[3])
  i450.time = i451[4]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i455 = data
  i454.alpha = i455[0]
  i454.time = i455[1]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i456 = root || new pc.ParticleSystemColorOverLifetime()
  var i457 = data
  i456.enabled = !!i457[0]
  i456.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i457[1], i456.color)
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i458 = root || new pc.ParticleSystemEmitter()
  var i459 = data
  i458.enabled = !!i459[0]
  i458.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i459[1], i458.rateOverTime)
  i458.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i459[2], i458.rateOverDistance)
  var i461 = i459[3]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i461[i + 0]) );
  }
  i458.bursts = i460
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i464 = root || new pc.ParticleSystemBurst()
  var i465 = data
  i464.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[0], i464.count)
  i464.cycleCount = i465[1]
  i464.minCount = i465[2]
  i464.maxCount = i465[3]
  i464.repeatInterval = i465[4]
  i464.time = i465[5]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i466 = root || new pc.ParticleSystemRotationBySpeed()
  var i467 = data
  i466.enabled = !!i467[0]
  i466.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[1], i466.x)
  i466.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[2], i466.y)
  i466.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[3], i466.z)
  i466.separateAxes = !!i467[4]
  i466.range = new pc.Vec2( i467[5], i467[6] )
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i468 = root || new pc.ParticleSystemRotationOverLifetime()
  var i469 = data
  i468.enabled = !!i469[0]
  i468.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[1], i468.x)
  i468.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[2], i468.y)
  i468.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[3], i468.z)
  i468.separateAxes = !!i469[4]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i470 = root || new pc.ParticleSystemShape()
  var i471 = data
  i470.enabled = !!i471[0]
  i470.shapeType = i471[1]
  i470.randomDirectionAmount = i471[2]
  i470.sphericalDirectionAmount = i471[3]
  i470.randomPositionAmount = i471[4]
  i470.alignToDirection = !!i471[5]
  i470.radius = i471[6]
  i470.radiusMode = i471[7]
  i470.radiusSpread = i471[8]
  i470.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[9], i470.radiusSpeed)
  i470.radiusThickness = i471[10]
  i470.angle = i471[11]
  i470.length = i471[12]
  i470.boxThickness = new pc.Vec3( i471[13], i471[14], i471[15] )
  i470.meshShapeType = i471[16]
  request.r(i471[17], i471[18], 0, i470, 'mesh')
  request.r(i471[19], i471[20], 0, i470, 'meshRenderer')
  request.r(i471[21], i471[22], 0, i470, 'skinnedMeshRenderer')
  i470.useMeshMaterialIndex = !!i471[23]
  i470.meshMaterialIndex = i471[24]
  i470.useMeshColors = !!i471[25]
  i470.normalOffset = i471[26]
  i470.arc = i471[27]
  i470.arcMode = i471[28]
  i470.arcSpread = i471[29]
  i470.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[30], i470.arcSpeed)
  i470.donutRadius = i471[31]
  i470.position = new pc.Vec3( i471[32], i471[33], i471[34] )
  i470.rotation = new pc.Vec3( i471[35], i471[36], i471[37] )
  i470.scale = new pc.Vec3( i471[38], i471[39], i471[40] )
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i472 = root || new pc.ParticleSystemSizeBySpeed()
  var i473 = data
  i472.enabled = !!i473[0]
  i472.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[1], i472.x)
  i472.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[2], i472.y)
  i472.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[3], i472.z)
  i472.separateAxes = !!i473[4]
  i472.range = new pc.Vec2( i473[5], i473[6] )
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i474 = root || new pc.ParticleSystemSizeOverLifetime()
  var i475 = data
  i474.enabled = !!i475[0]
  i474.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[1], i474.x)
  i474.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[2], i474.y)
  i474.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[3], i474.z)
  i474.separateAxes = !!i475[4]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i476 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i477 = data
  i476.enabled = !!i477[0]
  i476.mode = i477[1]
  i476.animation = i477[2]
  i476.numTilesX = i477[3]
  i476.numTilesY = i477[4]
  i476.useRandomRow = !!i477[5]
  i476.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[6], i476.frameOverTime)
  i476.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[7], i476.startFrame)
  i476.cycleCount = i477[8]
  i476.rowIndex = i477[9]
  i476.flipU = i477[10]
  i476.flipV = i477[11]
  i476.spriteCount = i477[12]
  var i479 = i477[13]
  var i478 = []
  for(var i = 0; i < i479.length; i += 2) {
  request.r(i479[i + 0], i479[i + 1], 2, i478, '')
  }
  i476.sprites = i478
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i482 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i483 = data
  i482.enabled = !!i483[0]
  i482.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[1], i482.x)
  i482.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[2], i482.y)
  i482.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[3], i482.z)
  i482.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[4], i482.radial)
  i482.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[5], i482.speedModifier)
  i482.space = i483[6]
  i482.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[7], i482.orbitalX)
  i482.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[8], i482.orbitalY)
  i482.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[9], i482.orbitalZ)
  i482.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[10], i482.orbitalOffsetX)
  i482.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[11], i482.orbitalOffsetY)
  i482.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[12], i482.orbitalOffsetZ)
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i484 = root || new pc.ParticleSystemNoise()
  var i485 = data
  i484.enabled = !!i485[0]
  i484.separateAxes = !!i485[1]
  i484.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[2], i484.strengthX)
  i484.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[3], i484.strengthY)
  i484.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[4], i484.strengthZ)
  i484.frequency = i485[5]
  i484.damping = !!i485[6]
  i484.octaveCount = i485[7]
  i484.octaveMultiplier = i485[8]
  i484.octaveScale = i485[9]
  i484.quality = i485[10]
  i484.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[11], i484.scrollSpeed)
  i484.scrollSpeedMultiplier = i485[12]
  i484.remapEnabled = !!i485[13]
  i484.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[14], i484.remapX)
  i484.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[15], i484.remapY)
  i484.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[16], i484.remapZ)
  i484.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[17], i484.positionAmount)
  i484.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[18], i484.rotationAmount)
  i484.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[19], i484.sizeAmount)
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i486 = root || new pc.ParticleSystemInheritVelocity()
  var i487 = data
  i486.enabled = !!i487[0]
  i486.mode = i487[1]
  i486.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[2], i486.curve)
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i488 = root || new pc.ParticleSystemForceOverLifetime()
  var i489 = data
  i488.enabled = !!i489[0]
  i488.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[1], i488.x)
  i488.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[2], i488.y)
  i488.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[3], i488.z)
  i488.space = i489[4]
  i488.randomized = !!i489[5]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i490 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i491 = data
  i490.enabled = !!i491[0]
  i490.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[1], i490.limit)
  i490.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[2], i490.limitX)
  i490.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[3], i490.limitY)
  i490.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[4], i490.limitZ)
  i490.dampen = i491[5]
  i490.separateAxes = !!i491[6]
  i490.space = i491[7]
  i490.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[8], i490.drag)
  i490.multiplyDragByParticleSize = !!i491[9]
  i490.multiplyDragByParticleVelocity = !!i491[10]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i493 = data
  i492.enabled = !!i493[0]
  request.r(i493[1], i493[2], 0, i492, 'sharedMaterial')
  var i495 = i493[3]
  var i494 = []
  for(var i = 0; i < i495.length; i += 2) {
  request.r(i495[i + 0], i495[i + 1], 2, i494, '')
  }
  i492.sharedMaterials = i494
  i492.receiveShadows = !!i493[4]
  i492.shadowCastingMode = i493[5]
  i492.sortingLayerID = i493[6]
  i492.sortingOrder = i493[7]
  i492.lightmapIndex = i493[8]
  i492.lightmapSceneIndex = i493[9]
  i492.lightmapScaleOffset = new pc.Vec4( i493[10], i493[11], i493[12], i493[13] )
  i492.lightProbeUsage = i493[14]
  i492.reflectionProbeUsage = i493[15]
  request.r(i493[16], i493[17], 0, i492, 'mesh')
  i492.meshCount = i493[18]
  i492.activeVertexStreamsCount = i493[19]
  i492.alignment = i493[20]
  i492.renderMode = i493[21]
  i492.sortMode = i493[22]
  i492.lengthScale = i493[23]
  i492.velocityScale = i493[24]
  i492.cameraVelocityScale = i493[25]
  i492.normalDirection = i493[26]
  i492.sortingFudge = i493[27]
  i492.minParticleSize = i493[28]
  i492.maxParticleSize = i493[29]
  i492.pivot = new pc.Vec3( i493[30], i493[31], i493[32] )
  request.r(i493[33], i493[34], 0, i492, 'trailMaterial')
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i497 = data
  i496.enabled = !!i497[0]
  i496.type = i497[1]
  i496.color = new pc.Color(i497[2], i497[3], i497[4], i497[5])
  i496.cullingMask = i497[6]
  i496.intensity = i497[7]
  i496.range = i497[8]
  i496.spotAngle = i497[9]
  i496.shadows = i497[10]
  i496.shadowNormalBias = i497[11]
  i496.shadowBias = i497[12]
  i496.shadowStrength = i497[13]
  i496.shadowResolution = i497[14]
  i496.lightmapBakeType = i497[15]
  i496.renderMode = i497[16]
  request.r(i497[17], i497[18], 0, i496, 'cookie')
  i496.cookieSize = i497[19]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i499 = data
  i498.enabled = !!i499[0]
  i498.isTrigger = !!i499[1]
  request.r(i499[2], i499[3], 0, i498, 'material')
  request.r(i499[4], i499[5], 0, i498, 'sharedMesh')
  i498.convex = !!i499[6]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i501 = data
  i500.name = i501[0]
  i500.atlasId = i501[1]
  i500.mipmapCount = i501[2]
  i500.hdr = !!i501[3]
  i500.size = i501[4]
  i500.anisoLevel = i501[5]
  i500.filterMode = i501[6]
  var i503 = i501[7]
  var i502 = []
  for(var i = 0; i < i503.length; i += 4) {
    i502.push( UnityEngine.Rect.MinMaxRect(i503[i + 0], i503[i + 1], i503[i + 2], i503[i + 3]) );
  }
  i500.rects = i502
  i500.wrapU = i501[8]
  i500.wrapV = i501[9]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i507 = data
  i506.name = i507[0]
  i506.index = i507[1]
  i506.startup = !!i507[2]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i509 = data
  i508.enabled = !!i509[0]
  i508.aspect = i509[1]
  i508.orthographic = !!i509[2]
  i508.orthographicSize = i509[3]
  i508.backgroundColor = new pc.Color(i509[4], i509[5], i509[6], i509[7])
  i508.nearClipPlane = i509[8]
  i508.farClipPlane = i509[9]
  i508.fieldOfView = i509[10]
  i508.depth = i509[11]
  i508.clearFlags = i509[12]
  i508.cullingMask = i509[13]
  i508.rect = i509[14]
  request.r(i509[15], i509[16], 0, i508, 'targetTexture')
  i508.usePhysicalProperties = !!i509[17]
  i508.focalLength = i509[18]
  i508.sensorSize = new pc.Vec2( i509[19], i509[20] )
  i508.lensShift = new pc.Vec2( i509[21], i509[22] )
  i508.gateFit = i509[23]
  i508.commandBufferCount = i509[24]
  i508.cameraType = i509[25]
  return i508
}

Deserializers["SmoothFollowCamera"] = function (request, data, root) {
  var i510 = root || request.c( 'SmoothFollowCamera' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'target')
  i510.offset = new pc.Vec3( i511[2], i511[3], i511[4] )
  i510.followSpeed = i511[5]
  i510.rotationSpeed = i511[6]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint' )
  var i513 = data
  i512.angularXDrive = request.d('UnityEngine.JointDrive', i513[0], i512.angularXDrive)
  i512.angularXLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i513[1], i512.angularXLimitSpring)
  i512.angularXMotion = i513[2]
  i512.angularYLimit = request.d('UnityEngine.SoftJointLimit', i513[3], i512.angularYLimit)
  i512.angularYMotion = i513[4]
  i512.angularYZDrive = request.d('UnityEngine.JointDrive', i513[5], i512.angularYZDrive)
  i512.angularYZLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i513[6], i512.angularYZLimitSpring)
  i512.angularZLimit = request.d('UnityEngine.SoftJointLimit', i513[7], i512.angularZLimit)
  i512.angularZMotion = i513[8]
  i512.configuredInWorldSpace = !!i513[9]
  i512.highAngularXLimit = request.d('UnityEngine.SoftJointLimit', i513[10], i512.highAngularXLimit)
  i512.linearLimit = request.d('UnityEngine.SoftJointLimit', i513[11], i512.linearLimit)
  i512.linearLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i513[12], i512.linearLimitSpring)
  i512.lowAngularXLimit = request.d('UnityEngine.SoftJointLimit', i513[13], i512.lowAngularXLimit)
  i512.rotationDriveMode = i513[14]
  i512.secondaryAxis = new pc.Vec3( i513[15], i513[16], i513[17] )
  i512.slerpDrive = request.d('UnityEngine.JointDrive', i513[18], i512.slerpDrive)
  i512.swapBodies = !!i513[19]
  i512.targetAngularVelocity = new pc.Vec3( i513[20], i513[21], i513[22] )
  i512.targetPosition = new pc.Vec3( i513[23], i513[24], i513[25] )
  i512.targetRotation = new pc.Quat(i513[26], i513[27], i513[28], i513[29])
  i512.targetVelocity = new pc.Vec3( i513[30], i513[31], i513[32] )
  i512.xDrive = request.d('UnityEngine.JointDrive', i513[33], i512.xDrive)
  i512.xMotion = i513[34]
  i512.yDrive = request.d('UnityEngine.JointDrive', i513[35], i512.yDrive)
  i512.yMotion = i513[36]
  i512.zDrive = request.d('UnityEngine.JointDrive', i513[37], i512.zDrive)
  i512.zMotion = i513[38]
  request.r(i513[39], i513[40], 0, i512, 'connectedBody')
  i512.axis = new pc.Vec3( i513[41], i513[42], i513[43] )
  i512.anchor = new pc.Vec3( i513[44], i513[45], i513[46] )
  i512.connectedAnchor = new pc.Vec3( i513[47], i513[48], i513[49] )
  i512.autoConfigureConnectedAnchor = !!i513[50]
  i512.massScale = i513[51]
  i512.connectedMassScale = i513[52]
  i512.enableCollision = !!i513[53]
  i512.breakForce = i513[54]
  i512.breakTorque = i513[55]
  return i512
}

Deserializers["CheckpointManager"] = function (request, data, root) {
  var i514 = root || request.c( 'CheckpointManager' )
  var i515 = data
  var i517 = i515[0]
  var i516 = []
  for(var i = 0; i < i517.length; i += 2) {
  request.r(i517[i + 0], i517[i + 1], 2, i516, '')
  }
  i514.checkpoints = i516
  return i514
}

Deserializers["AICarController"] = function (request, data, root) {
  var i520 = root || request.c( 'AICarController' )
  var i521 = data
  i520.moveSpeed = i521[0]
  i520.maxSpeed = i521[1]
  i520.smoothTime = i521[2]
  i520.turnSpeed = i521[3]
  i520.checkpointRadius = i521[4]
  i520.slowTurnThreshold = i521[5]
  i520.driftIntensity = i521[6]
  i520.obstacleDetectionRange = i521[7]
  i520.avoidanceStrength = i521[8]
  i520.obstacleLayers = UnityEngine.LayerMask.FromIntegerValue( i521[9] )
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i523 = data
  i522.enabled = !!i523[0]
  i522.center = new pc.Vec3( i523[1], i523[2], i523[3] )
  i522.radius = i523[4]
  i522.height = i523[5]
  i522.minMoveDistance = i523[6]
  i522.skinWidth = i523[7]
  i522.enableOverlapRecovery = !!i523[8]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i525 = data
  i524.enabled = !!i525[0]
  i524.isTrigger = !!i525[1]
  request.r(i525[2], i525[3], 0, i524, 'material')
  i524.center = new pc.Vec3( i525[4], i525[5], i525[6] )
  i524.radius = i525[7]
  return i524
}

Deserializers["PlayerCarController"] = function (request, data, root) {
  var i526 = root || request.c( 'PlayerCarController' )
  var i527 = data
  i526.moveSpeed = i527[0]
  i526.smoothTime = i527[1]
  i526.maxSpeed = i527[2]
  i526.turnSpeed = i527[3]
  i526.maxTurnAngle = i527[4]
  i526.checkpointRadius = i527[5]
  i526.slowTurnThreshold = i527[6]
  i526.driftIntensity = i527[7]
  i526.groundCheckDistance = i527[8]
  i526.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i527[9] )
  request.r(i527[10], i527[11], 0, i526, 'checkpointManager')
  request.r(i527[12], i527[13], 0, i526, 'Arrow')
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i529 = data
  i528.ambientIntensity = i529[0]
  i528.reflectionIntensity = i529[1]
  i528.ambientMode = i529[2]
  i528.ambientLight = new pc.Color(i529[3], i529[4], i529[5], i529[6])
  i528.ambientSkyColor = new pc.Color(i529[7], i529[8], i529[9], i529[10])
  i528.ambientGroundColor = new pc.Color(i529[11], i529[12], i529[13], i529[14])
  i528.ambientEquatorColor = new pc.Color(i529[15], i529[16], i529[17], i529[18])
  i528.fogColor = new pc.Color(i529[19], i529[20], i529[21], i529[22])
  i528.fogEndDistance = i529[23]
  i528.fogStartDistance = i529[24]
  i528.fogDensity = i529[25]
  i528.fog = !!i529[26]
  request.r(i529[27], i529[28], 0, i528, 'skybox')
  i528.fogMode = i529[29]
  var i531 = i529[30]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i531[i + 0]) );
  }
  i528.lightmaps = i530
  i528.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i529[31], i528.lightProbes)
  i528.lightmapsMode = i529[32]
  i528.mixedBakeMode = i529[33]
  i528.environmentLightingMode = i529[34]
  i528.ambientProbe = new pc.SphericalHarmonicsL2(i529[35])
  i528.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i529[36])
  i528.useReferenceAmbientProbe = !!i529[37]
  request.r(i529[38], i529[39], 0, i528, 'customReflection')
  request.r(i529[40], i529[41], 0, i528, 'defaultReflection')
  i528.defaultReflectionMode = i529[42]
  i528.defaultReflectionResolution = i529[43]
  i528.sunLightObjectId = i529[44]
  i528.pixelLightCount = i529[45]
  i528.defaultReflectionHDR = !!i529[46]
  i528.hasLightDataAsset = !!i529[47]
  i528.hasManualGenerate = !!i529[48]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'lightmapColor')
  request.r(i535[2], i535[3], 0, i534, 'lightmapDirection')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i536 = root || new UnityEngine.LightProbes()
  var i537 = data
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i545 = data
  i544.name = i545[0]
  i544.bounciness = i545[1]
  i544.dynamicFriction = i545[2]
  i544.staticFriction = i545[3]
  i544.frictionCombine = i545[4]
  i544.bounceCombine = i545[5]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i547 = data
  var i549 = i547[0]
  var i548 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i549.length; i += 1) {
    i548.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i549[i + 0]));
  }
  i546.ShaderCompilationErrors = i548
  i546.name = i547[1]
  i546.guid = i547[2]
  var i551 = i547[3]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( i551[i + 0] );
  }
  i546.shaderDefinedKeywords = i550
  var i553 = i547[4]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i553[i + 0]) );
  }
  i546.passes = i552
  var i555 = i547[5]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i555[i + 0]) );
  }
  i546.usePasses = i554
  var i557 = i547[6]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i557[i + 0]) );
  }
  i546.defaultParameterValues = i556
  request.r(i547[7], i547[8], 0, i546, 'unityFallbackShader')
  i546.readDepth = !!i547[9]
  i546.isCreatedByShaderGraph = !!i547[10]
  i546.compiled = !!i547[11]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i561 = data
  i560.shaderName = i561[0]
  i560.errorMessage = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i566 = root || new pc.UnityShaderPass()
  var i567 = data
  i566.id = i567[0]
  i566.subShaderIndex = i567[1]
  i566.name = i567[2]
  i566.passType = i567[3]
  i566.grabPassTextureName = i567[4]
  i566.usePass = !!i567[5]
  i566.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i567[6], i566.zTest)
  i566.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i567[7], i566.zWrite)
  i566.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i567[8], i566.culling)
  i566.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i567[9], i566.blending)
  i566.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i567[10], i566.alphaBlending)
  i566.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i567[11], i566.colorWriteMask)
  i566.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i567[12], i566.offsetUnits)
  i566.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i567[13], i566.offsetFactor)
  i566.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i567[14], i566.stencilRef)
  i566.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i567[15], i566.stencilReadMask)
  i566.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i567[16], i566.stencilWriteMask)
  i566.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i567[17], i566.stencilOp)
  i566.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i567[18], i566.stencilOpFront)
  i566.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i567[19], i566.stencilOpBack)
  var i569 = i567[20]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i569[i + 0]) );
  }
  i566.tags = i568
  var i571 = i567[21]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( i571[i + 0] );
  }
  i566.passDefinedKeywords = i570
  var i573 = i567[22]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i573[i + 0]) );
  }
  i566.passDefinedKeywordGroups = i572
  var i575 = i567[23]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i575[i + 0]) );
  }
  i566.variants = i574
  var i577 = i567[24]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i577[i + 0]) );
  }
  i566.excludedVariants = i576
  i566.hasDepthReader = !!i567[25]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i579 = data
  i578.val = i579[0]
  i578.name = i579[1]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i581 = data
  i580.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[0], i580.src)
  i580.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[1], i580.dst)
  i580.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[2], i580.op)
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i583 = data
  i582.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[0], i582.pass)
  i582.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[1], i582.fail)
  i582.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[2], i582.zFail)
  i582.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[3], i582.comp)
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i587 = data
  i586.name = i587[0]
  i586.value = i587[1]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i591 = data
  var i593 = i591[0]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( i593[i + 0] );
  }
  i590.keywords = i592
  i590.hasDiscard = !!i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i597 = data
  i596.passId = i597[0]
  i596.subShaderIndex = i597[1]
  var i599 = i597[2]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( i599[i + 0] );
  }
  i596.keywords = i598
  i596.vertexProgram = i597[3]
  i596.fragmentProgram = i597[4]
  i596.exportedForWebGl2 = !!i597[5]
  i596.readDepth = !!i597[6]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'shader')
  i602.pass = i603[2]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i607 = data
  i606.name = i607[0]
  i606.type = i607[1]
  i606.value = new pc.Vec4( i607[2], i607[3], i607[4], i607[5] )
  i606.textureValue = i607[6]
  i606.shaderPropertyFlag = i607[7]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i609 = data
  var i611 = i609[0]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i611[i + 0]) );
  }
  i608.files = i610
  i608.componentToPrefabIds = i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i615 = data
  i614.path = i615[0]
  request.r(i615[1], i615[2], 0, i614, 'unityObject')
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i617 = data
  var i619 = i617[0]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i619[i + 0]) );
  }
  i616.scriptsExecutionOrder = i618
  var i621 = i617[1]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i621[i + 0]) );
  }
  i616.sortingLayers = i620
  var i623 = i617[2]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i623[i + 0]) );
  }
  i616.cullingLayers = i622
  i616.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i617[3], i616.timeSettings)
  i616.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i617[4], i616.physicsSettings)
  i616.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i617[5], i616.physics2DSettings)
  i616.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i617[6], i616.qualitySettings)
  i616.enableRealtimeShadows = !!i617[7]
  i616.enableAutoInstancing = !!i617[8]
  i616.enableDynamicBatching = !!i617[9]
  i616.lightmapEncodingQuality = i617[10]
  i616.desiredColorSpace = i617[11]
  var i625 = i617[12]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( i625[i + 0] );
  }
  i616.allTags = i624
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i629 = data
  i628.name = i629[0]
  i628.value = i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i633 = data
  i632.id = i633[0]
  i632.name = i633[1]
  i632.value = i633[2]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i637 = data
  i636.id = i637[0]
  i636.name = i637[1]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i639 = data
  i638.fixedDeltaTime = i639[0]
  i638.maximumDeltaTime = i639[1]
  i638.timeScale = i639[2]
  i638.maximumParticleTimestep = i639[3]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i641 = data
  i640.gravity = new pc.Vec3( i641[0], i641[1], i641[2] )
  i640.defaultSolverIterations = i641[3]
  i640.bounceThreshold = i641[4]
  i640.autoSyncTransforms = !!i641[5]
  i640.autoSimulation = !!i641[6]
  var i643 = i641[7]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i643[i + 0]) );
  }
  i640.collisionMatrix = i642
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i647 = data
  i646.enabled = !!i647[0]
  i646.layerId = i647[1]
  i646.otherLayerId = i647[2]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'material')
  i648.gravity = new pc.Vec2( i649[2], i649[3] )
  i648.positionIterations = i649[4]
  i648.velocityIterations = i649[5]
  i648.velocityThreshold = i649[6]
  i648.maxLinearCorrection = i649[7]
  i648.maxAngularCorrection = i649[8]
  i648.maxTranslationSpeed = i649[9]
  i648.maxRotationSpeed = i649[10]
  i648.baumgarteScale = i649[11]
  i648.baumgarteTOIScale = i649[12]
  i648.timeToSleep = i649[13]
  i648.linearSleepTolerance = i649[14]
  i648.angularSleepTolerance = i649[15]
  i648.defaultContactOffset = i649[16]
  i648.autoSimulation = !!i649[17]
  i648.queriesHitTriggers = !!i649[18]
  i648.queriesStartInColliders = !!i649[19]
  i648.callbacksOnDisable = !!i649[20]
  i648.reuseCollisionCallbacks = !!i649[21]
  i648.autoSyncTransforms = !!i649[22]
  var i651 = i649[23]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i651[i + 0]) );
  }
  i648.collisionMatrix = i650
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i655 = data
  i654.enabled = !!i655[0]
  i654.layerId = i655[1]
  i654.otherLayerId = i655[2]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i657 = data
  var i659 = i657[0]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i659[i + 0]) );
  }
  i656.qualityLevels = i658
  var i661 = i657[1]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( i661[i + 0] );
  }
  i656.names = i660
  i656.shadows = i657[2]
  i656.anisotropicFiltering = i657[3]
  i656.antiAliasing = i657[4]
  i656.lodBias = i657[5]
  i656.shadowCascades = i657[6]
  i656.shadowDistance = i657[7]
  i656.shadowmaskMode = i657[8]
  i656.shadowProjection = i657[9]
  i656.shadowResolution = i657[10]
  i656.softParticles = !!i657[11]
  i656.softVegetation = !!i657[12]
  i656.activeColorSpace = i657[13]
  i656.desiredColorSpace = i657[14]
  i656.masterTextureLimit = i657[15]
  i656.maxQueuedFrames = i657[16]
  i656.particleRaycastBudget = i657[17]
  i656.pixelLightCount = i657[18]
  i656.realtimeReflectionProbes = !!i657[19]
  i656.shadowCascade2Split = i657[20]
  i656.shadowCascade4Split = new pc.Vec3( i657[21], i657[22], i657[23] )
  i656.streamingMipmapsActive = !!i657[24]
  i656.vSyncCount = i657[25]
  i656.asyncUploadBufferSize = i657[26]
  i656.asyncUploadTimeSlice = i657[27]
  i656.billboardsFaceCameraPosition = !!i657[28]
  i656.shadowNearPlaneOffset = i657[29]
  i656.streamingMipmapsMemoryBudget = i657[30]
  i656.maximumLODLevel = i657[31]
  i656.streamingMipmapsAddAllCameras = !!i657[32]
  i656.streamingMipmapsMaxLevelReduction = i657[33]
  i656.streamingMipmapsRenderersPerFrame = i657[34]
  i656.resolutionScalingFixedDPIFactor = i657[35]
  i656.streamingMipmapsMaxFileIORequests = i657[36]
  i656.currentQualityLevel = i657[37]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i667 = data
  i666.weight = i667[0]
  i666.vertices = i667[1]
  i666.normals = i667[2]
  i666.tangents = i667[3]
  return i666
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.WheelCollider":{"enabled":0,"center":1,"radius":4,"mass":5,"suspensionDistance":6,"forceAppPointDistance":7,"suspensionSpring":8,"forwardFriction":9,"sidewaysFriction":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint":{"angularXDrive":0,"angularXLimitSpring":1,"angularXMotion":2,"angularYLimit":3,"angularYMotion":4,"angularYZDrive":5,"angularYZLimitSpring":6,"angularZLimit":7,"angularZMotion":8,"configuredInWorldSpace":9,"highAngularXLimit":10,"linearLimit":11,"linearLimitSpring":12,"lowAngularXLimit":13,"rotationDriveMode":14,"secondaryAxis":15,"slerpDrive":18,"swapBodies":19,"targetAngularVelocity":20,"targetPosition":23,"targetRotation":26,"targetVelocity":30,"xDrive":33,"xMotion":34,"yDrive":35,"yMotion":36,"zDrive":37,"zMotion":38,"connectedBody":39,"axis":41,"anchor":44,"connectedAnchor":47,"autoConfigureConnectedAnchor":50,"massScale":51,"connectedMassScale":52,"enableCollision":53,"breakForce":54,"breakTorque":55},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"26":[27],"28":[27],"29":[27],"30":[27],"31":[27],"32":[27],"33":[34],"35":[14],"36":[1],"37":[1],"38":[1],"39":[1],"40":[1],"41":[1],"18":[1],"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[43],"50":[43],"51":[43],"52":[43],"53":[43],"54":[43],"55":[43],"56":[14],"57":[4],"58":[59],"60":[59],"61":[62],"63":[62],"64":[62],"65":[61],"66":[67,62],"68":[62],"69":[61],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[62],"76":[62],"77":[62],"78":[62],"79":[67,62],"80":[62],"81":[62],"82":[62],"83":[62],"84":[67,62],"85":[62],"86":[87],"88":[87],"89":[87],"90":[87],"91":[14],"92":[14],"93":[62],"94":[4,62],"95":[62,67],"96":[62],"97":[67,62],"98":[4],"99":[67,62],"100":[62],"101":[102],"103":[102],"104":[14],"105":[106],"107":[102]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.WheelCollider","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Light","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","SmoothFollowCamera","UnityEngine.ConfigurableJoint","CheckpointManager","AICarController","UnityEngine.CharacterController","UnityEngine.SphereCollider","PlayerCarController","UnityEngine.PhysicMaterial","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "INDIEZ";

Deserializers.lunaInitializationTime = "04/29/2025 09:21:16";

Deserializers.lunaDaysRunning = "5.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1795";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3082";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.INDIEZ";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "32df3fe5-f2bc-47ae-90cd-68181ce0ee07";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

