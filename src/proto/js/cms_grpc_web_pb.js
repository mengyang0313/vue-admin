/**
 * @fileoverview gRPC-Web generated client stub for pb.cms
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var usertype_pb = require('./usertype_pb.js')

var anchortype_pb = require('./anchortype_pb.js')

var cmstype_pb = require('./cmstype_pb.js')
const proto = {};
proto.pb = {};
proto.pb.cms = require('./cms_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.cms.CmsSdkClient =
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
proto.pb.cms.CmsSdkPromiseClient =
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
 *   !proto.pb.cms.AreaListReply>}
 */
const methodDescriptor_CmsSdk_GetAreaList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetAreaList',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  proto.pb.cms.AreaListReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AreaListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.cms.AreaListReply>}
 */
const methodInfo_CmsSdk_GetAreaList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.AreaListReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AreaListReply.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.AreaListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.AreaListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getAreaList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAreaList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAreaList,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.AreaListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getAreaList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAreaList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAreaList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.LoginRequest,
 *   !proto.pb.Admin>}
 */
const methodDescriptor_CmsSdk_Login = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/Login',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.LoginRequest,
  cmstype_pb.Admin,
  /**
   * @param {!proto.pb.cms.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  cmstype_pb.Admin.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.LoginRequest,
 *   !proto.pb.Admin>}
 */
const methodInfo_CmsSdk_Login = new grpc.web.AbstractClientBase.MethodInfo(
  cmstype_pb.Admin,
  /**
   * @param {!proto.pb.cms.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  cmstype_pb.Admin.deserializeBinary
);


/**
 * @param {!proto.pb.cms.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Admin)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Admin>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/Login',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_Login,
      callback);
};


/**
 * @param {!proto.pb.cms.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Admin>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/Login',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.Admin>}
 */
const methodDescriptor_CmsSdk_GetAdminInfo = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetAdminInfo',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  cmstype_pb.Admin,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  cmstype_pb.Admin.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.Admin>}
 */
const methodInfo_CmsSdk_GetAdminInfo = new grpc.web.AbstractClientBase.MethodInfo(
  cmstype_pb.Admin,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  cmstype_pb.Admin.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Admin)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Admin>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getAdminInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAdminInfo',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAdminInfo,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Admin>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getAdminInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAdminInfo',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAdminInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Admin,
 *   !proto.pb.Admin>}
 */
const methodDescriptor_CmsSdk_SaveAdmin = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/SaveAdmin',
  grpc.web.MethodType.UNARY,
  cmstype_pb.Admin,
  cmstype_pb.Admin,
  /**
   * @param {!proto.pb.Admin} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  cmstype_pb.Admin.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Admin,
 *   !proto.pb.Admin>}
 */
const methodInfo_CmsSdk_SaveAdmin = new grpc.web.AbstractClientBase.MethodInfo(
  cmstype_pb.Admin,
  /**
   * @param {!proto.pb.Admin} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  cmstype_pb.Admin.deserializeBinary
);


/**
 * @param {!proto.pb.Admin} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Admin)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Admin>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.saveAdmin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/SaveAdmin',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SaveAdmin,
      callback);
};


/**
 * @param {!proto.pb.Admin} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Admin>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.saveAdmin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/SaveAdmin',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SaveAdmin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.cms.AdminListReply>}
 */
const methodDescriptor_CmsSdk_GetAdminList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetAdminList',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  proto.pb.cms.AdminListReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AdminListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.cms.AdminListReply>}
 */
const methodInfo_CmsSdk_GetAdminList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.AdminListReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AdminListReply.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.AdminListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.AdminListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getAdminList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAdminList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAdminList,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.AdminListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getAdminList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAdminList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAdminList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Guild,
 *   !proto.pb.Guild>}
 */
const methodDescriptor_CmsSdk_SaveGuild = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/SaveGuild',
  grpc.web.MethodType.UNARY,
  cmstype_pb.Guild,
  cmstype_pb.Guild,
  /**
   * @param {!proto.pb.Guild} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  cmstype_pb.Guild.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Guild,
 *   !proto.pb.Guild>}
 */
const methodInfo_CmsSdk_SaveGuild = new grpc.web.AbstractClientBase.MethodInfo(
  cmstype_pb.Guild,
  /**
   * @param {!proto.pb.Guild} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  cmstype_pb.Guild.deserializeBinary
);


/**
 * @param {!proto.pb.Guild} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Guild)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Guild>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.saveGuild =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/SaveGuild',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SaveGuild,
      callback);
};


/**
 * @param {!proto.pb.Guild} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Guild>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.saveGuild =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/SaveGuild',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SaveGuild);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.cms.GuildListReply>}
 */
const methodDescriptor_CmsSdk_GetGuildList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetGuildList',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  proto.pb.cms.GuildListReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.GuildListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.cms.GuildListReply>}
 */
const methodInfo_CmsSdk_GetGuildList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.GuildListReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.GuildListReply.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.GuildListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.GuildListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getGuildList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetGuildList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetGuildList,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.GuildListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getGuildList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetGuildList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetGuildList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.cms.AppListReply>}
 */
const methodDescriptor_CmsSdk_GetAppList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetAppList',
  grpc.web.MethodType.UNARY,
  usertype_pb.Empty,
  proto.pb.cms.AppListReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AppListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.cms.AppListReply>}
 */
const methodInfo_CmsSdk_GetAppList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.AppListReply,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AppListReply.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.AppListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.AppListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getAppList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAppList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAppList,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.AppListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getAppList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAppList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAppList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.AnchorListRequest,
 *   !proto.pb.cms.AnchorListReply>}
 */
const methodDescriptor_CmsSdk_GetAnchorList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetAnchorList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.AnchorListRequest,
  proto.pb.cms.AnchorListReply,
  /**
   * @param {!proto.pb.cms.AnchorListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AnchorListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.AnchorListRequest,
 *   !proto.pb.cms.AnchorListReply>}
 */
const methodInfo_CmsSdk_GetAnchorList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.AnchorListReply,
  /**
   * @param {!proto.pb.cms.AnchorListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AnchorListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.AnchorListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.AnchorListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.AnchorListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getAnchorList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAnchorList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAnchorList,
      callback);
};


/**
 * @param {!proto.pb.cms.AnchorListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.AnchorListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getAnchorList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAnchorList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAnchorList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.UserListRequest,
 *   !proto.pb.cms.UserListReply>}
 */
const methodDescriptor_CmsSdk_GetUserList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetUserList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.UserListRequest,
  proto.pb.cms.UserListReply,
  /**
   * @param {!proto.pb.cms.UserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.UserListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.UserListRequest,
 *   !proto.pb.cms.UserListReply>}
 */
const methodInfo_CmsSdk_GetUserList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.UserListReply,
  /**
   * @param {!proto.pb.cms.UserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.UserListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.UserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.UserListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.UserListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getUserList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetUserList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetUserList,
      callback);
};


/**
 * @param {!proto.pb.cms.UserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.UserListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getUserList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetUserList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetUserList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.AdjustBalanceRequest,
 *   !proto.pb.cms.AdjustBalanceReply>}
 */
const methodDescriptor_CmsSdk_AdjustBalance = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/AdjustBalance',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.AdjustBalanceRequest,
  proto.pb.cms.AdjustBalanceReply,
  /**
   * @param {!proto.pb.cms.AdjustBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AdjustBalanceReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.AdjustBalanceRequest,
 *   !proto.pb.cms.AdjustBalanceReply>}
 */
const methodInfo_CmsSdk_AdjustBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.AdjustBalanceReply,
  /**
   * @param {!proto.pb.cms.AdjustBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AdjustBalanceReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.AdjustBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.AdjustBalanceReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.AdjustBalanceReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.adjustBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/AdjustBalance',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_AdjustBalance,
      callback);
};


/**
 * @param {!proto.pb.cms.AdjustBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.AdjustBalanceReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.adjustBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/AdjustBalance',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_AdjustBalance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.User,
 *   !proto.pb.User>}
 */
const methodDescriptor_CmsSdk_UpdateUser = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/UpdateUser',
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
const methodInfo_CmsSdk_UpdateUser = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.pb.cms.CmsSdkClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_UpdateUser,
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
proto.pb.cms.CmsSdkPromiseClient.prototype.updateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_UpdateUser);
};


module.exports = proto.pb.cms;

