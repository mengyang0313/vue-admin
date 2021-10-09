// source: cms.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var usertype_pb = require('./usertype_pb.js');
goog.object.extend(proto, usertype_pb);
var anchortype_pb = require('./anchortype_pb.js');
goog.object.extend(proto, anchortype_pb);
var cmstype_pb = require('./cmstype_pb.js');
goog.object.extend(proto, cmstype_pb);
goog.exportSymbol('proto.pb.cms.AdjustBalanceReply', null, global);
goog.exportSymbol('proto.pb.cms.AdjustBalanceRequest', null, global);
goog.exportSymbol('proto.pb.cms.AdminFileChunk', null, global);
goog.exportSymbol('proto.pb.cms.AdminListReply', null, global);
goog.exportSymbol('proto.pb.cms.AgoraKeyReply', null, global);
goog.exportSymbol('proto.pb.cms.AgoraKeyRequest', null, global);
goog.exportSymbol('proto.pb.cms.AnchorFullReply', null, global);
goog.exportSymbol('proto.pb.cms.AnchorFullRequest', null, global);
goog.exportSymbol('proto.pb.cms.AnchorListReply', null, global);
goog.exportSymbol('proto.pb.cms.AnchorListRequest', null, global);
goog.exportSymbol('proto.pb.cms.AnchorStatReply', null, global);
goog.exportSymbol('proto.pb.cms.AnchorStatRequest', null, global);
goog.exportSymbol('proto.pb.cms.AppListReply', null, global);
goog.exportSymbol('proto.pb.cms.AppListRequest', null, global);
goog.exportSymbol('proto.pb.cms.AppStat', null, global);
goog.exportSymbol('proto.pb.cms.AreaConfigListReply', null, global);
goog.exportSymbol('proto.pb.cms.AreaConfigListRequest', null, global);
goog.exportSymbol('proto.pb.cms.AreaListReply', null, global);
goog.exportSymbol('proto.pb.cms.AreaStatReply', null, global);
goog.exportSymbol('proto.pb.cms.AreaStatRequest', null, global);
goog.exportSymbol('proto.pb.cms.AuthorizeAnchorRequest', null, global);
goog.exportSymbol('proto.pb.cms.AutoMessageListReply', null, global);
goog.exportSymbol('proto.pb.cms.AutoMessageListRequest', null, global);
goog.exportSymbol('proto.pb.cms.BlockRequest', null, global);
goog.exportSymbol('proto.pb.cms.CallListReply', null, global);
goog.exportSymbol('proto.pb.cms.CallListRequest', null, global);
goog.exportSymbol('proto.pb.cms.ChatMessageListReply', null, global);
goog.exportSymbol('proto.pb.cms.ChatMessageListRequest', null, global);
goog.exportSymbol('proto.pb.cms.CommodityListReply', null, global);
goog.exportSymbol('proto.pb.cms.CommodityListRequest', null, global);
goog.exportSymbol('proto.pb.cms.CountryConfigListReply', null, global);
goog.exportSymbol('proto.pb.cms.CountryConfigListRequest', null, global);
goog.exportSymbol('proto.pb.cms.CreateSettleRequest', null, global);
goog.exportSymbol('proto.pb.cms.DeleteUserRequest', null, global);
goog.exportSymbol('proto.pb.cms.GuildListReply', null, global);
goog.exportSymbol('proto.pb.cms.HomeStatReply', null, global);
goog.exportSymbol('proto.pb.cms.HomeStatRequest', null, global);
goog.exportSymbol('proto.pb.cms.LiveListReply', null, global);
goog.exportSymbol('proto.pb.cms.LiveListRequest', null, global);
goog.exportSymbol('proto.pb.cms.LoginRequest', null, global);
goog.exportSymbol('proto.pb.cms.MigrateRequest', null, global);
goog.exportSymbol('proto.pb.cms.MomentListReply', null, global);
goog.exportSymbol('proto.pb.cms.MomentListRequest', null, global);
goog.exportSymbol('proto.pb.cms.OverviewReply', null, global);
goog.exportSymbol('proto.pb.cms.OverviewRequest', null, global);
goog.exportSymbol('proto.pb.cms.PayChannelListReply', null, global);
goog.exportSymbol('proto.pb.cms.PayChannelListRequest', null, global);
goog.exportSymbol('proto.pb.cms.PayConfigListReply', null, global);
goog.exportSymbol('proto.pb.cms.PayConfigListRequest', null, global);
goog.exportSymbol('proto.pb.cms.PayListReply', null, global);
goog.exportSymbol('proto.pb.cms.PayListRequest', null, global);
goog.exportSymbol('proto.pb.cms.ProcessProfileRequest', null, global);
goog.exportSymbol('proto.pb.cms.ProcessViolationRequest', null, global);
goog.exportSymbol('proto.pb.cms.ProfileListReply', null, global);
goog.exportSymbol('proto.pb.cms.ProfileListRequest', null, global);
goog.exportSymbol('proto.pb.cms.RobotListReply', null, global);
goog.exportSymbol('proto.pb.cms.RobotListRequest', null, global);
goog.exportSymbol('proto.pb.cms.RobotMessageListReply', null, global);
goog.exportSymbol('proto.pb.cms.RobotMessageListRequest', null, global);
goog.exportSymbol('proto.pb.cms.SettleListReply', null, global);
goog.exportSymbol('proto.pb.cms.SettleListRequest', null, global);
goog.exportSymbol('proto.pb.cms.SettleProgressReply', null, global);
goog.exportSymbol('proto.pb.cms.SettleProgressRequest', null, global);
goog.exportSymbol('proto.pb.cms.SubmitSettleRequest', null, global);
goog.exportSymbol('proto.pb.cms.TransactionListReply', null, global);
goog.exportSymbol('proto.pb.cms.TransactionListRequest', null, global);
goog.exportSymbol('proto.pb.cms.UnblockRequest', null, global);
goog.exportSymbol('proto.pb.cms.UserListReply', null, global);
goog.exportSymbol('proto.pb.cms.UserListRequest', null, global);
goog.exportSymbol('proto.pb.cms.VersionListReply', null, global);
goog.exportSymbol('proto.pb.cms.VersionListRequest', null, global);
goog.exportSymbol('proto.pb.cms.ViolationListReply', null, global);
goog.exportSymbol('proto.pb.cms.ViolationListRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AreaListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.AreaListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.AreaListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AreaListReply.displayName = 'proto.pb.cms.AreaListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.LoginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.LoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.LoginRequest.displayName = 'proto.pb.cms.LoginRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.OverviewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.OverviewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.OverviewRequest.displayName = 'proto.pb.cms.OverviewRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.OverviewReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.OverviewReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.OverviewReply.displayName = 'proto.pb.cms.OverviewReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.HomeStatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.HomeStatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.HomeStatRequest.displayName = 'proto.pb.cms.HomeStatRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AppStat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AppStat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AppStat.displayName = 'proto.pb.cms.AppStat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.HomeStatReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.HomeStatReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.HomeStatReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.HomeStatReply.displayName = 'proto.pb.cms.HomeStatReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AreaStatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AreaStatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AreaStatRequest.displayName = 'proto.pb.cms.AreaStatRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AreaStatReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.AreaStatReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.AreaStatReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AreaStatReply.displayName = 'proto.pb.cms.AreaStatReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AnchorStatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AnchorStatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AnchorStatRequest.displayName = 'proto.pb.cms.AnchorStatRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AnchorStatReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.AnchorStatReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.AnchorStatReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AnchorStatReply.displayName = 'proto.pb.cms.AnchorStatReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AdminListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.AdminListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.AdminListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AdminListReply.displayName = 'proto.pb.cms.AdminListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.GuildListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.GuildListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.GuildListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.GuildListReply.displayName = 'proto.pb.cms.GuildListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AnchorListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AnchorListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AnchorListRequest.displayName = 'proto.pb.cms.AnchorListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AnchorListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.AnchorListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.AnchorListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AnchorListReply.displayName = 'proto.pb.cms.AnchorListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.UserListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.UserListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.UserListRequest.displayName = 'proto.pb.cms.UserListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.UserListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.UserListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.UserListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.UserListReply.displayName = 'proto.pb.cms.UserListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AdjustBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AdjustBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AdjustBalanceRequest.displayName = 'proto.pb.cms.AdjustBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AdjustBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AdjustBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AdjustBalanceReply.displayName = 'proto.pb.cms.AdjustBalanceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.DeleteUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.DeleteUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.DeleteUserRequest.displayName = 'proto.pb.cms.DeleteUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.BlockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.BlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.BlockRequest.displayName = 'proto.pb.cms.BlockRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.UnblockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.UnblockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.UnblockRequest.displayName = 'proto.pb.cms.UnblockRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.MigrateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.MigrateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.MigrateRequest.displayName = 'proto.pb.cms.MigrateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AuthorizeAnchorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AuthorizeAnchorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AuthorizeAnchorRequest.displayName = 'proto.pb.cms.AuthorizeAnchorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AnchorFullRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AnchorFullRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AnchorFullRequest.displayName = 'proto.pb.cms.AnchorFullRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AnchorFullReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.AnchorFullReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.AnchorFullReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AnchorFullReply.displayName = 'proto.pb.cms.AnchorFullReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.ProfileListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.ProfileListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.ProfileListRequest.displayName = 'proto.pb.cms.ProfileListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.ProfileListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.ProfileListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.ProfileListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.ProfileListReply.displayName = 'proto.pb.cms.ProfileListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.ProcessProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.ProcessProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.ProcessProfileRequest.displayName = 'proto.pb.cms.ProcessProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.ViolationListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.ViolationListRequest.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.ViolationListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.ViolationListRequest.displayName = 'proto.pb.cms.ViolationListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.ViolationListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.ViolationListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.ViolationListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.ViolationListReply.displayName = 'proto.pb.cms.ViolationListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.ProcessViolationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.ProcessViolationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.ProcessViolationRequest.displayName = 'proto.pb.cms.ProcessViolationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.LiveListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.LiveListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.LiveListRequest.displayName = 'proto.pb.cms.LiveListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.LiveListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.LiveListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.LiveListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.LiveListReply.displayName = 'proto.pb.cms.LiveListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.PayListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.PayListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.PayListRequest.displayName = 'proto.pb.cms.PayListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.PayListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.PayListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.PayListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.PayListReply.displayName = 'proto.pb.cms.PayListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.RobotListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.RobotListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.RobotListRequest.displayName = 'proto.pb.cms.RobotListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.RobotListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.RobotListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.RobotListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.RobotListReply.displayName = 'proto.pb.cms.RobotListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.RobotMessageListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.RobotMessageListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.RobotMessageListRequest.displayName = 'proto.pb.cms.RobotMessageListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.RobotMessageListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.RobotMessageListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.RobotMessageListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.RobotMessageListReply.displayName = 'proto.pb.cms.RobotMessageListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.MomentListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.MomentListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.MomentListRequest.displayName = 'proto.pb.cms.MomentListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.MomentListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.MomentListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.MomentListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.MomentListReply.displayName = 'proto.pb.cms.MomentListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AutoMessageListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AutoMessageListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AutoMessageListRequest.displayName = 'proto.pb.cms.AutoMessageListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AutoMessageListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.AutoMessageListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.AutoMessageListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AutoMessageListReply.displayName = 'proto.pb.cms.AutoMessageListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.ChatMessageListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.ChatMessageListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.ChatMessageListRequest.displayName = 'proto.pb.cms.ChatMessageListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.ChatMessageListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.ChatMessageListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.ChatMessageListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.ChatMessageListReply.displayName = 'proto.pb.cms.ChatMessageListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.CallListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.CallListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.CallListRequest.displayName = 'proto.pb.cms.CallListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.CallListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.CallListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.CallListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.CallListReply.displayName = 'proto.pb.cms.CallListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.TransactionListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.TransactionListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.TransactionListRequest.displayName = 'proto.pb.cms.TransactionListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.TransactionListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.TransactionListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.TransactionListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.TransactionListReply.displayName = 'proto.pb.cms.TransactionListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.CreateSettleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.CreateSettleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.CreateSettleRequest.displayName = 'proto.pb.cms.CreateSettleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.SubmitSettleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.SubmitSettleRequest.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.SubmitSettleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.SubmitSettleRequest.displayName = 'proto.pb.cms.SubmitSettleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.SettleProgressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.SettleProgressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.SettleProgressRequest.displayName = 'proto.pb.cms.SettleProgressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.SettleProgressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.SettleProgressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.SettleProgressReply.displayName = 'proto.pb.cms.SettleProgressReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.SettleListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.SettleListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.SettleListRequest.displayName = 'proto.pb.cms.SettleListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.SettleListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.SettleListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.SettleListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.SettleListReply.displayName = 'proto.pb.cms.SettleListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AppListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AppListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AppListRequest.displayName = 'proto.pb.cms.AppListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AppListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.AppListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.AppListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AppListReply.displayName = 'proto.pb.cms.AppListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.VersionListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.VersionListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.VersionListRequest.displayName = 'proto.pb.cms.VersionListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.VersionListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.VersionListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.VersionListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.VersionListReply.displayName = 'proto.pb.cms.VersionListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AreaConfigListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AreaConfigListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AreaConfigListRequest.displayName = 'proto.pb.cms.AreaConfigListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AreaConfigListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.AreaConfigListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.AreaConfigListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AreaConfigListReply.displayName = 'proto.pb.cms.AreaConfigListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.CountryConfigListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.CountryConfigListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.CountryConfigListRequest.displayName = 'proto.pb.cms.CountryConfigListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.CountryConfigListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.CountryConfigListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.CountryConfigListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.CountryConfigListReply.displayName = 'proto.pb.cms.CountryConfigListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.PayChannelListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.PayChannelListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.PayChannelListRequest.displayName = 'proto.pb.cms.PayChannelListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.PayChannelListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.PayChannelListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.PayChannelListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.PayChannelListReply.displayName = 'proto.pb.cms.PayChannelListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.PayConfigListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.PayConfigListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.PayConfigListRequest.displayName = 'proto.pb.cms.PayConfigListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.PayConfigListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.PayConfigListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.PayConfigListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.PayConfigListReply.displayName = 'proto.pb.cms.PayConfigListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.CommodityListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.CommodityListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.CommodityListRequest.displayName = 'proto.pb.cms.CommodityListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.CommodityListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.cms.CommodityListReply.repeatedFields_, null);
};
goog.inherits(proto.pb.cms.CommodityListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.CommodityListReply.displayName = 'proto.pb.cms.CommodityListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AgoraKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AgoraKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AgoraKeyRequest.displayName = 'proto.pb.cms.AgoraKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AgoraKeyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AgoraKeyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AgoraKeyReply.displayName = 'proto.pb.cms.AgoraKeyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.cms.AdminFileChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.cms.AdminFileChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.cms.AdminFileChunk.displayName = 'proto.pb.cms.AdminFileChunk';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.AreaListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AreaListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AreaListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AreaListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AreaListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    areasList: jspb.Message.toObjectList(msg.getAreasList(),
    usertype_pb.Area.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AreaListReply}
 */
proto.pb.cms.AreaListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AreaListReply;
  return proto.pb.cms.AreaListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AreaListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AreaListReply}
 */
proto.pb.cms.AreaListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new usertype_pb.Area;
      reader.readMessage(value,usertype_pb.Area.deserializeBinaryFromReader);
      msg.addAreas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AreaListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AreaListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AreaListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AreaListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      usertype_pb.Area.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.Area areas = 1;
 * @return {!Array<!proto.pb.Area>}
 */
proto.pb.cms.AreaListReply.prototype.getAreasList = function() {
  return /** @type{!Array<!proto.pb.Area>} */ (
    jspb.Message.getRepeatedWrapperField(this, usertype_pb.Area, 1));
};


/**
 * @param {!Array<!proto.pb.Area>} value
 * @return {!proto.pb.cms.AreaListReply} returns this
*/
proto.pb.cms.AreaListReply.prototype.setAreasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Area=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Area}
 */
proto.pb.cms.AreaListReply.prototype.addAreas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Area, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.AreaListReply} returns this
 */
proto.pb.cms.AreaListReply.prototype.clearAreasList = function() {
  return this.setAreasList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.LoginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.LoginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.LoginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.LoginRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.LoginRequest}
 */
proto.pb.cms.LoginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.LoginRequest;
  return proto.pb.cms.LoginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.LoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.LoginRequest}
 */
proto.pb.cms.LoginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.LoginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.LoginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.LoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.LoginRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.pb.cms.LoginRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.cms.LoginRequest} returns this
 */
proto.pb.cms.LoginRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.pb.cms.LoginRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.cms.LoginRequest} returns this
 */
proto.pb.cms.LoginRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.OverviewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.OverviewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.OverviewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.OverviewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endAt: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.OverviewRequest}
 */
proto.pb.cms.OverviewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.OverviewRequest;
  return proto.pb.cms.OverviewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.OverviewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.OverviewRequest}
 */
proto.pb.cms.OverviewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStartAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEndAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.OverviewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.OverviewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.OverviewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.OverviewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStartAt();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getEndAt();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.OverviewRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewRequest} returns this
 */
proto.pb.cms.OverviewRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 start_at = 2;
 * @return {number}
 */
proto.pb.cms.OverviewRequest.prototype.getStartAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewRequest} returns this
 */
proto.pb.cms.OverviewRequest.prototype.setStartAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 end_at = 3;
 * @return {number}
 */
proto.pb.cms.OverviewRequest.prototype.getEndAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewRequest} returns this
 */
proto.pb.cms.OverviewRequest.prototype.setEndAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.OverviewReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.OverviewReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.OverviewReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.OverviewReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    income: jspb.Message.getFieldWithDefault(msg, 1, 0),
    payCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    newUser: jspb.Message.getFieldWithDefault(msg, 3, 0),
    activeUser: jspb.Message.getFieldWithDefault(msg, 4, 0),
    busyAnchor: jspb.Message.getFieldWithDefault(msg, 5, 0),
    onlineAnchor: jspb.Message.getFieldWithDefault(msg, 6, 0),
    reviewAnchor: jspb.Message.getFieldWithDefault(msg, 7, 0),
    reviewProfile: jspb.Message.getFieldWithDefault(msg, 8, 0),
    reviewVideo: jspb.Message.getFieldWithDefault(msg, 9, 0),
    newAmount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    expenseAmount: jspb.Message.getFieldWithDefault(msg, 11, 0),
    totalAmount: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.OverviewReply}
 */
proto.pb.cms.OverviewReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.OverviewReply;
  return proto.pb.cms.OverviewReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.OverviewReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.OverviewReply}
 */
proto.pb.cms.OverviewReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIncome(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPayCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNewUser(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActiveUser(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBusyAnchor(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOnlineAnchor(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReviewAnchor(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReviewProfile(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReviewVideo(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNewAmount(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpenseAmount(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.OverviewReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.OverviewReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.OverviewReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.OverviewReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncome();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPayCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getNewUser();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getActiveUser();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getBusyAnchor();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getOnlineAnchor();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getReviewAnchor();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getReviewProfile();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getReviewVideo();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getNewAmount();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getExpenseAmount();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getTotalAmount();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
};


/**
 * optional uint32 income = 1;
 * @return {number}
 */
proto.pb.cms.OverviewReply.prototype.getIncome = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewReply} returns this
 */
proto.pb.cms.OverviewReply.prototype.setIncome = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 pay_count = 2;
 * @return {number}
 */
proto.pb.cms.OverviewReply.prototype.getPayCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewReply} returns this
 */
proto.pb.cms.OverviewReply.prototype.setPayCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 new_user = 3;
 * @return {number}
 */
proto.pb.cms.OverviewReply.prototype.getNewUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewReply} returns this
 */
proto.pb.cms.OverviewReply.prototype.setNewUser = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 active_user = 4;
 * @return {number}
 */
proto.pb.cms.OverviewReply.prototype.getActiveUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewReply} returns this
 */
proto.pb.cms.OverviewReply.prototype.setActiveUser = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 busy_anchor = 5;
 * @return {number}
 */
proto.pb.cms.OverviewReply.prototype.getBusyAnchor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewReply} returns this
 */
proto.pb.cms.OverviewReply.prototype.setBusyAnchor = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 online_anchor = 6;
 * @return {number}
 */
proto.pb.cms.OverviewReply.prototype.getOnlineAnchor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewReply} returns this
 */
proto.pb.cms.OverviewReply.prototype.setOnlineAnchor = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 review_anchor = 7;
 * @return {number}
 */
proto.pb.cms.OverviewReply.prototype.getReviewAnchor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewReply} returns this
 */
proto.pb.cms.OverviewReply.prototype.setReviewAnchor = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 review_profile = 8;
 * @return {number}
 */
proto.pb.cms.OverviewReply.prototype.getReviewProfile = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewReply} returns this
 */
proto.pb.cms.OverviewReply.prototype.setReviewProfile = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 review_video = 9;
 * @return {number}
 */
proto.pb.cms.OverviewReply.prototype.getReviewVideo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewReply} returns this
 */
proto.pb.cms.OverviewReply.prototype.setReviewVideo = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 new_amount = 10;
 * @return {number}
 */
proto.pb.cms.OverviewReply.prototype.getNewAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewReply} returns this
 */
proto.pb.cms.OverviewReply.prototype.setNewAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 expense_amount = 11;
 * @return {number}
 */
proto.pb.cms.OverviewReply.prototype.getExpenseAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewReply} returns this
 */
proto.pb.cms.OverviewReply.prototype.setExpenseAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint64 total_amount = 12;
 * @return {number}
 */
proto.pb.cms.OverviewReply.prototype.getTotalAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.OverviewReply} returns this
 */
proto.pb.cms.OverviewReply.prototype.setTotalAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.HomeStatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.HomeStatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.HomeStatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.HomeStatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endAt: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.HomeStatRequest}
 */
proto.pb.cms.HomeStatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.HomeStatRequest;
  return proto.pb.cms.HomeStatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.HomeStatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.HomeStatRequest}
 */
proto.pb.cms.HomeStatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStartAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEndAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.HomeStatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.HomeStatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.HomeStatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.HomeStatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStartAt();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getEndAt();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.HomeStatRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.HomeStatRequest} returns this
 */
proto.pb.cms.HomeStatRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 start_at = 2;
 * @return {number}
 */
proto.pb.cms.HomeStatRequest.prototype.getStartAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.HomeStatRequest} returns this
 */
proto.pb.cms.HomeStatRequest.prototype.setStartAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 end_at = 3;
 * @return {number}
 */
proto.pb.cms.HomeStatRequest.prototype.getEndAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.HomeStatRequest} returns this
 */
proto.pb.cms.HomeStatRequest.prototype.setEndAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AppStat.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AppStat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AppStat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AppStat.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    newIncome: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalIncome: jspb.Message.getFieldWithDefault(msg, 3, 0),
    newUser: jspb.Message.getFieldWithDefault(msg, 4, 0),
    googleIncome: jspb.Message.getFieldWithDefault(msg, 5, 0),
    appleIncome: jspb.Message.getFieldWithDefault(msg, 6, 0),
    otherIncome: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AppStat}
 */
proto.pb.cms.AppStat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AppStat;
  return proto.pb.cms.AppStat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AppStat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AppStat}
 */
proto.pb.cms.AppStat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNewIncome(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalIncome(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNewUser(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGoogleIncome(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppleIncome(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOtherIncome(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AppStat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AppStat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AppStat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AppStat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getNewIncome();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTotalIncome();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getNewUser();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getGoogleIncome();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getAppleIncome();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getOtherIncome();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional uint32 app_id = 1;
 * @return {number}
 */
proto.pb.cms.AppStat.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AppStat} returns this
 */
proto.pb.cms.AppStat.prototype.setAppId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 new_income = 2;
 * @return {number}
 */
proto.pb.cms.AppStat.prototype.getNewIncome = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AppStat} returns this
 */
proto.pb.cms.AppStat.prototype.setNewIncome = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 total_income = 3;
 * @return {number}
 */
proto.pb.cms.AppStat.prototype.getTotalIncome = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AppStat} returns this
 */
proto.pb.cms.AppStat.prototype.setTotalIncome = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 new_user = 4;
 * @return {number}
 */
proto.pb.cms.AppStat.prototype.getNewUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AppStat} returns this
 */
proto.pb.cms.AppStat.prototype.setNewUser = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 google_income = 5;
 * @return {number}
 */
proto.pb.cms.AppStat.prototype.getGoogleIncome = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AppStat} returns this
 */
proto.pb.cms.AppStat.prototype.setGoogleIncome = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 apple_income = 6;
 * @return {number}
 */
proto.pb.cms.AppStat.prototype.getAppleIncome = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AppStat} returns this
 */
proto.pb.cms.AppStat.prototype.setAppleIncome = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 other_income = 7;
 * @return {number}
 */
proto.pb.cms.AppStat.prototype.getOtherIncome = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AppStat} returns this
 */
proto.pb.cms.AppStat.prototype.setOtherIncome = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.HomeStatReply.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.HomeStatReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.HomeStatReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.HomeStatReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.HomeStatReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    statsList: jspb.Message.toObjectList(msg.getStatsList(),
    proto.pb.cms.AppStat.toObject, includeInstance),
    hourlyActivesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.HomeStatReply}
 */
proto.pb.cms.HomeStatReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.HomeStatReply;
  return proto.pb.cms.HomeStatReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.HomeStatReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.HomeStatReply}
 */
proto.pb.cms.HomeStatReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.cms.AppStat;
      reader.readMessage(value,proto.pb.cms.AppStat.deserializeBinaryFromReader);
      msg.addStats(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addHourlyActives(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.HomeStatReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.HomeStatReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.HomeStatReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.HomeStatReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.cms.AppStat.serializeBinaryToWriter
    );
  }
  f = message.getHourlyActivesList();
  if (f.length > 0) {
    writer.writePackedUint32(
      2,
      f
    );
  }
};


/**
 * repeated AppStat stats = 1;
 * @return {!Array<!proto.pb.cms.AppStat>}
 */
proto.pb.cms.HomeStatReply.prototype.getStatsList = function() {
  return /** @type{!Array<!proto.pb.cms.AppStat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.cms.AppStat, 1));
};


/**
 * @param {!Array<!proto.pb.cms.AppStat>} value
 * @return {!proto.pb.cms.HomeStatReply} returns this
*/
proto.pb.cms.HomeStatReply.prototype.setStatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.cms.AppStat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.cms.AppStat}
 */
proto.pb.cms.HomeStatReply.prototype.addStats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.cms.AppStat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.HomeStatReply} returns this
 */
proto.pb.cms.HomeStatReply.prototype.clearStatsList = function() {
  return this.setStatsList([]);
};


/**
 * repeated uint32 hourly_actives = 2;
 * @return {!Array<number>}
 */
proto.pb.cms.HomeStatReply.prototype.getHourlyActivesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.pb.cms.HomeStatReply} returns this
 */
proto.pb.cms.HomeStatReply.prototype.setHourlyActivesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.pb.cms.HomeStatReply} returns this
 */
proto.pb.cms.HomeStatReply.prototype.addHourlyActives = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.HomeStatReply} returns this
 */
proto.pb.cms.HomeStatReply.prototype.clearHourlyActivesList = function() {
  return this.setHourlyActivesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AreaStatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AreaStatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AreaStatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AreaStatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endAt: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AreaStatRequest}
 */
proto.pb.cms.AreaStatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AreaStatRequest;
  return proto.pb.cms.AreaStatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AreaStatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AreaStatRequest}
 */
proto.pb.cms.AreaStatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStartAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEndAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AreaStatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AreaStatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AreaStatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AreaStatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStartAt();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getEndAt();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.AreaStatRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AreaStatRequest} returns this
 */
proto.pb.cms.AreaStatRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 start_at = 2;
 * @return {number}
 */
proto.pb.cms.AreaStatRequest.prototype.getStartAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AreaStatRequest} returns this
 */
proto.pb.cms.AreaStatRequest.prototype.setStartAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 end_at = 3;
 * @return {number}
 */
proto.pb.cms.AreaStatRequest.prototype.getEndAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AreaStatRequest} returns this
 */
proto.pb.cms.AreaStatRequest.prototype.setEndAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.AreaStatReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AreaStatReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AreaStatReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AreaStatReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AreaStatReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    statsList: jspb.Message.toObjectList(msg.getStatsList(),
    cmstype_pb.AreaStat.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AreaStatReply}
 */
proto.pb.cms.AreaStatReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AreaStatReply;
  return proto.pb.cms.AreaStatReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AreaStatReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AreaStatReply}
 */
proto.pb.cms.AreaStatReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cmstype_pb.AreaStat;
      reader.readMessage(value,cmstype_pb.AreaStat.deserializeBinaryFromReader);
      msg.addStats(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AreaStatReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AreaStatReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AreaStatReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AreaStatReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cmstype_pb.AreaStat.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.AreaStat stats = 1;
 * @return {!Array<!proto.pb.AreaStat>}
 */
proto.pb.cms.AreaStatReply.prototype.getStatsList = function() {
  return /** @type{!Array<!proto.pb.AreaStat>} */ (
    jspb.Message.getRepeatedWrapperField(this, cmstype_pb.AreaStat, 1));
};


/**
 * @param {!Array<!proto.pb.AreaStat>} value
 * @return {!proto.pb.cms.AreaStatReply} returns this
*/
proto.pb.cms.AreaStatReply.prototype.setStatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.AreaStat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.AreaStat}
 */
proto.pb.cms.AreaStatReply.prototype.addStats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.AreaStat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.AreaStatReply} returns this
 */
proto.pb.cms.AreaStatReply.prototype.clearStatsList = function() {
  return this.setStatsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AnchorStatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AnchorStatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AnchorStatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AnchorStatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    level: jspb.Message.getFieldWithDefault(msg, 4, 0),
    anchorId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    statAt: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AnchorStatRequest}
 */
proto.pb.cms.AnchorStatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AnchorStatRequest;
  return proto.pb.cms.AnchorStatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AnchorStatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AnchorStatRequest}
 */
proto.pb.cms.AnchorStatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 4:
      var value = /** @type {!proto.pb.AnchorLevel} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAnchorId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStatAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AnchorStatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AnchorStatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AnchorStatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AnchorStatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAnchorId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getStatAt();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint32 page_no = 1;
 * @return {number}
 */
proto.pb.cms.AnchorStatRequest.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorStatRequest} returns this
 */
proto.pb.cms.AnchorStatRequest.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.pb.cms.AnchorStatRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorStatRequest} returns this
 */
proto.pb.cms.AnchorStatRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 area_id = 3;
 * @return {number}
 */
proto.pb.cms.AnchorStatRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorStatRequest} returns this
 */
proto.pb.cms.AnchorStatRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional pb.AnchorLevel level = 4;
 * @return {!proto.pb.AnchorLevel}
 */
proto.pb.cms.AnchorStatRequest.prototype.getLevel = function() {
  return /** @type {!proto.pb.AnchorLevel} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pb.AnchorLevel} value
 * @return {!proto.pb.cms.AnchorStatRequest} returns this
 */
proto.pb.cms.AnchorStatRequest.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint32 anchor_id = 5;
 * @return {number}
 */
proto.pb.cms.AnchorStatRequest.prototype.getAnchorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorStatRequest} returns this
 */
proto.pb.cms.AnchorStatRequest.prototype.setAnchorId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 stat_at = 6;
 * @return {number}
 */
proto.pb.cms.AnchorStatRequest.prototype.getStatAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorStatRequest} returns this
 */
proto.pb.cms.AnchorStatRequest.prototype.setStatAt = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.AnchorStatReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AnchorStatReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AnchorStatReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AnchorStatReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AnchorStatReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    statsList: jspb.Message.toObjectList(msg.getStatsList(),
    cmstype_pb.AnchorStat.toObject, includeInstance),
    pageNo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AnchorStatReply}
 */
proto.pb.cms.AnchorStatReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AnchorStatReply;
  return proto.pb.cms.AnchorStatReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AnchorStatReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AnchorStatReply}
 */
proto.pb.cms.AnchorStatReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cmstype_pb.AnchorStat;
      reader.readMessage(value,cmstype_pb.AnchorStat.deserializeBinaryFromReader);
      msg.addStats(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AnchorStatReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AnchorStatReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AnchorStatReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AnchorStatReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cmstype_pb.AnchorStat.serializeBinaryToWriter
    );
  }
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPage();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * repeated pb.AnchorStat stats = 1;
 * @return {!Array<!proto.pb.AnchorStat>}
 */
proto.pb.cms.AnchorStatReply.prototype.getStatsList = function() {
  return /** @type{!Array<!proto.pb.AnchorStat>} */ (
    jspb.Message.getRepeatedWrapperField(this, cmstype_pb.AnchorStat, 1));
};


/**
 * @param {!Array<!proto.pb.AnchorStat>} value
 * @return {!proto.pb.cms.AnchorStatReply} returns this
*/
proto.pb.cms.AnchorStatReply.prototype.setStatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.AnchorStat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.AnchorStat}
 */
proto.pb.cms.AnchorStatReply.prototype.addStats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.AnchorStat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.AnchorStatReply} returns this
 */
proto.pb.cms.AnchorStatReply.prototype.clearStatsList = function() {
  return this.setStatsList([]);
};


/**
 * optional uint32 page_no = 2;
 * @return {number}
 */
proto.pb.cms.AnchorStatReply.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorStatReply} returns this
 */
proto.pb.cms.AnchorStatReply.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.pb.cms.AnchorStatReply.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorStatReply} returns this
 */
proto.pb.cms.AnchorStatReply.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_page = 4;
 * @return {number}
 */
proto.pb.cms.AnchorStatReply.prototype.getTotalPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorStatReply} returns this
 */
proto.pb.cms.AnchorStatReply.prototype.setTotalPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 total_count = 5;
 * @return {number}
 */
proto.pb.cms.AnchorStatReply.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorStatReply} returns this
 */
proto.pb.cms.AnchorStatReply.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.AdminListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AdminListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AdminListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AdminListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AdminListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    adminsList: jspb.Message.toObjectList(msg.getAdminsList(),
    cmstype_pb.Admin.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AdminListReply}
 */
proto.pb.cms.AdminListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AdminListReply;
  return proto.pb.cms.AdminListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AdminListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AdminListReply}
 */
proto.pb.cms.AdminListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cmstype_pb.Admin;
      reader.readMessage(value,cmstype_pb.Admin.deserializeBinaryFromReader);
      msg.addAdmins(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AdminListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AdminListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AdminListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AdminListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdminsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cmstype_pb.Admin.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.Admin admins = 1;
 * @return {!Array<!proto.pb.Admin>}
 */
proto.pb.cms.AdminListReply.prototype.getAdminsList = function() {
  return /** @type{!Array<!proto.pb.Admin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cmstype_pb.Admin, 1));
};


/**
 * @param {!Array<!proto.pb.Admin>} value
 * @return {!proto.pb.cms.AdminListReply} returns this
*/
proto.pb.cms.AdminListReply.prototype.setAdminsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Admin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Admin}
 */
proto.pb.cms.AdminListReply.prototype.addAdmins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Admin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.AdminListReply} returns this
 */
proto.pb.cms.AdminListReply.prototype.clearAdminsList = function() {
  return this.setAdminsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.GuildListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.GuildListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.GuildListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.GuildListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.GuildListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildsList: jspb.Message.toObjectList(msg.getGuildsList(),
    cmstype_pb.Guild.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.GuildListReply}
 */
proto.pb.cms.GuildListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.GuildListReply;
  return proto.pb.cms.GuildListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.GuildListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.GuildListReply}
 */
proto.pb.cms.GuildListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cmstype_pb.Guild;
      reader.readMessage(value,cmstype_pb.Guild.deserializeBinaryFromReader);
      msg.addGuilds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.GuildListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.GuildListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.GuildListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.GuildListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cmstype_pb.Guild.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.Guild guilds = 1;
 * @return {!Array<!proto.pb.Guild>}
 */
proto.pb.cms.GuildListReply.prototype.getGuildsList = function() {
  return /** @type{!Array<!proto.pb.Guild>} */ (
    jspb.Message.getRepeatedWrapperField(this, cmstype_pb.Guild, 1));
};


/**
 * @param {!Array<!proto.pb.Guild>} value
 * @return {!proto.pb.cms.GuildListReply} returns this
*/
proto.pb.cms.GuildListReply.prototype.setGuildsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Guild=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Guild}
 */
proto.pb.cms.GuildListReply.prototype.addGuilds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Guild, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.GuildListReply} returns this
 */
proto.pb.cms.GuildListReply.prototype.clearGuildsList = function() {
  return this.setGuildsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AnchorListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AnchorListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AnchorListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AnchorListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    anchorId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    guildId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    blockStatus: jspb.Message.getFieldWithDefault(msg, 6, 0),
    onlineStatus: jspb.Message.getFieldWithDefault(msg, 7, 0),
    reviewStatus: jspb.Message.getFieldWithDefault(msg, 8, 0),
    createdStart: jspb.Message.getFieldWithDefault(msg, 9, 0),
    createdEnd: jspb.Message.getFieldWithDefault(msg, 10, 0),
    minOffline: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AnchorListRequest}
 */
proto.pb.cms.AnchorListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AnchorListRequest;
  return proto.pb.cms.AnchorListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AnchorListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AnchorListRequest}
 */
proto.pb.cms.AnchorListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAnchorId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGuildId(value);
      break;
    case 6:
      var value = /** @type {!proto.pb.BlockStatus} */ (reader.readEnum());
      msg.setBlockStatus(value);
      break;
    case 7:
      var value = /** @type {!proto.pb.OnlineStatus} */ (reader.readEnum());
      msg.setOnlineStatus(value);
      break;
    case 8:
      var value = /** @type {!proto.pb.ReviewStatus} */ (reader.readEnum());
      msg.setReviewStatus(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedStart(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedEnd(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinOffline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AnchorListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AnchorListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AnchorListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AnchorListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAnchorId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getGuildId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getBlockStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getOnlineStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getReviewStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getCreatedStart();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getCreatedEnd();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getMinOffline();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
};


/**
 * optional uint32 page_no = 1;
 * @return {number}
 */
proto.pb.cms.AnchorListRequest.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorListRequest} returns this
 */
proto.pb.cms.AnchorListRequest.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.pb.cms.AnchorListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorListRequest} returns this
 */
proto.pb.cms.AnchorListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 anchor_id = 3;
 * @return {number}
 */
proto.pb.cms.AnchorListRequest.prototype.getAnchorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorListRequest} returns this
 */
proto.pb.cms.AnchorListRequest.prototype.setAnchorId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 area_id = 4;
 * @return {number}
 */
proto.pb.cms.AnchorListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorListRequest} returns this
 */
proto.pb.cms.AnchorListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 guild_id = 5;
 * @return {number}
 */
proto.pb.cms.AnchorListRequest.prototype.getGuildId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorListRequest} returns this
 */
proto.pb.cms.AnchorListRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional pb.BlockStatus block_status = 6;
 * @return {!proto.pb.BlockStatus}
 */
proto.pb.cms.AnchorListRequest.prototype.getBlockStatus = function() {
  return /** @type {!proto.pb.BlockStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.pb.BlockStatus} value
 * @return {!proto.pb.cms.AnchorListRequest} returns this
 */
proto.pb.cms.AnchorListRequest.prototype.setBlockStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional pb.OnlineStatus online_status = 7;
 * @return {!proto.pb.OnlineStatus}
 */
proto.pb.cms.AnchorListRequest.prototype.getOnlineStatus = function() {
  return /** @type {!proto.pb.OnlineStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.pb.OnlineStatus} value
 * @return {!proto.pb.cms.AnchorListRequest} returns this
 */
proto.pb.cms.AnchorListRequest.prototype.setOnlineStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional pb.ReviewStatus review_status = 8;
 * @return {!proto.pb.ReviewStatus}
 */
proto.pb.cms.AnchorListRequest.prototype.getReviewStatus = function() {
  return /** @type {!proto.pb.ReviewStatus} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.pb.ReviewStatus} value
 * @return {!proto.pb.cms.AnchorListRequest} returns this
 */
proto.pb.cms.AnchorListRequest.prototype.setReviewStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional uint32 created_start = 9;
 * @return {number}
 */
proto.pb.cms.AnchorListRequest.prototype.getCreatedStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorListRequest} returns this
 */
proto.pb.cms.AnchorListRequest.prototype.setCreatedStart = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 created_end = 10;
 * @return {number}
 */
proto.pb.cms.AnchorListRequest.prototype.getCreatedEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorListRequest} returns this
 */
proto.pb.cms.AnchorListRequest.prototype.setCreatedEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 min_offline = 11;
 * @return {number}
 */
proto.pb.cms.AnchorListRequest.prototype.getMinOffline = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorListRequest} returns this
 */
proto.pb.cms.AnchorListRequest.prototype.setMinOffline = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.AnchorListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AnchorListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AnchorListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AnchorListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AnchorListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    anchorsList: jspb.Message.toObjectList(msg.getAnchorsList(),
    anchortype_pb.AnchorBasic.toObject, includeInstance),
    pageNo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AnchorListReply}
 */
proto.pb.cms.AnchorListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AnchorListReply;
  return proto.pb.cms.AnchorListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AnchorListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AnchorListReply}
 */
proto.pb.cms.AnchorListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new anchortype_pb.AnchorBasic;
      reader.readMessage(value,anchortype_pb.AnchorBasic.deserializeBinaryFromReader);
      msg.addAnchors(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AnchorListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AnchorListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AnchorListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AnchorListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnchorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      anchortype_pb.AnchorBasic.serializeBinaryToWriter
    );
  }
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPage();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * repeated pb.AnchorBasic anchors = 1;
 * @return {!Array<!proto.pb.AnchorBasic>}
 */
proto.pb.cms.AnchorListReply.prototype.getAnchorsList = function() {
  return /** @type{!Array<!proto.pb.AnchorBasic>} */ (
    jspb.Message.getRepeatedWrapperField(this, anchortype_pb.AnchorBasic, 1));
};


/**
 * @param {!Array<!proto.pb.AnchorBasic>} value
 * @return {!proto.pb.cms.AnchorListReply} returns this
*/
proto.pb.cms.AnchorListReply.prototype.setAnchorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.AnchorBasic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.AnchorBasic}
 */
proto.pb.cms.AnchorListReply.prototype.addAnchors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.AnchorBasic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.AnchorListReply} returns this
 */
proto.pb.cms.AnchorListReply.prototype.clearAnchorsList = function() {
  return this.setAnchorsList([]);
};


/**
 * optional uint32 page_no = 2;
 * @return {number}
 */
proto.pb.cms.AnchorListReply.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorListReply} returns this
 */
proto.pb.cms.AnchorListReply.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.pb.cms.AnchorListReply.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorListReply} returns this
 */
proto.pb.cms.AnchorListReply.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_page = 4;
 * @return {number}
 */
proto.pb.cms.AnchorListReply.prototype.getTotalPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorListReply} returns this
 */
proto.pb.cms.AnchorListReply.prototype.setTotalPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 total_count = 5;
 * @return {number}
 */
proto.pb.cms.AnchorListReply.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorListReply} returns this
 */
proto.pb.cms.AnchorListReply.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.UserListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.UserListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.UserListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.UserListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    nickname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    vipOnly: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    depositOnly: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    minBalance: jspb.Message.getFieldWithDefault(msg, 8, 0),
    createdStart: jspb.Message.getFieldWithDefault(msg, 9, 0),
    createdEnd: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.UserListRequest}
 */
proto.pb.cms.UserListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.UserListRequest;
  return proto.pb.cms.UserListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.UserListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.UserListRequest}
 */
proto.pb.cms.UserListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVipOnly(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDepositOnly(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinBalance(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedStart(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.UserListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.UserListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.UserListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.UserListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getVipOnly();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDepositOnly();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getMinBalance();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getCreatedStart();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getCreatedEnd();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
};


/**
 * optional uint32 page_no = 1;
 * @return {number}
 */
proto.pb.cms.UserListRequest.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.UserListRequest} returns this
 */
proto.pb.cms.UserListRequest.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.pb.cms.UserListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.UserListRequest} returns this
 */
proto.pb.cms.UserListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 user_id = 3;
 * @return {number}
 */
proto.pb.cms.UserListRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.UserListRequest} returns this
 */
proto.pb.cms.UserListRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 area_id = 4;
 * @return {number}
 */
proto.pb.cms.UserListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.UserListRequest} returns this
 */
proto.pb.cms.UserListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string nickname = 5;
 * @return {string}
 */
proto.pb.cms.UserListRequest.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.cms.UserListRequest} returns this
 */
proto.pb.cms.UserListRequest.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool vip_only = 6;
 * @return {boolean}
 */
proto.pb.cms.UserListRequest.prototype.getVipOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.cms.UserListRequest} returns this
 */
proto.pb.cms.UserListRequest.prototype.setVipOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool deposit_only = 7;
 * @return {boolean}
 */
proto.pb.cms.UserListRequest.prototype.getDepositOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.cms.UserListRequest} returns this
 */
proto.pb.cms.UserListRequest.prototype.setDepositOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional uint32 min_balance = 8;
 * @return {number}
 */
proto.pb.cms.UserListRequest.prototype.getMinBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.UserListRequest} returns this
 */
proto.pb.cms.UserListRequest.prototype.setMinBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 created_start = 9;
 * @return {number}
 */
proto.pb.cms.UserListRequest.prototype.getCreatedStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.UserListRequest} returns this
 */
proto.pb.cms.UserListRequest.prototype.setCreatedStart = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 created_end = 10;
 * @return {number}
 */
proto.pb.cms.UserListRequest.prototype.getCreatedEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.UserListRequest} returns this
 */
proto.pb.cms.UserListRequest.prototype.setCreatedEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.UserListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.UserListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.UserListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.UserListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.UserListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    usertype_pb.User.toObject, includeInstance),
    pageNo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.UserListReply}
 */
proto.pb.cms.UserListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.UserListReply;
  return proto.pb.cms.UserListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.UserListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.UserListReply}
 */
proto.pb.cms.UserListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new usertype_pb.User;
      reader.readMessage(value,usertype_pb.User.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.UserListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.UserListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.UserListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.UserListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      usertype_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPage();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * repeated pb.User users = 1;
 * @return {!Array<!proto.pb.User>}
 */
proto.pb.cms.UserListReply.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.pb.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, usertype_pb.User, 1));
};


/**
 * @param {!Array<!proto.pb.User>} value
 * @return {!proto.pb.cms.UserListReply} returns this
*/
proto.pb.cms.UserListReply.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.User}
 */
proto.pb.cms.UserListReply.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.UserListReply} returns this
 */
proto.pb.cms.UserListReply.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};


/**
 * optional uint32 page_no = 2;
 * @return {number}
 */
proto.pb.cms.UserListReply.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.UserListReply} returns this
 */
proto.pb.cms.UserListReply.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.pb.cms.UserListReply.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.UserListReply} returns this
 */
proto.pb.cms.UserListReply.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_page = 4;
 * @return {number}
 */
proto.pb.cms.UserListReply.prototype.getTotalPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.UserListReply} returns this
 */
proto.pb.cms.UserListReply.prototype.setTotalPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 total_count = 5;
 * @return {number}
 */
proto.pb.cms.UserListReply.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.UserListReply} returns this
 */
proto.pb.cms.UserListReply.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AdjustBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AdjustBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AdjustBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AdjustBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entityId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sendNotify: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    desc: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AdjustBalanceRequest}
 */
proto.pb.cms.AdjustBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AdjustBalanceRequest;
  return proto.pb.cms.AdjustBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AdjustBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AdjustBalanceRequest}
 */
proto.pb.cms.AdjustBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.EntityType} */ (reader.readEnum());
      msg.setEntityType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEntityId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendNotify(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AdjustBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AdjustBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AdjustBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AdjustBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEntityId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSendNotify();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional pb.EntityType entity_type = 1;
 * @return {!proto.pb.EntityType}
 */
proto.pb.cms.AdjustBalanceRequest.prototype.getEntityType = function() {
  return /** @type {!proto.pb.EntityType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pb.EntityType} value
 * @return {!proto.pb.cms.AdjustBalanceRequest} returns this
 */
proto.pb.cms.AdjustBalanceRequest.prototype.setEntityType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 entity_id = 2;
 * @return {number}
 */
proto.pb.cms.AdjustBalanceRequest.prototype.getEntityId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AdjustBalanceRequest} returns this
 */
proto.pb.cms.AdjustBalanceRequest.prototype.setEntityId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 amount = 3;
 * @return {number}
 */
proto.pb.cms.AdjustBalanceRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AdjustBalanceRequest} returns this
 */
proto.pb.cms.AdjustBalanceRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool send_notify = 4;
 * @return {boolean}
 */
proto.pb.cms.AdjustBalanceRequest.prototype.getSendNotify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.cms.AdjustBalanceRequest} returns this
 */
proto.pb.cms.AdjustBalanceRequest.prototype.setSendNotify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string desc = 5;
 * @return {string}
 */
proto.pb.cms.AdjustBalanceRequest.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.cms.AdjustBalanceRequest} returns this
 */
proto.pb.cms.AdjustBalanceRequest.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AdjustBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AdjustBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AdjustBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AdjustBalanceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    balance: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AdjustBalanceReply}
 */
proto.pb.cms.AdjustBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AdjustBalanceReply;
  return proto.pb.cms.AdjustBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AdjustBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AdjustBalanceReply}
 */
proto.pb.cms.AdjustBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AdjustBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AdjustBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AdjustBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AdjustBalanceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 balance = 1;
 * @return {number}
 */
proto.pb.cms.AdjustBalanceReply.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AdjustBalanceReply} returns this
 */
proto.pb.cms.AdjustBalanceReply.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.DeleteUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.DeleteUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.DeleteUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.DeleteUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.DeleteUserRequest}
 */
proto.pb.cms.DeleteUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.DeleteUserRequest;
  return proto.pb.cms.DeleteUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.DeleteUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.DeleteUserRequest}
 */
proto.pb.cms.DeleteUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.DeleteUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.DeleteUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.DeleteUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.DeleteUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 user_id = 1;
 * @return {number}
 */
proto.pb.cms.DeleteUserRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.DeleteUserRequest} returns this
 */
proto.pb.cms.DeleteUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.BlockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.BlockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.BlockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.BlockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entityId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    blockStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 4, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.BlockRequest}
 */
proto.pb.cms.BlockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.BlockRequest;
  return proto.pb.cms.BlockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.BlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.BlockRequest}
 */
proto.pb.cms.BlockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.EntityType} */ (reader.readEnum());
      msg.setEntityType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEntityId(value);
      break;
    case 3:
      var value = /** @type {!proto.pb.BlockStatus} */ (reader.readEnum());
      msg.setBlockStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDuration(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.BlockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.BlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.BlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.BlockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEntityId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getBlockStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional pb.EntityType entity_type = 1;
 * @return {!proto.pb.EntityType}
 */
proto.pb.cms.BlockRequest.prototype.getEntityType = function() {
  return /** @type {!proto.pb.EntityType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pb.EntityType} value
 * @return {!proto.pb.cms.BlockRequest} returns this
 */
proto.pb.cms.BlockRequest.prototype.setEntityType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 entity_id = 2;
 * @return {number}
 */
proto.pb.cms.BlockRequest.prototype.getEntityId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.BlockRequest} returns this
 */
proto.pb.cms.BlockRequest.prototype.setEntityId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional pb.BlockStatus block_status = 3;
 * @return {!proto.pb.BlockStatus}
 */
proto.pb.cms.BlockRequest.prototype.getBlockStatus = function() {
  return /** @type {!proto.pb.BlockStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pb.BlockStatus} value
 * @return {!proto.pb.cms.BlockRequest} returns this
 */
proto.pb.cms.BlockRequest.prototype.setBlockStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional uint32 duration = 4;
 * @return {number}
 */
proto.pb.cms.BlockRequest.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.BlockRequest} returns this
 */
proto.pb.cms.BlockRequest.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.pb.cms.BlockRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.cms.BlockRequest} returns this
 */
proto.pb.cms.BlockRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.UnblockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.UnblockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.UnblockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.UnblockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entityId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.UnblockRequest}
 */
proto.pb.cms.UnblockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.UnblockRequest;
  return proto.pb.cms.UnblockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.UnblockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.UnblockRequest}
 */
proto.pb.cms.UnblockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.EntityType} */ (reader.readEnum());
      msg.setEntityType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEntityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.UnblockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.UnblockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.UnblockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.UnblockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEntityId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional pb.EntityType entity_type = 1;
 * @return {!proto.pb.EntityType}
 */
proto.pb.cms.UnblockRequest.prototype.getEntityType = function() {
  return /** @type {!proto.pb.EntityType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pb.EntityType} value
 * @return {!proto.pb.cms.UnblockRequest} returns this
 */
proto.pb.cms.UnblockRequest.prototype.setEntityType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 entity_id = 2;
 * @return {number}
 */
proto.pb.cms.UnblockRequest.prototype.getEntityId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.UnblockRequest} returns this
 */
proto.pb.cms.UnblockRequest.prototype.setEntityId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.MigrateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.MigrateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.MigrateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.MigrateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    srcId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dstId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.MigrateRequest}
 */
proto.pb.cms.MigrateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.MigrateRequest;
  return proto.pb.cms.MigrateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.MigrateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.MigrateRequest}
 */
proto.pb.cms.MigrateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.EntityType} */ (reader.readEnum());
      msg.setEntityType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSrcId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDstId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.MigrateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.MigrateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.MigrateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.MigrateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSrcId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getDstId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional pb.EntityType entity_type = 1;
 * @return {!proto.pb.EntityType}
 */
proto.pb.cms.MigrateRequest.prototype.getEntityType = function() {
  return /** @type {!proto.pb.EntityType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pb.EntityType} value
 * @return {!proto.pb.cms.MigrateRequest} returns this
 */
proto.pb.cms.MigrateRequest.prototype.setEntityType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 src_id = 2;
 * @return {number}
 */
proto.pb.cms.MigrateRequest.prototype.getSrcId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.MigrateRequest} returns this
 */
proto.pb.cms.MigrateRequest.prototype.setSrcId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 dst_id = 3;
 * @return {number}
 */
proto.pb.cms.MigrateRequest.prototype.getDstId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.MigrateRequest} returns this
 */
proto.pb.cms.MigrateRequest.prototype.setDstId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AuthorizeAnchorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AuthorizeAnchorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AuthorizeAnchorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AuthorizeAnchorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    anchorId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    guildId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AuthorizeAnchorRequest}
 */
proto.pb.cms.AuthorizeAnchorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AuthorizeAnchorRequest;
  return proto.pb.cms.AuthorizeAnchorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AuthorizeAnchorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AuthorizeAnchorRequest}
 */
proto.pb.cms.AuthorizeAnchorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAnchorId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGuildId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AuthorizeAnchorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AuthorizeAnchorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AuthorizeAnchorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AuthorizeAnchorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnchorId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getGuildId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 anchor_id = 1;
 * @return {number}
 */
proto.pb.cms.AuthorizeAnchorRequest.prototype.getAnchorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AuthorizeAnchorRequest} returns this
 */
proto.pb.cms.AuthorizeAnchorRequest.prototype.setAnchorId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 area_id = 2;
 * @return {number}
 */
proto.pb.cms.AuthorizeAnchorRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AuthorizeAnchorRequest} returns this
 */
proto.pb.cms.AuthorizeAnchorRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 guild_id = 3;
 * @return {number}
 */
proto.pb.cms.AuthorizeAnchorRequest.prototype.getGuildId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AuthorizeAnchorRequest} returns this
 */
proto.pb.cms.AuthorizeAnchorRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AnchorFullRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AnchorFullRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AnchorFullRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AnchorFullRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    anchorId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AnchorFullRequest}
 */
proto.pb.cms.AnchorFullRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AnchorFullRequest;
  return proto.pb.cms.AnchorFullRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AnchorFullRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AnchorFullRequest}
 */
proto.pb.cms.AnchorFullRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAnchorId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AnchorFullRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AnchorFullRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AnchorFullRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AnchorFullRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnchorId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 anchor_id = 1;
 * @return {number}
 */
proto.pb.cms.AnchorFullRequest.prototype.getAnchorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AnchorFullRequest} returns this
 */
proto.pb.cms.AnchorFullRequest.prototype.setAnchorId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.AnchorFullReply.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AnchorFullReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AnchorFullReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AnchorFullReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AnchorFullReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    basic: (f = msg.getBasic()) && anchortype_pb.AnchorBasic.toObject(includeInstance, f),
    profilesList: jspb.Message.toObjectList(msg.getProfilesList(),
    anchortype_pb.AnchorProfile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AnchorFullReply}
 */
proto.pb.cms.AnchorFullReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AnchorFullReply;
  return proto.pb.cms.AnchorFullReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AnchorFullReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AnchorFullReply}
 */
proto.pb.cms.AnchorFullReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new anchortype_pb.AnchorBasic;
      reader.readMessage(value,anchortype_pb.AnchorBasic.deserializeBinaryFromReader);
      msg.setBasic(value);
      break;
    case 2:
      var value = new anchortype_pb.AnchorProfile;
      reader.readMessage(value,anchortype_pb.AnchorProfile.deserializeBinaryFromReader);
      msg.addProfiles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AnchorFullReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AnchorFullReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AnchorFullReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AnchorFullReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasic();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      anchortype_pb.AnchorBasic.serializeBinaryToWriter
    );
  }
  f = message.getProfilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      anchortype_pb.AnchorProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional pb.AnchorBasic basic = 1;
 * @return {?proto.pb.AnchorBasic}
 */
proto.pb.cms.AnchorFullReply.prototype.getBasic = function() {
  return /** @type{?proto.pb.AnchorBasic} */ (
    jspb.Message.getWrapperField(this, anchortype_pb.AnchorBasic, 1));
};


/**
 * @param {?proto.pb.AnchorBasic|undefined} value
 * @return {!proto.pb.cms.AnchorFullReply} returns this
*/
proto.pb.cms.AnchorFullReply.prototype.setBasic = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.cms.AnchorFullReply} returns this
 */
proto.pb.cms.AnchorFullReply.prototype.clearBasic = function() {
  return this.setBasic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.cms.AnchorFullReply.prototype.hasBasic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated pb.AnchorProfile profiles = 2;
 * @return {!Array<!proto.pb.AnchorProfile>}
 */
proto.pb.cms.AnchorFullReply.prototype.getProfilesList = function() {
  return /** @type{!Array<!proto.pb.AnchorProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, anchortype_pb.AnchorProfile, 2));
};


/**
 * @param {!Array<!proto.pb.AnchorProfile>} value
 * @return {!proto.pb.cms.AnchorFullReply} returns this
*/
proto.pb.cms.AnchorFullReply.prototype.setProfilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pb.AnchorProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.AnchorProfile}
 */
proto.pb.cms.AnchorFullReply.prototype.addProfiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pb.AnchorProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.AnchorFullReply} returns this
 */
proto.pb.cms.AnchorFullReply.prototype.clearProfilesList = function() {
  return this.setProfilesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.ProfileListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.ProfileListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.ProfileListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ProfileListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    anchorId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.ProfileListRequest}
 */
proto.pb.cms.ProfileListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.ProfileListRequest;
  return proto.pb.cms.ProfileListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.ProfileListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.ProfileListRequest}
 */
proto.pb.cms.ProfileListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAnchorId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 5:
      var value = /** @type {!proto.pb.ReviewStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.ProfileListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.ProfileListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.ProfileListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ProfileListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAnchorId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional uint32 page_no = 1;
 * @return {number}
 */
proto.pb.cms.ProfileListRequest.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ProfileListRequest} returns this
 */
proto.pb.cms.ProfileListRequest.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.pb.cms.ProfileListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ProfileListRequest} returns this
 */
proto.pb.cms.ProfileListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 anchor_id = 3;
 * @return {number}
 */
proto.pb.cms.ProfileListRequest.prototype.getAnchorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ProfileListRequest} returns this
 */
proto.pb.cms.ProfileListRequest.prototype.setAnchorId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 area_id = 4;
 * @return {number}
 */
proto.pb.cms.ProfileListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ProfileListRequest} returns this
 */
proto.pb.cms.ProfileListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional pb.ReviewStatus status = 5;
 * @return {!proto.pb.ReviewStatus}
 */
proto.pb.cms.ProfileListRequest.prototype.getStatus = function() {
  return /** @type {!proto.pb.ReviewStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.pb.ReviewStatus} value
 * @return {!proto.pb.cms.ProfileListRequest} returns this
 */
proto.pb.cms.ProfileListRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.ProfileListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.ProfileListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.ProfileListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.ProfileListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ProfileListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    profilesList: jspb.Message.toObjectList(msg.getProfilesList(),
    anchortype_pb.AnchorProfile.toObject, includeInstance),
    pageNo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.ProfileListReply}
 */
proto.pb.cms.ProfileListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.ProfileListReply;
  return proto.pb.cms.ProfileListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.ProfileListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.ProfileListReply}
 */
proto.pb.cms.ProfileListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new anchortype_pb.AnchorProfile;
      reader.readMessage(value,anchortype_pb.AnchorProfile.deserializeBinaryFromReader);
      msg.addProfiles(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.ProfileListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.ProfileListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.ProfileListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ProfileListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      anchortype_pb.AnchorProfile.serializeBinaryToWriter
    );
  }
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPage();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * repeated pb.AnchorProfile profiles = 1;
 * @return {!Array<!proto.pb.AnchorProfile>}
 */
proto.pb.cms.ProfileListReply.prototype.getProfilesList = function() {
  return /** @type{!Array<!proto.pb.AnchorProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, anchortype_pb.AnchorProfile, 1));
};


/**
 * @param {!Array<!proto.pb.AnchorProfile>} value
 * @return {!proto.pb.cms.ProfileListReply} returns this
*/
proto.pb.cms.ProfileListReply.prototype.setProfilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.AnchorProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.AnchorProfile}
 */
proto.pb.cms.ProfileListReply.prototype.addProfiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.AnchorProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.ProfileListReply} returns this
 */
proto.pb.cms.ProfileListReply.prototype.clearProfilesList = function() {
  return this.setProfilesList([]);
};


/**
 * optional uint32 page_no = 2;
 * @return {number}
 */
proto.pb.cms.ProfileListReply.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ProfileListReply} returns this
 */
proto.pb.cms.ProfileListReply.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.pb.cms.ProfileListReply.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ProfileListReply} returns this
 */
proto.pb.cms.ProfileListReply.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_page = 4;
 * @return {number}
 */
proto.pb.cms.ProfileListReply.prototype.getTotalPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ProfileListReply} returns this
 */
proto.pb.cms.ProfileListReply.prototype.setTotalPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 total_count = 5;
 * @return {number}
 */
proto.pb.cms.ProfileListReply.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ProfileListReply} returns this
 */
proto.pb.cms.ProfileListReply.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.ProcessProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.ProcessProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.ProcessProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ProcessProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.ProcessProfileRequest}
 */
proto.pb.cms.ProcessProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.ProcessProfileRequest;
  return proto.pb.cms.ProcessProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.ProcessProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.ProcessProfileRequest}
 */
proto.pb.cms.ProcessProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {!proto.pb.ReviewStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.ProcessProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.ProcessProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.ProcessProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ProcessProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 profile_id = 1;
 * @return {number}
 */
proto.pb.cms.ProcessProfileRequest.prototype.getProfileId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ProcessProfileRequest} returns this
 */
proto.pb.cms.ProcessProfileRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional pb.ReviewStatus status = 2;
 * @return {!proto.pb.ReviewStatus}
 */
proto.pb.cms.ProcessProfileRequest.prototype.getStatus = function() {
  return /** @type {!proto.pb.ReviewStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pb.ReviewStatus} value
 * @return {!proto.pb.cms.ProcessProfileRequest} returns this
 */
proto.pb.cms.ProcessProfileRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.pb.cms.ProcessProfileRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.cms.ProcessProfileRequest} returns this
 */
proto.pb.cms.ProcessProfileRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.ViolationListRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.ViolationListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.ViolationListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.ViolationListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ViolationListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dealStatusList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    scene: jspb.Message.getFieldWithDefault(msg, 5, 0),
    reporterType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    reporterId: jspb.Message.getFieldWithDefault(msg, 7, 0),
    reportedType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    reportedId: jspb.Message.getFieldWithDefault(msg, 9, 0),
    createdStart: jspb.Message.getFieldWithDefault(msg, 10, 0),
    createdEnd: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.ViolationListRequest}
 */
proto.pb.cms.ViolationListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.ViolationListRequest;
  return proto.pb.cms.ViolationListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.ViolationListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.ViolationListRequest}
 */
proto.pb.cms.ViolationListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.pb.BlockStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDealStatus(values[i]);
      }
      break;
    case 5:
      var value = /** @type {!proto.pb.ViolationScene} */ (reader.readEnum());
      msg.setScene(value);
      break;
    case 6:
      var value = /** @type {!proto.pb.EntityType} */ (reader.readEnum());
      msg.setReporterType(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReporterId(value);
      break;
    case 8:
      var value = /** @type {!proto.pb.EntityType} */ (reader.readEnum());
      msg.setReportedType(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReportedId(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedStart(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.ViolationListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.ViolationListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.ViolationListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ViolationListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDealStatusList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getScene();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getReporterType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getReporterId();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getReportedType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getReportedId();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getCreatedStart();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getCreatedEnd();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
};


/**
 * optional uint32 page_no = 1;
 * @return {number}
 */
proto.pb.cms.ViolationListRequest.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.pb.cms.ViolationListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 area_id = 3;
 * @return {number}
 */
proto.pb.cms.ViolationListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated pb.BlockStatus deal_status = 4;
 * @return {!Array<!proto.pb.BlockStatus>}
 */
proto.pb.cms.ViolationListRequest.prototype.getDealStatusList = function() {
  return /** @type {!Array<!proto.pb.BlockStatus>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.pb.BlockStatus>} value
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.setDealStatusList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.pb.BlockStatus} value
 * @param {number=} opt_index
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.addDealStatus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.clearDealStatusList = function() {
  return this.setDealStatusList([]);
};


/**
 * optional pb.ViolationScene Scene = 5;
 * @return {!proto.pb.ViolationScene}
 */
proto.pb.cms.ViolationListRequest.prototype.getScene = function() {
  return /** @type {!proto.pb.ViolationScene} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.pb.ViolationScene} value
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.setScene = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional pb.EntityType reporter_type = 6;
 * @return {!proto.pb.EntityType}
 */
proto.pb.cms.ViolationListRequest.prototype.getReporterType = function() {
  return /** @type {!proto.pb.EntityType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.pb.EntityType} value
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.setReporterType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional uint32 reporter_id = 7;
 * @return {number}
 */
proto.pb.cms.ViolationListRequest.prototype.getReporterId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.setReporterId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional pb.EntityType reported_type = 8;
 * @return {!proto.pb.EntityType}
 */
proto.pb.cms.ViolationListRequest.prototype.getReportedType = function() {
  return /** @type {!proto.pb.EntityType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.pb.EntityType} value
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.setReportedType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional uint32 reported_id = 9;
 * @return {number}
 */
proto.pb.cms.ViolationListRequest.prototype.getReportedId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.setReportedId = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 created_start = 10;
 * @return {number}
 */
proto.pb.cms.ViolationListRequest.prototype.getCreatedStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.setCreatedStart = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 created_end = 11;
 * @return {number}
 */
proto.pb.cms.ViolationListRequest.prototype.getCreatedEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ViolationListRequest} returns this
 */
proto.pb.cms.ViolationListRequest.prototype.setCreatedEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.ViolationListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.ViolationListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.ViolationListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.ViolationListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ViolationListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    usertype_pb.ViolationRecord.toObject, includeInstance),
    pageNo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.ViolationListReply}
 */
proto.pb.cms.ViolationListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.ViolationListReply;
  return proto.pb.cms.ViolationListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.ViolationListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.ViolationListReply}
 */
proto.pb.cms.ViolationListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new usertype_pb.ViolationRecord;
      reader.readMessage(value,usertype_pb.ViolationRecord.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.ViolationListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.ViolationListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.ViolationListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ViolationListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      usertype_pb.ViolationRecord.serializeBinaryToWriter
    );
  }
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPage();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * repeated pb.ViolationRecord records = 1;
 * @return {!Array<!proto.pb.ViolationRecord>}
 */
proto.pb.cms.ViolationListReply.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.pb.ViolationRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, usertype_pb.ViolationRecord, 1));
};


/**
 * @param {!Array<!proto.pb.ViolationRecord>} value
 * @return {!proto.pb.cms.ViolationListReply} returns this
*/
proto.pb.cms.ViolationListReply.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.ViolationRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.ViolationRecord}
 */
proto.pb.cms.ViolationListReply.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.ViolationRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.ViolationListReply} returns this
 */
proto.pb.cms.ViolationListReply.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional uint32 page_no = 2;
 * @return {number}
 */
proto.pb.cms.ViolationListReply.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ViolationListReply} returns this
 */
proto.pb.cms.ViolationListReply.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.pb.cms.ViolationListReply.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ViolationListReply} returns this
 */
proto.pb.cms.ViolationListReply.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_page = 4;
 * @return {number}
 */
proto.pb.cms.ViolationListReply.prototype.getTotalPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ViolationListReply} returns this
 */
proto.pb.cms.ViolationListReply.prototype.setTotalPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 total_count = 5;
 * @return {number}
 */
proto.pb.cms.ViolationListReply.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ViolationListReply} returns this
 */
proto.pb.cms.ViolationListReply.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.ProcessViolationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.ProcessViolationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.ProcessViolationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ProcessViolationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    violationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dealStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dealMessage: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blockDuration: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.ProcessViolationRequest}
 */
proto.pb.cms.ProcessViolationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.ProcessViolationRequest;
  return proto.pb.cms.ProcessViolationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.ProcessViolationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.ProcessViolationRequest}
 */
proto.pb.cms.ProcessViolationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setViolationId(value);
      break;
    case 2:
      var value = /** @type {!proto.pb.BlockStatus} */ (reader.readEnum());
      msg.setDealStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDealMessage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.ProcessViolationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.ProcessViolationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.ProcessViolationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ProcessViolationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getViolationId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getDealStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDealMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlockDuration();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint64 violation_id = 1;
 * @return {number}
 */
proto.pb.cms.ProcessViolationRequest.prototype.getViolationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ProcessViolationRequest} returns this
 */
proto.pb.cms.ProcessViolationRequest.prototype.setViolationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional pb.BlockStatus deal_status = 2;
 * @return {!proto.pb.BlockStatus}
 */
proto.pb.cms.ProcessViolationRequest.prototype.getDealStatus = function() {
  return /** @type {!proto.pb.BlockStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pb.BlockStatus} value
 * @return {!proto.pb.cms.ProcessViolationRequest} returns this
 */
proto.pb.cms.ProcessViolationRequest.prototype.setDealStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string deal_message = 3;
 * @return {string}
 */
proto.pb.cms.ProcessViolationRequest.prototype.getDealMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.cms.ProcessViolationRequest} returns this
 */
proto.pb.cms.ProcessViolationRequest.prototype.setDealMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 block_duration = 4;
 * @return {number}
 */
proto.pb.cms.ProcessViolationRequest.prototype.getBlockDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ProcessViolationRequest} returns this
 */
proto.pb.cms.ProcessViolationRequest.prototype.setBlockDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.LiveListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.LiveListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.LiveListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.LiveListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    anchorId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0),
    createdStart: jspb.Message.getFieldWithDefault(msg, 6, 0),
    createdEnd: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.LiveListRequest}
 */
proto.pb.cms.LiveListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.LiveListRequest;
  return proto.pb.cms.LiveListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.LiveListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.LiveListRequest}
 */
proto.pb.cms.LiveListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAnchorId(value);
      break;
    case 5:
      var value = /** @type {!proto.pb.ReviewStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedStart(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.LiveListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.LiveListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.LiveListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.LiveListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAnchorId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getCreatedStart();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getCreatedEnd();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional uint32 page_no = 1;
 * @return {number}
 */
proto.pb.cms.LiveListRequest.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.LiveListRequest} returns this
 */
proto.pb.cms.LiveListRequest.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.pb.cms.LiveListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.LiveListRequest} returns this
 */
proto.pb.cms.LiveListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 area_id = 3;
 * @return {number}
 */
proto.pb.cms.LiveListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.LiveListRequest} returns this
 */
proto.pb.cms.LiveListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 anchor_id = 4;
 * @return {number}
 */
proto.pb.cms.LiveListRequest.prototype.getAnchorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.LiveListRequest} returns this
 */
proto.pb.cms.LiveListRequest.prototype.setAnchorId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional pb.ReviewStatus status = 5;
 * @return {!proto.pb.ReviewStatus}
 */
proto.pb.cms.LiveListRequest.prototype.getStatus = function() {
  return /** @type {!proto.pb.ReviewStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.pb.ReviewStatus} value
 * @return {!proto.pb.cms.LiveListRequest} returns this
 */
proto.pb.cms.LiveListRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional uint32 created_start = 6;
 * @return {number}
 */
proto.pb.cms.LiveListRequest.prototype.getCreatedStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.LiveListRequest} returns this
 */
proto.pb.cms.LiveListRequest.prototype.setCreatedStart = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 created_end = 7;
 * @return {number}
 */
proto.pb.cms.LiveListRequest.prototype.getCreatedEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.LiveListRequest} returns this
 */
proto.pb.cms.LiveListRequest.prototype.setCreatedEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.LiveListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.LiveListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.LiveListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.LiveListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.LiveListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    usertype_pb.FileRecord.toObject, includeInstance),
    pageNo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.LiveListReply}
 */
proto.pb.cms.LiveListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.LiveListReply;
  return proto.pb.cms.LiveListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.LiveListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.LiveListReply}
 */
proto.pb.cms.LiveListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new usertype_pb.FileRecord;
      reader.readMessage(value,usertype_pb.FileRecord.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.LiveListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.LiveListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.LiveListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.LiveListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      usertype_pb.FileRecord.serializeBinaryToWriter
    );
  }
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPage();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * repeated pb.FileRecord records = 1;
 * @return {!Array<!proto.pb.FileRecord>}
 */
proto.pb.cms.LiveListReply.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.pb.FileRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, usertype_pb.FileRecord, 1));
};


/**
 * @param {!Array<!proto.pb.FileRecord>} value
 * @return {!proto.pb.cms.LiveListReply} returns this
*/
proto.pb.cms.LiveListReply.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.FileRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.FileRecord}
 */
proto.pb.cms.LiveListReply.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.FileRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.LiveListReply} returns this
 */
proto.pb.cms.LiveListReply.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional uint32 page_no = 2;
 * @return {number}
 */
proto.pb.cms.LiveListReply.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.LiveListReply} returns this
 */
proto.pb.cms.LiveListReply.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.pb.cms.LiveListReply.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.LiveListReply} returns this
 */
proto.pb.cms.LiveListReply.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_page = 4;
 * @return {number}
 */
proto.pb.cms.LiveListReply.prototype.getTotalPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.LiveListReply} returns this
 */
proto.pb.cms.LiveListReply.prototype.setTotalPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 total_count = 5;
 * @return {number}
 */
proto.pb.cms.LiveListReply.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.LiveListReply} returns this
 */
proto.pb.cms.LiveListReply.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.PayListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.PayListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.PayListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.PayListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    recordId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0),
    createdStart: jspb.Message.getFieldWithDefault(msg, 8, 0),
    createdEnd: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.PayListRequest}
 */
proto.pb.cms.PayListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.PayListRequest;
  return proto.pb.cms.PayListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.PayListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.PayListRequest}
 */
proto.pb.cms.PayListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecordId(value);
      break;
    case 7:
      var value = /** @type {!proto.pb.PayStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedStart(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.PayListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.PayListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.PayListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.PayListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getRecordId();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getCreatedStart();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getCreatedEnd();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * optional uint32 page_no = 1;
 * @return {number}
 */
proto.pb.cms.PayListRequest.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayListRequest} returns this
 */
proto.pb.cms.PayListRequest.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.pb.cms.PayListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayListRequest} returns this
 */
proto.pb.cms.PayListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 area_id = 3;
 * @return {number}
 */
proto.pb.cms.PayListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayListRequest} returns this
 */
proto.pb.cms.PayListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 app_id = 4;
 * @return {number}
 */
proto.pb.cms.PayListRequest.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayListRequest} returns this
 */
proto.pb.cms.PayListRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 user_id = 5;
 * @return {number}
 */
proto.pb.cms.PayListRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayListRequest} returns this
 */
proto.pb.cms.PayListRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 record_id = 6;
 * @return {number}
 */
proto.pb.cms.PayListRequest.prototype.getRecordId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayListRequest} returns this
 */
proto.pb.cms.PayListRequest.prototype.setRecordId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional pb.PayStatus status = 7;
 * @return {!proto.pb.PayStatus}
 */
proto.pb.cms.PayListRequest.prototype.getStatus = function() {
  return /** @type {!proto.pb.PayStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.pb.PayStatus} value
 * @return {!proto.pb.cms.PayListRequest} returns this
 */
proto.pb.cms.PayListRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional uint32 created_start = 8;
 * @return {number}
 */
proto.pb.cms.PayListRequest.prototype.getCreatedStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayListRequest} returns this
 */
proto.pb.cms.PayListRequest.prototype.setCreatedStart = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 created_end = 9;
 * @return {number}
 */
proto.pb.cms.PayListRequest.prototype.getCreatedEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayListRequest} returns this
 */
proto.pb.cms.PayListRequest.prototype.setCreatedEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.PayListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.PayListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.PayListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.PayListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.PayListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    usertype_pb.PayRecord.toObject, includeInstance),
    pageNo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.PayListReply}
 */
proto.pb.cms.PayListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.PayListReply;
  return proto.pb.cms.PayListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.PayListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.PayListReply}
 */
proto.pb.cms.PayListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new usertype_pb.PayRecord;
      reader.readMessage(value,usertype_pb.PayRecord.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.PayListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.PayListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.PayListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.PayListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      usertype_pb.PayRecord.serializeBinaryToWriter
    );
  }
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPage();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * repeated pb.PayRecord records = 1;
 * @return {!Array<!proto.pb.PayRecord>}
 */
proto.pb.cms.PayListReply.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.pb.PayRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, usertype_pb.PayRecord, 1));
};


/**
 * @param {!Array<!proto.pb.PayRecord>} value
 * @return {!proto.pb.cms.PayListReply} returns this
*/
proto.pb.cms.PayListReply.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.PayRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.PayRecord}
 */
proto.pb.cms.PayListReply.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.PayRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.PayListReply} returns this
 */
proto.pb.cms.PayListReply.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional uint32 page_no = 2;
 * @return {number}
 */
proto.pb.cms.PayListReply.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayListReply} returns this
 */
proto.pb.cms.PayListReply.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.pb.cms.PayListReply.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayListReply} returns this
 */
proto.pb.cms.PayListReply.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_page = 4;
 * @return {number}
 */
proto.pb.cms.PayListReply.prototype.getTotalPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayListReply} returns this
 */
proto.pb.cms.PayListReply.prototype.setTotalPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 total_count = 5;
 * @return {number}
 */
proto.pb.cms.PayListReply.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayListReply} returns this
 */
proto.pb.cms.PayListReply.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.RobotListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.RobotListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.RobotListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.RobotListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    enable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    robotId: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.RobotListRequest}
 */
proto.pb.cms.RobotListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.RobotListRequest;
  return proto.pb.cms.RobotListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.RobotListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.RobotListRequest}
 */
proto.pb.cms.RobotListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRobotId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.RobotListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.RobotListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.RobotListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.RobotListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getRobotId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 page_no = 1;
 * @return {number}
 */
proto.pb.cms.RobotListRequest.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.RobotListRequest} returns this
 */
proto.pb.cms.RobotListRequest.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.pb.cms.RobotListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.RobotListRequest} returns this
 */
proto.pb.cms.RobotListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 area_id = 3;
 * @return {number}
 */
proto.pb.cms.RobotListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.RobotListRequest} returns this
 */
proto.pb.cms.RobotListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool enable = 4;
 * @return {boolean}
 */
proto.pb.cms.RobotListRequest.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.cms.RobotListRequest} returns this
 */
proto.pb.cms.RobotListRequest.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional uint32 robot_id = 5;
 * @return {number}
 */
proto.pb.cms.RobotListRequest.prototype.getRobotId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.RobotListRequest} returns this
 */
proto.pb.cms.RobotListRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.RobotListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.RobotListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.RobotListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.RobotListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.RobotListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    robotsList: jspb.Message.toObjectList(msg.getRobotsList(),
    anchortype_pb.AnchorProfile.toObject, includeInstance),
    pageNo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.RobotListReply}
 */
proto.pb.cms.RobotListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.RobotListReply;
  return proto.pb.cms.RobotListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.RobotListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.RobotListReply}
 */
proto.pb.cms.RobotListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new anchortype_pb.AnchorProfile;
      reader.readMessage(value,anchortype_pb.AnchorProfile.deserializeBinaryFromReader);
      msg.addRobots(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.RobotListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.RobotListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.RobotListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.RobotListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      anchortype_pb.AnchorProfile.serializeBinaryToWriter
    );
  }
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPage();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * repeated pb.AnchorProfile robots = 1;
 * @return {!Array<!proto.pb.AnchorProfile>}
 */
proto.pb.cms.RobotListReply.prototype.getRobotsList = function() {
  return /** @type{!Array<!proto.pb.AnchorProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, anchortype_pb.AnchorProfile, 1));
};


/**
 * @param {!Array<!proto.pb.AnchorProfile>} value
 * @return {!proto.pb.cms.RobotListReply} returns this
*/
proto.pb.cms.RobotListReply.prototype.setRobotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.AnchorProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.AnchorProfile}
 */
proto.pb.cms.RobotListReply.prototype.addRobots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.AnchorProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.RobotListReply} returns this
 */
proto.pb.cms.RobotListReply.prototype.clearRobotsList = function() {
  return this.setRobotsList([]);
};


/**
 * optional uint32 page_no = 2;
 * @return {number}
 */
proto.pb.cms.RobotListReply.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.RobotListReply} returns this
 */
proto.pb.cms.RobotListReply.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.pb.cms.RobotListReply.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.RobotListReply} returns this
 */
proto.pb.cms.RobotListReply.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_page = 4;
 * @return {number}
 */
proto.pb.cms.RobotListReply.prototype.getTotalPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.RobotListReply} returns this
 */
proto.pb.cms.RobotListReply.prototype.setTotalPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 total_count = 5;
 * @return {number}
 */
proto.pb.cms.RobotListReply.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.RobotListReply} returns this
 */
proto.pb.cms.RobotListReply.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.RobotMessageListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.RobotMessageListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.RobotMessageListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.RobotMessageListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    robotId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.RobotMessageListRequest}
 */
proto.pb.cms.RobotMessageListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.RobotMessageListRequest;
  return proto.pb.cms.RobotMessageListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.RobotMessageListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.RobotMessageListRequest}
 */
proto.pb.cms.RobotMessageListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRobotId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.RobotMessageListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.RobotMessageListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.RobotMessageListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.RobotMessageListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 robot_id = 1;
 * @return {number}
 */
proto.pb.cms.RobotMessageListRequest.prototype.getRobotId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.RobotMessageListRequest} returns this
 */
proto.pb.cms.RobotMessageListRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.RobotMessageListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.RobotMessageListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.RobotMessageListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.RobotMessageListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.RobotMessageListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    cmstype_pb.RobotMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.RobotMessageListReply}
 */
proto.pb.cms.RobotMessageListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.RobotMessageListReply;
  return proto.pb.cms.RobotMessageListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.RobotMessageListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.RobotMessageListReply}
 */
proto.pb.cms.RobotMessageListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cmstype_pb.RobotMessage;
      reader.readMessage(value,cmstype_pb.RobotMessage.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.RobotMessageListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.RobotMessageListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.RobotMessageListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.RobotMessageListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cmstype_pb.RobotMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.RobotMessage messages = 1;
 * @return {!Array<!proto.pb.RobotMessage>}
 */
proto.pb.cms.RobotMessageListReply.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.pb.RobotMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, cmstype_pb.RobotMessage, 1));
};


/**
 * @param {!Array<!proto.pb.RobotMessage>} value
 * @return {!proto.pb.cms.RobotMessageListReply} returns this
*/
proto.pb.cms.RobotMessageListReply.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.RobotMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.RobotMessage}
 */
proto.pb.cms.RobotMessageListReply.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.RobotMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.RobotMessageListReply} returns this
 */
proto.pb.cms.RobotMessageListReply.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.MomentListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.MomentListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.MomentListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.MomentListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entityId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.MomentListRequest}
 */
proto.pb.cms.MomentListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.MomentListRequest;
  return proto.pb.cms.MomentListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.MomentListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.MomentListRequest}
 */
proto.pb.cms.MomentListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.EntityType} */ (reader.readEnum());
      msg.setEntityType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEntityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.MomentListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.MomentListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.MomentListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.MomentListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEntityId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional pb.EntityType entity_type = 1;
 * @return {!proto.pb.EntityType}
 */
proto.pb.cms.MomentListRequest.prototype.getEntityType = function() {
  return /** @type {!proto.pb.EntityType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pb.EntityType} value
 * @return {!proto.pb.cms.MomentListRequest} returns this
 */
proto.pb.cms.MomentListRequest.prototype.setEntityType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 entity_id = 2;
 * @return {number}
 */
proto.pb.cms.MomentListRequest.prototype.getEntityId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.MomentListRequest} returns this
 */
proto.pb.cms.MomentListRequest.prototype.setEntityId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.MomentListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.MomentListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.MomentListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.MomentListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.MomentListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    momentsList: jspb.Message.toObjectList(msg.getMomentsList(),
    usertype_pb.Moment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.MomentListReply}
 */
proto.pb.cms.MomentListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.MomentListReply;
  return proto.pb.cms.MomentListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.MomentListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.MomentListReply}
 */
proto.pb.cms.MomentListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new usertype_pb.Moment;
      reader.readMessage(value,usertype_pb.Moment.deserializeBinaryFromReader);
      msg.addMoments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.MomentListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.MomentListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.MomentListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.MomentListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMomentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      usertype_pb.Moment.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.Moment moments = 1;
 * @return {!Array<!proto.pb.Moment>}
 */
proto.pb.cms.MomentListReply.prototype.getMomentsList = function() {
  return /** @type{!Array<!proto.pb.Moment>} */ (
    jspb.Message.getRepeatedWrapperField(this, usertype_pb.Moment, 1));
};


/**
 * @param {!Array<!proto.pb.Moment>} value
 * @return {!proto.pb.cms.MomentListReply} returns this
*/
proto.pb.cms.MomentListReply.prototype.setMomentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Moment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Moment}
 */
proto.pb.cms.MomentListReply.prototype.addMoments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Moment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.MomentListReply} returns this
 */
proto.pb.cms.MomentListReply.prototype.clearMomentsList = function() {
  return this.setMomentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AutoMessageListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AutoMessageListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AutoMessageListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AutoMessageListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    enable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    action: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AutoMessageListRequest}
 */
proto.pb.cms.AutoMessageListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AutoMessageListRequest;
  return proto.pb.cms.AutoMessageListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AutoMessageListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AutoMessageListRequest}
 */
proto.pb.cms.AutoMessageListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 5:
      var value = /** @type {!proto.pb.ActionType} */ (reader.readEnum());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AutoMessageListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AutoMessageListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AutoMessageListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AutoMessageListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional uint32 page_no = 1;
 * @return {number}
 */
proto.pb.cms.AutoMessageListRequest.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AutoMessageListRequest} returns this
 */
proto.pb.cms.AutoMessageListRequest.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.pb.cms.AutoMessageListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AutoMessageListRequest} returns this
 */
proto.pb.cms.AutoMessageListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 area_id = 3;
 * @return {number}
 */
proto.pb.cms.AutoMessageListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AutoMessageListRequest} returns this
 */
proto.pb.cms.AutoMessageListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool enable = 4;
 * @return {boolean}
 */
proto.pb.cms.AutoMessageListRequest.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.cms.AutoMessageListRequest} returns this
 */
proto.pb.cms.AutoMessageListRequest.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional pb.ActionType action = 5;
 * @return {!proto.pb.ActionType}
 */
proto.pb.cms.AutoMessageListRequest.prototype.getAction = function() {
  return /** @type {!proto.pb.ActionType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.pb.ActionType} value
 * @return {!proto.pb.cms.AutoMessageListRequest} returns this
 */
proto.pb.cms.AutoMessageListRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.AutoMessageListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AutoMessageListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AutoMessageListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AutoMessageListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AutoMessageListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    cmstype_pb.AutoMessage.toObject, includeInstance),
    pageNo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AutoMessageListReply}
 */
proto.pb.cms.AutoMessageListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AutoMessageListReply;
  return proto.pb.cms.AutoMessageListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AutoMessageListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AutoMessageListReply}
 */
proto.pb.cms.AutoMessageListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cmstype_pb.AutoMessage;
      reader.readMessage(value,cmstype_pb.AutoMessage.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AutoMessageListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AutoMessageListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AutoMessageListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AutoMessageListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cmstype_pb.AutoMessage.serializeBinaryToWriter
    );
  }
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPage();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * repeated pb.AutoMessage messages = 1;
 * @return {!Array<!proto.pb.AutoMessage>}
 */
proto.pb.cms.AutoMessageListReply.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.pb.AutoMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, cmstype_pb.AutoMessage, 1));
};


/**
 * @param {!Array<!proto.pb.AutoMessage>} value
 * @return {!proto.pb.cms.AutoMessageListReply} returns this
*/
proto.pb.cms.AutoMessageListReply.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.AutoMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.AutoMessage}
 */
proto.pb.cms.AutoMessageListReply.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.AutoMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.AutoMessageListReply} returns this
 */
proto.pb.cms.AutoMessageListReply.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};


/**
 * optional uint32 page_no = 2;
 * @return {number}
 */
proto.pb.cms.AutoMessageListReply.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AutoMessageListReply} returns this
 */
proto.pb.cms.AutoMessageListReply.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.pb.cms.AutoMessageListReply.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AutoMessageListReply} returns this
 */
proto.pb.cms.AutoMessageListReply.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_page = 4;
 * @return {number}
 */
proto.pb.cms.AutoMessageListReply.prototype.getTotalPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AutoMessageListReply} returns this
 */
proto.pb.cms.AutoMessageListReply.prototype.setTotalPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 total_count = 5;
 * @return {number}
 */
proto.pb.cms.AutoMessageListReply.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AutoMessageListReply} returns this
 */
proto.pb.cms.AutoMessageListReply.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.ChatMessageListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.ChatMessageListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.ChatMessageListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ChatMessageListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    anchorId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    direction: jspb.Message.getFieldWithDefault(msg, 7, 0),
    type: jspb.Message.getFieldWithDefault(msg, 8, 0),
    keyword: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdStart: jspb.Message.getFieldWithDefault(msg, 10, 0),
    createdEnd: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.ChatMessageListRequest}
 */
proto.pb.cms.ChatMessageListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.ChatMessageListRequest;
  return proto.pb.cms.ChatMessageListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.ChatMessageListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.ChatMessageListRequest}
 */
proto.pb.cms.ChatMessageListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAnchorId(value);
      break;
    case 7:
      var value = /** @type {!proto.pb.MessageDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 8:
      var value = /** @type {!proto.pb.MessageType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyword(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedStart(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.ChatMessageListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.ChatMessageListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.ChatMessageListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ChatMessageListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getAnchorId();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getKeyword();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedStart();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getCreatedEnd();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
};


/**
 * optional uint32 page_no = 1;
 * @return {number}
 */
proto.pb.cms.ChatMessageListRequest.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ChatMessageListRequest} returns this
 */
proto.pb.cms.ChatMessageListRequest.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.pb.cms.ChatMessageListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ChatMessageListRequest} returns this
 */
proto.pb.cms.ChatMessageListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 area_id = 3;
 * @return {number}
 */
proto.pb.cms.ChatMessageListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ChatMessageListRequest} returns this
 */
proto.pb.cms.ChatMessageListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 app_id = 4;
 * @return {number}
 */
proto.pb.cms.ChatMessageListRequest.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ChatMessageListRequest} returns this
 */
proto.pb.cms.ChatMessageListRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 user_id = 5;
 * @return {number}
 */
proto.pb.cms.ChatMessageListRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ChatMessageListRequest} returns this
 */
proto.pb.cms.ChatMessageListRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 anchor_id = 6;
 * @return {number}
 */
proto.pb.cms.ChatMessageListRequest.prototype.getAnchorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ChatMessageListRequest} returns this
 */
proto.pb.cms.ChatMessageListRequest.prototype.setAnchorId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional pb.MessageDirection direction = 7;
 * @return {!proto.pb.MessageDirection}
 */
proto.pb.cms.ChatMessageListRequest.prototype.getDirection = function() {
  return /** @type {!proto.pb.MessageDirection} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.pb.MessageDirection} value
 * @return {!proto.pb.cms.ChatMessageListRequest} returns this
 */
proto.pb.cms.ChatMessageListRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional pb.MessageType type = 8;
 * @return {!proto.pb.MessageType}
 */
proto.pb.cms.ChatMessageListRequest.prototype.getType = function() {
  return /** @type {!proto.pb.MessageType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.pb.MessageType} value
 * @return {!proto.pb.cms.ChatMessageListRequest} returns this
 */
proto.pb.cms.ChatMessageListRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string keyword = 9;
 * @return {string}
 */
proto.pb.cms.ChatMessageListRequest.prototype.getKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.cms.ChatMessageListRequest} returns this
 */
proto.pb.cms.ChatMessageListRequest.prototype.setKeyword = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional uint32 created_start = 10;
 * @return {number}
 */
proto.pb.cms.ChatMessageListRequest.prototype.getCreatedStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ChatMessageListRequest} returns this
 */
proto.pb.cms.ChatMessageListRequest.prototype.setCreatedStart = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 created_end = 11;
 * @return {number}
 */
proto.pb.cms.ChatMessageListRequest.prototype.getCreatedEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ChatMessageListRequest} returns this
 */
proto.pb.cms.ChatMessageListRequest.prototype.setCreatedEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.ChatMessageListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.ChatMessageListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.ChatMessageListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.ChatMessageListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ChatMessageListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    cmstype_pb.ChatMessage.toObject, includeInstance),
    pageNo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.ChatMessageListReply}
 */
proto.pb.cms.ChatMessageListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.ChatMessageListReply;
  return proto.pb.cms.ChatMessageListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.ChatMessageListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.ChatMessageListReply}
 */
proto.pb.cms.ChatMessageListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cmstype_pb.ChatMessage;
      reader.readMessage(value,cmstype_pb.ChatMessage.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.ChatMessageListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.ChatMessageListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.ChatMessageListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.ChatMessageListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cmstype_pb.ChatMessage.serializeBinaryToWriter
    );
  }
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPage();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * repeated pb.ChatMessage messages = 1;
 * @return {!Array<!proto.pb.ChatMessage>}
 */
proto.pb.cms.ChatMessageListReply.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.pb.ChatMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, cmstype_pb.ChatMessage, 1));
};


/**
 * @param {!Array<!proto.pb.ChatMessage>} value
 * @return {!proto.pb.cms.ChatMessageListReply} returns this
*/
proto.pb.cms.ChatMessageListReply.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.ChatMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.ChatMessage}
 */
proto.pb.cms.ChatMessageListReply.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.ChatMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.ChatMessageListReply} returns this
 */
proto.pb.cms.ChatMessageListReply.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};


/**
 * optional uint32 page_no = 2;
 * @return {number}
 */
proto.pb.cms.ChatMessageListReply.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ChatMessageListReply} returns this
 */
proto.pb.cms.ChatMessageListReply.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.pb.cms.ChatMessageListReply.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ChatMessageListReply} returns this
 */
proto.pb.cms.ChatMessageListReply.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_page = 4;
 * @return {number}
 */
proto.pb.cms.ChatMessageListReply.prototype.getTotalPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ChatMessageListReply} returns this
 */
proto.pb.cms.ChatMessageListReply.prototype.setTotalPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 total_count = 5;
 * @return {number}
 */
proto.pb.cms.ChatMessageListReply.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.ChatMessageListReply} returns this
 */
proto.pb.cms.ChatMessageListReply.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.CallListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.CallListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.CallListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CallListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    anchorId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    callType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    hangType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    status: jspb.Message.getFieldWithDefault(msg, 9, 0),
    minDuration: jspb.Message.getFieldWithDefault(msg, 10, 0),
    maxDuration: jspb.Message.getFieldWithDefault(msg, 11, 0),
    createdStart: jspb.Message.getFieldWithDefault(msg, 12, 0),
    createdEnd: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.CallListRequest}
 */
proto.pb.cms.CallListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.CallListRequest;
  return proto.pb.cms.CallListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.CallListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.CallListRequest}
 */
proto.pb.cms.CallListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAnchorId(value);
      break;
    case 7:
      var value = /** @type {!proto.pb.CallType} */ (reader.readEnum());
      msg.setCallType(value);
      break;
    case 8:
      var value = /** @type {!proto.pb.HangType} */ (reader.readEnum());
      msg.setHangType(value);
      break;
    case 9:
      var value = /** @type {!proto.pb.CallStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinDuration(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxDuration(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedStart(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.CallListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.CallListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.CallListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CallListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getAnchorId();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getHangType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getMinDuration();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getMaxDuration();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getCreatedStart();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getCreatedEnd();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
};


/**
 * optional uint32 page_no = 1;
 * @return {number}
 */
proto.pb.cms.CallListRequest.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.pb.cms.CallListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 area_id = 3;
 * @return {number}
 */
proto.pb.cms.CallListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 app_id = 4;
 * @return {number}
 */
proto.pb.cms.CallListRequest.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 user_id = 5;
 * @return {number}
 */
proto.pb.cms.CallListRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 anchor_id = 6;
 * @return {number}
 */
proto.pb.cms.CallListRequest.prototype.getAnchorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setAnchorId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional pb.CallType call_type = 7;
 * @return {!proto.pb.CallType}
 */
proto.pb.cms.CallListRequest.prototype.getCallType = function() {
  return /** @type {!proto.pb.CallType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.pb.CallType} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional pb.HangType hang_type = 8;
 * @return {!proto.pb.HangType}
 */
proto.pb.cms.CallListRequest.prototype.getHangType = function() {
  return /** @type {!proto.pb.HangType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.pb.HangType} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setHangType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional pb.CallStatus status = 9;
 * @return {!proto.pb.CallStatus}
 */
proto.pb.cms.CallListRequest.prototype.getStatus = function() {
  return /** @type {!proto.pb.CallStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.pb.CallStatus} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional uint32 min_duration = 10;
 * @return {number}
 */
proto.pb.cms.CallListRequest.prototype.getMinDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setMinDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 max_duration = 11;
 * @return {number}
 */
proto.pb.cms.CallListRequest.prototype.getMaxDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setMaxDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 created_start = 12;
 * @return {number}
 */
proto.pb.cms.CallListRequest.prototype.getCreatedStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setCreatedStart = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint32 created_end = 13;
 * @return {number}
 */
proto.pb.cms.CallListRequest.prototype.getCreatedEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListRequest} returns this
 */
proto.pb.cms.CallListRequest.prototype.setCreatedEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.CallListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.CallListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.CallListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.CallListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CallListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    callsList: jspb.Message.toObjectList(msg.getCallsList(),
    usertype_pb.CallRecord.toObject, includeInstance),
    pageNo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.CallListReply}
 */
proto.pb.cms.CallListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.CallListReply;
  return proto.pb.cms.CallListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.CallListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.CallListReply}
 */
proto.pb.cms.CallListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new usertype_pb.CallRecord;
      reader.readMessage(value,usertype_pb.CallRecord.deserializeBinaryFromReader);
      msg.addCalls(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.CallListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.CallListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.CallListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CallListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      usertype_pb.CallRecord.serializeBinaryToWriter
    );
  }
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPage();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * repeated pb.CallRecord calls = 1;
 * @return {!Array<!proto.pb.CallRecord>}
 */
proto.pb.cms.CallListReply.prototype.getCallsList = function() {
  return /** @type{!Array<!proto.pb.CallRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, usertype_pb.CallRecord, 1));
};


/**
 * @param {!Array<!proto.pb.CallRecord>} value
 * @return {!proto.pb.cms.CallListReply} returns this
*/
proto.pb.cms.CallListReply.prototype.setCallsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.CallRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.CallRecord}
 */
proto.pb.cms.CallListReply.prototype.addCalls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.CallRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.CallListReply} returns this
 */
proto.pb.cms.CallListReply.prototype.clearCallsList = function() {
  return this.setCallsList([]);
};


/**
 * optional uint32 page_no = 2;
 * @return {number}
 */
proto.pb.cms.CallListReply.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListReply} returns this
 */
proto.pb.cms.CallListReply.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.pb.cms.CallListReply.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListReply} returns this
 */
proto.pb.cms.CallListReply.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_page = 4;
 * @return {number}
 */
proto.pb.cms.CallListReply.prototype.getTotalPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListReply} returns this
 */
proto.pb.cms.CallListReply.prototype.setTotalPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 total_count = 5;
 * @return {number}
 */
proto.pb.cms.CallListReply.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CallListReply} returns this
 */
proto.pb.cms.CallListReply.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.TransactionListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.TransactionListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.TransactionListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.TransactionListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    areaId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    traderType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    traderId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    sourceType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    createdStart: jspb.Message.getFieldWithDefault(msg, 8, 0),
    createdEnd: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.TransactionListRequest}
 */
proto.pb.cms.TransactionListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.TransactionListRequest;
  return proto.pb.cms.TransactionListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.TransactionListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.TransactionListRequest}
 */
proto.pb.cms.TransactionListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 5:
      var value = /** @type {!proto.pb.EntityType} */ (reader.readEnum());
      msg.setTraderType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTraderId(value);
      break;
    case 7:
      var value = /** @type {!proto.pb.EntityType} */ (reader.readEnum());
      msg.setSourceType(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedStart(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatedEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.TransactionListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.TransactionListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.TransactionListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.TransactionListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTraderType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getTraderId();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getSourceType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getCreatedStart();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getCreatedEnd();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * optional uint32 page_no = 1;
 * @return {number}
 */
proto.pb.cms.TransactionListRequest.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.TransactionListRequest} returns this
 */
proto.pb.cms.TransactionListRequest.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.pb.cms.TransactionListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.TransactionListRequest} returns this
 */
proto.pb.cms.TransactionListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 area_id = 3;
 * @return {number}
 */
proto.pb.cms.TransactionListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.TransactionListRequest} returns this
 */
proto.pb.cms.TransactionListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 app_id = 4;
 * @return {number}
 */
proto.pb.cms.TransactionListRequest.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.TransactionListRequest} returns this
 */
proto.pb.cms.TransactionListRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional pb.EntityType trader_type = 5;
 * @return {!proto.pb.EntityType}
 */
proto.pb.cms.TransactionListRequest.prototype.getTraderType = function() {
  return /** @type {!proto.pb.EntityType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.pb.EntityType} value
 * @return {!proto.pb.cms.TransactionListRequest} returns this
 */
proto.pb.cms.TransactionListRequest.prototype.setTraderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional uint32 trader_id = 6;
 * @return {number}
 */
proto.pb.cms.TransactionListRequest.prototype.getTraderId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.TransactionListRequest} returns this
 */
proto.pb.cms.TransactionListRequest.prototype.setTraderId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional pb.EntityType source_type = 7;
 * @return {!proto.pb.EntityType}
 */
proto.pb.cms.TransactionListRequest.prototype.getSourceType = function() {
  return /** @type {!proto.pb.EntityType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.pb.EntityType} value
 * @return {!proto.pb.cms.TransactionListRequest} returns this
 */
proto.pb.cms.TransactionListRequest.prototype.setSourceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional uint32 created_start = 8;
 * @return {number}
 */
proto.pb.cms.TransactionListRequest.prototype.getCreatedStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.TransactionListRequest} returns this
 */
proto.pb.cms.TransactionListRequest.prototype.setCreatedStart = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 created_end = 9;
 * @return {number}
 */
proto.pb.cms.TransactionListRequest.prototype.getCreatedEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.TransactionListRequest} returns this
 */
proto.pb.cms.TransactionListRequest.prototype.setCreatedEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.TransactionListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.TransactionListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.TransactionListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.TransactionListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.TransactionListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    usertype_pb.Transaction.toObject, includeInstance),
    pageNo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.TransactionListReply}
 */
proto.pb.cms.TransactionListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.TransactionListReply;
  return proto.pb.cms.TransactionListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.TransactionListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.TransactionListReply}
 */
proto.pb.cms.TransactionListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new usertype_pb.Transaction;
      reader.readMessage(value,usertype_pb.Transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.TransactionListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.TransactionListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.TransactionListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.TransactionListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      usertype_pb.Transaction.serializeBinaryToWriter
    );
  }
  f = message.getPageNo();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalPage();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * repeated pb.Transaction transactions = 1;
 * @return {!Array<!proto.pb.Transaction>}
 */
proto.pb.cms.TransactionListReply.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.pb.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, usertype_pb.Transaction, 1));
};


/**
 * @param {!Array<!proto.pb.Transaction>} value
 * @return {!proto.pb.cms.TransactionListReply} returns this
*/
proto.pb.cms.TransactionListReply.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Transaction}
 */
proto.pb.cms.TransactionListReply.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Transaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.TransactionListReply} returns this
 */
proto.pb.cms.TransactionListReply.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};


/**
 * optional uint32 page_no = 2;
 * @return {number}
 */
proto.pb.cms.TransactionListReply.prototype.getPageNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.TransactionListReply} returns this
 */
proto.pb.cms.TransactionListReply.prototype.setPageNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page_size = 3;
 * @return {number}
 */
proto.pb.cms.TransactionListReply.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.TransactionListReply} returns this
 */
proto.pb.cms.TransactionListReply.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_page = 4;
 * @return {number}
 */
proto.pb.cms.TransactionListReply.prototype.getTotalPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.TransactionListReply} returns this
 */
proto.pb.cms.TransactionListReply.prototype.setTotalPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 total_count = 5;
 * @return {number}
 */
proto.pb.cms.TransactionListReply.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.TransactionListReply} returns this
 */
proto.pb.cms.TransactionListReply.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.CreateSettleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.CreateSettleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.CreateSettleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CreateSettleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    settleAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    minBalance: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.CreateSettleRequest}
 */
proto.pb.cms.CreateSettleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.CreateSettleRequest;
  return proto.pb.cms.CreateSettleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.CreateSettleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.CreateSettleRequest}
 */
proto.pb.cms.CreateSettleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSettleAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.CreateSettleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.CreateSettleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.CreateSettleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CreateSettleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSettleAt();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMinBalance();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.CreateSettleRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CreateSettleRequest} returns this
 */
proto.pb.cms.CreateSettleRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 settle_at = 2;
 * @return {number}
 */
proto.pb.cms.CreateSettleRequest.prototype.getSettleAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CreateSettleRequest} returns this
 */
proto.pb.cms.CreateSettleRequest.prototype.setSettleAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 min_balance = 3;
 * @return {number}
 */
proto.pb.cms.CreateSettleRequest.prototype.getMinBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CreateSettleRequest} returns this
 */
proto.pb.cms.CreateSettleRequest.prototype.setMinBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.SubmitSettleRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.SubmitSettleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.SubmitSettleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.SubmitSettleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.SubmitSettleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    anchortype_pb.SettleRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.SubmitSettleRequest}
 */
proto.pb.cms.SubmitSettleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.SubmitSettleRequest;
  return proto.pb.cms.SubmitSettleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.SubmitSettleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.SubmitSettleRequest}
 */
proto.pb.cms.SubmitSettleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 2:
      var value = new anchortype_pb.SettleRecord;
      reader.readMessage(value,anchortype_pb.SettleRecord.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.SubmitSettleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.SubmitSettleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.SubmitSettleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.SubmitSettleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      anchortype_pb.SettleRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.SubmitSettleRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.SubmitSettleRequest} returns this
 */
proto.pb.cms.SubmitSettleRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated pb.SettleRecord records = 2;
 * @return {!Array<!proto.pb.SettleRecord>}
 */
proto.pb.cms.SubmitSettleRequest.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.pb.SettleRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, anchortype_pb.SettleRecord, 2));
};


/**
 * @param {!Array<!proto.pb.SettleRecord>} value
 * @return {!proto.pb.cms.SubmitSettleRequest} returns this
*/
proto.pb.cms.SubmitSettleRequest.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pb.SettleRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.SettleRecord}
 */
proto.pb.cms.SubmitSettleRequest.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pb.SettleRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.SubmitSettleRequest} returns this
 */
proto.pb.cms.SubmitSettleRequest.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.SettleProgressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.SettleProgressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.SettleProgressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.SettleProgressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.SettleProgressRequest}
 */
proto.pb.cms.SettleProgressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.SettleProgressRequest;
  return proto.pb.cms.SettleProgressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.SettleProgressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.SettleProgressRequest}
 */
proto.pb.cms.SettleProgressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.SettleProgressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.SettleProgressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.SettleProgressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.SettleProgressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.SettleProgressRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.SettleProgressRequest} returns this
 */
proto.pb.cms.SettleProgressRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.SettleProgressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.SettleProgressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.SettleProgressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.SettleProgressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    progress: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.SettleProgressReply}
 */
proto.pb.cms.SettleProgressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.SettleProgressReply;
  return proto.pb.cms.SettleProgressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.SettleProgressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.SettleProgressReply}
 */
proto.pb.cms.SettleProgressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProgress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.SettleProgressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.SettleProgressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.SettleProgressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.SettleProgressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgress();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 progress = 1;
 * @return {number}
 */
proto.pb.cms.SettleProgressReply.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.SettleProgressReply} returns this
 */
proto.pb.cms.SettleProgressReply.prototype.setProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.SettleListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.SettleListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.SettleListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.SettleListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    guildId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    anchorId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    settleAt: jspb.Message.getFieldWithDefault(msg, 4, 0),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.SettleListRequest}
 */
proto.pb.cms.SettleListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.SettleListRequest;
  return proto.pb.cms.SettleListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.SettleListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.SettleListRequest}
 */
proto.pb.cms.SettleListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGuildId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAnchorId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSettleAt(value);
      break;
    case 5:
      var value = /** @type {!proto.pb.SettleStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.SettleListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.SettleListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.SettleListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.SettleListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getGuildId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAnchorId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getSettleAt();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.SettleListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.SettleListRequest} returns this
 */
proto.pb.cms.SettleListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 guild_id = 2;
 * @return {number}
 */
proto.pb.cms.SettleListRequest.prototype.getGuildId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.SettleListRequest} returns this
 */
proto.pb.cms.SettleListRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 anchor_id = 3;
 * @return {number}
 */
proto.pb.cms.SettleListRequest.prototype.getAnchorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.SettleListRequest} returns this
 */
proto.pb.cms.SettleListRequest.prototype.setAnchorId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 settle_at = 4;
 * @return {number}
 */
proto.pb.cms.SettleListRequest.prototype.getSettleAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.SettleListRequest} returns this
 */
proto.pb.cms.SettleListRequest.prototype.setSettleAt = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional pb.SettleStatus status = 5;
 * @return {!proto.pb.SettleStatus}
 */
proto.pb.cms.SettleListRequest.prototype.getStatus = function() {
  return /** @type {!proto.pb.SettleStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.pb.SettleStatus} value
 * @return {!proto.pb.cms.SettleListRequest} returns this
 */
proto.pb.cms.SettleListRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.SettleListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.SettleListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.SettleListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.SettleListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.SettleListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    anchortype_pb.SettleRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.SettleListReply}
 */
proto.pb.cms.SettleListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.SettleListReply;
  return proto.pb.cms.SettleListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.SettleListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.SettleListReply}
 */
proto.pb.cms.SettleListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new anchortype_pb.SettleRecord;
      reader.readMessage(value,anchortype_pb.SettleRecord.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.SettleListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.SettleListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.SettleListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.SettleListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      anchortype_pb.SettleRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.SettleRecord records = 1;
 * @return {!Array<!proto.pb.SettleRecord>}
 */
proto.pb.cms.SettleListReply.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.pb.SettleRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, anchortype_pb.SettleRecord, 1));
};


/**
 * @param {!Array<!proto.pb.SettleRecord>} value
 * @return {!proto.pb.cms.SettleListReply} returns this
*/
proto.pb.cms.SettleListReply.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.SettleRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.SettleRecord}
 */
proto.pb.cms.SettleListReply.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.SettleRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.SettleListReply} returns this
 */
proto.pb.cms.SettleListReply.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AppListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AppListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AppListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AppListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AppListRequest}
 */
proto.pb.cms.AppListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AppListRequest;
  return proto.pb.cms.AppListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AppListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AppListRequest}
 */
proto.pb.cms.AppListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AppListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AppListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AppListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AppListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.AppListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AppListRequest} returns this
 */
proto.pb.cms.AppListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.AppListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AppListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AppListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AppListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AppListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    appsList: jspb.Message.toObjectList(msg.getAppsList(),
    cmstype_pb.App.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AppListReply}
 */
proto.pb.cms.AppListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AppListReply;
  return proto.pb.cms.AppListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AppListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AppListReply}
 */
proto.pb.cms.AppListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cmstype_pb.App;
      reader.readMessage(value,cmstype_pb.App.deserializeBinaryFromReader);
      msg.addApps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AppListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AppListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AppListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AppListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cmstype_pb.App.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.App apps = 1;
 * @return {!Array<!proto.pb.App>}
 */
proto.pb.cms.AppListReply.prototype.getAppsList = function() {
  return /** @type{!Array<!proto.pb.App>} */ (
    jspb.Message.getRepeatedWrapperField(this, cmstype_pb.App, 1));
};


/**
 * @param {!Array<!proto.pb.App>} value
 * @return {!proto.pb.cms.AppListReply} returns this
*/
proto.pb.cms.AppListReply.prototype.setAppsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.App=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.App}
 */
proto.pb.cms.AppListReply.prototype.addApps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.App, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.AppListReply} returns this
 */
proto.pb.cms.AppListReply.prototype.clearAppsList = function() {
  return this.setAppsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.VersionListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.VersionListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.VersionListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.VersionListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.VersionListRequest}
 */
proto.pb.cms.VersionListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.VersionListRequest;
  return proto.pb.cms.VersionListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.VersionListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.VersionListRequest}
 */
proto.pb.cms.VersionListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.VersionListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.VersionListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.VersionListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.VersionListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 app_id = 1;
 * @return {number}
 */
proto.pb.cms.VersionListRequest.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.VersionListRequest} returns this
 */
proto.pb.cms.VersionListRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.VersionListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.VersionListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.VersionListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.VersionListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.VersionListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionsList: jspb.Message.toObjectList(msg.getVersionsList(),
    cmstype_pb.Version.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.VersionListReply}
 */
proto.pb.cms.VersionListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.VersionListReply;
  return proto.pb.cms.VersionListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.VersionListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.VersionListReply}
 */
proto.pb.cms.VersionListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cmstype_pb.Version;
      reader.readMessage(value,cmstype_pb.Version.deserializeBinaryFromReader);
      msg.addVersions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.VersionListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.VersionListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.VersionListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.VersionListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cmstype_pb.Version.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.Version versions = 1;
 * @return {!Array<!proto.pb.Version>}
 */
proto.pb.cms.VersionListReply.prototype.getVersionsList = function() {
  return /** @type{!Array<!proto.pb.Version>} */ (
    jspb.Message.getRepeatedWrapperField(this, cmstype_pb.Version, 1));
};


/**
 * @param {!Array<!proto.pb.Version>} value
 * @return {!proto.pb.cms.VersionListReply} returns this
*/
proto.pb.cms.VersionListReply.prototype.setVersionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Version=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Version}
 */
proto.pb.cms.VersionListReply.prototype.addVersions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Version, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.VersionListReply} returns this
 */
proto.pb.cms.VersionListReply.prototype.clearVersionsList = function() {
  return this.setVersionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AreaConfigListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AreaConfigListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AreaConfigListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AreaConfigListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AreaConfigListRequest}
 */
proto.pb.cms.AreaConfigListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AreaConfigListRequest;
  return proto.pb.cms.AreaConfigListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AreaConfigListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AreaConfigListRequest}
 */
proto.pb.cms.AreaConfigListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AreaConfigListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AreaConfigListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AreaConfigListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AreaConfigListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.AreaConfigListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AreaConfigListRequest} returns this
 */
proto.pb.cms.AreaConfigListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 app_id = 2;
 * @return {number}
 */
proto.pb.cms.AreaConfigListRequest.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AreaConfigListRequest} returns this
 */
proto.pb.cms.AreaConfigListRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.AreaConfigListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AreaConfigListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AreaConfigListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AreaConfigListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AreaConfigListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    configsList: jspb.Message.toObjectList(msg.getConfigsList(),
    cmstype_pb.AreaConfig.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AreaConfigListReply}
 */
proto.pb.cms.AreaConfigListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AreaConfigListReply;
  return proto.pb.cms.AreaConfigListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AreaConfigListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AreaConfigListReply}
 */
proto.pb.cms.AreaConfigListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cmstype_pb.AreaConfig;
      reader.readMessage(value,cmstype_pb.AreaConfig.deserializeBinaryFromReader);
      msg.addConfigs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AreaConfigListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AreaConfigListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AreaConfigListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AreaConfigListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cmstype_pb.AreaConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.AreaConfig configs = 1;
 * @return {!Array<!proto.pb.AreaConfig>}
 */
proto.pb.cms.AreaConfigListReply.prototype.getConfigsList = function() {
  return /** @type{!Array<!proto.pb.AreaConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, cmstype_pb.AreaConfig, 1));
};


/**
 * @param {!Array<!proto.pb.AreaConfig>} value
 * @return {!proto.pb.cms.AreaConfigListReply} returns this
*/
proto.pb.cms.AreaConfigListReply.prototype.setConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.AreaConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.AreaConfig}
 */
proto.pb.cms.AreaConfigListReply.prototype.addConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.AreaConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.AreaConfigListReply} returns this
 */
proto.pb.cms.AreaConfigListReply.prototype.clearConfigsList = function() {
  return this.setConfigsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.CountryConfigListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.CountryConfigListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.CountryConfigListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CountryConfigListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.CountryConfigListRequest}
 */
proto.pb.cms.CountryConfigListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.CountryConfigListRequest;
  return proto.pb.cms.CountryConfigListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.CountryConfigListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.CountryConfigListRequest}
 */
proto.pb.cms.CountryConfigListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.CountryConfigListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.CountryConfigListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.CountryConfigListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CountryConfigListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.CountryConfigListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CountryConfigListRequest} returns this
 */
proto.pb.cms.CountryConfigListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.CountryConfigListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.CountryConfigListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.CountryConfigListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.CountryConfigListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CountryConfigListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    configsList: jspb.Message.toObjectList(msg.getConfigsList(),
    usertype_pb.CountryConfig.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.CountryConfigListReply}
 */
proto.pb.cms.CountryConfigListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.CountryConfigListReply;
  return proto.pb.cms.CountryConfigListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.CountryConfigListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.CountryConfigListReply}
 */
proto.pb.cms.CountryConfigListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new usertype_pb.CountryConfig;
      reader.readMessage(value,usertype_pb.CountryConfig.deserializeBinaryFromReader);
      msg.addConfigs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.CountryConfigListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.CountryConfigListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.CountryConfigListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CountryConfigListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      usertype_pb.CountryConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.CountryConfig configs = 1;
 * @return {!Array<!proto.pb.CountryConfig>}
 */
proto.pb.cms.CountryConfigListReply.prototype.getConfigsList = function() {
  return /** @type{!Array<!proto.pb.CountryConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, usertype_pb.CountryConfig, 1));
};


/**
 * @param {!Array<!proto.pb.CountryConfig>} value
 * @return {!proto.pb.cms.CountryConfigListReply} returns this
*/
proto.pb.cms.CountryConfigListReply.prototype.setConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.CountryConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.CountryConfig}
 */
proto.pb.cms.CountryConfigListReply.prototype.addConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.CountryConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.CountryConfigListReply} returns this
 */
proto.pb.cms.CountryConfigListReply.prototype.clearConfigsList = function() {
  return this.setConfigsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.PayChannelListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.PayChannelListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.PayChannelListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.PayChannelListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    payType: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.PayChannelListRequest}
 */
proto.pb.cms.PayChannelListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.PayChannelListRequest;
  return proto.pb.cms.PayChannelListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.PayChannelListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.PayChannelListRequest}
 */
proto.pb.cms.PayChannelListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 2:
      var value = /** @type {!proto.pb.PayType} */ (reader.readEnum());
      msg.setPayType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.PayChannelListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.PayChannelListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.PayChannelListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.PayChannelListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPayType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.PayChannelListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayChannelListRequest} returns this
 */
proto.pb.cms.PayChannelListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional pb.PayType pay_type = 2;
 * @return {!proto.pb.PayType}
 */
proto.pb.cms.PayChannelListRequest.prototype.getPayType = function() {
  return /** @type {!proto.pb.PayType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pb.PayType} value
 * @return {!proto.pb.cms.PayChannelListRequest} returns this
 */
proto.pb.cms.PayChannelListRequest.prototype.setPayType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.PayChannelListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.PayChannelListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.PayChannelListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.PayChannelListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.PayChannelListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelsList: jspb.Message.toObjectList(msg.getChannelsList(),
    usertype_pb.PayChannel.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.PayChannelListReply}
 */
proto.pb.cms.PayChannelListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.PayChannelListReply;
  return proto.pb.cms.PayChannelListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.PayChannelListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.PayChannelListReply}
 */
proto.pb.cms.PayChannelListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new usertype_pb.PayChannel;
      reader.readMessage(value,usertype_pb.PayChannel.deserializeBinaryFromReader);
      msg.addChannels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.PayChannelListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.PayChannelListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.PayChannelListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.PayChannelListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      usertype_pb.PayChannel.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.PayChannel channels = 1;
 * @return {!Array<!proto.pb.PayChannel>}
 */
proto.pb.cms.PayChannelListReply.prototype.getChannelsList = function() {
  return /** @type{!Array<!proto.pb.PayChannel>} */ (
    jspb.Message.getRepeatedWrapperField(this, usertype_pb.PayChannel, 1));
};


/**
 * @param {!Array<!proto.pb.PayChannel>} value
 * @return {!proto.pb.cms.PayChannelListReply} returns this
*/
proto.pb.cms.PayChannelListReply.prototype.setChannelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.PayChannel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.PayChannel}
 */
proto.pb.cms.PayChannelListReply.prototype.addChannels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.PayChannel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.PayChannelListReply} returns this
 */
proto.pb.cms.PayChannelListReply.prototype.clearChannelsList = function() {
  return this.setChannelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.PayConfigListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.PayConfigListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.PayConfigListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.PayConfigListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.PayConfigListRequest}
 */
proto.pb.cms.PayConfigListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.PayConfigListRequest;
  return proto.pb.cms.PayConfigListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.PayConfigListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.PayConfigListRequest}
 */
proto.pb.cms.PayConfigListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.PayConfigListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.PayConfigListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.PayConfigListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.PayConfigListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.PayConfigListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.PayConfigListRequest} returns this
 */
proto.pb.cms.PayConfigListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.PayConfigListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.PayConfigListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.PayConfigListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.PayConfigListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.PayConfigListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    configsList: jspb.Message.toObjectList(msg.getConfigsList(),
    cmstype_pb.PayConfig.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.PayConfigListReply}
 */
proto.pb.cms.PayConfigListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.PayConfigListReply;
  return proto.pb.cms.PayConfigListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.PayConfigListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.PayConfigListReply}
 */
proto.pb.cms.PayConfigListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cmstype_pb.PayConfig;
      reader.readMessage(value,cmstype_pb.PayConfig.deserializeBinaryFromReader);
      msg.addConfigs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.PayConfigListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.PayConfigListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.PayConfigListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.PayConfigListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cmstype_pb.PayConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.PayConfig configs = 1;
 * @return {!Array<!proto.pb.PayConfig>}
 */
proto.pb.cms.PayConfigListReply.prototype.getConfigsList = function() {
  return /** @type{!Array<!proto.pb.PayConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, cmstype_pb.PayConfig, 1));
};


/**
 * @param {!Array<!proto.pb.PayConfig>} value
 * @return {!proto.pb.cms.PayConfigListReply} returns this
*/
proto.pb.cms.PayConfigListReply.prototype.setConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.PayConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.PayConfig}
 */
proto.pb.cms.PayConfigListReply.prototype.addConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.PayConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.PayConfigListReply} returns this
 */
proto.pb.cms.PayConfigListReply.prototype.clearConfigsList = function() {
  return this.setConfigsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.CommodityListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.CommodityListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.CommodityListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CommodityListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    areaId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isSubscription: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.CommodityListRequest}
 */
proto.pb.cms.CommodityListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.CommodityListRequest;
  return proto.pb.cms.CommodityListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.CommodityListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.CommodityListRequest}
 */
proto.pb.cms.CommodityListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSubscription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.CommodityListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.CommodityListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.CommodityListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CommodityListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getIsSubscription();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint32 area_id = 1;
 * @return {number}
 */
proto.pb.cms.CommodityListRequest.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CommodityListRequest} returns this
 */
proto.pb.cms.CommodityListRequest.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 app_id = 2;
 * @return {number}
 */
proto.pb.cms.CommodityListRequest.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.CommodityListRequest} returns this
 */
proto.pb.cms.CommodityListRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool is_subscription = 3;
 * @return {boolean}
 */
proto.pb.cms.CommodityListRequest.prototype.getIsSubscription = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.cms.CommodityListRequest} returns this
 */
proto.pb.cms.CommodityListRequest.prototype.setIsSubscription = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.cms.CommodityListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.CommodityListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.CommodityListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.CommodityListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CommodityListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    commoditiesList: jspb.Message.toObjectList(msg.getCommoditiesList(),
    usertype_pb.Commodity.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.CommodityListReply}
 */
proto.pb.cms.CommodityListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.CommodityListReply;
  return proto.pb.cms.CommodityListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.CommodityListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.CommodityListReply}
 */
proto.pb.cms.CommodityListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new usertype_pb.Commodity;
      reader.readMessage(value,usertype_pb.Commodity.deserializeBinaryFromReader);
      msg.addCommodities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.CommodityListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.CommodityListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.CommodityListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.CommodityListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommoditiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      usertype_pb.Commodity.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.Commodity commodities = 1;
 * @return {!Array<!proto.pb.Commodity>}
 */
proto.pb.cms.CommodityListReply.prototype.getCommoditiesList = function() {
  return /** @type{!Array<!proto.pb.Commodity>} */ (
    jspb.Message.getRepeatedWrapperField(this, usertype_pb.Commodity, 1));
};


/**
 * @param {!Array<!proto.pb.Commodity>} value
 * @return {!proto.pb.cms.CommodityListReply} returns this
*/
proto.pb.cms.CommodityListReply.prototype.setCommoditiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Commodity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Commodity}
 */
proto.pb.cms.CommodityListReply.prototype.addCommodities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Commodity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.cms.CommodityListReply} returns this
 */
proto.pb.cms.CommodityListReply.prototype.clearCommoditiesList = function() {
  return this.setCommoditiesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AgoraKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AgoraKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AgoraKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AgoraKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    callId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AgoraKeyRequest}
 */
proto.pb.cms.AgoraKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AgoraKeyRequest;
  return proto.pb.cms.AgoraKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AgoraKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AgoraKeyRequest}
 */
proto.pb.cms.AgoraKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCallId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AgoraKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AgoraKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AgoraKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AgoraKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint64 call_id = 1;
 * @return {number}
 */
proto.pb.cms.AgoraKeyRequest.prototype.getCallId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AgoraKeyRequest} returns this
 */
proto.pb.cms.AgoraKeyRequest.prototype.setCallId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 user_id = 2;
 * @return {number}
 */
proto.pb.cms.AgoraKeyRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AgoraKeyRequest} returns this
 */
proto.pb.cms.AgoraKeyRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AgoraKeyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AgoraKeyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AgoraKeyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AgoraKeyReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AgoraKeyReply}
 */
proto.pb.cms.AgoraKeyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AgoraKeyReply;
  return proto.pb.cms.AgoraKeyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AgoraKeyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AgoraKeyReply}
 */
proto.pb.cms.AgoraKeyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AgoraKeyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AgoraKeyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AgoraKeyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AgoraKeyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.pb.cms.AgoraKeyReply.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.cms.AgoraKeyReply} returns this
 */
proto.pb.cms.AgoraKeyReply.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.cms.AdminFileChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.cms.AdminFileChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.cms.AdminFileChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AdminFileChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    filename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    content: msg.getContent_asB64(),
    areaId: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.cms.AdminFileChunk}
 */
proto.pb.cms.AdminFileChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.cms.AdminFileChunk;
  return proto.pb.cms.AdminFileChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.cms.AdminFileChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.cms.AdminFileChunk}
 */
proto.pb.cms.AdminFileChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 3:
      var value = /** @type {!proto.pb.FileType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAreaId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.cms.AdminFileChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.cms.AdminFileChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.cms.AdminFileChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.cms.AdminFileChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getAreaId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 offset = 1;
 * @return {number}
 */
proto.pb.cms.AdminFileChunk.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AdminFileChunk} returns this
 */
proto.pb.cms.AdminFileChunk.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string filename = 2;
 * @return {string}
 */
proto.pb.cms.AdminFileChunk.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.cms.AdminFileChunk} returns this
 */
proto.pb.cms.AdminFileChunk.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pb.FileType type = 3;
 * @return {!proto.pb.FileType}
 */
proto.pb.cms.AdminFileChunk.prototype.getType = function() {
  return /** @type {!proto.pb.FileType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pb.FileType} value
 * @return {!proto.pb.cms.AdminFileChunk} returns this
 */
proto.pb.cms.AdminFileChunk.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bytes content = 4;
 * @return {string}
 */
proto.pb.cms.AdminFileChunk.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes content = 4;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.pb.cms.AdminFileChunk.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.pb.cms.AdminFileChunk.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pb.cms.AdminFileChunk} returns this
 */
proto.pb.cms.AdminFileChunk.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional uint32 area_id = 5;
 * @return {number}
 */
proto.pb.cms.AdminFileChunk.prototype.getAreaId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.cms.AdminFileChunk} returns this
 */
proto.pb.cms.AdminFileChunk.prototype.setAreaId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


goog.object.extend(exports, proto.pb.cms);
