var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.JointSpring' )
  var i1609 = data
  i1608.spring = i1609[0]
  i1608.damper = i1609[1]
  i1608.targetPosition = i1609[2]
  return i1608
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.JointMotor' )
  var i1611 = data
  i1610.m_TargetVelocity = i1611[0]
  i1610.m_Force = i1611[1]
  i1610.m_FreeSpin = i1611[2]
  return i1610
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.JointLimits' )
  var i1613 = data
  i1612.m_Min = i1613[0]
  i1612.m_Max = i1613[1]
  i1612.m_Bounciness = i1613[2]
  i1612.m_BounceMinVelocity = i1613[3]
  i1612.m_ContactDistance = i1613[4]
  i1612.minBounce = i1613[5]
  i1612.maxBounce = i1613[6]
  return i1612
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.JointDrive' )
  var i1615 = data
  i1614.m_PositionSpring = i1615[0]
  i1614.m_PositionDamper = i1615[1]
  i1614.m_MaximumForce = i1615[2]
  i1614.m_UseAcceleration = i1615[3]
  return i1614
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1617 = data
  i1616.m_Spring = i1617[0]
  i1616.m_Damper = i1617[1]
  return i1616
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1619 = data
  i1618.m_Limit = i1619[0]
  i1618.m_Bounciness = i1619[1]
  i1618.m_ContactDistance = i1619[2]
  return i1618
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1621 = data
  i1620.m_ExtremumSlip = i1621[0]
  i1620.m_ExtremumValue = i1621[1]
  i1620.m_AsymptoteSlip = i1621[2]
  i1620.m_AsymptoteValue = i1621[3]
  i1620.m_Stiffness = i1621[4]
  return i1620
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1623 = data
  i1622.m_LowerAngle = i1623[0]
  i1622.m_UpperAngle = i1623[1]
  return i1622
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1625 = data
  i1624.m_MotorSpeed = i1625[0]
  i1624.m_MaximumMotorTorque = i1625[1]
  return i1624
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1627 = data
  i1626.m_DampingRatio = i1627[0]
  i1626.m_Frequency = i1627[1]
  i1626.m_Angle = i1627[2]
  return i1626
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1629 = data
  i1628.m_LowerTranslation = i1629[0]
  i1628.m_UpperTranslation = i1629[1]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1631 = data
  i1630.position = new pc.Vec3( i1631[0], i1631[1], i1631[2] )
  i1630.scale = new pc.Vec3( i1631[3], i1631[4], i1631[5] )
  i1630.rotation = new pc.Quat(i1631[6], i1631[7], i1631[8], i1631[9])
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1633 = data
  i1632.mass = i1633[0]
  i1632.drag = i1633[1]
  i1632.angularDrag = i1633[2]
  i1632.useGravity = !!i1633[3]
  i1632.isKinematic = !!i1633[4]
  i1632.constraints = i1633[5]
  i1632.maxAngularVelocity = i1633[6]
  i1632.collisionDetectionMode = i1633[7]
  i1632.interpolation = i1633[8]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'sharedMesh')
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1637 = data
  request.r(i1637[0], i1637[1], 0, i1636, 'additionalVertexStreams')
  i1636.enabled = !!i1637[2]
  request.r(i1637[3], i1637[4], 0, i1636, 'sharedMaterial')
  var i1639 = i1637[5]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 2) {
  request.r(i1639[i + 0], i1639[i + 1], 2, i1638, '')
  }
  i1636.sharedMaterials = i1638
  i1636.receiveShadows = !!i1637[6]
  i1636.shadowCastingMode = i1637[7]
  i1636.sortingLayerID = i1637[8]
  i1636.sortingOrder = i1637[9]
  i1636.lightmapIndex = i1637[10]
  i1636.lightmapSceneIndex = i1637[11]
  i1636.lightmapScaleOffset = new pc.Vec4( i1637[12], i1637[13], i1637[14], i1637[15] )
  i1636.lightProbeUsage = i1637[16]
  i1636.reflectionProbeUsage = i1637[17]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1643 = data
  i1642.center = new pc.Vec3( i1643[0], i1643[1], i1643[2] )
  i1642.size = new pc.Vec3( i1643[3], i1643[4], i1643[5] )
  i1642.enabled = !!i1643[6]
  i1642.isTrigger = !!i1643[7]
  request.r(i1643[8], i1643[9], 0, i1642, 'material')
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1645 = data
  i1644.name = i1645[0]
  i1644.tagId = i1645[1]
  i1644.enabled = !!i1645[2]
  i1644.isStatic = !!i1645[3]
  i1644.layer = i1645[4]
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.WheelCollider"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.WheelCollider' )
  var i1647 = data
  i1646.enabled = !!i1647[0]
  i1646.center = new pc.Vec3( i1647[1], i1647[2], i1647[3] )
  i1646.radius = i1647[4]
  i1646.mass = i1647[5]
  i1646.suspensionDistance = i1647[6]
  i1646.forceAppPointDistance = i1647[7]
  i1646.suspensionSpring = request.d('UnityEngine.JointSpring', i1647[8], i1646.suspensionSpring)
  i1646.forwardFriction = request.d('UnityEngine.WheelFrictionCurve', i1647[9], i1646.forwardFriction)
  i1646.sidewaysFriction = request.d('UnityEngine.WheelFrictionCurve', i1647[10], i1646.sidewaysFriction)
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1649 = data
  i1648.name = i1649[0]
  i1648.halfPrecision = !!i1649[1]
  i1648.useUInt32IndexFormat = !!i1649[2]
  i1648.vertexCount = i1649[3]
  i1648.aabb = i1649[4]
  var i1651 = i1649[5]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( !!i1651[i + 0] );
  }
  i1648.streams = i1650
  i1648.vertices = i1649[6]
  var i1653 = i1649[7]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1653[i + 0]) );
  }
  i1648.subMeshes = i1652
  var i1655 = i1649[8]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 16) {
    i1654.push( new pc.Mat4().setData(i1655[i + 0], i1655[i + 1], i1655[i + 2], i1655[i + 3],  i1655[i + 4], i1655[i + 5], i1655[i + 6], i1655[i + 7],  i1655[i + 8], i1655[i + 9], i1655[i + 10], i1655[i + 11],  i1655[i + 12], i1655[i + 13], i1655[i + 14], i1655[i + 15]) );
  }
  i1648.bindposes = i1654
  var i1657 = i1649[9]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1657[i + 0]) );
  }
  i1648.blendShapes = i1656
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1663 = data
  i1662.triangles = i1663[0]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1669 = data
  i1668.name = i1669[0]
  var i1671 = i1669[1]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1671[i + 0]) );
  }
  i1668.frames = i1670
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1672 = root || new pc.UnityMaterial()
  var i1673 = data
  i1672.name = i1673[0]
  request.r(i1673[1], i1673[2], 0, i1672, 'shader')
  i1672.renderQueue = i1673[3]
  i1672.enableInstancing = !!i1673[4]
  var i1675 = i1673[5]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1675[i + 0]) );
  }
  i1672.floatParameters = i1674
  var i1677 = i1673[6]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1677[i + 0]) );
  }
  i1672.colorParameters = i1676
  var i1679 = i1673[7]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1679[i + 0]) );
  }
  i1672.vectorParameters = i1678
  var i1681 = i1673[8]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1681[i + 0]) );
  }
  i1672.textureParameters = i1680
  var i1683 = i1673[9]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1683[i + 0]) );
  }
  i1672.materialFlags = i1682
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1687 = data
  i1686.name = i1687[0]
  i1686.value = i1687[1]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1691 = data
  i1690.name = i1691[0]
  i1690.value = new pc.Color(i1691[1], i1691[2], i1691[3], i1691[4])
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1695 = data
  i1694.name = i1695[0]
  i1694.value = new pc.Vec4( i1695[1], i1695[2], i1695[3], i1695[4] )
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1699 = data
  i1698.name = i1699[0]
  request.r(i1699[1], i1699[2], 0, i1698, 'value')
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1703 = data
  i1702.name = i1703[0]
  i1702.enabled = !!i1703[1]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1705 = data
  i1704.name = i1705[0]
  i1704.width = i1705[1]
  i1704.height = i1705[2]
  i1704.mipmapCount = i1705[3]
  i1704.anisoLevel = i1705[4]
  i1704.filterMode = i1705[5]
  i1704.hdr = !!i1705[6]
  i1704.format = i1705[7]
  i1704.wrapMode = i1705[8]
  i1704.alphaIsTransparency = !!i1705[9]
  i1704.alphaSource = i1705[10]
  i1704.graphicsFormat = i1705[11]
  i1704.sRGBTexture = !!i1705[12]
  i1704.desiredColorSpace = i1705[13]
  i1704.wrapU = i1705[14]
  i1704.wrapV = i1705[15]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1707 = data
  i1706.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1707[0], i1706.main)
  i1706.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1707[1], i1706.colorBySpeed)
  i1706.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1707[2], i1706.colorOverLifetime)
  i1706.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1707[3], i1706.emission)
  i1706.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1707[4], i1706.rotationBySpeed)
  i1706.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1707[5], i1706.rotationOverLifetime)
  i1706.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1707[6], i1706.shape)
  i1706.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1707[7], i1706.sizeBySpeed)
  i1706.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1707[8], i1706.sizeOverLifetime)
  i1706.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1707[9], i1706.textureSheetAnimation)
  i1706.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1707[10], i1706.velocityOverLifetime)
  i1706.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1707[11], i1706.noise)
  i1706.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1707[12], i1706.inheritVelocity)
  i1706.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1707[13], i1706.forceOverLifetime)
  i1706.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1707[14], i1706.limitVelocityOverLifetime)
  i1706.useAutoRandomSeed = !!i1707[15]
  i1706.randomSeed = i1707[16]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1708 = root || new pc.ParticleSystemMain()
  var i1709 = data
  i1708.duration = i1709[0]
  i1708.loop = !!i1709[1]
  i1708.prewarm = !!i1709[2]
  i1708.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[3], i1708.startDelay)
  i1708.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[4], i1708.startLifetime)
  i1708.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[5], i1708.startSpeed)
  i1708.startSize3D = !!i1709[6]
  i1708.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[7], i1708.startSizeX)
  i1708.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[8], i1708.startSizeY)
  i1708.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[9], i1708.startSizeZ)
  i1708.startRotation3D = !!i1709[10]
  i1708.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[11], i1708.startRotationX)
  i1708.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[12], i1708.startRotationY)
  i1708.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[13], i1708.startRotationZ)
  i1708.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1709[14], i1708.startColor)
  i1708.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[15], i1708.gravityModifier)
  i1708.simulationSpace = i1709[16]
  request.r(i1709[17], i1709[18], 0, i1708, 'customSimulationSpace')
  i1708.simulationSpeed = i1709[19]
  i1708.useUnscaledTime = !!i1709[20]
  i1708.scalingMode = i1709[21]
  i1708.playOnAwake = !!i1709[22]
  i1708.maxParticles = i1709[23]
  i1708.emitterVelocityMode = i1709[24]
  i1708.stopAction = i1709[25]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1710 = root || new pc.MinMaxCurve()
  var i1711 = data
  i1710.mode = i1711[0]
  i1710.curveMin = new pc.AnimationCurve( { keys_flow: i1711[1] } )
  i1710.curveMax = new pc.AnimationCurve( { keys_flow: i1711[2] } )
  i1710.curveMultiplier = i1711[3]
  i1710.constantMin = i1711[4]
  i1710.constantMax = i1711[5]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1712 = root || new pc.MinMaxGradient()
  var i1713 = data
  i1712.mode = i1713[0]
  i1712.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1713[1], i1712.gradientMin)
  i1712.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1713[2], i1712.gradientMax)
  i1712.colorMin = new pc.Color(i1713[3], i1713[4], i1713[5], i1713[6])
  i1712.colorMax = new pc.Color(i1713[7], i1713[8], i1713[9], i1713[10])
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1715 = data
  i1714.mode = i1715[0]
  var i1717 = i1715[1]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1717[i + 0]) );
  }
  i1714.colorKeys = i1716
  var i1719 = i1715[2]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1719[i + 0]) );
  }
  i1714.alphaKeys = i1718
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1720 = root || new pc.ParticleSystemColorBySpeed()
  var i1721 = data
  i1720.enabled = !!i1721[0]
  i1720.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1721[1], i1720.color)
  i1720.range = new pc.Vec2( i1721[2], i1721[3] )
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1725 = data
  i1724.color = new pc.Color(i1725[0], i1725[1], i1725[2], i1725[3])
  i1724.time = i1725[4]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1729 = data
  i1728.alpha = i1729[0]
  i1728.time = i1729[1]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1730 = root || new pc.ParticleSystemColorOverLifetime()
  var i1731 = data
  i1730.enabled = !!i1731[0]
  i1730.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1731[1], i1730.color)
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1732 = root || new pc.ParticleSystemEmitter()
  var i1733 = data
  i1732.enabled = !!i1733[0]
  i1732.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[1], i1732.rateOverTime)
  i1732.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[2], i1732.rateOverDistance)
  var i1735 = i1733[3]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1735[i + 0]) );
  }
  i1732.bursts = i1734
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1738 = root || new pc.ParticleSystemBurst()
  var i1739 = data
  i1738.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[0], i1738.count)
  i1738.cycleCount = i1739[1]
  i1738.minCount = i1739[2]
  i1738.maxCount = i1739[3]
  i1738.repeatInterval = i1739[4]
  i1738.time = i1739[5]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1740 = root || new pc.ParticleSystemRotationBySpeed()
  var i1741 = data
  i1740.enabled = !!i1741[0]
  i1740.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[1], i1740.x)
  i1740.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[2], i1740.y)
  i1740.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[3], i1740.z)
  i1740.separateAxes = !!i1741[4]
  i1740.range = new pc.Vec2( i1741[5], i1741[6] )
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1742 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1743 = data
  i1742.enabled = !!i1743[0]
  i1742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1743[1], i1742.x)
  i1742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1743[2], i1742.y)
  i1742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1743[3], i1742.z)
  i1742.separateAxes = !!i1743[4]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1744 = root || new pc.ParticleSystemShape()
  var i1745 = data
  i1744.enabled = !!i1745[0]
  i1744.shapeType = i1745[1]
  i1744.randomDirectionAmount = i1745[2]
  i1744.sphericalDirectionAmount = i1745[3]
  i1744.randomPositionAmount = i1745[4]
  i1744.alignToDirection = !!i1745[5]
  i1744.radius = i1745[6]
  i1744.radiusMode = i1745[7]
  i1744.radiusSpread = i1745[8]
  i1744.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1745[9], i1744.radiusSpeed)
  i1744.radiusThickness = i1745[10]
  i1744.angle = i1745[11]
  i1744.length = i1745[12]
  i1744.boxThickness = new pc.Vec3( i1745[13], i1745[14], i1745[15] )
  i1744.meshShapeType = i1745[16]
  request.r(i1745[17], i1745[18], 0, i1744, 'mesh')
  request.r(i1745[19], i1745[20], 0, i1744, 'meshRenderer')
  request.r(i1745[21], i1745[22], 0, i1744, 'skinnedMeshRenderer')
  i1744.useMeshMaterialIndex = !!i1745[23]
  i1744.meshMaterialIndex = i1745[24]
  i1744.useMeshColors = !!i1745[25]
  i1744.normalOffset = i1745[26]
  i1744.arc = i1745[27]
  i1744.arcMode = i1745[28]
  i1744.arcSpread = i1745[29]
  i1744.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1745[30], i1744.arcSpeed)
  i1744.donutRadius = i1745[31]
  i1744.position = new pc.Vec3( i1745[32], i1745[33], i1745[34] )
  i1744.rotation = new pc.Vec3( i1745[35], i1745[36], i1745[37] )
  i1744.scale = new pc.Vec3( i1745[38], i1745[39], i1745[40] )
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1746 = root || new pc.ParticleSystemSizeBySpeed()
  var i1747 = data
  i1746.enabled = !!i1747[0]
  i1746.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[1], i1746.x)
  i1746.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[2], i1746.y)
  i1746.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[3], i1746.z)
  i1746.separateAxes = !!i1747[4]
  i1746.range = new pc.Vec2( i1747[5], i1747[6] )
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1748 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1749 = data
  i1748.enabled = !!i1749[0]
  i1748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1749[1], i1748.x)
  i1748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1749[2], i1748.y)
  i1748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1749[3], i1748.z)
  i1748.separateAxes = !!i1749[4]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1750 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1751 = data
  i1750.enabled = !!i1751[0]
  i1750.mode = i1751[1]
  i1750.animation = i1751[2]
  i1750.numTilesX = i1751[3]
  i1750.numTilesY = i1751[4]
  i1750.useRandomRow = !!i1751[5]
  i1750.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[6], i1750.frameOverTime)
  i1750.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[7], i1750.startFrame)
  i1750.cycleCount = i1751[8]
  i1750.rowIndex = i1751[9]
  i1750.flipU = i1751[10]
  i1750.flipV = i1751[11]
  i1750.spriteCount = i1751[12]
  var i1753 = i1751[13]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 2, i1752, '')
  }
  i1750.sprites = i1752
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1756 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1757 = data
  i1756.enabled = !!i1757[0]
  i1756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[1], i1756.x)
  i1756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[2], i1756.y)
  i1756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[3], i1756.z)
  i1756.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[4], i1756.radial)
  i1756.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[5], i1756.speedModifier)
  i1756.space = i1757[6]
  i1756.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[7], i1756.orbitalX)
  i1756.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[8], i1756.orbitalY)
  i1756.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[9], i1756.orbitalZ)
  i1756.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[10], i1756.orbitalOffsetX)
  i1756.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[11], i1756.orbitalOffsetY)
  i1756.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[12], i1756.orbitalOffsetZ)
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1758 = root || new pc.ParticleSystemNoise()
  var i1759 = data
  i1758.enabled = !!i1759[0]
  i1758.separateAxes = !!i1759[1]
  i1758.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[2], i1758.strengthX)
  i1758.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[3], i1758.strengthY)
  i1758.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[4], i1758.strengthZ)
  i1758.frequency = i1759[5]
  i1758.damping = !!i1759[6]
  i1758.octaveCount = i1759[7]
  i1758.octaveMultiplier = i1759[8]
  i1758.octaveScale = i1759[9]
  i1758.quality = i1759[10]
  i1758.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[11], i1758.scrollSpeed)
  i1758.scrollSpeedMultiplier = i1759[12]
  i1758.remapEnabled = !!i1759[13]
  i1758.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[14], i1758.remapX)
  i1758.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[15], i1758.remapY)
  i1758.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[16], i1758.remapZ)
  i1758.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[17], i1758.positionAmount)
  i1758.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[18], i1758.rotationAmount)
  i1758.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[19], i1758.sizeAmount)
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1760 = root || new pc.ParticleSystemInheritVelocity()
  var i1761 = data
  i1760.enabled = !!i1761[0]
  i1760.mode = i1761[1]
  i1760.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[2], i1760.curve)
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1762 = root || new pc.ParticleSystemForceOverLifetime()
  var i1763 = data
  i1762.enabled = !!i1763[0]
  i1762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[1], i1762.x)
  i1762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[2], i1762.y)
  i1762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[3], i1762.z)
  i1762.space = i1763[4]
  i1762.randomized = !!i1763[5]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1764 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1765 = data
  i1764.enabled = !!i1765[0]
  i1764.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[1], i1764.limit)
  i1764.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[2], i1764.limitX)
  i1764.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[3], i1764.limitY)
  i1764.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[4], i1764.limitZ)
  i1764.dampen = i1765[5]
  i1764.separateAxes = !!i1765[6]
  i1764.space = i1765[7]
  i1764.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[8], i1764.drag)
  i1764.multiplyDragByParticleSize = !!i1765[9]
  i1764.multiplyDragByParticleVelocity = !!i1765[10]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1767 = data
  i1766.enabled = !!i1767[0]
  request.r(i1767[1], i1767[2], 0, i1766, 'sharedMaterial')
  var i1769 = i1767[3]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 2) {
  request.r(i1769[i + 0], i1769[i + 1], 2, i1768, '')
  }
  i1766.sharedMaterials = i1768
  i1766.receiveShadows = !!i1767[4]
  i1766.shadowCastingMode = i1767[5]
  i1766.sortingLayerID = i1767[6]
  i1766.sortingOrder = i1767[7]
  i1766.lightmapIndex = i1767[8]
  i1766.lightmapSceneIndex = i1767[9]
  i1766.lightmapScaleOffset = new pc.Vec4( i1767[10], i1767[11], i1767[12], i1767[13] )
  i1766.lightProbeUsage = i1767[14]
  i1766.reflectionProbeUsage = i1767[15]
  request.r(i1767[16], i1767[17], 0, i1766, 'mesh')
  i1766.meshCount = i1767[18]
  i1766.activeVertexStreamsCount = i1767[19]
  i1766.alignment = i1767[20]
  i1766.renderMode = i1767[21]
  i1766.sortMode = i1767[22]
  i1766.lengthScale = i1767[23]
  i1766.velocityScale = i1767[24]
  i1766.cameraVelocityScale = i1767[25]
  i1766.normalDirection = i1767[26]
  i1766.sortingFudge = i1767[27]
  i1766.minParticleSize = i1767[28]
  i1766.maxParticleSize = i1767[29]
  i1766.pivot = new pc.Vec3( i1767[30], i1767[31], i1767[32] )
  request.r(i1767[33], i1767[34], 0, i1766, 'trailMaterial')
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1771 = data
  i1770.enabled = !!i1771[0]
  i1770.type = i1771[1]
  i1770.color = new pc.Color(i1771[2], i1771[3], i1771[4], i1771[5])
  i1770.cullingMask = i1771[6]
  i1770.intensity = i1771[7]
  i1770.range = i1771[8]
  i1770.spotAngle = i1771[9]
  i1770.shadows = i1771[10]
  i1770.shadowNormalBias = i1771[11]
  i1770.shadowBias = i1771[12]
  i1770.shadowStrength = i1771[13]
  i1770.shadowResolution = i1771[14]
  i1770.lightmapBakeType = i1771[15]
  i1770.renderMode = i1771[16]
  request.r(i1771[17], i1771[18], 0, i1770, 'cookie')
  i1770.cookieSize = i1771[19]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1773 = data
  i1772.enabled = !!i1773[0]
  i1772.isTrigger = !!i1773[1]
  request.r(i1773[2], i1773[3], 0, i1772, 'material')
  request.r(i1773[4], i1773[5], 0, i1772, 'sharedMesh')
  i1772.convex = !!i1773[6]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1775 = data
  i1774.name = i1775[0]
  i1774.atlasId = i1775[1]
  i1774.mipmapCount = i1775[2]
  i1774.hdr = !!i1775[3]
  i1774.size = i1775[4]
  i1774.anisoLevel = i1775[5]
  i1774.filterMode = i1775[6]
  var i1777 = i1775[7]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 4) {
    i1776.push( UnityEngine.Rect.MinMaxRect(i1777[i + 0], i1777[i + 1], i1777[i + 2], i1777[i + 3]) );
  }
  i1774.rects = i1776
  i1774.wrapU = i1775[8]
  i1774.wrapV = i1775[9]
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1781 = data
  i1780.name = i1781[0]
  i1780.index = i1781[1]
  i1780.startup = !!i1781[2]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1783 = data
  i1782.enabled = !!i1783[0]
  i1782.aspect = i1783[1]
  i1782.orthographic = !!i1783[2]
  i1782.orthographicSize = i1783[3]
  i1782.backgroundColor = new pc.Color(i1783[4], i1783[5], i1783[6], i1783[7])
  i1782.nearClipPlane = i1783[8]
  i1782.farClipPlane = i1783[9]
  i1782.fieldOfView = i1783[10]
  i1782.depth = i1783[11]
  i1782.clearFlags = i1783[12]
  i1782.cullingMask = i1783[13]
  i1782.rect = i1783[14]
  request.r(i1783[15], i1783[16], 0, i1782, 'targetTexture')
  i1782.usePhysicalProperties = !!i1783[17]
  i1782.focalLength = i1783[18]
  i1782.sensorSize = new pc.Vec2( i1783[19], i1783[20] )
  i1782.lensShift = new pc.Vec2( i1783[21], i1783[22] )
  i1782.gateFit = i1783[23]
  i1782.commandBufferCount = i1783[24]
  i1782.cameraType = i1783[25]
  return i1782
}

Deserializers["SmoothFollowCamera"] = function (request, data, root) {
  var i1784 = root || request.c( 'SmoothFollowCamera' )
  var i1785 = data
  request.r(i1785[0], i1785[1], 0, i1784, 'target')
  i1784.offset = new pc.Vec3( i1785[2], i1785[3], i1785[4] )
  i1784.followSpeed = i1785[5]
  i1784.rotationSpeed = i1785[6]
  return i1784
}

Deserializers["CameraSequence"] = function (request, data, root) {
  var i1786 = root || request.c( 'CameraSequence' )
  var i1787 = data
  request.r(i1787[0], i1787[1], 0, i1786, 'pointA')
  request.r(i1787[2], i1787[3], 0, i1786, 'pointB')
  request.r(i1787[4], i1787[5], 0, i1786, 'pointC')
  request.r(i1787[6], i1787[7], 0, i1786, 'smoothFollowCamera')
  i1786.rotateDuration = i1787[8]
  i1786.moveDuration = i1787[9]
  i1786.rotationSpeed = i1787[10]
  request.r(i1787[11], i1787[12], 0, i1786, 'flashEffect')
  return i1786
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1789 = data
  request.r(i1789[0], i1789[1], 0, i1788, 'm_FirstSelected')
  i1788.m_sendNavigationEvents = !!i1789[2]
  i1788.m_DragThreshold = i1789[3]
  return i1788
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1791 = data
  i1790.m_HorizontalAxis = i1791[0]
  i1790.m_VerticalAxis = i1791[1]
  i1790.m_SubmitButton = i1791[2]
  i1790.m_CancelButton = i1791[3]
  i1790.m_InputActionsPerSecond = i1791[4]
  i1790.m_RepeatDelay = i1791[5]
  i1790.m_ForceModuleActive = !!i1791[6]
  i1790.m_SendPointerHoverToParent = !!i1791[7]
  return i1790
}

Deserializers["AICarController"] = function (request, data, root) {
  var i1792 = root || request.c( 'AICarController' )
  var i1793 = data
  i1792.moveSpeed = i1793[0]
  i1792.maxSpeed = i1793[1]
  i1792.smoothTime = i1793[2]
  i1792.turnSpeed = i1793[3]
  i1792.checkpointRadius = i1793[4]
  i1792.slowTurnThreshold = i1793[5]
  i1792.driftIntensity = i1793[6]
  i1792.obstacleDetectionRange = i1793[7]
  i1792.avoidanceStrength = i1793[8]
  i1792.obstacleLayers = UnityEngine.LayerMask.FromIntegerValue( i1793[9] )
  request.r(i1793[10], i1793[11], 0, i1792, 'checkpointManager')
  request.r(i1793[12], i1793[13], 0, i1792, 'SpeedUpEffect')
  request.r(i1793[14], i1793[15], 0, i1792, 'SmokeTrailEffect')
  request.r(i1793[16], i1793[17], 0, i1792, 'SmokeStartupEffect')
  request.r(i1793[18], i1793[19], 0, i1792, 'IdleEngineEffect')
  request.r(i1793[20], i1793[21], 0, i1792, 'RightDriftEffect')
  request.r(i1793[22], i1793[23], 0, i1792, 'LeftDriftEffect')
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i1795 = data
  i1794.enabled = !!i1795[0]
  i1794.center = new pc.Vec3( i1795[1], i1795[2], i1795[3] )
  i1794.radius = i1795[4]
  i1794.height = i1795[5]
  i1794.minMoveDistance = i1795[6]
  i1794.skinWidth = i1795[7]
  i1794.enableOverlapRecovery = !!i1795[8]
  return i1794
}

Deserializers["PlayerCarController"] = function (request, data, root) {
  var i1796 = root || request.c( 'PlayerCarController' )
  var i1797 = data
  i1796.moveSpeed = i1797[0]
  i1796.smoothTime = i1797[1]
  i1796.maxSpeed = i1797[2]
  i1796.turnSpeed = i1797[3]
  i1796.maxTurnAngle = i1797[4]
  i1796.slowTurnThreshold = i1797[5]
  i1796.driftIntensity = i1797[6]
  request.r(i1797[7], i1797[8], 0, i1796, 'checkpointManager')
  request.r(i1797[9], i1797[10], 0, i1796, 'Arrow')
  request.r(i1797[11], i1797[12], 0, i1796, 'SpeedUpEffect')
  request.r(i1797[13], i1797[14], 0, i1796, 'SmokeTrailEffect')
  request.r(i1797[15], i1797[16], 0, i1796, 'SmokeStartupEffect')
  request.r(i1797[17], i1797[18], 0, i1796, 'IdleEngineEffect')
  request.r(i1797[19], i1797[20], 0, i1796, 'RightDriftEffect')
  request.r(i1797[21], i1797[22], 0, i1796, 'LeftDriftEffect')
  request.r(i1797[23], i1797[24], 0, i1796, 'audioSource')
  request.r(i1797[25], i1797[26], 0, i1796, 'StartSound')
  request.r(i1797[27], i1797[28], 0, i1796, 'WiperSound')
  request.r(i1797[29], i1797[30], 0, i1796, 'IdleEngineSound')
  request.r(i1797[31], i1797[32], 0, i1796, 'DrivingSound')
  request.r(i1797[33], i1797[34], 0, i1796, 'SpeedupSound')
  request.r(i1797[35], i1797[36], 0, i1796, 'StopSound')
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1799 = data
  request.r(i1799[0], i1799[1], 0, i1798, 'clip')
  request.r(i1799[2], i1799[3], 0, i1798, 'outputAudioMixerGroup')
  i1798.playOnAwake = !!i1799[4]
  i1798.loop = !!i1799[5]
  i1798.time = i1799[6]
  i1798.volume = i1799[7]
  i1798.pitch = i1799[8]
  i1798.enabled = !!i1799[9]
  return i1798
}

Deserializers["CheckpointManager"] = function (request, data, root) {
  var i1800 = root || request.c( 'CheckpointManager' )
  var i1801 = data
  var i1803 = i1801[0]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 2) {
  request.r(i1803[i + 0], i1803[i + 1], 2, i1802, '')
  }
  i1800.checkpoints = i1802
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1807 = data
  i1806.pivot = new pc.Vec2( i1807[0], i1807[1] )
  i1806.anchorMin = new pc.Vec2( i1807[2], i1807[3] )
  i1806.anchorMax = new pc.Vec2( i1807[4], i1807[5] )
  i1806.sizeDelta = new pc.Vec2( i1807[6], i1807[7] )
  i1806.anchoredPosition3D = new pc.Vec3( i1807[8], i1807[9], i1807[10] )
  i1806.rotation = new pc.Quat(i1807[11], i1807[12], i1807[13], i1807[14])
  i1806.scale = new pc.Vec3( i1807[15], i1807[16], i1807[17] )
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1809 = data
  i1808.enabled = !!i1809[0]
  i1808.planeDistance = i1809[1]
  i1808.referencePixelsPerUnit = i1809[2]
  i1808.isFallbackOverlay = !!i1809[3]
  i1808.renderMode = i1809[4]
  i1808.renderOrder = i1809[5]
  i1808.sortingLayerName = i1809[6]
  i1808.sortingOrder = i1809[7]
  i1808.scaleFactor = i1809[8]
  request.r(i1809[9], i1809[10], 0, i1808, 'worldCamera')
  i1808.overrideSorting = !!i1809[11]
  i1808.pixelPerfect = !!i1809[12]
  i1808.targetDisplay = i1809[13]
  i1808.overridePixelPerfect = !!i1809[14]
  return i1808
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1811 = data
  i1810.m_UiScaleMode = i1811[0]
  i1810.m_ReferencePixelsPerUnit = i1811[1]
  i1810.m_ScaleFactor = i1811[2]
  i1810.m_ReferenceResolution = new pc.Vec2( i1811[3], i1811[4] )
  i1810.m_ScreenMatchMode = i1811[5]
  i1810.m_MatchWidthOrHeight = i1811[6]
  i1810.m_PhysicalUnit = i1811[7]
  i1810.m_FallbackScreenDPI = i1811[8]
  i1810.m_DefaultSpriteDPI = i1811[9]
  i1810.m_DynamicPixelsPerUnit = i1811[10]
  i1810.m_PresetInfoIsWorld = !!i1811[11]
  return i1810
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1813 = data
  i1812.m_IgnoreReversedGraphics = !!i1813[0]
  i1812.m_BlockingObjects = i1813[1]
  i1812.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1813[2] )
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1815 = data
  i1814.cullTransparentMesh = !!i1815[0]
  return i1814
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1816 = root || request.c( 'UnityEngine.UI.Image' )
  var i1817 = data
  request.r(i1817[0], i1817[1], 0, i1816, 'm_Sprite')
  i1816.m_Type = i1817[2]
  i1816.m_PreserveAspect = !!i1817[3]
  i1816.m_FillCenter = !!i1817[4]
  i1816.m_FillMethod = i1817[5]
  i1816.m_FillAmount = i1817[6]
  i1816.m_FillClockwise = !!i1817[7]
  i1816.m_FillOrigin = i1817[8]
  i1816.m_UseSpriteMesh = !!i1817[9]
  i1816.m_PixelsPerUnitMultiplier = i1817[10]
  request.r(i1817[11], i1817[12], 0, i1816, 'm_Material')
  i1816.m_Maskable = !!i1817[13]
  i1816.m_Color = new pc.Color(i1817[14], i1817[15], i1817[16], i1817[17])
  i1816.m_RaycastTarget = !!i1817[18]
  i1816.m_RaycastPadding = new pc.Vec4( i1817[19], i1817[20], i1817[21], i1817[22] )
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1819 = data
  i1818.m_Alpha = i1819[0]
  i1818.m_Interactable = !!i1819[1]
  i1818.m_BlocksRaycasts = !!i1819[2]
  i1818.m_IgnoreParentGroups = !!i1819[3]
  i1818.enabled = !!i1819[4]
  return i1818
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1820 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1821 = data
  i1820.m_hasFontAssetChanged = !!i1821[0]
  request.r(i1821[1], i1821[2], 0, i1820, 'm_baseMaterial')
  i1820.m_maskOffset = new pc.Vec4( i1821[3], i1821[4], i1821[5], i1821[6] )
  i1820.m_text = i1821[7]
  i1820.m_isRightToLeft = !!i1821[8]
  request.r(i1821[9], i1821[10], 0, i1820, 'm_fontAsset')
  request.r(i1821[11], i1821[12], 0, i1820, 'm_sharedMaterial')
  var i1823 = i1821[13]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 2) {
  request.r(i1823[i + 0], i1823[i + 1], 2, i1822, '')
  }
  i1820.m_fontSharedMaterials = i1822
  request.r(i1821[14], i1821[15], 0, i1820, 'm_fontMaterial')
  var i1825 = i1821[16]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 2) {
  request.r(i1825[i + 0], i1825[i + 1], 2, i1824, '')
  }
  i1820.m_fontMaterials = i1824
  i1820.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1821[17], i1821[18], i1821[19], i1821[20])
  i1820.m_fontColor = new pc.Color(i1821[21], i1821[22], i1821[23], i1821[24])
  i1820.m_enableVertexGradient = !!i1821[25]
  i1820.m_colorMode = i1821[26]
  i1820.m_fontColorGradient = request.d('TMPro.VertexGradient', i1821[27], i1820.m_fontColorGradient)
  request.r(i1821[28], i1821[29], 0, i1820, 'm_fontColorGradientPreset')
  request.r(i1821[30], i1821[31], 0, i1820, 'm_spriteAsset')
  i1820.m_tintAllSprites = !!i1821[32]
  request.r(i1821[33], i1821[34], 0, i1820, 'm_StyleSheet')
  i1820.m_TextStyleHashCode = i1821[35]
  i1820.m_overrideHtmlColors = !!i1821[36]
  i1820.m_faceColor = UnityEngine.Color32.ConstructColor(i1821[37], i1821[38], i1821[39], i1821[40])
  i1820.m_fontSize = i1821[41]
  i1820.m_fontSizeBase = i1821[42]
  i1820.m_fontWeight = i1821[43]
  i1820.m_enableAutoSizing = !!i1821[44]
  i1820.m_fontSizeMin = i1821[45]
  i1820.m_fontSizeMax = i1821[46]
  i1820.m_fontStyle = i1821[47]
  i1820.m_HorizontalAlignment = i1821[48]
  i1820.m_VerticalAlignment = i1821[49]
  i1820.m_textAlignment = i1821[50]
  i1820.m_characterSpacing = i1821[51]
  i1820.m_wordSpacing = i1821[52]
  i1820.m_lineSpacing = i1821[53]
  i1820.m_lineSpacingMax = i1821[54]
  i1820.m_paragraphSpacing = i1821[55]
  i1820.m_charWidthMaxAdj = i1821[56]
  i1820.m_enableWordWrapping = !!i1821[57]
  i1820.m_wordWrappingRatios = i1821[58]
  i1820.m_overflowMode = i1821[59]
  request.r(i1821[60], i1821[61], 0, i1820, 'm_linkedTextComponent')
  request.r(i1821[62], i1821[63], 0, i1820, 'parentLinkedComponent')
  i1820.m_enableKerning = !!i1821[64]
  i1820.m_enableExtraPadding = !!i1821[65]
  i1820.checkPaddingRequired = !!i1821[66]
  i1820.m_isRichText = !!i1821[67]
  i1820.m_parseCtrlCharacters = !!i1821[68]
  i1820.m_isOrthographic = !!i1821[69]
  i1820.m_isCullingEnabled = !!i1821[70]
  i1820.m_horizontalMapping = i1821[71]
  i1820.m_verticalMapping = i1821[72]
  i1820.m_uvLineOffset = i1821[73]
  i1820.m_geometrySortingOrder = i1821[74]
  i1820.m_IsTextObjectScaleStatic = !!i1821[75]
  i1820.m_VertexBufferAutoSizeReduction = !!i1821[76]
  i1820.m_useMaxVisibleDescender = !!i1821[77]
  i1820.m_pageToDisplay = i1821[78]
  i1820.m_margin = new pc.Vec4( i1821[79], i1821[80], i1821[81], i1821[82] )
  i1820.m_isUsingLegacyAnimationComponent = !!i1821[83]
  i1820.m_isVolumetricText = !!i1821[84]
  request.r(i1821[85], i1821[86], 0, i1820, 'm_Material')
  i1820.m_Maskable = !!i1821[87]
  i1820.m_Color = new pc.Color(i1821[88], i1821[89], i1821[90], i1821[91])
  i1820.m_RaycastTarget = !!i1821[92]
  i1820.m_RaycastPadding = new pc.Vec4( i1821[93], i1821[94], i1821[95], i1821[96] )
  return i1820
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1826 = root || request.c( 'TMPro.VertexGradient' )
  var i1827 = data
  i1826.topLeft = new pc.Color(i1827[0], i1827[1], i1827[2], i1827[3])
  i1826.topRight = new pc.Color(i1827[4], i1827[5], i1827[6], i1827[7])
  i1826.bottomLeft = new pc.Color(i1827[8], i1827[9], i1827[10], i1827[11])
  i1826.bottomRight = new pc.Color(i1827[12], i1827[13], i1827[14], i1827[15])
  return i1826
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1828 = root || request.c( 'UnityEngine.UI.Button' )
  var i1829 = data
  i1828.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1829[0], i1828.m_OnClick)
  i1828.m_Navigation = request.d('UnityEngine.UI.Navigation', i1829[1], i1828.m_Navigation)
  i1828.m_Transition = i1829[2]
  i1828.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1829[3], i1828.m_Colors)
  i1828.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1829[4], i1828.m_SpriteState)
  i1828.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1829[5], i1828.m_AnimationTriggers)
  i1828.m_Interactable = !!i1829[6]
  request.r(i1829[7], i1829[8], 0, i1828, 'm_TargetGraphic')
  return i1828
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1830 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1831 = data
  i1830.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1831[0], i1830.m_PersistentCalls)
  return i1830
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1832 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1833 = data
  var i1835 = i1833[0]
  var i1834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.add(request.d('UnityEngine.Events.PersistentCall', i1835[i + 0]));
  }
  i1832.m_Calls = i1834
  return i1832
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1838 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1839 = data
  request.r(i1839[0], i1839[1], 0, i1838, 'm_Target')
  i1838.m_TargetAssemblyTypeName = i1839[2]
  i1838.m_MethodName = i1839[3]
  i1838.m_Mode = i1839[4]
  i1838.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1839[5], i1838.m_Arguments)
  i1838.m_CallState = i1839[6]
  return i1838
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1840 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1841 = data
  request.r(i1841[0], i1841[1], 0, i1840, 'm_ObjectArgument')
  i1840.m_ObjectArgumentAssemblyTypeName = i1841[2]
  i1840.m_IntArgument = i1841[3]
  i1840.m_FloatArgument = i1841[4]
  i1840.m_StringArgument = i1841[5]
  i1840.m_BoolArgument = !!i1841[6]
  return i1840
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1842 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1843 = data
  i1842.m_Mode = i1843[0]
  i1842.m_WrapAround = !!i1843[1]
  request.r(i1843[2], i1843[3], 0, i1842, 'm_SelectOnUp')
  request.r(i1843[4], i1843[5], 0, i1842, 'm_SelectOnDown')
  request.r(i1843[6], i1843[7], 0, i1842, 'm_SelectOnLeft')
  request.r(i1843[8], i1843[9], 0, i1842, 'm_SelectOnRight')
  return i1842
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1844 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1845 = data
  i1844.m_NormalColor = new pc.Color(i1845[0], i1845[1], i1845[2], i1845[3])
  i1844.m_HighlightedColor = new pc.Color(i1845[4], i1845[5], i1845[6], i1845[7])
  i1844.m_PressedColor = new pc.Color(i1845[8], i1845[9], i1845[10], i1845[11])
  i1844.m_SelectedColor = new pc.Color(i1845[12], i1845[13], i1845[14], i1845[15])
  i1844.m_DisabledColor = new pc.Color(i1845[16], i1845[17], i1845[18], i1845[19])
  i1844.m_ColorMultiplier = i1845[20]
  i1844.m_FadeDuration = i1845[21]
  return i1844
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'm_HighlightedSprite')
  request.r(i1847[2], i1847[3], 0, i1846, 'm_PressedSprite')
  request.r(i1847[4], i1847[5], 0, i1846, 'm_SelectedSprite')
  request.r(i1847[6], i1847[7], 0, i1846, 'm_DisabledSprite')
  return i1846
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1848 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1849 = data
  i1848.m_NormalTrigger = i1849[0]
  i1848.m_HighlightedTrigger = i1849[1]
  i1848.m_PressedTrigger = i1849[2]
  i1848.m_SelectedTrigger = i1849[3]
  i1848.m_DisabledTrigger = i1849[4]
  return i1848
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.UI.Text' )
  var i1851 = data
  i1850.m_FontData = request.d('UnityEngine.UI.FontData', i1851[0], i1850.m_FontData)
  i1850.m_Text = i1851[1]
  request.r(i1851[2], i1851[3], 0, i1850, 'm_Material')
  i1850.m_Maskable = !!i1851[4]
  i1850.m_Color = new pc.Color(i1851[5], i1851[6], i1851[7], i1851[8])
  i1850.m_RaycastTarget = !!i1851[9]
  i1850.m_RaycastPadding = new pc.Vec4( i1851[10], i1851[11], i1851[12], i1851[13] )
  return i1850
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1853 = data
  request.r(i1853[0], i1853[1], 0, i1852, 'm_Font')
  i1852.m_FontSize = i1853[2]
  i1852.m_FontStyle = i1853[3]
  i1852.m_BestFit = !!i1853[4]
  i1852.m_MinSize = i1853[5]
  i1852.m_MaxSize = i1853[6]
  i1852.m_Alignment = i1853[7]
  i1852.m_AlignByGeometry = !!i1853[8]
  i1852.m_RichText = !!i1853[9]
  i1852.m_HorizontalOverflow = i1853[10]
  i1852.m_VerticalOverflow = i1853[11]
  i1852.m_LineSpacing = i1853[12]
  return i1852
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1854 = root || request.c( 'UIManager' )
  var i1855 = data
  var i1857 = i1855[0]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 2) {
  request.r(i1857[i + 0], i1857[i + 1], 2, i1856, '')
  }
  i1854.Cars = i1856
  request.r(i1855[1], i1855[2], 0, i1854, 'Menu')
  request.r(i1855[3], i1855[4], 0, i1854, 'Scene')
  request.r(i1855[5], i1855[6], 0, i1854, 'cameraSequence')
  request.r(i1855[7], i1855[8], 0, i1854, 'countdownText')
  i1854.timeBetweenCounts = i1855[9]
  request.r(i1855[10], i1855[11], 0, i1854, 'barFill')
  i1854.fillDuration = i1855[12]
  i1854.shrinkDuration = i1855[13]
  request.r(i1855[14], i1855[15], 0, i1854, 'playerCarController')
  request.r(i1855[16], i1855[17], 0, i1854, 'roundText')
  i1854.totalLaps = i1855[18]
  request.r(i1855[19], i1855[20], 0, i1854, 'startBtn')
  request.r(i1855[21], i1855[22], 0, i1854, 'retryBtn')
  request.r(i1855[23], i1855[24], 0, i1854, 'nextBtn')
  return i1854
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1860 = root || request.c( 'GameManager' )
  var i1861 = data
  var i1863 = i1861[0]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 2) {
  request.r(i1863[i + 0], i1863[i + 1], 2, i1862, '')
  }
  i1860.seasonEffectArray = i1862
  var i1865 = i1861[1]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 2) {
  request.r(i1865[i + 0], i1865[i + 1], 2, i1864, '')
  }
  i1860.speedUpEffectArray = i1864
  request.r(i1861[2], i1861[3], 0, i1860, 'mapRenderer')
  var i1867 = i1861[4]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 2) {
  request.r(i1867[i + 0], i1867[i + 1], 2, i1866, '')
  }
  i1860.seasonMaterialArray = i1866
  var i1869 = i1861[5]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 2) {
  request.r(i1869[i + 0], i1869[i + 1], 2, i1868, '')
  }
  i1860.playerCarArray = i1868
  request.r(i1861[6], i1861[7], 0, i1860, 'playerCarController')
  var i1871 = i1861[8]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 2) {
  request.r(i1871[i + 0], i1871[i + 1], 2, i1870, '')
  }
  i1860.carAIArray = i1870
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1873 = data
  i1872.ambientIntensity = i1873[0]
  i1872.reflectionIntensity = i1873[1]
  i1872.ambientMode = i1873[2]
  i1872.ambientLight = new pc.Color(i1873[3], i1873[4], i1873[5], i1873[6])
  i1872.ambientSkyColor = new pc.Color(i1873[7], i1873[8], i1873[9], i1873[10])
  i1872.ambientGroundColor = new pc.Color(i1873[11], i1873[12], i1873[13], i1873[14])
  i1872.ambientEquatorColor = new pc.Color(i1873[15], i1873[16], i1873[17], i1873[18])
  i1872.fogColor = new pc.Color(i1873[19], i1873[20], i1873[21], i1873[22])
  i1872.fogEndDistance = i1873[23]
  i1872.fogStartDistance = i1873[24]
  i1872.fogDensity = i1873[25]
  i1872.fog = !!i1873[26]
  request.r(i1873[27], i1873[28], 0, i1872, 'skybox')
  i1872.fogMode = i1873[29]
  var i1875 = i1873[30]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1875[i + 0]) );
  }
  i1872.lightmaps = i1874
  i1872.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1873[31], i1872.lightProbes)
  i1872.lightmapsMode = i1873[32]
  i1872.mixedBakeMode = i1873[33]
  i1872.environmentLightingMode = i1873[34]
  i1872.ambientProbe = new pc.SphericalHarmonicsL2(i1873[35])
  i1872.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1873[36])
  i1872.useReferenceAmbientProbe = !!i1873[37]
  request.r(i1873[38], i1873[39], 0, i1872, 'customReflection')
  request.r(i1873[40], i1873[41], 0, i1872, 'defaultReflection')
  i1872.defaultReflectionMode = i1873[42]
  i1872.defaultReflectionResolution = i1873[43]
  i1872.sunLightObjectId = i1873[44]
  i1872.pixelLightCount = i1873[45]
  i1872.defaultReflectionHDR = !!i1873[46]
  i1872.hasLightDataAsset = !!i1873[47]
  i1872.hasManualGenerate = !!i1873[48]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1879 = data
  request.r(i1879[0], i1879[1], 0, i1878, 'lightmapColor')
  request.r(i1879[2], i1879[3], 0, i1878, 'lightmapDirection')
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1880 = root || new UnityEngine.LightProbes()
  var i1881 = data
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i1889 = data
  i1888.name = i1889[0]
  i1888.bounciness = i1889[1]
  i1888.dynamicFriction = i1889[2]
  i1888.staticFriction = i1889[3]
  i1888.frictionCombine = i1889[4]
  i1888.bounceCombine = i1889[5]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1891 = data
  var i1893 = i1891[0]
  var i1892 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1893[i + 0]));
  }
  i1890.ShaderCompilationErrors = i1892
  i1890.name = i1891[1]
  i1890.guid = i1891[2]
  var i1895 = i1891[3]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( i1895[i + 0] );
  }
  i1890.shaderDefinedKeywords = i1894
  var i1897 = i1891[4]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1897[i + 0]) );
  }
  i1890.passes = i1896
  var i1899 = i1891[5]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1899[i + 0]) );
  }
  i1890.usePasses = i1898
  var i1901 = i1891[6]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1901[i + 0]) );
  }
  i1890.defaultParameterValues = i1900
  request.r(i1891[7], i1891[8], 0, i1890, 'unityFallbackShader')
  i1890.readDepth = !!i1891[9]
  i1890.isCreatedByShaderGraph = !!i1891[10]
  i1890.compiled = !!i1891[11]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1905 = data
  i1904.shaderName = i1905[0]
  i1904.errorMessage = i1905[1]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1910 = root || new pc.UnityShaderPass()
  var i1911 = data
  i1910.id = i1911[0]
  i1910.subShaderIndex = i1911[1]
  i1910.name = i1911[2]
  i1910.passType = i1911[3]
  i1910.grabPassTextureName = i1911[4]
  i1910.usePass = !!i1911[5]
  i1910.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1911[6], i1910.zTest)
  i1910.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1911[7], i1910.zWrite)
  i1910.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1911[8], i1910.culling)
  i1910.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1911[9], i1910.blending)
  i1910.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1911[10], i1910.alphaBlending)
  i1910.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1911[11], i1910.colorWriteMask)
  i1910.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1911[12], i1910.offsetUnits)
  i1910.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1911[13], i1910.offsetFactor)
  i1910.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1911[14], i1910.stencilRef)
  i1910.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1911[15], i1910.stencilReadMask)
  i1910.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1911[16], i1910.stencilWriteMask)
  i1910.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1911[17], i1910.stencilOp)
  i1910.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1911[18], i1910.stencilOpFront)
  i1910.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1911[19], i1910.stencilOpBack)
  var i1913 = i1911[20]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1913[i + 0]) );
  }
  i1910.tags = i1912
  var i1915 = i1911[21]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( i1915[i + 0] );
  }
  i1910.passDefinedKeywords = i1914
  var i1917 = i1911[22]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1917[i + 0]) );
  }
  i1910.passDefinedKeywordGroups = i1916
  var i1919 = i1911[23]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1919[i + 0]) );
  }
  i1910.variants = i1918
  var i1921 = i1911[24]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1921[i + 0]) );
  }
  i1910.excludedVariants = i1920
  i1910.hasDepthReader = !!i1911[25]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1923 = data
  i1922.val = i1923[0]
  i1922.name = i1923[1]
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1925 = data
  i1924.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1925[0], i1924.src)
  i1924.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1925[1], i1924.dst)
  i1924.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1925[2], i1924.op)
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1927 = data
  i1926.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1927[0], i1926.pass)
  i1926.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1927[1], i1926.fail)
  i1926.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1927[2], i1926.zFail)
  i1926.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1927[3], i1926.comp)
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1931 = data
  i1930.name = i1931[0]
  i1930.value = i1931[1]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1935 = data
  var i1937 = i1935[0]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( i1937[i + 0] );
  }
  i1934.keywords = i1936
  i1934.hasDiscard = !!i1935[1]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1941 = data
  i1940.passId = i1941[0]
  i1940.subShaderIndex = i1941[1]
  var i1943 = i1941[2]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( i1943[i + 0] );
  }
  i1940.keywords = i1942
  i1940.vertexProgram = i1941[3]
  i1940.fragmentProgram = i1941[4]
  i1940.exportedForWebGl2 = !!i1941[5]
  i1940.readDepth = !!i1941[6]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'shader')
  i1946.pass = i1947[2]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1951 = data
  i1950.name = i1951[0]
  i1950.type = i1951[1]
  i1950.value = new pc.Vec4( i1951[2], i1951[3], i1951[4], i1951[5] )
  i1950.textureValue = i1951[6]
  i1950.shaderPropertyFlag = i1951[7]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1953 = data
  i1952.name = i1953[0]
  request.r(i1953[1], i1953[2], 0, i1952, 'texture')
  i1952.aabb = i1953[3]
  i1952.vertices = i1953[4]
  i1952.triangles = i1953[5]
  i1952.textureRect = UnityEngine.Rect.MinMaxRect(i1953[6], i1953[7], i1953[8], i1953[9])
  i1952.packedRect = UnityEngine.Rect.MinMaxRect(i1953[10], i1953[11], i1953[12], i1953[13])
  i1952.border = new pc.Vec4( i1953[14], i1953[15], i1953[16], i1953[17] )
  i1952.transparency = i1953[18]
  i1952.bounds = i1953[19]
  i1952.pixelsPerUnit = i1953[20]
  i1952.textureWidth = i1953[21]
  i1952.textureHeight = i1953[22]
  i1952.nativeSize = new pc.Vec2( i1953[23], i1953[24] )
  i1952.pivot = new pc.Vec2( i1953[25], i1953[26] )
  i1952.textureRectOffset = new pc.Vec2( i1953[27], i1953[28] )
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1955 = data
  i1954.name = i1955[0]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1957 = data
  i1956.name = i1957[0]
  i1956.ascent = i1957[1]
  i1956.originalLineHeight = i1957[2]
  i1956.fontSize = i1957[3]
  var i1959 = i1957[4]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1959[i + 0]) );
  }
  i1956.characterInfo = i1958
  request.r(i1957[5], i1957[6], 0, i1956, 'texture')
  i1956.originalFontSize = i1957[7]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1963 = data
  i1962.index = i1963[0]
  i1962.advance = i1963[1]
  i1962.bearing = i1963[2]
  i1962.glyphWidth = i1963[3]
  i1962.glyphHeight = i1963[4]
  i1962.minX = i1963[5]
  i1962.maxX = i1963[6]
  i1962.minY = i1963[7]
  i1962.maxY = i1963[8]
  i1962.uvBottomLeftX = i1963[9]
  i1962.uvBottomLeftY = i1963[10]
  i1962.uvBottomRightX = i1963[11]
  i1962.uvBottomRightY = i1963[12]
  i1962.uvTopLeftX = i1963[13]
  i1962.uvTopLeftY = i1963[14]
  i1962.uvTopRightX = i1963[15]
  i1962.uvTopRightY = i1963[16]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1965 = data
  i1964.name = i1965[0]
  i1964.bytes64 = i1965[1]
  i1964.data = i1965[2]
  return i1964
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1966 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1967 = data
  i1966.hashCode = i1967[0]
  request.r(i1967[1], i1967[2], 0, i1966, 'material')
  i1966.materialHashCode = i1967[3]
  request.r(i1967[4], i1967[5], 0, i1966, 'atlas')
  i1966.normalStyle = i1967[6]
  i1966.normalSpacingOffset = i1967[7]
  i1966.boldStyle = i1967[8]
  i1966.boldSpacing = i1967[9]
  i1966.italicStyle = i1967[10]
  i1966.tabSize = i1967[11]
  i1966.m_Version = i1967[12]
  i1966.m_SourceFontFileGUID = i1967[13]
  request.r(i1967[14], i1967[15], 0, i1966, 'm_SourceFontFile_EditorRef')
  request.r(i1967[16], i1967[17], 0, i1966, 'm_SourceFontFile')
  i1966.m_AtlasPopulationMode = i1967[18]
  i1966.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1967[19], i1966.m_FaceInfo)
  var i1969 = i1967[20]
  var i1968 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.add(request.d('UnityEngine.TextCore.Glyph', i1969[i + 0]));
  }
  i1966.m_GlyphTable = i1968
  var i1971 = i1967[21]
  var i1970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.add(request.d('TMPro.TMP_Character', i1971[i + 0]));
  }
  i1966.m_CharacterTable = i1970
  var i1973 = i1967[22]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 2) {
  request.r(i1973[i + 0], i1973[i + 1], 2, i1972, '')
  }
  i1966.m_AtlasTextures = i1972
  i1966.m_AtlasTextureIndex = i1967[23]
  i1966.m_IsMultiAtlasTexturesEnabled = !!i1967[24]
  i1966.m_ClearDynamicDataOnBuild = !!i1967[25]
  var i1975 = i1967[26]
  var i1974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.add(request.d('UnityEngine.TextCore.GlyphRect', i1975[i + 0]));
  }
  i1966.m_UsedGlyphRects = i1974
  var i1977 = i1967[27]
  var i1976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.add(request.d('UnityEngine.TextCore.GlyphRect', i1977[i + 0]));
  }
  i1966.m_FreeGlyphRects = i1976
  i1966.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1967[28], i1966.m_fontInfo)
  i1966.m_AtlasWidth = i1967[29]
  i1966.m_AtlasHeight = i1967[30]
  i1966.m_AtlasPadding = i1967[31]
  i1966.m_AtlasRenderMode = i1967[32]
  var i1979 = i1967[33]
  var i1978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.add(request.d('TMPro.TMP_Glyph', i1979[i + 0]));
  }
  i1966.m_glyphInfoList = i1978
  i1966.m_KerningTable = request.d('TMPro.KerningTable', i1967[34], i1966.m_KerningTable)
  i1966.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1967[35], i1966.m_FontFeatureTable)
  var i1981 = i1967[36]
  var i1980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1981.length; i += 2) {
  request.r(i1981[i + 0], i1981[i + 1], 1, i1980, '')
  }
  i1966.fallbackFontAssets = i1980
  var i1983 = i1967[37]
  var i1982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1983.length; i += 2) {
  request.r(i1983[i + 0], i1983[i + 1], 1, i1982, '')
  }
  i1966.m_FallbackFontAssetTable = i1982
  i1966.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1967[38], i1966.m_CreationSettings)
  var i1985 = i1967[39]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('TMPro.TMP_FontWeightPair', i1985[i + 0]) );
  }
  i1966.m_FontWeightTable = i1984
  var i1987 = i1967[40]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('TMPro.TMP_FontWeightPair', i1987[i + 0]) );
  }
  i1966.fontWeights = i1986
  return i1966
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1989 = data
  i1988.m_FaceIndex = i1989[0]
  i1988.m_FamilyName = i1989[1]
  i1988.m_StyleName = i1989[2]
  i1988.m_PointSize = i1989[3]
  i1988.m_Scale = i1989[4]
  i1988.m_UnitsPerEM = i1989[5]
  i1988.m_LineHeight = i1989[6]
  i1988.m_AscentLine = i1989[7]
  i1988.m_CapLine = i1989[8]
  i1988.m_MeanLine = i1989[9]
  i1988.m_Baseline = i1989[10]
  i1988.m_DescentLine = i1989[11]
  i1988.m_SuperscriptOffset = i1989[12]
  i1988.m_SuperscriptSize = i1989[13]
  i1988.m_SubscriptOffset = i1989[14]
  i1988.m_SubscriptSize = i1989[15]
  i1988.m_UnderlineOffset = i1989[16]
  i1988.m_UnderlineThickness = i1989[17]
  i1988.m_StrikethroughOffset = i1989[18]
  i1988.m_StrikethroughThickness = i1989[19]
  i1988.m_TabWidth = i1989[20]
  return i1988
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1993 = data
  i1992.m_Index = i1993[0]
  i1992.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1993[1], i1992.m_Metrics)
  i1992.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1993[2], i1992.m_GlyphRect)
  i1992.m_Scale = i1993[3]
  i1992.m_AtlasIndex = i1993[4]
  i1992.m_ClassDefinitionType = i1993[5]
  return i1992
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1995 = data
  i1994.m_Width = i1995[0]
  i1994.m_Height = i1995[1]
  i1994.m_HorizontalBearingX = i1995[2]
  i1994.m_HorizontalBearingY = i1995[3]
  i1994.m_HorizontalAdvance = i1995[4]
  return i1994
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1997 = data
  i1996.m_X = i1997[0]
  i1996.m_Y = i1997[1]
  i1996.m_Width = i1997[2]
  i1996.m_Height = i1997[3]
  return i1996
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2000 = root || request.c( 'TMPro.TMP_Character' )
  var i2001 = data
  i2000.m_ElementType = i2001[0]
  i2000.m_Unicode = i2001[1]
  i2000.m_GlyphIndex = i2001[2]
  i2000.m_Scale = i2001[3]
  return i2000
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2006 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2007 = data
  i2006.Name = i2007[0]
  i2006.PointSize = i2007[1]
  i2006.Scale = i2007[2]
  i2006.CharacterCount = i2007[3]
  i2006.LineHeight = i2007[4]
  i2006.Baseline = i2007[5]
  i2006.Ascender = i2007[6]
  i2006.CapHeight = i2007[7]
  i2006.Descender = i2007[8]
  i2006.CenterLine = i2007[9]
  i2006.SuperscriptOffset = i2007[10]
  i2006.SubscriptOffset = i2007[11]
  i2006.SubSize = i2007[12]
  i2006.Underline = i2007[13]
  i2006.UnderlineThickness = i2007[14]
  i2006.strikethrough = i2007[15]
  i2006.strikethroughThickness = i2007[16]
  i2006.TabWidth = i2007[17]
  i2006.Padding = i2007[18]
  i2006.AtlasWidth = i2007[19]
  i2006.AtlasHeight = i2007[20]
  return i2006
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2010 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2011 = data
  i2010.id = i2011[0]
  i2010.x = i2011[1]
  i2010.y = i2011[2]
  i2010.width = i2011[3]
  i2010.height = i2011[4]
  i2010.xOffset = i2011[5]
  i2010.yOffset = i2011[6]
  i2010.xAdvance = i2011[7]
  i2010.scale = i2011[8]
  return i2010
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2012 = root || request.c( 'TMPro.KerningTable' )
  var i2013 = data
  var i2015 = i2013[0]
  var i2014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.add(request.d('TMPro.KerningPair', i2015[i + 0]));
  }
  i2012.kerningPairs = i2014
  return i2012
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2018 = root || request.c( 'TMPro.KerningPair' )
  var i2019 = data
  i2018.xOffset = i2019[0]
  i2018.m_FirstGlyph = i2019[1]
  i2018.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2019[2], i2018.m_FirstGlyphAdjustments)
  i2018.m_SecondGlyph = i2019[3]
  i2018.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2019[4], i2018.m_SecondGlyphAdjustments)
  i2018.m_IgnoreSpacingAdjustments = !!i2019[5]
  return i2018
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2020 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2021 = data
  var i2023 = i2021[0]
  var i2022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2023[i + 0]));
  }
  i2020.m_GlyphPairAdjustmentRecords = i2022
  return i2020
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2026 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2027 = data
  i2026.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2027[0], i2026.m_FirstAdjustmentRecord)
  i2026.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2027[1], i2026.m_SecondAdjustmentRecord)
  i2026.m_FeatureLookupFlags = i2027[2]
  return i2026
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2028 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2029 = data
  i2028.m_GlyphIndex = i2029[0]
  i2028.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2029[1], i2028.m_GlyphValueRecord)
  return i2028
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2030 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2031 = data
  i2030.m_XPlacement = i2031[0]
  i2030.m_YPlacement = i2031[1]
  i2030.m_XAdvance = i2031[2]
  i2030.m_YAdvance = i2031[3]
  return i2030
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2034 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2035 = data
  i2034.sourceFontFileName = i2035[0]
  i2034.sourceFontFileGUID = i2035[1]
  i2034.pointSizeSamplingMode = i2035[2]
  i2034.pointSize = i2035[3]
  i2034.padding = i2035[4]
  i2034.packingMode = i2035[5]
  i2034.atlasWidth = i2035[6]
  i2034.atlasHeight = i2035[7]
  i2034.characterSetSelectionMode = i2035[8]
  i2034.characterSequence = i2035[9]
  i2034.referencedFontAssetGUID = i2035[10]
  i2034.referencedTextAssetGUID = i2035[11]
  i2034.fontStyle = i2035[12]
  i2034.fontStyleModifier = i2035[13]
  i2034.renderMode = i2035[14]
  i2034.includeFontFeatures = !!i2035[15]
  return i2034
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2038 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2039 = data
  request.r(i2039[0], i2039[1], 0, i2038, 'regularTypeface')
  request.r(i2039[2], i2039[3], 0, i2038, 'italicTypeface')
  return i2038
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2040 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2041 = data
  i2040.useSafeMode = !!i2041[0]
  i2040.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2041[1], i2040.safeModeOptions)
  i2040.timeScale = i2041[2]
  i2040.unscaledTimeScale = i2041[3]
  i2040.useSmoothDeltaTime = !!i2041[4]
  i2040.maxSmoothUnscaledTime = i2041[5]
  i2040.rewindCallbackMode = i2041[6]
  i2040.showUnityEditorReport = !!i2041[7]
  i2040.logBehaviour = i2041[8]
  i2040.drawGizmos = !!i2041[9]
  i2040.defaultRecyclable = !!i2041[10]
  i2040.defaultAutoPlay = i2041[11]
  i2040.defaultUpdateType = i2041[12]
  i2040.defaultTimeScaleIndependent = !!i2041[13]
  i2040.defaultEaseType = i2041[14]
  i2040.defaultEaseOvershootOrAmplitude = i2041[15]
  i2040.defaultEasePeriod = i2041[16]
  i2040.defaultAutoKill = !!i2041[17]
  i2040.defaultLoopType = i2041[18]
  i2040.debugMode = !!i2041[19]
  i2040.debugStoreTargetId = !!i2041[20]
  i2040.showPreviewPanel = !!i2041[21]
  i2040.storeSettingsLocation = i2041[22]
  i2040.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2041[23], i2040.modules)
  i2040.createASMDEF = !!i2041[24]
  i2040.showPlayingTweens = !!i2041[25]
  i2040.showPausedTweens = !!i2041[26]
  return i2040
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2042 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2043 = data
  i2042.logBehaviour = i2043[0]
  i2042.nestedTweenFailureBehaviour = i2043[1]
  return i2042
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2044 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2045 = data
  i2044.showPanel = !!i2045[0]
  i2044.audioEnabled = !!i2045[1]
  i2044.physicsEnabled = !!i2045[2]
  i2044.physics2DEnabled = !!i2045[3]
  i2044.spriteEnabled = !!i2045[4]
  i2044.uiEnabled = !!i2045[5]
  i2044.textMeshProEnabled = !!i2045[6]
  i2044.tk2DEnabled = !!i2045[7]
  i2044.deAudioEnabled = !!i2045[8]
  i2044.deUnityExtendedEnabled = !!i2045[9]
  i2044.epoOutlineEnabled = !!i2045[10]
  return i2044
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2046 = root || request.c( 'TMPro.TMP_Settings' )
  var i2047 = data
  i2046.m_enableWordWrapping = !!i2047[0]
  i2046.m_enableKerning = !!i2047[1]
  i2046.m_enableExtraPadding = !!i2047[2]
  i2046.m_enableTintAllSprites = !!i2047[3]
  i2046.m_enableParseEscapeCharacters = !!i2047[4]
  i2046.m_EnableRaycastTarget = !!i2047[5]
  i2046.m_GetFontFeaturesAtRuntime = !!i2047[6]
  i2046.m_missingGlyphCharacter = i2047[7]
  i2046.m_warningsDisabled = !!i2047[8]
  request.r(i2047[9], i2047[10], 0, i2046, 'm_defaultFontAsset')
  i2046.m_defaultFontAssetPath = i2047[11]
  i2046.m_defaultFontSize = i2047[12]
  i2046.m_defaultAutoSizeMinRatio = i2047[13]
  i2046.m_defaultAutoSizeMaxRatio = i2047[14]
  i2046.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2047[15], i2047[16] )
  i2046.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2047[17], i2047[18] )
  i2046.m_autoSizeTextContainer = !!i2047[19]
  i2046.m_IsTextObjectScaleStatic = !!i2047[20]
  var i2049 = i2047[21]
  var i2048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2049.length; i += 2) {
  request.r(i2049[i + 0], i2049[i + 1], 1, i2048, '')
  }
  i2046.m_fallbackFontAssets = i2048
  i2046.m_matchMaterialPreset = !!i2047[22]
  request.r(i2047[23], i2047[24], 0, i2046, 'm_defaultSpriteAsset')
  i2046.m_defaultSpriteAssetPath = i2047[25]
  i2046.m_enableEmojiSupport = !!i2047[26]
  i2046.m_MissingCharacterSpriteUnicode = i2047[27]
  i2046.m_defaultColorGradientPresetsPath = i2047[28]
  request.r(i2047[29], i2047[30], 0, i2046, 'm_defaultStyleSheet')
  i2046.m_StyleSheetsResourcePath = i2047[31]
  request.r(i2047[32], i2047[33], 0, i2046, 'm_leadingCharacters')
  request.r(i2047[34], i2047[35], 0, i2046, 'm_followingCharacters')
  i2046.m_UseModernHangulLineBreakingRules = !!i2047[36]
  return i2046
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2050 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2051 = data
  i2050.hashCode = i2051[0]
  request.r(i2051[1], i2051[2], 0, i2050, 'material')
  i2050.materialHashCode = i2051[3]
  request.r(i2051[4], i2051[5], 0, i2050, 'spriteSheet')
  var i2053 = i2051[6]
  var i2052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.add(request.d('TMPro.TMP_Sprite', i2053[i + 0]));
  }
  i2050.spriteInfoList = i2052
  var i2055 = i2051[7]
  var i2054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2055.length; i += 2) {
  request.r(i2055[i + 0], i2055[i + 1], 1, i2054, '')
  }
  i2050.fallbackSpriteAssets = i2054
  i2050.m_Version = i2051[8]
  i2050.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2051[9], i2050.m_FaceInfo)
  var i2057 = i2051[10]
  var i2056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.add(request.d('TMPro.TMP_SpriteCharacter', i2057[i + 0]));
  }
  i2050.m_SpriteCharacterTable = i2056
  var i2059 = i2051[11]
  var i2058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.add(request.d('TMPro.TMP_SpriteGlyph', i2059[i + 0]));
  }
  i2050.m_SpriteGlyphTable = i2058
  return i2050
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2062 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2063 = data
  i2062.name = i2063[0]
  i2062.hashCode = i2063[1]
  i2062.unicode = i2063[2]
  i2062.pivot = new pc.Vec2( i2063[3], i2063[4] )
  request.r(i2063[5], i2063[6], 0, i2062, 'sprite')
  i2062.id = i2063[7]
  i2062.x = i2063[8]
  i2062.y = i2063[9]
  i2062.width = i2063[10]
  i2062.height = i2063[11]
  i2062.xOffset = i2063[12]
  i2062.yOffset = i2063[13]
  i2062.xAdvance = i2063[14]
  i2062.scale = i2063[15]
  return i2062
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2068 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2069 = data
  i2068.m_Name = i2069[0]
  i2068.m_HashCode = i2069[1]
  i2068.m_ElementType = i2069[2]
  i2068.m_Unicode = i2069[3]
  i2068.m_GlyphIndex = i2069[4]
  i2068.m_Scale = i2069[5]
  return i2068
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2072 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2073 = data
  request.r(i2073[0], i2073[1], 0, i2072, 'sprite')
  i2072.m_Index = i2073[2]
  i2072.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2073[3], i2072.m_Metrics)
  i2072.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2073[4], i2072.m_GlyphRect)
  i2072.m_Scale = i2073[5]
  i2072.m_AtlasIndex = i2073[6]
  i2072.m_ClassDefinitionType = i2073[7]
  return i2072
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2074 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2075 = data
  var i2077 = i2075[0]
  var i2076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.add(request.d('TMPro.TMP_Style', i2077[i + 0]));
  }
  i2074.m_StyleList = i2076
  return i2074
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2080 = root || request.c( 'TMPro.TMP_Style' )
  var i2081 = data
  i2080.m_Name = i2081[0]
  i2080.m_HashCode = i2081[1]
  i2080.m_OpeningDefinition = i2081[2]
  i2080.m_ClosingDefinition = i2081[3]
  i2080.m_OpeningTagArray = i2081[4]
  i2080.m_ClosingTagArray = i2081[5]
  i2080.m_OpeningTagUnicodeArray = i2081[6]
  i2080.m_ClosingTagUnicodeArray = i2081[7]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2083 = data
  var i2085 = i2083[0]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2085[i + 0]) );
  }
  i2082.files = i2084
  i2082.componentToPrefabIds = i2083[1]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2089 = data
  i2088.path = i2089[0]
  request.r(i2089[1], i2089[2], 0, i2088, 'unityObject')
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2091 = data
  var i2093 = i2091[0]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2093[i + 0]) );
  }
  i2090.scriptsExecutionOrder = i2092
  var i2095 = i2091[1]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2095[i + 0]) );
  }
  i2090.sortingLayers = i2094
  var i2097 = i2091[2]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2097[i + 0]) );
  }
  i2090.cullingLayers = i2096
  i2090.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2091[3], i2090.timeSettings)
  i2090.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2091[4], i2090.physicsSettings)
  i2090.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2091[5], i2090.physics2DSettings)
  i2090.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2091[6], i2090.qualitySettings)
  i2090.enableRealtimeShadows = !!i2091[7]
  i2090.enableAutoInstancing = !!i2091[8]
  i2090.enableDynamicBatching = !!i2091[9]
  i2090.lightmapEncodingQuality = i2091[10]
  i2090.desiredColorSpace = i2091[11]
  var i2099 = i2091[12]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( i2099[i + 0] );
  }
  i2090.allTags = i2098
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2103 = data
  i2102.name = i2103[0]
  i2102.value = i2103[1]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2107 = data
  i2106.id = i2107[0]
  i2106.name = i2107[1]
  i2106.value = i2107[2]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2111 = data
  i2110.id = i2111[0]
  i2110.name = i2111[1]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2113 = data
  i2112.fixedDeltaTime = i2113[0]
  i2112.maximumDeltaTime = i2113[1]
  i2112.timeScale = i2113[2]
  i2112.maximumParticleTimestep = i2113[3]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2115 = data
  i2114.gravity = new pc.Vec3( i2115[0], i2115[1], i2115[2] )
  i2114.defaultSolverIterations = i2115[3]
  i2114.bounceThreshold = i2115[4]
  i2114.autoSyncTransforms = !!i2115[5]
  i2114.autoSimulation = !!i2115[6]
  var i2117 = i2115[7]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2117[i + 0]) );
  }
  i2114.collisionMatrix = i2116
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2121 = data
  i2120.enabled = !!i2121[0]
  i2120.layerId = i2121[1]
  i2120.otherLayerId = i2121[2]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'material')
  i2122.gravity = new pc.Vec2( i2123[2], i2123[3] )
  i2122.positionIterations = i2123[4]
  i2122.velocityIterations = i2123[5]
  i2122.velocityThreshold = i2123[6]
  i2122.maxLinearCorrection = i2123[7]
  i2122.maxAngularCorrection = i2123[8]
  i2122.maxTranslationSpeed = i2123[9]
  i2122.maxRotationSpeed = i2123[10]
  i2122.baumgarteScale = i2123[11]
  i2122.baumgarteTOIScale = i2123[12]
  i2122.timeToSleep = i2123[13]
  i2122.linearSleepTolerance = i2123[14]
  i2122.angularSleepTolerance = i2123[15]
  i2122.defaultContactOffset = i2123[16]
  i2122.autoSimulation = !!i2123[17]
  i2122.queriesHitTriggers = !!i2123[18]
  i2122.queriesStartInColliders = !!i2123[19]
  i2122.callbacksOnDisable = !!i2123[20]
  i2122.reuseCollisionCallbacks = !!i2123[21]
  i2122.autoSyncTransforms = !!i2123[22]
  var i2125 = i2123[23]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2125[i + 0]) );
  }
  i2122.collisionMatrix = i2124
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2129 = data
  i2128.enabled = !!i2129[0]
  i2128.layerId = i2129[1]
  i2128.otherLayerId = i2129[2]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2131 = data
  var i2133 = i2131[0]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2133[i + 0]) );
  }
  i2130.qualityLevels = i2132
  var i2135 = i2131[1]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( i2135[i + 0] );
  }
  i2130.names = i2134
  i2130.shadows = i2131[2]
  i2130.anisotropicFiltering = i2131[3]
  i2130.antiAliasing = i2131[4]
  i2130.lodBias = i2131[5]
  i2130.shadowCascades = i2131[6]
  i2130.shadowDistance = i2131[7]
  i2130.shadowmaskMode = i2131[8]
  i2130.shadowProjection = i2131[9]
  i2130.shadowResolution = i2131[10]
  i2130.softParticles = !!i2131[11]
  i2130.softVegetation = !!i2131[12]
  i2130.activeColorSpace = i2131[13]
  i2130.desiredColorSpace = i2131[14]
  i2130.masterTextureLimit = i2131[15]
  i2130.maxQueuedFrames = i2131[16]
  i2130.particleRaycastBudget = i2131[17]
  i2130.pixelLightCount = i2131[18]
  i2130.realtimeReflectionProbes = !!i2131[19]
  i2130.shadowCascade2Split = i2131[20]
  i2130.shadowCascade4Split = new pc.Vec3( i2131[21], i2131[22], i2131[23] )
  i2130.streamingMipmapsActive = !!i2131[24]
  i2130.vSyncCount = i2131[25]
  i2130.asyncUploadBufferSize = i2131[26]
  i2130.asyncUploadTimeSlice = i2131[27]
  i2130.billboardsFaceCameraPosition = !!i2131[28]
  i2130.shadowNearPlaneOffset = i2131[29]
  i2130.streamingMipmapsMemoryBudget = i2131[30]
  i2130.maximumLODLevel = i2131[31]
  i2130.streamingMipmapsAddAllCameras = !!i2131[32]
  i2130.streamingMipmapsMaxLevelReduction = i2131[33]
  i2130.streamingMipmapsRenderersPerFrame = i2131[34]
  i2130.resolutionScalingFixedDPIFactor = i2131[35]
  i2130.streamingMipmapsMaxFileIORequests = i2131[36]
  i2130.currentQualityLevel = i2131[37]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2141 = data
  i2140.weight = i2141[0]
  i2140.vertices = i2141[1]
  i2140.normals = i2141[2]
  i2140.tangents = i2141[3]
  return i2140
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2142 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2143 = data
  i2142.xPlacement = i2143[0]
  i2142.yPlacement = i2143[1]
  i2142.xAdvance = i2143[2]
  i2142.yAdvance = i2143[3]
  return i2142
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.WheelCollider":{"enabled":0,"center":1,"radius":4,"mass":5,"suspensionDistance":6,"forceAppPointDistance":7,"suspensionSpring":8,"forwardFriction":9,"sidewaysFriction":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[14],"61":[1],"62":[1],"63":[1],"64":[1],"65":[1],"66":[1],"67":[1],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[69],"77":[69],"78":[69],"79":[69],"80":[69],"81":[69],"82":[14],"83":[4],"84":[85],"86":[85],"32":[31],"87":[31],"88":[31],"34":[32],"36":[35,31],"89":[31],"33":[32],"90":[31],"91":[31],"92":[31],"93":[31],"94":[31],"95":[31],"96":[31],"97":[31],"98":[31],"99":[35,31],"100":[31],"101":[31],"102":[31],"103":[31],"42":[35,31],"104":[31],"105":[21],"106":[21],"22":[21],"107":[21],"108":[14],"109":[14],"110":[31],"111":[4,31],"38":[31,35],"112":[31],"113":[35,31],"114":[4],"115":[35,31],"116":[31],"117":[118],"119":[118],"120":[14],"121":[122],"123":[118]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.WheelCollider","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Light","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","SmoothFollowCamera","CameraSequence","UnityEngine.CanvasGroup","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AICarController","CheckpointManager","UnityEngine.GameObject","UnityEngine.CharacterController","PlayerCarController","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.PhysicMaterial","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","UIManager","UnityEngine.UI.Text","UnityEngine.Font","GameManager","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "INDIEZ";

Deserializers.lunaInitializationTime = "04/29/2025 09:21:16";

Deserializers.lunaDaysRunning = "7.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "First-Playable-Ads";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1877";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4305";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.INDIEZ";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "cd72fd1c-5c4c-4f9a-b3f4-0e85ea5abdb7";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

