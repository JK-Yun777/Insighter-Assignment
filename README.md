# 다풀자 단어장

`인사이터 / 다풀자 팀의 프론트엔드 과제 B`에 해당합니다. React를 활용해 간단한 단어장 어플리케이션을 구현합니다. 소스코드 내에 주석처리된 TODO를 완료해 어플리케이션을 완성합니다.

# 주요기능

- 단어 목록을 볼 수 있습니다.
- 목록에 있는 단어를 활용해 3지 선다형 뜻 찾기 문제를 풀 수 있습니다.

# TODO

소스코드 안에 //TODO 내용을 구현해 주세요. TODO 아래 설명을 잘 읽고 필요한 기능을 구현해 주시면 됩니다.

# 보너스

- 퀴즈 결과 보기 및 저장 기능 추가
- 사용성 좋은 UI/UX
- 재사용 가능한 코드 설계
- 주요 도메인 로직에 대한 unittest
- 목적이 명료하게 드러나는 commit 단위 및 메세지

# Insighter-Assignment by Yun Jin Kyung

## TODO 기능 구현 이유

### wordList data fetch

현재는 data가 적고, 해당 컴포넌트 내부에서만 state를 사용하므로 useState를 통해서 간단하게 구현했습니다.

그러나 만약 wordlist data 양이 늘어난다면,

1. 한번에 fetch 가능한 갯수를 지정하겠습니다. (페이지당 10개 ~ 20개)  
   이유는 빠르게 data를 받아 올 수 있어 사용자 경험에 긍정적인 영향을 줄 수 있습니다.

2. 이전 fetch data 및 마지막 wordlist는 상태관리로 저장해두겠습니다.  
   필요한 신규 data만 추가로 fetch 해온다면 그만큼 비용을 절감 할 수 있습니다.

### 퀴즈 결과 보기 및 저장 기능

퀴즈의 결과에 대한 정보만 필요한 상황이라고 판단되어, 비교적 간략한 코드로만으로도 상태관리가 가능한 zustand를 사용하여 결과를 저장하고 신규로 만든 Result component를 통해 사용자에게 보여주는 기능을 구현했습니다.

# 기술 스택

## 비동기작업을 위한 Axios

비동기 작업을 진행함에 있어 ES6 스펙에 추가된 fetch도 있지만, 저는 axios를 사용했습니다.

axios의 장점은

1. JSON data로 자동 변환 하는 기능이 있습니다.
2. fetch에 비해 브라우저 호환성이 좋습니다.
3. Request 취소와 RequestTimeout 설정이 가능합니다.
4. HTTP Request의 Intercept 기능이 가능합니다.

위와 같은 많은 장점이 있지만, 그 중 체감하기로 1, 2번 기능이 매우 우수하다고 생각되어 이번 과제에는 axios를 사용했습니다.

## 퀴즈 결과 보기 및 저장 기능을 위한 zustand

그동안 상태관리를 위한 라이브러리로 redux를 주로 사용하던중, 가장 마지막으로 진행한 개인 프로젝트(I am a pilot)에서는 그동안 사용하지 않은 기술을 써보고 싶어서 zustand를 사용했습니다.

zustand는 redux에 비해 오래된 기술 스택은 아니지만,

1. 보일러 플레이트가 거의 없고
2. react context API처럼 Provider로 감싸줄 필요도 없는 점

등이 러닝 커브의 장벽을 뛰어 넘을 만한 매력적인 라이브러리라고 판단되어 사용하게 되었습니다.

# 어려웠던 점

Typescript의 필요성에 대한 말은 많이 들었지만, 실제 사용해서 프로젝트를 진행해본 적이 그동안은 없었습니다.  
입사 지원 과제로 진행하게 되어 Typescript를 제대로 공부하고 코드를 쓰지 못한 점은 매우 아쉽게 느껴지지만,  
이번 과제를 진행하면서 타입을 지정한다면 규모가 크거나 다수의 동료들과 협업이 필요한 작업 진행 시에 정말 많은 도움이 되겠구나 느껴볼 수 있는 기회가 된 것 같습니다.
