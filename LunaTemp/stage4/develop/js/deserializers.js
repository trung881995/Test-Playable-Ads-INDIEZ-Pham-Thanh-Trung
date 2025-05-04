var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i244 = root || request.c( 'UnityEngine.JointSpring' )
  var i245 = data
  i244.spring = i245[0]
  i244.damper = i245[1]
  i244.targetPosition = i245[2]
  return i244
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i246 = root || request.c( 'UnityEngine.JointMotor' )
  var i247 = data
  i246.m_TargetVelocity = i247[0]
  i246.m_Force = i247[1]
  i246.m_FreeSpin = i247[2]
  return i246
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i248 = root || request.c( 'UnityEngine.JointLimits' )
  var i249 = data
  i248.m_Min = i249[0]
  i248.m_Max = i249[1]
  i248.m_Bounciness = i249[2]
  i248.m_BounceMinVelocity = i249[3]
  i248.m_ContactDistance = i249[4]
  i248.minBounce = i249[5]
  i248.maxBounce = i249[6]
  return i248
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i250 = root || request.c( 'UnityEngine.JointDrive' )
  var i251 = data
  i250.m_PositionSpring = i251[0]
  i250.m_PositionDamper = i251[1]
  i250.m_MaximumForce = i251[2]
  i250.m_UseAcceleration = i251[3]
  return i250
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i253 = data
  i252.m_Spring = i253[0]
  i252.m_Damper = i253[1]
  return i252
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i255 = data
  i254.m_Limit = i255[0]
  i254.m_Bounciness = i255[1]
  i254.m_ContactDistance = i255[2]
  return i254
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i257 = data
  i256.m_ExtremumSlip = i257[0]
  i256.m_ExtremumValue = i257[1]
  i256.m_AsymptoteSlip = i257[2]
  i256.m_AsymptoteValue = i257[3]
  i256.m_Stiffness = i257[4]
  return i256
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i259 = data
  i258.m_LowerAngle = i259[0]
  i258.m_UpperAngle = i259[1]
  return i258
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i261 = data
  i260.m_MotorSpeed = i261[0]
  i260.m_MaximumMotorTorque = i261[1]
  return i260
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i263 = data
  i262.m_DampingRatio = i263[0]
  i262.m_Frequency = i263[1]
  i262.m_Angle = i263[2]
  return i262
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i265 = data
  i264.m_LowerTranslation = i265[0]
  i264.m_UpperTranslation = i265[1]
  return i264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i267 = data
  i266.position = new pc.Vec3( i267[0], i267[1], i267[2] )
  i266.scale = new pc.Vec3( i267[3], i267[4], i267[5] )
  i266.rotation = new pc.Quat(i267[6], i267[7], i267[8], i267[9])
  return i266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i269 = data
  request.r(i269[0], i269[1], 0, i268, 'sharedMesh')
  return i268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i271 = data
  request.r(i271[0], i271[1], 0, i270, 'additionalVertexStreams')
  i270.enabled = !!i271[2]
  request.r(i271[3], i271[4], 0, i270, 'sharedMaterial')
  var i273 = i271[5]
  var i272 = []
  for(var i = 0; i < i273.length; i += 2) {
  request.r(i273[i + 0], i273[i + 1], 2, i272, '')
  }
  i270.sharedMaterials = i272
  i270.receiveShadows = !!i271[6]
  i270.shadowCastingMode = i271[7]
  i270.sortingLayerID = i271[8]
  i270.sortingOrder = i271[9]
  i270.lightmapIndex = i271[10]
  i270.lightmapSceneIndex = i271[11]
  i270.lightmapScaleOffset = new pc.Vec4( i271[12], i271[13], i271[14], i271[15] )
  i270.lightProbeUsage = i271[16]
  i270.reflectionProbeUsage = i271[17]
  return i270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i277 = data
  i276.name = i277[0]
  i276.tagId = i277[1]
  i276.enabled = !!i277[2]
  i276.isStatic = !!i277[3]
  i276.layer = i277[4]
  return i276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i279 = data
  i278.enabled = !!i279[0]
  i278.isTrigger = !!i279[1]
  request.r(i279[2], i279[3], 0, i278, 'material')
  request.r(i279[4], i279[5], 0, i278, 'sharedMesh')
  i278.convex = !!i279[6]
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i281 = data
  i280.name = i281[0]
  i280.halfPrecision = !!i281[1]
  i280.useUInt32IndexFormat = !!i281[2]
  i280.vertexCount = i281[3]
  i280.aabb = i281[4]
  var i283 = i281[5]
  var i282 = []
  for(var i = 0; i < i283.length; i += 1) {
    i282.push( !!i283[i + 0] );
  }
  i280.streams = i282
  i280.vertices = i281[6]
  var i285 = i281[7]
  var i284 = []
  for(var i = 0; i < i285.length; i += 1) {
    i284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i285[i + 0]) );
  }
  i280.subMeshes = i284
  var i287 = i281[8]
  var i286 = []
  for(var i = 0; i < i287.length; i += 16) {
    i286.push( new pc.Mat4().setData(i287[i + 0], i287[i + 1], i287[i + 2], i287[i + 3],  i287[i + 4], i287[i + 5], i287[i + 6], i287[i + 7],  i287[i + 8], i287[i + 9], i287[i + 10], i287[i + 11],  i287[i + 12], i287[i + 13], i287[i + 14], i287[i + 15]) );
  }
  i280.bindposes = i286
  var i289 = i281[9]
  var i288 = []
  for(var i = 0; i < i289.length; i += 1) {
    i288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i289[i + 0]) );
  }
  i280.blendShapes = i288
  return i280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i295 = data
  i294.triangles = i295[0]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i301 = data
  i300.name = i301[0]
  var i303 = i301[1]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i303[i + 0]) );
  }
  i300.frames = i302
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i304 = root || new pc.UnityMaterial()
  var i305 = data
  i304.name = i305[0]
  request.r(i305[1], i305[2], 0, i304, 'shader')
  i304.renderQueue = i305[3]
  i304.enableInstancing = !!i305[4]
  var i307 = i305[5]
  var i306 = []
  for(var i = 0; i < i307.length; i += 1) {
    i306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i307[i + 0]) );
  }
  i304.floatParameters = i306
  var i309 = i305[6]
  var i308 = []
  for(var i = 0; i < i309.length; i += 1) {
    i308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i309[i + 0]) );
  }
  i304.colorParameters = i308
  var i311 = i305[7]
  var i310 = []
  for(var i = 0; i < i311.length; i += 1) {
    i310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i311[i + 0]) );
  }
  i304.vectorParameters = i310
  var i313 = i305[8]
  var i312 = []
  for(var i = 0; i < i313.length; i += 1) {
    i312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i313[i + 0]) );
  }
  i304.textureParameters = i312
  var i315 = i305[9]
  var i314 = []
  for(var i = 0; i < i315.length; i += 1) {
    i314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i315[i + 0]) );
  }
  i304.materialFlags = i314
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i319 = data
  i318.name = i319[0]
  i318.value = i319[1]
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i323 = data
  i322.name = i323[0]
  i322.value = new pc.Color(i323[1], i323[2], i323[3], i323[4])
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i327 = data
  i326.name = i327[0]
  i326.value = new pc.Vec4( i327[1], i327[2], i327[3], i327[4] )
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i331 = data
  i330.name = i331[0]
  request.r(i331[1], i331[2], 0, i330, 'value')
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i335 = data
  i334.name = i335[0]
  i334.enabled = !!i335[1]
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i337 = data
  i336.name = i337[0]
  i336.width = i337[1]
  i336.height = i337[2]
  i336.mipmapCount = i337[3]
  i336.anisoLevel = i337[4]
  i336.filterMode = i337[5]
  i336.hdr = !!i337[6]
  i336.format = i337[7]
  i336.wrapMode = i337[8]
  i336.alphaIsTransparency = !!i337[9]
  i336.alphaSource = i337[10]
  i336.graphicsFormat = i337[11]
  i336.sRGBTexture = !!i337[12]
  i336.desiredColorSpace = i337[13]
  i336.wrapU = i337[14]
  i336.wrapV = i337[15]
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i339 = data
  i338.name = i339[0]
  i338.atlasId = i339[1]
  i338.mipmapCount = i339[2]
  i338.hdr = !!i339[3]
  i338.size = i339[4]
  i338.anisoLevel = i339[5]
  i338.filterMode = i339[6]
  var i341 = i339[7]
  var i340 = []
  for(var i = 0; i < i341.length; i += 4) {
    i340.push( UnityEngine.Rect.MinMaxRect(i341[i + 0], i341[i + 1], i341[i + 2], i341[i + 3]) );
  }
  i338.rects = i340
  i338.wrapU = i339[8]
  i338.wrapV = i339[9]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i345 = data
  i344.name = i345[0]
  i344.index = i345[1]
  i344.startup = !!i345[2]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i347 = data
  i346.enabled = !!i347[0]
  i346.type = i347[1]
  i346.color = new pc.Color(i347[2], i347[3], i347[4], i347[5])
  i346.cullingMask = i347[6]
  i346.intensity = i347[7]
  i346.range = i347[8]
  i346.spotAngle = i347[9]
  i346.shadows = i347[10]
  i346.shadowNormalBias = i347[11]
  i346.shadowBias = i347[12]
  i346.shadowStrength = i347[13]
  i346.shadowResolution = i347[14]
  i346.lightmapBakeType = i347[15]
  i346.renderMode = i347[16]
  request.r(i347[17], i347[18], 0, i346, 'cookie')
  i346.cookieSize = i347[19]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i349 = data
  i348.enabled = !!i349[0]
  i348.aspect = i349[1]
  i348.orthographic = !!i349[2]
  i348.orthographicSize = i349[3]
  i348.backgroundColor = new pc.Color(i349[4], i349[5], i349[6], i349[7])
  i348.nearClipPlane = i349[8]
  i348.farClipPlane = i349[9]
  i348.fieldOfView = i349[10]
  i348.depth = i349[11]
  i348.clearFlags = i349[12]
  i348.cullingMask = i349[13]
  i348.rect = i349[14]
  request.r(i349[15], i349[16], 0, i348, 'targetTexture')
  i348.usePhysicalProperties = !!i349[17]
  i348.focalLength = i349[18]
  i348.sensorSize = new pc.Vec2( i349[19], i349[20] )
  i348.lensShift = new pc.Vec2( i349[21], i349[22] )
  i348.gateFit = i349[23]
  i348.commandBufferCount = i349[24]
  i348.cameraType = i349[25]
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i351 = data
  i350.ambientIntensity = i351[0]
  i350.reflectionIntensity = i351[1]
  i350.ambientMode = i351[2]
  i350.ambientLight = new pc.Color(i351[3], i351[4], i351[5], i351[6])
  i350.ambientSkyColor = new pc.Color(i351[7], i351[8], i351[9], i351[10])
  i350.ambientGroundColor = new pc.Color(i351[11], i351[12], i351[13], i351[14])
  i350.ambientEquatorColor = new pc.Color(i351[15], i351[16], i351[17], i351[18])
  i350.fogColor = new pc.Color(i351[19], i351[20], i351[21], i351[22])
  i350.fogEndDistance = i351[23]
  i350.fogStartDistance = i351[24]
  i350.fogDensity = i351[25]
  i350.fog = !!i351[26]
  request.r(i351[27], i351[28], 0, i350, 'skybox')
  i350.fogMode = i351[29]
  var i353 = i351[30]
  var i352 = []
  for(var i = 0; i < i353.length; i += 1) {
    i352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i353[i + 0]) );
  }
  i350.lightmaps = i352
  i350.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i351[31], i350.lightProbes)
  i350.lightmapsMode = i351[32]
  i350.mixedBakeMode = i351[33]
  i350.environmentLightingMode = i351[34]
  i350.ambientProbe = new pc.SphericalHarmonicsL2(i351[35])
  i350.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i351[36])
  i350.useReferenceAmbientProbe = !!i351[37]
  request.r(i351[38], i351[39], 0, i350, 'customReflection')
  request.r(i351[40], i351[41], 0, i350, 'defaultReflection')
  i350.defaultReflectionMode = i351[42]
  i350.defaultReflectionResolution = i351[43]
  i350.sunLightObjectId = i351[44]
  i350.pixelLightCount = i351[45]
  i350.defaultReflectionHDR = !!i351[46]
  i350.hasLightDataAsset = !!i351[47]
  i350.hasManualGenerate = !!i351[48]
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i357 = data
  request.r(i357[0], i357[1], 0, i356, 'lightmapColor')
  request.r(i357[2], i357[3], 0, i356, 'lightmapDirection')
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i358 = root || new UnityEngine.LightProbes()
  var i359 = data
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i367 = data
  var i369 = i367[0]
  var i368 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i369.length; i += 1) {
    i368.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i369[i + 0]));
  }
  i366.ShaderCompilationErrors = i368
  i366.name = i367[1]
  i366.guid = i367[2]
  var i371 = i367[3]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( i371[i + 0] );
  }
  i366.shaderDefinedKeywords = i370
  var i373 = i367[4]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i373[i + 0]) );
  }
  i366.passes = i372
  var i375 = i367[5]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i375[i + 0]) );
  }
  i366.usePasses = i374
  var i377 = i367[6]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i377[i + 0]) );
  }
  i366.defaultParameterValues = i376
  request.r(i367[7], i367[8], 0, i366, 'unityFallbackShader')
  i366.readDepth = !!i367[9]
  i366.isCreatedByShaderGraph = !!i367[10]
  i366.compiled = !!i367[11]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i381 = data
  i380.shaderName = i381[0]
  i380.errorMessage = i381[1]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i386 = root || new pc.UnityShaderPass()
  var i387 = data
  i386.id = i387[0]
  i386.subShaderIndex = i387[1]
  i386.name = i387[2]
  i386.passType = i387[3]
  i386.grabPassTextureName = i387[4]
  i386.usePass = !!i387[5]
  i386.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[6], i386.zTest)
  i386.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[7], i386.zWrite)
  i386.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[8], i386.culling)
  i386.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i387[9], i386.blending)
  i386.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i387[10], i386.alphaBlending)
  i386.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[11], i386.colorWriteMask)
  i386.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[12], i386.offsetUnits)
  i386.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[13], i386.offsetFactor)
  i386.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[14], i386.stencilRef)
  i386.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[15], i386.stencilReadMask)
  i386.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[16], i386.stencilWriteMask)
  i386.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i387[17], i386.stencilOp)
  i386.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i387[18], i386.stencilOpFront)
  i386.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i387[19], i386.stencilOpBack)
  var i389 = i387[20]
  var i388 = []
  for(var i = 0; i < i389.length; i += 1) {
    i388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i389[i + 0]) );
  }
  i386.tags = i388
  var i391 = i387[21]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( i391[i + 0] );
  }
  i386.passDefinedKeywords = i390
  var i393 = i387[22]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i393[i + 0]) );
  }
  i386.passDefinedKeywordGroups = i392
  var i395 = i387[23]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i395[i + 0]) );
  }
  i386.variants = i394
  var i397 = i387[24]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i397[i + 0]) );
  }
  i386.excludedVariants = i396
  i386.hasDepthReader = !!i387[25]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i399 = data
  i398.val = i399[0]
  i398.name = i399[1]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i401 = data
  i400.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i401[0], i400.src)
  i400.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i401[1], i400.dst)
  i400.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i401[2], i400.op)
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i403 = data
  i402.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[0], i402.pass)
  i402.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[1], i402.fail)
  i402.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[2], i402.zFail)
  i402.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[3], i402.comp)
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i407 = data
  i406.name = i407[0]
  i406.value = i407[1]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i411 = data
  var i413 = i411[0]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( i413[i + 0] );
  }
  i410.keywords = i412
  i410.hasDiscard = !!i411[1]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i417 = data
  i416.passId = i417[0]
  i416.subShaderIndex = i417[1]
  var i419 = i417[2]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( i419[i + 0] );
  }
  i416.keywords = i418
  i416.vertexProgram = i417[3]
  i416.fragmentProgram = i417[4]
  i416.exportedForWebGl2 = !!i417[5]
  i416.readDepth = !!i417[6]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i423 = data
  request.r(i423[0], i423[1], 0, i422, 'shader')
  i422.pass = i423[2]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i427 = data
  i426.name = i427[0]
  i426.type = i427[1]
  i426.value = new pc.Vec4( i427[2], i427[3], i427[4], i427[5] )
  i426.textureValue = i427[6]
  i426.shaderPropertyFlag = i427[7]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i429 = data
  var i431 = i429[0]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i431[i + 0]) );
  }
  i428.files = i430
  i428.componentToPrefabIds = i429[1]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i435 = data
  i434.path = i435[0]
  request.r(i435[1], i435[2], 0, i434, 'unityObject')
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i437 = data
  var i439 = i437[0]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i439[i + 0]) );
  }
  i436.scriptsExecutionOrder = i438
  var i441 = i437[1]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i441[i + 0]) );
  }
  i436.sortingLayers = i440
  var i443 = i437[2]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i443[i + 0]) );
  }
  i436.cullingLayers = i442
  i436.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i437[3], i436.timeSettings)
  i436.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i437[4], i436.physicsSettings)
  i436.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i437[5], i436.physics2DSettings)
  i436.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i437[6], i436.qualitySettings)
  i436.enableRealtimeShadows = !!i437[7]
  i436.enableAutoInstancing = !!i437[8]
  i436.enableDynamicBatching = !!i437[9]
  i436.lightmapEncodingQuality = i437[10]
  i436.desiredColorSpace = i437[11]
  var i445 = i437[12]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( i445[i + 0] );
  }
  i436.allTags = i444
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i449 = data
  i448.name = i449[0]
  i448.value = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i453 = data
  i452.id = i453[0]
  i452.name = i453[1]
  i452.value = i453[2]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i457 = data
  i456.id = i457[0]
  i456.name = i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i459 = data
  i458.fixedDeltaTime = i459[0]
  i458.maximumDeltaTime = i459[1]
  i458.timeScale = i459[2]
  i458.maximumParticleTimestep = i459[3]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i461 = data
  i460.gravity = new pc.Vec3( i461[0], i461[1], i461[2] )
  i460.defaultSolverIterations = i461[3]
  i460.bounceThreshold = i461[4]
  i460.autoSyncTransforms = !!i461[5]
  i460.autoSimulation = !!i461[6]
  var i463 = i461[7]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i463[i + 0]) );
  }
  i460.collisionMatrix = i462
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i467 = data
  i466.enabled = !!i467[0]
  i466.layerId = i467[1]
  i466.otherLayerId = i467[2]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i469 = data
  request.r(i469[0], i469[1], 0, i468, 'material')
  i468.gravity = new pc.Vec2( i469[2], i469[3] )
  i468.positionIterations = i469[4]
  i468.velocityIterations = i469[5]
  i468.velocityThreshold = i469[6]
  i468.maxLinearCorrection = i469[7]
  i468.maxAngularCorrection = i469[8]
  i468.maxTranslationSpeed = i469[9]
  i468.maxRotationSpeed = i469[10]
  i468.baumgarteScale = i469[11]
  i468.baumgarteTOIScale = i469[12]
  i468.timeToSleep = i469[13]
  i468.linearSleepTolerance = i469[14]
  i468.angularSleepTolerance = i469[15]
  i468.defaultContactOffset = i469[16]
  i468.autoSimulation = !!i469[17]
  i468.queriesHitTriggers = !!i469[18]
  i468.queriesStartInColliders = !!i469[19]
  i468.callbacksOnDisable = !!i469[20]
  i468.reuseCollisionCallbacks = !!i469[21]
  i468.autoSyncTransforms = !!i469[22]
  var i471 = i469[23]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i471[i + 0]) );
  }
  i468.collisionMatrix = i470
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i475 = data
  i474.enabled = !!i475[0]
  i474.layerId = i475[1]
  i474.otherLayerId = i475[2]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i477 = data
  var i479 = i477[0]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i479[i + 0]) );
  }
  i476.qualityLevels = i478
  var i481 = i477[1]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( i481[i + 0] );
  }
  i476.names = i480
  i476.shadows = i477[2]
  i476.anisotropicFiltering = i477[3]
  i476.antiAliasing = i477[4]
  i476.lodBias = i477[5]
  i476.shadowCascades = i477[6]
  i476.shadowDistance = i477[7]
  i476.shadowmaskMode = i477[8]
  i476.shadowProjection = i477[9]
  i476.shadowResolution = i477[10]
  i476.softParticles = !!i477[11]
  i476.softVegetation = !!i477[12]
  i476.activeColorSpace = i477[13]
  i476.desiredColorSpace = i477[14]
  i476.masterTextureLimit = i477[15]
  i476.maxQueuedFrames = i477[16]
  i476.particleRaycastBudget = i477[17]
  i476.pixelLightCount = i477[18]
  i476.realtimeReflectionProbes = !!i477[19]
  i476.shadowCascade2Split = i477[20]
  i476.shadowCascade4Split = new pc.Vec3( i477[21], i477[22], i477[23] )
  i476.streamingMipmapsActive = !!i477[24]
  i476.vSyncCount = i477[25]
  i476.asyncUploadBufferSize = i477[26]
  i476.asyncUploadTimeSlice = i477[27]
  i476.billboardsFaceCameraPosition = !!i477[28]
  i476.shadowNearPlaneOffset = i477[29]
  i476.streamingMipmapsMemoryBudget = i477[30]
  i476.maximumLODLevel = i477[31]
  i476.streamingMipmapsAddAllCameras = !!i477[32]
  i476.streamingMipmapsMaxLevelReduction = i477[33]
  i476.streamingMipmapsRenderersPerFrame = i477[34]
  i476.resolutionScalingFixedDPIFactor = i477[35]
  i476.streamingMipmapsMaxFileIORequests = i477[36]
  i476.currentQualityLevel = i477[37]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i487 = data
  i486.weight = i487[0]
  i486.vertices = i487[1]
  i486.normals = i487[2]
  i486.tangents = i487[3]
  return i486
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"13":[14],"15":[14],"16":[14],"17":[14],"18":[14],"19":[14],"20":[21],"10":[9],"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[23],"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[31],"38":[31],"39":[31],"40":[31],"41":[31],"42":[31],"43":[31],"44":[9],"45":[3],"46":[47],"48":[47],"49":[50],"51":[50],"52":[50],"53":[49],"54":[55,50],"56":[50],"57":[49],"58":[50],"59":[50],"60":[50],"61":[50],"62":[50],"63":[50],"64":[50],"65":[50],"66":[50],"67":[55,50],"68":[50],"69":[50],"70":[50],"71":[50],"72":[55,50],"73":[50],"74":[75],"76":[75],"77":[75],"78":[75],"79":[9],"80":[9],"81":[50],"82":[3,50],"83":[50,55],"84":[50],"85":[55,50],"86":[3],"87":[55,50],"88":[50],"89":[90],"91":[90],"92":[9],"93":[94],"95":[90]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Light","UnityEngine.Camera","UnityEngine.FlareLayer","UnityEngine.AudioListener","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "INDIEZ";

Deserializers.lunaInitializationTime = "04/29/2025 09:21:16";

Deserializers.lunaDaysRunning = "5.1";

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

Deserializers.buildID = "4f48afe4-a45d-4277-a8f8-60af4c2f7dbc";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

