import csv
from datetime import datetime, timedelta
import array as arr

#get start date from user
year = int(input())
month = int(input())
day = int(input())
food = input()
start_date = datetime(year, month, day)
#show user the current date
print("you bought",food, "on", "{0.day} {0:%B %Y}".format(start_date))

#try to find in database
with open('food.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if food.lower() in row[0].lower():
          print("success match, found ",food," in database")
          print("will expire in ", row[4]," days if refrigerated")
          print("will expire in ", row[5]," days if frozen")
          #if they have a choice between the two options
          if row[4].isnumeric() and row[5].isnumeric():
            print("how would you like to store [", row[0],"] ?")
            print("choose 1 for refrig, 2 for frozen")
            choice = int(input())
            if choice == 1:
              duration = int(row[4])
            if choice == 2:
              duration = int(row[5])

          if not row[4].isnumeric():
            print("we suggest you to consume [",row[0],"] asap")
            duration = int(row[5])

          if not row[5].isnumeric():
            print("we suggest you to consume [",row[0],"] asap")
            duration = int(row[4])

          line_count += 1
          break

#I did not handel the case if not found in database

end_date = start_date + timedelta(duration)
print ("the expected expiration date is","{0.day} {0:%B %Y}".format(end_date))
