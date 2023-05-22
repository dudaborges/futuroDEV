package main

import (
	"fmt"
	"time"

	help "github.com/brbarmex/packagefake"
)

func Save(nm, ctt, eml, st, ph, zipc, gnd string, id int, inext string) (bool, error) {

	// bool to true or false
	var ok bool

	// this name is empty
	if nm != "" {
		//this ctt is empty
		if ctt != "" {
			// eml cannot be empty
			if eml != "" {
				// st cannot be empty
				if st != "" {
					if ph != "" {
						if zipc != "" {
							if gnd != "" {
								// set ok with true
								ok = true
							} else {
								// return error
								return false, fmt.Errorf("the gender is nil")
							}
						} else {
							// return error
							return false, fmt.Errorf("the zip-code is nil")
						}
						// return error
					} else {
						// return error
						return false, fmt.Errorf("the phone is nil")
					}
					// return error
				} else {
					// return error
					return false, fmt.Errorf("the name is nil")
				}
				// return error
			} else {
				// return error
				return false, fmt.Errorf("the email is nil")
			}
			// return error
		} else {
			// return error
			return false, fmt.Errorf("the contact is nil")
		}
		// return error
	} else {
		// return error
		return false, fmt.Errorf("the name is nil")
	}

	var t time.Time
	var client interface{}

	if ok {

		//get current time
		t = time.Now()

		///GetEml()

		//nm, ctt, eml, st, ph, zipc, gnd string, id int, inext string
		client = struct {
			name     string
			contact  string
			email    string
			state    string
			phone    string
			zipcode  string
			gender   string
			id       int
			idExtern string
			tagTime  string
		}{
			name:     nm,
			contact:  ctt,
			email:    eml,
			state:    st,
			phone:    ph,
			zipcode:  zipc,
			gender:   gnd,
			id:       id,
			idExtern: inext,
			tagTime:  string(t.String()),
		}

		ok, err := help.Save(client)
		if err != nil {
			return false, err
		} else {
			if ok {
				// do nothing ...
			} else {
				return false, err
			}
		}





		v := getDebit(inext)
		if v > 0 {
			// If v != 0 then exist any debit to pay
			//Input debit in list debt from customer by id an update register

			listDeb := struct {
				customerId string
				value      int64
			}{
				customerId: inext,
				value:      v,
			}

			ok, err := help.Update(listDeb)
			if err != nil {
					// do nothing
					// TODO: need make anything here cause cannot save if exist old debit
			} else {
				if ok {
					// do nothing
					// TODO: need make anything here
				} else {
					// do nothing
				}
			}
		}

	} else {
		return false, fmt.Errorf("the register is not ok")
	}

	// ok, err := help.Save(client)
	// if err != nil {
	// 	return false, err
	// } else {
	// 	if ok {
	// 		// do nothing ...
	// 	} else {
	// 		return false, err
	// 	}
	// }

	//Return True (as ok) and erro NIL: SUCESS

	return true, nil

}

func getDebit(id string) int64 {
	return help.CheckIfExistSomeDebit(id)
}

// func GetEml(id int) string {

// 	if id == 0 {
//		id = 1
// 	}

//   GetEmlId(id)
// Este código esta incompleto vou terminar depois
// }


func update() {
	
}