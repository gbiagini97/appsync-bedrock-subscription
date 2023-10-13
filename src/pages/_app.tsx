import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify, API, graphqlOperation } from 'aws-amplify';

export default function App({ Component, pageProps }: AppProps) {

  Amplify.configure({
    aws_appsync_graphqlEndpoint:
      'https://zue6nkmus5a3doezis66tvfvlm.appsync-api.us-west-2.amazonaws.com/graphql',
    aws_appsync_region: 'us-west-2',
    aws_appsync_authenticationType: 'API_KEY',
    aws_appsync_apiKey: 'da2-fiecvpss3bbdpa6oivfion5zsy'
  })

  return <Component {...pageProps} />
}
