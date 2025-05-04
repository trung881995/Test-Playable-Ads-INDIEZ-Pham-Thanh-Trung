var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2550 = root || request.c( 'UnityEngine.JointSpring' )
  var i2551 = data
  i2550.spring = i2551[0]
  i2550.damper = i2551[1]
  i2550.targetPosition = i2551[2]
  return i2550
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2552 = root || request.c( 'UnityEngine.JointMotor' )
  var i2553 = data
  i2552.m_TargetVelocity = i2553[0]
  i2552.m_Force = i2553[1]
  i2552.m_FreeSpin = i2553[2]
  return i2552
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2554 = root || request.c( 'UnityEngine.JointLimits' )
  var i2555 = data
  i2554.m_Min = i2555[0]
  i2554.m_Max = i2555[1]
  i2554.m_Bounciness = i2555[2]
  i2554.m_BounceMinVelocity = i2555[3]
  i2554.m_ContactDistance = i2555[4]
  i2554.minBounce = i2555[5]
  i2554.maxBounce = i2555[6]
  return i2554
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2556 = root || request.c( 'UnityEngine.JointDrive' )
  var i2557 = data
  i2556.m_PositionSpring = i2557[0]
  i2556.m_PositionDamper = i2557[1]
  i2556.m_MaximumForce = i2557[2]
  i2556.m_UseAcceleration = i2557[3]
  return i2556
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2558 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2559 = data
  i2558.m_Spring = i2559[0]
  i2558.m_Damper = i2559[1]
  return i2558
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2560 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2561 = data
  i2560.m_Limit = i2561[0]
  i2560.m_Bounciness = i2561[1]
  i2560.m_ContactDistance = i2561[2]
  return i2560
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2563 = data
  i2562.m_ExtremumSlip = i2563[0]
  i2562.m_ExtremumValue = i2563[1]
  i2562.m_AsymptoteSlip = i2563[2]
  i2562.m_AsymptoteValue = i2563[3]
  i2562.m_Stiffness = i2563[4]
  return i2562
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2564 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2565 = data
  i2564.m_LowerAngle = i2565[0]
  i2564.m_UpperAngle = i2565[1]
  return i2564
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2566 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2567 = data
  i2566.m_MotorSpeed = i2567[0]
  i2566.m_MaximumMotorTorque = i2567[1]
  return i2566
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2568 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2569 = data
  i2568.m_DampingRatio = i2569[0]
  i2568.m_Frequency = i2569[1]
  i2568.m_Angle = i2569[2]
  return i2568
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2571 = data
  i2570.m_LowerTranslation = i2571[0]
  i2570.m_UpperTranslation = i2571[1]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2573 = data
  i2572.position = new pc.Vec3( i2573[0], i2573[1], i2573[2] )
  i2572.scale = new pc.Vec3( i2573[3], i2573[4], i2573[5] )
  i2572.rotation = new pc.Quat(i2573[6], i2573[7], i2573[8], i2573[9])
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2575 = data
  i2574.mass = i2575[0]
  i2574.drag = i2575[1]
  i2574.angularDrag = i2575[2]
  i2574.useGravity = !!i2575[3]
  i2574.isKinematic = !!i2575[4]
  i2574.constraints = i2575[5]
  i2574.maxAngularVelocity = i2575[6]
  i2574.collisionDetectionMode = i2575[7]
  i2574.interpolation = i2575[8]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2577 = data
  request.r(i2577[0], i2577[1], 0, i2576, 'sharedMesh')
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'additionalVertexStreams')
  i2578.enabled = !!i2579[2]
  request.r(i2579[3], i2579[4], 0, i2578, 'sharedMaterial')
  var i2581 = i2579[5]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 2) {
  request.r(i2581[i + 0], i2581[i + 1], 2, i2580, '')
  }
  i2578.sharedMaterials = i2580
  i2578.receiveShadows = !!i2579[6]
  i2578.shadowCastingMode = i2579[7]
  i2578.sortingLayerID = i2579[8]
  i2578.sortingOrder = i2579[9]
  i2578.lightmapIndex = i2579[10]
  i2578.lightmapSceneIndex = i2579[11]
  i2578.lightmapScaleOffset = new pc.Vec4( i2579[12], i2579[13], i2579[14], i2579[15] )
  i2578.lightProbeUsage = i2579[16]
  i2578.reflectionProbeUsage = i2579[17]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2585 = data
  i2584.center = new pc.Vec3( i2585[0], i2585[1], i2585[2] )
  i2584.size = new pc.Vec3( i2585[3], i2585[4], i2585[5] )
  i2584.enabled = !!i2585[6]
  i2584.isTrigger = !!i2585[7]
  request.r(i2585[8], i2585[9], 0, i2584, 'material')
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2587 = data
  i2586.name = i2587[0]
  i2586.tagId = i2587[1]
  i2586.enabled = !!i2587[2]
  i2586.isStatic = !!i2587[3]
  i2586.layer = i2587[4]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.WheelCollider"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.WheelCollider' )
  var i2589 = data
  i2588.enabled = !!i2589[0]
  i2588.center = new pc.Vec3( i2589[1], i2589[2], i2589[3] )
  i2588.radius = i2589[4]
  i2588.mass = i2589[5]
  i2588.suspensionDistance = i2589[6]
  i2588.forceAppPointDistance = i2589[7]
  i2588.suspensionSpring = request.d('UnityEngine.JointSpring', i2589[8], i2588.suspensionSpring)
  i2588.forwardFriction = request.d('UnityEngine.WheelFrictionCurve', i2589[9], i2588.forwardFriction)
  i2588.sidewaysFriction = request.d('UnityEngine.WheelFrictionCurve', i2589[10], i2588.sidewaysFriction)
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2591 = data
  i2590.name = i2591[0]
  i2590.halfPrecision = !!i2591[1]
  i2590.useUInt32IndexFormat = !!i2591[2]
  i2590.vertexCount = i2591[3]
  i2590.aabb = i2591[4]
  var i2593 = i2591[5]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( !!i2593[i + 0] );
  }
  i2590.streams = i2592
  i2590.vertices = i2591[6]
  var i2595 = i2591[7]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2595[i + 0]) );
  }
  i2590.subMeshes = i2594
  var i2597 = i2591[8]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 16) {
    i2596.push( new pc.Mat4().setData(i2597[i + 0], i2597[i + 1], i2597[i + 2], i2597[i + 3],  i2597[i + 4], i2597[i + 5], i2597[i + 6], i2597[i + 7],  i2597[i + 8], i2597[i + 9], i2597[i + 10], i2597[i + 11],  i2597[i + 12], i2597[i + 13], i2597[i + 14], i2597[i + 15]) );
  }
  i2590.bindposes = i2596
  var i2599 = i2591[9]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2599[i + 0]) );
  }
  i2590.blendShapes = i2598
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2605 = data
  i2604.triangles = i2605[0]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2611 = data
  i2610.name = i2611[0]
  var i2613 = i2611[1]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2613[i + 0]) );
  }
  i2610.frames = i2612
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2614 = root || new pc.UnityMaterial()
  var i2615 = data
  i2614.name = i2615[0]
  request.r(i2615[1], i2615[2], 0, i2614, 'shader')
  i2614.renderQueue = i2615[3]
  i2614.enableInstancing = !!i2615[4]
  var i2617 = i2615[5]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2617[i + 0]) );
  }
  i2614.floatParameters = i2616
  var i2619 = i2615[6]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2619[i + 0]) );
  }
  i2614.colorParameters = i2618
  var i2621 = i2615[7]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2621[i + 0]) );
  }
  i2614.vectorParameters = i2620
  var i2623 = i2615[8]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2623[i + 0]) );
  }
  i2614.textureParameters = i2622
  var i2625 = i2615[9]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2625[i + 0]) );
  }
  i2614.materialFlags = i2624
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2629 = data
  i2628.name = i2629[0]
  i2628.value = i2629[1]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2633 = data
  i2632.name = i2633[0]
  i2632.value = new pc.Color(i2633[1], i2633[2], i2633[3], i2633[4])
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2637 = data
  i2636.name = i2637[0]
  i2636.value = new pc.Vec4( i2637[1], i2637[2], i2637[3], i2637[4] )
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2641 = data
  i2640.name = i2641[0]
  request.r(i2641[1], i2641[2], 0, i2640, 'value')
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2645 = data
  i2644.name = i2645[0]
  i2644.enabled = !!i2645[1]
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2647 = data
  i2646.name = i2647[0]
  i2646.width = i2647[1]
  i2646.height = i2647[2]
  i2646.mipmapCount = i2647[3]
  i2646.anisoLevel = i2647[4]
  i2646.filterMode = i2647[5]
  i2646.hdr = !!i2647[6]
  i2646.format = i2647[7]
  i2646.wrapMode = i2647[8]
  i2646.alphaIsTransparency = !!i2647[9]
  i2646.alphaSource = i2647[10]
  i2646.graphicsFormat = i2647[11]
  i2646.sRGBTexture = !!i2647[12]
  i2646.desiredColorSpace = i2647[13]
  i2646.wrapU = i2647[14]
  i2646.wrapV = i2647[15]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2649 = data
  i2648.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2649[0], i2648.main)
  i2648.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2649[1], i2648.colorBySpeed)
  i2648.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2649[2], i2648.colorOverLifetime)
  i2648.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2649[3], i2648.emission)
  i2648.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2649[4], i2648.rotationBySpeed)
  i2648.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2649[5], i2648.rotationOverLifetime)
  i2648.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2649[6], i2648.shape)
  i2648.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2649[7], i2648.sizeBySpeed)
  i2648.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2649[8], i2648.sizeOverLifetime)
  i2648.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2649[9], i2648.textureSheetAnimation)
  i2648.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2649[10], i2648.velocityOverLifetime)
  i2648.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2649[11], i2648.noise)
  i2648.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2649[12], i2648.inheritVelocity)
  i2648.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2649[13], i2648.forceOverLifetime)
  i2648.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2649[14], i2648.limitVelocityOverLifetime)
  i2648.useAutoRandomSeed = !!i2649[15]
  i2648.randomSeed = i2649[16]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2650 = root || new pc.ParticleSystemMain()
  var i2651 = data
  i2650.duration = i2651[0]
  i2650.loop = !!i2651[1]
  i2650.prewarm = !!i2651[2]
  i2650.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2651[3], i2650.startDelay)
  i2650.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2651[4], i2650.startLifetime)
  i2650.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2651[5], i2650.startSpeed)
  i2650.startSize3D = !!i2651[6]
  i2650.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2651[7], i2650.startSizeX)
  i2650.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2651[8], i2650.startSizeY)
  i2650.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2651[9], i2650.startSizeZ)
  i2650.startRotation3D = !!i2651[10]
  i2650.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2651[11], i2650.startRotationX)
  i2650.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2651[12], i2650.startRotationY)
  i2650.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2651[13], i2650.startRotationZ)
  i2650.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2651[14], i2650.startColor)
  i2650.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2651[15], i2650.gravityModifier)
  i2650.simulationSpace = i2651[16]
  request.r(i2651[17], i2651[18], 0, i2650, 'customSimulationSpace')
  i2650.simulationSpeed = i2651[19]
  i2650.useUnscaledTime = !!i2651[20]
  i2650.scalingMode = i2651[21]
  i2650.playOnAwake = !!i2651[22]
  i2650.maxParticles = i2651[23]
  i2650.emitterVelocityMode = i2651[24]
  i2650.stopAction = i2651[25]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2652 = root || new pc.MinMaxCurve()
  var i2653 = data
  i2652.mode = i2653[0]
  i2652.curveMin = new pc.AnimationCurve( { keys_flow: i2653[1] } )
  i2652.curveMax = new pc.AnimationCurve( { keys_flow: i2653[2] } )
  i2652.curveMultiplier = i2653[3]
  i2652.constantMin = i2653[4]
  i2652.constantMax = i2653[5]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2654 = root || new pc.MinMaxGradient()
  var i2655 = data
  i2654.mode = i2655[0]
  i2654.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2655[1], i2654.gradientMin)
  i2654.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2655[2], i2654.gradientMax)
  i2654.colorMin = new pc.Color(i2655[3], i2655[4], i2655[5], i2655[6])
  i2654.colorMax = new pc.Color(i2655[7], i2655[8], i2655[9], i2655[10])
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2657 = data
  i2656.mode = i2657[0]
  var i2659 = i2657[1]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2659[i + 0]) );
  }
  i2656.colorKeys = i2658
  var i2661 = i2657[2]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2661[i + 0]) );
  }
  i2656.alphaKeys = i2660
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2662 = root || new pc.ParticleSystemColorBySpeed()
  var i2663 = data
  i2662.enabled = !!i2663[0]
  i2662.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2663[1], i2662.color)
  i2662.range = new pc.Vec2( i2663[2], i2663[3] )
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2667 = data
  i2666.color = new pc.Color(i2667[0], i2667[1], i2667[2], i2667[3])
  i2666.time = i2667[4]
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2671 = data
  i2670.alpha = i2671[0]
  i2670.time = i2671[1]
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2672 = root || new pc.ParticleSystemColorOverLifetime()
  var i2673 = data
  i2672.enabled = !!i2673[0]
  i2672.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2673[1], i2672.color)
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2674 = root || new pc.ParticleSystemEmitter()
  var i2675 = data
  i2674.enabled = !!i2675[0]
  i2674.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2675[1], i2674.rateOverTime)
  i2674.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2675[2], i2674.rateOverDistance)
  var i2677 = i2675[3]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2677[i + 0]) );
  }
  i2674.bursts = i2676
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2680 = root || new pc.ParticleSystemBurst()
  var i2681 = data
  i2680.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2681[0], i2680.count)
  i2680.cycleCount = i2681[1]
  i2680.minCount = i2681[2]
  i2680.maxCount = i2681[3]
  i2680.repeatInterval = i2681[4]
  i2680.time = i2681[5]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2682 = root || new pc.ParticleSystemRotationBySpeed()
  var i2683 = data
  i2682.enabled = !!i2683[0]
  i2682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2683[1], i2682.x)
  i2682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2683[2], i2682.y)
  i2682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2683[3], i2682.z)
  i2682.separateAxes = !!i2683[4]
  i2682.range = new pc.Vec2( i2683[5], i2683[6] )
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2684 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2685 = data
  i2684.enabled = !!i2685[0]
  i2684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2685[1], i2684.x)
  i2684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2685[2], i2684.y)
  i2684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2685[3], i2684.z)
  i2684.separateAxes = !!i2685[4]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2686 = root || new pc.ParticleSystemShape()
  var i2687 = data
  i2686.enabled = !!i2687[0]
  i2686.shapeType = i2687[1]
  i2686.randomDirectionAmount = i2687[2]
  i2686.sphericalDirectionAmount = i2687[3]
  i2686.randomPositionAmount = i2687[4]
  i2686.alignToDirection = !!i2687[5]
  i2686.radius = i2687[6]
  i2686.radiusMode = i2687[7]
  i2686.radiusSpread = i2687[8]
  i2686.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2687[9], i2686.radiusSpeed)
  i2686.radiusThickness = i2687[10]
  i2686.angle = i2687[11]
  i2686.length = i2687[12]
  i2686.boxThickness = new pc.Vec3( i2687[13], i2687[14], i2687[15] )
  i2686.meshShapeType = i2687[16]
  request.r(i2687[17], i2687[18], 0, i2686, 'mesh')
  request.r(i2687[19], i2687[20], 0, i2686, 'meshRenderer')
  request.r(i2687[21], i2687[22], 0, i2686, 'skinnedMeshRenderer')
  i2686.useMeshMaterialIndex = !!i2687[23]
  i2686.meshMaterialIndex = i2687[24]
  i2686.useMeshColors = !!i2687[25]
  i2686.normalOffset = i2687[26]
  i2686.arc = i2687[27]
  i2686.arcMode = i2687[28]
  i2686.arcSpread = i2687[29]
  i2686.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2687[30], i2686.arcSpeed)
  i2686.donutRadius = i2687[31]
  i2686.position = new pc.Vec3( i2687[32], i2687[33], i2687[34] )
  i2686.rotation = new pc.Vec3( i2687[35], i2687[36], i2687[37] )
  i2686.scale = new pc.Vec3( i2687[38], i2687[39], i2687[40] )
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2688 = root || new pc.ParticleSystemSizeBySpeed()
  var i2689 = data
  i2688.enabled = !!i2689[0]
  i2688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2689[1], i2688.x)
  i2688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2689[2], i2688.y)
  i2688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2689[3], i2688.z)
  i2688.separateAxes = !!i2689[4]
  i2688.range = new pc.Vec2( i2689[5], i2689[6] )
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2690 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2691 = data
  i2690.enabled = !!i2691[0]
  i2690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2691[1], i2690.x)
  i2690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2691[2], i2690.y)
  i2690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2691[3], i2690.z)
  i2690.separateAxes = !!i2691[4]
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2692 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2693 = data
  i2692.enabled = !!i2693[0]
  i2692.mode = i2693[1]
  i2692.animation = i2693[2]
  i2692.numTilesX = i2693[3]
  i2692.numTilesY = i2693[4]
  i2692.useRandomRow = !!i2693[5]
  i2692.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2693[6], i2692.frameOverTime)
  i2692.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2693[7], i2692.startFrame)
  i2692.cycleCount = i2693[8]
  i2692.rowIndex = i2693[9]
  i2692.flipU = i2693[10]
  i2692.flipV = i2693[11]
  i2692.spriteCount = i2693[12]
  var i2695 = i2693[13]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 2) {
  request.r(i2695[i + 0], i2695[i + 1], 2, i2694, '')
  }
  i2692.sprites = i2694
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2698 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2699 = data
  i2698.enabled = !!i2699[0]
  i2698.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[1], i2698.x)
  i2698.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[2], i2698.y)
  i2698.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[3], i2698.z)
  i2698.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[4], i2698.radial)
  i2698.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[5], i2698.speedModifier)
  i2698.space = i2699[6]
  i2698.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[7], i2698.orbitalX)
  i2698.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[8], i2698.orbitalY)
  i2698.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[9], i2698.orbitalZ)
  i2698.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[10], i2698.orbitalOffsetX)
  i2698.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[11], i2698.orbitalOffsetY)
  i2698.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[12], i2698.orbitalOffsetZ)
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2700 = root || new pc.ParticleSystemNoise()
  var i2701 = data
  i2700.enabled = !!i2701[0]
  i2700.separateAxes = !!i2701[1]
  i2700.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2701[2], i2700.strengthX)
  i2700.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2701[3], i2700.strengthY)
  i2700.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2701[4], i2700.strengthZ)
  i2700.frequency = i2701[5]
  i2700.damping = !!i2701[6]
  i2700.octaveCount = i2701[7]
  i2700.octaveMultiplier = i2701[8]
  i2700.octaveScale = i2701[9]
  i2700.quality = i2701[10]
  i2700.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2701[11], i2700.scrollSpeed)
  i2700.scrollSpeedMultiplier = i2701[12]
  i2700.remapEnabled = !!i2701[13]
  i2700.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2701[14], i2700.remapX)
  i2700.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2701[15], i2700.remapY)
  i2700.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2701[16], i2700.remapZ)
  i2700.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2701[17], i2700.positionAmount)
  i2700.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2701[18], i2700.rotationAmount)
  i2700.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2701[19], i2700.sizeAmount)
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2702 = root || new pc.ParticleSystemInheritVelocity()
  var i2703 = data
  i2702.enabled = !!i2703[0]
  i2702.mode = i2703[1]
  i2702.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2703[2], i2702.curve)
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2704 = root || new pc.ParticleSystemForceOverLifetime()
  var i2705 = data
  i2704.enabled = !!i2705[0]
  i2704.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2705[1], i2704.x)
  i2704.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2705[2], i2704.y)
  i2704.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2705[3], i2704.z)
  i2704.space = i2705[4]
  i2704.randomized = !!i2705[5]
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2706 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2707 = data
  i2706.enabled = !!i2707[0]
  i2706.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2707[1], i2706.limit)
  i2706.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2707[2], i2706.limitX)
  i2706.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2707[3], i2706.limitY)
  i2706.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2707[4], i2706.limitZ)
  i2706.dampen = i2707[5]
  i2706.separateAxes = !!i2707[6]
  i2706.space = i2707[7]
  i2706.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2707[8], i2706.drag)
  i2706.multiplyDragByParticleSize = !!i2707[9]
  i2706.multiplyDragByParticleVelocity = !!i2707[10]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2709 = data
  i2708.enabled = !!i2709[0]
  request.r(i2709[1], i2709[2], 0, i2708, 'sharedMaterial')
  var i2711 = i2709[3]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 2) {
  request.r(i2711[i + 0], i2711[i + 1], 2, i2710, '')
  }
  i2708.sharedMaterials = i2710
  i2708.receiveShadows = !!i2709[4]
  i2708.shadowCastingMode = i2709[5]
  i2708.sortingLayerID = i2709[6]
  i2708.sortingOrder = i2709[7]
  i2708.lightmapIndex = i2709[8]
  i2708.lightmapSceneIndex = i2709[9]
  i2708.lightmapScaleOffset = new pc.Vec4( i2709[10], i2709[11], i2709[12], i2709[13] )
  i2708.lightProbeUsage = i2709[14]
  i2708.reflectionProbeUsage = i2709[15]
  request.r(i2709[16], i2709[17], 0, i2708, 'mesh')
  i2708.meshCount = i2709[18]
  i2708.activeVertexStreamsCount = i2709[19]
  i2708.alignment = i2709[20]
  i2708.renderMode = i2709[21]
  i2708.sortMode = i2709[22]
  i2708.lengthScale = i2709[23]
  i2708.velocityScale = i2709[24]
  i2708.cameraVelocityScale = i2709[25]
  i2708.normalDirection = i2709[26]
  i2708.sortingFudge = i2709[27]
  i2708.minParticleSize = i2709[28]
  i2708.maxParticleSize = i2709[29]
  i2708.pivot = new pc.Vec3( i2709[30], i2709[31], i2709[32] )
  request.r(i2709[33], i2709[34], 0, i2708, 'trailMaterial')
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2713 = data
  i2712.enabled = !!i2713[0]
  i2712.type = i2713[1]
  i2712.color = new pc.Color(i2713[2], i2713[3], i2713[4], i2713[5])
  i2712.cullingMask = i2713[6]
  i2712.intensity = i2713[7]
  i2712.range = i2713[8]
  i2712.spotAngle = i2713[9]
  i2712.shadows = i2713[10]
  i2712.shadowNormalBias = i2713[11]
  i2712.shadowBias = i2713[12]
  i2712.shadowStrength = i2713[13]
  i2712.shadowResolution = i2713[14]
  i2712.lightmapBakeType = i2713[15]
  i2712.renderMode = i2713[16]
  request.r(i2713[17], i2713[18], 0, i2712, 'cookie')
  i2712.cookieSize = i2713[19]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2715 = data
  i2714.enabled = !!i2715[0]
  i2714.isTrigger = !!i2715[1]
  request.r(i2715[2], i2715[3], 0, i2714, 'material')
  request.r(i2715[4], i2715[5], 0, i2714, 'sharedMesh')
  i2714.convex = !!i2715[6]
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2717 = data
  i2716.name = i2717[0]
  i2716.atlasId = i2717[1]
  i2716.mipmapCount = i2717[2]
  i2716.hdr = !!i2717[3]
  i2716.size = i2717[4]
  i2716.anisoLevel = i2717[5]
  i2716.filterMode = i2717[6]
  var i2719 = i2717[7]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 4) {
    i2718.push( UnityEngine.Rect.MinMaxRect(i2719[i + 0], i2719[i + 1], i2719[i + 2], i2719[i + 3]) );
  }
  i2716.rects = i2718
  i2716.wrapU = i2717[8]
  i2716.wrapV = i2717[9]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2723 = data
  i2722.name = i2723[0]
  i2722.index = i2723[1]
  i2722.startup = !!i2723[2]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2725 = data
  i2724.enabled = !!i2725[0]
  i2724.aspect = i2725[1]
  i2724.orthographic = !!i2725[2]
  i2724.orthographicSize = i2725[3]
  i2724.backgroundColor = new pc.Color(i2725[4], i2725[5], i2725[6], i2725[7])
  i2724.nearClipPlane = i2725[8]
  i2724.farClipPlane = i2725[9]
  i2724.fieldOfView = i2725[10]
  i2724.depth = i2725[11]
  i2724.clearFlags = i2725[12]
  i2724.cullingMask = i2725[13]
  i2724.rect = i2725[14]
  request.r(i2725[15], i2725[16], 0, i2724, 'targetTexture')
  i2724.usePhysicalProperties = !!i2725[17]
  i2724.focalLength = i2725[18]
  i2724.sensorSize = new pc.Vec2( i2725[19], i2725[20] )
  i2724.lensShift = new pc.Vec2( i2725[21], i2725[22] )
  i2724.gateFit = i2725[23]
  i2724.commandBufferCount = i2725[24]
  i2724.cameraType = i2725[25]
  return i2724
}

Deserializers["SmoothFollowCamera"] = function (request, data, root) {
  var i2726 = root || request.c( 'SmoothFollowCamera' )
  var i2727 = data
  request.r(i2727[0], i2727[1], 0, i2726, 'target')
  i2726.offset = new pc.Vec3( i2727[2], i2727[3], i2727[4] )
  i2726.followSpeed = i2727[5]
  i2726.rotationSpeed = i2727[6]
  return i2726
}

Deserializers["CameraSequence"] = function (request, data, root) {
  var i2728 = root || request.c( 'CameraSequence' )
  var i2729 = data
  request.r(i2729[0], i2729[1], 0, i2728, 'pointA')
  request.r(i2729[2], i2729[3], 0, i2728, 'pointB')
  request.r(i2729[4], i2729[5], 0, i2728, 'pointC')
  request.r(i2729[6], i2729[7], 0, i2728, 'smoothFollowCamera')
  i2728.rotateDuration = i2729[8]
  i2728.moveDuration = i2729[9]
  i2728.rotationSpeed = i2729[10]
  request.r(i2729[11], i2729[12], 0, i2728, 'flashEffect')
  return i2728
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2730 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2731 = data
  request.r(i2731[0], i2731[1], 0, i2730, 'm_FirstSelected')
  i2730.m_sendNavigationEvents = !!i2731[2]
  i2730.m_DragThreshold = i2731[3]
  return i2730
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2732 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2733 = data
  i2732.m_HorizontalAxis = i2733[0]
  i2732.m_VerticalAxis = i2733[1]
  i2732.m_SubmitButton = i2733[2]
  i2732.m_CancelButton = i2733[3]
  i2732.m_InputActionsPerSecond = i2733[4]
  i2732.m_RepeatDelay = i2733[5]
  i2732.m_ForceModuleActive = !!i2733[6]
  i2732.m_SendPointerHoverToParent = !!i2733[7]
  return i2732
}

Deserializers["AICarController"] = function (request, data, root) {
  var i2734 = root || request.c( 'AICarController' )
  var i2735 = data
  i2734.moveSpeed = i2735[0]
  i2734.maxSpeed = i2735[1]
  i2734.smoothTime = i2735[2]
  i2734.turnSpeed = i2735[3]
  i2734.checkpointRadius = i2735[4]
  i2734.slowTurnThreshold = i2735[5]
  i2734.driftIntensity = i2735[6]
  i2734.obstacleDetectionRange = i2735[7]
  i2734.avoidanceStrength = i2735[8]
  i2734.obstacleLayers = UnityEngine.LayerMask.FromIntegerValue( i2735[9] )
  request.r(i2735[10], i2735[11], 0, i2734, 'checkpointManager')
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i2737 = data
  i2736.enabled = !!i2737[0]
  i2736.center = new pc.Vec3( i2737[1], i2737[2], i2737[3] )
  i2736.radius = i2737[4]
  i2736.height = i2737[5]
  i2736.minMoveDistance = i2737[6]
  i2736.skinWidth = i2737[7]
  i2736.enableOverlapRecovery = !!i2737[8]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2739 = data
  i2738.enabled = !!i2739[0]
  i2738.isTrigger = !!i2739[1]
  request.r(i2739[2], i2739[3], 0, i2738, 'material')
  i2738.center = new pc.Vec3( i2739[4], i2739[5], i2739[6] )
  i2738.radius = i2739[7]
  return i2738
}

Deserializers["PlayerCarController"] = function (request, data, root) {
  var i2740 = root || request.c( 'PlayerCarController' )
  var i2741 = data
  i2740.moveSpeed = i2741[0]
  i2740.smoothTime = i2741[1]
  i2740.maxSpeed = i2741[2]
  i2740.turnSpeed = i2741[3]
  i2740.maxTurnAngle = i2741[4]
  i2740.checkpointRadius = i2741[5]
  i2740.slowTurnThreshold = i2741[6]
  i2740.driftIntensity = i2741[7]
  i2740.groundCheckDistance = i2741[8]
  i2740.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2741[9] )
  request.r(i2741[10], i2741[11], 0, i2740, 'checkpointManager')
  request.r(i2741[12], i2741[13], 0, i2740, 'Arrow')
  return i2740
}

Deserializers["CheckpointManager"] = function (request, data, root) {
  var i2742 = root || request.c( 'CheckpointManager' )
  var i2743 = data
  var i2745 = i2743[0]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 2) {
  request.r(i2745[i + 0], i2745[i + 1], 2, i2744, '')
  }
  i2742.checkpoints = i2744
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2749 = data
  i2748.pivot = new pc.Vec2( i2749[0], i2749[1] )
  i2748.anchorMin = new pc.Vec2( i2749[2], i2749[3] )
  i2748.anchorMax = new pc.Vec2( i2749[4], i2749[5] )
  i2748.sizeDelta = new pc.Vec2( i2749[6], i2749[7] )
  i2748.anchoredPosition3D = new pc.Vec3( i2749[8], i2749[9], i2749[10] )
  i2748.rotation = new pc.Quat(i2749[11], i2749[12], i2749[13], i2749[14])
  i2748.scale = new pc.Vec3( i2749[15], i2749[16], i2749[17] )
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2751 = data
  i2750.enabled = !!i2751[0]
  i2750.planeDistance = i2751[1]
  i2750.referencePixelsPerUnit = i2751[2]
  i2750.isFallbackOverlay = !!i2751[3]
  i2750.renderMode = i2751[4]
  i2750.renderOrder = i2751[5]
  i2750.sortingLayerName = i2751[6]
  i2750.sortingOrder = i2751[7]
  i2750.scaleFactor = i2751[8]
  request.r(i2751[9], i2751[10], 0, i2750, 'worldCamera')
  i2750.overrideSorting = !!i2751[11]
  i2750.pixelPerfect = !!i2751[12]
  i2750.targetDisplay = i2751[13]
  i2750.overridePixelPerfect = !!i2751[14]
  return i2750
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2752 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2753 = data
  i2752.m_UiScaleMode = i2753[0]
  i2752.m_ReferencePixelsPerUnit = i2753[1]
  i2752.m_ScaleFactor = i2753[2]
  i2752.m_ReferenceResolution = new pc.Vec2( i2753[3], i2753[4] )
  i2752.m_ScreenMatchMode = i2753[5]
  i2752.m_MatchWidthOrHeight = i2753[6]
  i2752.m_PhysicalUnit = i2753[7]
  i2752.m_FallbackScreenDPI = i2753[8]
  i2752.m_DefaultSpriteDPI = i2753[9]
  i2752.m_DynamicPixelsPerUnit = i2753[10]
  i2752.m_PresetInfoIsWorld = !!i2753[11]
  return i2752
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2754 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2755 = data
  i2754.m_IgnoreReversedGraphics = !!i2755[0]
  i2754.m_BlockingObjects = i2755[1]
  i2754.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2755[2] )
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2757 = data
  i2756.cullTransparentMesh = !!i2757[0]
  return i2756
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2758 = root || request.c( 'UnityEngine.UI.Image' )
  var i2759 = data
  request.r(i2759[0], i2759[1], 0, i2758, 'm_Sprite')
  i2758.m_Type = i2759[2]
  i2758.m_PreserveAspect = !!i2759[3]
  i2758.m_FillCenter = !!i2759[4]
  i2758.m_FillMethod = i2759[5]
  i2758.m_FillAmount = i2759[6]
  i2758.m_FillClockwise = !!i2759[7]
  i2758.m_FillOrigin = i2759[8]
  i2758.m_UseSpriteMesh = !!i2759[9]
  i2758.m_PixelsPerUnitMultiplier = i2759[10]
  request.r(i2759[11], i2759[12], 0, i2758, 'm_Material')
  i2758.m_Maskable = !!i2759[13]
  i2758.m_Color = new pc.Color(i2759[14], i2759[15], i2759[16], i2759[17])
  i2758.m_RaycastTarget = !!i2759[18]
  i2758.m_RaycastPadding = new pc.Vec4( i2759[19], i2759[20], i2759[21], i2759[22] )
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2761 = data
  i2760.m_Alpha = i2761[0]
  i2760.m_Interactable = !!i2761[1]
  i2760.m_BlocksRaycasts = !!i2761[2]
  i2760.m_IgnoreParentGroups = !!i2761[3]
  i2760.enabled = !!i2761[4]
  return i2760
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2762 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2763 = data
  i2762.m_hasFontAssetChanged = !!i2763[0]
  request.r(i2763[1], i2763[2], 0, i2762, 'm_baseMaterial')
  i2762.m_maskOffset = new pc.Vec4( i2763[3], i2763[4], i2763[5], i2763[6] )
  i2762.m_text = i2763[7]
  i2762.m_isRightToLeft = !!i2763[8]
  request.r(i2763[9], i2763[10], 0, i2762, 'm_fontAsset')
  request.r(i2763[11], i2763[12], 0, i2762, 'm_sharedMaterial')
  var i2765 = i2763[13]
  var i2764 = []
  for(var i = 0; i < i2765.length; i += 2) {
  request.r(i2765[i + 0], i2765[i + 1], 2, i2764, '')
  }
  i2762.m_fontSharedMaterials = i2764
  request.r(i2763[14], i2763[15], 0, i2762, 'm_fontMaterial')
  var i2767 = i2763[16]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 2) {
  request.r(i2767[i + 0], i2767[i + 1], 2, i2766, '')
  }
  i2762.m_fontMaterials = i2766
  i2762.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2763[17], i2763[18], i2763[19], i2763[20])
  i2762.m_fontColor = new pc.Color(i2763[21], i2763[22], i2763[23], i2763[24])
  i2762.m_enableVertexGradient = !!i2763[25]
  i2762.m_colorMode = i2763[26]
  i2762.m_fontColorGradient = request.d('TMPro.VertexGradient', i2763[27], i2762.m_fontColorGradient)
  request.r(i2763[28], i2763[29], 0, i2762, 'm_fontColorGradientPreset')
  request.r(i2763[30], i2763[31], 0, i2762, 'm_spriteAsset')
  i2762.m_tintAllSprites = !!i2763[32]
  request.r(i2763[33], i2763[34], 0, i2762, 'm_StyleSheet')
  i2762.m_TextStyleHashCode = i2763[35]
  i2762.m_overrideHtmlColors = !!i2763[36]
  i2762.m_faceColor = UnityEngine.Color32.ConstructColor(i2763[37], i2763[38], i2763[39], i2763[40])
  i2762.m_fontSize = i2763[41]
  i2762.m_fontSizeBase = i2763[42]
  i2762.m_fontWeight = i2763[43]
  i2762.m_enableAutoSizing = !!i2763[44]
  i2762.m_fontSizeMin = i2763[45]
  i2762.m_fontSizeMax = i2763[46]
  i2762.m_fontStyle = i2763[47]
  i2762.m_HorizontalAlignment = i2763[48]
  i2762.m_VerticalAlignment = i2763[49]
  i2762.m_textAlignment = i2763[50]
  i2762.m_characterSpacing = i2763[51]
  i2762.m_wordSpacing = i2763[52]
  i2762.m_lineSpacing = i2763[53]
  i2762.m_lineSpacingMax = i2763[54]
  i2762.m_paragraphSpacing = i2763[55]
  i2762.m_charWidthMaxAdj = i2763[56]
  i2762.m_enableWordWrapping = !!i2763[57]
  i2762.m_wordWrappingRatios = i2763[58]
  i2762.m_overflowMode = i2763[59]
  request.r(i2763[60], i2763[61], 0, i2762, 'm_linkedTextComponent')
  request.r(i2763[62], i2763[63], 0, i2762, 'parentLinkedComponent')
  i2762.m_enableKerning = !!i2763[64]
  i2762.m_enableExtraPadding = !!i2763[65]
  i2762.checkPaddingRequired = !!i2763[66]
  i2762.m_isRichText = !!i2763[67]
  i2762.m_parseCtrlCharacters = !!i2763[68]
  i2762.m_isOrthographic = !!i2763[69]
  i2762.m_isCullingEnabled = !!i2763[70]
  i2762.m_horizontalMapping = i2763[71]
  i2762.m_verticalMapping = i2763[72]
  i2762.m_uvLineOffset = i2763[73]
  i2762.m_geometrySortingOrder = i2763[74]
  i2762.m_IsTextObjectScaleStatic = !!i2763[75]
  i2762.m_VertexBufferAutoSizeReduction = !!i2763[76]
  i2762.m_useMaxVisibleDescender = !!i2763[77]
  i2762.m_pageToDisplay = i2763[78]
  i2762.m_margin = new pc.Vec4( i2763[79], i2763[80], i2763[81], i2763[82] )
  i2762.m_isUsingLegacyAnimationComponent = !!i2763[83]
  i2762.m_isVolumetricText = !!i2763[84]
  request.r(i2763[85], i2763[86], 0, i2762, 'm_Material')
  i2762.m_Maskable = !!i2763[87]
  i2762.m_Color = new pc.Color(i2763[88], i2763[89], i2763[90], i2763[91])
  i2762.m_RaycastTarget = !!i2763[92]
  i2762.m_RaycastPadding = new pc.Vec4( i2763[93], i2763[94], i2763[95], i2763[96] )
  return i2762
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2768 = root || request.c( 'TMPro.VertexGradient' )
  var i2769 = data
  i2768.topLeft = new pc.Color(i2769[0], i2769[1], i2769[2], i2769[3])
  i2768.topRight = new pc.Color(i2769[4], i2769[5], i2769[6], i2769[7])
  i2768.bottomLeft = new pc.Color(i2769[8], i2769[9], i2769[10], i2769[11])
  i2768.bottomRight = new pc.Color(i2769[12], i2769[13], i2769[14], i2769[15])
  return i2768
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2770 = root || request.c( 'UnityEngine.UI.Button' )
  var i2771 = data
  i2770.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2771[0], i2770.m_OnClick)
  i2770.m_Navigation = request.d('UnityEngine.UI.Navigation', i2771[1], i2770.m_Navigation)
  i2770.m_Transition = i2771[2]
  i2770.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2771[3], i2770.m_Colors)
  i2770.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2771[4], i2770.m_SpriteState)
  i2770.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2771[5], i2770.m_AnimationTriggers)
  i2770.m_Interactable = !!i2771[6]
  request.r(i2771[7], i2771[8], 0, i2770, 'm_TargetGraphic')
  return i2770
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2772 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2773 = data
  i2772.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2773[0], i2772.m_PersistentCalls)
  return i2772
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2774 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2775 = data
  var i2777 = i2775[0]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.add(request.d('UnityEngine.Events.PersistentCall', i2777[i + 0]));
  }
  i2774.m_Calls = i2776
  return i2774
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2780 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2781 = data
  request.r(i2781[0], i2781[1], 0, i2780, 'm_Target')
  i2780.m_TargetAssemblyTypeName = i2781[2]
  i2780.m_MethodName = i2781[3]
  i2780.m_Mode = i2781[4]
  i2780.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2781[5], i2780.m_Arguments)
  i2780.m_CallState = i2781[6]
  return i2780
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2782 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2783 = data
  i2782.m_Mode = i2783[0]
  i2782.m_WrapAround = !!i2783[1]
  request.r(i2783[2], i2783[3], 0, i2782, 'm_SelectOnUp')
  request.r(i2783[4], i2783[5], 0, i2782, 'm_SelectOnDown')
  request.r(i2783[6], i2783[7], 0, i2782, 'm_SelectOnLeft')
  request.r(i2783[8], i2783[9], 0, i2782, 'm_SelectOnRight')
  return i2782
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2784 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2785 = data
  i2784.m_NormalColor = new pc.Color(i2785[0], i2785[1], i2785[2], i2785[3])
  i2784.m_HighlightedColor = new pc.Color(i2785[4], i2785[5], i2785[6], i2785[7])
  i2784.m_PressedColor = new pc.Color(i2785[8], i2785[9], i2785[10], i2785[11])
  i2784.m_SelectedColor = new pc.Color(i2785[12], i2785[13], i2785[14], i2785[15])
  i2784.m_DisabledColor = new pc.Color(i2785[16], i2785[17], i2785[18], i2785[19])
  i2784.m_ColorMultiplier = i2785[20]
  i2784.m_FadeDuration = i2785[21]
  return i2784
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2786 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2787 = data
  request.r(i2787[0], i2787[1], 0, i2786, 'm_HighlightedSprite')
  request.r(i2787[2], i2787[3], 0, i2786, 'm_PressedSprite')
  request.r(i2787[4], i2787[5], 0, i2786, 'm_SelectedSprite')
  request.r(i2787[6], i2787[7], 0, i2786, 'm_DisabledSprite')
  return i2786
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2788 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2789 = data
  i2788.m_NormalTrigger = i2789[0]
  i2788.m_HighlightedTrigger = i2789[1]
  i2788.m_PressedTrigger = i2789[2]
  i2788.m_SelectedTrigger = i2789[3]
  i2788.m_DisabledTrigger = i2789[4]
  return i2788
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2790 = root || request.c( 'UnityEngine.UI.Text' )
  var i2791 = data
  i2790.m_FontData = request.d('UnityEngine.UI.FontData', i2791[0], i2790.m_FontData)
  i2790.m_Text = i2791[1]
  request.r(i2791[2], i2791[3], 0, i2790, 'm_Material')
  i2790.m_Maskable = !!i2791[4]
  i2790.m_Color = new pc.Color(i2791[5], i2791[6], i2791[7], i2791[8])
  i2790.m_RaycastTarget = !!i2791[9]
  i2790.m_RaycastPadding = new pc.Vec4( i2791[10], i2791[11], i2791[12], i2791[13] )
  return i2790
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2792 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2793 = data
  request.r(i2793[0], i2793[1], 0, i2792, 'm_Font')
  i2792.m_FontSize = i2793[2]
  i2792.m_FontStyle = i2793[3]
  i2792.m_BestFit = !!i2793[4]
  i2792.m_MinSize = i2793[5]
  i2792.m_MaxSize = i2793[6]
  i2792.m_Alignment = i2793[7]
  i2792.m_AlignByGeometry = !!i2793[8]
  i2792.m_RichText = !!i2793[9]
  i2792.m_HorizontalOverflow = i2793[10]
  i2792.m_VerticalOverflow = i2793[11]
  i2792.m_LineSpacing = i2793[12]
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2795 = data
  i2794.ambientIntensity = i2795[0]
  i2794.reflectionIntensity = i2795[1]
  i2794.ambientMode = i2795[2]
  i2794.ambientLight = new pc.Color(i2795[3], i2795[4], i2795[5], i2795[6])
  i2794.ambientSkyColor = new pc.Color(i2795[7], i2795[8], i2795[9], i2795[10])
  i2794.ambientGroundColor = new pc.Color(i2795[11], i2795[12], i2795[13], i2795[14])
  i2794.ambientEquatorColor = new pc.Color(i2795[15], i2795[16], i2795[17], i2795[18])
  i2794.fogColor = new pc.Color(i2795[19], i2795[20], i2795[21], i2795[22])
  i2794.fogEndDistance = i2795[23]
  i2794.fogStartDistance = i2795[24]
  i2794.fogDensity = i2795[25]
  i2794.fog = !!i2795[26]
  request.r(i2795[27], i2795[28], 0, i2794, 'skybox')
  i2794.fogMode = i2795[29]
  var i2797 = i2795[30]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2797[i + 0]) );
  }
  i2794.lightmaps = i2796
  i2794.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2795[31], i2794.lightProbes)
  i2794.lightmapsMode = i2795[32]
  i2794.mixedBakeMode = i2795[33]
  i2794.environmentLightingMode = i2795[34]
  i2794.ambientProbe = new pc.SphericalHarmonicsL2(i2795[35])
  i2794.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2795[36])
  i2794.useReferenceAmbientProbe = !!i2795[37]
  request.r(i2795[38], i2795[39], 0, i2794, 'customReflection')
  request.r(i2795[40], i2795[41], 0, i2794, 'defaultReflection')
  i2794.defaultReflectionMode = i2795[42]
  i2794.defaultReflectionResolution = i2795[43]
  i2794.sunLightObjectId = i2795[44]
  i2794.pixelLightCount = i2795[45]
  i2794.defaultReflectionHDR = !!i2795[46]
  i2794.hasLightDataAsset = !!i2795[47]
  i2794.hasManualGenerate = !!i2795[48]
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2801 = data
  request.r(i2801[0], i2801[1], 0, i2800, 'lightmapColor')
  request.r(i2801[2], i2801[3], 0, i2800, 'lightmapDirection')
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2802 = root || new UnityEngine.LightProbes()
  var i2803 = data
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i2811 = data
  i2810.name = i2811[0]
  i2810.bounciness = i2811[1]
  i2810.dynamicFriction = i2811[2]
  i2810.staticFriction = i2811[3]
  i2810.frictionCombine = i2811[4]
  i2810.bounceCombine = i2811[5]
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2813 = data
  var i2815 = i2813[0]
  var i2814 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2815[i + 0]));
  }
  i2812.ShaderCompilationErrors = i2814
  i2812.name = i2813[1]
  i2812.guid = i2813[2]
  var i2817 = i2813[3]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( i2817[i + 0] );
  }
  i2812.shaderDefinedKeywords = i2816
  var i2819 = i2813[4]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2819[i + 0]) );
  }
  i2812.passes = i2818
  var i2821 = i2813[5]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2821[i + 0]) );
  }
  i2812.usePasses = i2820
  var i2823 = i2813[6]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2823[i + 0]) );
  }
  i2812.defaultParameterValues = i2822
  request.r(i2813[7], i2813[8], 0, i2812, 'unityFallbackShader')
  i2812.readDepth = !!i2813[9]
  i2812.isCreatedByShaderGraph = !!i2813[10]
  i2812.compiled = !!i2813[11]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2827 = data
  i2826.shaderName = i2827[0]
  i2826.errorMessage = i2827[1]
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2832 = root || new pc.UnityShaderPass()
  var i2833 = data
  i2832.id = i2833[0]
  i2832.subShaderIndex = i2833[1]
  i2832.name = i2833[2]
  i2832.passType = i2833[3]
  i2832.grabPassTextureName = i2833[4]
  i2832.usePass = !!i2833[5]
  i2832.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[6], i2832.zTest)
  i2832.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[7], i2832.zWrite)
  i2832.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[8], i2832.culling)
  i2832.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2833[9], i2832.blending)
  i2832.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2833[10], i2832.alphaBlending)
  i2832.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[11], i2832.colorWriteMask)
  i2832.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[12], i2832.offsetUnits)
  i2832.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[13], i2832.offsetFactor)
  i2832.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[14], i2832.stencilRef)
  i2832.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[15], i2832.stencilReadMask)
  i2832.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[16], i2832.stencilWriteMask)
  i2832.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2833[17], i2832.stencilOp)
  i2832.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2833[18], i2832.stencilOpFront)
  i2832.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2833[19], i2832.stencilOpBack)
  var i2835 = i2833[20]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2835[i + 0]) );
  }
  i2832.tags = i2834
  var i2837 = i2833[21]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.push( i2837[i + 0] );
  }
  i2832.passDefinedKeywords = i2836
  var i2839 = i2833[22]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2839[i + 0]) );
  }
  i2832.passDefinedKeywordGroups = i2838
  var i2841 = i2833[23]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2841[i + 0]) );
  }
  i2832.variants = i2840
  var i2843 = i2833[24]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2843[i + 0]) );
  }
  i2832.excludedVariants = i2842
  i2832.hasDepthReader = !!i2833[25]
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2845 = data
  i2844.val = i2845[0]
  i2844.name = i2845[1]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2847 = data
  i2846.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2847[0], i2846.src)
  i2846.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2847[1], i2846.dst)
  i2846.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2847[2], i2846.op)
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2849 = data
  i2848.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2849[0], i2848.pass)
  i2848.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2849[1], i2848.fail)
  i2848.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2849[2], i2848.zFail)
  i2848.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2849[3], i2848.comp)
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2853 = data
  i2852.name = i2853[0]
  i2852.value = i2853[1]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2857 = data
  var i2859 = i2857[0]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( i2859[i + 0] );
  }
  i2856.keywords = i2858
  i2856.hasDiscard = !!i2857[1]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2863 = data
  i2862.passId = i2863[0]
  i2862.subShaderIndex = i2863[1]
  var i2865 = i2863[2]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( i2865[i + 0] );
  }
  i2862.keywords = i2864
  i2862.vertexProgram = i2863[3]
  i2862.fragmentProgram = i2863[4]
  i2862.exportedForWebGl2 = !!i2863[5]
  i2862.readDepth = !!i2863[6]
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2869 = data
  request.r(i2869[0], i2869[1], 0, i2868, 'shader')
  i2868.pass = i2869[2]
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2873 = data
  i2872.name = i2873[0]
  i2872.type = i2873[1]
  i2872.value = new pc.Vec4( i2873[2], i2873[3], i2873[4], i2873[5] )
  i2872.textureValue = i2873[6]
  i2872.shaderPropertyFlag = i2873[7]
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2875 = data
  i2874.name = i2875[0]
  request.r(i2875[1], i2875[2], 0, i2874, 'texture')
  i2874.aabb = i2875[3]
  i2874.vertices = i2875[4]
  i2874.triangles = i2875[5]
  i2874.textureRect = UnityEngine.Rect.MinMaxRect(i2875[6], i2875[7], i2875[8], i2875[9])
  i2874.packedRect = UnityEngine.Rect.MinMaxRect(i2875[10], i2875[11], i2875[12], i2875[13])
  i2874.border = new pc.Vec4( i2875[14], i2875[15], i2875[16], i2875[17] )
  i2874.transparency = i2875[18]
  i2874.bounds = i2875[19]
  i2874.pixelsPerUnit = i2875[20]
  i2874.textureWidth = i2875[21]
  i2874.textureHeight = i2875[22]
  i2874.nativeSize = new pc.Vec2( i2875[23], i2875[24] )
  i2874.pivot = new pc.Vec2( i2875[25], i2875[26] )
  i2874.textureRectOffset = new pc.Vec2( i2875[27], i2875[28] )
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2877 = data
  i2876.name = i2877[0]
  i2876.ascent = i2877[1]
  i2876.originalLineHeight = i2877[2]
  i2876.fontSize = i2877[3]
  var i2879 = i2877[4]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2879[i + 0]) );
  }
  i2876.characterInfo = i2878
  request.r(i2877[5], i2877[6], 0, i2876, 'texture')
  i2876.originalFontSize = i2877[7]
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2883 = data
  i2882.index = i2883[0]
  i2882.advance = i2883[1]
  i2882.bearing = i2883[2]
  i2882.glyphWidth = i2883[3]
  i2882.glyphHeight = i2883[4]
  i2882.minX = i2883[5]
  i2882.maxX = i2883[6]
  i2882.minY = i2883[7]
  i2882.maxY = i2883[8]
  i2882.uvBottomLeftX = i2883[9]
  i2882.uvBottomLeftY = i2883[10]
  i2882.uvBottomRightX = i2883[11]
  i2882.uvBottomRightY = i2883[12]
  i2882.uvTopLeftX = i2883[13]
  i2882.uvTopLeftY = i2883[14]
  i2882.uvTopRightX = i2883[15]
  i2882.uvTopRightY = i2883[16]
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2885 = data
  i2884.name = i2885[0]
  i2884.bytes64 = i2885[1]
  i2884.data = i2885[2]
  return i2884
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2886 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2887 = data
  i2886.hashCode = i2887[0]
  request.r(i2887[1], i2887[2], 0, i2886, 'material')
  i2886.materialHashCode = i2887[3]
  request.r(i2887[4], i2887[5], 0, i2886, 'atlas')
  i2886.normalStyle = i2887[6]
  i2886.normalSpacingOffset = i2887[7]
  i2886.boldStyle = i2887[8]
  i2886.boldSpacing = i2887[9]
  i2886.italicStyle = i2887[10]
  i2886.tabSize = i2887[11]
  i2886.m_Version = i2887[12]
  i2886.m_SourceFontFileGUID = i2887[13]
  request.r(i2887[14], i2887[15], 0, i2886, 'm_SourceFontFile_EditorRef')
  request.r(i2887[16], i2887[17], 0, i2886, 'm_SourceFontFile')
  i2886.m_AtlasPopulationMode = i2887[18]
  i2886.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2887[19], i2886.m_FaceInfo)
  var i2889 = i2887[20]
  var i2888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.add(request.d('UnityEngine.TextCore.Glyph', i2889[i + 0]));
  }
  i2886.m_GlyphTable = i2888
  var i2891 = i2887[21]
  var i2890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.add(request.d('TMPro.TMP_Character', i2891[i + 0]));
  }
  i2886.m_CharacterTable = i2890
  var i2893 = i2887[22]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 2) {
  request.r(i2893[i + 0], i2893[i + 1], 2, i2892, '')
  }
  i2886.m_AtlasTextures = i2892
  i2886.m_AtlasTextureIndex = i2887[23]
  i2886.m_IsMultiAtlasTexturesEnabled = !!i2887[24]
  i2886.m_ClearDynamicDataOnBuild = !!i2887[25]
  var i2895 = i2887[26]
  var i2894 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.add(request.d('UnityEngine.TextCore.GlyphRect', i2895[i + 0]));
  }
  i2886.m_UsedGlyphRects = i2894
  var i2897 = i2887[27]
  var i2896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.add(request.d('UnityEngine.TextCore.GlyphRect', i2897[i + 0]));
  }
  i2886.m_FreeGlyphRects = i2896
  i2886.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2887[28], i2886.m_fontInfo)
  i2886.m_AtlasWidth = i2887[29]
  i2886.m_AtlasHeight = i2887[30]
  i2886.m_AtlasPadding = i2887[31]
  i2886.m_AtlasRenderMode = i2887[32]
  var i2899 = i2887[33]
  var i2898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.add(request.d('TMPro.TMP_Glyph', i2899[i + 0]));
  }
  i2886.m_glyphInfoList = i2898
  i2886.m_KerningTable = request.d('TMPro.KerningTable', i2887[34], i2886.m_KerningTable)
  i2886.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2887[35], i2886.m_FontFeatureTable)
  var i2901 = i2887[36]
  var i2900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2901.length; i += 2) {
  request.r(i2901[i + 0], i2901[i + 1], 1, i2900, '')
  }
  i2886.fallbackFontAssets = i2900
  var i2903 = i2887[37]
  var i2902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2903.length; i += 2) {
  request.r(i2903[i + 0], i2903[i + 1], 1, i2902, '')
  }
  i2886.m_FallbackFontAssetTable = i2902
  i2886.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2887[38], i2886.m_CreationSettings)
  var i2905 = i2887[39]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( request.d('TMPro.TMP_FontWeightPair', i2905[i + 0]) );
  }
  i2886.m_FontWeightTable = i2904
  var i2907 = i2887[40]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( request.d('TMPro.TMP_FontWeightPair', i2907[i + 0]) );
  }
  i2886.fontWeights = i2906
  return i2886
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2908 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2909 = data
  i2908.m_FaceIndex = i2909[0]
  i2908.m_FamilyName = i2909[1]
  i2908.m_StyleName = i2909[2]
  i2908.m_PointSize = i2909[3]
  i2908.m_Scale = i2909[4]
  i2908.m_UnitsPerEM = i2909[5]
  i2908.m_LineHeight = i2909[6]
  i2908.m_AscentLine = i2909[7]
  i2908.m_CapLine = i2909[8]
  i2908.m_MeanLine = i2909[9]
  i2908.m_Baseline = i2909[10]
  i2908.m_DescentLine = i2909[11]
  i2908.m_SuperscriptOffset = i2909[12]
  i2908.m_SuperscriptSize = i2909[13]
  i2908.m_SubscriptOffset = i2909[14]
  i2908.m_SubscriptSize = i2909[15]
  i2908.m_UnderlineOffset = i2909[16]
  i2908.m_UnderlineThickness = i2909[17]
  i2908.m_StrikethroughOffset = i2909[18]
  i2908.m_StrikethroughThickness = i2909[19]
  i2908.m_TabWidth = i2909[20]
  return i2908
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2912 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2913 = data
  i2912.m_Index = i2913[0]
  i2912.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2913[1], i2912.m_Metrics)
  i2912.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2913[2], i2912.m_GlyphRect)
  i2912.m_Scale = i2913[3]
  i2912.m_AtlasIndex = i2913[4]
  i2912.m_ClassDefinitionType = i2913[5]
  return i2912
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2914 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2915 = data
  i2914.m_Width = i2915[0]
  i2914.m_Height = i2915[1]
  i2914.m_HorizontalBearingX = i2915[2]
  i2914.m_HorizontalBearingY = i2915[3]
  i2914.m_HorizontalAdvance = i2915[4]
  return i2914
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2916 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2917 = data
  i2916.m_X = i2917[0]
  i2916.m_Y = i2917[1]
  i2916.m_Width = i2917[2]
  i2916.m_Height = i2917[3]
  return i2916
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2920 = root || request.c( 'TMPro.TMP_Character' )
  var i2921 = data
  i2920.m_ElementType = i2921[0]
  i2920.m_Unicode = i2921[1]
  i2920.m_GlyphIndex = i2921[2]
  i2920.m_Scale = i2921[3]
  return i2920
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2926 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2927 = data
  i2926.Name = i2927[0]
  i2926.PointSize = i2927[1]
  i2926.Scale = i2927[2]
  i2926.CharacterCount = i2927[3]
  i2926.LineHeight = i2927[4]
  i2926.Baseline = i2927[5]
  i2926.Ascender = i2927[6]
  i2926.CapHeight = i2927[7]
  i2926.Descender = i2927[8]
  i2926.CenterLine = i2927[9]
  i2926.SuperscriptOffset = i2927[10]
  i2926.SubscriptOffset = i2927[11]
  i2926.SubSize = i2927[12]
  i2926.Underline = i2927[13]
  i2926.UnderlineThickness = i2927[14]
  i2926.strikethrough = i2927[15]
  i2926.strikethroughThickness = i2927[16]
  i2926.TabWidth = i2927[17]
  i2926.Padding = i2927[18]
  i2926.AtlasWidth = i2927[19]
  i2926.AtlasHeight = i2927[20]
  return i2926
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2930 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2931 = data
  i2930.id = i2931[0]
  i2930.x = i2931[1]
  i2930.y = i2931[2]
  i2930.width = i2931[3]
  i2930.height = i2931[4]
  i2930.xOffset = i2931[5]
  i2930.yOffset = i2931[6]
  i2930.xAdvance = i2931[7]
  i2930.scale = i2931[8]
  return i2930
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2932 = root || request.c( 'TMPro.KerningTable' )
  var i2933 = data
  var i2935 = i2933[0]
  var i2934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.add(request.d('TMPro.KerningPair', i2935[i + 0]));
  }
  i2932.kerningPairs = i2934
  return i2932
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2938 = root || request.c( 'TMPro.KerningPair' )
  var i2939 = data
  i2938.xOffset = i2939[0]
  i2938.m_FirstGlyph = i2939[1]
  i2938.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2939[2], i2938.m_FirstGlyphAdjustments)
  i2938.m_SecondGlyph = i2939[3]
  i2938.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2939[4], i2938.m_SecondGlyphAdjustments)
  i2938.m_IgnoreSpacingAdjustments = !!i2939[5]
  return i2938
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2940 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2941 = data
  var i2943 = i2941[0]
  var i2942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2943.length; i += 1) {
    i2942.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2943[i + 0]));
  }
  i2940.m_GlyphPairAdjustmentRecords = i2942
  return i2940
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2946 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2947 = data
  i2946.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2947[0], i2946.m_FirstAdjustmentRecord)
  i2946.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2947[1], i2946.m_SecondAdjustmentRecord)
  i2946.m_FeatureLookupFlags = i2947[2]
  return i2946
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2948 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2949 = data
  i2948.m_GlyphIndex = i2949[0]
  i2948.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2949[1], i2948.m_GlyphValueRecord)
  return i2948
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2950 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2951 = data
  i2950.m_XPlacement = i2951[0]
  i2950.m_YPlacement = i2951[1]
  i2950.m_XAdvance = i2951[2]
  i2950.m_YAdvance = i2951[3]
  return i2950
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2954 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2955 = data
  i2954.sourceFontFileName = i2955[0]
  i2954.sourceFontFileGUID = i2955[1]
  i2954.pointSizeSamplingMode = i2955[2]
  i2954.pointSize = i2955[3]
  i2954.padding = i2955[4]
  i2954.packingMode = i2955[5]
  i2954.atlasWidth = i2955[6]
  i2954.atlasHeight = i2955[7]
  i2954.characterSetSelectionMode = i2955[8]
  i2954.characterSequence = i2955[9]
  i2954.referencedFontAssetGUID = i2955[10]
  i2954.referencedTextAssetGUID = i2955[11]
  i2954.fontStyle = i2955[12]
  i2954.fontStyleModifier = i2955[13]
  i2954.renderMode = i2955[14]
  i2954.includeFontFeatures = !!i2955[15]
  return i2954
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2958 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2959 = data
  request.r(i2959[0], i2959[1], 0, i2958, 'regularTypeface')
  request.r(i2959[2], i2959[3], 0, i2958, 'italicTypeface')
  return i2958
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2960 = root || request.c( 'TMPro.TMP_Settings' )
  var i2961 = data
  i2960.m_enableWordWrapping = !!i2961[0]
  i2960.m_enableKerning = !!i2961[1]
  i2960.m_enableExtraPadding = !!i2961[2]
  i2960.m_enableTintAllSprites = !!i2961[3]
  i2960.m_enableParseEscapeCharacters = !!i2961[4]
  i2960.m_EnableRaycastTarget = !!i2961[5]
  i2960.m_GetFontFeaturesAtRuntime = !!i2961[6]
  i2960.m_missingGlyphCharacter = i2961[7]
  i2960.m_warningsDisabled = !!i2961[8]
  request.r(i2961[9], i2961[10], 0, i2960, 'm_defaultFontAsset')
  i2960.m_defaultFontAssetPath = i2961[11]
  i2960.m_defaultFontSize = i2961[12]
  i2960.m_defaultAutoSizeMinRatio = i2961[13]
  i2960.m_defaultAutoSizeMaxRatio = i2961[14]
  i2960.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2961[15], i2961[16] )
  i2960.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2961[17], i2961[18] )
  i2960.m_autoSizeTextContainer = !!i2961[19]
  i2960.m_IsTextObjectScaleStatic = !!i2961[20]
  var i2963 = i2961[21]
  var i2962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2963.length; i += 2) {
  request.r(i2963[i + 0], i2963[i + 1], 1, i2962, '')
  }
  i2960.m_fallbackFontAssets = i2962
  i2960.m_matchMaterialPreset = !!i2961[22]
  request.r(i2961[23], i2961[24], 0, i2960, 'm_defaultSpriteAsset')
  i2960.m_defaultSpriteAssetPath = i2961[25]
  i2960.m_enableEmojiSupport = !!i2961[26]
  i2960.m_MissingCharacterSpriteUnicode = i2961[27]
  i2960.m_defaultColorGradientPresetsPath = i2961[28]
  request.r(i2961[29], i2961[30], 0, i2960, 'm_defaultStyleSheet')
  i2960.m_StyleSheetsResourcePath = i2961[31]
  request.r(i2961[32], i2961[33], 0, i2960, 'm_leadingCharacters')
  request.r(i2961[34], i2961[35], 0, i2960, 'm_followingCharacters')
  i2960.m_UseModernHangulLineBreakingRules = !!i2961[36]
  return i2960
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2964 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2965 = data
  i2964.hashCode = i2965[0]
  request.r(i2965[1], i2965[2], 0, i2964, 'material')
  i2964.materialHashCode = i2965[3]
  request.r(i2965[4], i2965[5], 0, i2964, 'spriteSheet')
  var i2967 = i2965[6]
  var i2966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.add(request.d('TMPro.TMP_Sprite', i2967[i + 0]));
  }
  i2964.spriteInfoList = i2966
  var i2969 = i2965[7]
  var i2968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2969.length; i += 2) {
  request.r(i2969[i + 0], i2969[i + 1], 1, i2968, '')
  }
  i2964.fallbackSpriteAssets = i2968
  i2964.m_Version = i2965[8]
  i2964.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2965[9], i2964.m_FaceInfo)
  var i2971 = i2965[10]
  var i2970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2971.length; i += 1) {
    i2970.add(request.d('TMPro.TMP_SpriteCharacter', i2971[i + 0]));
  }
  i2964.m_SpriteCharacterTable = i2970
  var i2973 = i2965[11]
  var i2972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2973.length; i += 1) {
    i2972.add(request.d('TMPro.TMP_SpriteGlyph', i2973[i + 0]));
  }
  i2964.m_SpriteGlyphTable = i2972
  return i2964
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2976 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2977 = data
  i2976.name = i2977[0]
  i2976.hashCode = i2977[1]
  i2976.unicode = i2977[2]
  i2976.pivot = new pc.Vec2( i2977[3], i2977[4] )
  request.r(i2977[5], i2977[6], 0, i2976, 'sprite')
  i2976.id = i2977[7]
  i2976.x = i2977[8]
  i2976.y = i2977[9]
  i2976.width = i2977[10]
  i2976.height = i2977[11]
  i2976.xOffset = i2977[12]
  i2976.yOffset = i2977[13]
  i2976.xAdvance = i2977[14]
  i2976.scale = i2977[15]
  return i2976
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2982 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2983 = data
  i2982.m_Name = i2983[0]
  i2982.m_HashCode = i2983[1]
  i2982.m_ElementType = i2983[2]
  i2982.m_Unicode = i2983[3]
  i2982.m_GlyphIndex = i2983[4]
  i2982.m_Scale = i2983[5]
  return i2982
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2986 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2987 = data
  request.r(i2987[0], i2987[1], 0, i2986, 'sprite')
  i2986.m_Index = i2987[2]
  i2986.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2987[3], i2986.m_Metrics)
  i2986.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2987[4], i2986.m_GlyphRect)
  i2986.m_Scale = i2987[5]
  i2986.m_AtlasIndex = i2987[6]
  i2986.m_ClassDefinitionType = i2987[7]
  return i2986
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2988 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2989 = data
  var i2991 = i2989[0]
  var i2990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.add(request.d('TMPro.TMP_Style', i2991[i + 0]));
  }
  i2988.m_StyleList = i2990
  return i2988
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2994 = root || request.c( 'TMPro.TMP_Style' )
  var i2995 = data
  i2994.m_Name = i2995[0]
  i2994.m_HashCode = i2995[1]
  i2994.m_OpeningDefinition = i2995[2]
  i2994.m_ClosingDefinition = i2995[3]
  i2994.m_OpeningTagArray = i2995[4]
  i2994.m_ClosingTagArray = i2995[5]
  i2994.m_OpeningTagUnicodeArray = i2995[6]
  i2994.m_ClosingTagUnicodeArray = i2995[7]
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2997 = data
  var i2999 = i2997[0]
  var i2998 = []
  for(var i = 0; i < i2999.length; i += 1) {
    i2998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2999[i + 0]) );
  }
  i2996.files = i2998
  i2996.componentToPrefabIds = i2997[1]
  return i2996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3003 = data
  i3002.path = i3003[0]
  request.r(i3003[1], i3003[2], 0, i3002, 'unityObject')
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3005 = data
  var i3007 = i3005[0]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3007[i + 0]) );
  }
  i3004.scriptsExecutionOrder = i3006
  var i3009 = i3005[1]
  var i3008 = []
  for(var i = 0; i < i3009.length; i += 1) {
    i3008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3009[i + 0]) );
  }
  i3004.sortingLayers = i3008
  var i3011 = i3005[2]
  var i3010 = []
  for(var i = 0; i < i3011.length; i += 1) {
    i3010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3011[i + 0]) );
  }
  i3004.cullingLayers = i3010
  i3004.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3005[3], i3004.timeSettings)
  i3004.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3005[4], i3004.physicsSettings)
  i3004.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3005[5], i3004.physics2DSettings)
  i3004.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3005[6], i3004.qualitySettings)
  i3004.enableRealtimeShadows = !!i3005[7]
  i3004.enableAutoInstancing = !!i3005[8]
  i3004.enableDynamicBatching = !!i3005[9]
  i3004.lightmapEncodingQuality = i3005[10]
  i3004.desiredColorSpace = i3005[11]
  var i3013 = i3005[12]
  var i3012 = []
  for(var i = 0; i < i3013.length; i += 1) {
    i3012.push( i3013[i + 0] );
  }
  i3004.allTags = i3012
  return i3004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3017 = data
  i3016.name = i3017[0]
  i3016.value = i3017[1]
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3021 = data
  i3020.id = i3021[0]
  i3020.name = i3021[1]
  i3020.value = i3021[2]
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3025 = data
  i3024.id = i3025[0]
  i3024.name = i3025[1]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3027 = data
  i3026.fixedDeltaTime = i3027[0]
  i3026.maximumDeltaTime = i3027[1]
  i3026.timeScale = i3027[2]
  i3026.maximumParticleTimestep = i3027[3]
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3029 = data
  i3028.gravity = new pc.Vec3( i3029[0], i3029[1], i3029[2] )
  i3028.defaultSolverIterations = i3029[3]
  i3028.bounceThreshold = i3029[4]
  i3028.autoSyncTransforms = !!i3029[5]
  i3028.autoSimulation = !!i3029[6]
  var i3031 = i3029[7]
  var i3030 = []
  for(var i = 0; i < i3031.length; i += 1) {
    i3030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3031[i + 0]) );
  }
  i3028.collisionMatrix = i3030
  return i3028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3035 = data
  i3034.enabled = !!i3035[0]
  i3034.layerId = i3035[1]
  i3034.otherLayerId = i3035[2]
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3037 = data
  request.r(i3037[0], i3037[1], 0, i3036, 'material')
  i3036.gravity = new pc.Vec2( i3037[2], i3037[3] )
  i3036.positionIterations = i3037[4]
  i3036.velocityIterations = i3037[5]
  i3036.velocityThreshold = i3037[6]
  i3036.maxLinearCorrection = i3037[7]
  i3036.maxAngularCorrection = i3037[8]
  i3036.maxTranslationSpeed = i3037[9]
  i3036.maxRotationSpeed = i3037[10]
  i3036.baumgarteScale = i3037[11]
  i3036.baumgarteTOIScale = i3037[12]
  i3036.timeToSleep = i3037[13]
  i3036.linearSleepTolerance = i3037[14]
  i3036.angularSleepTolerance = i3037[15]
  i3036.defaultContactOffset = i3037[16]
  i3036.autoSimulation = !!i3037[17]
  i3036.queriesHitTriggers = !!i3037[18]
  i3036.queriesStartInColliders = !!i3037[19]
  i3036.callbacksOnDisable = !!i3037[20]
  i3036.reuseCollisionCallbacks = !!i3037[21]
  i3036.autoSyncTransforms = !!i3037[22]
  var i3039 = i3037[23]
  var i3038 = []
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3039[i + 0]) );
  }
  i3036.collisionMatrix = i3038
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3043 = data
  i3042.enabled = !!i3043[0]
  i3042.layerId = i3043[1]
  i3042.otherLayerId = i3043[2]
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3045 = data
  var i3047 = i3045[0]
  var i3046 = []
  for(var i = 0; i < i3047.length; i += 1) {
    i3046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3047[i + 0]) );
  }
  i3044.qualityLevels = i3046
  var i3049 = i3045[1]
  var i3048 = []
  for(var i = 0; i < i3049.length; i += 1) {
    i3048.push( i3049[i + 0] );
  }
  i3044.names = i3048
  i3044.shadows = i3045[2]
  i3044.anisotropicFiltering = i3045[3]
  i3044.antiAliasing = i3045[4]
  i3044.lodBias = i3045[5]
  i3044.shadowCascades = i3045[6]
  i3044.shadowDistance = i3045[7]
  i3044.shadowmaskMode = i3045[8]
  i3044.shadowProjection = i3045[9]
  i3044.shadowResolution = i3045[10]
  i3044.softParticles = !!i3045[11]
  i3044.softVegetation = !!i3045[12]
  i3044.activeColorSpace = i3045[13]
  i3044.desiredColorSpace = i3045[14]
  i3044.masterTextureLimit = i3045[15]
  i3044.maxQueuedFrames = i3045[16]
  i3044.particleRaycastBudget = i3045[17]
  i3044.pixelLightCount = i3045[18]
  i3044.realtimeReflectionProbes = !!i3045[19]
  i3044.shadowCascade2Split = i3045[20]
  i3044.shadowCascade4Split = new pc.Vec3( i3045[21], i3045[22], i3045[23] )
  i3044.streamingMipmapsActive = !!i3045[24]
  i3044.vSyncCount = i3045[25]
  i3044.asyncUploadBufferSize = i3045[26]
  i3044.asyncUploadTimeSlice = i3045[27]
  i3044.billboardsFaceCameraPosition = !!i3045[28]
  i3044.shadowNearPlaneOffset = i3045[29]
  i3044.streamingMipmapsMemoryBudget = i3045[30]
  i3044.maximumLODLevel = i3045[31]
  i3044.streamingMipmapsAddAllCameras = !!i3045[32]
  i3044.streamingMipmapsMaxLevelReduction = i3045[33]
  i3044.streamingMipmapsRenderersPerFrame = i3045[34]
  i3044.resolutionScalingFixedDPIFactor = i3045[35]
  i3044.streamingMipmapsMaxFileIORequests = i3045[36]
  i3044.currentQualityLevel = i3045[37]
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3055 = data
  i3054.weight = i3055[0]
  i3054.vertices = i3055[1]
  i3054.normals = i3055[2]
  i3054.tangents = i3055[3]
  return i3054
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3056 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3057 = data
  request.r(i3057[0], i3057[1], 0, i3056, 'm_ObjectArgument')
  i3056.m_ObjectArgumentAssemblyTypeName = i3057[2]
  i3056.m_IntArgument = i3057[3]
  i3056.m_FloatArgument = i3057[4]
  i3056.m_StringArgument = i3057[5]
  i3056.m_BoolArgument = !!i3057[6]
  return i3056
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3058 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3059 = data
  i3058.xPlacement = i3059[0]
  i3058.yPlacement = i3059[1]
  i3058.xAdvance = i3059[2]
  i3058.yAdvance = i3059[3]
  return i3058
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.WheelCollider":{"enabled":0,"center":1,"radius":4,"mass":5,"suspensionDistance":6,"forceAppPointDistance":7,"suspensionSpring":8,"forwardFriction":9,"sidewaysFriction":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[14],"56":[1],"57":[1],"58":[1],"59":[1],"60":[1],"61":[1],"62":[1],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[14],"78":[4],"79":[80],"81":[80],"30":[29],"82":[29],"83":[29],"32":[30],"34":[33,29],"84":[29],"31":[30],"85":[29],"86":[29],"87":[29],"88":[29],"89":[29],"90":[29],"91":[29],"92":[29],"93":[29],"94":[33,29],"95":[29],"96":[29],"97":[29],"98":[29],"39":[33,29],"99":[29],"100":[21],"101":[21],"22":[21],"102":[21],"103":[14],"104":[14],"105":[29],"106":[4,29],"36":[29,33],"107":[29],"108":[33,29],"109":[4],"110":[33,29],"111":[29],"112":[113],"114":[113],"115":[14],"116":[117],"118":[113]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.WheelCollider","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Light","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","SmoothFollowCamera","CameraSequence","UnityEngine.CanvasGroup","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AICarController","UnityEngine.CharacterController","UnityEngine.SphereCollider","PlayerCarController","CheckpointManager","UnityEngine.PhysicMaterial","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "INDIEZ";

Deserializers.lunaInitializationTime = "04/29/2025 09:21:16";

Deserializers.lunaDaysRunning = "5.5";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1818";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3836";

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

Deserializers.buildID = "6f4f8e13-d61e-4923-bf5b-df13d12ac63b";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

