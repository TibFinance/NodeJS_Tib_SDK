const TibFinance = require("./CryptoCaller");

class ServerCaller {

  initalize(baseUrl) {
    // TibFinance.CryptoCaller.initialize(baseUrl)
    TibFinance.CryptoCaller.initialize(baseUrl);
  }

  createSession(clientId, username, password) {
    var methodName = "/Data/CreateSession";
    var data = {
      ClientId: clientId,
      Username: username,
      Password: password,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  createCustomer(
    customerName,
    externalId,
    language = 1,
    customerDescription,
    serviceId,
    sessionToken
  ) {
    TibFinance.CryptoCaller.createSession();

    var methodName = "/Data/CreateCustomer";
    var data = {
      Customer: {
        CustomerName: customerName,
        CustomerExternalId: externalId,
        Language: language,
        CustomerDescription: customerDescription,
      },
      ServiceId: serviceId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  listCustomers(serviceId, sessionToken) {
    var methodName = "/Data/ListCustomers";
    var data = {
      ServiceId: serviceId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getCustomer(customerId, sessionToken) {
    var methodName = "/Data/GetCustomer";
    var data = {
      CustomerId: customerId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getCustomersByExternalId(externalCustomerId, sessionToken) {
    var methodName = "/Data/GetCustomersByExternalId";
    var data = {
      ExternalCustomerId: externalCustomerId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  saveCustomer(
    customerId,
    customerName,
    externalId,
    language = 1,
    customerDescription,
    sessionToken
  ) {
    var methodName = "/Data/SaveCustomer";
    var data = {
      Customer: {
        CustomerId: customerId,
        CustomerName: customerName,
        CustomerExternalId: externalId,
        Language: language,
        CustomerDescription: customerDescription,
      },
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  deleteCustomer(customerId, sessionToken) {
    var methodName = "/Data/DeleteCustomer";
    var data = { CustomerId: customerId, SessionToken: sessionToken };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  createMerchant(merchantInfo, serviceId, sessionToken) {
    var methodName = "/Data/CreateMerchant";
    var data = {
      ServiceId: serviceId,
      MerchantInfo: merchantInfo,
      SessionnToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  listTransfers(
    sessionToken,
    fromDate,
    toDate,
    externalMerchantGroupId,
    levelFilterId,
    markResolvedOnly,
    paymentFilterLevel,
    transferType,
    transferGroupId,
    onlyWithErrors
  ) {
    var methodName = "/data/ListTransfers";
    var data = {
      SessionToken: sessionToken,
      FromDate: fromDate,
      ExternalMerchantGroupId: externalMerchantGroupId,
      LevelFilterId: levelFilterId,
      MarkResolvedOnly: markResolvedOnly,
      PaymentFilterLevel: paymentFilterLevel,
      TransferType: transferType,
      ToDate: toDate,
      TransferGroupId: transferGroupId,
      OnlyWithErrors: onlyWithErrors,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  listTransfersFast(
    sessionToken,
    merchantId,
    fromDate,
    toDate,
    externalMerchantGroupId,
    markResolvedOnly,
    transferType,
    transferGroupId,
    onlyWithErrors
  ) {
    var methodName = "/data/ListTransfers";
    var data = {
      SessionToken: sessionToken,
      FromDate: fromDate,
      ExternalMerchantGroupId: externalMerchantGroupId,
      LevelFilterId: levelFilterId,
      MarkResolvedOnly: markResolvedOnly,
      PaymentFilterLevel: paymentFilterLevel,
      TransferType: transferType,
      ToDate: toDate,
      TransferGroupId: transferGroupId,
      OnlyWithErrors: onlyWithErrors,
      MerchantId: merchantId,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  listTransfersForBillFast(sessionToken, merchantId, billId) {
    var methodName = "/data/ListTransfersForBillFast";
    var data = {
      SessionToken: sessionToken,
      BillId: billId,
      MerchantId: merchantId,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  listMerchants(serviceId, sessionToken) {
    var methodName = "/Data/ListMerchants";
    var data = {
      ServiceId: sessionId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getMerchant(merchantId, sessionToken) {
    var methodName = "/Data/GetMerchant";
    var data = {
      MerchanntId: merchantId,
      SessionToken: sessionToken,
    };
    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  saveMerchant(merchantId, merchantInfo, sessionToken) {
    var methodName = "/Data/SaveMerchant";
    var data = {
      MerchantId: merchantId,
      MerchantInfo: merchantInfo,
      SessionToken: sessionToken,
    };
    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  saveMerchantBasicInfo(merchantId, merchantBasicInfo, sessionToken) {
    var methodName = "/Data/SaveMerchantBasicInfo";
    var data = {
      MerchantId: merchantId,
      MerchantInfo: merchantBasicInfo,
      SessionToken: sessionToken,
    };
    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  saveMerchantAccountInfo(merchantId, merchantAccount, sessionToken) {
    var methodName = "/Data/SaveMerchantAccountInfo";
    var data = {
      MerchantId: merchantId,
      Account: merchantAccount,
      SessionToken: sessionToken,
    };
    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  deleteMerchant(merchantId, sessionToken) {
    var methodName = "/Data/DeleteMerchant";
    var datat = {
      MerchanntId: merchantId,
      SessionToken: sessionToken,
    };
    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  //Payments / Transfers methodes :

  createCreditCardObject(
    pan,
    cvd,
    expirationMonth,
    expirationYear,
    creditCardDescription,
    cardOwner,
    streetAddress,
    addressCity,
    provinceStateId,
    countryId,
    postalZipCode
  ) {
    return {
      Pan: pan,
      Cvd: cvd,
      ExpirationMonth: expirationMonth,
      ExpirationYear: expirationYear,
      CreditCardDescription: creditCardDescription,
      CardOwner: cardOwner,
      CreditCardRegisteredAddress: {
        StreetAddress: streetAddress,
        AddressCity: addressCity,
        ProvinceStateId: provinceStateId,
        CountryId: countryId,
        PostalZipCode: postalZipCode,
      },
    };
  }

  createCreditCardPaymentMethod(
    customerId,
    isCustomerAutomaticPaymentMethod,
    creditCardObject,
    sessionToken
  ) {
    var methodName = "/Data/CreateCreditCardPaymentMethod";

    var data = {
      CustomerId: customerId,
      SessionToken: sessionToken,
      IsCustomerAutomaticPaymentMethod: isCustomerAutomaticPaymentMethod,
      CreditCard: creditCardObject,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  createBankAccountObject(
    owner,
    accountName,
    bankNumber,
    institutionNumber,
    accountNumber
  ) {
    return {
      Owner: owner,
      AccountName: accountName,
      BankNumber: bankNumber,
      InstitutionNumber: institutionNumber,
      AccountNumber: accountNumber,
    };
  }

  createDirectAccountPaymentMethod(
    customerId,
    isCustomerAutomaticPaymentMethod,
    accountObject,
    sessionToken
  ) {
    var methodName = "/Data/CreateDirectAccountPaymentMethod";

    var data = {
      CustomerId: customerId,
      SessionToken: sessionToken,
      IsCustomerAutomaticPaymentMethod: isCustomerAutomaticPaymentMethod,
      Account: accountObject,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  createInteracObject(
    description,
    owner,
    targetEmailAddress,
    targetMobilePhoneNumber,
    interacQuestion,
    interacAnswer
  ) {
    return {
      Description: description,
      Owner: owner,
      TargetEmailAddress: targetEmailAddress,
      TargetMobilePhoneNumber: targetMobilePhoneNumber,
      InteracQuestion: interacQuestion,
      InteracAnswer: interacAnswer,
    };
  }

  createInteracPaymentMethod(
    customerId,
    isCustomerAutomaticPaymentMethod,
    interacObject,
    sessionToken
  ) {
    var methodName = "/Data/CreateInteracPaymentMethod";

    var data = {
      CustomerId: customerId,
      SessionToken: sessionToken,
      IsCustomerAutomaticPaymentMethod: isCustomerAutomaticPaymentMethod,
      InteracInformation: interacObject,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getPaymentMethod(paymentMethodId, sessionToken) {
    var methodName = "/Data/GetPaymentMethod";
    var data = {
      SessionToken: sessionToken,
      PaymentMethodId: paymentMethodId,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  listPaymentMethods(customerId, sessionToken) {
    var methodName = "/Data/ListPaymentMethods";
    var data = {
      CustomerId: customerId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  setDefaultPaymentMethod(paymentMethodId, customerId, sessionToken) {
    var methodName = "/Data/SetDefaultPaymentMethod";
    var data = {
      PaymentMethodId: paymentMethodId,
      CustomerId: customerId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  ChangeInteracPaymentMethodQuestionAndAnswer(
    interacPaymentMethodId,
    interacQuestion,
    interacAnswer,
    SessionToken
  ) {
    var methodName = "/data/ChangeInteracPaymentMethodQuestionAndAnswer";
    var data = {
      InteracPaymentMethodId: interacPaymentMethodId,
      InteracQuestion: interacQuestion,
      InteracAnswer: interacAnswer,
      SessionToken: SessionToken,
    };
    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  deletePaymentMethod(paymentMethodId, sessionToken) {
    var methodName = "/Data/DeletePaymentMethod";
    var data = {
      PaymentMethodId: paymentMethodId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  deletePayment(paymentId, SessionToken) {
    var methodName = "/Data/DeletePayment";

    var data = {
      PaymentId: paymentId,
      SessionToken: SessionToken,
    };
    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  createBill(breakIfMerchantNeverBeenAuthorized, billDataObject, sessionToken) {
    var methodName = "/Data/CreateBill";
    var data = {
      BreakIfMerchantNeverBeenAuthorized: breakIfMerchantNeverBeenAuthorized,
      BillData: billDataObject,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  listBills(merchantId, serviceId, fromDateTime, toDateTime, sessionToken) {
    var methodName = "/Data/ListBills";
    var data = {
      ServiceId: serviceId,
      MerchantId: merchantId,
      FromDateTime: fromDateTime,
      FromDateTime: toDateTime,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getBill(billId, sessionToken) {
    var methodName = "/Data/GetBill";
    var data = {
      billId: billId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  deleteBill(billId, sessionToken) {
    var methodName = "/Data/DeleteBill";
    var data = {
      billId: billId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  createPayment(
    billId,
    setPaymentCustomerFromBill,
    CustomerEmail,
    paymentInfo,
    externalReferenceId,
    askForCustomerConsent,
    safetyToBreakIfOverRemainingBillAmount,
    autorizedPaymentMethod,
    doNotSendEmail,
    statementDescription,
    sessionToken
  ) {
    var methodName = "/Data/CreatePayment";
    var data = {
      BillId: billId,
      SetPaymentCustomerFromBill: setPaymentCustomerFromBill,
      CustomerEmail: CustomerEmail,
      PaymentInfo: paymentInfo,
      ExternalReferenceId: externalReferenceId,
      AskForCustomerConsent: askForCustomerConsent,
      SafetyToBreakIfOverRemainingBillAmount:
        safetyToBreakIfOverRemainingBillAmount,
      AutorizedPaymentMethod: autorizedPaymentMethod,
      DoNotSendEmail: doNotSendEmail,
      StatementDescription: statementDescription,

      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  createDirectDeposit(
    originMerchantId,
    destinationAccount,
    depositDueDate,
    currency,
    language,
    referenceNumber,
    amount,
    sessionToken
  ) {
    var methodName = "/Data/CreateDirectDeposit";
    var data = {
      OriginMerchantId: originMerchantId,
      DestinationAccount: destinationAccount,
      DepositDueDate: depositDueDate,
      Currency: currency,
      Language: language,
      ReferenceNumber: referenceNumber,
      Amount: amount,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  createDirectInteracTransaction(
    originMerchantId,
    destinationAccount,
    depositDueDate,
    currency,
    language,
    referenceNumber,
    amount,
    sessionToken
  ) {
    var methodName = "/Data/CreateDirectDeposit";
    var data = {
      OriginMerchantId: originMerchantId,
      DestinationAccount: destinationAccount,
      DepositDueDate: depositDueDate,
      Currency: currency,
      Language: language,
      ReferenceNumber: referenceNumber,
      Amount: amount,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  createTransactionFromRaw(merchantId, rawAcpFileContent, sessionToken) {
    var methodName = "/Data/CreateTransactionFromRaw";
    var data = {
      MerchantId: merchantId,
      RawAcpFileContent: rawAcpFileContent,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  createFreeOperation(
    merchantId,
    paymentMethodId,
    transferType,
    referenceNumber,
    amount,
    language,
    transactionDueDate,
    groupId,
    transferFrequency,
    sessionToken
  ) {
    var methodName = "/Data/CreateFreeOperation";
    var data = {
      MerchantId: merchantId,
      PaymentMethodId: paymentMethodId,
      TransferType: transferType,
      ReferenceNumber: referenceNumber,
      Amount: amount,
      Language: language,
      TransactionDueDate: transactionDueDate,
      GroupId: groupId,
      TransferFrequency: transferFrequency,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  deletePayment(paymentId, sessionToken) {
    var methodName = "/Data/DeletePayment";
    var data = {
      PaymentId: paymentId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  revertTransfer(transferId, sessionToken) {
    var methodName = "/Data/RevertTransfer";
    var data = { TransferId: transferId, SessionToken: sessionToken };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getRecuringTransfers(serviceId, sessionToken) {
    var methodName = "/Data/GetRecuringTransfers";
    var data = { ServiceId: serviceId, SessionToken: sessionToken };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  deleteRecuringTransfer(recuringTransferId, sessionToken) {
    var methodName = "/Data/DeleteRecuringTransfer";
    var data = {
      RecuringTransferId: recuringTransferId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  listExecutedOperations(
    fromDate,
    toDate,
    transferType,
    transferGroupId,
    onlyWithErrors,
    merchantId,
    dateType,
    sessionToken
  ) {
    var methodName = "/Data/listExecutedOperations";
    var data = {
      FromDate: fromDate,
      ToDate: toDate,
      TransferType: transferType,
      TransferGroupId: transferGroupId,
      OnlyWithErrors: onlyWithErrors,
      MerchantId: merchantId,
      DateType: dateType,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  //// WhiteLabeling Section

  setwhiteLabeling(id, level, whitelabelingData, sessionToken) {
    var methodName = "/Data/SetWhiteLabeling";
    var data = {
      Id: id,
      WhitelabelingLevel: level,
      WhiteLabelingData: whitelabelingData,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getWhiteLabelingData(id, level, sessionToken) {
    var methodName = "/Data/GetWhiteLabelingData";
    var data = {
      Id: id,
      WhitelabelingLevel: level,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  updateWhiteLabelingData(id, level, whitelabelingData, sessionToken) {
    var methodName = "/Data/UpdateWhiteLabelingData";
    var data = {
      Id: id,
      WhitelabelingLevel: level,
      UpdatedWhiteLabelingData: whitelabelingData,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  deleteWhiteLabeling(id, level, sessionToken) {
    var methodName = "/Data/DeleteWhiteLabeling";
    var data = {
      Id: id,
      WhitelabelingLevel: level,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getListWhiteLabelingData(sessionToken) {
    var methodName = "/Data/GetListWhiteLabelingData";
    var data = {
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  /// Sub Client's Methods .
  setClientDefaultServiceFeeSettings(
    clienntId,
    serviceFeeSettinngs,
    sessionToken
  ) {
    var methodName = "/Data/SetClientDefaultServiceFeeSettings";
    var data = {
      ClientId: clientId,
      ServicefeeSettings: serviceFeeSettinngs,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }
  
  setClientDefaultServiceSettings(
    clienntId,
    serviceFeeSettinngs,
    sessionToken
  ) {
    var methodName = "/Data/SetClientDefaultServiceSettings";
    var data = {
      ClientId: clientId,
      ServicefeeSettings: serviceFeeSettinngs,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  createSubClient(name, language, SessionToken) {
    var methodName = "/Data/CreateSubClient";

    var data = {
      Name: name,
      Language: language,
      SessionToken: SessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  setClientSettings(clientId, clientSettings, SessionToken) {
    var methodName = "/Data/SetClientSettings";

    var data = {
      CLientId: clientId,
      ClientSettings: clientSettings,
      SessionToken: SessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getClientSettings(clientId, SessionToken) {
    var methodName = "/Data/GetClientSettings";

    var data = {
      ClientId: clientId,
      SessionToken: SessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  markPaymentResolved(listOfPayment, sessionToken) {
    var methodName = "/Data/MarkPaymentResolved";

    var data = {
      ListOfPayment: listOfPayment,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getMerchantsByExternalId(
    externalSystemId,
    externalSystemGroupId,
    sessionToken
  ) {
    var methodName = "/Data/GetMerchantsByExternalId";

    var data = {
      ExternalSystemId: externalSystemId,
      ExternalSystemGroupId: externalSystemGroupId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }
  getMerchant(merchantId, sessionToken) {
    var methodName = "/Data/GetMerchant";

    var data = {
      MerchantId: merchantId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  forcePaymentProcess(paymentId, sessionToken) {
    var methodName = "/Data/ForcePaymentProcess";

    var data = {
      PaymentId: paymentId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  login() {
    var methodName = "/Data/Login";

    var data = {
      ClientIdUsername: clientId,
      LoginsUserRelationsId: loginsUserRelationsId,
      Username: username,
      Password: password,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getLoginAccessList(clientId, username, password, sessionToken) {
    var methodName = "/Data/Login";

    var data = {
      ClientId: clientId,
      LoginsUserRelationsId: loginsUserRelationsId,
      Username: username,
      Password: password,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getDropInPublicToken(
    clientId,
    billId,
    amount,
    transferType,
    dropInAuthorizedPaymentMethod,
    externalReferenceNumber,
    showCustomerExistingPaymentMethods,
    language,
    expirationDays,
    title,
    description,
    paymentDueDate,
    merchantId,
    sessionToken
  ) {
    var methodName = "/Data/GetDropInPublicToken";

    var data = {
      CustomerId: clientId,
      BillId: billId,
      Amount: amount,
      TransferType: transferType,
      DropInAuthorizedPaymentMethod: dropInAuthorizedPaymentMethod,
      ExternalReferenceNumber: externalReferenceNumber,
      ShowCustomerExistingPaymentMethods: showCustomerExistingPaymentMethods,
      Language: language,
      ExpirationDays: expirationDays,
      Title: title,
      Description: description,
      PaymentDueDate: paymentDueDate,
      MerchantId: merchantId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  addNewDasProvider(
    merchantId,
    DasProviderType,
    DasProviderQuebec,
    DasProviderCanada,
    sessionToken
  ) {
    var methodName = "/Data/AddNewDasProvider";

    var data = {
      MerchantId: merchantId,
      DasProviderType: DasProviderType,
      DasProviderQuebec: DasProviderQuebec,
      DasProviderCanada: DasProviderCanada,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  addNewDasPayment(
    merchantId,
    DasProviderId,
    DasPaymentProviderType,
    DasPaymentCanada,
    DasPaymentQuebec,
    sessionToken
  ) {
    var methodName = "/Data/AddNewDasPayment";
    var data = {
      MerchantId: merchantId,
      DasProviderId: DasProviderId,
      DasPaymentProviderType: DasPaymentProviderType,
      DasPaymentCanada: DasPaymentCanada,
      DasPaymentQuebec: DasPaymentQuebec,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  listDasProviders(merchantId, sessionToken) {
    var methodName = "/Data/ListDasProviders";
    var data = {
      MerchantId: merchantId,
      SesisonToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  listDasPayments(merchantId, dasProviderId, sessionToken) {
    var methodName = "/Data/ListDasPayments";
    var data = {
      MerchanntId: merchantId,
      dasProviderId: dasProviderId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  listServices(merchantId, sessionToken) {
    var methodName = "/Data/ListServices";

    var data = { MerchantId: merchantId, SessionToken: sessionToken };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }

  getService(serviceId, sessionToken) {
    var methodName = "/Data/GetService";
    var data = {
      ServiceId: serviceId,
      SessionToken: sessionToken,
    };

    return TibFinance.CryptoCaller.performCall(methodName, data);
  }
}
exports.ServerCaller = ServerCaller;