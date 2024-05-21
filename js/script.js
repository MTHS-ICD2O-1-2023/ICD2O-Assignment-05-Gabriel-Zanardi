// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {

  //input

  let numberRepeat = parseInt(document.getElementById("first-number").value)


  //process
  const numerator = 4
  let denominator = 1
  let counter = 0
  let result = 0


  while (counter < numberRepeat) {
    denominator += 2
    numerator *= -1
    result = numerator / denominator
    counter += 1
  }

  // output
  document.getElementById("final-answer").innerHTML =
    "Your result is " + finalResult

}

