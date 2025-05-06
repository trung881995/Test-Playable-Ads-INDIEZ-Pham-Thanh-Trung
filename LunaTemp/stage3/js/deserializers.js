var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointSpring' )
  var i537 = data
  i536.spring = i537[0]
  i536.damper = i537[1]
  i536.targetPosition = i537[2]
  return i536
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointMotor' )
  var i539 = data
  i538.m_TargetVelocity = i539[0]
  i538.m_Force = i539[1]
  i538.m_FreeSpin = i539[2]
  return i538
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointLimits' )
  var i541 = data
  i540.m_Min = i541[0]
  i540.m_Max = i541[1]
  i540.m_Bounciness = i541[2]
  i540.m_BounceMinVelocity = i541[3]
  i540.m_ContactDistance = i541[4]
  i540.minBounce = i541[5]
  i540.maxBounce = i541[6]
  return i540
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointDrive' )
  var i543 = data
  i542.m_PositionSpring = i543[0]
  i542.m_PositionDamper = i543[1]
  i542.m_MaximumForce = i543[2]
  i542.m_UseAcceleration = i543[3]
  return i542
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i545 = data
  i544.m_Spring = i545[0]
  i544.m_Damper = i545[1]
  return i544
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i547 = data
  i546.m_Limit = i547[0]
  i546.m_Bounciness = i547[1]
  i546.m_ContactDistance = i547[2]
  return i546
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i549 = data
  i548.m_ExtremumSlip = i549[0]
  i548.m_ExtremumValue = i549[1]
  i548.m_AsymptoteSlip = i549[2]
  i548.m_AsymptoteValue = i549[3]
  i548.m_Stiffness = i549[4]
  return i548
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i551 = data
  i550.m_LowerAngle = i551[0]
  i550.m_UpperAngle = i551[1]
  return i550
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i553 = data
  i552.m_MotorSpeed = i553[0]
  i552.m_MaximumMotorTorque = i553[1]
  return i552
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i555 = data
  i554.m_DampingRatio = i555[0]
  i554.m_Frequency = i555[1]
  i554.m_Angle = i555[2]
  return i554
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i557 = data
  i556.m_LowerTranslation = i557[0]
  i556.m_UpperTranslation = i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i559 = data
  i558.position = new pc.Vec3( i559[0], i559[1], i559[2] )
  i558.scale = new pc.Vec3( i559[3], i559[4], i559[5] )
  i558.rotation = new pc.Quat(i559[6], i559[7], i559[8], i559[9])
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i561 = data
  i560.mass = i561[0]
  i560.drag = i561[1]
  i560.angularDrag = i561[2]
  i560.useGravity = !!i561[3]
  i560.isKinematic = !!i561[4]
  i560.constraints = i561[5]
  i560.maxAngularVelocity = i561[6]
  i560.collisionDetectionMode = i561[7]
  i560.interpolation = i561[8]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'sharedMesh')
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'additionalVertexStreams')
  i564.enabled = !!i565[2]
  request.r(i565[3], i565[4], 0, i564, 'sharedMaterial')
  var i567 = i565[5]
  var i566 = []
  for(var i = 0; i < i567.length; i += 2) {
  request.r(i567[i + 0], i567[i + 1], 2, i566, '')
  }
  i564.sharedMaterials = i566
  i564.receiveShadows = !!i565[6]
  i564.shadowCastingMode = i565[7]
  i564.sortingLayerID = i565[8]
  i564.sortingOrder = i565[9]
  i564.lightmapIndex = i565[10]
  i564.lightmapSceneIndex = i565[11]
  i564.lightmapScaleOffset = new pc.Vec4( i565[12], i565[13], i565[14], i565[15] )
  i564.lightProbeUsage = i565[16]
  i564.reflectionProbeUsage = i565[17]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i571 = data
  i570.center = new pc.Vec3( i571[0], i571[1], i571[2] )
  i570.size = new pc.Vec3( i571[3], i571[4], i571[5] )
  i570.enabled = !!i571[6]
  i570.isTrigger = !!i571[7]
  request.r(i571[8], i571[9], 0, i570, 'material')
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i573 = data
  i572.name = i573[0]
  i572.tagId = i573[1]
  i572.enabled = !!i573[2]
  i572.isStatic = !!i573[3]
  i572.layer = i573[4]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.WheelCollider"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.WheelCollider' )
  var i575 = data
  i574.enabled = !!i575[0]
  i574.center = new pc.Vec3( i575[1], i575[2], i575[3] )
  i574.radius = i575[4]
  i574.mass = i575[5]
  i574.suspensionDistance = i575[6]
  i574.forceAppPointDistance = i575[7]
  i574.suspensionSpring = request.d('UnityEngine.JointSpring', i575[8], i574.suspensionSpring)
  i574.forwardFriction = request.d('UnityEngine.WheelFrictionCurve', i575[9], i574.forwardFriction)
  i574.sidewaysFriction = request.d('UnityEngine.WheelFrictionCurve', i575[10], i574.sidewaysFriction)
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i577 = data
  i576.name = i577[0]
  i576.halfPrecision = !!i577[1]
  i576.useUInt32IndexFormat = !!i577[2]
  i576.vertexCount = i577[3]
  i576.aabb = i577[4]
  var i579 = i577[5]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( !!i579[i + 0] );
  }
  i576.streams = i578
  i576.vertices = i577[6]
  var i581 = i577[7]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i581[i + 0]) );
  }
  i576.subMeshes = i580
  var i583 = i577[8]
  var i582 = []
  for(var i = 0; i < i583.length; i += 16) {
    i582.push( new pc.Mat4().setData(i583[i + 0], i583[i + 1], i583[i + 2], i583[i + 3],  i583[i + 4], i583[i + 5], i583[i + 6], i583[i + 7],  i583[i + 8], i583[i + 9], i583[i + 10], i583[i + 11],  i583[i + 12], i583[i + 13], i583[i + 14], i583[i + 15]) );
  }
  i576.bindposes = i582
  var i585 = i577[9]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i585[i + 0]) );
  }
  i576.blendShapes = i584
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i591 = data
  i590.triangles = i591[0]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i597 = data
  i596.name = i597[0]
  var i599 = i597[1]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i599[i + 0]) );
  }
  i596.frames = i598
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i600 = root || new pc.UnityMaterial()
  var i601 = data
  i600.name = i601[0]
  request.r(i601[1], i601[2], 0, i600, 'shader')
  i600.renderQueue = i601[3]
  i600.enableInstancing = !!i601[4]
  var i603 = i601[5]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i603[i + 0]) );
  }
  i600.floatParameters = i602
  var i605 = i601[6]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i605[i + 0]) );
  }
  i600.colorParameters = i604
  var i607 = i601[7]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i607[i + 0]) );
  }
  i600.vectorParameters = i606
  var i609 = i601[8]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i609[i + 0]) );
  }
  i600.textureParameters = i608
  var i611 = i601[9]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i611[i + 0]) );
  }
  i600.materialFlags = i610
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i615 = data
  i614.name = i615[0]
  i614.value = i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i619 = data
  i618.name = i619[0]
  i618.value = new pc.Color(i619[1], i619[2], i619[3], i619[4])
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i623 = data
  i622.name = i623[0]
  i622.value = new pc.Vec4( i623[1], i623[2], i623[3], i623[4] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i627 = data
  i626.name = i627[0]
  request.r(i627[1], i627[2], 0, i626, 'value')
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i631 = data
  i630.name = i631[0]
  i630.enabled = !!i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i633 = data
  i632.name = i633[0]
  i632.width = i633[1]
  i632.height = i633[2]
  i632.mipmapCount = i633[3]
  i632.anisoLevel = i633[4]
  i632.filterMode = i633[5]
  i632.hdr = !!i633[6]
  i632.format = i633[7]
  i632.wrapMode = i633[8]
  i632.alphaIsTransparency = !!i633[9]
  i632.alphaSource = i633[10]
  i632.graphicsFormat = i633[11]
  i632.sRGBTexture = !!i633[12]
  i632.desiredColorSpace = i633[13]
  i632.wrapU = i633[14]
  i632.wrapV = i633[15]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i635 = data
  i634.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i635[0], i634.main)
  i634.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i635[1], i634.colorBySpeed)
  i634.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i635[2], i634.colorOverLifetime)
  i634.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i635[3], i634.emission)
  i634.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i635[4], i634.rotationBySpeed)
  i634.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i635[5], i634.rotationOverLifetime)
  i634.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i635[6], i634.shape)
  i634.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i635[7], i634.sizeBySpeed)
  i634.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i635[8], i634.sizeOverLifetime)
  i634.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i635[9], i634.textureSheetAnimation)
  i634.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i635[10], i634.velocityOverLifetime)
  i634.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i635[11], i634.noise)
  i634.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i635[12], i634.inheritVelocity)
  i634.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i635[13], i634.forceOverLifetime)
  i634.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i635[14], i634.limitVelocityOverLifetime)
  i634.useAutoRandomSeed = !!i635[15]
  i634.randomSeed = i635[16]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemMain()
  var i637 = data
  i636.duration = i637[0]
  i636.loop = !!i637[1]
  i636.prewarm = !!i637[2]
  i636.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[3], i636.startDelay)
  i636.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[4], i636.startLifetime)
  i636.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[5], i636.startSpeed)
  i636.startSize3D = !!i637[6]
  i636.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[7], i636.startSizeX)
  i636.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[8], i636.startSizeY)
  i636.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[9], i636.startSizeZ)
  i636.startRotation3D = !!i637[10]
  i636.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[11], i636.startRotationX)
  i636.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[12], i636.startRotationY)
  i636.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[13], i636.startRotationZ)
  i636.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i637[14], i636.startColor)
  i636.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[15], i636.gravityModifier)
  i636.simulationSpace = i637[16]
  request.r(i637[17], i637[18], 0, i636, 'customSimulationSpace')
  i636.simulationSpeed = i637[19]
  i636.useUnscaledTime = !!i637[20]
  i636.scalingMode = i637[21]
  i636.playOnAwake = !!i637[22]
  i636.maxParticles = i637[23]
  i636.emitterVelocityMode = i637[24]
  i636.stopAction = i637[25]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i638 = root || new pc.MinMaxCurve()
  var i639 = data
  i638.mode = i639[0]
  i638.curveMin = new pc.AnimationCurve( { keys_flow: i639[1] } )
  i638.curveMax = new pc.AnimationCurve( { keys_flow: i639[2] } )
  i638.curveMultiplier = i639[3]
  i638.constantMin = i639[4]
  i638.constantMax = i639[5]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i640 = root || new pc.MinMaxGradient()
  var i641 = data
  i640.mode = i641[0]
  i640.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i641[1], i640.gradientMin)
  i640.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i641[2], i640.gradientMax)
  i640.colorMin = new pc.Color(i641[3], i641[4], i641[5], i641[6])
  i640.colorMax = new pc.Color(i641[7], i641[8], i641[9], i641[10])
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i643 = data
  i642.mode = i643[0]
  var i645 = i643[1]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i645[i + 0]) );
  }
  i642.colorKeys = i644
  var i647 = i643[2]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i647[i + 0]) );
  }
  i642.alphaKeys = i646
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemColorBySpeed()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i649[1], i648.color)
  i648.range = new pc.Vec2( i649[2], i649[3] )
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i653 = data
  i652.color = new pc.Color(i653[0], i653[1], i653[2], i653[3])
  i652.time = i653[4]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i657 = data
  i656.alpha = i657[0]
  i656.time = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemColorOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i659[1], i658.color)
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemEmitter()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[1], i660.rateOverTime)
  i660.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.rateOverDistance)
  var i663 = i661[3]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i663[i + 0]) );
  }
  i660.bursts = i662
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemBurst()
  var i667 = data
  i666.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[0], i666.count)
  i666.cycleCount = i667[1]
  i666.minCount = i667[2]
  i666.maxCount = i667[3]
  i666.repeatInterval = i667[4]
  i666.time = i667[5]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemRotationBySpeed()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[1], i668.x)
  i668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.y)
  i668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.z)
  i668.separateAxes = !!i669[4]
  i668.range = new pc.Vec2( i669[5], i669[6] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemRotationOverLifetime()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.x)
  i670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.y)
  i670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.z)
  i670.separateAxes = !!i671[4]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemShape()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.shapeType = i673[1]
  i672.randomDirectionAmount = i673[2]
  i672.sphericalDirectionAmount = i673[3]
  i672.randomPositionAmount = i673[4]
  i672.alignToDirection = !!i673[5]
  i672.radius = i673[6]
  i672.radiusMode = i673[7]
  i672.radiusSpread = i673[8]
  i672.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[9], i672.radiusSpeed)
  i672.radiusThickness = i673[10]
  i672.angle = i673[11]
  i672.length = i673[12]
  i672.boxThickness = new pc.Vec3( i673[13], i673[14], i673[15] )
  i672.meshShapeType = i673[16]
  request.r(i673[17], i673[18], 0, i672, 'mesh')
  request.r(i673[19], i673[20], 0, i672, 'meshRenderer')
  request.r(i673[21], i673[22], 0, i672, 'skinnedMeshRenderer')
  i672.useMeshMaterialIndex = !!i673[23]
  i672.meshMaterialIndex = i673[24]
  i672.useMeshColors = !!i673[25]
  i672.normalOffset = i673[26]
  i672.arc = i673[27]
  i672.arcMode = i673[28]
  i672.arcSpread = i673[29]
  i672.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[30], i672.arcSpeed)
  i672.donutRadius = i673[31]
  i672.position = new pc.Vec3( i673[32], i673[33], i673[34] )
  i672.rotation = new pc.Vec3( i673[35], i673[36], i673[37] )
  i672.scale = new pc.Vec3( i673[38], i673[39], i673[40] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemSizeBySpeed()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.x)
  i674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.y)
  i674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.z)
  i674.separateAxes = !!i675[4]
  i674.range = new pc.Vec2( i675[5], i675[6] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemSizeOverLifetime()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[1], i676.x)
  i676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.y)
  i676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.z)
  i676.separateAxes = !!i677[4]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.mode = i679[1]
  i678.animation = i679[2]
  i678.numTilesX = i679[3]
  i678.numTilesY = i679[4]
  i678.useRandomRow = !!i679[5]
  i678.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[6], i678.frameOverTime)
  i678.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[7], i678.startFrame)
  i678.cycleCount = i679[8]
  i678.rowIndex = i679[9]
  i678.flipU = i679[10]
  i678.flipV = i679[11]
  i678.spriteCount = i679[12]
  var i681 = i679[13]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i678.sprites = i680
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.x)
  i684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.y)
  i684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.z)
  i684.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[4], i684.radial)
  i684.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[5], i684.speedModifier)
  i684.space = i685[6]
  i684.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[7], i684.orbitalX)
  i684.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[8], i684.orbitalY)
  i684.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[9], i684.orbitalZ)
  i684.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[10], i684.orbitalOffsetX)
  i684.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[11], i684.orbitalOffsetY)
  i684.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[12], i684.orbitalOffsetZ)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemNoise()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.separateAxes = !!i687[1]
  i686.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.strengthX)
  i686.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.strengthY)
  i686.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[4], i686.strengthZ)
  i686.frequency = i687[5]
  i686.damping = !!i687[6]
  i686.octaveCount = i687[7]
  i686.octaveMultiplier = i687[8]
  i686.octaveScale = i687[9]
  i686.quality = i687[10]
  i686.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[11], i686.scrollSpeed)
  i686.scrollSpeedMultiplier = i687[12]
  i686.remapEnabled = !!i687[13]
  i686.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[14], i686.remapX)
  i686.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[15], i686.remapY)
  i686.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[16], i686.remapZ)
  i686.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[17], i686.positionAmount)
  i686.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[18], i686.rotationAmount)
  i686.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[19], i686.sizeAmount)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemInheritVelocity()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.mode = i689[1]
  i688.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.curve)
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemForceOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.space = i691[4]
  i690.randomized = !!i691[5]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.limit)
  i692.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.limitX)
  i692.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.limitY)
  i692.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[4], i692.limitZ)
  i692.dampen = i693[5]
  i692.separateAxes = !!i693[6]
  i692.space = i693[7]
  i692.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[8], i692.drag)
  i692.multiplyDragByParticleSize = !!i693[9]
  i692.multiplyDragByParticleVelocity = !!i693[10]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i695 = data
  i694.enabled = !!i695[0]
  request.r(i695[1], i695[2], 0, i694, 'sharedMaterial')
  var i697 = i695[3]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i694.sharedMaterials = i696
  i694.receiveShadows = !!i695[4]
  i694.shadowCastingMode = i695[5]
  i694.sortingLayerID = i695[6]
  i694.sortingOrder = i695[7]
  i694.lightmapIndex = i695[8]
  i694.lightmapSceneIndex = i695[9]
  i694.lightmapScaleOffset = new pc.Vec4( i695[10], i695[11], i695[12], i695[13] )
  i694.lightProbeUsage = i695[14]
  i694.reflectionProbeUsage = i695[15]
  request.r(i695[16], i695[17], 0, i694, 'mesh')
  i694.meshCount = i695[18]
  i694.activeVertexStreamsCount = i695[19]
  i694.alignment = i695[20]
  i694.renderMode = i695[21]
  i694.sortMode = i695[22]
  i694.lengthScale = i695[23]
  i694.velocityScale = i695[24]
  i694.cameraVelocityScale = i695[25]
  i694.normalDirection = i695[26]
  i694.sortingFudge = i695[27]
  i694.minParticleSize = i695[28]
  i694.maxParticleSize = i695[29]
  i694.pivot = new pc.Vec3( i695[30], i695[31], i695[32] )
  request.r(i695[33], i695[34], 0, i694, 'trailMaterial')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i699 = data
  i698.enabled = !!i699[0]
  i698.type = i699[1]
  i698.color = new pc.Color(i699[2], i699[3], i699[4], i699[5])
  i698.cullingMask = i699[6]
  i698.intensity = i699[7]
  i698.range = i699[8]
  i698.spotAngle = i699[9]
  i698.shadows = i699[10]
  i698.shadowNormalBias = i699[11]
  i698.shadowBias = i699[12]
  i698.shadowStrength = i699[13]
  i698.shadowResolution = i699[14]
  i698.lightmapBakeType = i699[15]
  i698.renderMode = i699[16]
  request.r(i699[17], i699[18], 0, i698, 'cookie')
  i698.cookieSize = i699[19]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i701 = data
  i700.enabled = !!i701[0]
  i700.isTrigger = !!i701[1]
  request.r(i701[2], i701[3], 0, i700, 'material')
  request.r(i701[4], i701[5], 0, i700, 'sharedMesh')
  i700.convex = !!i701[6]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i703 = data
  i702.name = i703[0]
  i702.atlasId = i703[1]
  i702.mipmapCount = i703[2]
  i702.hdr = !!i703[3]
  i702.size = i703[4]
  i702.anisoLevel = i703[5]
  i702.filterMode = i703[6]
  var i705 = i703[7]
  var i704 = []
  for(var i = 0; i < i705.length; i += 4) {
    i704.push( UnityEngine.Rect.MinMaxRect(i705[i + 0], i705[i + 1], i705[i + 2], i705[i + 3]) );
  }
  i702.rects = i704
  i702.wrapU = i703[8]
  i702.wrapV = i703[9]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i709 = data
  i708.name = i709[0]
  i708.index = i709[1]
  i708.startup = !!i709[2]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i711 = data
  i710.enabled = !!i711[0]
  i710.aspect = i711[1]
  i710.orthographic = !!i711[2]
  i710.orthographicSize = i711[3]
  i710.backgroundColor = new pc.Color(i711[4], i711[5], i711[6], i711[7])
  i710.nearClipPlane = i711[8]
  i710.farClipPlane = i711[9]
  i710.fieldOfView = i711[10]
  i710.depth = i711[11]
  i710.clearFlags = i711[12]
  i710.cullingMask = i711[13]
  i710.rect = i711[14]
  request.r(i711[15], i711[16], 0, i710, 'targetTexture')
  i710.usePhysicalProperties = !!i711[17]
  i710.focalLength = i711[18]
  i710.sensorSize = new pc.Vec2( i711[19], i711[20] )
  i710.lensShift = new pc.Vec2( i711[21], i711[22] )
  i710.gateFit = i711[23]
  i710.commandBufferCount = i711[24]
  i710.cameraType = i711[25]
  return i710
}

Deserializers["SmoothFollowCamera"] = function (request, data, root) {
  var i712 = root || request.c( 'SmoothFollowCamera' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'target')
  i712.offset = new pc.Vec3( i713[2], i713[3], i713[4] )
  i712.followSpeed = i713[5]
  i712.rotationSpeed = i713[6]
  return i712
}

Deserializers["CameraSequence"] = function (request, data, root) {
  var i714 = root || request.c( 'CameraSequence' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'pointA')
  request.r(i715[2], i715[3], 0, i714, 'pointB')
  request.r(i715[4], i715[5], 0, i714, 'pointC')
  request.r(i715[6], i715[7], 0, i714, 'smoothFollowCamera')
  i714.rotateDuration = i715[8]
  i714.moveDuration = i715[9]
  i714.rotationSpeed = i715[10]
  request.r(i715[11], i715[12], 0, i714, 'flashEffect')
  return i714
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'm_FirstSelected')
  i716.m_sendNavigationEvents = !!i717[2]
  i716.m_DragThreshold = i717[3]
  return i716
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i719 = data
  i718.m_HorizontalAxis = i719[0]
  i718.m_VerticalAxis = i719[1]
  i718.m_SubmitButton = i719[2]
  i718.m_CancelButton = i719[3]
  i718.m_InputActionsPerSecond = i719[4]
  i718.m_RepeatDelay = i719[5]
  i718.m_ForceModuleActive = !!i719[6]
  i718.m_SendPointerHoverToParent = !!i719[7]
  return i718
}

Deserializers["AICarController"] = function (request, data, root) {
  var i720 = root || request.c( 'AICarController' )
  var i721 = data
  i720.moveSpeed = i721[0]
  i720.maxSpeed = i721[1]
  i720.smoothTime = i721[2]
  i720.turnSpeed = i721[3]
  i720.checkpointRadius = i721[4]
  i720.slowTurnThreshold = i721[5]
  i720.driftIntensity = i721[6]
  i720.obstacleDetectionRange = i721[7]
  i720.avoidanceStrength = i721[8]
  i720.obstacleLayers = UnityEngine.LayerMask.FromIntegerValue( i721[9] )
  request.r(i721[10], i721[11], 0, i720, 'checkpointManager')
  request.r(i721[12], i721[13], 0, i720, 'SpeedUpEffect')
  request.r(i721[14], i721[15], 0, i720, 'SmokeTrailEffect')
  request.r(i721[16], i721[17], 0, i720, 'SmokeStartupEffect')
  request.r(i721[18], i721[19], 0, i720, 'IdleEngineEffect')
  request.r(i721[20], i721[21], 0, i720, 'RightDriftEffect')
  request.r(i721[22], i721[23], 0, i720, 'LeftDriftEffect')
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i723 = data
  i722.enabled = !!i723[0]
  i722.center = new pc.Vec3( i723[1], i723[2], i723[3] )
  i722.radius = i723[4]
  i722.height = i723[5]
  i722.minMoveDistance = i723[6]
  i722.skinWidth = i723[7]
  i722.enableOverlapRecovery = !!i723[8]
  return i722
}

Deserializers["PlayerCarController"] = function (request, data, root) {
  var i724 = root || request.c( 'PlayerCarController' )
  var i725 = data
  i724.moveSpeed = i725[0]
  i724.smoothTime = i725[1]
  i724.maxSpeed = i725[2]
  i724.turnSpeed = i725[3]
  i724.maxTurnAngle = i725[4]
  i724.slowTurnThreshold = i725[5]
  i724.driftIntensity = i725[6]
  request.r(i725[7], i725[8], 0, i724, 'checkpointManager')
  request.r(i725[9], i725[10], 0, i724, 'Arrow')
  request.r(i725[11], i725[12], 0, i724, 'SpeedUpEffect')
  request.r(i725[13], i725[14], 0, i724, 'SmokeTrailEffect')
  request.r(i725[15], i725[16], 0, i724, 'SmokeStartupEffect')
  request.r(i725[17], i725[18], 0, i724, 'IdleEngineEffect')
  request.r(i725[19], i725[20], 0, i724, 'RightDriftEffect')
  request.r(i725[21], i725[22], 0, i724, 'LeftDriftEffect')
  request.r(i725[23], i725[24], 0, i724, 'audioSource')
  request.r(i725[25], i725[26], 0, i724, 'StartSound')
  request.r(i725[27], i725[28], 0, i724, 'WiperSound')
  request.r(i725[29], i725[30], 0, i724, 'IdleEngineSound')
  request.r(i725[31], i725[32], 0, i724, 'DrivingSound')
  request.r(i725[33], i725[34], 0, i724, 'SpeedupSound')
  request.r(i725[35], i725[36], 0, i724, 'StopSound')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'clip')
  request.r(i727[2], i727[3], 0, i726, 'outputAudioMixerGroup')
  i726.playOnAwake = !!i727[4]
  i726.loop = !!i727[5]
  i726.time = i727[6]
  i726.volume = i727[7]
  i726.pitch = i727[8]
  i726.enabled = !!i727[9]
  return i726
}

Deserializers["CheckpointManager"] = function (request, data, root) {
  var i728 = root || request.c( 'CheckpointManager' )
  var i729 = data
  var i731 = i729[0]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i728.checkpoints = i730
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i735 = data
  i734.pivot = new pc.Vec2( i735[0], i735[1] )
  i734.anchorMin = new pc.Vec2( i735[2], i735[3] )
  i734.anchorMax = new pc.Vec2( i735[4], i735[5] )
  i734.sizeDelta = new pc.Vec2( i735[6], i735[7] )
  i734.anchoredPosition3D = new pc.Vec3( i735[8], i735[9], i735[10] )
  i734.rotation = new pc.Quat(i735[11], i735[12], i735[13], i735[14])
  i734.scale = new pc.Vec3( i735[15], i735[16], i735[17] )
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i737 = data
  i736.enabled = !!i737[0]
  i736.planeDistance = i737[1]
  i736.referencePixelsPerUnit = i737[2]
  i736.isFallbackOverlay = !!i737[3]
  i736.renderMode = i737[4]
  i736.renderOrder = i737[5]
  i736.sortingLayerName = i737[6]
  i736.sortingOrder = i737[7]
  i736.scaleFactor = i737[8]
  request.r(i737[9], i737[10], 0, i736, 'worldCamera')
  i736.overrideSorting = !!i737[11]
  i736.pixelPerfect = !!i737[12]
  i736.targetDisplay = i737[13]
  i736.overridePixelPerfect = !!i737[14]
  return i736
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i739 = data
  i738.m_UiScaleMode = i739[0]
  i738.m_ReferencePixelsPerUnit = i739[1]
  i738.m_ScaleFactor = i739[2]
  i738.m_ReferenceResolution = new pc.Vec2( i739[3], i739[4] )
  i738.m_ScreenMatchMode = i739[5]
  i738.m_MatchWidthOrHeight = i739[6]
  i738.m_PhysicalUnit = i739[7]
  i738.m_FallbackScreenDPI = i739[8]
  i738.m_DefaultSpriteDPI = i739[9]
  i738.m_DynamicPixelsPerUnit = i739[10]
  i738.m_PresetInfoIsWorld = !!i739[11]
  return i738
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i741 = data
  i740.m_IgnoreReversedGraphics = !!i741[0]
  i740.m_BlockingObjects = i741[1]
  i740.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i741[2] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i743 = data
  i742.cullTransparentMesh = !!i743[0]
  return i742
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.Image' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'm_Sprite')
  i744.m_Type = i745[2]
  i744.m_PreserveAspect = !!i745[3]
  i744.m_FillCenter = !!i745[4]
  i744.m_FillMethod = i745[5]
  i744.m_FillAmount = i745[6]
  i744.m_FillClockwise = !!i745[7]
  i744.m_FillOrigin = i745[8]
  i744.m_UseSpriteMesh = !!i745[9]
  i744.m_PixelsPerUnitMultiplier = i745[10]
  request.r(i745[11], i745[12], 0, i744, 'm_Material')
  i744.m_Maskable = !!i745[13]
  i744.m_Color = new pc.Color(i745[14], i745[15], i745[16], i745[17])
  i744.m_RaycastTarget = !!i745[18]
  i744.m_RaycastPadding = new pc.Vec4( i745[19], i745[20], i745[21], i745[22] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i747 = data
  i746.m_Alpha = i747[0]
  i746.m_Interactable = !!i747[1]
  i746.m_BlocksRaycasts = !!i747[2]
  i746.m_IgnoreParentGroups = !!i747[3]
  i746.enabled = !!i747[4]
  return i746
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i748 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i749 = data
  i748.m_hasFontAssetChanged = !!i749[0]
  request.r(i749[1], i749[2], 0, i748, 'm_baseMaterial')
  i748.m_maskOffset = new pc.Vec4( i749[3], i749[4], i749[5], i749[6] )
  i748.m_text = i749[7]
  i748.m_isRightToLeft = !!i749[8]
  request.r(i749[9], i749[10], 0, i748, 'm_fontAsset')
  request.r(i749[11], i749[12], 0, i748, 'm_sharedMaterial')
  var i751 = i749[13]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i748.m_fontSharedMaterials = i750
  request.r(i749[14], i749[15], 0, i748, 'm_fontMaterial')
  var i753 = i749[16]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i748.m_fontMaterials = i752
  i748.m_fontColor32 = UnityEngine.Color32.ConstructColor(i749[17], i749[18], i749[19], i749[20])
  i748.m_fontColor = new pc.Color(i749[21], i749[22], i749[23], i749[24])
  i748.m_enableVertexGradient = !!i749[25]
  i748.m_colorMode = i749[26]
  i748.m_fontColorGradient = request.d('TMPro.VertexGradient', i749[27], i748.m_fontColorGradient)
  request.r(i749[28], i749[29], 0, i748, 'm_fontColorGradientPreset')
  request.r(i749[30], i749[31], 0, i748, 'm_spriteAsset')
  i748.m_tintAllSprites = !!i749[32]
  request.r(i749[33], i749[34], 0, i748, 'm_StyleSheet')
  i748.m_TextStyleHashCode = i749[35]
  i748.m_overrideHtmlColors = !!i749[36]
  i748.m_faceColor = UnityEngine.Color32.ConstructColor(i749[37], i749[38], i749[39], i749[40])
  i748.m_fontSize = i749[41]
  i748.m_fontSizeBase = i749[42]
  i748.m_fontWeight = i749[43]
  i748.m_enableAutoSizing = !!i749[44]
  i748.m_fontSizeMin = i749[45]
  i748.m_fontSizeMax = i749[46]
  i748.m_fontStyle = i749[47]
  i748.m_HorizontalAlignment = i749[48]
  i748.m_VerticalAlignment = i749[49]
  i748.m_textAlignment = i749[50]
  i748.m_characterSpacing = i749[51]
  i748.m_wordSpacing = i749[52]
  i748.m_lineSpacing = i749[53]
  i748.m_lineSpacingMax = i749[54]
  i748.m_paragraphSpacing = i749[55]
  i748.m_charWidthMaxAdj = i749[56]
  i748.m_enableWordWrapping = !!i749[57]
  i748.m_wordWrappingRatios = i749[58]
  i748.m_overflowMode = i749[59]
  request.r(i749[60], i749[61], 0, i748, 'm_linkedTextComponent')
  request.r(i749[62], i749[63], 0, i748, 'parentLinkedComponent')
  i748.m_enableKerning = !!i749[64]
  i748.m_enableExtraPadding = !!i749[65]
  i748.checkPaddingRequired = !!i749[66]
  i748.m_isRichText = !!i749[67]
  i748.m_parseCtrlCharacters = !!i749[68]
  i748.m_isOrthographic = !!i749[69]
  i748.m_isCullingEnabled = !!i749[70]
  i748.m_horizontalMapping = i749[71]
  i748.m_verticalMapping = i749[72]
  i748.m_uvLineOffset = i749[73]
  i748.m_geometrySortingOrder = i749[74]
  i748.m_IsTextObjectScaleStatic = !!i749[75]
  i748.m_VertexBufferAutoSizeReduction = !!i749[76]
  i748.m_useMaxVisibleDescender = !!i749[77]
  i748.m_pageToDisplay = i749[78]
  i748.m_margin = new pc.Vec4( i749[79], i749[80], i749[81], i749[82] )
  i748.m_isUsingLegacyAnimationComponent = !!i749[83]
  i748.m_isVolumetricText = !!i749[84]
  request.r(i749[85], i749[86], 0, i748, 'm_Material')
  i748.m_Maskable = !!i749[87]
  i748.m_Color = new pc.Color(i749[88], i749[89], i749[90], i749[91])
  i748.m_RaycastTarget = !!i749[92]
  i748.m_RaycastPadding = new pc.Vec4( i749[93], i749[94], i749[95], i749[96] )
  return i748
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i754 = root || request.c( 'TMPro.VertexGradient' )
  var i755 = data
  i754.topLeft = new pc.Color(i755[0], i755[1], i755[2], i755[3])
  i754.topRight = new pc.Color(i755[4], i755[5], i755[6], i755[7])
  i754.bottomLeft = new pc.Color(i755[8], i755[9], i755[10], i755[11])
  i754.bottomRight = new pc.Color(i755[12], i755[13], i755[14], i755[15])
  return i754
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.Button' )
  var i757 = data
  i756.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i757[0], i756.m_OnClick)
  i756.m_Navigation = request.d('UnityEngine.UI.Navigation', i757[1], i756.m_Navigation)
  i756.m_Transition = i757[2]
  i756.m_Colors = request.d('UnityEngine.UI.ColorBlock', i757[3], i756.m_Colors)
  i756.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i757[4], i756.m_SpriteState)
  i756.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i757[5], i756.m_AnimationTriggers)
  i756.m_Interactable = !!i757[6]
  request.r(i757[7], i757[8], 0, i756, 'm_TargetGraphic')
  return i756
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i759 = data
  i758.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i759[0], i758.m_PersistentCalls)
  return i758
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i761 = data
  var i763 = i761[0]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('UnityEngine.Events.PersistentCall', i763[i + 0]));
  }
  i760.m_Calls = i762
  return i760
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_Target')
  i766.m_TargetAssemblyTypeName = i767[2]
  i766.m_MethodName = i767[3]
  i766.m_Mode = i767[4]
  i766.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i767[5], i766.m_Arguments)
  i766.m_CallState = i767[6]
  return i766
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'm_ObjectArgument')
  i768.m_ObjectArgumentAssemblyTypeName = i769[2]
  i768.m_IntArgument = i769[3]
  i768.m_FloatArgument = i769[4]
  i768.m_StringArgument = i769[5]
  i768.m_BoolArgument = !!i769[6]
  return i768
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i771 = data
  i770.m_Mode = i771[0]
  i770.m_WrapAround = !!i771[1]
  request.r(i771[2], i771[3], 0, i770, 'm_SelectOnUp')
  request.r(i771[4], i771[5], 0, i770, 'm_SelectOnDown')
  request.r(i771[6], i771[7], 0, i770, 'm_SelectOnLeft')
  request.r(i771[8], i771[9], 0, i770, 'm_SelectOnRight')
  return i770
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i773 = data
  i772.m_NormalColor = new pc.Color(i773[0], i773[1], i773[2], i773[3])
  i772.m_HighlightedColor = new pc.Color(i773[4], i773[5], i773[6], i773[7])
  i772.m_PressedColor = new pc.Color(i773[8], i773[9], i773[10], i773[11])
  i772.m_SelectedColor = new pc.Color(i773[12], i773[13], i773[14], i773[15])
  i772.m_DisabledColor = new pc.Color(i773[16], i773[17], i773[18], i773[19])
  i772.m_ColorMultiplier = i773[20]
  i772.m_FadeDuration = i773[21]
  return i772
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'm_HighlightedSprite')
  request.r(i775[2], i775[3], 0, i774, 'm_PressedSprite')
  request.r(i775[4], i775[5], 0, i774, 'm_SelectedSprite')
  request.r(i775[6], i775[7], 0, i774, 'm_DisabledSprite')
  return i774
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i777 = data
  i776.m_NormalTrigger = i777[0]
  i776.m_HighlightedTrigger = i777[1]
  i776.m_PressedTrigger = i777[2]
  i776.m_SelectedTrigger = i777[3]
  i776.m_DisabledTrigger = i777[4]
  return i776
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.Text' )
  var i779 = data
  i778.m_FontData = request.d('UnityEngine.UI.FontData', i779[0], i778.m_FontData)
  i778.m_Text = i779[1]
  request.r(i779[2], i779[3], 0, i778, 'm_Material')
  i778.m_Maskable = !!i779[4]
  i778.m_Color = new pc.Color(i779[5], i779[6], i779[7], i779[8])
  i778.m_RaycastTarget = !!i779[9]
  i778.m_RaycastPadding = new pc.Vec4( i779[10], i779[11], i779[12], i779[13] )
  return i778
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.UI.FontData' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'm_Font')
  i780.m_FontSize = i781[2]
  i780.m_FontStyle = i781[3]
  i780.m_BestFit = !!i781[4]
  i780.m_MinSize = i781[5]
  i780.m_MaxSize = i781[6]
  i780.m_Alignment = i781[7]
  i780.m_AlignByGeometry = !!i781[8]
  i780.m_RichText = !!i781[9]
  i780.m_HorizontalOverflow = i781[10]
  i780.m_VerticalOverflow = i781[11]
  i780.m_LineSpacing = i781[12]
  return i780
}

Deserializers["UIManager"] = function (request, data, root) {
  var i782 = root || request.c( 'UIManager' )
  var i783 = data
  var i785 = i783[0]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.Cars = i784
  request.r(i783[1], i783[2], 0, i782, 'Menu')
  request.r(i783[3], i783[4], 0, i782, 'Scene')
  request.r(i783[5], i783[6], 0, i782, 'cameraSequence')
  request.r(i783[7], i783[8], 0, i782, 'countdownText')
  i782.timeBetweenCounts = i783[9]
  request.r(i783[10], i783[11], 0, i782, 'barFill')
  i782.fillDuration = i783[12]
  i782.shrinkDuration = i783[13]
  request.r(i783[14], i783[15], 0, i782, 'playerCarController')
  request.r(i783[16], i783[17], 0, i782, 'roundText')
  i782.totalLaps = i783[18]
  request.r(i783[19], i783[20], 0, i782, 'startBtn')
  request.r(i783[21], i783[22], 0, i782, 'retryBtn')
  request.r(i783[23], i783[24], 0, i782, 'nextBtn')
  return i782
}

Deserializers["GameManager"] = function (request, data, root) {
  var i788 = root || request.c( 'GameManager' )
  var i789 = data
  var i791 = i789[0]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i788.seasonEffectArray = i790
  var i793 = i789[1]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i788.speedUpEffectArray = i792
  request.r(i789[2], i789[3], 0, i788, 'mapRenderer')
  var i795 = i789[4]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i788.seasonMaterialArray = i794
  var i797 = i789[5]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i788.playerCarArray = i796
  request.r(i789[6], i789[7], 0, i788, 'playerCarController')
  var i799 = i789[8]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i788.carAIArray = i798
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i801 = data
  i800.ambientIntensity = i801[0]
  i800.reflectionIntensity = i801[1]
  i800.ambientMode = i801[2]
  i800.ambientLight = new pc.Color(i801[3], i801[4], i801[5], i801[6])
  i800.ambientSkyColor = new pc.Color(i801[7], i801[8], i801[9], i801[10])
  i800.ambientGroundColor = new pc.Color(i801[11], i801[12], i801[13], i801[14])
  i800.ambientEquatorColor = new pc.Color(i801[15], i801[16], i801[17], i801[18])
  i800.fogColor = new pc.Color(i801[19], i801[20], i801[21], i801[22])
  i800.fogEndDistance = i801[23]
  i800.fogStartDistance = i801[24]
  i800.fogDensity = i801[25]
  i800.fog = !!i801[26]
  request.r(i801[27], i801[28], 0, i800, 'skybox')
  i800.fogMode = i801[29]
  var i803 = i801[30]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i803[i + 0]) );
  }
  i800.lightmaps = i802
  i800.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i801[31], i800.lightProbes)
  i800.lightmapsMode = i801[32]
  i800.mixedBakeMode = i801[33]
  i800.environmentLightingMode = i801[34]
  i800.ambientProbe = new pc.SphericalHarmonicsL2(i801[35])
  i800.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i801[36])
  i800.useReferenceAmbientProbe = !!i801[37]
  request.r(i801[38], i801[39], 0, i800, 'customReflection')
  request.r(i801[40], i801[41], 0, i800, 'defaultReflection')
  i800.defaultReflectionMode = i801[42]
  i800.defaultReflectionResolution = i801[43]
  i800.sunLightObjectId = i801[44]
  i800.pixelLightCount = i801[45]
  i800.defaultReflectionHDR = !!i801[46]
  i800.hasLightDataAsset = !!i801[47]
  i800.hasManualGenerate = !!i801[48]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'lightmapColor')
  request.r(i807[2], i807[3], 0, i806, 'lightmapDirection')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i808 = root || new UnityEngine.LightProbes()
  var i809 = data
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i817 = data
  i816.name = i817[0]
  i816.bounciness = i817[1]
  i816.dynamicFriction = i817[2]
  i816.staticFriction = i817[3]
  i816.frictionCombine = i817[4]
  i816.bounceCombine = i817[5]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i819 = data
  var i821 = i819[0]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i821.length; i += 1) {
    i820.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i821[i + 0]));
  }
  i818.ShaderCompilationErrors = i820
  i818.name = i819[1]
  i818.guid = i819[2]
  var i823 = i819[3]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i818.shaderDefinedKeywords = i822
  var i825 = i819[4]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i825[i + 0]) );
  }
  i818.passes = i824
  var i827 = i819[5]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i827[i + 0]) );
  }
  i818.usePasses = i826
  var i829 = i819[6]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i829[i + 0]) );
  }
  i818.defaultParameterValues = i828
  request.r(i819[7], i819[8], 0, i818, 'unityFallbackShader')
  i818.readDepth = !!i819[9]
  i818.isCreatedByShaderGraph = !!i819[10]
  i818.compiled = !!i819[11]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i833 = data
  i832.shaderName = i833[0]
  i832.errorMessage = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i838 = root || new pc.UnityShaderPass()
  var i839 = data
  i838.id = i839[0]
  i838.subShaderIndex = i839[1]
  i838.name = i839[2]
  i838.passType = i839[3]
  i838.grabPassTextureName = i839[4]
  i838.usePass = !!i839[5]
  i838.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[6], i838.zTest)
  i838.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[7], i838.zWrite)
  i838.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[8], i838.culling)
  i838.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i839[9], i838.blending)
  i838.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i839[10], i838.alphaBlending)
  i838.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[11], i838.colorWriteMask)
  i838.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[12], i838.offsetUnits)
  i838.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[13], i838.offsetFactor)
  i838.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[14], i838.stencilRef)
  i838.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[15], i838.stencilReadMask)
  i838.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[16], i838.stencilWriteMask)
  i838.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i839[17], i838.stencilOp)
  i838.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i839[18], i838.stencilOpFront)
  i838.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i839[19], i838.stencilOpBack)
  var i841 = i839[20]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i841[i + 0]) );
  }
  i838.tags = i840
  var i843 = i839[21]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( i843[i + 0] );
  }
  i838.passDefinedKeywords = i842
  var i845 = i839[22]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i845[i + 0]) );
  }
  i838.passDefinedKeywordGroups = i844
  var i847 = i839[23]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i847[i + 0]) );
  }
  i838.variants = i846
  var i849 = i839[24]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i849[i + 0]) );
  }
  i838.excludedVariants = i848
  i838.hasDepthReader = !!i839[25]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i851 = data
  i850.val = i851[0]
  i850.name = i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i853 = data
  i852.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[0], i852.src)
  i852.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[1], i852.dst)
  i852.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[2], i852.op)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i855 = data
  i854.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[0], i854.pass)
  i854.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[1], i854.fail)
  i854.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[2], i854.zFail)
  i854.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[3], i854.comp)
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i859 = data
  i858.name = i859[0]
  i858.value = i859[1]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i863 = data
  var i865 = i863[0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i862.keywords = i864
  i862.hasDiscard = !!i863[1]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i869 = data
  i868.passId = i869[0]
  i868.subShaderIndex = i869[1]
  var i871 = i869[2]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i868.keywords = i870
  i868.vertexProgram = i869[3]
  i868.fragmentProgram = i869[4]
  i868.exportedForWebGl2 = !!i869[5]
  i868.readDepth = !!i869[6]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'shader')
  i874.pass = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i879 = data
  i878.name = i879[0]
  i878.type = i879[1]
  i878.value = new pc.Vec4( i879[2], i879[3], i879[4], i879[5] )
  i878.textureValue = i879[6]
  i878.shaderPropertyFlag = i879[7]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i881 = data
  i880.name = i881[0]
  request.r(i881[1], i881[2], 0, i880, 'texture')
  i880.aabb = i881[3]
  i880.vertices = i881[4]
  i880.triangles = i881[5]
  i880.textureRect = UnityEngine.Rect.MinMaxRect(i881[6], i881[7], i881[8], i881[9])
  i880.packedRect = UnityEngine.Rect.MinMaxRect(i881[10], i881[11], i881[12], i881[13])
  i880.border = new pc.Vec4( i881[14], i881[15], i881[16], i881[17] )
  i880.transparency = i881[18]
  i880.bounds = i881[19]
  i880.pixelsPerUnit = i881[20]
  i880.textureWidth = i881[21]
  i880.textureHeight = i881[22]
  i880.nativeSize = new pc.Vec2( i881[23], i881[24] )
  i880.pivot = new pc.Vec2( i881[25], i881[26] )
  i880.textureRectOffset = new pc.Vec2( i881[27], i881[28] )
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i883 = data
  i882.name = i883[0]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i885 = data
  i884.name = i885[0]
  i884.ascent = i885[1]
  i884.originalLineHeight = i885[2]
  i884.fontSize = i885[3]
  var i887 = i885[4]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i887[i + 0]) );
  }
  i884.characterInfo = i886
  request.r(i885[5], i885[6], 0, i884, 'texture')
  i884.originalFontSize = i885[7]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i891 = data
  i890.index = i891[0]
  i890.advance = i891[1]
  i890.bearing = i891[2]
  i890.glyphWidth = i891[3]
  i890.glyphHeight = i891[4]
  i890.minX = i891[5]
  i890.maxX = i891[6]
  i890.minY = i891[7]
  i890.maxY = i891[8]
  i890.uvBottomLeftX = i891[9]
  i890.uvBottomLeftY = i891[10]
  i890.uvBottomRightX = i891[11]
  i890.uvBottomRightY = i891[12]
  i890.uvTopLeftX = i891[13]
  i890.uvTopLeftY = i891[14]
  i890.uvTopRightX = i891[15]
  i890.uvTopRightY = i891[16]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i893 = data
  i892.name = i893[0]
  i892.bytes64 = i893[1]
  i892.data = i893[2]
  return i892
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i895 = data
  i894.hashCode = i895[0]
  request.r(i895[1], i895[2], 0, i894, 'material')
  i894.materialHashCode = i895[3]
  request.r(i895[4], i895[5], 0, i894, 'atlas')
  i894.normalStyle = i895[6]
  i894.normalSpacingOffset = i895[7]
  i894.boldStyle = i895[8]
  i894.boldSpacing = i895[9]
  i894.italicStyle = i895[10]
  i894.tabSize = i895[11]
  i894.m_Version = i895[12]
  i894.m_SourceFontFileGUID = i895[13]
  request.r(i895[14], i895[15], 0, i894, 'm_SourceFontFile_EditorRef')
  request.r(i895[16], i895[17], 0, i894, 'm_SourceFontFile')
  i894.m_AtlasPopulationMode = i895[18]
  i894.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i895[19], i894.m_FaceInfo)
  var i897 = i895[20]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('UnityEngine.TextCore.Glyph', i897[i + 0]));
  }
  i894.m_GlyphTable = i896
  var i899 = i895[21]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i899.length; i += 1) {
    i898.add(request.d('TMPro.TMP_Character', i899[i + 0]));
  }
  i894.m_CharacterTable = i898
  var i901 = i895[22]
  var i900 = []
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 2, i900, '')
  }
  i894.m_AtlasTextures = i900
  i894.m_AtlasTextureIndex = i895[23]
  i894.m_IsMultiAtlasTexturesEnabled = !!i895[24]
  i894.m_ClearDynamicDataOnBuild = !!i895[25]
  var i903 = i895[26]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('UnityEngine.TextCore.GlyphRect', i903[i + 0]));
  }
  i894.m_UsedGlyphRects = i902
  var i905 = i895[27]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('UnityEngine.TextCore.GlyphRect', i905[i + 0]));
  }
  i894.m_FreeGlyphRects = i904
  i894.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i895[28], i894.m_fontInfo)
  i894.m_AtlasWidth = i895[29]
  i894.m_AtlasHeight = i895[30]
  i894.m_AtlasPadding = i895[31]
  i894.m_AtlasRenderMode = i895[32]
  var i907 = i895[33]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('TMPro.TMP_Glyph', i907[i + 0]));
  }
  i894.m_glyphInfoList = i906
  i894.m_KerningTable = request.d('TMPro.KerningTable', i895[34], i894.m_KerningTable)
  i894.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i895[35], i894.m_FontFeatureTable)
  var i909 = i895[36]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 1, i908, '')
  }
  i894.fallbackFontAssets = i908
  var i911 = i895[37]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 1, i910, '')
  }
  i894.m_FallbackFontAssetTable = i910
  i894.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i895[38], i894.m_CreationSettings)
  var i913 = i895[39]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('TMPro.TMP_FontWeightPair', i913[i + 0]) );
  }
  i894.m_FontWeightTable = i912
  var i915 = i895[40]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('TMPro.TMP_FontWeightPair', i915[i + 0]) );
  }
  i894.fontWeights = i914
  return i894
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i917 = data
  i916.m_FaceIndex = i917[0]
  i916.m_FamilyName = i917[1]
  i916.m_StyleName = i917[2]
  i916.m_PointSize = i917[3]
  i916.m_Scale = i917[4]
  i916.m_UnitsPerEM = i917[5]
  i916.m_LineHeight = i917[6]
  i916.m_AscentLine = i917[7]
  i916.m_CapLine = i917[8]
  i916.m_MeanLine = i917[9]
  i916.m_Baseline = i917[10]
  i916.m_DescentLine = i917[11]
  i916.m_SuperscriptOffset = i917[12]
  i916.m_SuperscriptSize = i917[13]
  i916.m_SubscriptOffset = i917[14]
  i916.m_SubscriptSize = i917[15]
  i916.m_UnderlineOffset = i917[16]
  i916.m_UnderlineThickness = i917[17]
  i916.m_StrikethroughOffset = i917[18]
  i916.m_StrikethroughThickness = i917[19]
  i916.m_TabWidth = i917[20]
  return i916
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i921 = data
  i920.m_Index = i921[0]
  i920.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i921[1], i920.m_Metrics)
  i920.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i921[2], i920.m_GlyphRect)
  i920.m_Scale = i921[3]
  i920.m_AtlasIndex = i921[4]
  i920.m_ClassDefinitionType = i921[5]
  return i920
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i923 = data
  i922.m_Width = i923[0]
  i922.m_Height = i923[1]
  i922.m_HorizontalBearingX = i923[2]
  i922.m_HorizontalBearingY = i923[3]
  i922.m_HorizontalAdvance = i923[4]
  return i922
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i925 = data
  i924.m_X = i925[0]
  i924.m_Y = i925[1]
  i924.m_Width = i925[2]
  i924.m_Height = i925[3]
  return i924
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.TMP_Character' )
  var i929 = data
  i928.m_ElementType = i929[0]
  i928.m_Unicode = i929[1]
  i928.m_GlyphIndex = i929[2]
  i928.m_Scale = i929[3]
  return i928
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i935 = data
  i934.Name = i935[0]
  i934.PointSize = i935[1]
  i934.Scale = i935[2]
  i934.CharacterCount = i935[3]
  i934.LineHeight = i935[4]
  i934.Baseline = i935[5]
  i934.Ascender = i935[6]
  i934.CapHeight = i935[7]
  i934.Descender = i935[8]
  i934.CenterLine = i935[9]
  i934.SuperscriptOffset = i935[10]
  i934.SubscriptOffset = i935[11]
  i934.SubSize = i935[12]
  i934.Underline = i935[13]
  i934.UnderlineThickness = i935[14]
  i934.strikethrough = i935[15]
  i934.strikethroughThickness = i935[16]
  i934.TabWidth = i935[17]
  i934.Padding = i935[18]
  i934.AtlasWidth = i935[19]
  i934.AtlasHeight = i935[20]
  return i934
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_Glyph' )
  var i939 = data
  i938.id = i939[0]
  i938.x = i939[1]
  i938.y = i939[2]
  i938.width = i939[3]
  i938.height = i939[4]
  i938.xOffset = i939[5]
  i938.yOffset = i939[6]
  i938.xAdvance = i939[7]
  i938.scale = i939[8]
  return i938
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.KerningTable' )
  var i941 = data
  var i943 = i941[0]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('TMPro.KerningPair', i943[i + 0]));
  }
  i940.kerningPairs = i942
  return i940
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.KerningPair' )
  var i947 = data
  i946.xOffset = i947[0]
  i946.m_FirstGlyph = i947[1]
  i946.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i947[2], i946.m_FirstGlyphAdjustments)
  i946.m_SecondGlyph = i947[3]
  i946.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i947[4], i946.m_SecondGlyphAdjustments)
  i946.m_IgnoreSpacingAdjustments = !!i947[5]
  return i946
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i949 = data
  var i951 = i949[0]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i951[i + 0]));
  }
  i948.m_GlyphPairAdjustmentRecords = i950
  return i948
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i955 = data
  i954.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i955[0], i954.m_FirstAdjustmentRecord)
  i954.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i955[1], i954.m_SecondAdjustmentRecord)
  i954.m_FeatureLookupFlags = i955[2]
  return i954
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i957 = data
  i956.m_GlyphIndex = i957[0]
  i956.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i957[1], i956.m_GlyphValueRecord)
  return i956
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i959 = data
  i958.m_XPlacement = i959[0]
  i958.m_YPlacement = i959[1]
  i958.m_XAdvance = i959[2]
  i958.m_YAdvance = i959[3]
  return i958
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i963 = data
  i962.sourceFontFileName = i963[0]
  i962.sourceFontFileGUID = i963[1]
  i962.pointSizeSamplingMode = i963[2]
  i962.pointSize = i963[3]
  i962.padding = i963[4]
  i962.packingMode = i963[5]
  i962.atlasWidth = i963[6]
  i962.atlasHeight = i963[7]
  i962.characterSetSelectionMode = i963[8]
  i962.characterSequence = i963[9]
  i962.referencedFontAssetGUID = i963[10]
  i962.referencedTextAssetGUID = i963[11]
  i962.fontStyle = i963[12]
  i962.fontStyleModifier = i963[13]
  i962.renderMode = i963[14]
  i962.includeFontFeatures = !!i963[15]
  return i962
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'regularTypeface')
  request.r(i967[2], i967[3], 0, i966, 'italicTypeface')
  return i966
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i968 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i969 = data
  i968.useSafeMode = !!i969[0]
  i968.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i969[1], i968.safeModeOptions)
  i968.timeScale = i969[2]
  i968.unscaledTimeScale = i969[3]
  i968.useSmoothDeltaTime = !!i969[4]
  i968.maxSmoothUnscaledTime = i969[5]
  i968.rewindCallbackMode = i969[6]
  i968.showUnityEditorReport = !!i969[7]
  i968.logBehaviour = i969[8]
  i968.drawGizmos = !!i969[9]
  i968.defaultRecyclable = !!i969[10]
  i968.defaultAutoPlay = i969[11]
  i968.defaultUpdateType = i969[12]
  i968.defaultTimeScaleIndependent = !!i969[13]
  i968.defaultEaseType = i969[14]
  i968.defaultEaseOvershootOrAmplitude = i969[15]
  i968.defaultEasePeriod = i969[16]
  i968.defaultAutoKill = !!i969[17]
  i968.defaultLoopType = i969[18]
  i968.debugMode = !!i969[19]
  i968.debugStoreTargetId = !!i969[20]
  i968.showPreviewPanel = !!i969[21]
  i968.storeSettingsLocation = i969[22]
  i968.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i969[23], i968.modules)
  i968.createASMDEF = !!i969[24]
  i968.showPlayingTweens = !!i969[25]
  i968.showPausedTweens = !!i969[26]
  return i968
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i970 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i971 = data
  i970.logBehaviour = i971[0]
  i970.nestedTweenFailureBehaviour = i971[1]
  return i970
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i972 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i973 = data
  i972.showPanel = !!i973[0]
  i972.audioEnabled = !!i973[1]
  i972.physicsEnabled = !!i973[2]
  i972.physics2DEnabled = !!i973[3]
  i972.spriteEnabled = !!i973[4]
  i972.uiEnabled = !!i973[5]
  i972.textMeshProEnabled = !!i973[6]
  i972.tk2DEnabled = !!i973[7]
  i972.deAudioEnabled = !!i973[8]
  i972.deUnityExtendedEnabled = !!i973[9]
  i972.epoOutlineEnabled = !!i973[10]
  return i972
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_Settings' )
  var i975 = data
  i974.m_enableWordWrapping = !!i975[0]
  i974.m_enableKerning = !!i975[1]
  i974.m_enableExtraPadding = !!i975[2]
  i974.m_enableTintAllSprites = !!i975[3]
  i974.m_enableParseEscapeCharacters = !!i975[4]
  i974.m_EnableRaycastTarget = !!i975[5]
  i974.m_GetFontFeaturesAtRuntime = !!i975[6]
  i974.m_missingGlyphCharacter = i975[7]
  i974.m_warningsDisabled = !!i975[8]
  request.r(i975[9], i975[10], 0, i974, 'm_defaultFontAsset')
  i974.m_defaultFontAssetPath = i975[11]
  i974.m_defaultFontSize = i975[12]
  i974.m_defaultAutoSizeMinRatio = i975[13]
  i974.m_defaultAutoSizeMaxRatio = i975[14]
  i974.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i975[15], i975[16] )
  i974.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i975[17], i975[18] )
  i974.m_autoSizeTextContainer = !!i975[19]
  i974.m_IsTextObjectScaleStatic = !!i975[20]
  var i977 = i975[21]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 1, i976, '')
  }
  i974.m_fallbackFontAssets = i976
  i974.m_matchMaterialPreset = !!i975[22]
  request.r(i975[23], i975[24], 0, i974, 'm_defaultSpriteAsset')
  i974.m_defaultSpriteAssetPath = i975[25]
  i974.m_enableEmojiSupport = !!i975[26]
  i974.m_MissingCharacterSpriteUnicode = i975[27]
  i974.m_defaultColorGradientPresetsPath = i975[28]
  request.r(i975[29], i975[30], 0, i974, 'm_defaultStyleSheet')
  i974.m_StyleSheetsResourcePath = i975[31]
  request.r(i975[32], i975[33], 0, i974, 'm_leadingCharacters')
  request.r(i975[34], i975[35], 0, i974, 'm_followingCharacters')
  i974.m_UseModernHangulLineBreakingRules = !!i975[36]
  return i974
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i979 = data
  i978.hashCode = i979[0]
  request.r(i979[1], i979[2], 0, i978, 'material')
  i978.materialHashCode = i979[3]
  request.r(i979[4], i979[5], 0, i978, 'spriteSheet')
  var i981 = i979[6]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i981.length; i += 1) {
    i980.add(request.d('TMPro.TMP_Sprite', i981[i + 0]));
  }
  i978.spriteInfoList = i980
  var i983 = i979[7]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 1, i982, '')
  }
  i978.fallbackSpriteAssets = i982
  i978.m_Version = i979[8]
  i978.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i979[9], i978.m_FaceInfo)
  var i985 = i979[10]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i985.length; i += 1) {
    i984.add(request.d('TMPro.TMP_SpriteCharacter', i985[i + 0]));
  }
  i978.m_SpriteCharacterTable = i984
  var i987 = i979[11]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i987.length; i += 1) {
    i986.add(request.d('TMPro.TMP_SpriteGlyph', i987[i + 0]));
  }
  i978.m_SpriteGlyphTable = i986
  return i978
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.TMP_Sprite' )
  var i991 = data
  i990.name = i991[0]
  i990.hashCode = i991[1]
  i990.unicode = i991[2]
  i990.pivot = new pc.Vec2( i991[3], i991[4] )
  request.r(i991[5], i991[6], 0, i990, 'sprite')
  i990.id = i991[7]
  i990.x = i991[8]
  i990.y = i991[9]
  i990.width = i991[10]
  i990.height = i991[11]
  i990.xOffset = i991[12]
  i990.yOffset = i991[13]
  i990.xAdvance = i991[14]
  i990.scale = i991[15]
  return i990
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i997 = data
  i996.m_Name = i997[0]
  i996.m_HashCode = i997[1]
  i996.m_ElementType = i997[2]
  i996.m_Unicode = i997[3]
  i996.m_GlyphIndex = i997[4]
  i996.m_Scale = i997[5]
  return i996
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'sprite')
  i1000.m_Index = i1001[2]
  i1000.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1001[3], i1000.m_Metrics)
  i1000.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1001[4], i1000.m_GlyphRect)
  i1000.m_Scale = i1001[5]
  i1000.m_AtlasIndex = i1001[6]
  i1000.m_ClassDefinitionType = i1001[7]
  return i1000
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_Style', i1005[i + 0]));
  }
  i1002.m_StyleList = i1004
  return i1002
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TMP_Style' )
  var i1009 = data
  i1008.m_Name = i1009[0]
  i1008.m_HashCode = i1009[1]
  i1008.m_OpeningDefinition = i1009[2]
  i1008.m_ClosingDefinition = i1009[3]
  i1008.m_OpeningTagArray = i1009[4]
  i1008.m_ClosingTagArray = i1009[5]
  i1008.m_OpeningTagUnicodeArray = i1009[6]
  i1008.m_ClosingTagUnicodeArray = i1009[7]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1013[i + 0]) );
  }
  i1010.files = i1012
  i1010.componentToPrefabIds = i1011[1]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1017 = data
  i1016.path = i1017[0]
  request.r(i1017[1], i1017[2], 0, i1016, 'unityObject')
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1019 = data
  var i1021 = i1019[0]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1021[i + 0]) );
  }
  i1018.scriptsExecutionOrder = i1020
  var i1023 = i1019[1]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1023[i + 0]) );
  }
  i1018.sortingLayers = i1022
  var i1025 = i1019[2]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1025[i + 0]) );
  }
  i1018.cullingLayers = i1024
  i1018.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1019[3], i1018.timeSettings)
  i1018.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1019[4], i1018.physicsSettings)
  i1018.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1019[5], i1018.physics2DSettings)
  i1018.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1019[6], i1018.qualitySettings)
  i1018.enableRealtimeShadows = !!i1019[7]
  i1018.enableAutoInstancing = !!i1019[8]
  i1018.enableDynamicBatching = !!i1019[9]
  i1018.lightmapEncodingQuality = i1019[10]
  i1018.desiredColorSpace = i1019[11]
  var i1027 = i1019[12]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( i1027[i + 0] );
  }
  i1018.allTags = i1026
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.value = i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1035 = data
  i1034.id = i1035[0]
  i1034.name = i1035[1]
  i1034.value = i1035[2]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1039 = data
  i1038.id = i1039[0]
  i1038.name = i1039[1]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1041 = data
  i1040.fixedDeltaTime = i1041[0]
  i1040.maximumDeltaTime = i1041[1]
  i1040.timeScale = i1041[2]
  i1040.maximumParticleTimestep = i1041[3]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1043 = data
  i1042.gravity = new pc.Vec3( i1043[0], i1043[1], i1043[2] )
  i1042.defaultSolverIterations = i1043[3]
  i1042.bounceThreshold = i1043[4]
  i1042.autoSyncTransforms = !!i1043[5]
  i1042.autoSimulation = !!i1043[6]
  var i1045 = i1043[7]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1045[i + 0]) );
  }
  i1042.collisionMatrix = i1044
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1049 = data
  i1048.enabled = !!i1049[0]
  i1048.layerId = i1049[1]
  i1048.otherLayerId = i1049[2]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'material')
  i1050.gravity = new pc.Vec2( i1051[2], i1051[3] )
  i1050.positionIterations = i1051[4]
  i1050.velocityIterations = i1051[5]
  i1050.velocityThreshold = i1051[6]
  i1050.maxLinearCorrection = i1051[7]
  i1050.maxAngularCorrection = i1051[8]
  i1050.maxTranslationSpeed = i1051[9]
  i1050.maxRotationSpeed = i1051[10]
  i1050.baumgarteScale = i1051[11]
  i1050.baumgarteTOIScale = i1051[12]
  i1050.timeToSleep = i1051[13]
  i1050.linearSleepTolerance = i1051[14]
  i1050.angularSleepTolerance = i1051[15]
  i1050.defaultContactOffset = i1051[16]
  i1050.autoSimulation = !!i1051[17]
  i1050.queriesHitTriggers = !!i1051[18]
  i1050.queriesStartInColliders = !!i1051[19]
  i1050.callbacksOnDisable = !!i1051[20]
  i1050.reuseCollisionCallbacks = !!i1051[21]
  i1050.autoSyncTransforms = !!i1051[22]
  var i1053 = i1051[23]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1053[i + 0]) );
  }
  i1050.collisionMatrix = i1052
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1057 = data
  i1056.enabled = !!i1057[0]
  i1056.layerId = i1057[1]
  i1056.otherLayerId = i1057[2]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1061[i + 0]) );
  }
  i1058.qualityLevels = i1060
  var i1063 = i1059[1]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1058.names = i1062
  i1058.shadows = i1059[2]
  i1058.anisotropicFiltering = i1059[3]
  i1058.antiAliasing = i1059[4]
  i1058.lodBias = i1059[5]
  i1058.shadowCascades = i1059[6]
  i1058.shadowDistance = i1059[7]
  i1058.shadowmaskMode = i1059[8]
  i1058.shadowProjection = i1059[9]
  i1058.shadowResolution = i1059[10]
  i1058.softParticles = !!i1059[11]
  i1058.softVegetation = !!i1059[12]
  i1058.activeColorSpace = i1059[13]
  i1058.desiredColorSpace = i1059[14]
  i1058.masterTextureLimit = i1059[15]
  i1058.maxQueuedFrames = i1059[16]
  i1058.particleRaycastBudget = i1059[17]
  i1058.pixelLightCount = i1059[18]
  i1058.realtimeReflectionProbes = !!i1059[19]
  i1058.shadowCascade2Split = i1059[20]
  i1058.shadowCascade4Split = new pc.Vec3( i1059[21], i1059[22], i1059[23] )
  i1058.streamingMipmapsActive = !!i1059[24]
  i1058.vSyncCount = i1059[25]
  i1058.asyncUploadBufferSize = i1059[26]
  i1058.asyncUploadTimeSlice = i1059[27]
  i1058.billboardsFaceCameraPosition = !!i1059[28]
  i1058.shadowNearPlaneOffset = i1059[29]
  i1058.streamingMipmapsMemoryBudget = i1059[30]
  i1058.maximumLODLevel = i1059[31]
  i1058.streamingMipmapsAddAllCameras = !!i1059[32]
  i1058.streamingMipmapsMaxLevelReduction = i1059[33]
  i1058.streamingMipmapsRenderersPerFrame = i1059[34]
  i1058.resolutionScalingFixedDPIFactor = i1059[35]
  i1058.streamingMipmapsMaxFileIORequests = i1059[36]
  i1058.currentQualityLevel = i1059[37]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1069 = data
  i1068.weight = i1069[0]
  i1068.vertices = i1069[1]
  i1068.normals = i1069[2]
  i1068.tangents = i1069[3]
  return i1068
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1071 = data
  i1070.xPlacement = i1071[0]
  i1070.yPlacement = i1071[1]
  i1070.xAdvance = i1071[2]
  i1070.yAdvance = i1071[3]
  return i1070
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.WheelCollider":{"enabled":0,"center":1,"radius":4,"mass":5,"suspensionDistance":6,"forceAppPointDistance":7,"suspensionSpring":8,"forwardFriction":9,"sidewaysFriction":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[14],"61":[1],"62":[1],"63":[1],"64":[1],"65":[1],"66":[1],"67":[1],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[69],"77":[69],"78":[69],"79":[69],"80":[69],"81":[69],"82":[14],"83":[4],"84":[85],"86":[85],"32":[31],"87":[31],"88":[31],"34":[32],"36":[35,31],"89":[31],"33":[32],"90":[31],"91":[31],"92":[31],"93":[31],"94":[31],"95":[31],"96":[31],"97":[31],"98":[31],"99":[35,31],"100":[31],"101":[31],"102":[31],"103":[31],"42":[35,31],"104":[31],"105":[21],"106":[21],"22":[21],"107":[21],"108":[14],"109":[14],"110":[31],"111":[4,31],"38":[31,35],"112":[31],"113":[35,31],"114":[4],"115":[35,31],"116":[31],"117":[118],"119":[118],"120":[14],"121":[122],"123":[118]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.WheelCollider","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Light","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","SmoothFollowCamera","CameraSequence","UnityEngine.CanvasGroup","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AICarController","CheckpointManager","UnityEngine.GameObject","UnityEngine.CharacterController","PlayerCarController","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.PhysicMaterial","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","UIManager","UnityEngine.UI.Text","UnityEngine.Font","GameManager","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "INDIEZ";

Deserializers.lunaInitializationTime = "04/29/2025 09:21:16";

Deserializers.lunaDaysRunning = "7.2";

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

Deserializers.buildID = "5351e621-f615-421d-a4a2-24bce9e84198";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

