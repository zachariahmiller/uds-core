# Changelog

All notable changes to this project will be documented in this file.

## [0.10.0](https://github.com/zachariahmiller/uds-core/compare/v0.9.1...v0.10.0) (2024-01-23)


### Features

* Add istio and preliminary ci ([#3](https://github.com/zachariahmiller/uds-core/issues/3)) ([fbd7453](https://github.com/zachariahmiller/uds-core/commit/fbd745392340dbc978b27f0d321f3375882c1c40))
* add metrics-server ([#35](https://github.com/zachariahmiller/uds-core/issues/35)) ([8216ab9](https://github.com/zachariahmiller/uds-core/commit/8216ab982be79dc393a2e0db359370b32e660150))
* add monitoring and logging ([#33](https://github.com/zachariahmiller/uds-core/issues/33)) ([c6d9aec](https://github.com/zachariahmiller/uds-core/commit/c6d9aece4984421e1ccbf476cd0d40fb701e4e50))
* add pepr capability for istio + jobs ([#12](https://github.com/zachariahmiller/uds-core/issues/12)) ([c32a703](https://github.com/zachariahmiller/uds-core/commit/c32a70390f443c90796978ad4c42bbb4b17eb226))
* add prometheus-stack (monitoring) capability ([#2](https://github.com/zachariahmiller/uds-core/issues/2)) ([e438ab6](https://github.com/zachariahmiller/uds-core/commit/e438ab6089bc9d8c6640fa002285d38ddc3022df))
* add UDS Operator and consolidate UDS Policies ([#66](https://github.com/zachariahmiller/uds-core/issues/66)) ([395c1c4](https://github.com/zachariahmiller/uds-core/commit/395c1c4aec324d0d939cc410a6bb92129b26653b))
* add Zarf Flavors to support Iron Bank & upstream images ([#63](https://github.com/zachariahmiller/uds-core/issues/63)) ([232c256](https://github.com/zachariahmiller/uds-core/commit/232c2566b96be0285c24b8b5787350897e72332f))
* embed tls certs in istio package ([#32](https://github.com/zachariahmiller/uds-core/issues/32)) ([fb04fee](https://github.com/zachariahmiller/uds-core/commit/fb04feec9657f449366389a0e0a474a8cdeecb2c))
* expose tls certs as UDS bundle variables ([#48](https://github.com/zachariahmiller/uds-core/issues/48)) ([c1f8286](https://github.com/zachariahmiller/uds-core/commit/c1f828650ef2c53a3fd9ed477950046020c5d375))
* introduce Pepr common policies ([#50](https://github.com/zachariahmiller/uds-core/issues/50)) ([54182b4](https://github.com/zachariahmiller/uds-core/commit/54182b4db691d86ce80379be272d924d105b0d07))
* release-please integration ([#25](https://github.com/zachariahmiller/uds-core/issues/25)) ([bf3c53b](https://github.com/zachariahmiller/uds-core/commit/bf3c53b2ddac4e02e31aa3429029dd9f1c9595e3))
* update security policy to use provided user, group, and fsgroup ([#82](https://github.com/zachariahmiller/uds-core/issues/82)) ([6d641ce](https://github.com/zachariahmiller/uds-core/commit/6d641ce67210999bacda0e855269dca61e7c6a7b))


### Bug Fixes

* add test for disallow selinux options and handle checking for us… ([#96](https://github.com/zachariahmiller/uds-core/issues/96)) ([88b969e](https://github.com/zachariahmiller/uds-core/commit/88b969e2aa4dea8b76dbe397d77c53941f7cfbc8))
* change pepr error policy to reject ([#99](https://github.com/zachariahmiller/uds-core/issues/99)) ([10772e2](https://github.com/zachariahmiller/uds-core/commit/10772e2c64f1e4b965b6b644b0008c81025029e9))
* complete incomplete deploy task ([#21](https://github.com/zachariahmiller/uds-core/issues/21)) ([45ff5e5](https://github.com/zachariahmiller/uds-core/commit/45ff5e5d7b6a50cdfcfabb174349ab539a8accd9))
* loki local storage ([#84](https://github.com/zachariahmiller/uds-core/issues/84)) ([b9505bb](https://github.com/zachariahmiller/uds-core/commit/b9505bbb42b5369c62d7cbfb05e1efb8b8a6200f))
* metrics-server mTLS fix ([#44](https://github.com/zachariahmiller/uds-core/issues/44)) ([4853522](https://github.com/zachariahmiller/uds-core/commit/4853522c9504c87dcbd8319d689ecb0a1cb42c0b))
* remove loki gateway anti-affinity ([#111](https://github.com/zachariahmiller/uds-core/issues/111)) ([2cba42e](https://github.com/zachariahmiller/uds-core/commit/2cba42e3a83a25ae7a45f3c3d6a35bdc7bba0b58))
* resolve istio job termination container status logic issue ([#55](https://github.com/zachariahmiller/uds-core/issues/55)) ([c0142c2](https://github.com/zachariahmiller/uds-core/commit/c0142c213446a37185cdf9dec5ae60aaae8ba194))
* update missing flavor create inputs in publish step ([#118](https://github.com/zachariahmiller/uds-core/issues/118)) ([a0233eb](https://github.com/zachariahmiller/uds-core/commit/a0233eb45e2d39035f483f3ed8fb3f396e5030d8))
* wait on istio proxies ([#87](https://github.com/zachariahmiller/uds-core/issues/87)) ([51cd5a0](https://github.com/zachariahmiller/uds-core/commit/51cd5a012cc1d095a89b30a22910d3d7ad49885d))


### Miscellaneous

* add commit lint workflow ([#19](https://github.com/zachariahmiller/uds-core/issues/19)) ([776a632](https://github.com/zachariahmiller/uds-core/commit/776a6325821329b2cbd97da2f40a30447cd48efc))
* add minio deploy time bundle variable override definitions ([#58](https://github.com/zachariahmiller/uds-core/issues/58)) ([ca28e7b](https://github.com/zachariahmiller/uds-core/commit/ca28e7b4c4a42769934cc8ad69361ff29a348cc5))
* adding unit test for registerExemptions() ([#105](https://github.com/zachariahmiller/uds-core/issues/105)) ([5e71fcf](https://github.com/zachariahmiller/uds-core/commit/5e71fcf4751d2e3f6a1e55583ccf76c0fdc76856))
* bump zarf & uds-k3d deps ([#30](https://github.com/zachariahmiller/uds-core/issues/30)) ([dd28ab3](https://github.com/zachariahmiller/uds-core/commit/dd28ab3acd163aaccdfb76fbf9726c02a2ff0050))
* conform to latest uds bundle schema ([#52](https://github.com/zachariahmiller/uds-core/issues/52)) ([14dad38](https://github.com/zachariahmiller/uds-core/commit/14dad3819187d4f8e13f7bbc191dca74a29b9c98))
* dep updates for UDS CLI & Pepr ([#46](https://github.com/zachariahmiller/uds-core/issues/46)) ([1037634](https://github.com/zachariahmiller/uds-core/commit/10376349e350bd32f3bf32577d8f8089c09ac6cc))
* **deps:** update pepr ([#76](https://github.com/zachariahmiller/uds-core/issues/76)) ([50de920](https://github.com/zachariahmiller/uds-core/commit/50de920bcf03092d16a11ebf77ede70987a7cdcf))
* **deps:** update pepr to v0.22.0 ([#102](https://github.com/zachariahmiller/uds-core/issues/102)) ([941902d](https://github.com/zachariahmiller/uds-core/commit/941902dcfc2ec1d5340d658f75811b3369489c56))
* **deps:** update pepr to v0.22.2 ([#104](https://github.com/zachariahmiller/uds-core/issues/104)) ([0555353](https://github.com/zachariahmiller/uds-core/commit/0555353e5a5dec2aa8685a3987852d1c3788f28c))
* **deps:** update uds to v0.5.3, zarf to v0.32.1, and uds-k3d to 0.3.0 ([#77](https://github.com/zachariahmiller/uds-core/issues/77)) ([596f9d8](https://github.com/zachariahmiller/uds-core/commit/596f9d8df51c3df1aa87fd0e09d9e69c87473bf0))
* **deps:** update uds-k3d to v0.3.1 ([#89](https://github.com/zachariahmiller/uds-core/issues/89)) ([5d54cd1](https://github.com/zachariahmiller/uds-core/commit/5d54cd1efe5eee4c19caf347882725e0aa20e50a))
* fix missing deps in tag and release workflow ([#28](https://github.com/zachariahmiller/uds-core/issues/28)) ([1e1af76](https://github.com/zachariahmiller/uds-core/commit/1e1af762e8eb1dd331cbd681e48ecc95ec3184d2))
* initial renovate config ([#67](https://github.com/zachariahmiller/uds-core/issues/67)) ([2cd19d8](https://github.com/zachariahmiller/uds-core/commit/2cd19d871a95491950d43fea8e8fd2e8c290cd55))
* kick off ci ([1afc3a4](https://github.com/zachariahmiller/uds-core/commit/1afc3a4203cce1a1c81b15e7ba6caad1a9c63131))
* **main:** release 0.1.1 ([#27](https://github.com/zachariahmiller/uds-core/issues/27)) ([3776e91](https://github.com/zachariahmiller/uds-core/commit/3776e91670aa73907cb9c48a05419d106ecedd67))
* **main:** release 0.1.2 ([#29](https://github.com/zachariahmiller/uds-core/issues/29)) ([af7b0be](https://github.com/zachariahmiller/uds-core/commit/af7b0beaf409627c87b47e4d908b0a8a0d8cff63))
* **main:** release 0.1.3 ([#31](https://github.com/zachariahmiller/uds-core/issues/31)) ([28ad8a7](https://github.com/zachariahmiller/uds-core/commit/28ad8a78b023f160714ecb90d748ee65403cf500))
* **main:** release 0.2.0 ([#34](https://github.com/zachariahmiller/uds-core/issues/34)) ([5185a8f](https://github.com/zachariahmiller/uds-core/commit/5185a8f98c90578eabd9f1494f55e43922bb7a92))
* **main:** release 0.3.0 ([#39](https://github.com/zachariahmiller/uds-core/issues/39)) ([4d2b05d](https://github.com/zachariahmiller/uds-core/commit/4d2b05de9d155dc91b799bde5156c5980bc348cb))
* **main:** release 0.4.0 ([#43](https://github.com/zachariahmiller/uds-core/issues/43)) ([d2b61c3](https://github.com/zachariahmiller/uds-core/commit/d2b61c373b91d4f405e27ce930e4f8bec52ddd21))
* **main:** release 0.4.1 ([#45](https://github.com/zachariahmiller/uds-core/issues/45)) ([d66eafe](https://github.com/zachariahmiller/uds-core/commit/d66eafea0ec9ccd412f5af3ed5ab12f3f8275a33))
* **main:** release 0.5.0 ([#49](https://github.com/zachariahmiller/uds-core/issues/49)) ([f9c4269](https://github.com/zachariahmiller/uds-core/commit/f9c426998f2bc4fc21c32b3492f25b8608f50282))
* **main:** release 0.6.0 ([#53](https://github.com/zachariahmiller/uds-core/issues/53)) ([9b3ad64](https://github.com/zachariahmiller/uds-core/commit/9b3ad64a6e3870ce364cad77abd367cc8d493042))
* **main:** release 0.6.1 ([#56](https://github.com/zachariahmiller/uds-core/issues/56)) ([4a5a42c](https://github.com/zachariahmiller/uds-core/commit/4a5a42c8fa9ee17656e462cb9df08562d9c85b96))
* **main:** release 0.6.2 ([#59](https://github.com/zachariahmiller/uds-core/issues/59)) ([b1c49ac](https://github.com/zachariahmiller/uds-core/commit/b1c49ac70e8a293936dea8a516c32b7bb7e6fc4c))
* **main:** release 0.7.0 ([#71](https://github.com/zachariahmiller/uds-core/issues/71)) ([51dcb54](https://github.com/zachariahmiller/uds-core/commit/51dcb54d239cb5636b0c4f55fde9fc2b2c3bf076))
* **main:** release 0.7.1 ([#85](https://github.com/zachariahmiller/uds-core/issues/85)) ([da4040a](https://github.com/zachariahmiller/uds-core/commit/da4040aff739746dc2355ec0449ee762c05c56c1))
* **main:** release 0.7.2 ([#88](https://github.com/zachariahmiller/uds-core/issues/88)) ([5e421ce](https://github.com/zachariahmiller/uds-core/commit/5e421ce011e42692c3cb6f1353cfb8a5edb846fb))
* **main:** release 0.7.3 ([#93](https://github.com/zachariahmiller/uds-core/issues/93)) ([ddf8fa6](https://github.com/zachariahmiller/uds-core/commit/ddf8fa617853686b8c043d236c159bcd59c47ac0))
* **main:** release 0.7.4 ([#100](https://github.com/zachariahmiller/uds-core/issues/100)) ([9abd78b](https://github.com/zachariahmiller/uds-core/commit/9abd78b11a90a67344fa93e8dba7fd53d6b58ea2))
* **main:** release 0.8.0 ([#106](https://github.com/zachariahmiller/uds-core/issues/106)) ([3ab93c3](https://github.com/zachariahmiller/uds-core/commit/3ab93c30b132ff9c35c1f238008b15cd265abe92))
* **main:** release 0.8.1 ([#112](https://github.com/zachariahmiller/uds-core/issues/112)) ([942ad54](https://github.com/zachariahmiller/uds-core/commit/942ad549b53e8ce87a33fae985bbe2f82c6fa75c))
* **main:** release 0.9.0 ([#117](https://github.com/zachariahmiller/uds-core/issues/117)) ([6b0c56b](https://github.com/zachariahmiller/uds-core/commit/6b0c56b8a6d60091e532ac36cd69ea6cd5ac1124))
* **main:** release 0.9.1 ([#119](https://github.com/zachariahmiller/uds-core/issues/119)) ([984f916](https://github.com/zachariahmiller/uds-core/commit/984f91602c3b2873110d62a49c5df4ecfaa19f8a))
* open the aperture for pr workflow triggering ([#90](https://github.com/zachariahmiller/uds-core/issues/90)) ([d8a72f2](https://github.com/zachariahmiller/uds-core/commit/d8a72f2f2f3e507a4be7f217e23b737e3d4c35ce))
* refactor validate.yaml file name and task name ([#62](https://github.com/zachariahmiller/uds-core/issues/62)) ([92a04ea](https://github.com/zachariahmiller/uds-core/commit/92a04ea1096448995ccc0dd9d77a32a5061e06f0))
* remove version from neuvector zarf.yaml ([#11](https://github.com/zachariahmiller/uds-core/issues/11)) ([fbc8d51](https://github.com/zachariahmiller/uds-core/commit/fbc8d51e2b4146d394184d7596cd9a54219dc001))
* simplify promtail values for scrape configs ([#94](https://github.com/zachariahmiller/uds-core/issues/94)) ([6c2513b](https://github.com/zachariahmiller/uds-core/commit/6c2513be89f064b44516b1d89c0d6005dd1d4d30))
* update release please extra-files to be explicit ([#26](https://github.com/zachariahmiller/uds-core/issues/26)) ([23f4999](https://github.com/zachariahmiller/uds-core/commit/23f49995771fb05cd18e7a077bf90e86ca5b7471))

## [0.9.1](https://github.com/defenseunicorns/uds-core/compare/v0.9.0...v0.9.1) (2024-01-22)


### Bug Fixes

* update missing flavor create inputs in publish step ([#118](https://github.com/defenseunicorns/uds-core/issues/118)) ([a0233eb](https://github.com/defenseunicorns/uds-core/commit/a0233eb45e2d39035f483f3ed8fb3f396e5030d8))

## [0.9.0](https://github.com/defenseunicorns/uds-core/compare/v0.8.1...v0.9.0) (2024-01-21)


### Features

* add Zarf Flavors to support Iron Bank & upstream images ([#63](https://github.com/defenseunicorns/uds-core/issues/63)) ([232c256](https://github.com/defenseunicorns/uds-core/commit/232c2566b96be0285c24b8b5787350897e72332f))

## [0.8.1](https://github.com/defenseunicorns/uds-core/compare/v0.8.0...v0.8.1) (2024-01-18)


### Bug Fixes

* remove loki gateway anti-affinity ([#111](https://github.com/defenseunicorns/uds-core/issues/111)) ([2cba42e](https://github.com/defenseunicorns/uds-core/commit/2cba42e3a83a25ae7a45f3c3d6a35bdc7bba0b58))

## [0.8.0](https://github.com/defenseunicorns/uds-core/compare/v0.7.4...v0.8.0) (2024-01-16)


### Features

* add UDS Operator and consolidate UDS Policies ([#66](https://github.com/defenseunicorns/uds-core/issues/66)) ([395c1c4](https://github.com/defenseunicorns/uds-core/commit/395c1c4aec324d0d939cc410a6bb92129b26653b))


### Miscellaneous

* adding unit test for registerExemptions() ([#105](https://github.com/defenseunicorns/uds-core/issues/105)) ([5e71fcf](https://github.com/defenseunicorns/uds-core/commit/5e71fcf4751d2e3f6a1e55583ccf76c0fdc76856))
* **deps:** update pepr to v0.22.2 ([#104](https://github.com/defenseunicorns/uds-core/issues/104)) ([0555353](https://github.com/defenseunicorns/uds-core/commit/0555353e5a5dec2aa8685a3987852d1c3788f28c))

## [0.7.4](https://github.com/defenseunicorns/uds-core/compare/v0.7.3...v0.7.4) (2024-01-13)


### Bug Fixes

* change pepr error policy to reject ([#99](https://github.com/defenseunicorns/uds-core/issues/99)) ([10772e2](https://github.com/defenseunicorns/uds-core/commit/10772e2c64f1e4b965b6b644b0008c81025029e9))


### Miscellaneous

* **deps:** update pepr to v0.22.0 ([#102](https://github.com/defenseunicorns/uds-core/issues/102)) ([941902d](https://github.com/defenseunicorns/uds-core/commit/941902dcfc2ec1d5340d658f75811b3369489c56))

## [0.7.3](https://github.com/defenseunicorns/uds-core/compare/v0.7.2...v0.7.3) (2024-01-11)


### Bug Fixes

* add test for disallow selinux options and handle checking for us… ([#96](https://github.com/defenseunicorns/uds-core/issues/96)) ([88b969e](https://github.com/defenseunicorns/uds-core/commit/88b969e2aa4dea8b76dbe397d77c53941f7cfbc8))


### Miscellaneous

* **deps:** update uds to v0.5.3, zarf to v0.32.1, and uds-k3d to 0.3.0 ([#77](https://github.com/defenseunicorns/uds-core/issues/77)) ([596f9d8](https://github.com/defenseunicorns/uds-core/commit/596f9d8df51c3df1aa87fd0e09d9e69c87473bf0))
* open the aperture for pr workflow triggering ([#90](https://github.com/defenseunicorns/uds-core/issues/90)) ([d8a72f2](https://github.com/defenseunicorns/uds-core/commit/d8a72f2f2f3e507a4be7f217e23b737e3d4c35ce))
* simplify promtail values for scrape configs ([#94](https://github.com/defenseunicorns/uds-core/issues/94)) ([6c2513b](https://github.com/defenseunicorns/uds-core/commit/6c2513be89f064b44516b1d89c0d6005dd1d4d30))

## [0.7.2](https://github.com/defenseunicorns/uds-core/compare/v0.7.1...v0.7.2) (2024-01-09)


### Bug Fixes

* wait on istio proxies ([#87](https://github.com/defenseunicorns/uds-core/issues/87)) ([51cd5a0](https://github.com/defenseunicorns/uds-core/commit/51cd5a012cc1d095a89b30a22910d3d7ad49885d))


### Miscellaneous

* kick off ci ([1afc3a4](https://github.com/defenseunicorns/uds-core/commit/1afc3a4203cce1a1c81b15e7ba6caad1a9c63131))

## [0.7.1](https://github.com/defenseunicorns/uds-core/compare/v0.7.0...v0.7.1) (2024-01-08)


### Bug Fixes

* loki local storage ([#84](https://github.com/defenseunicorns/uds-core/issues/84)) ([b9505bb](https://github.com/defenseunicorns/uds-core/commit/b9505bbb42b5369c62d7cbfb05e1efb8b8a6200f))


### Miscellaneous

* **deps:** update pepr ([#76](https://github.com/defenseunicorns/uds-core/issues/76)) ([50de920](https://github.com/defenseunicorns/uds-core/commit/50de920bcf03092d16a11ebf77ede70987a7cdcf))

## [0.7.0](https://github.com/defenseunicorns/uds-core/compare/v0.6.2...v0.7.0) (2024-01-05)


### Features

* update security policy to use provided user, group, and fsgroup ([#82](https://github.com/defenseunicorns/uds-core/issues/82)) ([6d641ce](https://github.com/defenseunicorns/uds-core/commit/6d641ce67210999bacda0e855269dca61e7c6a7b))


### Miscellaneous

* initial renovate config ([#67](https://github.com/defenseunicorns/uds-core/issues/67)) ([2cd19d8](https://github.com/defenseunicorns/uds-core/commit/2cd19d871a95491950d43fea8e8fd2e8c290cd55))

## [0.6.2](https://github.com/defenseunicorns/uds-core/compare/v0.6.1...v0.6.2) (2023-12-11)


### Miscellaneous

* add minio deploy time bundle variable override definitions ([#58](https://github.com/defenseunicorns/uds-core/issues/58)) ([ca28e7b](https://github.com/defenseunicorns/uds-core/commit/ca28e7b4c4a42769934cc8ad69361ff29a348cc5))
* refactor validate.yaml file name and task name ([#62](https://github.com/defenseunicorns/uds-core/issues/62)) ([92a04ea](https://github.com/defenseunicorns/uds-core/commit/92a04ea1096448995ccc0dd9d77a32a5061e06f0))

## [0.6.1](https://github.com/defenseunicorns/uds-core/compare/v0.6.0...v0.6.1) (2023-12-07)


### Bug Fixes

* resolve istio job termination container status logic issue ([#55](https://github.com/defenseunicorns/uds-core/issues/55)) ([c0142c2](https://github.com/defenseunicorns/uds-core/commit/c0142c213446a37185cdf9dec5ae60aaae8ba194))

## [0.6.0](https://github.com/defenseunicorns/uds-core/compare/v0.5.0...v0.6.0) (2023-12-05)


### Features

* introduce Pepr common policies ([#50](https://github.com/defenseunicorns/uds-core/issues/50)) ([54182b4](https://github.com/defenseunicorns/uds-core/commit/54182b4db691d86ce80379be272d924d105b0d07))


### Miscellaneous

* conform to latest uds bundle schema ([#52](https://github.com/defenseunicorns/uds-core/issues/52)) ([14dad38](https://github.com/defenseunicorns/uds-core/commit/14dad3819187d4f8e13f7bbc191dca74a29b9c98))

## [0.5.0](https://github.com/defenseunicorns/uds-core/compare/v0.4.1...v0.5.0) (2023-11-19)


### Features

* expose tls certs as UDS bundle variables ([#48](https://github.com/defenseunicorns/uds-core/issues/48)) ([c1f8286](https://github.com/defenseunicorns/uds-core/commit/c1f828650ef2c53a3fd9ed477950046020c5d375))

## [0.4.1](https://github.com/defenseunicorns/uds-core/compare/v0.4.0...v0.4.1) (2023-11-17)


### Bug Fixes

* metrics-server mTLS fix ([#44](https://github.com/defenseunicorns/uds-core/issues/44)) ([4853522](https://github.com/defenseunicorns/uds-core/commit/4853522c9504c87dcbd8319d689ecb0a1cb42c0b))


### Miscellaneous

* dep updates for UDS CLI & Pepr ([#46](https://github.com/defenseunicorns/uds-core/issues/46)) ([1037634](https://github.com/defenseunicorns/uds-core/commit/10376349e350bd32f3bf32577d8f8089c09ac6cc))

## [0.4.0](https://github.com/defenseunicorns/uds-core/compare/v0.3.0...v0.4.0) (2023-11-16)


### Features

* add monitoring and logging ([#33](https://github.com/defenseunicorns/uds-core/issues/33)) ([c6d9aec](https://github.com/defenseunicorns/uds-core/commit/c6d9aece4984421e1ccbf476cd0d40fb701e4e50))

## [0.3.0](https://github.com/defenseunicorns/uds-core/compare/v0.2.0...v0.3.0) (2023-11-15)


### Features

* add metrics-server ([#35](https://github.com/defenseunicorns/uds-core/issues/35)) ([8216ab9](https://github.com/defenseunicorns/uds-core/commit/8216ab982be79dc393a2e0db359370b32e660150))

## [0.2.0](https://github.com/defenseunicorns/uds-core/compare/v0.1.3...v0.2.0) (2023-11-13)


### Features

* add pepr capability for istio + jobs ([#12](https://github.com/defenseunicorns/uds-core/issues/12)) ([c32a703](https://github.com/defenseunicorns/uds-core/commit/c32a70390f443c90796978ad4c42bbb4b17eb226))
* embed tls certs in istio package ([#32](https://github.com/defenseunicorns/uds-core/issues/32)) ([fb04fee](https://github.com/defenseunicorns/uds-core/commit/fb04feec9657f449366389a0e0a474a8cdeecb2c))

## [0.1.3](https://github.com/defenseunicorns/uds-core/compare/v0.1.2...v0.1.3) (2023-11-10)


### Miscellaneous

* bump zarf & uds-k3d deps ([#30](https://github.com/defenseunicorns/uds-core/issues/30)) ([dd28ab3](https://github.com/defenseunicorns/uds-core/commit/dd28ab3acd163aaccdfb76fbf9726c02a2ff0050))

## [0.1.2](https://github.com/defenseunicorns/uds-core/compare/v0.1.1...v0.1.2) (2023-11-09)


### Miscellaneous

* fix missing deps in tag and release workflow ([#28](https://github.com/defenseunicorns/uds-core/issues/28)) ([1e1af76](https://github.com/defenseunicorns/uds-core/commit/1e1af762e8eb1dd331cbd681e48ecc95ec3184d2))

## [0.1.1](https://github.com/defenseunicorns/uds-core/compare/v0.1.0...v0.1.1) (2023-11-09)


### Features

* Add istio and preliminary ci ([#3](https://github.com/defenseunicorns/uds-core/issues/3)) ([fbd7453](https://github.com/defenseunicorns/uds-core/commit/fbd745392340dbc978b27f0d321f3375882c1c40))
* add prometheus-stack (monitoring) capability ([#2](https://github.com/defenseunicorns/uds-core/issues/2)) ([e438ab6](https://github.com/defenseunicorns/uds-core/commit/e438ab6089bc9d8c6640fa002285d38ddc3022df))
* release-please integration ([#25](https://github.com/defenseunicorns/uds-core/issues/25)) ([bf3c53b](https://github.com/defenseunicorns/uds-core/commit/bf3c53b2ddac4e02e31aa3429029dd9f1c9595e3))


### Bug Fixes

* complete incomplete deploy task ([#21](https://github.com/defenseunicorns/uds-core/issues/21)) ([45ff5e5](https://github.com/defenseunicorns/uds-core/commit/45ff5e5d7b6a50cdfcfabb174349ab539a8accd9))


### Miscellaneous

* add commit lint workflow ([#19](https://github.com/defenseunicorns/uds-core/issues/19)) ([776a632](https://github.com/defenseunicorns/uds-core/commit/776a6325821329b2cbd97da2f40a30447cd48efc))
* remove version from neuvector zarf.yaml ([#11](https://github.com/defenseunicorns/uds-core/issues/11)) ([fbc8d51](https://github.com/defenseunicorns/uds-core/commit/fbc8d51e2b4146d394184d7596cd9a54219dc001))
* update release please extra-files to be explicit ([#26](https://github.com/defenseunicorns/uds-core/issues/26)) ([23f4999](https://github.com/defenseunicorns/uds-core/commit/23f49995771fb05cd18e7a077bf90e86ca5b7471))

## [0.0.0] - YYYY-MM-DD
PRE RELEASE

### Added
- Initial CHANGELOG.md
- CODEOWNERS
- CONTRIBUTING.md
- DEVELOPMENT_MAINTENANCE.md
- LICENSE
- READEME.md
- zarf.yaml
