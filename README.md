<!-- ABOUT THE PROJECT -->
## About The Project
This is the implementation for our article "A Risk Estimation Mechanism for Android Apps based on Hybrid Analysis". This article is the extend version of IEEE-SmartIoT paper (2021) -  https://ieeexplore.ieee.org/abstract/document/9556197/. This project is the proof-of-concept for the hybrid analysis, in which the static is re-used our IEEE-SmartIoT paper and the dynamic we consider the network traffic analysis to capture the type of data sharing.
<p align="right">(<a href="#top">back to top</a>)</p>

### Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:
* Node >= 10
* Redis
* Mongodb
### Installation

_If you wish to run the tutorial, you can use the following commands_

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Copy `.env-sample` to `.env` and Edit your variables by your setting
   ```js
   MONGODB_URL='ENTER MONGODB URL';
   REDIS_HOST='ENTER REDIS HOST';
   REDIS_PORT='ENTER REDIS PORT';
   ...
   ```
### Create collections for mongodb
Create `trees` and `categorydatasets` collection and use the files in <a href="https://github.com/SonHaXuan/Android-App-Risk-Estimation/tree/master/data" target="_blank">/data</a> folder corresponding to import data to MongoDB

<p align="right">(<a href="#top">back to top</a>)</p>


## Usage
Available methods:
- [Function and Constanst](#function-and-constanst): Retrieves the Function/Constanst of an application.
- [Calculate distance hybrid](#calculate-distance-hybrid): Calculate the distance of an application based on hybrid analysis.
- [Prediction](#prediction): Retrieves the prediction of an application by 4 approaches
### Function and Constanst

Retrieves the Function/Constanst of an application.

Command:

```sh
npm run getAppInfo
```
### Calculate distance hybrid

Calculate the distance between an application and its category.

Command:

```sh
npm run computingDistanceV2
```
## Citation
  If you find the dataset (i.e., app info (36k apps' name, StaticAnalysisParseTree (66 personal APIs))) or static analysis code useful to your research, please cite one of the following papers:
```
  @inproceedings{son2021risk,
  title={A Risk Assessment Mechanism for Android Apps},
  author={Son, Ha Xuan and Carminati, Barbara and Ferrari, Elena},
  booktitle={2021 IEEE International Conference on Smart Internet of Things (SmartIoT)},
  pages={237--244},
  year={2021},
  organization={IEEE}
  }

   @article{son2022risk,
  title={A risk estimation mechanism for android apps based on hybrid analysis},
  author={Son, Ha Xuan and Carminati, Barbara and Ferrari, Elena},
  journal={Data Science and Engineering},
  volume={7},
  number={3},
  pages={242--252},
  year={2022},
  publisher={Springer}
   }
```
<p align="right">(<a href="#top">back to top</a>)</p>
