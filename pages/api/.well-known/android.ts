import type { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, response: NextApiResponse) => {
    return response.status(200).send([
        {
            "relation": ["delegate_permission/common.handle_all_urls"],
            "target": {
                "namespace": "premium_app",
                "package_name": "com.skc.smartkidzclub",
                "sha256_cert_fingerprints": [
                    "2d:ff:f7:de:d8:ca:aa:bb:9e:7c:75:52:63:bf:33:0a:24:2c:ea:3c:29:9a:82:17:91:87:3c:01:40:49:d8:43"
                ]
            }
        }
    ])
}
