/**
 * @fileoverview gRPC-Web generated client stub for pb.user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var usertype_pb = require('./usertype_pb.js')
const proto = {};
proto.pb = {};
proto.pb.user = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.user.UserSdkClient =
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
proto.pb.user.UserSdkPromiseClient =
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
 *   !proto.pb.user.AreaListReply>}
 */
const methodDescriptor_UserSdk_GetAreaList = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/GetAreaList',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  proto.pb.user.AreaListReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.AreaListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.user.AreaListReply>}
 */
const methodInfo_UserSdk_GetAreaList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.AreaListReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.AreaListReply.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.AreaListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.AreaListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.getAreaList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/GetAreaList',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetAreaList,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.AreaListReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.getAreaList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/GetAreaList',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetAreaList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.LoginRequest,
 *   !proto.pb.User>}
 */
const methodDescriptor_UserSdk_Login = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/Login',
  grpc.web.MethodType.UNARY,
  proto.pb.user.LoginRequest,
  usertype_pb.User,
  /**
   * @param {!proto.pb.user.LoginRequest} request
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
 *   !proto.pb.user.LoginRequest,
 *   !proto.pb.User>}
 */
const methodInfo_UserSdk_Login = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.User,
  /**
   * @param {!proto.pb.user.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.User.deserializeBinary
);


/**
 * @param {!proto.pb.user.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/Login',
      request,
      metadata || {},
      methodDescriptor_UserSdk_Login,
      callback);
};


/**
 * @param {!proto.pb.user.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.User>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/Login',
      request,
      metadata || {},
      methodDescriptor_UserSdk_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.ConfigRequest,
 *   !proto.pb.user.ConfigReply>}
 */
const methodDescriptor_UserSdk_GetConfig = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/GetConfig',
  grpc.web.MethodType.UNARY,
  proto.pb.user.ConfigRequest,
  proto.pb.user.ConfigReply,
  /**
   * @param {!proto.pb.user.ConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.ConfigReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.ConfigRequest,
 *   !proto.pb.user.ConfigReply>}
 */
const methodInfo_UserSdk_GetConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.ConfigReply,
  /**
   * @param {!proto.pb.user.ConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.ConfigReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.ConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.ConfigReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.ConfigReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.getConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/GetConfig',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetConfig,
      callback);
};


/**
 * @param {!proto.pb.user.ConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.ConfigReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.getConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/GetConfig',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.CheckinRecord>}
 */
const methodDescriptor_UserSdk_Checkin = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/Checkin',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  usertype_pb.CheckinRecord,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.CheckinRecord.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.CheckinRecord>}
 */
const methodInfo_UserSdk_Checkin = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.CheckinRecord,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.CheckinRecord.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.CheckinRecord)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.CheckinRecord>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.checkin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/Checkin',
      request,
      metadata || {},
      methodDescriptor_UserSdk_Checkin,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.CheckinRecord>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.checkin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/Checkin',
      request,
      metadata || {},
      methodDescriptor_UserSdk_Checkin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.PayChannelRequest,
 *   !proto.pb.user.PayChannelReply>}
 */
const methodDescriptor_UserSdk_GetPayChannel = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/GetPayChannel',
  grpc.web.MethodType.UNARY,
  proto.pb.user.PayChannelRequest,
  proto.pb.user.PayChannelReply,
  /**
   * @param {!proto.pb.user.PayChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.PayChannelReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.PayChannelRequest,
 *   !proto.pb.user.PayChannelReply>}
 */
const methodInfo_UserSdk_GetPayChannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.PayChannelReply,
  /**
   * @param {!proto.pb.user.PayChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.PayChannelReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.PayChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.PayChannelReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.PayChannelReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.getPayChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/GetPayChannel',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetPayChannel,
      callback);
};


/**
 * @param {!proto.pb.user.PayChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.PayChannelReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.getPayChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/GetPayChannel',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetPayChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.GiftConfigRequest,
 *   !proto.pb.user.GiftConfigReply>}
 */
const methodDescriptor_UserSdk_GetGiftConfig = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/GetGiftConfig',
  grpc.web.MethodType.UNARY,
  proto.pb.user.GiftConfigRequest,
  proto.pb.user.GiftConfigReply,
  /**
   * @param {!proto.pb.user.GiftConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.GiftConfigReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.GiftConfigRequest,
 *   !proto.pb.user.GiftConfigReply>}
 */
const methodInfo_UserSdk_GetGiftConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.GiftConfigReply,
  /**
   * @param {!proto.pb.user.GiftConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.GiftConfigReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.GiftConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.GiftConfigReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.GiftConfigReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.getGiftConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/GetGiftConfig',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetGiftConfig,
      callback);
};


/**
 * @param {!proto.pb.user.GiftConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.GiftConfigReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.getGiftConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/GetGiftConfig',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetGiftConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.User>}
 */
const methodDescriptor_UserSdk_GetUserInfo = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/GetUserInfo',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  usertype_pb.User,
  /**
   * @param {!proto.pb.Empty} request
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
 *   !proto.pb.Empty,
 *   !proto.pb.User>}
 */
const methodInfo_UserSdk_GetUserInfo = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.User,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.User.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.getUserInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/GetUserInfo',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetUserInfo,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.User>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.getUserInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/GetUserInfo',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetUserInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.User,
 *   !proto.pb.User>}
 */
const methodDescriptor_UserSdk_UpdateUserInfo = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/UpdateUserInfo',
  grpc.web.MethodType.UNARY,
  usertype_pb.User,
  usertype_pb.User,
  /**
   * @param {!proto.pb.User} request
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
 *   !proto.pb.User,
 *   !proto.pb.User>}
 */
const methodInfo_UserSdk_UpdateUserInfo = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.User,
  /**
   * @param {!proto.pb.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.User.deserializeBinary
);


/**
 * @param {!proto.pb.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.updateUserInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/UpdateUserInfo',
      request,
      metadata || {},
      methodDescriptor_UserSdk_UpdateUserInfo,
      callback);
};


/**
 * @param {!proto.pb.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.User>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.updateUserInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/UpdateUserInfo',
      request,
      metadata || {},
      methodDescriptor_UserSdk_UpdateUserInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.AnchorListRequest,
 *   !proto.pb.user.AnchorListReply>}
 */
const methodDescriptor_UserSdk_GetAnchorList = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/GetAnchorList',
  grpc.web.MethodType.UNARY,
  proto.pb.user.AnchorListRequest,
  proto.pb.user.AnchorListReply,
  /**
   * @param {!proto.pb.user.AnchorListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.AnchorListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.AnchorListRequest,
 *   !proto.pb.user.AnchorListReply>}
 */
const methodInfo_UserSdk_GetAnchorList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.AnchorListReply,
  /**
   * @param {!proto.pb.user.AnchorListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.AnchorListReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.AnchorListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.AnchorListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.AnchorListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.getAnchorList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/GetAnchorList',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetAnchorList,
      callback);
};


/**
 * @param {!proto.pb.user.AnchorListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.AnchorListReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.getAnchorList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/GetAnchorList',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetAnchorList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.AnchorInfoRequest,
 *   !proto.pb.AnchorInfo>}
 */
const methodDescriptor_UserSdk_GetAnchorInfo = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/GetAnchorInfo',
  grpc.web.MethodType.UNARY,
  proto.pb.user.AnchorInfoRequest,
  usertype_pb.AnchorInfo,
  /**
   * @param {!proto.pb.user.AnchorInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.AnchorInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.AnchorInfoRequest,
 *   !proto.pb.AnchorInfo>}
 */
const methodInfo_UserSdk_GetAnchorInfo = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.AnchorInfo,
  /**
   * @param {!proto.pb.user.AnchorInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.AnchorInfo.deserializeBinary
);


/**
 * @param {!proto.pb.user.AnchorInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.AnchorInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.AnchorInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.getAnchorInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/GetAnchorInfo',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetAnchorInfo,
      callback);
};


/**
 * @param {!proto.pb.user.AnchorInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.AnchorInfo>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.getAnchorInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/GetAnchorInfo',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetAnchorInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.user.AnchorIdsReply>}
 */
const methodDescriptor_UserSdk_GetAnchorIds = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/GetAnchorIds',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  proto.pb.user.AnchorIdsReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.AnchorIdsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.user.AnchorIdsReply>}
 */
const methodInfo_UserSdk_GetAnchorIds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.AnchorIdsReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.AnchorIdsReply.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.AnchorIdsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.AnchorIdsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.getAnchorIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/GetAnchorIds',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetAnchorIds,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.AnchorIdsReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.getAnchorIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/GetAnchorIds',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetAnchorIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.AnchorRelationRequest,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_UserSdk_ChangeAnchorRelation = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/ChangeAnchorRelation',
  grpc.web.MethodType.UNARY,
  proto.pb.user.AnchorRelationRequest,
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.user.AnchorRelationRequest} request
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
 *   !proto.pb.user.AnchorRelationRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_UserSdk_ChangeAnchorRelation = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.user.AnchorRelationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.user.AnchorRelationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.changeAnchorRelation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/ChangeAnchorRelation',
      request,
      metadata || {},
      methodDescriptor_UserSdk_ChangeAnchorRelation,
      callback);
};


/**
 * @param {!proto.pb.user.AnchorRelationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.changeAnchorRelation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/ChangeAnchorRelation',
      request,
      metadata || {},
      methodDescriptor_UserSdk_ChangeAnchorRelation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.UserListRequest,
 *   !proto.pb.user.UserListReply>}
 */
const methodDescriptor_UserSdk_GetUserList = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/GetUserList',
  grpc.web.MethodType.UNARY,
  proto.pb.user.UserListRequest,
  proto.pb.user.UserListReply,
  /**
   * @param {!proto.pb.user.UserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.UserListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.UserListRequest,
 *   !proto.pb.user.UserListReply>}
 */
const methodInfo_UserSdk_GetUserList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.UserListReply,
  /**
   * @param {!proto.pb.user.UserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.UserListReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.UserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.UserListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.UserListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.getUserList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/GetUserList',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetUserList,
      callback);
};


/**
 * @param {!proto.pb.user.UserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.UserListReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.getUserList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/GetUserList',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetUserList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.TransactionListRequest,
 *   !proto.pb.user.TransactionListReply>}
 */
const methodDescriptor_UserSdk_GetTransactionList = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/GetTransactionList',
  grpc.web.MethodType.UNARY,
  proto.pb.user.TransactionListRequest,
  proto.pb.user.TransactionListReply,
  /**
   * @param {!proto.pb.user.TransactionListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.TransactionListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.TransactionListRequest,
 *   !proto.pb.user.TransactionListReply>}
 */
const methodInfo_UserSdk_GetTransactionList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.TransactionListReply,
  /**
   * @param {!proto.pb.user.TransactionListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.TransactionListReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.TransactionListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.TransactionListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.TransactionListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.getTransactionList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/GetTransactionList',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetTransactionList,
      callback);
};


/**
 * @param {!proto.pb.user.TransactionListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.TransactionListReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.getTransactionList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/GetTransactionList',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetTransactionList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.SearchAnchorRequest,
 *   !proto.pb.user.SearchAnchorReply>}
 */
const methodDescriptor_UserSdk_SearchAnchor = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/SearchAnchor',
  grpc.web.MethodType.UNARY,
  proto.pb.user.SearchAnchorRequest,
  proto.pb.user.SearchAnchorReply,
  /**
   * @param {!proto.pb.user.SearchAnchorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.SearchAnchorReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.SearchAnchorRequest,
 *   !proto.pb.user.SearchAnchorReply>}
 */
const methodInfo_UserSdk_SearchAnchor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.SearchAnchorReply,
  /**
   * @param {!proto.pb.user.SearchAnchorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.SearchAnchorReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.SearchAnchorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.SearchAnchorReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.SearchAnchorReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.searchAnchor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/SearchAnchor',
      request,
      metadata || {},
      methodDescriptor_UserSdk_SearchAnchor,
      callback);
};


/**
 * @param {!proto.pb.user.SearchAnchorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.SearchAnchorReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.searchAnchor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/SearchAnchor',
      request,
      metadata || {},
      methodDescriptor_UserSdk_SearchAnchor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.SendGiftRequest,
 *   !proto.pb.GiftRecord>}
 */
const methodDescriptor_UserSdk_SendGift = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/SendGift',
  grpc.web.MethodType.UNARY,
  proto.pb.user.SendGiftRequest,
  usertype_pb.GiftRecord,
  /**
   * @param {!proto.pb.user.SendGiftRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.GiftRecord.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.SendGiftRequest,
 *   !proto.pb.GiftRecord>}
 */
const methodInfo_UserSdk_SendGift = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.GiftRecord,
  /**
   * @param {!proto.pb.user.SendGiftRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.GiftRecord.deserializeBinary
);


/**
 * @param {!proto.pb.user.SendGiftRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.GiftRecord)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.GiftRecord>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.sendGift =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/SendGift',
      request,
      metadata || {},
      methodDescriptor_UserSdk_SendGift,
      callback);
};


/**
 * @param {!proto.pb.user.SendGiftRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.GiftRecord>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.sendGift =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/SendGift',
      request,
      metadata || {},
      methodDescriptor_UserSdk_SendGift);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.BuyVipRequest,
 *   !proto.pb.VipRecord>}
 */
const methodDescriptor_UserSdk_BuyVip = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/BuyVip',
  grpc.web.MethodType.UNARY,
  proto.pb.user.BuyVipRequest,
  usertype_pb.VipRecord,
  /**
   * @param {!proto.pb.user.BuyVipRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.VipRecord.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.BuyVipRequest,
 *   !proto.pb.VipRecord>}
 */
const methodInfo_UserSdk_BuyVip = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.VipRecord,
  /**
   * @param {!proto.pb.user.BuyVipRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.VipRecord.deserializeBinary
);


/**
 * @param {!proto.pb.user.BuyVipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.VipRecord)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.VipRecord>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.buyVip =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/BuyVip',
      request,
      metadata || {},
      methodDescriptor_UserSdk_BuyVip,
      callback);
};


/**
 * @param {!proto.pb.user.BuyVipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.VipRecord>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.buyVip =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/BuyVip',
      request,
      metadata || {},
      methodDescriptor_UserSdk_BuyVip);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.ReportViolationRequest,
 *   !proto.pb.ViolationRecord>}
 */
const methodDescriptor_UserSdk_ReportViolation = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/ReportViolation',
  grpc.web.MethodType.UNARY,
  proto.pb.user.ReportViolationRequest,
  usertype_pb.ViolationRecord,
  /**
   * @param {!proto.pb.user.ReportViolationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.ViolationRecord.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.ReportViolationRequest,
 *   !proto.pb.ViolationRecord>}
 */
const methodInfo_UserSdk_ReportViolation = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.ViolationRecord,
  /**
   * @param {!proto.pb.user.ReportViolationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.ViolationRecord.deserializeBinary
);


/**
 * @param {!proto.pb.user.ReportViolationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.ViolationRecord)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.ViolationRecord>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.reportViolation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/ReportViolation',
      request,
      metadata || {},
      methodDescriptor_UserSdk_ReportViolation,
      callback);
};


/**
 * @param {!proto.pb.user.ReportViolationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.ViolationRecord>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.reportViolation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/ReportViolation',
      request,
      metadata || {},
      methodDescriptor_UserSdk_ReportViolation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.ReportUsageRequest,
 *   !proto.pb.user.ReportUsageReply>}
 */
const methodDescriptor_UserSdk_ReportUsage = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/ReportUsage',
  grpc.web.MethodType.UNARY,
  proto.pb.user.ReportUsageRequest,
  proto.pb.user.ReportUsageReply,
  /**
   * @param {!proto.pb.user.ReportUsageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.ReportUsageReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.ReportUsageRequest,
 *   !proto.pb.user.ReportUsageReply>}
 */
const methodInfo_UserSdk_ReportUsage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.ReportUsageReply,
  /**
   * @param {!proto.pb.user.ReportUsageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.ReportUsageReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.ReportUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.ReportUsageReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.ReportUsageReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.reportUsage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/ReportUsage',
      request,
      metadata || {},
      methodDescriptor_UserSdk_ReportUsage,
      callback);
};


/**
 * @param {!proto.pb.user.ReportUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.ReportUsageReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.reportUsage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/ReportUsage',
      request,
      metadata || {},
      methodDescriptor_UserSdk_ReportUsage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.MakeCallRequest,
 *   !proto.pb.user.MakeCallReply>}
 */
const methodDescriptor_UserSdk_MakeCall = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/MakeCall',
  grpc.web.MethodType.UNARY,
  proto.pb.user.MakeCallRequest,
  proto.pb.user.MakeCallReply,
  /**
   * @param {!proto.pb.user.MakeCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.MakeCallReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.MakeCallRequest,
 *   !proto.pb.user.MakeCallReply>}
 */
const methodInfo_UserSdk_MakeCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.MakeCallReply,
  /**
   * @param {!proto.pb.user.MakeCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.MakeCallReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.MakeCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.MakeCallReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.MakeCallReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.makeCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/MakeCall',
      request,
      metadata || {},
      methodDescriptor_UserSdk_MakeCall,
      callback);
};


/**
 * @param {!proto.pb.user.MakeCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.MakeCallReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.makeCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/MakeCall',
      request,
      metadata || {},
      methodDescriptor_UserSdk_MakeCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.FetchCallRequest,
 *   !proto.pb.user.FetchCallReply>}
 */
const methodDescriptor_UserSdk_FetchCall = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/FetchCall',
  grpc.web.MethodType.UNARY,
  proto.pb.user.FetchCallRequest,
  proto.pb.user.FetchCallReply,
  /**
   * @param {!proto.pb.user.FetchCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.FetchCallReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.FetchCallRequest,
 *   !proto.pb.user.FetchCallReply>}
 */
const methodInfo_UserSdk_FetchCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.FetchCallReply,
  /**
   * @param {!proto.pb.user.FetchCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.FetchCallReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.FetchCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.FetchCallReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.FetchCallReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.fetchCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/FetchCall',
      request,
      metadata || {},
      methodDescriptor_UserSdk_FetchCall,
      callback);
};


/**
 * @param {!proto.pb.user.FetchCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.FetchCallReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.fetchCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/FetchCall',
      request,
      metadata || {},
      methodDescriptor_UserSdk_FetchCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.HangCallRequest,
 *   !proto.pb.user.HangCallReply>}
 */
const methodDescriptor_UserSdk_HangCall = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/HangCall',
  grpc.web.MethodType.UNARY,
  proto.pb.user.HangCallRequest,
  proto.pb.user.HangCallReply,
  /**
   * @param {!proto.pb.user.HangCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.HangCallReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.HangCallRequest,
 *   !proto.pb.user.HangCallReply>}
 */
const methodInfo_UserSdk_HangCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.HangCallReply,
  /**
   * @param {!proto.pb.user.HangCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.HangCallReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.HangCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.HangCallReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.HangCallReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.hangCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/HangCall',
      request,
      metadata || {},
      methodDescriptor_UserSdk_HangCall,
      callback);
};


/**
 * @param {!proto.pb.user.HangCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.HangCallReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.hangCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/HangCall',
      request,
      metadata || {},
      methodDescriptor_UserSdk_HangCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.UpdateCallRequest,
 *   !proto.pb.user.UpdateCallReply>}
 */
const methodDescriptor_UserSdk_UpdateCall = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/UpdateCall',
  grpc.web.MethodType.UNARY,
  proto.pb.user.UpdateCallRequest,
  proto.pb.user.UpdateCallReply,
  /**
   * @param {!proto.pb.user.UpdateCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.UpdateCallReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.UpdateCallRequest,
 *   !proto.pb.user.UpdateCallReply>}
 */
const methodInfo_UserSdk_UpdateCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.UpdateCallReply,
  /**
   * @param {!proto.pb.user.UpdateCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.UpdateCallReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.UpdateCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.UpdateCallReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.UpdateCallReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.updateCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/UpdateCall',
      request,
      metadata || {},
      methodDescriptor_UserSdk_UpdateCall,
      callback);
};


/**
 * @param {!proto.pb.user.UpdateCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.UpdateCallReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.updateCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/UpdateCall',
      request,
      metadata || {},
      methodDescriptor_UserSdk_UpdateCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.ReportCallRequest,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_UserSdk_ReportCall = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/ReportCall',
  grpc.web.MethodType.UNARY,
  proto.pb.user.ReportCallRequest,
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.user.ReportCallRequest} request
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
 *   !proto.pb.user.ReportCallRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_UserSdk_ReportCall = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.user.ReportCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.user.ReportCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.reportCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/ReportCall',
      request,
      metadata || {},
      methodDescriptor_UserSdk_ReportCall,
      callback);
};


/**
 * @param {!proto.pb.user.ReportCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.reportCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/ReportCall',
      request,
      metadata || {},
      methodDescriptor_UserSdk_ReportCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.BuyCommodityRequest,
 *   !proto.pb.user.BuyCommodityReply>}
 */
const methodDescriptor_UserSdk_BuyCommodity = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/BuyCommodity',
  grpc.web.MethodType.UNARY,
  proto.pb.user.BuyCommodityRequest,
  proto.pb.user.BuyCommodityReply,
  /**
   * @param {!proto.pb.user.BuyCommodityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.BuyCommodityReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.BuyCommodityRequest,
 *   !proto.pb.user.BuyCommodityReply>}
 */
const methodInfo_UserSdk_BuyCommodity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.BuyCommodityReply,
  /**
   * @param {!proto.pb.user.BuyCommodityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.BuyCommodityReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.BuyCommodityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.BuyCommodityReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.BuyCommodityReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.buyCommodity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/BuyCommodity',
      request,
      metadata || {},
      methodDescriptor_UserSdk_BuyCommodity,
      callback);
};


/**
 * @param {!proto.pb.user.BuyCommodityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.BuyCommodityReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.buyCommodity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/BuyCommodity',
      request,
      metadata || {},
      methodDescriptor_UserSdk_BuyCommodity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.PayListRequest,
 *   !proto.pb.user.PayListReply>}
 */
const methodDescriptor_UserSdk_GetPayList = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/GetPayList',
  grpc.web.MethodType.UNARY,
  proto.pb.user.PayListRequest,
  proto.pb.user.PayListReply,
  /**
   * @param {!proto.pb.user.PayListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.PayListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.PayListRequest,
 *   !proto.pb.user.PayListReply>}
 */
const methodInfo_UserSdk_GetPayList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.PayListReply,
  /**
   * @param {!proto.pb.user.PayListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.PayListReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.PayListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.PayListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.PayListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.getPayList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/GetPayList',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetPayList,
      callback);
};


/**
 * @param {!proto.pb.user.PayListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.PayListReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.getPayList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/GetPayList',
      request,
      metadata || {},
      methodDescriptor_UserSdk_GetPayList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.VerifyPayRequest,
 *   !proto.pb.user.VerifyPayReply>}
 */
const methodDescriptor_UserSdk_VerifyPayRecord = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/VerifyPayRecord',
  grpc.web.MethodType.UNARY,
  proto.pb.user.VerifyPayRequest,
  proto.pb.user.VerifyPayReply,
  /**
   * @param {!proto.pb.user.VerifyPayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.VerifyPayReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.user.VerifyPayRequest,
 *   !proto.pb.user.VerifyPayReply>}
 */
const methodInfo_UserSdk_VerifyPayRecord = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.user.VerifyPayReply,
  /**
   * @param {!proto.pb.user.VerifyPayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.user.VerifyPayReply.deserializeBinary
);


/**
 * @param {!proto.pb.user.VerifyPayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.user.VerifyPayReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.user.VerifyPayReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.verifyPayRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/VerifyPayRecord',
      request,
      metadata || {},
      methodDescriptor_UserSdk_VerifyPayRecord,
      callback);
};


/**
 * @param {!proto.pb.user.VerifyPayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.user.VerifyPayReply>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.verifyPayRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/VerifyPayRecord',
      request,
      metadata || {},
      methodDescriptor_UserSdk_VerifyPayRecord);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.user.SaveMediaRequest,
 *   !proto.pb.FileRecord>}
 */
const methodDescriptor_UserSdk_SaveMedia = new grpc.web.MethodDescriptor(
  '/pb.user.UserSdk/SaveMedia',
  grpc.web.MethodType.UNARY,
  proto.pb.user.SaveMediaRequest,
  usertype_pb.FileRecord,
  /**
   * @param {!proto.pb.user.SaveMediaRequest} request
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
 *   !proto.pb.user.SaveMediaRequest,
 *   !proto.pb.FileRecord>}
 */
const methodInfo_UserSdk_SaveMedia = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.FileRecord,
  /**
   * @param {!proto.pb.user.SaveMediaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.FileRecord.deserializeBinary
);


/**
 * @param {!proto.pb.user.SaveMediaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.FileRecord)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.FileRecord>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.user.UserSdkClient.prototype.saveMedia =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.user.UserSdk/SaveMedia',
      request,
      metadata || {},
      methodDescriptor_UserSdk_SaveMedia,
      callback);
};


/**
 * @param {!proto.pb.user.SaveMediaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.FileRecord>}
 *     Promise that resolves to the response
 */
proto.pb.user.UserSdkPromiseClient.prototype.saveMedia =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.user.UserSdk/SaveMedia',
      request,
      metadata || {},
      methodDescriptor_UserSdk_SaveMedia);
};


module.exports = proto.pb.user;

