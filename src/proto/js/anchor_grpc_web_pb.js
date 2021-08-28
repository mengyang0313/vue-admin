/**
 * @fileoverview gRPC-Web generated client stub for pb.anchor
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var anchortype_pb = require('./anchortype_pb.js')

var usertype_pb = require('./usertype_pb.js')
const proto = {};
proto.pb = {};
proto.pb.anchor = require('./anchor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.anchor.AnchorSdkClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.anchor.AnchorSdkPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.anchor.AreaListReply>}
 */
const methodDescriptor_AnchorSdk_GetAreaList = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetAreaList',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  proto.pb.anchor.AreaListReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.AreaListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.anchor.AreaListReply>}
 */
const methodInfo_AnchorSdk_GetAreaList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.AreaListReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.AreaListReply.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.AreaListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.AreaListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getAreaList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetAreaList',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetAreaList,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.AreaListReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getAreaList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetAreaList',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetAreaList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.LoginRequest,
 *   !proto.pb.AnchorBasic>}
 */
const methodDescriptor_AnchorSdk_Login = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/Login',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.LoginRequest,
  anchortype_pb.AnchorBasic,
  /**
   * @param {!proto.pb.anchor.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  anchortype_pb.AnchorBasic.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.LoginRequest,
 *   !proto.pb.AnchorBasic>}
 */
const methodInfo_AnchorSdk_Login = new grpc.web.AbstractClientBase.MethodInfo(
  anchortype_pb.AnchorBasic,
  /**
   * @param {!proto.pb.anchor.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  anchortype_pb.AnchorBasic.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.AnchorBasic)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.AnchorBasic>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/Login',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_Login,
      callback);
};


/**
 * @param {!proto.pb.anchor.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.AnchorBasic>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/Login',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.ConfigRequest,
 *   !proto.pb.anchor.ConfigReply>}
 */
const methodDescriptor_AnchorSdk_GetConfig = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetConfig',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.ConfigRequest,
  proto.pb.anchor.ConfigReply,
  /**
   * @param {!proto.pb.anchor.ConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.ConfigReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.ConfigRequest,
 *   !proto.pb.anchor.ConfigReply>}
 */
const methodInfo_AnchorSdk_GetConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.ConfigReply,
  /**
   * @param {!proto.pb.anchor.ConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.ConfigReply.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.ConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.ConfigReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.ConfigReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetConfig',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetConfig,
      callback);
};


/**
 * @param {!proto.pb.anchor.ConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.ConfigReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetConfig',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.GiftConfigRequest,
 *   !proto.pb.anchor.GiftConfigReply>}
 */
const methodDescriptor_AnchorSdk_GetGiftConfig = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetGiftConfig',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.GiftConfigRequest,
  proto.pb.anchor.GiftConfigReply,
  /**
   * @param {!proto.pb.anchor.GiftConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.GiftConfigReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.GiftConfigRequest,
 *   !proto.pb.anchor.GiftConfigReply>}
 */
const methodInfo_AnchorSdk_GetGiftConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.GiftConfigReply,
  /**
   * @param {!proto.pb.anchor.GiftConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.GiftConfigReply.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.GiftConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.GiftConfigReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.GiftConfigReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getGiftConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetGiftConfig',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetGiftConfig,
      callback);
};


/**
 * @param {!proto.pb.anchor.GiftConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.GiftConfigReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getGiftConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetGiftConfig',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetGiftConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.anchor.BlockInfo>}
 */
const methodDescriptor_AnchorSdk_GetBlockInfo = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetBlockInfo',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  proto.pb.anchor.BlockInfo,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.BlockInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.anchor.BlockInfo>}
 */
const methodInfo_AnchorSdk_GetBlockInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.BlockInfo,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.BlockInfo.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.BlockInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.BlockInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getBlockInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetBlockInfo',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetBlockInfo,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.BlockInfo>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getBlockInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetBlockInfo',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetBlockInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.AnchorBasic>}
 */
const methodDescriptor_AnchorSdk_GetAnchorInfo = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetAnchorInfo',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  anchortype_pb.AnchorBasic,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  anchortype_pb.AnchorBasic.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.AnchorBasic>}
 */
const methodInfo_AnchorSdk_GetAnchorInfo = new grpc.web.AbstractClientBase.MethodInfo(
  anchortype_pb.AnchorBasic,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  anchortype_pb.AnchorBasic.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.AnchorBasic)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.AnchorBasic>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getAnchorInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetAnchorInfo',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetAnchorInfo,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.AnchorBasic>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getAnchorInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetAnchorInfo',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetAnchorInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.AnchorBasic,
 *   !proto.pb.AnchorBasic>}
 */
const methodDescriptor_AnchorSdk_UpdateAnchorInfo = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/UpdateAnchorInfo',
  grpc.web.MethodType.UNARY,
  anchortype_pb.AnchorBasic,
  anchortype_pb.AnchorBasic,
  /**
   * @param {!proto.pb.AnchorBasic} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  anchortype_pb.AnchorBasic.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.AnchorBasic,
 *   !proto.pb.AnchorBasic>}
 */
const methodInfo_AnchorSdk_UpdateAnchorInfo = new grpc.web.AbstractClientBase.MethodInfo(
  anchortype_pb.AnchorBasic,
  /**
   * @param {!proto.pb.AnchorBasic} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  anchortype_pb.AnchorBasic.deserializeBinary
);


/**
 * @param {!proto.pb.AnchorBasic} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.AnchorBasic)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.AnchorBasic>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.updateAnchorInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/UpdateAnchorInfo',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_UpdateAnchorInfo,
      callback);
};


/**
 * @param {!proto.pb.AnchorBasic} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.AnchorBasic>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.updateAnchorInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/UpdateAnchorInfo',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_UpdateAnchorInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.AnchorProfile,
 *   !proto.pb.AnchorProfile>}
 */
const methodDescriptor_AnchorSdk_SaveProfile = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/SaveProfile',
  grpc.web.MethodType.UNARY,
  anchortype_pb.AnchorProfile,
  anchortype_pb.AnchorProfile,
  /**
   * @param {!proto.pb.AnchorProfile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  anchortype_pb.AnchorProfile.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.AnchorProfile,
 *   !proto.pb.AnchorProfile>}
 */
const methodInfo_AnchorSdk_SaveProfile = new grpc.web.AbstractClientBase.MethodInfo(
  anchortype_pb.AnchorProfile,
  /**
   * @param {!proto.pb.AnchorProfile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  anchortype_pb.AnchorProfile.deserializeBinary
);


/**
 * @param {!proto.pb.AnchorProfile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.AnchorProfile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.AnchorProfile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.saveProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/SaveProfile',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_SaveProfile,
      callback);
};


/**
 * @param {!proto.pb.AnchorProfile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.AnchorProfile>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.saveProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/SaveProfile',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_SaveProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.UserListRequest,
 *   !proto.pb.anchor.UserListReply>}
 */
const methodDescriptor_AnchorSdk_GetUserList = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetUserList',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.UserListRequest,
  proto.pb.anchor.UserListReply,
  /**
   * @param {!proto.pb.anchor.UserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.UserListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.UserListRequest,
 *   !proto.pb.anchor.UserListReply>}
 */
const methodInfo_AnchorSdk_GetUserList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.UserListReply,
  /**
   * @param {!proto.pb.anchor.UserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.UserListReply.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.UserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.UserListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.UserListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getUserList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetUserList',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetUserList,
      callback);
};


/**
 * @param {!proto.pb.anchor.UserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.UserListReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getUserList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetUserList',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetUserList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.UserInfoRequest,
 *   !proto.pb.User>}
 */
const methodDescriptor_AnchorSdk_GetUserInfo = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetUserInfo',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.UserInfoRequest,
  usertype_pb.User,
  /**
   * @param {!proto.pb.anchor.UserInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.UserInfoRequest,
 *   !proto.pb.User>}
 */
const methodInfo_AnchorSdk_GetUserInfo = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.User,
  /**
   * @param {!proto.pb.anchor.UserInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.User.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.UserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getUserInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetUserInfo',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetUserInfo,
      callback);
};


/**
 * @param {!proto.pb.anchor.UserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.User>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getUserInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetUserInfo',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetUserInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.anchor.UserIdsReply>}
 */
const methodDescriptor_AnchorSdk_GetUserIds = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetUserIds',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  proto.pb.anchor.UserIdsReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.UserIdsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.anchor.UserIdsReply>}
 */
const methodInfo_AnchorSdk_GetUserIds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.UserIdsReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.UserIdsReply.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.UserIdsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.UserIdsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getUserIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetUserIds',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetUserIds,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.UserIdsReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getUserIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetUserIds',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetUserIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.UserRelationRequest,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_AnchorSdk_ChangeUserRelation = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/ChangeUserRelation',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.UserRelationRequest,
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.anchor.UserRelationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.UserRelationRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_AnchorSdk_ChangeUserRelation = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.anchor.UserRelationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.UserRelationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.changeUserRelation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/ChangeUserRelation',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_ChangeUserRelation,
      callback);
};


/**
 * @param {!proto.pb.anchor.UserRelationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.changeUserRelation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/ChangeUserRelation',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_ChangeUserRelation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.anchor.GetRankReply>}
 */
const methodDescriptor_AnchorSdk_GetRank = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetRank',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  proto.pb.anchor.GetRankReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.GetRankReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.anchor.GetRankReply>}
 */
const methodInfo_AnchorSdk_GetRank = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.GetRankReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.GetRankReply.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.GetRankReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.GetRankReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getRank =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetRank',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetRank,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.GetRankReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getRank =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetRank',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetRank);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.IncomeStatRequest,
 *   !proto.pb.anchor.IncomeStatReply>}
 */
const methodDescriptor_AnchorSdk_GetIncomeStat = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetIncomeStat',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.IncomeStatRequest,
  proto.pb.anchor.IncomeStatReply,
  /**
   * @param {!proto.pb.anchor.IncomeStatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.IncomeStatReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.IncomeStatRequest,
 *   !proto.pb.anchor.IncomeStatReply>}
 */
const methodInfo_AnchorSdk_GetIncomeStat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.IncomeStatReply,
  /**
   * @param {!proto.pb.anchor.IncomeStatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.IncomeStatReply.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.IncomeStatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.IncomeStatReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.IncomeStatReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getIncomeStat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetIncomeStat',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetIncomeStat,
      callback);
};


/**
 * @param {!proto.pb.anchor.IncomeStatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.IncomeStatReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getIncomeStat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetIncomeStat',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetIncomeStat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.GiftRecordRequest,
 *   !proto.pb.anchor.GiftRecordReply>}
 */
const methodDescriptor_AnchorSdk_GetGiftRecord = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetGiftRecord',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.GiftRecordRequest,
  proto.pb.anchor.GiftRecordReply,
  /**
   * @param {!proto.pb.anchor.GiftRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.GiftRecordReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.GiftRecordRequest,
 *   !proto.pb.anchor.GiftRecordReply>}
 */
const methodInfo_AnchorSdk_GetGiftRecord = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.GiftRecordReply,
  /**
   * @param {!proto.pb.anchor.GiftRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.GiftRecordReply.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.GiftRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.GiftRecordReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.GiftRecordReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getGiftRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetGiftRecord',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetGiftRecord,
      callback);
};


/**
 * @param {!proto.pb.anchor.GiftRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.GiftRecordReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getGiftRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetGiftRecord',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetGiftRecord);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.IncomeRecordRequest,
 *   !proto.pb.anchor.IncomeRecordReply>}
 */
const methodDescriptor_AnchorSdk_GetIncomeRecord = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetIncomeRecord',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.IncomeRecordRequest,
  proto.pb.anchor.IncomeRecordReply,
  /**
   * @param {!proto.pb.anchor.IncomeRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.IncomeRecordReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.IncomeRecordRequest,
 *   !proto.pb.anchor.IncomeRecordReply>}
 */
const methodInfo_AnchorSdk_GetIncomeRecord = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.IncomeRecordReply,
  /**
   * @param {!proto.pb.anchor.IncomeRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.IncomeRecordReply.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.IncomeRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.IncomeRecordReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.IncomeRecordReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getIncomeRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetIncomeRecord',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetIncomeRecord,
      callback);
};


/**
 * @param {!proto.pb.anchor.IncomeRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.IncomeRecordReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getIncomeRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetIncomeRecord',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetIncomeRecord);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.SettleRecordRequest,
 *   !proto.pb.anchor.SettleRecordReply>}
 */
const methodDescriptor_AnchorSdk_GetSettleRecord = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetSettleRecord',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.SettleRecordRequest,
  proto.pb.anchor.SettleRecordReply,
  /**
   * @param {!proto.pb.anchor.SettleRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.SettleRecordReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.SettleRecordRequest,
 *   !proto.pb.anchor.SettleRecordReply>}
 */
const methodInfo_AnchorSdk_GetSettleRecord = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.SettleRecordReply,
  /**
   * @param {!proto.pb.anchor.SettleRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.SettleRecordReply.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.SettleRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.SettleRecordReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.SettleRecordReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getSettleRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetSettleRecord',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetSettleRecord,
      callback);
};


/**
 * @param {!proto.pb.anchor.SettleRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.SettleRecordReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getSettleRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetSettleRecord',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetSettleRecord);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.WorkStatRequest,
 *   !proto.pb.anchor.WorkStatReply>}
 */
const methodDescriptor_AnchorSdk_GetWorkStat = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/GetWorkStat',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.WorkStatRequest,
  proto.pb.anchor.WorkStatReply,
  /**
   * @param {!proto.pb.anchor.WorkStatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.WorkStatReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.WorkStatRequest,
 *   !proto.pb.anchor.WorkStatReply>}
 */
const methodInfo_AnchorSdk_GetWorkStat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.WorkStatReply,
  /**
   * @param {!proto.pb.anchor.WorkStatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.WorkStatReply.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.WorkStatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.WorkStatReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.WorkStatReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.getWorkStat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetWorkStat',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetWorkStat,
      callback);
};


/**
 * @param {!proto.pb.anchor.WorkStatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.WorkStatReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.getWorkStat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/GetWorkStat',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_GetWorkStat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.MakeCallRequest,
 *   !proto.pb.anchor.MakeCallReply>}
 */
const methodDescriptor_AnchorSdk_MakeCall = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/MakeCall',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.MakeCallRequest,
  proto.pb.anchor.MakeCallReply,
  /**
   * @param {!proto.pb.anchor.MakeCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.MakeCallReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.MakeCallRequest,
 *   !proto.pb.anchor.MakeCallReply>}
 */
const methodInfo_AnchorSdk_MakeCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.MakeCallReply,
  /**
   * @param {!proto.pb.anchor.MakeCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.MakeCallReply.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.MakeCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.MakeCallReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.MakeCallReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.makeCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/MakeCall',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_MakeCall,
      callback);
};


/**
 * @param {!proto.pb.anchor.MakeCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.MakeCallReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.makeCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/MakeCall',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_MakeCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.FetchCallRequest,
 *   !proto.pb.anchor.FetchCallReply>}
 */
const methodDescriptor_AnchorSdk_FetchCall = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/FetchCall',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.FetchCallRequest,
  proto.pb.anchor.FetchCallReply,
  /**
   * @param {!proto.pb.anchor.FetchCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.FetchCallReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.FetchCallRequest,
 *   !proto.pb.anchor.FetchCallReply>}
 */
const methodInfo_AnchorSdk_FetchCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.FetchCallReply,
  /**
   * @param {!proto.pb.anchor.FetchCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.FetchCallReply.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.FetchCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.FetchCallReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.FetchCallReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.fetchCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/FetchCall',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_FetchCall,
      callback);
};


/**
 * @param {!proto.pb.anchor.FetchCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.FetchCallReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.fetchCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/FetchCall',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_FetchCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.HangCallRequest,
 *   !proto.pb.anchor.HangCallReply>}
 */
const methodDescriptor_AnchorSdk_HangCall = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/HangCall',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.HangCallRequest,
  proto.pb.anchor.HangCallReply,
  /**
   * @param {!proto.pb.anchor.HangCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.HangCallReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.HangCallRequest,
 *   !proto.pb.anchor.HangCallReply>}
 */
const methodInfo_AnchorSdk_HangCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.HangCallReply,
  /**
   * @param {!proto.pb.anchor.HangCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.HangCallReply.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.HangCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.HangCallReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.HangCallReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.hangCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/HangCall',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_HangCall,
      callback);
};


/**
 * @param {!proto.pb.anchor.HangCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.HangCallReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.hangCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/HangCall',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_HangCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.UpdateCallRequest,
 *   !proto.pb.anchor.UpdateCallReply>}
 */
const methodDescriptor_AnchorSdk_UpdateCall = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/UpdateCall',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.UpdateCallRequest,
  proto.pb.anchor.UpdateCallReply,
  /**
   * @param {!proto.pb.anchor.UpdateCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.UpdateCallReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.UpdateCallRequest,
 *   !proto.pb.anchor.UpdateCallReply>}
 */
const methodInfo_AnchorSdk_UpdateCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.anchor.UpdateCallReply,
  /**
   * @param {!proto.pb.anchor.UpdateCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.anchor.UpdateCallReply.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.UpdateCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.anchor.UpdateCallReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.anchor.UpdateCallReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.updateCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/UpdateCall',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_UpdateCall,
      callback);
};


/**
 * @param {!proto.pb.anchor.UpdateCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.anchor.UpdateCallReply>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.updateCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/UpdateCall',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_UpdateCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.anchor.SaveMediaRequest,
 *   !proto.pb.FileRecord>}
 */
const methodDescriptor_AnchorSdk_SaveMedia = new grpc.web.MethodDescriptor(
  '/pb.anchor.AnchorSdk/SaveMedia',
  grpc.web.MethodType.UNARY,
  proto.pb.anchor.SaveMediaRequest,
  usertype_pb.FileRecord,
  /**
   * @param {!proto.pb.anchor.SaveMediaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.FileRecord.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.anchor.SaveMediaRequest,
 *   !proto.pb.FileRecord>}
 */
const methodInfo_AnchorSdk_SaveMedia = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.FileRecord,
  /**
   * @param {!proto.pb.anchor.SaveMediaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.FileRecord.deserializeBinary
);


/**
 * @param {!proto.pb.anchor.SaveMediaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.FileRecord)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.FileRecord>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.anchor.AnchorSdkClient.prototype.saveMedia =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/SaveMedia',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_SaveMedia,
      callback);
};


/**
 * @param {!proto.pb.anchor.SaveMediaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.FileRecord>}
 *     Promise that resolves to the response
 */
proto.pb.anchor.AnchorSdkPromiseClient.prototype.saveMedia =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.anchor.AnchorSdk/SaveMedia',
      request,
      metadata || {},
      methodDescriptor_AnchorSdk_SaveMedia);
};


module.exports = proto.pb.anchor;

