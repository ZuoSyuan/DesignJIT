<script src="https://sdk.amazonaws.com/js/aws-sdk-2.1.24.min.js"></script>
<script type="text/javascript">
  // See the Configuring section to configure credentials in the SDK
  AWS.config.credentials = ...;

  // Configure your region
  AWS.config.region = 'us-west-2';
</script>

var db = new AWS.DynamoDB();
db.listTables(function(err, data) {
  console.log(data.TableNames);
});

var table = new AWS.DynamoDB({params: {TableName: 'MY_TABLE'}});
var key = 'UNIQUE_KEY_ID';

// Write the item to the table
var itemParams = {Item: {id: {S: key}, data: {S: 'data'}}};
table.putItem(itemParams, function() {
  // Read the item from the table
  table.getItem({Key: {id: {S: key}}}, function(err, data) {
    console.log(data.Item); // print the item data
  });
});