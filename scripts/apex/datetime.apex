// Datetime myDateTime = Datetime.newInstance(1960, 2, 17);
// Datetime newDateTime = myDateTime.addDays(2);
// Datetime expected = Datetime.newInstance(1960, 2, 19);
// System.debug('newDateTime'+newDateTime);

DateTime myDateTime = DateTime.newInstance(1997, 1, 31, 7, 8, 16);
DateTime newDateTime = myDateTime.addHours(3);
DateTime expected = DateTime.newInstance(1997, 1, 31, 10, 8, 16);
System.debug('newDateTime'+newDateTime);