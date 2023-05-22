package main

import (
	"fmt"
	"time"

	help "github.com/brbarmex/packagefake"
)

func Save(name, contact, email, state, phone, zipcode, gender, id, idExtern) (bool, error) {

	var ok bool

	if name == "" {
		return false, fmt.Errorf("the name is nil")
	}

	if contact == "" {
		return false, fmt.Errorf("the contact is nil")
	}

	if email == "" {
		return false, fmt.Errorf("the email is nil")
	}
	
	if state == "" {
		return false, fmt.Errorf("the state is nil")
	}

	if phone == "" {
		return false, fmt.Errorf("the phone is nil")
	}

	if zipcode == "" {
		return false, fmt.Errorf("the zipcode is nil")
	}

	if gender == "" {
		return false, fmt.Errorf("the gender is nil")
	}

	if id == "" {
		return false, fmt.Errorf("the id is nil")
	}

	if idExtern == "" {
		return false, fmt.Errorf("the id extern is nil")
	}

	var t time.Time
	var client interface{}

	if ok {

		t = time.Now()

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
			listDeb := struct {
				customerId string
				value      int64
			}{
				customerId: inext,
				value:      v,
			}

			ok, err := help.Update(listDeb)
			if err != nil {
					// TODO: need make anything here cause cannot save if exist old debit
			} else {
				if ok {
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