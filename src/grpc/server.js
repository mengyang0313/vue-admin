const host = 'http://localhost:10000'


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
export const cmsService = new CmsSdkClient(host, null, null)
