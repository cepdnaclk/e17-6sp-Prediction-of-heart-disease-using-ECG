---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: e17-co328-Prediction-of-heart-disease-using-ECG
title: Prediction of Heart Disease using ECG
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# Prediction of Heart Disease using ECG

---

## Team
-  E/17/044, Deanna Coralage, [email](mailto:e17044@eng.pdn.ac.lk)
-  E/17/252, Kenath Perera, [email](mailto:e17252@eng.pdn.ac.lk)
-  E/17/242, Ruchika Perera, [email](mailto:e17242@eng.pdn.ac.lk)

## Table of Contents
1. [Introduction](#introduction)
2. [Our Project](#our-project)
3. [Requirement Analysis](#requirement-analysis)
4. [Software Models](#software-models)
5. [System Overview](#system-overview)
6. [Machine Learning Aspects](#machine-learning-aspects)
7. [Links](#links)

---

## Introduction
A Myocardial Infarction or a Heart Attack occurs due to the lack of blood floor to heart muscles. This is an emergency medical condition where your heart muscles begin to die which could lead to permanent heart damage and even death. The main cause of a heart attack has been identified as Coronery Artery Disease i.e. blockages in the tubes of the circulation system.
![Coronery Artery Disease](images/cad.jpg)
The sure and the well-known way of knowing the risk of a MI is by performing an invasive angiogram. This method detects blokages using x-rays that are taken during injection of a contrast iodine dye. 
#### What are the issues associated with this procedure?
- It's an invasive procedure done under sedation with local anesthisia therefore has certain complications and side effects in the precedure although the high complications are very rare in most of the cases
[Read more about Angiograms](https://vascular.org/patient-resources/vascular-tests/angiogram)
- Not accessible everywhere at any time for just anybody
- Has to wait in waiting list
- Comparatively expenive
- There can be other causes of a heart attack which are not identified through angiograms

![What is Angiogram?](images/angiogram.jpg)

## Our Project
Our focus is to develop a solution to predict a potential myocardial infarction using a more accessible, less complicated and a more affordable method. Our approach is to develop an ECG based method to address this.
#### What is ECG?
An ECG (ElctroCardioGram) is used to analyze arrythmias i.e.irregularities in heart rhythms. There's an electrical system in the heart that conducts electric signal impulses that produces the pqrs waves on the ECG strip. These arrythmias occur when the electrical signals aren't working properly. Because injured heart muscles aren't able t0 conduct electrical impulses normally, ECGs usually identify a heart attack has occured or is in progress.
#### How can we incoporate ECG data in our solution?
A point to note in this particular domain is that there is no straight-forward way of detecting potential MIs directly from an ECG. Usually it is used to identify whether a heart attack has occured which produces abnormal heart rhythms on the ECG. We are developing an approach to identify potential MIs through minor arrythmias that are not very visible at early stages to the naked eye, through an automated computerized system.
#### What is the benefit of our solution?
Since ECGs are more accessible, affordable and less-complicated, people can get predictions on potential MIs through our system which helps them to take actions beforehand without having to wait for much more advanced tests. Then they can proceed with further actions and tests.
#### Existing solutions
Various reaseaches have been done on this area. These projects have focused on automatic extraction of relavant and reliable information from ECG signals that has not been as easy task for a computerized system and classifying into heart disease classes.
[Read more about this research](https://www.researchgate.net/publication329318348_ECG_Signal_Classification_with_Deep_Learning_for_Heart_Disease_Identification)
Our approach is extending these reasearches to predict a risk of a MI.

## Requirement Analysis

#### Functional Requirements

- System should be able to predict potential heart diseases when an ECG is uploaded. As the initial stage predict potential Myocardial Infarctions
- Format of the ECG input to the system should be xx. The ECG header includes patient NIC, name, date of birth and gender
- Any person(_user_) should be able to visit the web-page and upload up to a maximum of 1 ECG per day which should be handled by a throttling process.  This doesn't require any auth process. The homepage of the app should provide this functionality. This feature will be developed in latter parts after evaluating the model success rate and has a higher accuracy
- When displaying ECGs and results, the option of visualizing the waveform with play, pause buttons should be given, along with the prediction result and a button to re-predict
- Verified MBBS doctors should be able to create an account and login to the system and are known as _verified members_, this requires the MBBS identification number, name, username, email an password
- A verified member is required to make a monthly payment 
- Verified members should be provided with a dashboard to view profile and change password
- Verified members should be given the facility to get predictions on un-limiter number of ECGs
- When uploading an ECG of a new patient who's details are not currently in the database will be added using the header data of the ECG which includes NIC, name, date of birth and gender
- ECGs uploaded for predictions by verified members should be stored in the database with a unique number along with patient details and system's predictions, and the uploaded date will be automatically saved
- A verified member can view details of any patient using NIC and should be able to see all his previous ECGs. (_Displaying format is the same -> point 4_)
- A verified member can insert any identified diseases of a patient including the type of disease, affected date and the affected number known as _diagnosis._ If the diagnosis is valid(valid auth, no previous inserts on the same diagnosis) the verified member will be awarded _helper points_ that are stored along with a verified member's other details which can be deducted from the total at the payment

#### Non-functional Requirements

- Initial project is required to be delivered with 10 weeks of time from 14/02/2022 - 22/04/2022
- Since this system handles health details about people, considering security aspects of the system is crucial
- Reliability of predictions, patient details and history is important
- Evaluating speed should be kept as quick as possible to reduce the time to wait for predictions
- Interfaces should be user-friendly
- Access controlling to various features of the system is important


## Software Models

#### Main epics of the system
- High-level software system
- Auth system
- Heart Disease Predictor system
- Patient History Tracking system

#### Use Case Diagrams

![High level software system](images/Use%20Case%20Diagram_Software%20System.png)
![Auth System](images/Use%20Case%20Diagram_Auth.png)
![Predictor system](images/Use%20Case%20Diagram_Predictor.png)
![Tracker](images/Use%20Case%20Diagram_Tracker.png)

#### UML Class Diagram
![UML Class Diagram](images/UML%20Class%20Diagram.png)

## System Overview

## Machine Learning Aspects
We are developing a machine learning based approach to predict potential heart diseases. The dataset we have used for this is **ECG Heartbeat Categorization Dataset** which has been derived from the **PTB Diagnostic ECG Database**

#### High-level implementation process
1. Develop various models to predict heart diseases and compare accuracies. 
2. ECG pre-processing
- Analyze the ECG under 16 channels and extract features at a frequency. A signal processor has to be developed for this
- Pad for missing values
![ML workflow](images/mlInput)
3. Predict heart diseases using the developed ML algorithm

Currently binary classifier models have been developed as the initial step using the following machine learning algorithms.
- Support Vector Machines (SVM)
- Nearest Neighbor 
- Naive Bayes


.....

## Links

- [Project Repository](https://github.com/cepdnaclk/{{e17-co328-Prediction-of-heart-disease-using-ECG}})
- [Project Page](https://cepdnaclk.github.io/{{e17-co328-Prediction-of-heart-disease-using-ECG}})
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
