#ifndef __KIDPM25_CPP__
#define __KIDPM25_CPP__

#include <KidPM25.h>

KidPM25::KidPM25(TwoWire* bus) {
	this->wire = bus;
}

int KidPM25::read(int n) {
	wire->requestFrom(0x25, 13);
	if (wire->available() <= 0) {
		return -1;
	}

	bool err = wire->read();
	if (err) {
		return -2;
	}

	uint8_t payload[12];
	for (int i=0;i<12;i++) {
		payload[i] = wire->read();
	}
	uint16_t PM_AE_UG_1_0 = (((uint16_t)payload[6]) << 8) | payload[7];
	uint16_t PM_AE_UG_2_5 = (((uint16_t)payload[8]) << 8) | payload[9];
	uint16_t PM_AE_UG_10_0 = (((uint16_t)payload[10]) << 8) | payload[11];

	if (n == 10) {
		return PM_AE_UG_1_0;
	} else if (n == 25) {
		return PM_AE_UG_2_5;
	} else if (n == 100) {
		return PM_AE_UG_10_0;
	}

	return -3;
}

#endif
