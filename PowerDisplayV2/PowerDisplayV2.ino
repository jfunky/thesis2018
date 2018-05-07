/*
  LiquidCrystal Library - display() and noDisplay()

 Demonstrates the use a 16x2 LCD display.  The LiquidCrystal
 library works with all LCD displays that are compatible with the
 Hitachi HD44780 driver. There are many of them out there, and you
 can usually tell them by the 16-pin interface.

 This sketch prints "Hello World!" to the LCD and uses the
 display() and noDisplay() functions to turn on and off
 the display.

 The circuit:
 * LCD RS pin to digital pin 12
 * LCD Enable pin to digital pin 11
 * LCD D4 pin to digital pin 5
 * LCD D5 pin to digital pin 4
 * LCD D6 pin to digital pin 3
 * LCD D7 pin to digital pin 2
 * LCD R/W pin to ground
 * 10K resistor:
 * ends to +5V and ground
 * wiper to LCD VO pin (pin 3)

 Library originally added 18 Apr 2008
 by David A. Mellis
 library modified 5 Jul 2009
 by Limor Fried (http://www.ladyada.net)
 example added 9 Jul 2009
 by Tom Igoe
 modified 22 Nov 2010
 by Tom Igoe
 modified 7 Nov 2016
 by Arturo Guadalupi
 Modified by Jasmine Soltani April 2018
 
 Program function:
 Displays energy generated in comparison
 to the energy needed to produce a smartphone.
 Calculations based on LCDTest2 code which shows
 we are generating 0.36 Watts with a handcrank.

 This example code is in the public domain.
 http://www.arduino.cc/en/Tutorial/LiquidCrystalDisplay


*/

// include the library code:
#include <LiquidCrystal.h>

// initialize the library by associating any needed LCD interface pin
// with the arduino pin number it is connected to
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

int currentPin = A0;    // input pin for the current sensor
int voltagePin = A1;    // input pin for voltage

int currentValue = 0;   // variable to store the value coming from the current sensor
int voltageValue = 0;

//to calculate true values
float voltageX4 ;
float voltage ;
float current ; 

unsigned long StartTime ;
unsigned long CurrentTime ;
unsigned long ElapsedTime ;
 
float Total = 0 ;
float Energy = 0 ;
float totalEnergy = 0 ;

bool cranking = false ;

void setup() {
  // no Display on set up
  lcd.noDisplay();

  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  // current Value
  currentValue = analogRead(currentPin);
  current = currentValue * (1/1.80);

  // voltage value
  voltageValue = analogRead(voltagePin);
  voltageX4 = map(voltageValue, 0, 1023, 0, 1000);
  voltage = voltageX4/200.00 ; 

  // calcalate time
  if (currentValue > 10 and voltageValue > 10 and cranking == false) {
    StartTime = millis();
    cranking = true ;  
    Total = ++ ElapsedTime ;
  }
  else if (currentValue < 10 and voltageValue < 10) {
    cranking = false ;
    Total = Total + ElapsedTime ;
  }
  
  CurrentTime = millis();
  ElapsedTime = CurrentTime - StartTime;

  //0.0001 Watt-seconds
  Energy = ElapsedTime * .0000001 ;
  totalEnergy = Total * .0000001 ;

  // Print a message to the LCD's first row:
  lcd.begin(16, 2);
  lcd.print("You: ");
  lcd.print(Energy);
  lcd.print(ElapsedTime);

  // set 2nd row:
  lcd.setCursor(0, 1);
  lcd.print("Total: ");
  //lcd.print(totalEnergy);
  lcd.print(Total);
  //lcd.print(ElapsedTime);
  
  // Turn on the display:
  lcd.display();
  delay(250);
}
