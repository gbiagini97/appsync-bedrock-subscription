/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const invoked = /* GraphQL */ `subscription Invoked($id: String) {
  invoked(id: $id)
}
` as GeneratedSubscription<
  APITypes.InvokedSubscriptionVariables,
  APITypes.InvokedSubscription
>;
