
/**
 * 测试
 */
// import { GreeterClient } from '@/proto/hello/hello_grpc_web_pb.js'
// import { HelloRequest, HelloReply } from '@/proto/hello/hello_pb.js'
//
// export const greeterClient = new GreeterClient(host, null, null)
// export const helloRequest = HelloRequest


/**
 * cms
 */
import { CmsSdkClient } from '@/proto/js/cms_grpc_web_pb.js'
export const cmsService = new CmsSdkClient(process.env.VUE_APP_GRPC_PROXY_URI, null, null)
