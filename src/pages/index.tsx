import { InvokedSubscription } from '../API'
import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLSubscription } from '@aws-amplify/api';
import * as subscriptions from '../graphql/subscriptions';
import { useEffect } from 'react'



export default function Home() {

  useEffect(() => {
    const sub = API.graphql<GraphQLSubscription<InvokedSubscription>>(
      graphqlOperation(subscriptions.invoked)
    ).subscribe({
      next: ({ provider, value }) => {
        const res = JSON.parse(value.data?.invoked || "")
        const body = res.body.replaceAll(/[^\x00-\x7F]/g, "")

        const jsonPattern = /event{[^}]+}/g;

        // Find all JSON objects in the input string
        const jsonArray = body.match(jsonPattern)
          ?.map((jsonStr: string) => jsonStr.slice(5))
          ?.map((jsonStr: string) => JSON.parse(jsonStr));

        // In every element of the jsonArray we have a {"bytes": "encodedBase64String"}
        // Now we proceed to decode the bytes and convert them to utf8

        let response = ""

        jsonArray.forEach((jsonObj: any) => {
          const decoded = JSON.parse(Buffer.from(jsonObj.bytes, 'base64').toString('utf8'))
          response += decoded?.completion
        })

        console.log(response)
      },

      error: (error) => console.warn(error)
    });
  })

  return (
    <>
    </>
  )
}
