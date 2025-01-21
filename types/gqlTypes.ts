/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type SendEmailInput = {
  fromAddress: string,
  message: string,
};

export type SendEmailResult = {
  __typename: "SendEmailResult",
  success: boolean,
};

export type PlaceHolderQueryVariables = {
};

export type PlaceHolderQuery = {
  placeHolder: string,
};

export type sendEmailMutationVariables = {
  input: SendEmailInput,
};

export type sendEmailMutation = {
  sendEmail:  {
    __typename: "SendEmailResult",
    success: boolean,
  },
};
