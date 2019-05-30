

/**
* Sample Product Sell
* @param {org.neil.Buy} product - to sell
* @transaction
*/

async function Buy_Product(contract) {  // eslint-disable-line no-unused-vars
    // Save the old value of the asset.
    contract.pro.owner = contract.NewOwner;
    const assetRegistry = await getAssetRegistry('org.neil.Product');
    await assetRegistry.update(contract.pro);
    contract.NewOwner.my_products.push(contract.pro);
    const partRegistry = await getParticipantRegistry('org.neil.Customer_peer');
    await partRegistry.update(contract.NewOwner);
}

/**
* Sample Product Sell
* @param {org.neil.DefinePolicy} define-policy
* @transaction
*/

async function Define_Policy(contract) {
    contract.insurance.my_policies.push(contract.typeofpolicy)
    const partRegistry = await getParticipantRegistry('org.neil.Insurance_peer');
    await partRegistry.update(contract.insurance);
    contract.typeofpolicy.InsuranceId = contract.insurance.InsuranceId;
    const assetRegistry = await getAssetRegistry('org.neil.PolicyType');
    await assetRegistry.update(contract.typeofpolicy);      
}

/**
* Sample Product Sell
* @param {org.neil.InsuredProduct} insure-product
* @transaction
*/

async function Insure_Product(contract) {
    contract.samaan.Insurance_status = "1";
    contract.samaan.ProductInsurance = contract.beema;
    const samaanRegistry = await getAssetRegistry('org.neil.Product');
    await samaanRegistry.update(contract.samaan);
    contract.beema.insured_product = contract.samaan;
    const assetRegistry = await getAssetRegistry('org.neil.Insurance');
    await assetRegistry.update(contract.beema);     
}

/**
* Sample Product Sell
* @param {org.neil.AddProduct} add-product
* @transaction
*/

async function add_product(contract) {
    contract.shop.Shop_products.push(contract.commodity)
    const partRegistry = await getParticipantRegistry('org.neil.Shop_peer');
    await partRegistry.update(contract.shop);
    contract.commodity.shop = contract.shop;
    const assetRegistry = await getAssetRegistry('org.neil.Product');
    await assetRegistry.update(contract.commodity);     
}

/**
* Sample Product Sell
* @param {org.neil.PolicyInsurance} Policy-Insurance
* @transaction
*/

async function policy_insurance(contract) {
    contract.beema.PolicyType = contract.typeofpolicy.PolicytypeId
    const assetRegistry = await getAssetRegistry('org.neil.Insurance');
    await assetRegistry.update(contract.beema);
    contract.typeofpolicy.insurances.push(contract.beema);
    const asset_Registry = await getAssetRegistry('org.neil.PolicyType');
    await asset_Registry.update(contract.typeofpolicy);     
}

/**
* Sample Product Sell
* @param {org.neil.ClaimDamage} service-pro
* @transaction
*/

async function claimdamage(contract){
  contract.pro.Insurance_status = "2";
  contract.pro.ServiceCentre = contract.service;
  const assetRegistry= await getAssetRegistry('org.neil.Product');
  await assetRegistry.update(contract.pro);
  contract.service.products_to_service.push(contract.pro);
  const partRegistry = await getParticipantRegistry('org.neil.Service_peer');
  await partRegistry.update(contract.service);
}

/**
* Sample Product Sell
* @param {org.neil.ClaimTheft} police-pro
* @transaction
*/

async function claimtheft(contract){
  contract.pro.Insurance_status = "2";
  contract.pro.PoliceId = contract.police;
  const assetRegistry= await getAssetRegistry('org.neil.Product');
  await assetRegistry.update(contract.pro);
  contract.police.tocheck.push(contract.pro);
  const partRegistry = await getParticipantRegistry('org.neil.Police_peer');
  await partRegistry.update(contract.police);
}

/**
* Sample Product Sell
* @param {org.neil.AcceptDamage} service-pro
* @transaction
*/

async function acceptdamage(contract){
  contract.pro.Insurance_status = "3";
  const assetRegistry= await getAssetRegistry('org.neil.Product');
  await assetRegistry.update(contract.pro);
  for (var i = 0; i < contract.service.products_to_service.length; ++i) {
    if (contract.service.products_to_service[i] === contract.pro) {
        //delete
        contract.service.products_to_service.splice(i, 1);
        break;
    }
  }
  const partRegistry = await getParticipantRegistry('org.neil.Service_peer');
  await partRegistry.update(contract.service);
}

/**
* Sample Product Sell
* @param {org.neil.RejectDamage} service-pro
* @transaction
*/

async function Rejectdamage(contract){
  contract.pro.Insurance_status = "4";
  const assetRegistry= await getAssetRegistry('org.neil.Product');
  await assetRegistry.update(contract.pro);
  for (var i = 0; i < contract.service.products_to_service.length; ++i) {
    if (contract.service.products_to_service[i] === contract.pro) {
        //delete
        contract.service.products_to_service.splice(i, 1);
        break;
    }
  }
  const partRegistry = await getParticipantRegistry('org.neil.Service_peer');
  await partRegistry.update(contract.service);
}

/**
* Sample Product Sell
* @param {org.neil.AcceptTheft} police-pro
* @transaction
*/

async function accepttheft(contract){
  contract.pro.Insurance_status = "3";
  const assetRegistry= await getAssetRegistry('org.neil.Product');
  await assetRegistry.update(contract.pro);
  for (var i = 0; i < contract.police.tocheck.length; ++i) {
    if (contract.police.tocheck[i] === contract.pro) {
        //delete
        contract.police.tocheck.splice(i, 1);
        break;
    }
  }
  const partRegistry = await getParticipantRegistry('org.neil.Police_peer');
  await partRegistry.update(contract.police);
}

/**
* Sample Product Sell
* @param {org.neil.RejectTheft} police-pro
* @transaction
*/

async function rejecttheft(contract){
  contract.pro.Insurance_status = "4";
  const assetRegistry= await getAssetRegistry('org.neil.Product');
  await assetRegistry.update(contract.pro);
  for (var i = 0; i < contract.police.tocheck.length; ++i) {
    if (contract.police.tocheck[i] === contract.pro) {
        //delete
        contract.police.tocheck.splice(i, 1);
        break;
    }
  }
  const partRegistry = await getParticipantRegistry('org.neil.Police_peer');
  await partRegistry.update(contract.police);
}






