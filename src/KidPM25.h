#ifndef __KIDPM25_H__
#define __KIDPM25_H__

#include<Arduino.h>
#include<Wire.h>

class KidPM25 {
	private:
		TwoWire* wire;
		
	public:
		KidPM25(TwoWire* bus=&Wire) ;
		
		void begin() ;
		int read(int n) ;
		
}
;

#endif
