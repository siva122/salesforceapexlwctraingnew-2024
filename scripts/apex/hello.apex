// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

String str='welcome';
String str2='xyzwelcome welcome';

String str1='Welcome';
System.debug(str.equals(str1));
System.debug(str.equalsIgnoreCase(str1));
System.debug(str.indexOf('wel'));
System.debug(str2.indexOf('wel'));
System.debug(str2.indexOf('abc'));
System.debug(str2.indexOf('wel',9));
String str3=' ';
String str4;
System.debug(String.isBlank(str3));
System.debug(String.isBlank(str4));
System.debug(str3.length());
System.debug(String.isEmpty(str3));
String numeric = 'r1234567890';
System.debug(numeric.isNumeric());
String s1 = 'abc';
String s2 = 'xy';
String s3 = s1.leftPad(8,s2);
System.debug(s3);








