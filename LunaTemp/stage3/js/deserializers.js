var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointSpring' )
  var i533 = data
  i532.spring = i533[0]
  i532.damper = i533[1]
  i532.targetPosition = i533[2]
  return i532
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointMotor' )
  var i535 = data
  i534.m_TargetVelocity = i535[0]
  i534.m_Force = i535[1]
  i534.m_FreeSpin = i535[2]
  return i534
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointLimits' )
  var i537 = data
  i536.m_Min = i537[0]
  i536.m_Max = i537[1]
  i536.m_Bounciness = i537[2]
  i536.m_BounceMinVelocity = i537[3]
  i536.m_ContactDistance = i537[4]
  i536.minBounce = i537[5]
  i536.maxBounce = i537[6]
  return i536
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointDrive' )
  var i539 = data
  i538.m_PositionSpring = i539[0]
  i538.m_PositionDamper = i539[1]
  i538.m_MaximumForce = i539[2]
  i538.m_UseAcceleration = i539[3]
  return i538
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i541 = data
  i540.m_Spring = i541[0]
  i540.m_Damper = i541[1]
  return i540
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i543 = data
  i542.m_Limit = i543[0]
  i542.m_Bounciness = i543[1]
  i542.m_ContactDistance = i543[2]
  return i542
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i545 = data
  i544.m_ExtremumSlip = i545[0]
  i544.m_ExtremumValue = i545[1]
  i544.m_AsymptoteSlip = i545[2]
  i544.m_AsymptoteValue = i545[3]
  i544.m_Stiffness = i545[4]
  return i544
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i547 = data
  i546.m_LowerAngle = i547[0]
  i546.m_UpperAngle = i547[1]
  return i546
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i549 = data
  i548.m_MotorSpeed = i549[0]
  i548.m_MaximumMotorTorque = i549[1]
  return i548
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i551 = data
  i550.m_DampingRatio = i551[0]
  i550.m_Frequency = i551[1]
  i550.m_Angle = i551[2]
  return i550
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i553 = data
  i552.m_LowerTranslation = i553[0]
  i552.m_UpperTranslation = i553[1]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i555 = data
  i554.position = new pc.Vec3( i555[0], i555[1], i555[2] )
  i554.scale = new pc.Vec3( i555[3], i555[4], i555[5] )
  i554.rotation = new pc.Quat(i555[6], i555[7], i555[8], i555[9])
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i557 = data
  i556.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i557[0], i556.main)
  i556.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i557[1], i556.colorBySpeed)
  i556.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i557[2], i556.colorOverLifetime)
  i556.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i557[3], i556.emission)
  i556.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i557[4], i556.rotationBySpeed)
  i556.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i557[5], i556.rotationOverLifetime)
  i556.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i557[6], i556.shape)
  i556.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i557[7], i556.sizeBySpeed)
  i556.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i557[8], i556.sizeOverLifetime)
  i556.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i557[9], i556.textureSheetAnimation)
  i556.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i557[10], i556.velocityOverLifetime)
  i556.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i557[11], i556.noise)
  i556.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i557[12], i556.inheritVelocity)
  i556.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i557[13], i556.forceOverLifetime)
  i556.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i557[14], i556.limitVelocityOverLifetime)
  i556.useAutoRandomSeed = !!i557[15]
  i556.randomSeed = i557[16]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemMain()
  var i559 = data
  i558.duration = i559[0]
  i558.loop = !!i559[1]
  i558.prewarm = !!i559[2]
  i558.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[3], i558.startDelay)
  i558.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[4], i558.startLifetime)
  i558.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[5], i558.startSpeed)
  i558.startSize3D = !!i559[6]
  i558.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[7], i558.startSizeX)
  i558.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[8], i558.startSizeY)
  i558.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[9], i558.startSizeZ)
  i558.startRotation3D = !!i559[10]
  i558.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[11], i558.startRotationX)
  i558.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[12], i558.startRotationY)
  i558.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[13], i558.startRotationZ)
  i558.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i559[14], i558.startColor)
  i558.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[15], i558.gravityModifier)
  i558.simulationSpace = i559[16]
  request.r(i559[17], i559[18], 0, i558, 'customSimulationSpace')
  i558.simulationSpeed = i559[19]
  i558.useUnscaledTime = !!i559[20]
  i558.scalingMode = i559[21]
  i558.playOnAwake = !!i559[22]
  i558.maxParticles = i559[23]
  i558.emitterVelocityMode = i559[24]
  i558.stopAction = i559[25]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i560 = root || new pc.MinMaxCurve()
  var i561 = data
  i560.mode = i561[0]
  i560.curveMin = new pc.AnimationCurve( { keys_flow: i561[1] } )
  i560.curveMax = new pc.AnimationCurve( { keys_flow: i561[2] } )
  i560.curveMultiplier = i561[3]
  i560.constantMin = i561[4]
  i560.constantMax = i561[5]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i562 = root || new pc.MinMaxGradient()
  var i563 = data
  i562.mode = i563[0]
  i562.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i563[1], i562.gradientMin)
  i562.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i563[2], i562.gradientMax)
  i562.colorMin = new pc.Color(i563[3], i563[4], i563[5], i563[6])
  i562.colorMax = new pc.Color(i563[7], i563[8], i563[9], i563[10])
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i565 = data
  i564.mode = i565[0]
  var i567 = i565[1]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i567[i + 0]) );
  }
  i564.colorKeys = i566
  var i569 = i565[2]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i569[i + 0]) );
  }
  i564.alphaKeys = i568
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemColorBySpeed()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i571[1], i570.color)
  i570.range = new pc.Vec2( i571[2], i571[3] )
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i575 = data
  i574.color = new pc.Color(i575[0], i575[1], i575[2], i575[3])
  i574.time = i575[4]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i579 = data
  i578.alpha = i579[0]
  i578.time = i579[1]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemColorOverLifetime()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i581[1], i580.color)
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemEmitter()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[1], i582.rateOverTime)
  i582.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[2], i582.rateOverDistance)
  var i585 = i583[3]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i585[i + 0]) );
  }
  i582.bursts = i584
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemBurst()
  var i589 = data
  i588.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[0], i588.count)
  i588.cycleCount = i589[1]
  i588.minCount = i589[2]
  i588.maxCount = i589[3]
  i588.repeatInterval = i589[4]
  i588.time = i589[5]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemRotationBySpeed()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[1], i590.x)
  i590.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.y)
  i590.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.z)
  i590.separateAxes = !!i591[4]
  i590.range = new pc.Vec2( i591[5], i591[6] )
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemRotationOverLifetime()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[1], i592.x)
  i592.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.y)
  i592.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[3], i592.z)
  i592.separateAxes = !!i593[4]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemShape()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.shapeType = i595[1]
  i594.randomDirectionAmount = i595[2]
  i594.sphericalDirectionAmount = i595[3]
  i594.randomPositionAmount = i595[4]
  i594.alignToDirection = !!i595[5]
  i594.radius = i595[6]
  i594.radiusMode = i595[7]
  i594.radiusSpread = i595[8]
  i594.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[9], i594.radiusSpeed)
  i594.radiusThickness = i595[10]
  i594.angle = i595[11]
  i594.length = i595[12]
  i594.boxThickness = new pc.Vec3( i595[13], i595[14], i595[15] )
  i594.meshShapeType = i595[16]
  request.r(i595[17], i595[18], 0, i594, 'mesh')
  request.r(i595[19], i595[20], 0, i594, 'meshRenderer')
  request.r(i595[21], i595[22], 0, i594, 'skinnedMeshRenderer')
  i594.useMeshMaterialIndex = !!i595[23]
  i594.meshMaterialIndex = i595[24]
  i594.useMeshColors = !!i595[25]
  i594.normalOffset = i595[26]
  i594.arc = i595[27]
  i594.arcMode = i595[28]
  i594.arcSpread = i595[29]
  i594.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[30], i594.arcSpeed)
  i594.donutRadius = i595[31]
  i594.position = new pc.Vec3( i595[32], i595[33], i595[34] )
  i594.rotation = new pc.Vec3( i595[35], i595[36], i595[37] )
  i594.scale = new pc.Vec3( i595[38], i595[39], i595[40] )
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemSizeBySpeed()
  var i597 = data
  i596.enabled = !!i597[0]
  i596.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[1], i596.x)
  i596.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[2], i596.y)
  i596.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[3], i596.z)
  i596.separateAxes = !!i597[4]
  i596.range = new pc.Vec2( i597[5], i597[6] )
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i598 = root || new pc.ParticleSystemSizeOverLifetime()
  var i599 = data
  i598.enabled = !!i599[0]
  i598.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[1], i598.x)
  i598.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[2], i598.y)
  i598.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[3], i598.z)
  i598.separateAxes = !!i599[4]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i601 = data
  i600.enabled = !!i601[0]
  i600.mode = i601[1]
  i600.animation = i601[2]
  i600.numTilesX = i601[3]
  i600.numTilesY = i601[4]
  i600.useRandomRow = !!i601[5]
  i600.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[6], i600.frameOverTime)
  i600.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[7], i600.startFrame)
  i600.cycleCount = i601[8]
  i600.rowIndex = i601[9]
  i600.flipU = i601[10]
  i600.flipV = i601[11]
  i600.spriteCount = i601[12]
  var i603 = i601[13]
  var i602 = []
  for(var i = 0; i < i603.length; i += 2) {
  request.r(i603[i + 0], i603[i + 1], 2, i602, '')
  }
  i600.sprites = i602
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i607 = data
  i606.enabled = !!i607[0]
  i606.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[1], i606.x)
  i606.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[2], i606.y)
  i606.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[3], i606.z)
  i606.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[4], i606.radial)
  i606.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[5], i606.speedModifier)
  i606.space = i607[6]
  i606.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[7], i606.orbitalX)
  i606.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[8], i606.orbitalY)
  i606.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[9], i606.orbitalZ)
  i606.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[10], i606.orbitalOffsetX)
  i606.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[11], i606.orbitalOffsetY)
  i606.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[12], i606.orbitalOffsetZ)
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i608 = root || new pc.ParticleSystemNoise()
  var i609 = data
  i608.enabled = !!i609[0]
  i608.separateAxes = !!i609[1]
  i608.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[2], i608.strengthX)
  i608.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[3], i608.strengthY)
  i608.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[4], i608.strengthZ)
  i608.frequency = i609[5]
  i608.damping = !!i609[6]
  i608.octaveCount = i609[7]
  i608.octaveMultiplier = i609[8]
  i608.octaveScale = i609[9]
  i608.quality = i609[10]
  i608.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[11], i608.scrollSpeed)
  i608.scrollSpeedMultiplier = i609[12]
  i608.remapEnabled = !!i609[13]
  i608.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[14], i608.remapX)
  i608.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[15], i608.remapY)
  i608.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[16], i608.remapZ)
  i608.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[17], i608.positionAmount)
  i608.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[18], i608.rotationAmount)
  i608.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[19], i608.sizeAmount)
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i610 = root || new pc.ParticleSystemInheritVelocity()
  var i611 = data
  i610.enabled = !!i611[0]
  i610.mode = i611[1]
  i610.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[2], i610.curve)
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i612 = root || new pc.ParticleSystemForceOverLifetime()
  var i613 = data
  i612.enabled = !!i613[0]
  i612.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[1], i612.x)
  i612.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[2], i612.y)
  i612.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[3], i612.z)
  i612.space = i613[4]
  i612.randomized = !!i613[5]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i614 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i615 = data
  i614.enabled = !!i615[0]
  i614.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[1], i614.limit)
  i614.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[2], i614.limitX)
  i614.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[3], i614.limitY)
  i614.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[4], i614.limitZ)
  i614.dampen = i615[5]
  i614.separateAxes = !!i615[6]
  i614.space = i615[7]
  i614.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[8], i614.drag)
  i614.multiplyDragByParticleSize = !!i615[9]
  i614.multiplyDragByParticleVelocity = !!i615[10]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i617 = data
  i616.enabled = !!i617[0]
  request.r(i617[1], i617[2], 0, i616, 'sharedMaterial')
  var i619 = i617[3]
  var i618 = []
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 2, i618, '')
  }
  i616.sharedMaterials = i618
  i616.receiveShadows = !!i617[4]
  i616.shadowCastingMode = i617[5]
  i616.sortingLayerID = i617[6]
  i616.sortingOrder = i617[7]
  i616.lightmapIndex = i617[8]
  i616.lightmapSceneIndex = i617[9]
  i616.lightmapScaleOffset = new pc.Vec4( i617[10], i617[11], i617[12], i617[13] )
  i616.lightProbeUsage = i617[14]
  i616.reflectionProbeUsage = i617[15]
  request.r(i617[16], i617[17], 0, i616, 'mesh')
  i616.meshCount = i617[18]
  i616.activeVertexStreamsCount = i617[19]
  i616.alignment = i617[20]
  i616.renderMode = i617[21]
  i616.sortMode = i617[22]
  i616.lengthScale = i617[23]
  i616.velocityScale = i617[24]
  i616.cameraVelocityScale = i617[25]
  i616.normalDirection = i617[26]
  i616.sortingFudge = i617[27]
  i616.minParticleSize = i617[28]
  i616.maxParticleSize = i617[29]
  i616.pivot = new pc.Vec3( i617[30], i617[31], i617[32] )
  request.r(i617[33], i617[34], 0, i616, 'trailMaterial')
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i623 = data
  i622.name = i623[0]
  i622.tagId = i623[1]
  i622.enabled = !!i623[2]
  i622.isStatic = !!i623[3]
  i622.layer = i623[4]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i624 = root || new pc.UnityMaterial()
  var i625 = data
  i624.name = i625[0]
  request.r(i625[1], i625[2], 0, i624, 'shader')
  i624.renderQueue = i625[3]
  i624.enableInstancing = !!i625[4]
  var i627 = i625[5]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i627[i + 0]) );
  }
  i624.floatParameters = i626
  var i629 = i625[6]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i629[i + 0]) );
  }
  i624.colorParameters = i628
  var i631 = i625[7]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i631[i + 0]) );
  }
  i624.vectorParameters = i630
  var i633 = i625[8]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i633[i + 0]) );
  }
  i624.textureParameters = i632
  var i635 = i625[9]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i635[i + 0]) );
  }
  i624.materialFlags = i634
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i643 = data
  i642.name = i643[0]
  i642.value = new pc.Color(i643[1], i643[2], i643[3], i643[4])
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i647 = data
  i646.name = i647[0]
  i646.value = new pc.Vec4( i647[1], i647[2], i647[3], i647[4] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i651 = data
  i650.name = i651[0]
  request.r(i651[1], i651[2], 0, i650, 'value')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i655 = data
  i654.name = i655[0]
  i654.enabled = !!i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i657 = data
  i656.name = i657[0]
  i656.width = i657[1]
  i656.height = i657[2]
  i656.mipmapCount = i657[3]
  i656.anisoLevel = i657[4]
  i656.filterMode = i657[5]
  i656.hdr = !!i657[6]
  i656.format = i657[7]
  i656.wrapMode = i657[8]
  i656.alphaIsTransparency = !!i657[9]
  i656.alphaSource = i657[10]
  i656.graphicsFormat = i657[11]
  i656.sRGBTexture = !!i657[12]
  i656.desiredColorSpace = i657[13]
  i656.wrapU = i657[14]
  i656.wrapV = i657[15]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i659 = data
  i658.name = i659[0]
  i658.halfPrecision = !!i659[1]
  i658.useUInt32IndexFormat = !!i659[2]
  i658.vertexCount = i659[3]
  i658.aabb = i659[4]
  var i661 = i659[5]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( !!i661[i + 0] );
  }
  i658.streams = i660
  i658.vertices = i659[6]
  var i663 = i659[7]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i663[i + 0]) );
  }
  i658.subMeshes = i662
  var i665 = i659[8]
  var i664 = []
  for(var i = 0; i < i665.length; i += 16) {
    i664.push( new pc.Mat4().setData(i665[i + 0], i665[i + 1], i665[i + 2], i665[i + 3],  i665[i + 4], i665[i + 5], i665[i + 6], i665[i + 7],  i665[i + 8], i665[i + 9], i665[i + 10], i665[i + 11],  i665[i + 12], i665[i + 13], i665[i + 14], i665[i + 15]) );
  }
  i658.bindposes = i664
  var i667 = i659[9]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i667[i + 0]) );
  }
  i658.blendShapes = i666
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i673 = data
  i672.triangles = i673[0]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i679 = data
  i678.name = i679[0]
  var i681 = i679[1]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i681[i + 0]) );
  }
  i678.frames = i680
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i683 = data
  i682.mass = i683[0]
  i682.drag = i683[1]
  i682.angularDrag = i683[2]
  i682.useGravity = !!i683[3]
  i682.isKinematic = !!i683[4]
  i682.constraints = i683[5]
  i682.maxAngularVelocity = i683[6]
  i682.collisionDetectionMode = i683[7]
  i682.interpolation = i683[8]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'sharedMesh')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'additionalVertexStreams')
  i686.enabled = !!i687[2]
  request.r(i687[3], i687[4], 0, i686, 'sharedMaterial')
  var i689 = i687[5]
  var i688 = []
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 2, i688, '')
  }
  i686.sharedMaterials = i688
  i686.receiveShadows = !!i687[6]
  i686.shadowCastingMode = i687[7]
  i686.sortingLayerID = i687[8]
  i686.sortingOrder = i687[9]
  i686.lightmapIndex = i687[10]
  i686.lightmapSceneIndex = i687[11]
  i686.lightmapScaleOffset = new pc.Vec4( i687[12], i687[13], i687[14], i687[15] )
  i686.lightProbeUsage = i687[16]
  i686.reflectionProbeUsage = i687[17]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i691 = data
  i690.center = new pc.Vec3( i691[0], i691[1], i691[2] )
  i690.size = new pc.Vec3( i691[3], i691[4], i691[5] )
  i690.enabled = !!i691[6]
  i690.isTrigger = !!i691[7]
  request.r(i691[8], i691[9], 0, i690, 'material')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.WheelCollider"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.WheelCollider' )
  var i693 = data
  i692.enabled = !!i693[0]
  i692.center = new pc.Vec3( i693[1], i693[2], i693[3] )
  i692.radius = i693[4]
  i692.mass = i693[5]
  i692.suspensionDistance = i693[6]
  i692.forceAppPointDistance = i693[7]
  i692.suspensionSpring = request.d('UnityEngine.JointSpring', i693[8], i692.suspensionSpring)
  i692.forwardFriction = request.d('UnityEngine.WheelFrictionCurve', i693[9], i692.forwardFriction)
  i692.sidewaysFriction = request.d('UnityEngine.WheelFrictionCurve', i693[10], i692.sidewaysFriction)
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i695 = data
  i694.enabled = !!i695[0]
  i694.type = i695[1]
  i694.color = new pc.Color(i695[2], i695[3], i695[4], i695[5])
  i694.cullingMask = i695[6]
  i694.intensity = i695[7]
  i694.range = i695[8]
  i694.spotAngle = i695[9]
  i694.shadows = i695[10]
  i694.shadowNormalBias = i695[11]
  i694.shadowBias = i695[12]
  i694.shadowStrength = i695[13]
  i694.shadowResolution = i695[14]
  i694.lightmapBakeType = i695[15]
  i694.renderMode = i695[16]
  request.r(i695[17], i695[18], 0, i694, 'cookie')
  i694.cookieSize = i695[19]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i697 = data
  i696.enabled = !!i697[0]
  i696.isTrigger = !!i697[1]
  request.r(i697[2], i697[3], 0, i696, 'material')
  request.r(i697[4], i697[5], 0, i696, 'sharedMesh')
  i696.convex = !!i697[6]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i699 = data
  i698.name = i699[0]
  i698.atlasId = i699[1]
  i698.mipmapCount = i699[2]
  i698.hdr = !!i699[3]
  i698.size = i699[4]
  i698.anisoLevel = i699[5]
  i698.filterMode = i699[6]
  var i701 = i699[7]
  var i700 = []
  for(var i = 0; i < i701.length; i += 4) {
    i700.push( UnityEngine.Rect.MinMaxRect(i701[i + 0], i701[i + 1], i701[i + 2], i701[i + 3]) );
  }
  i698.rects = i700
  i698.wrapU = i699[8]
  i698.wrapV = i699[9]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i705 = data
  i704.name = i705[0]
  i704.index = i705[1]
  i704.startup = !!i705[2]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i707 = data
  i706.enabled = !!i707[0]
  i706.aspect = i707[1]
  i706.orthographic = !!i707[2]
  i706.orthographicSize = i707[3]
  i706.backgroundColor = new pc.Color(i707[4], i707[5], i707[6], i707[7])
  i706.nearClipPlane = i707[8]
  i706.farClipPlane = i707[9]
  i706.fieldOfView = i707[10]
  i706.depth = i707[11]
  i706.clearFlags = i707[12]
  i706.cullingMask = i707[13]
  i706.rect = i707[14]
  request.r(i707[15], i707[16], 0, i706, 'targetTexture')
  i706.usePhysicalProperties = !!i707[17]
  i706.focalLength = i707[18]
  i706.sensorSize = new pc.Vec2( i707[19], i707[20] )
  i706.lensShift = new pc.Vec2( i707[21], i707[22] )
  i706.gateFit = i707[23]
  i706.commandBufferCount = i707[24]
  i706.cameraType = i707[25]
  return i706
}

Deserializers["SmoothFollowCamera"] = function (request, data, root) {
  var i708 = root || request.c( 'SmoothFollowCamera' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'target')
  i708.offset = new pc.Vec3( i709[2], i709[3], i709[4] )
  i708.followSpeed = i709[5]
  i708.rotationSpeed = i709[6]
  return i708
}

Deserializers["CameraSequence"] = function (request, data, root) {
  var i710 = root || request.c( 'CameraSequence' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'pointA')
  request.r(i711[2], i711[3], 0, i710, 'pointB')
  request.r(i711[4], i711[5], 0, i710, 'pointC')
  request.r(i711[6], i711[7], 0, i710, 'smoothFollowCamera')
  i710.rotateDuration = i711[8]
  i710.moveDuration = i711[9]
  i710.rotationSpeed = i711[10]
  request.r(i711[11], i711[12], 0, i710, 'flashEffect')
  return i710
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'm_FirstSelected')
  i712.m_sendNavigationEvents = !!i713[2]
  i712.m_DragThreshold = i713[3]
  return i712
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i715 = data
  i714.m_HorizontalAxis = i715[0]
  i714.m_VerticalAxis = i715[1]
  i714.m_SubmitButton = i715[2]
  i714.m_CancelButton = i715[3]
  i714.m_InputActionsPerSecond = i715[4]
  i714.m_RepeatDelay = i715[5]
  i714.m_ForceModuleActive = !!i715[6]
  i714.m_SendPointerHoverToParent = !!i715[7]
  return i714
}

Deserializers["AICarController"] = function (request, data, root) {
  var i716 = root || request.c( 'AICarController' )
  var i717 = data
  i716.moveSpeed = i717[0]
  i716.maxSpeed = i717[1]
  i716.smoothTime = i717[2]
  i716.turnSpeed = i717[3]
  i716.checkpointRadius = i717[4]
  i716.slowTurnThreshold = i717[5]
  i716.driftIntensity = i717[6]
  i716.obstacleDetectionRange = i717[7]
  i716.avoidanceStrength = i717[8]
  i716.obstacleLayers = UnityEngine.LayerMask.FromIntegerValue( i717[9] )
  request.r(i717[10], i717[11], 0, i716, 'checkpointManager')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i719 = data
  i718.enabled = !!i719[0]
  i718.center = new pc.Vec3( i719[1], i719[2], i719[3] )
  i718.radius = i719[4]
  i718.height = i719[5]
  i718.minMoveDistance = i719[6]
  i718.skinWidth = i719[7]
  i718.enableOverlapRecovery = !!i719[8]
  return i718
}

Deserializers["PlayerCarController"] = function (request, data, root) {
  var i720 = root || request.c( 'PlayerCarController' )
  var i721 = data
  i720.moveSpeed = i721[0]
  i720.smoothTime = i721[1]
  i720.maxSpeed = i721[2]
  i720.turnSpeed = i721[3]
  i720.maxTurnAngle = i721[4]
  i720.slowTurnThreshold = i721[5]
  i720.driftIntensity = i721[6]
  request.r(i721[7], i721[8], 0, i720, 'checkpointManager')
  request.r(i721[9], i721[10], 0, i720, 'Arrow')
  return i720
}

Deserializers["CheckpointManager"] = function (request, data, root) {
  var i722 = root || request.c( 'CheckpointManager' )
  var i723 = data
  var i725 = i723[0]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i722.checkpoints = i724
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i729 = data
  i728.pivot = new pc.Vec2( i729[0], i729[1] )
  i728.anchorMin = new pc.Vec2( i729[2], i729[3] )
  i728.anchorMax = new pc.Vec2( i729[4], i729[5] )
  i728.sizeDelta = new pc.Vec2( i729[6], i729[7] )
  i728.anchoredPosition3D = new pc.Vec3( i729[8], i729[9], i729[10] )
  i728.rotation = new pc.Quat(i729[11], i729[12], i729[13], i729[14])
  i728.scale = new pc.Vec3( i729[15], i729[16], i729[17] )
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i731 = data
  i730.enabled = !!i731[0]
  i730.planeDistance = i731[1]
  i730.referencePixelsPerUnit = i731[2]
  i730.isFallbackOverlay = !!i731[3]
  i730.renderMode = i731[4]
  i730.renderOrder = i731[5]
  i730.sortingLayerName = i731[6]
  i730.sortingOrder = i731[7]
  i730.scaleFactor = i731[8]
  request.r(i731[9], i731[10], 0, i730, 'worldCamera')
  i730.overrideSorting = !!i731[11]
  i730.pixelPerfect = !!i731[12]
  i730.targetDisplay = i731[13]
  i730.overridePixelPerfect = !!i731[14]
  return i730
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i733 = data
  i732.m_UiScaleMode = i733[0]
  i732.m_ReferencePixelsPerUnit = i733[1]
  i732.m_ScaleFactor = i733[2]
  i732.m_ReferenceResolution = new pc.Vec2( i733[3], i733[4] )
  i732.m_ScreenMatchMode = i733[5]
  i732.m_MatchWidthOrHeight = i733[6]
  i732.m_PhysicalUnit = i733[7]
  i732.m_FallbackScreenDPI = i733[8]
  i732.m_DefaultSpriteDPI = i733[9]
  i732.m_DynamicPixelsPerUnit = i733[10]
  i732.m_PresetInfoIsWorld = !!i733[11]
  return i732
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i735 = data
  i734.m_IgnoreReversedGraphics = !!i735[0]
  i734.m_BlockingObjects = i735[1]
  i734.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i735[2] )
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i737 = data
  i736.cullTransparentMesh = !!i737[0]
  return i736
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.Image' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_Sprite')
  i738.m_Type = i739[2]
  i738.m_PreserveAspect = !!i739[3]
  i738.m_FillCenter = !!i739[4]
  i738.m_FillMethod = i739[5]
  i738.m_FillAmount = i739[6]
  i738.m_FillClockwise = !!i739[7]
  i738.m_FillOrigin = i739[8]
  i738.m_UseSpriteMesh = !!i739[9]
  i738.m_PixelsPerUnitMultiplier = i739[10]
  request.r(i739[11], i739[12], 0, i738, 'm_Material')
  i738.m_Maskable = !!i739[13]
  i738.m_Color = new pc.Color(i739[14], i739[15], i739[16], i739[17])
  i738.m_RaycastTarget = !!i739[18]
  i738.m_RaycastPadding = new pc.Vec4( i739[19], i739[20], i739[21], i739[22] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i741 = data
  i740.m_Alpha = i741[0]
  i740.m_Interactable = !!i741[1]
  i740.m_BlocksRaycasts = !!i741[2]
  i740.m_IgnoreParentGroups = !!i741[3]
  i740.enabled = !!i741[4]
  return i740
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i742 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i743 = data
  i742.m_hasFontAssetChanged = !!i743[0]
  request.r(i743[1], i743[2], 0, i742, 'm_baseMaterial')
  i742.m_maskOffset = new pc.Vec4( i743[3], i743[4], i743[5], i743[6] )
  i742.m_text = i743[7]
  i742.m_isRightToLeft = !!i743[8]
  request.r(i743[9], i743[10], 0, i742, 'm_fontAsset')
  request.r(i743[11], i743[12], 0, i742, 'm_sharedMaterial')
  var i745 = i743[13]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i742.m_fontSharedMaterials = i744
  request.r(i743[14], i743[15], 0, i742, 'm_fontMaterial')
  var i747 = i743[16]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i742.m_fontMaterials = i746
  i742.m_fontColor32 = UnityEngine.Color32.ConstructColor(i743[17], i743[18], i743[19], i743[20])
  i742.m_fontColor = new pc.Color(i743[21], i743[22], i743[23], i743[24])
  i742.m_enableVertexGradient = !!i743[25]
  i742.m_colorMode = i743[26]
  i742.m_fontColorGradient = request.d('TMPro.VertexGradient', i743[27], i742.m_fontColorGradient)
  request.r(i743[28], i743[29], 0, i742, 'm_fontColorGradientPreset')
  request.r(i743[30], i743[31], 0, i742, 'm_spriteAsset')
  i742.m_tintAllSprites = !!i743[32]
  request.r(i743[33], i743[34], 0, i742, 'm_StyleSheet')
  i742.m_TextStyleHashCode = i743[35]
  i742.m_overrideHtmlColors = !!i743[36]
  i742.m_faceColor = UnityEngine.Color32.ConstructColor(i743[37], i743[38], i743[39], i743[40])
  i742.m_fontSize = i743[41]
  i742.m_fontSizeBase = i743[42]
  i742.m_fontWeight = i743[43]
  i742.m_enableAutoSizing = !!i743[44]
  i742.m_fontSizeMin = i743[45]
  i742.m_fontSizeMax = i743[46]
  i742.m_fontStyle = i743[47]
  i742.m_HorizontalAlignment = i743[48]
  i742.m_VerticalAlignment = i743[49]
  i742.m_textAlignment = i743[50]
  i742.m_characterSpacing = i743[51]
  i742.m_wordSpacing = i743[52]
  i742.m_lineSpacing = i743[53]
  i742.m_lineSpacingMax = i743[54]
  i742.m_paragraphSpacing = i743[55]
  i742.m_charWidthMaxAdj = i743[56]
  i742.m_enableWordWrapping = !!i743[57]
  i742.m_wordWrappingRatios = i743[58]
  i742.m_overflowMode = i743[59]
  request.r(i743[60], i743[61], 0, i742, 'm_linkedTextComponent')
  request.r(i743[62], i743[63], 0, i742, 'parentLinkedComponent')
  i742.m_enableKerning = !!i743[64]
  i742.m_enableExtraPadding = !!i743[65]
  i742.checkPaddingRequired = !!i743[66]
  i742.m_isRichText = !!i743[67]
  i742.m_parseCtrlCharacters = !!i743[68]
  i742.m_isOrthographic = !!i743[69]
  i742.m_isCullingEnabled = !!i743[70]
  i742.m_horizontalMapping = i743[71]
  i742.m_verticalMapping = i743[72]
  i742.m_uvLineOffset = i743[73]
  i742.m_geometrySortingOrder = i743[74]
  i742.m_IsTextObjectScaleStatic = !!i743[75]
  i742.m_VertexBufferAutoSizeReduction = !!i743[76]
  i742.m_useMaxVisibleDescender = !!i743[77]
  i742.m_pageToDisplay = i743[78]
  i742.m_margin = new pc.Vec4( i743[79], i743[80], i743[81], i743[82] )
  i742.m_isUsingLegacyAnimationComponent = !!i743[83]
  i742.m_isVolumetricText = !!i743[84]
  request.r(i743[85], i743[86], 0, i742, 'm_Material')
  i742.m_Maskable = !!i743[87]
  i742.m_Color = new pc.Color(i743[88], i743[89], i743[90], i743[91])
  i742.m_RaycastTarget = !!i743[92]
  i742.m_RaycastPadding = new pc.Vec4( i743[93], i743[94], i743[95], i743[96] )
  return i742
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i748 = root || request.c( 'TMPro.VertexGradient' )
  var i749 = data
  i748.topLeft = new pc.Color(i749[0], i749[1], i749[2], i749[3])
  i748.topRight = new pc.Color(i749[4], i749[5], i749[6], i749[7])
  i748.bottomLeft = new pc.Color(i749[8], i749[9], i749[10], i749[11])
  i748.bottomRight = new pc.Color(i749[12], i749[13], i749[14], i749[15])
  return i748
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Button' )
  var i751 = data
  i750.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i751[0], i750.m_OnClick)
  i750.m_Navigation = request.d('UnityEngine.UI.Navigation', i751[1], i750.m_Navigation)
  i750.m_Transition = i751[2]
  i750.m_Colors = request.d('UnityEngine.UI.ColorBlock', i751[3], i750.m_Colors)
  i750.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i751[4], i750.m_SpriteState)
  i750.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i751[5], i750.m_AnimationTriggers)
  i750.m_Interactable = !!i751[6]
  request.r(i751[7], i751[8], 0, i750, 'm_TargetGraphic')
  return i750
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i753 = data
  i752.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i753[0], i752.m_PersistentCalls)
  return i752
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i755 = data
  var i757 = i755[0]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('UnityEngine.Events.PersistentCall', i757[i + 0]));
  }
  i754.m_Calls = i756
  return i754
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_Target')
  i760.m_TargetAssemblyTypeName = i761[2]
  i760.m_MethodName = i761[3]
  i760.m_Mode = i761[4]
  i760.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i761[5], i760.m_Arguments)
  i760.m_CallState = i761[6]
  return i760
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'm_ObjectArgument')
  i762.m_ObjectArgumentAssemblyTypeName = i763[2]
  i762.m_IntArgument = i763[3]
  i762.m_FloatArgument = i763[4]
  i762.m_StringArgument = i763[5]
  i762.m_BoolArgument = !!i763[6]
  return i762
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i765 = data
  i764.m_Mode = i765[0]
  i764.m_WrapAround = !!i765[1]
  request.r(i765[2], i765[3], 0, i764, 'm_SelectOnUp')
  request.r(i765[4], i765[5], 0, i764, 'm_SelectOnDown')
  request.r(i765[6], i765[7], 0, i764, 'm_SelectOnLeft')
  request.r(i765[8], i765[9], 0, i764, 'm_SelectOnRight')
  return i764
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i767 = data
  i766.m_NormalColor = new pc.Color(i767[0], i767[1], i767[2], i767[3])
  i766.m_HighlightedColor = new pc.Color(i767[4], i767[5], i767[6], i767[7])
  i766.m_PressedColor = new pc.Color(i767[8], i767[9], i767[10], i767[11])
  i766.m_SelectedColor = new pc.Color(i767[12], i767[13], i767[14], i767[15])
  i766.m_DisabledColor = new pc.Color(i767[16], i767[17], i767[18], i767[19])
  i766.m_ColorMultiplier = i767[20]
  i766.m_FadeDuration = i767[21]
  return i766
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'm_HighlightedSprite')
  request.r(i769[2], i769[3], 0, i768, 'm_PressedSprite')
  request.r(i769[4], i769[5], 0, i768, 'm_SelectedSprite')
  request.r(i769[6], i769[7], 0, i768, 'm_DisabledSprite')
  return i768
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i771 = data
  i770.m_NormalTrigger = i771[0]
  i770.m_HighlightedTrigger = i771[1]
  i770.m_PressedTrigger = i771[2]
  i770.m_SelectedTrigger = i771[3]
  i770.m_DisabledTrigger = i771[4]
  return i770
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.Text' )
  var i773 = data
  i772.m_FontData = request.d('UnityEngine.UI.FontData', i773[0], i772.m_FontData)
  i772.m_Text = i773[1]
  request.r(i773[2], i773[3], 0, i772, 'm_Material')
  i772.m_Maskable = !!i773[4]
  i772.m_Color = new pc.Color(i773[5], i773[6], i773[7], i773[8])
  i772.m_RaycastTarget = !!i773[9]
  i772.m_RaycastPadding = new pc.Vec4( i773[10], i773[11], i773[12], i773[13] )
  return i772
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.FontData' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'm_Font')
  i774.m_FontSize = i775[2]
  i774.m_FontStyle = i775[3]
  i774.m_BestFit = !!i775[4]
  i774.m_MinSize = i775[5]
  i774.m_MaxSize = i775[6]
  i774.m_Alignment = i775[7]
  i774.m_AlignByGeometry = !!i775[8]
  i774.m_RichText = !!i775[9]
  i774.m_HorizontalOverflow = i775[10]
  i774.m_VerticalOverflow = i775[11]
  i774.m_LineSpacing = i775[12]
  return i774
}

Deserializers["UIManager"] = function (request, data, root) {
  var i776 = root || request.c( 'UIManager' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'fireworkGroup')
  request.r(i777[2], i777[3], 0, i776, 'fireworkStart')
  var i779 = i777[4]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.Cars = i778
  request.r(i777[5], i777[6], 0, i776, 'Menu')
  request.r(i777[7], i777[8], 0, i776, 'Scene')
  request.r(i777[9], i777[10], 0, i776, 'cameraSequence')
  request.r(i777[11], i777[12], 0, i776, 'countdownText')
  i776.timeBetweenCounts = i777[13]
  request.r(i777[14], i777[15], 0, i776, 'barFill')
  i776.fillDuration = i777[16]
  i776.shrinkDuration = i777[17]
  request.r(i777[18], i777[19], 0, i776, 'playerCarController')
  request.r(i777[20], i777[21], 0, i776, 'roundText')
  i776.totalLaps = i777[22]
  request.r(i777[23], i777[24], 0, i776, 'startBtn')
  request.r(i777[25], i777[26], 0, i776, 'retryBtn')
  request.r(i777[27], i777[28], 0, i776, 'nextBtn')
  return i776
}

Deserializers["GameManager"] = function (request, data, root) {
  var i782 = root || request.c( 'GameManager' )
  var i783 = data
  var i785 = i783[0]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.seasonEffectArray = i784
  var i787 = i783[1]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i782.speedUpEffectArray = i786
  request.r(i783[2], i783[3], 0, i782, 'mapRenderer')
  var i789 = i783[4]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i782.seasonMaterialArray = i788
  var i791 = i783[5]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i782.playerCarArray = i790
  request.r(i783[6], i783[7], 0, i782, 'playerCarController')
  var i793 = i783[8]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i782.carAIArray = i792
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i795 = data
  i794.ambientIntensity = i795[0]
  i794.reflectionIntensity = i795[1]
  i794.ambientMode = i795[2]
  i794.ambientLight = new pc.Color(i795[3], i795[4], i795[5], i795[6])
  i794.ambientSkyColor = new pc.Color(i795[7], i795[8], i795[9], i795[10])
  i794.ambientGroundColor = new pc.Color(i795[11], i795[12], i795[13], i795[14])
  i794.ambientEquatorColor = new pc.Color(i795[15], i795[16], i795[17], i795[18])
  i794.fogColor = new pc.Color(i795[19], i795[20], i795[21], i795[22])
  i794.fogEndDistance = i795[23]
  i794.fogStartDistance = i795[24]
  i794.fogDensity = i795[25]
  i794.fog = !!i795[26]
  request.r(i795[27], i795[28], 0, i794, 'skybox')
  i794.fogMode = i795[29]
  var i797 = i795[30]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i797[i + 0]) );
  }
  i794.lightmaps = i796
  i794.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i795[31], i794.lightProbes)
  i794.lightmapsMode = i795[32]
  i794.mixedBakeMode = i795[33]
  i794.environmentLightingMode = i795[34]
  i794.ambientProbe = new pc.SphericalHarmonicsL2(i795[35])
  i794.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i795[36])
  i794.useReferenceAmbientProbe = !!i795[37]
  request.r(i795[38], i795[39], 0, i794, 'customReflection')
  request.r(i795[40], i795[41], 0, i794, 'defaultReflection')
  i794.defaultReflectionMode = i795[42]
  i794.defaultReflectionResolution = i795[43]
  i794.sunLightObjectId = i795[44]
  i794.pixelLightCount = i795[45]
  i794.defaultReflectionHDR = !!i795[46]
  i794.hasLightDataAsset = !!i795[47]
  i794.hasManualGenerate = !!i795[48]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'lightmapColor')
  request.r(i801[2], i801[3], 0, i800, 'lightmapDirection')
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i802 = root || new UnityEngine.LightProbes()
  var i803 = data
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i811 = data
  i810.name = i811[0]
  i810.bounciness = i811[1]
  i810.dynamicFriction = i811[2]
  i810.staticFriction = i811[3]
  i810.frictionCombine = i811[4]
  i810.bounceCombine = i811[5]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i813 = data
  var i815 = i813[0]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i815[i + 0]));
  }
  i812.ShaderCompilationErrors = i814
  i812.name = i813[1]
  i812.guid = i813[2]
  var i817 = i813[3]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i812.shaderDefinedKeywords = i816
  var i819 = i813[4]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i819[i + 0]) );
  }
  i812.passes = i818
  var i821 = i813[5]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i821[i + 0]) );
  }
  i812.usePasses = i820
  var i823 = i813[6]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i823[i + 0]) );
  }
  i812.defaultParameterValues = i822
  request.r(i813[7], i813[8], 0, i812, 'unityFallbackShader')
  i812.readDepth = !!i813[9]
  i812.isCreatedByShaderGraph = !!i813[10]
  i812.compiled = !!i813[11]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i827 = data
  i826.shaderName = i827[0]
  i826.errorMessage = i827[1]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i832 = root || new pc.UnityShaderPass()
  var i833 = data
  i832.id = i833[0]
  i832.subShaderIndex = i833[1]
  i832.name = i833[2]
  i832.passType = i833[3]
  i832.grabPassTextureName = i833[4]
  i832.usePass = !!i833[5]
  i832.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[6], i832.zTest)
  i832.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[7], i832.zWrite)
  i832.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[8], i832.culling)
  i832.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i833[9], i832.blending)
  i832.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i833[10], i832.alphaBlending)
  i832.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[11], i832.colorWriteMask)
  i832.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[12], i832.offsetUnits)
  i832.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[13], i832.offsetFactor)
  i832.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[14], i832.stencilRef)
  i832.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[15], i832.stencilReadMask)
  i832.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[16], i832.stencilWriteMask)
  i832.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i833[17], i832.stencilOp)
  i832.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i833[18], i832.stencilOpFront)
  i832.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i833[19], i832.stencilOpBack)
  var i835 = i833[20]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i835[i + 0]) );
  }
  i832.tags = i834
  var i837 = i833[21]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i832.passDefinedKeywords = i836
  var i839 = i833[22]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i839[i + 0]) );
  }
  i832.passDefinedKeywordGroups = i838
  var i841 = i833[23]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i841[i + 0]) );
  }
  i832.variants = i840
  var i843 = i833[24]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i843[i + 0]) );
  }
  i832.excludedVariants = i842
  i832.hasDepthReader = !!i833[25]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i845 = data
  i844.val = i845[0]
  i844.name = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i847 = data
  i846.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[0], i846.src)
  i846.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[1], i846.dst)
  i846.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[2], i846.op)
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i849 = data
  i848.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[0], i848.pass)
  i848.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[1], i848.fail)
  i848.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[2], i848.zFail)
  i848.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[3], i848.comp)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i853 = data
  i852.name = i853[0]
  i852.value = i853[1]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i857 = data
  var i859 = i857[0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( i859[i + 0] );
  }
  i856.keywords = i858
  i856.hasDiscard = !!i857[1]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i863 = data
  i862.passId = i863[0]
  i862.subShaderIndex = i863[1]
  var i865 = i863[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i862.keywords = i864
  i862.vertexProgram = i863[3]
  i862.fragmentProgram = i863[4]
  i862.exportedForWebGl2 = !!i863[5]
  i862.readDepth = !!i863[6]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'shader')
  i868.pass = i869[2]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i873 = data
  i872.name = i873[0]
  i872.type = i873[1]
  i872.value = new pc.Vec4( i873[2], i873[3], i873[4], i873[5] )
  i872.textureValue = i873[6]
  i872.shaderPropertyFlag = i873[7]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i875 = data
  i874.name = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'texture')
  i874.aabb = i875[3]
  i874.vertices = i875[4]
  i874.triangles = i875[5]
  i874.textureRect = UnityEngine.Rect.MinMaxRect(i875[6], i875[7], i875[8], i875[9])
  i874.packedRect = UnityEngine.Rect.MinMaxRect(i875[10], i875[11], i875[12], i875[13])
  i874.border = new pc.Vec4( i875[14], i875[15], i875[16], i875[17] )
  i874.transparency = i875[18]
  i874.bounds = i875[19]
  i874.pixelsPerUnit = i875[20]
  i874.textureWidth = i875[21]
  i874.textureHeight = i875[22]
  i874.nativeSize = new pc.Vec2( i875[23], i875[24] )
  i874.pivot = new pc.Vec2( i875[25], i875[26] )
  i874.textureRectOffset = new pc.Vec2( i875[27], i875[28] )
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i877 = data
  i876.name = i877[0]
  i876.ascent = i877[1]
  i876.originalLineHeight = i877[2]
  i876.fontSize = i877[3]
  var i879 = i877[4]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i879[i + 0]) );
  }
  i876.characterInfo = i878
  request.r(i877[5], i877[6], 0, i876, 'texture')
  i876.originalFontSize = i877[7]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i883 = data
  i882.index = i883[0]
  i882.advance = i883[1]
  i882.bearing = i883[2]
  i882.glyphWidth = i883[3]
  i882.glyphHeight = i883[4]
  i882.minX = i883[5]
  i882.maxX = i883[6]
  i882.minY = i883[7]
  i882.maxY = i883[8]
  i882.uvBottomLeftX = i883[9]
  i882.uvBottomLeftY = i883[10]
  i882.uvBottomRightX = i883[11]
  i882.uvBottomRightY = i883[12]
  i882.uvTopLeftX = i883[13]
  i882.uvTopLeftY = i883[14]
  i882.uvTopRightX = i883[15]
  i882.uvTopRightY = i883[16]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i885 = data
  i884.name = i885[0]
  i884.bytes64 = i885[1]
  i884.data = i885[2]
  return i884
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i887 = data
  i886.hashCode = i887[0]
  request.r(i887[1], i887[2], 0, i886, 'material')
  i886.materialHashCode = i887[3]
  request.r(i887[4], i887[5], 0, i886, 'atlas')
  i886.normalStyle = i887[6]
  i886.normalSpacingOffset = i887[7]
  i886.boldStyle = i887[8]
  i886.boldSpacing = i887[9]
  i886.italicStyle = i887[10]
  i886.tabSize = i887[11]
  i886.m_Version = i887[12]
  i886.m_SourceFontFileGUID = i887[13]
  request.r(i887[14], i887[15], 0, i886, 'm_SourceFontFile_EditorRef')
  request.r(i887[16], i887[17], 0, i886, 'm_SourceFontFile')
  i886.m_AtlasPopulationMode = i887[18]
  i886.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i887[19], i886.m_FaceInfo)
  var i889 = i887[20]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('UnityEngine.TextCore.Glyph', i889[i + 0]));
  }
  i886.m_GlyphTable = i888
  var i891 = i887[21]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('TMPro.TMP_Character', i891[i + 0]));
  }
  i886.m_CharacterTable = i890
  var i893 = i887[22]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i886.m_AtlasTextures = i892
  i886.m_AtlasTextureIndex = i887[23]
  i886.m_IsMultiAtlasTexturesEnabled = !!i887[24]
  i886.m_ClearDynamicDataOnBuild = !!i887[25]
  var i895 = i887[26]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('UnityEngine.TextCore.GlyphRect', i895[i + 0]));
  }
  i886.m_UsedGlyphRects = i894
  var i897 = i887[27]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('UnityEngine.TextCore.GlyphRect', i897[i + 0]));
  }
  i886.m_FreeGlyphRects = i896
  i886.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i887[28], i886.m_fontInfo)
  i886.m_AtlasWidth = i887[29]
  i886.m_AtlasHeight = i887[30]
  i886.m_AtlasPadding = i887[31]
  i886.m_AtlasRenderMode = i887[32]
  var i899 = i887[33]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i899.length; i += 1) {
    i898.add(request.d('TMPro.TMP_Glyph', i899[i + 0]));
  }
  i886.m_glyphInfoList = i898
  i886.m_KerningTable = request.d('TMPro.KerningTable', i887[34], i886.m_KerningTable)
  i886.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i887[35], i886.m_FontFeatureTable)
  var i901 = i887[36]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 1, i900, '')
  }
  i886.fallbackFontAssets = i900
  var i903 = i887[37]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 1, i902, '')
  }
  i886.m_FallbackFontAssetTable = i902
  i886.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i887[38], i886.m_CreationSettings)
  var i905 = i887[39]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('TMPro.TMP_FontWeightPair', i905[i + 0]) );
  }
  i886.m_FontWeightTable = i904
  var i907 = i887[40]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('TMPro.TMP_FontWeightPair', i907[i + 0]) );
  }
  i886.fontWeights = i906
  return i886
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i909 = data
  i908.m_FaceIndex = i909[0]
  i908.m_FamilyName = i909[1]
  i908.m_StyleName = i909[2]
  i908.m_PointSize = i909[3]
  i908.m_Scale = i909[4]
  i908.m_UnitsPerEM = i909[5]
  i908.m_LineHeight = i909[6]
  i908.m_AscentLine = i909[7]
  i908.m_CapLine = i909[8]
  i908.m_MeanLine = i909[9]
  i908.m_Baseline = i909[10]
  i908.m_DescentLine = i909[11]
  i908.m_SuperscriptOffset = i909[12]
  i908.m_SuperscriptSize = i909[13]
  i908.m_SubscriptOffset = i909[14]
  i908.m_SubscriptSize = i909[15]
  i908.m_UnderlineOffset = i909[16]
  i908.m_UnderlineThickness = i909[17]
  i908.m_StrikethroughOffset = i909[18]
  i908.m_StrikethroughThickness = i909[19]
  i908.m_TabWidth = i909[20]
  return i908
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i913 = data
  i912.m_Index = i913[0]
  i912.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i913[1], i912.m_Metrics)
  i912.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i913[2], i912.m_GlyphRect)
  i912.m_Scale = i913[3]
  i912.m_AtlasIndex = i913[4]
  i912.m_ClassDefinitionType = i913[5]
  return i912
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i915 = data
  i914.m_Width = i915[0]
  i914.m_Height = i915[1]
  i914.m_HorizontalBearingX = i915[2]
  i914.m_HorizontalBearingY = i915[3]
  i914.m_HorizontalAdvance = i915[4]
  return i914
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i917 = data
  i916.m_X = i917[0]
  i916.m_Y = i917[1]
  i916.m_Width = i917[2]
  i916.m_Height = i917[3]
  return i916
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.TMP_Character' )
  var i921 = data
  i920.m_ElementType = i921[0]
  i920.m_Unicode = i921[1]
  i920.m_GlyphIndex = i921[2]
  i920.m_Scale = i921[3]
  return i920
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i927 = data
  i926.Name = i927[0]
  i926.PointSize = i927[1]
  i926.Scale = i927[2]
  i926.CharacterCount = i927[3]
  i926.LineHeight = i927[4]
  i926.Baseline = i927[5]
  i926.Ascender = i927[6]
  i926.CapHeight = i927[7]
  i926.Descender = i927[8]
  i926.CenterLine = i927[9]
  i926.SuperscriptOffset = i927[10]
  i926.SubscriptOffset = i927[11]
  i926.SubSize = i927[12]
  i926.Underline = i927[13]
  i926.UnderlineThickness = i927[14]
  i926.strikethrough = i927[15]
  i926.strikethroughThickness = i927[16]
  i926.TabWidth = i927[17]
  i926.Padding = i927[18]
  i926.AtlasWidth = i927[19]
  i926.AtlasHeight = i927[20]
  return i926
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.TMP_Glyph' )
  var i931 = data
  i930.id = i931[0]
  i930.x = i931[1]
  i930.y = i931[2]
  i930.width = i931[3]
  i930.height = i931[4]
  i930.xOffset = i931[5]
  i930.yOffset = i931[6]
  i930.xAdvance = i931[7]
  i930.scale = i931[8]
  return i930
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.KerningTable' )
  var i933 = data
  var i935 = i933[0]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i935.length; i += 1) {
    i934.add(request.d('TMPro.KerningPair', i935[i + 0]));
  }
  i932.kerningPairs = i934
  return i932
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.KerningPair' )
  var i939 = data
  i938.xOffset = i939[0]
  i938.m_FirstGlyph = i939[1]
  i938.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i939[2], i938.m_FirstGlyphAdjustments)
  i938.m_SecondGlyph = i939[3]
  i938.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i939[4], i938.m_SecondGlyphAdjustments)
  i938.m_IgnoreSpacingAdjustments = !!i939[5]
  return i938
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i941 = data
  var i943 = i941[0]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i943[i + 0]));
  }
  i940.m_GlyphPairAdjustmentRecords = i942
  return i940
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i947 = data
  i946.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i947[0], i946.m_FirstAdjustmentRecord)
  i946.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i947[1], i946.m_SecondAdjustmentRecord)
  i946.m_FeatureLookupFlags = i947[2]
  return i946
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i949 = data
  i948.m_GlyphIndex = i949[0]
  i948.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i949[1], i948.m_GlyphValueRecord)
  return i948
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i951 = data
  i950.m_XPlacement = i951[0]
  i950.m_YPlacement = i951[1]
  i950.m_XAdvance = i951[2]
  i950.m_YAdvance = i951[3]
  return i950
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i955 = data
  i954.sourceFontFileName = i955[0]
  i954.sourceFontFileGUID = i955[1]
  i954.pointSizeSamplingMode = i955[2]
  i954.pointSize = i955[3]
  i954.padding = i955[4]
  i954.packingMode = i955[5]
  i954.atlasWidth = i955[6]
  i954.atlasHeight = i955[7]
  i954.characterSetSelectionMode = i955[8]
  i954.characterSequence = i955[9]
  i954.referencedFontAssetGUID = i955[10]
  i954.referencedTextAssetGUID = i955[11]
  i954.fontStyle = i955[12]
  i954.fontStyleModifier = i955[13]
  i954.renderMode = i955[14]
  i954.includeFontFeatures = !!i955[15]
  return i954
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'regularTypeface')
  request.r(i959[2], i959[3], 0, i958, 'italicTypeface')
  return i958
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i960 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i961 = data
  i960.useSafeMode = !!i961[0]
  i960.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i961[1], i960.safeModeOptions)
  i960.timeScale = i961[2]
  i960.unscaledTimeScale = i961[3]
  i960.useSmoothDeltaTime = !!i961[4]
  i960.maxSmoothUnscaledTime = i961[5]
  i960.rewindCallbackMode = i961[6]
  i960.showUnityEditorReport = !!i961[7]
  i960.logBehaviour = i961[8]
  i960.drawGizmos = !!i961[9]
  i960.defaultRecyclable = !!i961[10]
  i960.defaultAutoPlay = i961[11]
  i960.defaultUpdateType = i961[12]
  i960.defaultTimeScaleIndependent = !!i961[13]
  i960.defaultEaseType = i961[14]
  i960.defaultEaseOvershootOrAmplitude = i961[15]
  i960.defaultEasePeriod = i961[16]
  i960.defaultAutoKill = !!i961[17]
  i960.defaultLoopType = i961[18]
  i960.debugMode = !!i961[19]
  i960.debugStoreTargetId = !!i961[20]
  i960.showPreviewPanel = !!i961[21]
  i960.storeSettingsLocation = i961[22]
  i960.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i961[23], i960.modules)
  i960.createASMDEF = !!i961[24]
  i960.showPlayingTweens = !!i961[25]
  i960.showPausedTweens = !!i961[26]
  return i960
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i962 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i963 = data
  i962.logBehaviour = i963[0]
  i962.nestedTweenFailureBehaviour = i963[1]
  return i962
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i964 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i965 = data
  i964.showPanel = !!i965[0]
  i964.audioEnabled = !!i965[1]
  i964.physicsEnabled = !!i965[2]
  i964.physics2DEnabled = !!i965[3]
  i964.spriteEnabled = !!i965[4]
  i964.uiEnabled = !!i965[5]
  i964.textMeshProEnabled = !!i965[6]
  i964.tk2DEnabled = !!i965[7]
  i964.deAudioEnabled = !!i965[8]
  i964.deUnityExtendedEnabled = !!i965[9]
  i964.epoOutlineEnabled = !!i965[10]
  return i964
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.TMP_Settings' )
  var i967 = data
  i966.m_enableWordWrapping = !!i967[0]
  i966.m_enableKerning = !!i967[1]
  i966.m_enableExtraPadding = !!i967[2]
  i966.m_enableTintAllSprites = !!i967[3]
  i966.m_enableParseEscapeCharacters = !!i967[4]
  i966.m_EnableRaycastTarget = !!i967[5]
  i966.m_GetFontFeaturesAtRuntime = !!i967[6]
  i966.m_missingGlyphCharacter = i967[7]
  i966.m_warningsDisabled = !!i967[8]
  request.r(i967[9], i967[10], 0, i966, 'm_defaultFontAsset')
  i966.m_defaultFontAssetPath = i967[11]
  i966.m_defaultFontSize = i967[12]
  i966.m_defaultAutoSizeMinRatio = i967[13]
  i966.m_defaultAutoSizeMaxRatio = i967[14]
  i966.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i967[15], i967[16] )
  i966.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i967[17], i967[18] )
  i966.m_autoSizeTextContainer = !!i967[19]
  i966.m_IsTextObjectScaleStatic = !!i967[20]
  var i969 = i967[21]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 1, i968, '')
  }
  i966.m_fallbackFontAssets = i968
  i966.m_matchMaterialPreset = !!i967[22]
  request.r(i967[23], i967[24], 0, i966, 'm_defaultSpriteAsset')
  i966.m_defaultSpriteAssetPath = i967[25]
  i966.m_enableEmojiSupport = !!i967[26]
  i966.m_MissingCharacterSpriteUnicode = i967[27]
  i966.m_defaultColorGradientPresetsPath = i967[28]
  request.r(i967[29], i967[30], 0, i966, 'm_defaultStyleSheet')
  i966.m_StyleSheetsResourcePath = i967[31]
  request.r(i967[32], i967[33], 0, i966, 'm_leadingCharacters')
  request.r(i967[34], i967[35], 0, i966, 'm_followingCharacters')
  i966.m_UseModernHangulLineBreakingRules = !!i967[36]
  return i966
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i971 = data
  i970.hashCode = i971[0]
  request.r(i971[1], i971[2], 0, i970, 'material')
  i970.materialHashCode = i971[3]
  request.r(i971[4], i971[5], 0, i970, 'spriteSheet')
  var i973 = i971[6]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('TMPro.TMP_Sprite', i973[i + 0]));
  }
  i970.spriteInfoList = i972
  var i975 = i971[7]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 1, i974, '')
  }
  i970.fallbackSpriteAssets = i974
  i970.m_Version = i971[8]
  i970.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i971[9], i970.m_FaceInfo)
  var i977 = i971[10]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(request.d('TMPro.TMP_SpriteCharacter', i977[i + 0]));
  }
  i970.m_SpriteCharacterTable = i976
  var i979 = i971[11]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i979.length; i += 1) {
    i978.add(request.d('TMPro.TMP_SpriteGlyph', i979[i + 0]));
  }
  i970.m_SpriteGlyphTable = i978
  return i970
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_Sprite' )
  var i983 = data
  i982.name = i983[0]
  i982.hashCode = i983[1]
  i982.unicode = i983[2]
  i982.pivot = new pc.Vec2( i983[3], i983[4] )
  request.r(i983[5], i983[6], 0, i982, 'sprite')
  i982.id = i983[7]
  i982.x = i983[8]
  i982.y = i983[9]
  i982.width = i983[10]
  i982.height = i983[11]
  i982.xOffset = i983[12]
  i982.yOffset = i983[13]
  i982.xAdvance = i983[14]
  i982.scale = i983[15]
  return i982
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i989 = data
  i988.m_Name = i989[0]
  i988.m_HashCode = i989[1]
  i988.m_ElementType = i989[2]
  i988.m_Unicode = i989[3]
  i988.m_GlyphIndex = i989[4]
  i988.m_Scale = i989[5]
  return i988
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'sprite')
  i992.m_Index = i993[2]
  i992.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i993[3], i992.m_Metrics)
  i992.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i993[4], i992.m_GlyphRect)
  i992.m_Scale = i993[5]
  i992.m_AtlasIndex = i993[6]
  i992.m_ClassDefinitionType = i993[7]
  return i992
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i995 = data
  var i997 = i995[0]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('TMPro.TMP_Style', i997[i + 0]));
  }
  i994.m_StyleList = i996
  return i994
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.TMP_Style' )
  var i1001 = data
  i1000.m_Name = i1001[0]
  i1000.m_HashCode = i1001[1]
  i1000.m_OpeningDefinition = i1001[2]
  i1000.m_ClosingDefinition = i1001[3]
  i1000.m_OpeningTagArray = i1001[4]
  i1000.m_ClosingTagArray = i1001[5]
  i1000.m_OpeningTagUnicodeArray = i1001[6]
  i1000.m_ClosingTagUnicodeArray = i1001[7]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1005[i + 0]) );
  }
  i1002.files = i1004
  i1002.componentToPrefabIds = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1009 = data
  i1008.path = i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'unityObject')
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1013[i + 0]) );
  }
  i1010.scriptsExecutionOrder = i1012
  var i1015 = i1011[1]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1015[i + 0]) );
  }
  i1010.sortingLayers = i1014
  var i1017 = i1011[2]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1017[i + 0]) );
  }
  i1010.cullingLayers = i1016
  i1010.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1011[3], i1010.timeSettings)
  i1010.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1011[4], i1010.physicsSettings)
  i1010.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1011[5], i1010.physics2DSettings)
  i1010.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1011[6], i1010.qualitySettings)
  i1010.enableRealtimeShadows = !!i1011[7]
  i1010.enableAutoInstancing = !!i1011[8]
  i1010.enableDynamicBatching = !!i1011[9]
  i1010.lightmapEncodingQuality = i1011[10]
  i1010.desiredColorSpace = i1011[11]
  var i1019 = i1011[12]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1010.allTags = i1018
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.value = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1027 = data
  i1026.id = i1027[0]
  i1026.name = i1027[1]
  i1026.value = i1027[2]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1031 = data
  i1030.id = i1031[0]
  i1030.name = i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1033 = data
  i1032.fixedDeltaTime = i1033[0]
  i1032.maximumDeltaTime = i1033[1]
  i1032.timeScale = i1033[2]
  i1032.maximumParticleTimestep = i1033[3]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1035 = data
  i1034.gravity = new pc.Vec3( i1035[0], i1035[1], i1035[2] )
  i1034.defaultSolverIterations = i1035[3]
  i1034.bounceThreshold = i1035[4]
  i1034.autoSyncTransforms = !!i1035[5]
  i1034.autoSimulation = !!i1035[6]
  var i1037 = i1035[7]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1037[i + 0]) );
  }
  i1034.collisionMatrix = i1036
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1041 = data
  i1040.enabled = !!i1041[0]
  i1040.layerId = i1041[1]
  i1040.otherLayerId = i1041[2]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'material')
  i1042.gravity = new pc.Vec2( i1043[2], i1043[3] )
  i1042.positionIterations = i1043[4]
  i1042.velocityIterations = i1043[5]
  i1042.velocityThreshold = i1043[6]
  i1042.maxLinearCorrection = i1043[7]
  i1042.maxAngularCorrection = i1043[8]
  i1042.maxTranslationSpeed = i1043[9]
  i1042.maxRotationSpeed = i1043[10]
  i1042.baumgarteScale = i1043[11]
  i1042.baumgarteTOIScale = i1043[12]
  i1042.timeToSleep = i1043[13]
  i1042.linearSleepTolerance = i1043[14]
  i1042.angularSleepTolerance = i1043[15]
  i1042.defaultContactOffset = i1043[16]
  i1042.autoSimulation = !!i1043[17]
  i1042.queriesHitTriggers = !!i1043[18]
  i1042.queriesStartInColliders = !!i1043[19]
  i1042.callbacksOnDisable = !!i1043[20]
  i1042.reuseCollisionCallbacks = !!i1043[21]
  i1042.autoSyncTransforms = !!i1043[22]
  var i1045 = i1043[23]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1045[i + 0]) );
  }
  i1042.collisionMatrix = i1044
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1049 = data
  i1048.enabled = !!i1049[0]
  i1048.layerId = i1049[1]
  i1048.otherLayerId = i1049[2]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1053[i + 0]) );
  }
  i1050.qualityLevels = i1052
  var i1055 = i1051[1]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1050.names = i1054
  i1050.shadows = i1051[2]
  i1050.anisotropicFiltering = i1051[3]
  i1050.antiAliasing = i1051[4]
  i1050.lodBias = i1051[5]
  i1050.shadowCascades = i1051[6]
  i1050.shadowDistance = i1051[7]
  i1050.shadowmaskMode = i1051[8]
  i1050.shadowProjection = i1051[9]
  i1050.shadowResolution = i1051[10]
  i1050.softParticles = !!i1051[11]
  i1050.softVegetation = !!i1051[12]
  i1050.activeColorSpace = i1051[13]
  i1050.desiredColorSpace = i1051[14]
  i1050.masterTextureLimit = i1051[15]
  i1050.maxQueuedFrames = i1051[16]
  i1050.particleRaycastBudget = i1051[17]
  i1050.pixelLightCount = i1051[18]
  i1050.realtimeReflectionProbes = !!i1051[19]
  i1050.shadowCascade2Split = i1051[20]
  i1050.shadowCascade4Split = new pc.Vec3( i1051[21], i1051[22], i1051[23] )
  i1050.streamingMipmapsActive = !!i1051[24]
  i1050.vSyncCount = i1051[25]
  i1050.asyncUploadBufferSize = i1051[26]
  i1050.asyncUploadTimeSlice = i1051[27]
  i1050.billboardsFaceCameraPosition = !!i1051[28]
  i1050.shadowNearPlaneOffset = i1051[29]
  i1050.streamingMipmapsMemoryBudget = i1051[30]
  i1050.maximumLODLevel = i1051[31]
  i1050.streamingMipmapsAddAllCameras = !!i1051[32]
  i1050.streamingMipmapsMaxLevelReduction = i1051[33]
  i1050.streamingMipmapsRenderersPerFrame = i1051[34]
  i1050.resolutionScalingFixedDPIFactor = i1051[35]
  i1050.streamingMipmapsMaxFileIORequests = i1051[36]
  i1050.currentQualityLevel = i1051[37]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1061 = data
  i1060.weight = i1061[0]
  i1060.vertices = i1061[1]
  i1060.normals = i1061[2]
  i1060.tangents = i1061[3]
  return i1060
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1063 = data
  i1062.xPlacement = i1063[0]
  i1062.yPlacement = i1063[1]
  i1062.xAdvance = i1063[2]
  i1062.yAdvance = i1063[3]
  return i1062
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.WheelCollider":{"enabled":0,"center":1,"radius":4,"mass":5,"suspensionDistance":6,"forceAppPointDistance":7,"suspensionSpring":8,"forwardFriction":9,"sidewaysFriction":10},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[14],"59":[7],"60":[7],"61":[7],"62":[7],"63":[7],"64":[7],"65":[7],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[14],"81":[9],"82":[83],"84":[83],"29":[28],"85":[28],"86":[28],"31":[29],"33":[32,28],"87":[28],"30":[29],"88":[28],"89":[28],"90":[28],"91":[28],"92":[28],"93":[28],"94":[28],"95":[28],"96":[28],"97":[32,28],"98":[28],"99":[28],"100":[28],"101":[28],"39":[32,28],"102":[28],"103":[21],"104":[21],"22":[21],"105":[21],"106":[14],"107":[14],"108":[28],"109":[9,28],"35":[28,32],"110":[28],"111":[32,28],"112":[9],"113":[32,28],"114":[28],"115":[116],"117":[116],"118":[14],"119":[120],"121":[116]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Rigidbody","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.BoxCollider","UnityEngine.WheelCollider","UnityEngine.Light","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","SmoothFollowCamera","CameraSequence","UnityEngine.CanvasGroup","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AICarController","CheckpointManager","UnityEngine.CharacterController","PlayerCarController","UnityEngine.PhysicMaterial","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","UIManager","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.GameObject","GameManager","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "INDIEZ";

Deserializers.lunaInitializationTime = "04/29/2025 09:21:16";

Deserializers.lunaDaysRunning = "6.2";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "29436";

Deserializers.projectId = "c15883569d6bc4f039b50232f623b7dd";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.10.3\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1877";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4304";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, prefabs, mecanim-wasm";

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

Deserializers.buildID = "dd5029a7-1864-480e-9870-bb18934c16b5";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

