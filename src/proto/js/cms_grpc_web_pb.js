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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.AnchorBasic,
 *   !proto.pb.AnchorBasic>}
 */
const methodDescriptor_CmsSdk_UpdateAnchorBasic = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/UpdateAnchorBasic',
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
const methodInfo_CmsSdk_UpdateAnchorBasic = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.pb.cms.CmsSdkClient.prototype.updateAnchorBasic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/UpdateAnchorBasic',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_UpdateAnchorBasic,
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
proto.pb.cms.CmsSdkPromiseClient.prototype.updateAnchorBasic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/UpdateAnchorBasic',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_UpdateAnchorBasic);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.BlockRequest,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_CmsSdk_Block = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/Block',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.BlockRequest,
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.cms.BlockRequest} request
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
 *   !proto.pb.cms.BlockRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_CmsSdk_Block = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.cms.BlockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.cms.BlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.block =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/Block',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_Block,
      callback);
};


/**
 * @param {!proto.pb.cms.BlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.block =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/Block',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_Block);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.UnblockRequest,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_CmsSdk_Unblock = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/Unblock',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.UnblockRequest,
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.cms.UnblockRequest} request
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
 *   !proto.pb.cms.UnblockRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_CmsSdk_Unblock = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.cms.UnblockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.cms.UnblockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.unblock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/Unblock',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_Unblock,
      callback);
};


/**
 * @param {!proto.pb.cms.UnblockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.unblock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/Unblock',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_Unblock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.MigrateRequest,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_CmsSdk_Migrate = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/Migrate',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.MigrateRequest,
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.cms.MigrateRequest} request
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
 *   !proto.pb.cms.MigrateRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_CmsSdk_Migrate = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.cms.MigrateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.cms.MigrateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.migrate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/Migrate',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_Migrate,
      callback);
};


/**
 * @param {!proto.pb.cms.MigrateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.migrate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/Migrate',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_Migrate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.AuthorizeAnchorRequest,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_CmsSdk_AuthorizeAnchor = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/AuthorizeAnchor',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.AuthorizeAnchorRequest,
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.cms.AuthorizeAnchorRequest} request
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
 *   !proto.pb.cms.AuthorizeAnchorRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_CmsSdk_AuthorizeAnchor = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.cms.AuthorizeAnchorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.cms.AuthorizeAnchorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.authorizeAnchor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/AuthorizeAnchor',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_AuthorizeAnchor,
      callback);
};


/**
 * @param {!proto.pb.cms.AuthorizeAnchorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.authorizeAnchor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/AuthorizeAnchor',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_AuthorizeAnchor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.AnchorFullRequest,
 *   !proto.pb.cms.AnchorFullReply>}
 */
const methodDescriptor_CmsSdk_GetAnchorFull = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetAnchorFull',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.AnchorFullRequest,
  proto.pb.cms.AnchorFullReply,
  /**
   * @param {!proto.pb.cms.AnchorFullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AnchorFullReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.AnchorFullRequest,
 *   !proto.pb.cms.AnchorFullReply>}
 */
const methodInfo_CmsSdk_GetAnchorFull = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.AnchorFullReply,
  /**
   * @param {!proto.pb.cms.AnchorFullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AnchorFullReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.AnchorFullRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.AnchorFullReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.AnchorFullReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getAnchorFull =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAnchorFull',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAnchorFull,
      callback);
};


/**
 * @param {!proto.pb.cms.AnchorFullRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.AnchorFullReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getAnchorFull =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAnchorFull',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAnchorFull);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.ProfileListRequest,
 *   !proto.pb.cms.ProfileListReply>}
 */
const methodDescriptor_CmsSdk_GetProfileList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetProfileList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.ProfileListRequest,
  proto.pb.cms.ProfileListReply,
  /**
   * @param {!proto.pb.cms.ProfileListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.ProfileListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.ProfileListRequest,
 *   !proto.pb.cms.ProfileListReply>}
 */
const methodInfo_CmsSdk_GetProfileList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.ProfileListReply,
  /**
   * @param {!proto.pb.cms.ProfileListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.ProfileListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.ProfileListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.ProfileListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.ProfileListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getProfileList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetProfileList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetProfileList,
      callback);
};


/**
 * @param {!proto.pb.cms.ProfileListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.ProfileListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getProfileList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetProfileList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetProfileList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.ProcessProfileRequest,
 *   !proto.pb.AnchorProfile>}
 */
const methodDescriptor_CmsSdk_ProcessProfile = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/ProcessProfile',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.ProcessProfileRequest,
  anchortype_pb.AnchorProfile,
  /**
   * @param {!proto.pb.cms.ProcessProfileRequest} request
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
 *   !proto.pb.cms.ProcessProfileRequest,
 *   !proto.pb.AnchorProfile>}
 */
const methodInfo_CmsSdk_ProcessProfile = new grpc.web.AbstractClientBase.MethodInfo(
  anchortype_pb.AnchorProfile,
  /**
   * @param {!proto.pb.cms.ProcessProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  anchortype_pb.AnchorProfile.deserializeBinary
);


/**
 * @param {!proto.pb.cms.ProcessProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.AnchorProfile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.AnchorProfile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.processProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/ProcessProfile',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_ProcessProfile,
      callback);
};


/**
 * @param {!proto.pb.cms.ProcessProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.AnchorProfile>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.processProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/ProcessProfile',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_ProcessProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.ViolationListRequest,
 *   !proto.pb.cms.ViolationListReply>}
 */
const methodDescriptor_CmsSdk_GetViolationList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetViolationList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.ViolationListRequest,
  proto.pb.cms.ViolationListReply,
  /**
   * @param {!proto.pb.cms.ViolationListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.ViolationListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.ViolationListRequest,
 *   !proto.pb.cms.ViolationListReply>}
 */
const methodInfo_CmsSdk_GetViolationList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.ViolationListReply,
  /**
   * @param {!proto.pb.cms.ViolationListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.ViolationListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.ViolationListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.ViolationListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.ViolationListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getViolationList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetViolationList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetViolationList,
      callback);
};


/**
 * @param {!proto.pb.cms.ViolationListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.ViolationListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getViolationList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetViolationList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetViolationList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.ProcessViolationRequest,
 *   !proto.pb.ViolationRecord>}
 */
const methodDescriptor_CmsSdk_ProcessViolation = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/ProcessViolation',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.ProcessViolationRequest,
  usertype_pb.ViolationRecord,
  /**
   * @param {!proto.pb.cms.ProcessViolationRequest} request
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
 *   !proto.pb.cms.ProcessViolationRequest,
 *   !proto.pb.ViolationRecord>}
 */
const methodInfo_CmsSdk_ProcessViolation = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.ViolationRecord,
  /**
   * @param {!proto.pb.cms.ProcessViolationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.ViolationRecord.deserializeBinary
);


/**
 * @param {!proto.pb.cms.ProcessViolationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.ViolationRecord)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.ViolationRecord>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.processViolation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/ProcessViolation',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_ProcessViolation,
      callback);
};


/**
 * @param {!proto.pb.cms.ProcessViolationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.ViolationRecord>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.processViolation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/ProcessViolation',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_ProcessViolation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.LiveListRequest,
 *   !proto.pb.cms.LiveListReply>}
 */
const methodDescriptor_CmsSdk_GetLiveList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetLiveList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.LiveListRequest,
  proto.pb.cms.LiveListReply,
  /**
   * @param {!proto.pb.cms.LiveListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.LiveListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.LiveListRequest,
 *   !proto.pb.cms.LiveListReply>}
 */
const methodInfo_CmsSdk_GetLiveList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.LiveListReply,
  /**
   * @param {!proto.pb.cms.LiveListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.LiveListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.LiveListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.LiveListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.LiveListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getLiveList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetLiveList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetLiveList,
      callback);
};


/**
 * @param {!proto.pb.cms.LiveListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.LiveListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getLiveList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetLiveList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetLiveList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.PayListRequest,
 *   !proto.pb.cms.PayListReply>}
 */
const methodDescriptor_CmsSdk_GetPayList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetPayList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.PayListRequest,
  proto.pb.cms.PayListReply,
  /**
   * @param {!proto.pb.cms.PayListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.PayListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.PayListRequest,
 *   !proto.pb.cms.PayListReply>}
 */
const methodInfo_CmsSdk_GetPayList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.PayListReply,
  /**
   * @param {!proto.pb.cms.PayListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.PayListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.PayListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.PayListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.PayListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getPayList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetPayList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetPayList,
      callback);
};


/**
 * @param {!proto.pb.cms.PayListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.PayListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getPayList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetPayList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetPayList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.RobotListRequest,
 *   !proto.pb.cms.RobotListReply>}
 */
const methodDescriptor_CmsSdk_GetRobotList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetRobotList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.RobotListRequest,
  proto.pb.cms.RobotListReply,
  /**
   * @param {!proto.pb.cms.RobotListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.RobotListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.RobotListRequest,
 *   !proto.pb.cms.RobotListReply>}
 */
const methodInfo_CmsSdk_GetRobotList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.RobotListReply,
  /**
   * @param {!proto.pb.cms.RobotListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.RobotListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.RobotListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.RobotListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.RobotListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getRobotList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetRobotList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetRobotList,
      callback);
};


/**
 * @param {!proto.pb.cms.RobotListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.RobotListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getRobotList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetRobotList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetRobotList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.AnchorProfile,
 *   !proto.pb.AnchorProfile>}
 */
const methodDescriptor_CmsSdk_SaveRobot = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/SaveRobot',
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
const methodInfo_CmsSdk_SaveRobot = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.pb.cms.CmsSdkClient.prototype.saveRobot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/SaveRobot',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SaveRobot,
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
proto.pb.cms.CmsSdkPromiseClient.prototype.saveRobot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/SaveRobot',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SaveRobot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.RobotMessageListRequest,
 *   !proto.pb.cms.RobotMessageListReply>}
 */
const methodDescriptor_CmsSdk_GetRobotMessageList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetRobotMessageList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.RobotMessageListRequest,
  proto.pb.cms.RobotMessageListReply,
  /**
   * @param {!proto.pb.cms.RobotMessageListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.RobotMessageListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.RobotMessageListRequest,
 *   !proto.pb.cms.RobotMessageListReply>}
 */
const methodInfo_CmsSdk_GetRobotMessageList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.RobotMessageListReply,
  /**
   * @param {!proto.pb.cms.RobotMessageListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.RobotMessageListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.RobotMessageListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.RobotMessageListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.RobotMessageListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getRobotMessageList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetRobotMessageList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetRobotMessageList,
      callback);
};


/**
 * @param {!proto.pb.cms.RobotMessageListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.RobotMessageListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getRobotMessageList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetRobotMessageList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetRobotMessageList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.RobotMessage,
 *   !proto.pb.RobotMessage>}
 */
const methodDescriptor_CmsSdk_SaveRobotMessage = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/SaveRobotMessage',
  grpc.web.MethodType.UNARY,
  cmstype_pb.RobotMessage,
  cmstype_pb.RobotMessage,
  /**
   * @param {!proto.pb.RobotMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  cmstype_pb.RobotMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.RobotMessage,
 *   !proto.pb.RobotMessage>}
 */
const methodInfo_CmsSdk_SaveRobotMessage = new grpc.web.AbstractClientBase.MethodInfo(
  cmstype_pb.RobotMessage,
  /**
   * @param {!proto.pb.RobotMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  cmstype_pb.RobotMessage.deserializeBinary
);


/**
 * @param {!proto.pb.RobotMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.RobotMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.RobotMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.saveRobotMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/SaveRobotMessage',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SaveRobotMessage,
      callback);
};


/**
 * @param {!proto.pb.RobotMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.RobotMessage>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.saveRobotMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/SaveRobotMessage',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SaveRobotMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.MomentListRequest,
 *   !proto.pb.cms.MomentListReply>}
 */
const methodDescriptor_CmsSdk_GetMomentList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetMomentList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.MomentListRequest,
  proto.pb.cms.MomentListReply,
  /**
   * @param {!proto.pb.cms.MomentListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.MomentListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.MomentListRequest,
 *   !proto.pb.cms.MomentListReply>}
 */
const methodInfo_CmsSdk_GetMomentList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.MomentListReply,
  /**
   * @param {!proto.pb.cms.MomentListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.MomentListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.MomentListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.MomentListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.MomentListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getMomentList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetMomentList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetMomentList,
      callback);
};


/**
 * @param {!proto.pb.cms.MomentListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.MomentListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getMomentList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetMomentList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetMomentList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Moment,
 *   !proto.pb.Moment>}
 */
const methodDescriptor_CmsSdk_SaveMoment = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/SaveMoment',
  grpc.web.MethodType.UNARY,
  usertype_pb.Moment,
  usertype_pb.Moment,
  /**
   * @param {!proto.pb.Moment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.Moment.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Moment,
 *   !proto.pb.Moment>}
 */
const methodInfo_CmsSdk_SaveMoment = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.Moment,
  /**
   * @param {!proto.pb.Moment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.Moment.deserializeBinary
);


/**
 * @param {!proto.pb.Moment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Moment)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Moment>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.saveMoment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/SaveMoment',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SaveMoment,
      callback);
};


/**
 * @param {!proto.pb.Moment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Moment>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.saveMoment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/SaveMoment',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SaveMoment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.AutoMessageListRequest,
 *   !proto.pb.cms.AutoMessageListReply>}
 */
const methodDescriptor_CmsSdk_GetAutoMessageList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetAutoMessageList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.AutoMessageListRequest,
  proto.pb.cms.AutoMessageListReply,
  /**
   * @param {!proto.pb.cms.AutoMessageListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AutoMessageListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.AutoMessageListRequest,
 *   !proto.pb.cms.AutoMessageListReply>}
 */
const methodInfo_CmsSdk_GetAutoMessageList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.AutoMessageListReply,
  /**
   * @param {!proto.pb.cms.AutoMessageListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.AutoMessageListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.AutoMessageListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.AutoMessageListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.AutoMessageListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getAutoMessageList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAutoMessageList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAutoMessageList,
      callback);
};


/**
 * @param {!proto.pb.cms.AutoMessageListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.AutoMessageListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getAutoMessageList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetAutoMessageList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetAutoMessageList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.AutoMessage,
 *   !proto.pb.AutoMessage>}
 */
const methodDescriptor_CmsSdk_SaveAutoMessage = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/SaveAutoMessage',
  grpc.web.MethodType.UNARY,
  cmstype_pb.AutoMessage,
  cmstype_pb.AutoMessage,
  /**
   * @param {!proto.pb.AutoMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  cmstype_pb.AutoMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.AutoMessage,
 *   !proto.pb.AutoMessage>}
 */
const methodInfo_CmsSdk_SaveAutoMessage = new grpc.web.AbstractClientBase.MethodInfo(
  cmstype_pb.AutoMessage,
  /**
   * @param {!proto.pb.AutoMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  cmstype_pb.AutoMessage.deserializeBinary
);


/**
 * @param {!proto.pb.AutoMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.AutoMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.AutoMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.saveAutoMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/SaveAutoMessage',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SaveAutoMessage,
      callback);
};


/**
 * @param {!proto.pb.AutoMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.AutoMessage>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.saveAutoMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/SaveAutoMessage',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SaveAutoMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.ChatMessageListRequest,
 *   !proto.pb.cms.ChatMessageListReply>}
 */
const methodDescriptor_CmsSdk_GetChatMessageList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetChatMessageList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.ChatMessageListRequest,
  proto.pb.cms.ChatMessageListReply,
  /**
   * @param {!proto.pb.cms.ChatMessageListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.ChatMessageListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.ChatMessageListRequest,
 *   !proto.pb.cms.ChatMessageListReply>}
 */
const methodInfo_CmsSdk_GetChatMessageList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.ChatMessageListReply,
  /**
   * @param {!proto.pb.cms.ChatMessageListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.ChatMessageListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.ChatMessageListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.ChatMessageListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.ChatMessageListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getChatMessageList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetChatMessageList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetChatMessageList,
      callback);
};


/**
 * @param {!proto.pb.cms.ChatMessageListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.ChatMessageListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getChatMessageList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetChatMessageList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetChatMessageList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.CallListRequest,
 *   !proto.pb.cms.CallListReply>}
 */
const methodDescriptor_CmsSdk_GetCallList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetCallList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.CallListRequest,
  proto.pb.cms.CallListReply,
  /**
   * @param {!proto.pb.cms.CallListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.CallListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.CallListRequest,
 *   !proto.pb.cms.CallListReply>}
 */
const methodInfo_CmsSdk_GetCallList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.CallListReply,
  /**
   * @param {!proto.pb.cms.CallListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.CallListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.CallListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.CallListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.CallListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getCallList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetCallList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetCallList,
      callback);
};


/**
 * @param {!proto.pb.cms.CallListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.CallListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getCallList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetCallList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetCallList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.TransactionListRequest,
 *   !proto.pb.cms.TransactionListReply>}
 */
const methodDescriptor_CmsSdk_GetTransactionList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetTransactionList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.TransactionListRequest,
  proto.pb.cms.TransactionListReply,
  /**
   * @param {!proto.pb.cms.TransactionListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.TransactionListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.TransactionListRequest,
 *   !proto.pb.cms.TransactionListReply>}
 */
const methodInfo_CmsSdk_GetTransactionList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.TransactionListReply,
  /**
   * @param {!proto.pb.cms.TransactionListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.TransactionListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.TransactionListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.TransactionListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.TransactionListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getTransactionList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetTransactionList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetTransactionList,
      callback);
};


/**
 * @param {!proto.pb.cms.TransactionListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.TransactionListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getTransactionList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetTransactionList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetTransactionList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.CreateSettleRequest,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_CmsSdk_CreateSettleRecord = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/CreateSettleRecord',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.CreateSettleRequest,
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.cms.CreateSettleRequest} request
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
 *   !proto.pb.cms.CreateSettleRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_CmsSdk_CreateSettleRecord = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.cms.CreateSettleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.cms.CreateSettleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.createSettleRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/CreateSettleRecord',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_CreateSettleRecord,
      callback);
};


/**
 * @param {!proto.pb.cms.CreateSettleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.createSettleRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/CreateSettleRecord',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_CreateSettleRecord);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.SubmitSettleRequest,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_CmsSdk_SubmitSettleRecord = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/SubmitSettleRecord',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.SubmitSettleRequest,
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.cms.SubmitSettleRequest} request
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
 *   !proto.pb.cms.SubmitSettleRequest,
 *   !proto.pb.Empty>}
 */
const methodInfo_CmsSdk_SubmitSettleRecord = new grpc.web.AbstractClientBase.MethodInfo(
  usertype_pb.Empty,
  /**
   * @param {!proto.pb.cms.SubmitSettleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  usertype_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.cms.SubmitSettleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.submitSettleRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/SubmitSettleRecord',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SubmitSettleRecord,
      callback);
};


/**
 * @param {!proto.pb.cms.SubmitSettleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.submitSettleRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/SubmitSettleRecord',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_SubmitSettleRecord);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.SettleProgressRequest,
 *   !proto.pb.cms.SettleProgressReply>}
 */
const methodDescriptor_CmsSdk_QuerySettleProgress = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/QuerySettleProgress',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.SettleProgressRequest,
  proto.pb.cms.SettleProgressReply,
  /**
   * @param {!proto.pb.cms.SettleProgressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.SettleProgressReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.SettleProgressRequest,
 *   !proto.pb.cms.SettleProgressReply>}
 */
const methodInfo_CmsSdk_QuerySettleProgress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.SettleProgressReply,
  /**
   * @param {!proto.pb.cms.SettleProgressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.SettleProgressReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.SettleProgressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.SettleProgressReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.SettleProgressReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.querySettleProgress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/QuerySettleProgress',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_QuerySettleProgress,
      callback);
};


/**
 * @param {!proto.pb.cms.SettleProgressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.SettleProgressReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.querySettleProgress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/QuerySettleProgress',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_QuerySettleProgress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.cms.SettleListRequest,
 *   !proto.pb.cms.SettleListReply>}
 */
const methodDescriptor_CmsSdk_GetSettleList = new grpc.web.MethodDescriptor(
  '/pb.cms.CmsSdk/GetSettleList',
  grpc.web.MethodType.UNARY,
  proto.pb.cms.SettleListRequest,
  proto.pb.cms.SettleListReply,
  /**
   * @param {!proto.pb.cms.SettleListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.SettleListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.cms.SettleListRequest,
 *   !proto.pb.cms.SettleListReply>}
 */
const methodInfo_CmsSdk_GetSettleList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.cms.SettleListReply,
  /**
   * @param {!proto.pb.cms.SettleListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.cms.SettleListReply.deserializeBinary
);


/**
 * @param {!proto.pb.cms.SettleListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.cms.SettleListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.cms.SettleListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.cms.CmsSdkClient.prototype.getSettleList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetSettleList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetSettleList,
      callback);
};


/**
 * @param {!proto.pb.cms.SettleListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.cms.SettleListReply>}
 *     Promise that resolves to the response
 */
proto.pb.cms.CmsSdkPromiseClient.prototype.getSettleList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.cms.CmsSdk/GetSettleList',
      request,
      metadata || {},
      methodDescriptor_CmsSdk_GetSettleList);
};


module.exports = proto.pb.cms;

