Date myDate = Date.newInstance(1960, 2, 17);
Date newDate = mydate.addDays(2);
Date newDate1=myDate.addMonths(3);
System.debug('bewdate:'+newDate);
System.debug('bewdate1:'+newDate1);
System.debug('day:'+newDate1.day());
System.debug('dayofyear:'+newDate1.dayOfYear());

Date startDate = Date.newInstance(2008, 1, 1);
Date dueDate = Date.newInstance(2008, 1, 30);
Integer numberDaysDue = startDate.daysBetween(dueDate);
System.debug('numberDaysDue:'+Math.abs(numberDaysDue));
System.debug('format:'+newDate.format().replace('/','-'));
String dateStr=newDate.format();
date mydate34 = date.parse(dateStr);
System.debug('mydate34'+mydate34);