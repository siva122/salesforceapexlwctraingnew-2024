Double myDouble = 1261992;
System.debug('myDouble'+myDouble.format());
Double DD1 = double.valueOf('3.14159');
Integer value = DD1.intValue();
System.debug('value'+value);

account a = new account(name = 'account1213132322',SampleText__c='sampledescasdasd');
insert a;
Id myId = a.id;
System.debug(' myId.getSobjectType()'+ myId.getSobjectType());
System.debug(' Schema.Account.SObjectType'+ Schema.Account.SObjectType);
System.debug(myId);
System.debug(myId.to15());


Datetime dt = Datetime.newInstance(
               Date.newInstance(
                  2011, 3, 22),
               Time.newInstance(
                  1, 15, 18, 0)); 
    String str = JSON.serialize(dt); 
System.debug(str);
   