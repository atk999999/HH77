
(function() {
  var enums = {
    USAGE_STATIC: 35044,
    USAGE_DYNAMIC: 35048,
    USAGE_STREAM: 35040,
    INDEX_FMT_UINT8: 5121,
    INDEX_FMT_UINT16: 5123,
    INDEX_FMT_UINT32: 5125,
    ATTR_POSITION: 'a_position',
    ATTR_NORMAL: 'a_normal',
    ATTR_TANGENT: 'a_tangent',
    ATTR_BITANGENT: 'a_bitangent',
    ATTR_WEIGHTS: 'a_weights',
    ATTR_JOINTS: 'a_joints',
    ATTR_COLOR: 'a_color',
    ATTR_COLOR0: 'a_color0',
    ATTR_COLOR1: 'a_color1',
    ATTR_UV: 'a_uv',
    ATTR_UV0: 'a_uv0',
    ATTR_UV1: 'a_uv1',
    ATTR_UV2: 'a_uv2',
    ATTR_UV3: 'a_uv3',
    ATTR_UV4: 'a_uv4',
    ATTR_UV5: 'a_uv5',
    ATTR_UV6: 'a_uv6',
    ATTR_UV7: 'a_uv7',
    ATTR_TEX_COORD: 'a_texCoord',
    ATTR_TEX_COORD1: 'a_texCoord1',
    ATTR_TEX_COORD2: 'a_texCoord2',
    ATTR_TEX_COORD3: 'a_texCoord3',
    ATTR_TEX_COORD4: 'a_texCoord4',
    ATTR_TEX_COORD5: 'a_texCoord5',
    ATTR_TEX_COORD6: 'a_texCoord6',
    ATTR_TEX_COORD7: 'a_texCoord7',
    ATTR_TEX_COORD8: 'a_texCoord8',
    ATTR_TYPE_INT8: 5120,
    ATTR_TYPE_UINT8: 5121,
    ATTR_TYPE_INT16: 5122,
    ATTR_TYPE_UINT16: 5123,
    ATTR_TYPE_INT32: 5124,
    ATTR_TYPE_UINT32: 5125,
    ATTR_TYPE_FLOAT32: 5126,
    FILTER_NEAREST: 0,
    FILTER_LINEAR: 1,
    WRAP_REPEAT: 10497,
    WRAP_CLAMP: 33071,
    WRAP_MIRROR: 33648,
    TEXTURE_FMT_RGB_DXT1: 0,
    TEXTURE_FMT_RGBA_DXT1: 1,
    TEXTURE_FMT_RGBA_DXT3: 2,
    TEXTURE_FMT_RGBA_DXT5: 3,
    TEXTURE_FMT_RGB_ETC1: 4,
    TEXTURE_FMT_RGB_PVRTC_2BPPV1: 5,
    TEXTURE_FMT_RGBA_PVRTC_2BPPV1: 6,
    TEXTURE_FMT_RGB_PVRTC_4BPPV1: 7,
    TEXTURE_FMT_RGBA_PVRTC_4BPPV1: 8,
    TEXTURE_FMT_A8: 9,
    TEXTURE_FMT_L8: 10,
    TEXTURE_FMT_L8_A8: 11,
    TEXTURE_FMT_R5_G6_B5: 12,
    TEXTURE_FMT_R5_G5_B5_A1: 13,
    TEXTURE_FMT_R4_G4_B4_A4: 14,
    TEXTURE_FMT_RGB8: 15,
    TEXTURE_FMT_RGBA8: 16,
    TEXTURE_FMT_RGB16F: 17,
    TEXTURE_FMT_RGBA16F: 18,
    TEXTURE_FMT_RGB32F: 19,
    TEXTURE_FMT_RGBA32F: 20,
    TEXTURE_FMT_R32F: 21,
    TEXTURE_FMT_111110F: 22,
    TEXTURE_FMT_SRGB: 23,
    TEXTURE_FMT_SRGBA: 24,
    TEXTURE_FMT_D16: 25,
    TEXTURE_FMT_D32: 26,
    TEXTURE_FMT_D24S8: 27,
    TEXTURE_FMT_RGB_ETC2: 28,
    TEXTURE_FMT_RGBA_ETC2: 29,
    TEXTURE_FMT_RGBA_ASTC_4X4: 30,
    TEXTURE_FMT_RGBA_ASTC_5X4: 31,
    TEXTURE_FMT_RGBA_ASTC_5X5: 32,
    TEXTURE_FMT_RGBA_ASTC_6X5: 33,
    TEXTURE_FMT_RGBA_ASTC_6X6: 34,
    TEXTURE_FMT_RGBA_ASTC_8X5: 35,
    TEXTURE_FMT_RGBA_ASTC_8X6: 36,
    TEXTURE_FMT_RGBA_ASTC_8X8: 37,
    TEXTURE_FMT_RGBA_ASTC_10X5: 38,
    TEXTURE_FMT_RGBA_ASTC_10X6: 39,
    TEXTURE_FMT_RGBA_ASTC_10X8: 40,
    TEXTURE_FMT_RGBA_ASTC_10X10: 41,
    TEXTURE_FMT_RGBA_ASTC_12X10: 42,
    TEXTURE_FMT_RGBA_ASTC_12X12: 43,
    DS_FUNC_NEVER: 512,
    DS_FUNC_LESS: 513,
    DS_FUNC_EQUAL: 514,
    DS_FUNC_LEQUAL: 515,
    DS_FUNC_GREATER: 516,
    DS_FUNC_NOTEQUAL: 517,
    DS_FUNC_GEQUAL: 518,
    DS_FUNC_ALWAYS: 519,
    RB_FMT_RGBA4: 32854,
    RB_FMT_RGB5_A1: 32855,
    RB_FMT_RGB565: 36194,
    RB_FMT_D16: 33189,
    RB_FMT_S8: 36168,
    RB_FMT_D24S8: 34041,
    BLEND_FUNC_ADD: 32774,
    BLEND_FUNC_SUBTRACT: 32778,
    BLEND_FUNC_REVERSE_SUBTRACT: 32779,
    BLEND_ZERO: 0,
    BLEND_ONE: 1,
    BLEND_SRC_COLOR: 768,
    BLEND_ONE_MINUS_SRC_COLOR: 769,
    BLEND_DST_COLOR: 774,
    BLEND_ONE_MINUS_DST_COLOR: 775,
    BLEND_SRC_ALPHA: 770,
    BLEND_ONE_MINUS_SRC_ALPHA: 771,
    BLEND_DST_ALPHA: 772,
    BLEND_ONE_MINUS_DST_ALPHA: 773,
    BLEND_CONSTANT_COLOR: 32769,
    BLEND_ONE_MINUS_CONSTANT_COLOR: 32770,
    BLEND_CONSTANT_ALPHA: 32771,
    BLEND_ONE_MINUS_CONSTANT_ALPHA: 32772,
    BLEND_SRC_ALPHA_SATURATE: 776,
    STENCIL_DISABLE: 0,
    STENCIL_ENABLE: 1,
    STENCIL_INHERIT: 2,
    STENCIL_OP_KEEP: 7680,
    STENCIL_OP_ZERO: 0,
    STENCIL_OP_REPLACE: 7681,
    STENCIL_OP_INCR: 7682,
    STENCIL_OP_INCR_WRAP: 34055,
    STENCIL_OP_DECR: 7683,
    STENCIL_OP_DECR_WRAP: 34056,
    STENCIL_OP_INVERT: 5386,
    CULL_NONE: 0,
    CULL_FRONT: 1028,
    CULL_BACK: 1029,
    CULL_FRONT_AND_BACK: 1032,
    PT_POINTS: 0,
    PT_LINES: 1,
    PT_LINE_LOOP: 2,
    PT_LINE_STRIP: 3,
    PT_TRIANGLES: 4,
    PT_TRIANGLE_STRIP: 5,
    PT_TRIANGLE_FAN: 6
  };

  function attrTypeBytes(attrType) {
    if (attrType === enums.ATTR_TYPE_INT8 || attrType === enums.ATTR_TYPE_UINT8) return 1;
    if (attrType === enums.ATTR_TYPE_INT16 || attrType === enums.ATTR_TYPE_UINT16) return 2;
    if (attrType === enums.ATTR_TYPE_INT32 || attrType === enums.ATTR_TYPE_UINT32 || attrType === enums.ATTR_TYPE_FLOAT32) return 4;
    return 4;
  }

  function VertexFormat(infos) {
    this._attr2el = {};
    this._elements = [];
    this._bytes = 0;
    var offset = 0;
    if (infos) {
      for (var i = 0; i < infos.length; ++i) {
        var info = infos[i];
        var el = {
          name: info.name,
          offset: offset,
          stride: 0,
          stream: -1,
          type: info.type,
          num: info.num,
          normalize: info.normalize === undefined ? false : info.normalize,
          bytes: info.num * attrTypeBytes(info.type)
        };
        this._attr2el[el.name] = el;
        this._elements.push(el);
        this._bytes += el.bytes;
        offset += el.bytes;
      }
      for (var j = 0; j < this._elements.length; ++j) {
        this._elements[j].stride = this._bytes;
      }
    }
  }
  VertexFormat.prototype.element = function(attrName) {
    return this._attr2el[attrName];
  };
  VertexFormat.prototype.getElement = function(index) {
    return this._elements[index];
  };

  var _deviceInstance = null;
  function Device(canvas, opts) {
    this._gl = null;
    this._caps = {
      maxVextexTextures: 16,
      maxFragUniforms: 1024,
      maxTextureUints: 8,
      maxVertexAttributes: 16,
      maxDrawBuffers: 8,
      maxColorAttatchments: 8
    };
    this._stats = { drawcalls: 0, vb: 0 };
    if (canvas) this.init(canvas, opts);
  }
  Device.prototype.init = function(canvas, opts) {
    opts = opts || { stencil: true, alpha: false, antialias: true, premultipliedAlpha: false };
    try {
      this._gl = canvas.getContext('webgl', opts) || canvas.getContext('experimental-webgl', opts);
    } catch (e) {}
  };
  Device.prototype.ext = function(name) {
    return this._gl ? this._gl.getExtension(name) : null;
  };
  Device.prototype.resetDrawCalls = function() {
    this._stats.drawcalls = 0;
  };
  Device.prototype.getDrawCalls = function() {
    return this._stats.drawcalls;
  };
  Device.prototype.setViewport = function(x, y, w, h) {
    if (this._gl) this._gl.viewport(x, y, w, h);
  };
  Device.prototype.setBlendColor32 = function() {};
  Device.getInstance = function() {
    if (!_deviceInstance) _deviceInstance = new Device();
    return _deviceInstance;
  };

  var _texId = 0;
  function Texture2D(device, options) {
    this._device = device || Device.getInstance();
    this._id = ++_texId;
    this._width = (options && options.width) || 4;
    this._height = (options && options.height) || 4;
    this._glTex = null;
    this._image = null;
    this._alphaAtlas = false;
    this._wrapS = enums.WRAP_CLAMP;
    this._wrapT = enums.WRAP_CLAMP;
    this._minFilter = enums.FILTER_LINEAR;
    this._magFilter = enums.FILTER_LINEAR;
    this._flipY = false;
    this._premultiplyAlpha = false;
    if (options) this.update(options);
  }
  Texture2D.prototype.getId = function() { return this._id; };
  Texture2D.prototype.setAlphaAtlas = function(v) { this._alphaAtlas = v; };
  Texture2D.prototype.destroy = function() {
    var gl = this._device && this._device._gl;
    if (gl && this._glTex) {
      gl.deleteTexture(this._glTex);
      this._glTex = null;
    }
  };
  Texture2D.prototype.update = function(options) {
    if (!options) return;
    if (options.width) this._width = options.width;
    if (options.height) this._height = options.height;
    if (options.wrapS !== undefined) this._wrapS = options.wrapS;
    if (options.wrapT !== undefined) this._wrapT = options.wrapT;
    if (options.minFilter !== undefined) this._minFilter = options.minFilter;
    if (options.magFilter !== undefined) this._magFilter = options.magFilter;
    if (options.flipY !== undefined) this._flipY = options.flipY;
    if (options.premultiplyAlpha !== undefined) this._premultiplyAlpha = options.premultiplyAlpha;
    var img = (options.images && options.images[0]) || options.image;
    if (img !== undefined) this._image = img;

    var gl = this._device && this._device._gl;
    if (!gl) return;
    if (!this._glTex) this._glTex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this._glTex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !!this._flipY);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!this._premultiplyAlpha);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._wrapS || gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._wrapT || gl.CLAMP_TO_EDGE);
    var minF = (this._minFilter === enums.FILTER_NEAREST) ? gl.NEAREST : gl.LINEAR;
    var magF = (this._magFilter === enums.FILTER_NEAREST) ? gl.NEAREST : gl.LINEAR;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minF);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magF);

    if (this._image && (this._image instanceof HTMLImageElement || this._image instanceof HTMLCanvasElement || (window.ImageBitmap && this._image instanceof ImageBitmap))) {
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._image);
      } catch (e) {}
    } else if (this._image && ArrayBuffer.isView(this._image)) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this._width, this._height, 0, gl.RGBA, gl.UNSIGNED_BYTE, this._image);
    } else if (options.images && options.images[0] === null) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this._width, this._height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    }
    gl.bindTexture(gl.TEXTURE_2D, null);
  };
  Texture2D.prototype.updateSubImage = function(option) {
    var gl = this._device && this._device._gl;
    if (!gl || !option || !option.image) return;
    if (!this._glTex) {
      this._glTex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this._glTex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this._width, this._height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    } else {
      gl.bindTexture(gl.TEXTURE_2D, this._glTex);
    }
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !!option.flipY);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!option.premultiplyAlpha);
    try {
      if (ArrayBuffer.isView(option.image)) {
        gl.texSubImage2D(gl.TEXTURE_2D, 0, option.x, option.y, option.width, option.height, gl.RGBA, gl.UNSIGNED_BYTE, option.image);
      } else {
        gl.texSubImage2D(gl.TEXTURE_2D, 0, option.x, option.y, gl.RGBA, gl.UNSIGNED_BYTE, option.image);
      }
    } catch (e) {}
    gl.bindTexture(gl.TEXTURE_2D, null);
  };

  function VertexBuffer(device, format, usage, data, numVertices) {
    this._device = device || Device.getInstance();
    this._format = format;
    this._usage = usage;
    this._bytes = format ? format._bytes : 20;
    this.count = numVertices || 0;
    this._glBuf = null;
    this._data = null;
    if (data && data.byteLength > 0) this.update(0, data);
  }
  VertexBuffer.prototype.update = function(offset, data) {
    this._data = data;
    var gl = this._device && this._device._gl;
    if (!gl || !data) return;
    if (!this._glBuf) this._glBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this._glBuf);
    gl.bufferData(gl.ARRAY_BUFFER, data, this._usage || gl.DYNAMIC_DRAW);
  };
  VertexBuffer.prototype.destroy = function() {
    var gl = this._device && this._device._gl;
    if (gl && this._glBuf) {
      gl.deleteBuffer(this._glBuf);
      this._glBuf = null;
    }
  };

  function IndexBuffer(device, format, usage, data, numIndices) {
    this._device = device || Device.getInstance();
    this._format = format;
    this._usage = usage;
    this.count = numIndices || 0;
    this._glBuf = null;
    this._data = null;
    if (data && data.byteLength > 0) this.update(0, data);
  }
  IndexBuffer.prototype.update = function(offset, data) {
    this._data = data;
    var gl = this._device && this._device._gl;
    if (!gl || !data) return;
    if (!this._glBuf) this._glBuf = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._glBuf);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, this._usage || gl.STATIC_DRAW);
  };
  IndexBuffer.prototype.destroy = function() {
    var gl = this._device && this._device._gl;
    if (gl && this._glBuf) {
      gl.deleteBuffer(this._glBuf);
      this._glBuf = null;
    }
  };

  function FrameBuffer(device, width, height, options) {
    this._device = device;
    this._width = width;
    this._height = height;
    this._options = options;
  }
  FrameBuffer.prototype.destroy = function() {};

  function RenderBuffer(device, format, width, height) {
    this._device = device;
    this._format = format;
    this._width = width;
    this._height = height;
  }
  RenderBuffer.prototype.destroy = function() {};

  function Program(device, options) {
    this._device = device;
    this._options = options;
  }

  var gfx = Object.assign({
    VertexFormat: VertexFormat,
    Device: Device,
    Texture2D: Texture2D,
    VertexBuffer: VertexBuffer,
    IndexBuffer: IndexBuffer,
    FrameBuffer: FrameBuffer,
    RenderBuffer: RenderBuffer,
    Program: Program
  }, enums);

  window.gfx = gfx;

  // --- renderer namespace ---
  function NodeProxy() {}
  NodeProxy.prototype.init = function() {};
  NodeProxy.prototype.destroy = function() {};
  NodeProxy.prototype.updateCullingMask = function() {};
  NodeProxy.prototype.updateSkew = function() {};
  NodeProxy.prototype.updateOpacity = function() {};
  NodeProxy.prototype.updateParent = function() {};
  NodeProxy.prototype.update3DNode = function() {};
  NodeProxy.prototype.initNative = function() {};
  NodeProxy.prototype.setAssembler = function() {};
  NodeProxy.prototype.setName = function() {};

  function MemPool() {}
  MemPool.prototype.updateCommonData = function() {};
  MemPool.prototype.removeCommonData = function() {};

  function NodeMemPool() {}
  NodeMemPool.prototype.updateCommonData = function() {};
  NodeMemPool.prototype.removeCommonData = function() {};
  NodeMemPool.prototype.updateNodeData = function() {};
  NodeMemPool.prototype.removeNodeData = function() {};

  function CustomAssembler() {}
  CustomAssembler.prototype.ctor = function() {};

  function Camera() {
    this._cullingMask = 0xffffffff;
    this.cullingMask = 0xffffffff;
    this.dirty = true;
    this._node = null;
    this._color = { r: 0, g: 0, b: 0, a: 1 };
    this._clearFlags = 0;
    this._priority = 0;
    this._orthoHeight = 640;
    this._stages = ['opaque'];
  }
  Camera.prototype.setStages = function(s) { this._stages = s; };
  Camera.prototype.setFov = function(f) { this._fov = f; };
  Camera.prototype.setNear = function(n) { this._near = n; };
  Camera.prototype.setFar = function(f) { this._far = f; };
  Camera.prototype.setPriority = function(p) { this._priority = p; };
  Camera.prototype.setClearFlags = function(f) { this._clearFlags = f; };
  Camera.prototype.setColor = function(r, g, b, a) { this._color = { r: r, g: g, b: b, a: a }; };
  Camera.prototype.setNode = function(n) { this._node = n; };
  Camera.prototype.getNode = function() { return this._node; };
  Camera.prototype.setFrameBuffer = function(fb) { this._fb = fb; };
  Camera.prototype.setType = function(t) { this._type = t; };
  Camera.prototype.setRect = function(x, y, w, h) { this._rect = { x: x, y: y, w: w, h: h }; };
  Camera.prototype.setOrthoHeight = function(h) { this._orthoHeight = h; };
  Camera.prototype.getCullingMask = function() { return this.cullingMask; };
  Camera.prototype.setCullingMask = function(m) { this.cullingMask = m; this._cullingMask = m; };
  Camera.prototype.screenToWorld = function(out, screenPos, w, h) {
    out.x = screenPos.x;
    out.y = screenPos.y;
    out.z = 0;
    return out;
  };
  Camera.prototype.worldToScreen = function(out, worldPos, w, h) {
    out.x = worldPos.x;
    out.y = worldPos.y;
    out.z = 0;
    return out;
  };

  function Scene() {
    this._cameras = { _count: 0, _data: [] };
    this._models = [];
  }
  Scene.prototype.addCamera = function(cam) {
    if (this._cameras._data.indexOf(cam) < 0) {
      this._cameras._data.push(cam);
      this._cameras._count = this._cameras._data.length;
    }
  };
  Scene.prototype.removeCamera = function(cam) {
    var idx = this._cameras._data.indexOf(cam);
    if (idx >= 0) {
      this._cameras._data.splice(idx, 1);
      this._cameras._count = this._cameras._data.length;
    }
  };
  Scene.prototype.reset = function() {
    this._models.length = 0;
  };

  function ProgramLib(device) {
    this._device = device;
    this._templates = {};
    this._cache = {};
  }
  ProgramLib.prototype.define = function(prog) {
    var name = prog.name;
    var defines = prog.defines || [];
    var glsl1 = prog.glsl1 || prog;
    if (this._templates[name]) return;
    var uniforms = (prog.uniforms || []).slice();
    if (prog.samplers) {
      for (var i = 0; i < prog.samplers.length; i++) uniforms.push(prog.samplers[i]);
    }
    if (prog.blocks) {
      for (var b = 0; b < prog.blocks.length; b++) {
        var blk = prog.blocks[b];
        var members = blk.members || [];
        for (var m = 0; m < members.length; m++) {
          uniforms.push({
            defines: blk.defines || [],
            name: members[m].name,
            type: members[m].type
          });
        }
      }
    }
    this._templates[name] = {
      name: name,
      vert: glsl1.vert,
      frag: glsl1.frag,
      defines: defines,
      attributes: prog.attributes || [],
      uniforms: uniforms,
      extensions: prog.extensions || []
    };
  };
  ProgramLib.prototype.getTemplate = function(name) {
    return this._templates[name];
  };
  ProgramLib.prototype.getProgram = function(gl, pass) {
    if (!pass || !gl) return null;
    var name = pass._programName;
    var tmpl = this._templates[name];
    if (!tmpl) return null;
    var defs = pass._defines || {};
    var header = '';
    for (var i = 0; i < tmpl.defines.length; i++) {
      var dName = tmpl.defines[i].name;
      var val = defs[dName] ? 1 : 0;
      header += '#define ' + dName + ' ' + val + '\n';
    }
    var key = name + '|' + header;
    if (this._cache[key]) return this._cache[key];

    function compile(type, src) {
      var s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn('Shader compile error in ' + name + ':', gl.getShaderInfoLog(s));
      }
      return s;
    }
    var vs = compile(gl.VERTEX_SHADER, header + tmpl.vert);
    var fs = compile(gl.FRAGMENT_SHADER, header + tmpl.frag);
    var p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      console.warn('Program link error in ' + name + ':', gl.getProgramInfoLog(p));
    }
    this._cache[key] = p;
    return p;
  };

  function ModelBatcher(device, scene) {
    this._device = device;
    this._renderScene = scene;
    this.walking = false;
    this.worldMatDirty = 0;
    this.parentOpacity = 1;
    this.parentOpacityDirty = 0;
    this.cullingMask = 0;
    this._dummyNode = {
      _worldMatrix: {
        m: new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1])
      }
    };
    this._emptyMaterial = {
      getHash: function() { return ''; },
      getDefine: function() { return false; },
      getProperty: function() { return null; }
    };
    this.node = this._dummyNode;
    this.material = this._emptyMaterial;
    this._buffers = {};
    this._meshBuffer = null;
    this._buffer = null;
    this._draws = [];
    this._currentStencil = null;
  }
  ModelBatcher.prototype.init = function() {
    var vfmt = cc.gfx.VertexFormat.XY_UV_Color;
    this._meshBuffer = new cc.MeshBuffer(this, vfmt);
    this._buffer = this._meshBuffer;
    this._buffers[vfmt.name] = this._meshBuffer;
  };
  ModelBatcher.prototype.getBuffer = function(type, vfmt) {
    vfmt = vfmt || cc.gfx.VertexFormat.XY_UV_Color;
    var key = type + '_' + (vfmt.name || vfmt._bytes);
    if (!this._buffers[key]) {
      this._buffers[key] = new cc.MeshBuffer(this, vfmt);
    }
    return this._buffers[key];
  };
  ModelBatcher.prototype.reset = function() {
    if (!this._meshBuffer && cc.MeshBuffer && cc.gfx.VertexFormat.XY_UV_Color) {
      this.init();
    }
    for (var k in this._buffers) {
      this._buffers[k].reset();
    }
    this._buffer = this._meshBuffer;
    this.node = this._dummyNode;
    this.material = this._emptyMaterial;
    this.cullingMask = 0;
    this.worldMatDirty = 0;
    this.parentOpacity = 1;
    this.parentOpacityDirty = 0;
    this._draws.length = 0;
    this._currentStencil = null;
  };
  ModelBatcher.prototype._flush = function() {
    var buf = this._buffer;
    if (!buf) return;
    var count = buf.indiceOffset - buf.indiceStart;
    if (count > 0 && this.material && this.material !== this._emptyMaterial) {
      var pass = this.material.effect && this.material.effect.passes && this.material.effect.passes[0];
      var tex = this.material.getProperty ? this.material.getProperty('texture') : null;
      if (tex && tex.getImpl) tex = tex.getImpl();
      this._draws.push({
        vData: buf._vData.subarray(0, buf.byteOffset >> 2),
        iData: buf._iData.subarray(buf.indiceStart, buf.indiceOffset),
        vfmt: buf._vertexFormat,
        indiceCount: count,
        material: this.material,
        pass: pass,
        texture: tex,
        worldMatrix: (this.node && this.node._worldMatrix) ? new Float32Array(this.node._worldMatrix.m) : new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),
        stencilState: this._currentStencil ? Object.assign({}, this._currentStencil) : null
      });
      buf.forwardIndiceStartToOffset();
    }
  };
  ModelBatcher.prototype._flushIA = function(ia) {
    if (!ia || !ia._count || !this.material || this.material === this._emptyMaterial) return;
    var vb = ia._vertexBuffer;
    var ib = ia._indexBuffer;
    // Note: in GraphicsAssembler, a.uploadData() is called right after _flushIA(s.ia), so store reference to ia/vb/ib or meshbuffer
    var pass = this.material.effect && this.material.effect.passes && this.material.effect.passes[0];
    var tex = this.material.getProperty ? this.material.getProperty('texture') : null;
    if (tex && tex.getImpl) tex = tex.getImpl();
    this._draws.push({
      ia: ia,
      vb: vb,
      ib: ib,
      vfmt: vb._format,
      indiceCount: ia._count,
      material: this.material,
      pass: pass,
      texture: tex,
      worldMatrix: (this.node && this.node._worldMatrix) ? new Float32Array(this.node._worldMatrix.m) : new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),
      stencilState: this._currentStencil ? Object.assign({}, this._currentStencil) : null
    });
  };
  ModelBatcher.prototype._flushMaterial = function(mat) {
    this._flush();
    var pass = mat && mat.effect && mat.effect.passes && mat.effect.passes[0];
    if (pass) {
      if (pass._stencilTest === enums.STENCIL_ENABLE) {
        this._currentStencil = {
          enabled: true,
          func: pass._stencilFuncFront,
          ref: pass._stencilRefFront,
          mask: pass._stencilMaskFront,
          failOp: pass._stencilFailOpFront,
          zFailOp: pass._stencilZFailOpFront,
          zPassOp: pass._stencilZPassOpFront,
          writeMask: pass._stencilWriteMaskFront
        };
      } else {
        this._currentStencil = null;
      }
    }
  };
  ModelBatcher.prototype.terminate = function() {
    this._flush();
  };

  function ForwardRenderer(device, builtin) {
    this._device = device;
    this._defaultTex = builtin && builtin.defaultTexture;
    this._programLib = new ProgramLib(device);
    if (builtin && builtin.programTemplates) {
      for (var i = 0; i < builtin.programTemplates.length; i++) {
        this._programLib.define(builtin.programTemplates[i]);
      }
    }
    this._glVBuf = null;
    this._glIBuf = null;
  }
  ForwardRenderer.prototype.clear = function() {};
  ForwardRenderer.prototype.renderCamera = function(cam, scene) {
    this.render(scene, 0);
  };
  ForwardRenderer.prototype.render = function(scene, dt) {
    var gl = this._device && this._device._gl;
    var batcher = cc.renderer._handle;
    if (!gl || !batcher) return;

    var canvas = cc.game.canvas;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.stencilMask(0xff);
    gl.clearColor(0, 0, 0, 1);
    gl.clearStencil(0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);

    var W = (cc.winSize && cc.winSize.width) || canvas.width || 720;
    var H = (cc.winSize && cc.winSize.height) || canvas.height || 1280;
    var cx = W / 2, cy = H / 2, zoom = 1;
    if (cc.Camera && cc.Camera.main && cc.Camera.main.node) {
      var wm = cc.Camera.main.node._worldMatrix.m;
      cx = wm[12];
      cy = wm[13];
      zoom = cc.Camera.main.zoomRatio || 1;
    }
    var sx = (2 * zoom) / W;
    var sy = (2 * zoom) / H;
    var matViewProj = new Float32Array([
      sx, 0, 0, 0,
      0, sy, 0, 0,
      0, 0, -1, 0,
      -cx * sx, -cy * sy, 0, 1
    ]);

    if (!this._glVBuf) this._glVBuf = gl.createBuffer();
    if (!this._glIBuf) this._glIBuf = gl.createBuffer();

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);

    var draws = batcher._draws;
    for (var i = 0; i < draws.length; i++) {
      var d = draws[i];
      var pass = d.pass;
      if (!pass) continue;
      var prog = this._programLib.getProgram(gl, pass);
      if (!prog) continue;
      gl.useProgram(prog);

      var vData = d.vData || (d.vb && d.vb._data);
      var iData = d.iData || (d.ib && d.ib._data);
      if (!vData || !iData || d.indiceCount <= 0) continue;

      // Check stencil state: either pass itself is a mask writer (DS_FUNC_NEVER) or d.stencilState is active
      var isMaskWrite = (pass._stencilTest === enums.STENCIL_ENABLE && pass._stencilFuncFront === enums.DS_FUNC_NEVER);
      if (isMaskWrite) {
        gl.enable(gl.STENCIL_TEST);
        gl.colorMask(false, false, false, false);
        gl.stencilFunc(pass._stencilFuncFront, pass._stencilRefFront, pass._stencilMaskFront);
        gl.stencilOp(pass._stencilFailOpFront, pass._stencilZFailOpFront, pass._stencilZPassOpFront);
        gl.stencilMask(pass._stencilWriteMaskFront);
      } else if (d.stencilState && d.stencilState.enabled) {
        gl.enable(gl.STENCIL_TEST);
        gl.colorMask(true, true, true, true);
        gl.stencilFunc(d.stencilState.func, d.stencilState.ref, d.stencilState.mask);
        gl.stencilOp(d.stencilState.failOp, d.stencilState.zFailOp, d.stencilState.zPassOp);
        gl.stencilMask(d.stencilState.writeMask);
      } else {
        gl.disable(gl.STENCIL_TEST);
        gl.colorMask(true, true, true, true);
      }

      // Blend state
      if (pass._blend) {
        gl.enable(gl.BLEND);
        gl.blendEquationSeparate(pass._blendEq || gl.FUNC_ADD, pass._blendAlphaEq || gl.FUNC_ADD);
        gl.blendFuncSeparate(
          pass._blendSrc !== undefined ? pass._blendSrc : gl.SRC_ALPHA,
          pass._blendDst !== undefined ? pass._blendDst : gl.ONE_MINUS_SRC_ALPHA,
          pass._blendSrcAlpha !== undefined ? pass._blendSrcAlpha : gl.SRC_ALPHA,
          pass._blendDstAlpha !== undefined ? pass._blendDstAlpha : gl.ONE_MINUS_SRC_ALPHA
        );
      } else {
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      }

      // Uniforms
      var uVP = gl.getUniformLocation(prog, 'cc_matViewProj');
      if (uVP) gl.uniformMatrix4fv(uVP, false, matViewProj);
      var uW = gl.getUniformLocation(prog, 'cc_matWorld');
      if (uW && d.worldMatrix) gl.uniformMatrix4fv(uW, false, d.worldMatrix);
      var uAlpha = gl.getUniformLocation(prog, 'alphaThreshold');
      if (uAlpha) {
        var aVal = (pass._properties && pass._properties.alphaThreshold && pass._properties.alphaThreshold.value) || 0.5;
        gl.uniform1f(uAlpha, aVal);
      }

      // Texture
      var uTex = gl.getUniformLocation(prog, 'texture');
      if (uTex) {
        var texObj = d.texture || this._defaultTex;
        if (texObj && texObj._glTex) {
          gl.activeTexture(gl.TEXTURE0);
          gl.bindTexture(gl.TEXTURE_2D, texObj._glTex);
          gl.uniform1i(uTex, 0);
        }
      }

      // Buffers & Attributes
      gl.bindBuffer(gl.ARRAY_BUFFER, this._glVBuf);
      gl.bufferData(gl.ARRAY_BUFFER, vData, gl.STREAM_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._glIBuf);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, iData, gl.STREAM_DRAW);

      var els = d.vfmt ? d.vfmt._elements : [];
      for (var k = 0; k < els.length; k++) {
        var el = els[k];
        var loc = gl.getAttribLocation(prog, el.name);
        if (loc >= 0) {
          gl.enableVertexAttribArray(loc);
          gl.vertexAttribPointer(loc, el.num, el.type, !!el.normalize, el.stride, el.offset);
        }
      }

      gl.drawElements(gl.TRIANGLES, d.indiceCount, gl.UNSIGNED_SHORT, 0);
      this._device._stats.drawcalls++;

      for (var k2 = 0; k2 < els.length; k2++) {
        var loc2 = gl.getAttribLocation(prog, els[k2].name);
        if (loc2 >= 0) gl.disableVertexAttribArray(loc2);
      }
      if (isMaskWrite) {
        gl.colorMask(true, true, true, true);
      }
    }
    gl.disable(gl.STENCIL_TEST);
  };

  window.renderer = {
    NodeProxy: NodeProxy,
    MemPool: MemPool,
    NodeMemPool: NodeMemPool,
    CustomAssembler: CustomAssembler,
    Camera: Camera,
    Scene: Scene,
    ProgramLib: ProgramLib,
    ModelBatcher: ModelBatcher,
    ForwardRenderer: ForwardRenderer
  };

  // Minimal Spine runtime stub so sp.Skeleton & sp.SkeletonData load cleanly without errors
  function SpineTexture(img) { this._image = img; }
  function TextureAtlas(atlasText, textureLoader) {
    this.pages = [];
    this.regions = [];
    if (atlasText && textureLoader) {
      var lines = atlasText.split(/\r?\n/);
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line.endsWith('.png') || line.endsWith('.jpg')) {
          try { textureLoader(line); } catch (e) {}
        }
      }
    }
  }
  TextureAtlas.prototype.findRegion = function() { return null; };
  TextureAtlas.prototype.dispose = function() {};
  function AtlasAttachmentLoader(atlas) { this.atlas = atlas; }
  function SkeletonJson(loader) { this.attachmentLoader = loader; this.scale = 1; }
  SkeletonJson.prototype.readSkeletonData = function(json) {
    return { bones: [], slots: [], skins: [], events: [], animations: (json && json.animations) ? Object.keys(json.animations).map(function(k){ return { name: k, duration: 0.5 }; }) : [] };
  };
  function SkeletonBinary(loader) { this.attachmentLoader = loader; this.scale = 1; }
  SkeletonBinary.prototype.readSkeletonData = function() {
    return { bones: [], slots: [], skins: [], events: [], animations: [] };
  };
  function SpineSkeleton(data) {
    this.data = data || { bones: [], slots: [], skins: [], events: [], animations: [] };
    this.bones = [];
    this.slots = [];
    this.drawOrder = [];
    this.x = 0; this.y = 0;
    this.scaleX = 1; this.scaleY = 1;
    this.color = { r: 1, g: 1, b: 1, a: 1 };
  }
  SpineSkeleton.prototype.updateWorldTransform = function() {};
  SpineSkeleton.prototype.setToSetupPose = function() {};
  SpineSkeleton.prototype.setBonesToSetupPose = function() {};
  SpineSkeleton.prototype.setSlotsToSetupPose = function() {};
  SpineSkeleton.prototype.setSkinByName = function() {};
  SpineSkeleton.prototype.findBone = function() { return null; };
  SpineSkeleton.prototype.findSlot = function() { return null; };
  SpineSkeleton.prototype.getAttachmentByName = function() { return null; };

  function AnimationStateData(skeletonData) {
    this.skeletonData = skeletonData;
    this.defaultMix = 0;
  }
  AnimationStateData.prototype.setMix = function() {};

  function AnimationState(data) {
    this.data = data;
    this.tracks = [];
    this.listeners = [];
    this.timeScale = 1;
  }
  AnimationState.prototype.update = function() {};
  AnimationState.prototype.apply = function() {};
  AnimationState.prototype.setAnimation = function(trackIndex, animationName, loop) {
    var entry = { trackIndex: trackIndex, animation: { name: animationName, duration: 0.5 }, loop: !!loop, listener: null };
    this.tracks[trackIndex] = entry;
    return entry;
  };
  AnimationState.prototype.addAnimation = function(trackIndex, animationName, loop, delay) {
    return this.setAnimation(trackIndex, animationName, loop);
  };
  AnimationState.prototype.clearTracks = function() { this.tracks = []; };
  AnimationState.prototype.clearTrack = function(i) { this.tracks[i] = null; };
  AnimationState.prototype.addListener = function(l) { this.listeners.push(l); };

  function SkeletonClipping() {}
  SkeletonClipping.prototype.clipStart = function() {};
  SkeletonClipping.prototype.clipEndWithSlot = function() {};
  SkeletonClipping.prototype.clipEnd = function() {};
  SkeletonClipping.prototype.isClipping = function() { return false; };

  window.spine = {
    Texture: SpineTexture,
    TextureAtlas: TextureAtlas,
    AtlasAttachmentLoader: AtlasAttachmentLoader,
    SkeletonJson: SkeletonJson,
    SkeletonBinary: SkeletonBinary,
    Skeleton: SpineSkeleton,
    AnimationStateData: AnimationStateData,
    AnimationState: AnimationState,
    SkeletonClipping: SkeletonClipping,
    BlendMode: { Normal: 0, Additive: 1, Multiply: 2, Screen: 3 },
    RegionAttachment: function() {},
    MeshAttachment: function() {},
    ClippingAttachment: function() {},
    VertexEffectDelegate: function() {}
  };
})();
