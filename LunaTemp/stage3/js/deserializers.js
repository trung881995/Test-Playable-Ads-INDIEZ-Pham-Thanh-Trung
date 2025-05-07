var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointSpring' )
  var i535 = data
  i534.spring = i535[0]
  i534.damper = i535[1]
  i534.targetPosition = i535[2]
  return i534
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointMotor' )
  var i537 = data
  i536.m_TargetVelocity = i537[0]
  i536.m_Force = i537[1]
  i536.m_FreeSpin = i537[2]
  return i536
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointLimits' )
  var i539 = data
  i538.m_Min = i539[0]
  i538.m_Max = i539[1]
  i538.m_Bounciness = i539[2]
  i538.m_BounceMinVelocity = i539[3]
  i538.m_ContactDistance = i539[4]
  i538.minBounce = i539[5]
  i538.maxBounce = i539[6]
  return i538
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointDrive' )
  var i541 = data
  i540.m_PositionSpring = i541[0]
  i540.m_PositionDamper = i541[1]
  i540.m_MaximumForce = i541[2]
  i540.m_UseAcceleration = i541[3]
  return i540
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i543 = data
  i542.m_Spring = i543[0]
  i542.m_Damper = i543[1]
  return i542
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i545 = data
  i544.m_Limit = i545[0]
  i544.m_Bounciness = i545[1]
  i544.m_ContactDistance = i545[2]
  return i544
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i547 = data
  i546.m_ExtremumSlip = i547[0]
  i546.m_ExtremumValue = i547[1]
  i546.m_AsymptoteSlip = i547[2]
  i546.m_AsymptoteValue = i547[3]
  i546.m_Stiffness = i547[4]
  return i546
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i549 = data
  i548.m_LowerAngle = i549[0]
  i548.m_UpperAngle = i549[1]
  return i548
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i551 = data
  i550.m_MotorSpeed = i551[0]
  i550.m_MaximumMotorTorque = i551[1]
  return i550
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i553 = data
  i552.m_DampingRatio = i553[0]
  i552.m_Frequency = i553[1]
  i552.m_Angle = i553[2]
  return i552
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i555 = data
  i554.m_LowerTranslation = i555[0]
  i554.m_UpperTranslation = i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i557 = data
  i556.position = new pc.Vec3( i557[0], i557[1], i557[2] )
  i556.scale = new pc.Vec3( i557[3], i557[4], i557[5] )
  i556.rotation = new pc.Quat(i557[6], i557[7], i557[8], i557[9])
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i559 = data
  i558.mass = i559[0]
  i558.drag = i559[1]
  i558.angularDrag = i559[2]
  i558.useGravity = !!i559[3]
  i558.isKinematic = !!i559[4]
  i558.constraints = i559[5]
  i558.maxAngularVelocity = i559[6]
  i558.collisionDetectionMode = i559[7]
  i558.interpolation = i559[8]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'sharedMesh')
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'additionalVertexStreams')
  i562.enabled = !!i563[2]
  request.r(i563[3], i563[4], 0, i562, 'sharedMaterial')
  var i565 = i563[5]
  var i564 = []
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 2, i564, '')
  }
  i562.sharedMaterials = i564
  i562.receiveShadows = !!i563[6]
  i562.shadowCastingMode = i563[7]
  i562.sortingLayerID = i563[8]
  i562.sortingOrder = i563[9]
  i562.lightmapIndex = i563[10]
  i562.lightmapSceneIndex = i563[11]
  i562.lightmapScaleOffset = new pc.Vec4( i563[12], i563[13], i563[14], i563[15] )
  i562.lightProbeUsage = i563[16]
  i562.reflectionProbeUsage = i563[17]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i569 = data
  i568.center = new pc.Vec3( i569[0], i569[1], i569[2] )
  i568.size = new pc.Vec3( i569[3], i569[4], i569[5] )
  i568.enabled = !!i569[6]
  i568.isTrigger = !!i569[7]
  request.r(i569[8], i569[9], 0, i568, 'material')
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i571 = data
  i570.name = i571[0]
  i570.tagId = i571[1]
  i570.enabled = !!i571[2]
  i570.isStatic = !!i571[3]
  i570.layer = i571[4]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.WheelCollider"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.WheelCollider' )
  var i573 = data
  i572.enabled = !!i573[0]
  i572.center = new pc.Vec3( i573[1], i573[2], i573[3] )
  i572.radius = i573[4]
  i572.mass = i573[5]
  i572.suspensionDistance = i573[6]
  i572.forceAppPointDistance = i573[7]
  i572.suspensionSpring = request.d('UnityEngine.JointSpring', i573[8], i572.suspensionSpring)
  i572.forwardFriction = request.d('UnityEngine.WheelFrictionCurve', i573[9], i572.forwardFriction)
  i572.sidewaysFriction = request.d('UnityEngine.WheelFrictionCurve', i573[10], i572.sidewaysFriction)
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i575 = data
  i574.name = i575[0]
  i574.halfPrecision = !!i575[1]
  i574.useUInt32IndexFormat = !!i575[2]
  i574.vertexCount = i575[3]
  i574.aabb = i575[4]
  var i577 = i575[5]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( !!i577[i + 0] );
  }
  i574.streams = i576
  i574.vertices = i575[6]
  var i579 = i575[7]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i579[i + 0]) );
  }
  i574.subMeshes = i578
  var i581 = i575[8]
  var i580 = []
  for(var i = 0; i < i581.length; i += 16) {
    i580.push( new pc.Mat4().setData(i581[i + 0], i581[i + 1], i581[i + 2], i581[i + 3],  i581[i + 4], i581[i + 5], i581[i + 6], i581[i + 7],  i581[i + 8], i581[i + 9], i581[i + 10], i581[i + 11],  i581[i + 12], i581[i + 13], i581[i + 14], i581[i + 15]) );
  }
  i574.bindposes = i580
  var i583 = i575[9]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i583[i + 0]) );
  }
  i574.blendShapes = i582
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i589 = data
  i588.triangles = i589[0]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i595 = data
  i594.name = i595[0]
  var i597 = i595[1]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i597[i + 0]) );
  }
  i594.frames = i596
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i598 = root || new pc.UnityMaterial()
  var i599 = data
  i598.name = i599[0]
  request.r(i599[1], i599[2], 0, i598, 'shader')
  i598.renderQueue = i599[3]
  i598.enableInstancing = !!i599[4]
  var i601 = i599[5]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i601[i + 0]) );
  }
  i598.floatParameters = i600
  var i603 = i599[6]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i603[i + 0]) );
  }
  i598.colorParameters = i602
  var i605 = i599[7]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i605[i + 0]) );
  }
  i598.vectorParameters = i604
  var i607 = i599[8]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i607[i + 0]) );
  }
  i598.textureParameters = i606
  var i609 = i599[9]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i609[i + 0]) );
  }
  i598.materialFlags = i608
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i613 = data
  i612.name = i613[0]
  i612.value = i613[1]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i617 = data
  i616.name = i617[0]
  i616.value = new pc.Color(i617[1], i617[2], i617[3], i617[4])
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i621 = data
  i620.name = i621[0]
  i620.value = new pc.Vec4( i621[1], i621[2], i621[3], i621[4] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i625 = data
  i624.name = i625[0]
  request.r(i625[1], i625[2], 0, i624, 'value')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i629 = data
  i628.name = i629[0]
  i628.enabled = !!i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i631 = data
  i630.name = i631[0]
  i630.width = i631[1]
  i630.height = i631[2]
  i630.mipmapCount = i631[3]
  i630.anisoLevel = i631[4]
  i630.filterMode = i631[5]
  i630.hdr = !!i631[6]
  i630.format = i631[7]
  i630.wrapMode = i631[8]
  i630.alphaIsTransparency = !!i631[9]
  i630.alphaSource = i631[10]
  i630.graphicsFormat = i631[11]
  i630.sRGBTexture = !!i631[12]
  i630.desiredColorSpace = i631[13]
  i630.wrapU = i631[14]
  i630.wrapV = i631[15]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i633 = data
  i632.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i633[0], i632.main)
  i632.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i633[1], i632.colorBySpeed)
  i632.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i633[2], i632.colorOverLifetime)
  i632.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i633[3], i632.emission)
  i632.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i633[4], i632.rotationBySpeed)
  i632.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i633[5], i632.rotationOverLifetime)
  i632.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i633[6], i632.shape)
  i632.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i633[7], i632.sizeBySpeed)
  i632.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i633[8], i632.sizeOverLifetime)
  i632.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i633[9], i632.textureSheetAnimation)
  i632.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i633[10], i632.velocityOverLifetime)
  i632.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i633[11], i632.noise)
  i632.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i633[12], i632.inheritVelocity)
  i632.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i633[13], i632.forceOverLifetime)
  i632.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i633[14], i632.limitVelocityOverLifetime)
  i632.useAutoRandomSeed = !!i633[15]
  i632.randomSeed = i633[16]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemMain()
  var i635 = data
  i634.duration = i635[0]
  i634.loop = !!i635[1]
  i634.prewarm = !!i635[2]
  i634.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[3], i634.startDelay)
  i634.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[4], i634.startLifetime)
  i634.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[5], i634.startSpeed)
  i634.startSize3D = !!i635[6]
  i634.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[7], i634.startSizeX)
  i634.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[8], i634.startSizeY)
  i634.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[9], i634.startSizeZ)
  i634.startRotation3D = !!i635[10]
  i634.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[11], i634.startRotationX)
  i634.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[12], i634.startRotationY)
  i634.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[13], i634.startRotationZ)
  i634.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i635[14], i634.startColor)
  i634.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[15], i634.gravityModifier)
  i634.simulationSpace = i635[16]
  request.r(i635[17], i635[18], 0, i634, 'customSimulationSpace')
  i634.simulationSpeed = i635[19]
  i634.useUnscaledTime = !!i635[20]
  i634.scalingMode = i635[21]
  i634.playOnAwake = !!i635[22]
  i634.maxParticles = i635[23]
  i634.emitterVelocityMode = i635[24]
  i634.stopAction = i635[25]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i636 = root || new pc.MinMaxCurve()
  var i637 = data
  i636.mode = i637[0]
  i636.curveMin = new pc.AnimationCurve( { keys_flow: i637[1] } )
  i636.curveMax = new pc.AnimationCurve( { keys_flow: i637[2] } )
  i636.curveMultiplier = i637[3]
  i636.constantMin = i637[4]
  i636.constantMax = i637[5]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i638 = root || new pc.MinMaxGradient()
  var i639 = data
  i638.mode = i639[0]
  i638.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i639[1], i638.gradientMin)
  i638.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i639[2], i638.gradientMax)
  i638.colorMin = new pc.Color(i639[3], i639[4], i639[5], i639[6])
  i638.colorMax = new pc.Color(i639[7], i639[8], i639[9], i639[10])
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i641 = data
  i640.mode = i641[0]
  var i643 = i641[1]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i643[i + 0]) );
  }
  i640.colorKeys = i642
  var i645 = i641[2]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i645[i + 0]) );
  }
  i640.alphaKeys = i644
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemColorBySpeed()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i647[1], i646.color)
  i646.range = new pc.Vec2( i647[2], i647[3] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i651 = data
  i650.color = new pc.Color(i651[0], i651[1], i651[2], i651[3])
  i650.time = i651[4]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i655 = data
  i654.alpha = i655[0]
  i654.time = i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemColorOverLifetime()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i657[1], i656.color)
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemEmitter()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.rateOverTime)
  i658.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.rateOverDistance)
  var i661 = i659[3]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i661[i + 0]) );
  }
  i658.bursts = i660
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemBurst()
  var i665 = data
  i664.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[0], i664.count)
  i664.cycleCount = i665[1]
  i664.minCount = i665[2]
  i664.maxCount = i665[3]
  i664.repeatInterval = i665[4]
  i664.time = i665[5]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemRotationBySpeed()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.x)
  i666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.y)
  i666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.z)
  i666.separateAxes = !!i667[4]
  i666.range = new pc.Vec2( i667[5], i667[6] )
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemRotationOverLifetime()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[1], i668.x)
  i668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.y)
  i668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.z)
  i668.separateAxes = !!i669[4]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemShape()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.shapeType = i671[1]
  i670.randomDirectionAmount = i671[2]
  i670.sphericalDirectionAmount = i671[3]
  i670.randomPositionAmount = i671[4]
  i670.alignToDirection = !!i671[5]
  i670.radius = i671[6]
  i670.radiusMode = i671[7]
  i670.radiusSpread = i671[8]
  i670.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[9], i670.radiusSpeed)
  i670.radiusThickness = i671[10]
  i670.angle = i671[11]
  i670.length = i671[12]
  i670.boxThickness = new pc.Vec3( i671[13], i671[14], i671[15] )
  i670.meshShapeType = i671[16]
  request.r(i671[17], i671[18], 0, i670, 'mesh')
  request.r(i671[19], i671[20], 0, i670, 'meshRenderer')
  request.r(i671[21], i671[22], 0, i670, 'skinnedMeshRenderer')
  i670.useMeshMaterialIndex = !!i671[23]
  i670.meshMaterialIndex = i671[24]
  i670.useMeshColors = !!i671[25]
  i670.normalOffset = i671[26]
  i670.arc = i671[27]
  i670.arcMode = i671[28]
  i670.arcSpread = i671[29]
  i670.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[30], i670.arcSpeed)
  i670.donutRadius = i671[31]
  i670.position = new pc.Vec3( i671[32], i671[33], i671[34] )
  i670.rotation = new pc.Vec3( i671[35], i671[36], i671[37] )
  i670.scale = new pc.Vec3( i671[38], i671[39], i671[40] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemSizeBySpeed()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.separateAxes = !!i673[4]
  i672.range = new pc.Vec2( i673[5], i673[6] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemSizeOverLifetime()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.x)
  i674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.y)
  i674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.z)
  i674.separateAxes = !!i675[4]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.mode = i677[1]
  i676.animation = i677[2]
  i676.numTilesX = i677[3]
  i676.numTilesY = i677[4]
  i676.useRandomRow = !!i677[5]
  i676.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[6], i676.frameOverTime)
  i676.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[7], i676.startFrame)
  i676.cycleCount = i677[8]
  i676.rowIndex = i677[9]
  i676.flipU = i677[10]
  i676.flipV = i677[11]
  i676.spriteCount = i677[12]
  var i679 = i677[13]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i676.sprites = i678
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.x)
  i682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.y)
  i682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[3], i682.z)
  i682.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[4], i682.radial)
  i682.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[5], i682.speedModifier)
  i682.space = i683[6]
  i682.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[7], i682.orbitalX)
  i682.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[8], i682.orbitalY)
  i682.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[9], i682.orbitalZ)
  i682.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[10], i682.orbitalOffsetX)
  i682.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[11], i682.orbitalOffsetY)
  i682.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[12], i682.orbitalOffsetZ)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemNoise()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.separateAxes = !!i685[1]
  i684.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.strengthX)
  i684.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.strengthY)
  i684.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[4], i684.strengthZ)
  i684.frequency = i685[5]
  i684.damping = !!i685[6]
  i684.octaveCount = i685[7]
  i684.octaveMultiplier = i685[8]
  i684.octaveScale = i685[9]
  i684.quality = i685[10]
  i684.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[11], i684.scrollSpeed)
  i684.scrollSpeedMultiplier = i685[12]
  i684.remapEnabled = !!i685[13]
  i684.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[14], i684.remapX)
  i684.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[15], i684.remapY)
  i684.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[16], i684.remapZ)
  i684.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[17], i684.positionAmount)
  i684.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[18], i684.rotationAmount)
  i684.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[19], i684.sizeAmount)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemInheritVelocity()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.mode = i687[1]
  i686.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.curve)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemForceOverLifetime()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[1], i688.x)
  i688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.y)
  i688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.z)
  i688.space = i689[4]
  i688.randomized = !!i689[5]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.limit)
  i690.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.limitX)
  i690.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.limitY)
  i690.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[4], i690.limitZ)
  i690.dampen = i691[5]
  i690.separateAxes = !!i691[6]
  i690.space = i691[7]
  i690.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[8], i690.drag)
  i690.multiplyDragByParticleSize = !!i691[9]
  i690.multiplyDragByParticleVelocity = !!i691[10]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i693 = data
  i692.enabled = !!i693[0]
  request.r(i693[1], i693[2], 0, i692, 'sharedMaterial')
  var i695 = i693[3]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.sharedMaterials = i694
  i692.receiveShadows = !!i693[4]
  i692.shadowCastingMode = i693[5]
  i692.sortingLayerID = i693[6]
  i692.sortingOrder = i693[7]
  i692.lightmapIndex = i693[8]
  i692.lightmapSceneIndex = i693[9]
  i692.lightmapScaleOffset = new pc.Vec4( i693[10], i693[11], i693[12], i693[13] )
  i692.lightProbeUsage = i693[14]
  i692.reflectionProbeUsage = i693[15]
  request.r(i693[16], i693[17], 0, i692, 'mesh')
  i692.meshCount = i693[18]
  i692.activeVertexStreamsCount = i693[19]
  i692.alignment = i693[20]
  i692.renderMode = i693[21]
  i692.sortMode = i693[22]
  i692.lengthScale = i693[23]
  i692.velocityScale = i693[24]
  i692.cameraVelocityScale = i693[25]
  i692.normalDirection = i693[26]
  i692.sortingFudge = i693[27]
  i692.minParticleSize = i693[28]
  i692.maxParticleSize = i693[29]
  i692.pivot = new pc.Vec3( i693[30], i693[31], i693[32] )
  request.r(i693[33], i693[34], 0, i692, 'trailMaterial')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i697 = data
  i696.enabled = !!i697[0]
  i696.type = i697[1]
  i696.color = new pc.Color(i697[2], i697[3], i697[4], i697[5])
  i696.cullingMask = i697[6]
  i696.intensity = i697[7]
  i696.range = i697[8]
  i696.spotAngle = i697[9]
  i696.shadows = i697[10]
  i696.shadowNormalBias = i697[11]
  i696.shadowBias = i697[12]
  i696.shadowStrength = i697[13]
  i696.shadowResolution = i697[14]
  i696.lightmapBakeType = i697[15]
  i696.renderMode = i697[16]
  request.r(i697[17], i697[18], 0, i696, 'cookie')
  i696.cookieSize = i697[19]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i699 = data
  i698.enabled = !!i699[0]
  i698.isTrigger = !!i699[1]
  request.r(i699[2], i699[3], 0, i698, 'material')
  request.r(i699[4], i699[5], 0, i698, 'sharedMesh')
  i698.convex = !!i699[6]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i701 = data
  i700.name = i701[0]
  i700.atlasId = i701[1]
  i700.mipmapCount = i701[2]
  i700.hdr = !!i701[3]
  i700.size = i701[4]
  i700.anisoLevel = i701[5]
  i700.filterMode = i701[6]
  var i703 = i701[7]
  var i702 = []
  for(var i = 0; i < i703.length; i += 4) {
    i702.push( UnityEngine.Rect.MinMaxRect(i703[i + 0], i703[i + 1], i703[i + 2], i703[i + 3]) );
  }
  i700.rects = i702
  i700.wrapU = i701[8]
  i700.wrapV = i701[9]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i707 = data
  i706.name = i707[0]
  i706.index = i707[1]
  i706.startup = !!i707[2]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i709 = data
  i708.enabled = !!i709[0]
  i708.aspect = i709[1]
  i708.orthographic = !!i709[2]
  i708.orthographicSize = i709[3]
  i708.backgroundColor = new pc.Color(i709[4], i709[5], i709[6], i709[7])
  i708.nearClipPlane = i709[8]
  i708.farClipPlane = i709[9]
  i708.fieldOfView = i709[10]
  i708.depth = i709[11]
  i708.clearFlags = i709[12]
  i708.cullingMask = i709[13]
  i708.rect = i709[14]
  request.r(i709[15], i709[16], 0, i708, 'targetTexture')
  i708.usePhysicalProperties = !!i709[17]
  i708.focalLength = i709[18]
  i708.sensorSize = new pc.Vec2( i709[19], i709[20] )
  i708.lensShift = new pc.Vec2( i709[21], i709[22] )
  i708.gateFit = i709[23]
  i708.commandBufferCount = i709[24]
  i708.cameraType = i709[25]
  return i708
}

Deserializers["SmoothFollowCamera"] = function (request, data, root) {
  var i710 = root || request.c( 'SmoothFollowCamera' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'target')
  i710.offset = new pc.Vec3( i711[2], i711[3], i711[4] )
  i710.followSpeed = i711[5]
  i710.rotationSpeed = i711[6]
  return i710
}

Deserializers["CameraSequence"] = function (request, data, root) {
  var i712 = root || request.c( 'CameraSequence' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'pointA')
  request.r(i713[2], i713[3], 0, i712, 'pointB')
  request.r(i713[4], i713[5], 0, i712, 'pointC')
  request.r(i713[6], i713[7], 0, i712, 'smoothFollowCamera')
  i712.rotateDuration = i713[8]
  i712.moveDuration = i713[9]
  i712.rotationSpeed = i713[10]
  request.r(i713[11], i713[12], 0, i712, 'flashEffect')
  return i712
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'm_FirstSelected')
  i714.m_sendNavigationEvents = !!i715[2]
  i714.m_DragThreshold = i715[3]
  return i714
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i717 = data
  i716.m_HorizontalAxis = i717[0]
  i716.m_VerticalAxis = i717[1]
  i716.m_SubmitButton = i717[2]
  i716.m_CancelButton = i717[3]
  i716.m_InputActionsPerSecond = i717[4]
  i716.m_RepeatDelay = i717[5]
  i716.m_ForceModuleActive = !!i717[6]
  i716.m_SendPointerHoverToParent = !!i717[7]
  return i716
}

Deserializers["AICarController"] = function (request, data, root) {
  var i718 = root || request.c( 'AICarController' )
  var i719 = data
  i718.moveSpeed = i719[0]
  i718.maxSpeed = i719[1]
  i718.smoothTime = i719[2]
  i718.turnSpeed = i719[3]
  i718.checkpointRadius = i719[4]
  i718.slowTurnThreshold = i719[5]
  i718.driftIntensity = i719[6]
  i718.obstacleDetectionRange = i719[7]
  i718.avoidanceStrength = i719[8]
  i718.obstacleLayers = UnityEngine.LayerMask.FromIntegerValue( i719[9] )
  request.r(i719[10], i719[11], 0, i718, 'checkpointManager')
  request.r(i719[12], i719[13], 0, i718, 'SpeedUpEffect')
  request.r(i719[14], i719[15], 0, i718, 'SmokeTrailEffect')
  request.r(i719[16], i719[17], 0, i718, 'SmokeStartupEffect')
  request.r(i719[18], i719[19], 0, i718, 'IdleEngineEffect')
  request.r(i719[20], i719[21], 0, i718, 'RightDriftEffect')
  request.r(i719[22], i719[23], 0, i718, 'LeftDriftEffect')
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
  request.r(i721[11], i721[12], 0, i720, 'SpeedUpEffect')
  request.r(i721[13], i721[14], 0, i720, 'SmokeTrailEffect')
  request.r(i721[15], i721[16], 0, i720, 'SmokeStartupEffect')
  request.r(i721[17], i721[18], 0, i720, 'IdleEngineEffect')
  request.r(i721[19], i721[20], 0, i720, 'RightDriftEffect')
  request.r(i721[21], i721[22], 0, i720, 'LeftDriftEffect')
  request.r(i721[23], i721[24], 0, i720, 'audioSource')
  request.r(i721[25], i721[26], 0, i720, 'StartSound')
  request.r(i721[27], i721[28], 0, i720, 'IdleEngineSound')
  request.r(i721[29], i721[30], 0, i720, 'DrivingSound')
  request.r(i721[31], i721[32], 0, i720, 'SpeedupSound')
  request.r(i721[33], i721[34], 0, i720, 'StopSound')
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'clip')
  request.r(i723[2], i723[3], 0, i722, 'outputAudioMixerGroup')
  i722.playOnAwake = !!i723[4]
  i722.loop = !!i723[5]
  i722.time = i723[6]
  i722.volume = i723[7]
  i722.pitch = i723[8]
  i722.enabled = !!i723[9]
  return i722
}

Deserializers["CheckpointManager"] = function (request, data, root) {
  var i724 = root || request.c( 'CheckpointManager' )
  var i725 = data
  var i727 = i725[0]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.checkpoints = i726
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i731 = data
  i730.pivot = new pc.Vec2( i731[0], i731[1] )
  i730.anchorMin = new pc.Vec2( i731[2], i731[3] )
  i730.anchorMax = new pc.Vec2( i731[4], i731[5] )
  i730.sizeDelta = new pc.Vec2( i731[6], i731[7] )
  i730.anchoredPosition3D = new pc.Vec3( i731[8], i731[9], i731[10] )
  i730.rotation = new pc.Quat(i731[11], i731[12], i731[13], i731[14])
  i730.scale = new pc.Vec3( i731[15], i731[16], i731[17] )
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i733 = data
  i732.enabled = !!i733[0]
  i732.planeDistance = i733[1]
  i732.referencePixelsPerUnit = i733[2]
  i732.isFallbackOverlay = !!i733[3]
  i732.renderMode = i733[4]
  i732.renderOrder = i733[5]
  i732.sortingLayerName = i733[6]
  i732.sortingOrder = i733[7]
  i732.scaleFactor = i733[8]
  request.r(i733[9], i733[10], 0, i732, 'worldCamera')
  i732.overrideSorting = !!i733[11]
  i732.pixelPerfect = !!i733[12]
  i732.targetDisplay = i733[13]
  i732.overridePixelPerfect = !!i733[14]
  return i732
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i735 = data
  i734.m_UiScaleMode = i735[0]
  i734.m_ReferencePixelsPerUnit = i735[1]
  i734.m_ScaleFactor = i735[2]
  i734.m_ReferenceResolution = new pc.Vec2( i735[3], i735[4] )
  i734.m_ScreenMatchMode = i735[5]
  i734.m_MatchWidthOrHeight = i735[6]
  i734.m_PhysicalUnit = i735[7]
  i734.m_FallbackScreenDPI = i735[8]
  i734.m_DefaultSpriteDPI = i735[9]
  i734.m_DynamicPixelsPerUnit = i735[10]
  i734.m_PresetInfoIsWorld = !!i735[11]
  return i734
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i737 = data
  i736.m_IgnoreReversedGraphics = !!i737[0]
  i736.m_BlockingObjects = i737[1]
  i736.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i737[2] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i739 = data
  i738.cullTransparentMesh = !!i739[0]
  return i738
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.Image' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'm_Sprite')
  i740.m_Type = i741[2]
  i740.m_PreserveAspect = !!i741[3]
  i740.m_FillCenter = !!i741[4]
  i740.m_FillMethod = i741[5]
  i740.m_FillAmount = i741[6]
  i740.m_FillClockwise = !!i741[7]
  i740.m_FillOrigin = i741[8]
  i740.m_UseSpriteMesh = !!i741[9]
  i740.m_PixelsPerUnitMultiplier = i741[10]
  request.r(i741[11], i741[12], 0, i740, 'm_Material')
  i740.m_Maskable = !!i741[13]
  i740.m_Color = new pc.Color(i741[14], i741[15], i741[16], i741[17])
  i740.m_RaycastTarget = !!i741[18]
  i740.m_RaycastPadding = new pc.Vec4( i741[19], i741[20], i741[21], i741[22] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i743 = data
  i742.m_Alpha = i743[0]
  i742.m_Interactable = !!i743[1]
  i742.m_BlocksRaycasts = !!i743[2]
  i742.m_IgnoreParentGroups = !!i743[3]
  i742.enabled = !!i743[4]
  return i742
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i744 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i745 = data
  i744.m_hasFontAssetChanged = !!i745[0]
  request.r(i745[1], i745[2], 0, i744, 'm_baseMaterial')
  i744.m_maskOffset = new pc.Vec4( i745[3], i745[4], i745[5], i745[6] )
  i744.m_text = i745[7]
  i744.m_isRightToLeft = !!i745[8]
  request.r(i745[9], i745[10], 0, i744, 'm_fontAsset')
  request.r(i745[11], i745[12], 0, i744, 'm_sharedMaterial')
  var i747 = i745[13]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i744.m_fontSharedMaterials = i746
  request.r(i745[14], i745[15], 0, i744, 'm_fontMaterial')
  var i749 = i745[16]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i744.m_fontMaterials = i748
  i744.m_fontColor32 = UnityEngine.Color32.ConstructColor(i745[17], i745[18], i745[19], i745[20])
  i744.m_fontColor = new pc.Color(i745[21], i745[22], i745[23], i745[24])
  i744.m_enableVertexGradient = !!i745[25]
  i744.m_colorMode = i745[26]
  i744.m_fontColorGradient = request.d('TMPro.VertexGradient', i745[27], i744.m_fontColorGradient)
  request.r(i745[28], i745[29], 0, i744, 'm_fontColorGradientPreset')
  request.r(i745[30], i745[31], 0, i744, 'm_spriteAsset')
  i744.m_tintAllSprites = !!i745[32]
  request.r(i745[33], i745[34], 0, i744, 'm_StyleSheet')
  i744.m_TextStyleHashCode = i745[35]
  i744.m_overrideHtmlColors = !!i745[36]
  i744.m_faceColor = UnityEngine.Color32.ConstructColor(i745[37], i745[38], i745[39], i745[40])
  i744.m_fontSize = i745[41]
  i744.m_fontSizeBase = i745[42]
  i744.m_fontWeight = i745[43]
  i744.m_enableAutoSizing = !!i745[44]
  i744.m_fontSizeMin = i745[45]
  i744.m_fontSizeMax = i745[46]
  i744.m_fontStyle = i745[47]
  i744.m_HorizontalAlignment = i745[48]
  i744.m_VerticalAlignment = i745[49]
  i744.m_textAlignment = i745[50]
  i744.m_characterSpacing = i745[51]
  i744.m_wordSpacing = i745[52]
  i744.m_lineSpacing = i745[53]
  i744.m_lineSpacingMax = i745[54]
  i744.m_paragraphSpacing = i745[55]
  i744.m_charWidthMaxAdj = i745[56]
  i744.m_enableWordWrapping = !!i745[57]
  i744.m_wordWrappingRatios = i745[58]
  i744.m_overflowMode = i745[59]
  request.r(i745[60], i745[61], 0, i744, 'm_linkedTextComponent')
  request.r(i745[62], i745[63], 0, i744, 'parentLinkedComponent')
  i744.m_enableKerning = !!i745[64]
  i744.m_enableExtraPadding = !!i745[65]
  i744.checkPaddingRequired = !!i745[66]
  i744.m_isRichText = !!i745[67]
  i744.m_parseCtrlCharacters = !!i745[68]
  i744.m_isOrthographic = !!i745[69]
  i744.m_isCullingEnabled = !!i745[70]
  i744.m_horizontalMapping = i745[71]
  i744.m_verticalMapping = i745[72]
  i744.m_uvLineOffset = i745[73]
  i744.m_geometrySortingOrder = i745[74]
  i744.m_IsTextObjectScaleStatic = !!i745[75]
  i744.m_VertexBufferAutoSizeReduction = !!i745[76]
  i744.m_useMaxVisibleDescender = !!i745[77]
  i744.m_pageToDisplay = i745[78]
  i744.m_margin = new pc.Vec4( i745[79], i745[80], i745[81], i745[82] )
  i744.m_isUsingLegacyAnimationComponent = !!i745[83]
  i744.m_isVolumetricText = !!i745[84]
  request.r(i745[85], i745[86], 0, i744, 'm_Material')
  i744.m_Maskable = !!i745[87]
  i744.m_Color = new pc.Color(i745[88], i745[89], i745[90], i745[91])
  i744.m_RaycastTarget = !!i745[92]
  i744.m_RaycastPadding = new pc.Vec4( i745[93], i745[94], i745[95], i745[96] )
  return i744
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i750 = root || request.c( 'TMPro.VertexGradient' )
  var i751 = data
  i750.topLeft = new pc.Color(i751[0], i751[1], i751[2], i751[3])
  i750.topRight = new pc.Color(i751[4], i751[5], i751[6], i751[7])
  i750.bottomLeft = new pc.Color(i751[8], i751[9], i751[10], i751[11])
  i750.bottomRight = new pc.Color(i751[12], i751[13], i751[14], i751[15])
  return i750
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Button' )
  var i753 = data
  i752.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i753[0], i752.m_OnClick)
  i752.m_Navigation = request.d('UnityEngine.UI.Navigation', i753[1], i752.m_Navigation)
  i752.m_Transition = i753[2]
  i752.m_Colors = request.d('UnityEngine.UI.ColorBlock', i753[3], i752.m_Colors)
  i752.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i753[4], i752.m_SpriteState)
  i752.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i753[5], i752.m_AnimationTriggers)
  i752.m_Interactable = !!i753[6]
  request.r(i753[7], i753[8], 0, i752, 'm_TargetGraphic')
  return i752
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i755 = data
  i754.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i755[0], i754.m_PersistentCalls)
  return i754
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i757 = data
  var i759 = i757[0]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(request.d('UnityEngine.Events.PersistentCall', i759[i + 0]));
  }
  i756.m_Calls = i758
  return i756
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'm_Target')
  i762.m_TargetAssemblyTypeName = i763[2]
  i762.m_MethodName = i763[3]
  i762.m_Mode = i763[4]
  i762.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i763[5], i762.m_Arguments)
  i762.m_CallState = i763[6]
  return i762
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_ObjectArgument')
  i764.m_ObjectArgumentAssemblyTypeName = i765[2]
  i764.m_IntArgument = i765[3]
  i764.m_FloatArgument = i765[4]
  i764.m_StringArgument = i765[5]
  i764.m_BoolArgument = !!i765[6]
  return i764
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i767 = data
  i766.m_Mode = i767[0]
  i766.m_WrapAround = !!i767[1]
  request.r(i767[2], i767[3], 0, i766, 'm_SelectOnUp')
  request.r(i767[4], i767[5], 0, i766, 'm_SelectOnDown')
  request.r(i767[6], i767[7], 0, i766, 'm_SelectOnLeft')
  request.r(i767[8], i767[9], 0, i766, 'm_SelectOnRight')
  return i766
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i769 = data
  i768.m_NormalColor = new pc.Color(i769[0], i769[1], i769[2], i769[3])
  i768.m_HighlightedColor = new pc.Color(i769[4], i769[5], i769[6], i769[7])
  i768.m_PressedColor = new pc.Color(i769[8], i769[9], i769[10], i769[11])
  i768.m_SelectedColor = new pc.Color(i769[12], i769[13], i769[14], i769[15])
  i768.m_DisabledColor = new pc.Color(i769[16], i769[17], i769[18], i769[19])
  i768.m_ColorMultiplier = i769[20]
  i768.m_FadeDuration = i769[21]
  return i768
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_HighlightedSprite')
  request.r(i771[2], i771[3], 0, i770, 'm_PressedSprite')
  request.r(i771[4], i771[5], 0, i770, 'm_SelectedSprite')
  request.r(i771[6], i771[7], 0, i770, 'm_DisabledSprite')
  return i770
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i773 = data
  i772.m_NormalTrigger = i773[0]
  i772.m_HighlightedTrigger = i773[1]
  i772.m_PressedTrigger = i773[2]
  i772.m_SelectedTrigger = i773[3]
  i772.m_DisabledTrigger = i773[4]
  return i772
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.Text' )
  var i775 = data
  i774.m_FontData = request.d('UnityEngine.UI.FontData', i775[0], i774.m_FontData)
  i774.m_Text = i775[1]
  request.r(i775[2], i775[3], 0, i774, 'm_Material')
  i774.m_Maskable = !!i775[4]
  i774.m_Color = new pc.Color(i775[5], i775[6], i775[7], i775[8])
  i774.m_RaycastTarget = !!i775[9]
  i774.m_RaycastPadding = new pc.Vec4( i775[10], i775[11], i775[12], i775[13] )
  return i774
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.FontData' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_Font')
  i776.m_FontSize = i777[2]
  i776.m_FontStyle = i777[3]
  i776.m_BestFit = !!i777[4]
  i776.m_MinSize = i777[5]
  i776.m_MaxSize = i777[6]
  i776.m_Alignment = i777[7]
  i776.m_AlignByGeometry = !!i777[8]
  i776.m_RichText = !!i777[9]
  i776.m_HorizontalOverflow = i777[10]
  i776.m_VerticalOverflow = i777[11]
  i776.m_LineSpacing = i777[12]
  return i776
}

Deserializers["UIManager"] = function (request, data, root) {
  var i778 = root || request.c( 'UIManager' )
  var i779 = data
  var i781 = i779[0]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.Cars = i780
  request.r(i779[1], i779[2], 0, i778, 'Menu')
  request.r(i779[3], i779[4], 0, i778, 'Scene')
  request.r(i779[5], i779[6], 0, i778, 'cameraSequence')
  request.r(i779[7], i779[8], 0, i778, 'countdownText')
  i778.timeBetweenCounts = i779[9]
  request.r(i779[10], i779[11], 0, i778, 'barFill')
  i778.fillDuration = i779[12]
  i778.shrinkDuration = i779[13]
  request.r(i779[14], i779[15], 0, i778, 'playerCarController')
  request.r(i779[16], i779[17], 0, i778, 'roundText')
  i778.totalLaps = i779[18]
  request.r(i779[19], i779[20], 0, i778, 'startBtn')
  request.r(i779[21], i779[22], 0, i778, 'retryBtn')
  request.r(i779[23], i779[24], 0, i778, 'nextBtn')
  return i778
}

Deserializers["GameManager"] = function (request, data, root) {
  var i784 = root || request.c( 'GameManager' )
  var i785 = data
  var i787 = i785[0]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.seasonEffectArray = i786
  var i789 = i785[1]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i784.speedUpEffectArray = i788
  request.r(i785[2], i785[3], 0, i784, 'mapRenderer')
  var i791 = i785[4]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i784.seasonMaterialArray = i790
  var i793 = i785[5]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i784.playerCarArray = i792
  request.r(i785[6], i785[7], 0, i784, 'playerCarController')
  var i795 = i785[8]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i784.carAIArray = i794
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i797 = data
  i796.ambientIntensity = i797[0]
  i796.reflectionIntensity = i797[1]
  i796.ambientMode = i797[2]
  i796.ambientLight = new pc.Color(i797[3], i797[4], i797[5], i797[6])
  i796.ambientSkyColor = new pc.Color(i797[7], i797[8], i797[9], i797[10])
  i796.ambientGroundColor = new pc.Color(i797[11], i797[12], i797[13], i797[14])
  i796.ambientEquatorColor = new pc.Color(i797[15], i797[16], i797[17], i797[18])
  i796.fogColor = new pc.Color(i797[19], i797[20], i797[21], i797[22])
  i796.fogEndDistance = i797[23]
  i796.fogStartDistance = i797[24]
  i796.fogDensity = i797[25]
  i796.fog = !!i797[26]
  request.r(i797[27], i797[28], 0, i796, 'skybox')
  i796.fogMode = i797[29]
  var i799 = i797[30]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i799[i + 0]) );
  }
  i796.lightmaps = i798
  i796.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i797[31], i796.lightProbes)
  i796.lightmapsMode = i797[32]
  i796.mixedBakeMode = i797[33]
  i796.environmentLightingMode = i797[34]
  i796.ambientProbe = new pc.SphericalHarmonicsL2(i797[35])
  i796.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i797[36])
  i796.useReferenceAmbientProbe = !!i797[37]
  request.r(i797[38], i797[39], 0, i796, 'customReflection')
  request.r(i797[40], i797[41], 0, i796, 'defaultReflection')
  i796.defaultReflectionMode = i797[42]
  i796.defaultReflectionResolution = i797[43]
  i796.sunLightObjectId = i797[44]
  i796.pixelLightCount = i797[45]
  i796.defaultReflectionHDR = !!i797[46]
  i796.hasLightDataAsset = !!i797[47]
  i796.hasManualGenerate = !!i797[48]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'lightmapColor')
  request.r(i803[2], i803[3], 0, i802, 'lightmapDirection')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i804 = root || new UnityEngine.LightProbes()
  var i805 = data
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i813 = data
  i812.name = i813[0]
  i812.bounciness = i813[1]
  i812.dynamicFriction = i813[2]
  i812.staticFriction = i813[3]
  i812.frictionCombine = i813[4]
  i812.bounceCombine = i813[5]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i815 = data
  var i817 = i815[0]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i817[i + 0]));
  }
  i814.ShaderCompilationErrors = i816
  i814.name = i815[1]
  i814.guid = i815[2]
  var i819 = i815[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i814.shaderDefinedKeywords = i818
  var i821 = i815[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i821[i + 0]) );
  }
  i814.passes = i820
  var i823 = i815[5]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i823[i + 0]) );
  }
  i814.usePasses = i822
  var i825 = i815[6]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i825[i + 0]) );
  }
  i814.defaultParameterValues = i824
  request.r(i815[7], i815[8], 0, i814, 'unityFallbackShader')
  i814.readDepth = !!i815[9]
  i814.isCreatedByShaderGraph = !!i815[10]
  i814.compiled = !!i815[11]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i829 = data
  i828.shaderName = i829[0]
  i828.errorMessage = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i834 = root || new pc.UnityShaderPass()
  var i835 = data
  i834.id = i835[0]
  i834.subShaderIndex = i835[1]
  i834.name = i835[2]
  i834.passType = i835[3]
  i834.grabPassTextureName = i835[4]
  i834.usePass = !!i835[5]
  i834.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[6], i834.zTest)
  i834.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[7], i834.zWrite)
  i834.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[8], i834.culling)
  i834.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i835[9], i834.blending)
  i834.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i835[10], i834.alphaBlending)
  i834.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[11], i834.colorWriteMask)
  i834.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[12], i834.offsetUnits)
  i834.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[13], i834.offsetFactor)
  i834.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[14], i834.stencilRef)
  i834.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[15], i834.stencilReadMask)
  i834.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[16], i834.stencilWriteMask)
  i834.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i835[17], i834.stencilOp)
  i834.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i835[18], i834.stencilOpFront)
  i834.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i835[19], i834.stencilOpBack)
  var i837 = i835[20]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i837[i + 0]) );
  }
  i834.tags = i836
  var i839 = i835[21]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( i839[i + 0] );
  }
  i834.passDefinedKeywords = i838
  var i841 = i835[22]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i841[i + 0]) );
  }
  i834.passDefinedKeywordGroups = i840
  var i843 = i835[23]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i843[i + 0]) );
  }
  i834.variants = i842
  var i845 = i835[24]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i845[i + 0]) );
  }
  i834.excludedVariants = i844
  i834.hasDepthReader = !!i835[25]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i847 = data
  i846.val = i847[0]
  i846.name = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i849 = data
  i848.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[0], i848.src)
  i848.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[1], i848.dst)
  i848.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[2], i848.op)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i851 = data
  i850.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[0], i850.pass)
  i850.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[1], i850.fail)
  i850.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[2], i850.zFail)
  i850.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[3], i850.comp)
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i855 = data
  i854.name = i855[0]
  i854.value = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i859 = data
  var i861 = i859[0]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i858.keywords = i860
  i858.hasDiscard = !!i859[1]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i865 = data
  i864.passId = i865[0]
  i864.subShaderIndex = i865[1]
  var i867 = i865[2]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i864.keywords = i866
  i864.vertexProgram = i865[3]
  i864.fragmentProgram = i865[4]
  i864.exportedForWebGl2 = !!i865[5]
  i864.readDepth = !!i865[6]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'shader')
  i870.pass = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i875 = data
  i874.name = i875[0]
  i874.type = i875[1]
  i874.value = new pc.Vec4( i875[2], i875[3], i875[4], i875[5] )
  i874.textureValue = i875[6]
  i874.shaderPropertyFlag = i875[7]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i877 = data
  i876.name = i877[0]
  request.r(i877[1], i877[2], 0, i876, 'texture')
  i876.aabb = i877[3]
  i876.vertices = i877[4]
  i876.triangles = i877[5]
  i876.textureRect = UnityEngine.Rect.MinMaxRect(i877[6], i877[7], i877[8], i877[9])
  i876.packedRect = UnityEngine.Rect.MinMaxRect(i877[10], i877[11], i877[12], i877[13])
  i876.border = new pc.Vec4( i877[14], i877[15], i877[16], i877[17] )
  i876.transparency = i877[18]
  i876.bounds = i877[19]
  i876.pixelsPerUnit = i877[20]
  i876.textureWidth = i877[21]
  i876.textureHeight = i877[22]
  i876.nativeSize = new pc.Vec2( i877[23], i877[24] )
  i876.pivot = new pc.Vec2( i877[25], i877[26] )
  i876.textureRectOffset = new pc.Vec2( i877[27], i877[28] )
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i879 = data
  i878.name = i879[0]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i881 = data
  i880.name = i881[0]
  i880.ascent = i881[1]
  i880.originalLineHeight = i881[2]
  i880.fontSize = i881[3]
  var i883 = i881[4]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i883[i + 0]) );
  }
  i880.characterInfo = i882
  request.r(i881[5], i881[6], 0, i880, 'texture')
  i880.originalFontSize = i881[7]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i887 = data
  i886.index = i887[0]
  i886.advance = i887[1]
  i886.bearing = i887[2]
  i886.glyphWidth = i887[3]
  i886.glyphHeight = i887[4]
  i886.minX = i887[5]
  i886.maxX = i887[6]
  i886.minY = i887[7]
  i886.maxY = i887[8]
  i886.uvBottomLeftX = i887[9]
  i886.uvBottomLeftY = i887[10]
  i886.uvBottomRightX = i887[11]
  i886.uvBottomRightY = i887[12]
  i886.uvTopLeftX = i887[13]
  i886.uvTopLeftY = i887[14]
  i886.uvTopRightX = i887[15]
  i886.uvTopRightY = i887[16]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i889 = data
  i888.name = i889[0]
  i888.bytes64 = i889[1]
  i888.data = i889[2]
  return i888
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i891 = data
  i890.hashCode = i891[0]
  request.r(i891[1], i891[2], 0, i890, 'material')
  i890.materialHashCode = i891[3]
  request.r(i891[4], i891[5], 0, i890, 'atlas')
  i890.normalStyle = i891[6]
  i890.normalSpacingOffset = i891[7]
  i890.boldStyle = i891[8]
  i890.boldSpacing = i891[9]
  i890.italicStyle = i891[10]
  i890.tabSize = i891[11]
  i890.m_Version = i891[12]
  i890.m_SourceFontFileGUID = i891[13]
  request.r(i891[14], i891[15], 0, i890, 'm_SourceFontFile_EditorRef')
  request.r(i891[16], i891[17], 0, i890, 'm_SourceFontFile')
  i890.m_AtlasPopulationMode = i891[18]
  i890.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i891[19], i890.m_FaceInfo)
  var i893 = i891[20]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('UnityEngine.TextCore.Glyph', i893[i + 0]));
  }
  i890.m_GlyphTable = i892
  var i895 = i891[21]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('TMPro.TMP_Character', i895[i + 0]));
  }
  i890.m_CharacterTable = i894
  var i897 = i891[22]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i890.m_AtlasTextures = i896
  i890.m_AtlasTextureIndex = i891[23]
  i890.m_IsMultiAtlasTexturesEnabled = !!i891[24]
  i890.m_ClearDynamicDataOnBuild = !!i891[25]
  var i899 = i891[26]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i899.length; i += 1) {
    i898.add(request.d('UnityEngine.TextCore.GlyphRect', i899[i + 0]));
  }
  i890.m_UsedGlyphRects = i898
  var i901 = i891[27]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('UnityEngine.TextCore.GlyphRect', i901[i + 0]));
  }
  i890.m_FreeGlyphRects = i900
  i890.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i891[28], i890.m_fontInfo)
  i890.m_AtlasWidth = i891[29]
  i890.m_AtlasHeight = i891[30]
  i890.m_AtlasPadding = i891[31]
  i890.m_AtlasRenderMode = i891[32]
  var i903 = i891[33]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('TMPro.TMP_Glyph', i903[i + 0]));
  }
  i890.m_glyphInfoList = i902
  i890.m_KerningTable = request.d('TMPro.KerningTable', i891[34], i890.m_KerningTable)
  i890.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i891[35], i890.m_FontFeatureTable)
  var i905 = i891[36]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 1, i904, '')
  }
  i890.fallbackFontAssets = i904
  var i907 = i891[37]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 1, i906, '')
  }
  i890.m_FallbackFontAssetTable = i906
  i890.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i891[38], i890.m_CreationSettings)
  var i909 = i891[39]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('TMPro.TMP_FontWeightPair', i909[i + 0]) );
  }
  i890.m_FontWeightTable = i908
  var i911 = i891[40]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('TMPro.TMP_FontWeightPair', i911[i + 0]) );
  }
  i890.fontWeights = i910
  return i890
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i913 = data
  i912.m_FaceIndex = i913[0]
  i912.m_FamilyName = i913[1]
  i912.m_StyleName = i913[2]
  i912.m_PointSize = i913[3]
  i912.m_Scale = i913[4]
  i912.m_UnitsPerEM = i913[5]
  i912.m_LineHeight = i913[6]
  i912.m_AscentLine = i913[7]
  i912.m_CapLine = i913[8]
  i912.m_MeanLine = i913[9]
  i912.m_Baseline = i913[10]
  i912.m_DescentLine = i913[11]
  i912.m_SuperscriptOffset = i913[12]
  i912.m_SuperscriptSize = i913[13]
  i912.m_SubscriptOffset = i913[14]
  i912.m_SubscriptSize = i913[15]
  i912.m_UnderlineOffset = i913[16]
  i912.m_UnderlineThickness = i913[17]
  i912.m_StrikethroughOffset = i913[18]
  i912.m_StrikethroughThickness = i913[19]
  i912.m_TabWidth = i913[20]
  return i912
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i917 = data
  i916.m_Index = i917[0]
  i916.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i917[1], i916.m_Metrics)
  i916.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i917[2], i916.m_GlyphRect)
  i916.m_Scale = i917[3]
  i916.m_AtlasIndex = i917[4]
  i916.m_ClassDefinitionType = i917[5]
  return i916
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i919 = data
  i918.m_Width = i919[0]
  i918.m_Height = i919[1]
  i918.m_HorizontalBearingX = i919[2]
  i918.m_HorizontalBearingY = i919[3]
  i918.m_HorizontalAdvance = i919[4]
  return i918
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i921 = data
  i920.m_X = i921[0]
  i920.m_Y = i921[1]
  i920.m_Width = i921[2]
  i920.m_Height = i921[3]
  return i920
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.TMP_Character' )
  var i925 = data
  i924.m_ElementType = i925[0]
  i924.m_Unicode = i925[1]
  i924.m_GlyphIndex = i925[2]
  i924.m_Scale = i925[3]
  return i924
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i931 = data
  i930.Name = i931[0]
  i930.PointSize = i931[1]
  i930.Scale = i931[2]
  i930.CharacterCount = i931[3]
  i930.LineHeight = i931[4]
  i930.Baseline = i931[5]
  i930.Ascender = i931[6]
  i930.CapHeight = i931[7]
  i930.Descender = i931[8]
  i930.CenterLine = i931[9]
  i930.SuperscriptOffset = i931[10]
  i930.SubscriptOffset = i931[11]
  i930.SubSize = i931[12]
  i930.Underline = i931[13]
  i930.UnderlineThickness = i931[14]
  i930.strikethrough = i931[15]
  i930.strikethroughThickness = i931[16]
  i930.TabWidth = i931[17]
  i930.Padding = i931[18]
  i930.AtlasWidth = i931[19]
  i930.AtlasHeight = i931[20]
  return i930
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_Glyph' )
  var i935 = data
  i934.id = i935[0]
  i934.x = i935[1]
  i934.y = i935[2]
  i934.width = i935[3]
  i934.height = i935[4]
  i934.xOffset = i935[5]
  i934.yOffset = i935[6]
  i934.xAdvance = i935[7]
  i934.scale = i935[8]
  return i934
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.KerningTable' )
  var i937 = data
  var i939 = i937[0]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('TMPro.KerningPair', i939[i + 0]));
  }
  i936.kerningPairs = i938
  return i936
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.KerningPair' )
  var i943 = data
  i942.xOffset = i943[0]
  i942.m_FirstGlyph = i943[1]
  i942.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i943[2], i942.m_FirstGlyphAdjustments)
  i942.m_SecondGlyph = i943[3]
  i942.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i943[4], i942.m_SecondGlyphAdjustments)
  i942.m_IgnoreSpacingAdjustments = !!i943[5]
  return i942
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i945 = data
  var i947 = i945[0]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i947[i + 0]));
  }
  i944.m_GlyphPairAdjustmentRecords = i946
  return i944
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i951 = data
  i950.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i951[0], i950.m_FirstAdjustmentRecord)
  i950.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i951[1], i950.m_SecondAdjustmentRecord)
  i950.m_FeatureLookupFlags = i951[2]
  return i950
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i953 = data
  i952.m_GlyphIndex = i953[0]
  i952.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i953[1], i952.m_GlyphValueRecord)
  return i952
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i955 = data
  i954.m_XPlacement = i955[0]
  i954.m_YPlacement = i955[1]
  i954.m_XAdvance = i955[2]
  i954.m_YAdvance = i955[3]
  return i954
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i959 = data
  i958.sourceFontFileName = i959[0]
  i958.sourceFontFileGUID = i959[1]
  i958.pointSizeSamplingMode = i959[2]
  i958.pointSize = i959[3]
  i958.padding = i959[4]
  i958.packingMode = i959[5]
  i958.atlasWidth = i959[6]
  i958.atlasHeight = i959[7]
  i958.characterSetSelectionMode = i959[8]
  i958.characterSequence = i959[9]
  i958.referencedFontAssetGUID = i959[10]
  i958.referencedTextAssetGUID = i959[11]
  i958.fontStyle = i959[12]
  i958.fontStyleModifier = i959[13]
  i958.renderMode = i959[14]
  i958.includeFontFeatures = !!i959[15]
  return i958
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'regularTypeface')
  request.r(i963[2], i963[3], 0, i962, 'italicTypeface')
  return i962
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i964 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i965 = data
  i964.useSafeMode = !!i965[0]
  i964.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i965[1], i964.safeModeOptions)
  i964.timeScale = i965[2]
  i964.unscaledTimeScale = i965[3]
  i964.useSmoothDeltaTime = !!i965[4]
  i964.maxSmoothUnscaledTime = i965[5]
  i964.rewindCallbackMode = i965[6]
  i964.showUnityEditorReport = !!i965[7]
  i964.logBehaviour = i965[8]
  i964.drawGizmos = !!i965[9]
  i964.defaultRecyclable = !!i965[10]
  i964.defaultAutoPlay = i965[11]
  i964.defaultUpdateType = i965[12]
  i964.defaultTimeScaleIndependent = !!i965[13]
  i964.defaultEaseType = i965[14]
  i964.defaultEaseOvershootOrAmplitude = i965[15]
  i964.defaultEasePeriod = i965[16]
  i964.defaultAutoKill = !!i965[17]
  i964.defaultLoopType = i965[18]
  i964.debugMode = !!i965[19]
  i964.debugStoreTargetId = !!i965[20]
  i964.showPreviewPanel = !!i965[21]
  i964.storeSettingsLocation = i965[22]
  i964.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i965[23], i964.modules)
  i964.createASMDEF = !!i965[24]
  i964.showPlayingTweens = !!i965[25]
  i964.showPausedTweens = !!i965[26]
  return i964
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i966 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i967 = data
  i966.logBehaviour = i967[0]
  i966.nestedTweenFailureBehaviour = i967[1]
  return i966
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i968 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i969 = data
  i968.showPanel = !!i969[0]
  i968.audioEnabled = !!i969[1]
  i968.physicsEnabled = !!i969[2]
  i968.physics2DEnabled = !!i969[3]
  i968.spriteEnabled = !!i969[4]
  i968.uiEnabled = !!i969[5]
  i968.textMeshProEnabled = !!i969[6]
  i968.tk2DEnabled = !!i969[7]
  i968.deAudioEnabled = !!i969[8]
  i968.deUnityExtendedEnabled = !!i969[9]
  i968.epoOutlineEnabled = !!i969[10]
  return i968
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_Settings' )
  var i971 = data
  i970.m_enableWordWrapping = !!i971[0]
  i970.m_enableKerning = !!i971[1]
  i970.m_enableExtraPadding = !!i971[2]
  i970.m_enableTintAllSprites = !!i971[3]
  i970.m_enableParseEscapeCharacters = !!i971[4]
  i970.m_EnableRaycastTarget = !!i971[5]
  i970.m_GetFontFeaturesAtRuntime = !!i971[6]
  i970.m_missingGlyphCharacter = i971[7]
  i970.m_warningsDisabled = !!i971[8]
  request.r(i971[9], i971[10], 0, i970, 'm_defaultFontAsset')
  i970.m_defaultFontAssetPath = i971[11]
  i970.m_defaultFontSize = i971[12]
  i970.m_defaultAutoSizeMinRatio = i971[13]
  i970.m_defaultAutoSizeMaxRatio = i971[14]
  i970.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i971[15], i971[16] )
  i970.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i971[17], i971[18] )
  i970.m_autoSizeTextContainer = !!i971[19]
  i970.m_IsTextObjectScaleStatic = !!i971[20]
  var i973 = i971[21]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i970.m_fallbackFontAssets = i972
  i970.m_matchMaterialPreset = !!i971[22]
  request.r(i971[23], i971[24], 0, i970, 'm_defaultSpriteAsset')
  i970.m_defaultSpriteAssetPath = i971[25]
  i970.m_enableEmojiSupport = !!i971[26]
  i970.m_MissingCharacterSpriteUnicode = i971[27]
  i970.m_defaultColorGradientPresetsPath = i971[28]
  request.r(i971[29], i971[30], 0, i970, 'm_defaultStyleSheet')
  i970.m_StyleSheetsResourcePath = i971[31]
  request.r(i971[32], i971[33], 0, i970, 'm_leadingCharacters')
  request.r(i971[34], i971[35], 0, i970, 'm_followingCharacters')
  i970.m_UseModernHangulLineBreakingRules = !!i971[36]
  return i970
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i975 = data
  i974.hashCode = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'material')
  i974.materialHashCode = i975[3]
  request.r(i975[4], i975[5], 0, i974, 'spriteSheet')
  var i977 = i975[6]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(request.d('TMPro.TMP_Sprite', i977[i + 0]));
  }
  i974.spriteInfoList = i976
  var i979 = i975[7]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i974.fallbackSpriteAssets = i978
  i974.m_Version = i975[8]
  i974.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i975[9], i974.m_FaceInfo)
  var i981 = i975[10]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i981.length; i += 1) {
    i980.add(request.d('TMPro.TMP_SpriteCharacter', i981[i + 0]));
  }
  i974.m_SpriteCharacterTable = i980
  var i983 = i975[11]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(request.d('TMPro.TMP_SpriteGlyph', i983[i + 0]));
  }
  i974.m_SpriteGlyphTable = i982
  return i974
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_Sprite' )
  var i987 = data
  i986.name = i987[0]
  i986.hashCode = i987[1]
  i986.unicode = i987[2]
  i986.pivot = new pc.Vec2( i987[3], i987[4] )
  request.r(i987[5], i987[6], 0, i986, 'sprite')
  i986.id = i987[7]
  i986.x = i987[8]
  i986.y = i987[9]
  i986.width = i987[10]
  i986.height = i987[11]
  i986.xOffset = i987[12]
  i986.yOffset = i987[13]
  i986.xAdvance = i987[14]
  i986.scale = i987[15]
  return i986
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i993 = data
  i992.m_Name = i993[0]
  i992.m_HashCode = i993[1]
  i992.m_ElementType = i993[2]
  i992.m_Unicode = i993[3]
  i992.m_GlyphIndex = i993[4]
  i992.m_Scale = i993[5]
  return i992
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'sprite')
  i996.m_Index = i997[2]
  i996.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i997[3], i996.m_Metrics)
  i996.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i997[4], i996.m_GlyphRect)
  i996.m_Scale = i997[5]
  i996.m_AtlasIndex = i997[6]
  i996.m_ClassDefinitionType = i997[7]
  return i996
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(request.d('TMPro.TMP_Style', i1001[i + 0]));
  }
  i998.m_StyleList = i1000
  return i998
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_Style' )
  var i1005 = data
  i1004.m_Name = i1005[0]
  i1004.m_HashCode = i1005[1]
  i1004.m_OpeningDefinition = i1005[2]
  i1004.m_ClosingDefinition = i1005[3]
  i1004.m_OpeningTagArray = i1005[4]
  i1004.m_ClosingTagArray = i1005[5]
  i1004.m_OpeningTagUnicodeArray = i1005[6]
  i1004.m_ClosingTagUnicodeArray = i1005[7]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1009[i + 0]) );
  }
  i1006.files = i1008
  i1006.componentToPrefabIds = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1013 = data
  i1012.path = i1013[0]
  request.r(i1013[1], i1013[2], 0, i1012, 'unityObject')
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1017[i + 0]) );
  }
  i1014.scriptsExecutionOrder = i1016
  var i1019 = i1015[1]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1019[i + 0]) );
  }
  i1014.sortingLayers = i1018
  var i1021 = i1015[2]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1021[i + 0]) );
  }
  i1014.cullingLayers = i1020
  i1014.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1015[3], i1014.timeSettings)
  i1014.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1015[4], i1014.physicsSettings)
  i1014.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1015[5], i1014.physics2DSettings)
  i1014.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1015[6], i1014.qualitySettings)
  i1014.enableRealtimeShadows = !!i1015[7]
  i1014.enableAutoInstancing = !!i1015[8]
  i1014.enableDynamicBatching = !!i1015[9]
  i1014.lightmapEncodingQuality = i1015[10]
  i1014.desiredColorSpace = i1015[11]
  var i1023 = i1015[12]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1014.allTags = i1022
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.value = i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1031 = data
  i1030.id = i1031[0]
  i1030.name = i1031[1]
  i1030.value = i1031[2]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1035 = data
  i1034.id = i1035[0]
  i1034.name = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1037 = data
  i1036.fixedDeltaTime = i1037[0]
  i1036.maximumDeltaTime = i1037[1]
  i1036.timeScale = i1037[2]
  i1036.maximumParticleTimestep = i1037[3]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1039 = data
  i1038.gravity = new pc.Vec3( i1039[0], i1039[1], i1039[2] )
  i1038.defaultSolverIterations = i1039[3]
  i1038.bounceThreshold = i1039[4]
  i1038.autoSyncTransforms = !!i1039[5]
  i1038.autoSimulation = !!i1039[6]
  var i1041 = i1039[7]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1041[i + 0]) );
  }
  i1038.collisionMatrix = i1040
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1045 = data
  i1044.enabled = !!i1045[0]
  i1044.layerId = i1045[1]
  i1044.otherLayerId = i1045[2]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'material')
  i1046.gravity = new pc.Vec2( i1047[2], i1047[3] )
  i1046.positionIterations = i1047[4]
  i1046.velocityIterations = i1047[5]
  i1046.velocityThreshold = i1047[6]
  i1046.maxLinearCorrection = i1047[7]
  i1046.maxAngularCorrection = i1047[8]
  i1046.maxTranslationSpeed = i1047[9]
  i1046.maxRotationSpeed = i1047[10]
  i1046.baumgarteScale = i1047[11]
  i1046.baumgarteTOIScale = i1047[12]
  i1046.timeToSleep = i1047[13]
  i1046.linearSleepTolerance = i1047[14]
  i1046.angularSleepTolerance = i1047[15]
  i1046.defaultContactOffset = i1047[16]
  i1046.autoSimulation = !!i1047[17]
  i1046.queriesHitTriggers = !!i1047[18]
  i1046.queriesStartInColliders = !!i1047[19]
  i1046.callbacksOnDisable = !!i1047[20]
  i1046.reuseCollisionCallbacks = !!i1047[21]
  i1046.autoSyncTransforms = !!i1047[22]
  var i1049 = i1047[23]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1049[i + 0]) );
  }
  i1046.collisionMatrix = i1048
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1053 = data
  i1052.enabled = !!i1053[0]
  i1052.layerId = i1053[1]
  i1052.otherLayerId = i1053[2]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1057[i + 0]) );
  }
  i1054.qualityLevels = i1056
  var i1059 = i1055[1]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1054.names = i1058
  i1054.shadows = i1055[2]
  i1054.anisotropicFiltering = i1055[3]
  i1054.antiAliasing = i1055[4]
  i1054.lodBias = i1055[5]
  i1054.shadowCascades = i1055[6]
  i1054.shadowDistance = i1055[7]
  i1054.shadowmaskMode = i1055[8]
  i1054.shadowProjection = i1055[9]
  i1054.shadowResolution = i1055[10]
  i1054.softParticles = !!i1055[11]
  i1054.softVegetation = !!i1055[12]
  i1054.activeColorSpace = i1055[13]
  i1054.desiredColorSpace = i1055[14]
  i1054.masterTextureLimit = i1055[15]
  i1054.maxQueuedFrames = i1055[16]
  i1054.particleRaycastBudget = i1055[17]
  i1054.pixelLightCount = i1055[18]
  i1054.realtimeReflectionProbes = !!i1055[19]
  i1054.shadowCascade2Split = i1055[20]
  i1054.shadowCascade4Split = new pc.Vec3( i1055[21], i1055[22], i1055[23] )
  i1054.streamingMipmapsActive = !!i1055[24]
  i1054.vSyncCount = i1055[25]
  i1054.asyncUploadBufferSize = i1055[26]
  i1054.asyncUploadTimeSlice = i1055[27]
  i1054.billboardsFaceCameraPosition = !!i1055[28]
  i1054.shadowNearPlaneOffset = i1055[29]
  i1054.streamingMipmapsMemoryBudget = i1055[30]
  i1054.maximumLODLevel = i1055[31]
  i1054.streamingMipmapsAddAllCameras = !!i1055[32]
  i1054.streamingMipmapsMaxLevelReduction = i1055[33]
  i1054.streamingMipmapsRenderersPerFrame = i1055[34]
  i1054.resolutionScalingFixedDPIFactor = i1055[35]
  i1054.streamingMipmapsMaxFileIORequests = i1055[36]
  i1054.currentQualityLevel = i1055[37]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1065 = data
  i1064.weight = i1065[0]
  i1064.vertices = i1065[1]
  i1064.normals = i1065[2]
  i1064.tangents = i1065[3]
  return i1064
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1067 = data
  i1066.xPlacement = i1067[0]
  i1066.yPlacement = i1067[1]
  i1066.xAdvance = i1067[2]
  i1066.yAdvance = i1067[3]
  return i1066
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.WheelCollider":{"enabled":0,"center":1,"radius":4,"mass":5,"suspensionDistance":6,"forceAppPointDistance":7,"suspensionSpring":8,"forwardFriction":9,"sidewaysFriction":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[14],"60":[1],"61":[1],"62":[1],"63":[1],"64":[1],"65":[1],"66":[1],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[68],"76":[68],"77":[68],"78":[68],"79":[68],"80":[68],"81":[14],"82":[4],"83":[84],"85":[84],"31":[30],"86":[30],"87":[30],"33":[31],"35":[34,30],"88":[30],"32":[31],"89":[30],"90":[30],"91":[30],"92":[30],"93":[30],"94":[30],"95":[30],"96":[30],"97":[30],"98":[34,30],"99":[30],"100":[30],"101":[30],"102":[30],"41":[34,30],"103":[30],"104":[21],"105":[21],"22":[21],"106":[21],"107":[14],"108":[14],"109":[30],"110":[4,30],"37":[30,34],"111":[30],"112":[34,30],"113":[4],"114":[34,30],"115":[30],"116":[117],"118":[117],"119":[14],"120":[121],"122":[117]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.WheelCollider","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Light","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","SmoothFollowCamera","CameraSequence","UnityEngine.CanvasGroup","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AICarController","CheckpointManager","UnityEngine.GameObject","PlayerCarController","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.PhysicMaterial","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","UIManager","UnityEngine.UI.Text","UnityEngine.Font","GameManager","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "INDIEZ";

Deserializers.lunaInitializationTime = "04/29/2025 09:21:16";

Deserializers.lunaDaysRunning = "8.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "29549";

Deserializers.projectId = "c15883569d6bc4f039b50232f623b7dd";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.10.3\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

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

Deserializers.buildID = "e54de19e-d8d6-4659-ad9d-6ddb1b6de40c";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

