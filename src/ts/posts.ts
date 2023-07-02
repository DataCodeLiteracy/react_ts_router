import { Posts, PostsDetail } from '../routes/post'

console.log(1)

export const posts: Array<Posts> = [
  {
    id: 1,
    title: 'Spring Boot Actuator의 헬스체크 살펴보기',
    imageUrl: 'https://static.toss.im/illusts-content/img-tech-cover.png',
    description:
      '서버의 상태를 알려주는 헬스 체크에 대해 알고 계시나요? 단순히 200 OK만 내려주겠거니 하고 별로 신경을 안 쓰고 계셨나요? 해당 포스트에서는 Spring Boot Actuator가 제공해주는 헬스 체크는 어떤 식으로 서버의 상태를 점검하는지, 어떤 부분을 주의하며 사용해야하는지 알아봅니다.',
    date: '2023.4.1'
  },
  {
    id: 2,
    title: 'ESLint와 AST로 코드 퀄리티 높이기',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2023/03/center.png',
    description: 'ESLint와 AST로 토스에서 코드 퀄리티를 높인 방법에 대해 소개드려요.',
    date: '2023.3.31'
  },
  {
    id: 3,
    title: 'tosspayments-restdocs: 선언형 문서 작성 라이브러리',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2023/03/00017-3291509353.png',
    description: 'REST Docs 를 최소한의 코드로 작성하면서 변화에도 더 유연하게 대처할 수 있는 tosspayments-restdocs 라이브러리와, 라이브러리에 녹인 기술들을 소개합니다.',
    date: '2023.03.22'
  },
  {
    id: 4,
    title: '선언적인 코드 작성하기',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2023/03/declarative.png',
    description: '선언적인 코드, 토스 프론트엔드 챕터는 어떻게 생각을 하고 있을까요?',
    date: '2023.03.16'
  },
  {
    id: 5,
    title: '똑똑하게 브라우저 Polyfill 관리하기',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2023/01/js_center.png',
    description: '현대적인 JavaScript를 쓰면서도 넓은 범위의 기기를 지원하기 위한 Polyfill을 어떻게 똑똑하게 설정할 수 있는지 소개합니다.',
    date: '2023.01.21'
  },
  {
    id: 6,
    title: '토스증권 QA 문화 ‘통합테스트’를 아시나요? (feat. 해외주식)',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2022/12/01-1.png',
    description:
      '토스증권 해외주식 출시 전에 사내 임직원 대상으로 진행한 ‘통합테스트’에 대해 소개합니다. 통합테스트 진행 방식을 참고하여 간단한 규칙과 사용자 시나리오를 활용해 사용자의 반응을 미리 확인해 보세요.',
    date: '2022.12.12'
  },
  {
    id: 7,
    title: 'NestJS 환경에 맞는 Custom Decorator 만들기',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2022/11/tech-article-nest-js-02.png',
    description:
      'NestJS에서 데코레이터를 만들기 위해서는 NestJS의 DI와 메타 프로그래밍 환경 등을 고려해야 합니다. 어떻게 하면 이러한 NestJS 환경에 맞는 데코레이터를 만들 수 있을지 고민해보았습니다.',
    date: '2022.11.22'
  },
  {
    id: 8,
    title: 'TypeScript 타입 시스템 뜯어보기: 타입 호환성',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2022/10/tech-article-ts.png',
    description:
      '타입호환성은 무엇이며 왜 필요할까요? 타입호환이 지원되지 않는 경우가 존재한다는 것을 아셨나요? 평소 익숙했던 개념들에 대해 질문을 던져가며 TypeScript 타입 시스템에 관해 심도있게 알아보고자 합니다.',
    date: '2022.10.26'
  },
  {
    id: 9,
    title: '토스증권 QA Team을 소개합니다',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2022/10/tech_M.png',
    description: '이 글은 토스증권 QA Team에 입사를 고려 중인 지원자들을 위해 작성된 글입니다. 토스증권 QA Manager 하는 역할과 일하는 방식은 어떻게 다를까요?',
    date: '2022.10.25'
  },
  {
    id: 10,
    title: 'CommonJS와 ESM에 모두 대응하는 라이브러리 개발하기: exports field',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2022/10/techblog-11-node-js.png',
    description: 'Node.js에는 두 가지 Module System이 존재합니다. 토스 프론트엔드 챕터에서 운영하는 100개가 넘는 라이브러리들은 그것에 어떻게 대응하고 있을까요?',
    date: '2022.10.4'
  }
]

export const postDetail: Array<PostsDetail> = [
  {
    id: 1,
    imageUrl: 'https://static.toss.im/illusts-content/img-tech-cover.png',
    title: 'Spring Boot Actuator의 헬스체크 살펴보기',
    profileImage: 'https://static.toss.im/assets/toss-tech/gwonsung-yang.jpeg',
    writer: '양권성, Sever Developer',
    date: '2023.4.1',
    contents: `뭐든 알고 쓰는 게 참 중요한 것 같습니다. 단순히 "지금은 잘
            돌아가니까 문제 없다"는 접근은 문제가 발생하기 전까지는 문제를
            방치하기 마련입니다. 사용하는 기술이나 구조에 대해 끊임없이 질문을 던지고 탐구하는 과정은
            토스팀 코어밸류 3.0 중 하나인 Question Every Assumption, 모든 기본
            가정에 근원적 물음에 제기한다에도 부합하는 사례인 것 같습니다. 이번
            포스트에서는 제가 개발 과정에서 헬스 체크를 별다른 생각 없이 Spring
            Boot Actuator가 제공하는 기능을 사용하면서 겪은 이슈를 간략하게
            설명해보겠습니다.`
  },
  {
    id: 2,
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2023/03/center.png',
    title: 'ESLint와 AST로 코드 퀄리티 높이기',
    profileImage: 'https://static.toss.im/assets/toss-tech/sung-jeon.jpeg',
    writer: '전성, Frontend Platform Enginner',
    date: '2023.3.31',
    contents: `일반적인 코딩 컨벤션을 가지면 코드를 읽기 쉬워지고, 안티패턴을 방지할 수 있습니다. 
              결과로 버그도 줄고, 코드를 쉽게 유지보수할 수 있죠. 하지만 이것을 사람이 직접 적용하는 
              것은 한계가 있기 때문에, 여러가지 정적 분석 도구를 활용하게 됩니다.`
  },
  {
    id: 3,
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2023/03/00017-3291509353.png',
    title: 'tosspayments-restdocs: 선언형 문서 작성 라이브러리',
    profileImage: 'https://static.toss.im/assets/toss-tech/junlee-lee.png',
    writer: '이준희, Server Developer',
    date: '2023.03.22',
    contents: `토스페이먼츠에서는 두 가지 장점 때문에 Spring REST Docs를 권장하고 있는데요. 
              첫 번째는 문서 작성 단계부터 API를 통합 테스할 수 있다는 점, 두 번째는 인터페이스의 
              의도치 않은 변경을 감지할 수 있다는 점 때문입니다.`
  },
  {
    id: 4,
    title: '선언적인 코드 작성하기',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2023/03/declarative.png',
    profileImage: 'https://static.toss.im/assets/toss-tech/sojin.jpg',
    writer: '박서진, Frontend Developer',
    date: '2023.03.16',
    contents: `선언적인 코드(Declarative Code)는 프론트엔드 개발을 하다 보면 자주 만나게 되는 개념입니다.
              특히 React 생태계에서 웹 서비스를 개발하다 보면 선언적인 코드에 대해 고민하게 되는데요. 
              이번 아티클에서는 토스 프론트엔드 챕터에서 생각하는 선언적인 코드란 무엇인지, 그리고 실제로 어떻게 선언적인 코드를 작성하는지 공유해드리려고 합니다.`
  },
  {
    id: 5,
    title: '똑똑하게 브라우저 Polyfill 관리하기',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2023/01/js_center.png',
    profileImage: 'https://static.toss.im/assets/toss-tech/sojin.jpg',
    writer: '박서진, Frontend Developer',
    date: '2023.01.21',
    contents: `토스 앱은 넓은 범위의 기기를 지원하면서도 현대적인 JavaScript를 이용해서 개발되고 있습니다. 그렇지만 최신 JavaScript를 오래된 브라우저 위에서 
              실행하기 위해서는 “Polyfill” 문제를 해결해야 하는데요.`
  },
  {
    id: 6,
    title: '토스증권 QA 문화 ‘통합테스트’를 아시나요? (feat. 해외주식)',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2022/12/01-1.png',
    profileImage: 'https://static.toss.im/assets/toss-tech/chaeeun-hwang.png',
    writer: '황채은, QA Manager',
    date: '2022.12.12',
    contents: `토스증권에서는 기능별로 Silo가 만들어져있고, 그 Silo에는 PO, Developer, PD, DA, QA가 함께 서비스를 만들고 있는데요.`
  },
  {
    id: 7,
    title: 'NestJS 환경에 맞는 Custom Decorator 만들기',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2022/11/tech-article-nest-js-02.png',
    profileImage: 'https://static.toss.im/assets/toss-tech/hyeonji-song.jpg',
    writer: '송현지, Node.js Developer',
    date: '2022.11.22',
    contents: `데코레이터는 비즈니스와 상관 없는 로직들을 숨기면서 기능을 변경하거나 확장할 수 있게 합니다. 
              또한 여러 클래스에서 반복되는 공통 관심사가 있을 때 데코레이터를 사용하면 중복된 코드를 줄이고 코드를 모듈 단위로 관리하는 효과를 거둘 수 있습니다.`
  },
  {
    id: 8,
    title: 'TypeScript 타입 시스템 뜯어보기: 타입 호환성',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2022/10/tech-article-ts.png',
    profileImage: 'https://static.toss.im/assets/toss-tech/byeongmuk-kim.png',
    writer: '김병묵, Node.js Developer',
    date: '2022.10.26',
    contents: `토스 Node.js 챕터에서는 높은 코드 가독성과 품질을 위해 TypeScript의 타입 시스템을 적극적으로 활용하고 있고 
              이에 대한 이해도를 높이기 위해 스터디를 꾸준히 진행하고 있습니다. TypeScript의 타입 시스템에 대해 공부해보던 중 
              알게된 흥미로운 몇가지 토픽들을 소개하려 합니다. 그 중 한가지로 이번글에서는 “타입 호환성 (type compatibility)”에 
              대해 알아보고자 합니다.`
  },
  {
    id: 9,
    title: '토스증권 QA Team을 소개합니다',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2022/10/tech_M.png',
    profileImage: 'https://static.toss.im/assets/toss-tech/sujeong-kwak.png',
    writer: '곽수정, QA Manager',
    date: '2022.10.25',
    contents: `초창기의 토스팀은 사용자에게 빠른 제품/서비스를 제공하는데 많은 노력을 기울이고 있었어요. 
              제품의 퀄리티 역시 PO, 개발자 등 제품을 만드는 ‘메이커(Maker)’들이 간단한 테스트를 통해 관리하고 
              있었죠. 버그가 발생하더라도 누구보다 빠르게 대응할 수 있다는 강한 자신감과 팀원 개개인의 오너십이 있었기 
              때문에 가능한 일이었다고 생각해요.`
  },
  {
    id: 10,
    title: 'CommonJS와 ESM에 모두 대응하는 라이브러리 개발하기: exports field',
    imageUrl: 'https://wp.toss.tech/wp-content/uploads/2022/10/techblog-11-node-js.png',
    profileImage: 'https://static.toss.im/assets/toss-tech/hoseung-jang.jpg',
    writer: '장호승, Frontend Developer',
    date: '2022.10.4',
    contents: `토스 프론트엔드 챕터에서는 개발 생산성을 극대화하기 위해 코드를 지속적으로 라이브러리로 만들고 있습니다. 
              그 결과 지금은 100개가 넘는 라이브러리를 운영하고 있습니다.
              Node.js 12부터 ECMAScript Modules라는 새로운 Module System이 추가되면서, 기존의 CommonJS라는 
              Module System까지, 라이브러리는 두 가지 Module System을 지원해야 하게 되었습니다.`
  }
]
