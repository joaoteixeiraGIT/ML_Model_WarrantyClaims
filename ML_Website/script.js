
function predictClaim() {
    // Get values from the form
    const area = document.getElementById('Area').value;
    const consumerProfile = document.getElementById('ConsumerP').value;
    const productCategory = document.getElementById('ProductC').value;
    const productType = document.getElementById('ProductT').value;
    const AC_1001_Issue = document.getElementById('AC_1001_ISSUE').value
    const AC_1002_Issue = document.getElementById('AC_1002_ISSUE').value
    const AC_1003_Issue = document.getElementById('AC_1003_ISSUE').value
    const TV_2001_Issue = document.getElementById('TV_2001_ISSUE').value
    const TV_2002_Issue = document.getElementById('TV_2002_ISSUE').value
    const TV_2003_Issue = document.getElementById('TV_2003_ISSUE').value
    const claimValue = document.getElementById('ClaimValue').value;
    const serviceCentre = document.getElementById('ServiceCentre').value;
    const productAge = document.getElementById('ProductAge').value;
    const purchasedFrom = document.getElementById('PurchasedFrom').value;
    const callDetails = document.getElementById('CallDetails').value;
    const purpose = document.getElementById('Purpose').value;

    // Check if any required field is empty
    if (
        area === '' ||
        consumerProfile === '' ||
        productCategory === '' ||
        productType === '' ||
        AC_1001_Issue === '' ||
        AC_1002_Issue === '' ||
        AC_1003_Issue === '' ||
        TV_2001_Issue === '' ||
        TV_2002_Issue === '' ||
        TV_2003_Issue === '' ||
        claimValue === '' ||
        serviceCentre === '' ||
        productAge === '' ||
        purchasedFrom === '' ||
        callDetails === '' ||
        purpose === ''
    ) {
        alert('Please fill in all the required fields.');
        return;
    }

    // Create the data object to send in the API request
    const data = {
        'Area': area,
        'Consumer_profile' : consumerProfile,
        'Product_category' : productCategory,
        'Product_type': productType,
        'AC_1001_Issue': AC_1001_Issue,
        'AC_1002_Issue': AC_1002_Issue,
        'AC_1003_Issue': AC_1003_Issue,
        'TV_2001_Issue': TV_2001_Issue,
        'TV_2002_Issue': TV_2002_Issue,
        'TV_2003_Issue': TV_2003_Issue,
        'Claim_Value': claimValue,
        'Service_Centre': serviceCentre,
        'Product_Age': productAge,
        'Purchased_from': purchasedFrom,
        'Call_details': callDetails,
        'Purpose': purpose,
    };

    // Convert the data object to JSON string
    const jsonData = JSON.stringify(data);

    // Make the API request
    fetch('http://localhost:1234/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData,
    })
    .then(response => response.json())
    .then(result => {
        console.log('Response from server:', result);
        const predictionvalue = result.predictionvalue;

        if(predictionvalue < 0,5){
            print(predictionvalue);
            alert('Sucessfull warranty claim submission!');
        }
        else{
            alert('Fraud detected!');
        }
    })
    .catch(error => console.error('Error:', error));
}

