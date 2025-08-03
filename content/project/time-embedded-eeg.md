---
title: Time-Embedded EEG Sequence Learning for Comatose Patients' Prognosis
lang: en-US
tags: ['Machine Learning']
thumbnail: ./time-embedded-eeg-thumb.png
description: Publication on time-embedded EEG sequence learning for predicting comatose patients' prognosis.
links: [{url: 'https://doi.org/10.22489/CinC.2023.311', text: 'View in IEEE', icon: 'carbon:book'}]
info: [{key: "DOI", value: "10.22489/CinC.2023.311"}, {key: 'Role', value: 'Researcher'}, {key: 'Affiliation', value: 'University of Sydney'}, {key: 'Skills involved', value: ['Machine learning', 'Signal Processing']}, {key: 'Tech used', value: ['Python', 'NumPy', 'MATLAB', 'RNN', 'CNN']}]
date: 2023-10-04
---
![Time Embedded EEG Paper](/time-embedded-eeg.png)

## Abstract
In an intensive care unit (ICU), an accurate prognosis of comatose patients' recovery is critical for ongoing medical interventions. Patient prognosis guides decisions around continuation of care. Patients may recover from a coma despite poor initial prognosis; thus, more reliable predictors for recovery are needed. Electroencephalography (EEG)-based neurological markers may complement the current prognosis. The PhysioNet Challenge 2023 includes a dataset of EEG signals and clinical attributes from a total of 1020 adult patients in ICUs that remained in a coma after cardiac arrest, 607 of whom were dedicated to algorithmic training. We conceptualized a novel time-embedded feature space for continuous EEG followed by a bidirectional long short-term memory for learning any temporal patterns associated with comatose patients' recovery. We extracted EEG-related attributes: dynamic range, skewness, kurtosis, and subband (δ, θ, α and β) power after selecting 1 minute/hour EEG using a preprocessing algorithm. With a false positive rate < 0.05, the true positive rate (TPR) was the scoring metric at the 72nd hour post cardiac arrest. Our team, USYD BrainBuzz ranked 27th and achieved scores of 0.26, 0.51 and 0.40 on the training, validation and testing sets, respectively. Results implicated that our approach has shown promise for continuous monitoring of comatose patients.