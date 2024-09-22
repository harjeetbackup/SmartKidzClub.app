import type { NextApiRequest, NextApiResponse } from 'next'

const BUNDLE_ID = 'com.spearheadinc.Smartkidzclub' // replace with your bundle ID

const association = {
    applinks: {
        apps: [],
        details: [
            {
                appID: `${BUNDLE_ID}`,
                paths: ['*', "/"],
            },
        ],
    },
}

export default (_: NextApiRequest, response: NextApiResponse) => {
    return response.status(200).send(association)
}
