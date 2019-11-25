import React from 'react';

import CardGrid from '.';

export default {
  title: 'Organisms / CardGrid',
};
let cards = [
  {
    id: 1,
    userId: 1,
    title: 'React Seoul 2017',
    startAt: '2017-11-04T04:00:00.000Z',
    endAt: '2019-11-04T08:00:00.000Z',
    isPublic: true,
    desc:
      '<h2><strong>React Seoul</strong></h2>\n<p>React Seoul은 React Korea에서 주관하는 비영리 컨퍼런스입니다. React에 대한 관심은 국내외에서 나날이 높아져 가서 이전의 여러 개발자 컨퍼런스에서도 React에 관한 기술 발표와 토론이 있었습니다.<br />하지만 컨퍼런스의 일부로서 겨우 한 두 개 정도 할당된 세션만으로 React의 넓고 다양한 세계를 담기에는 부족했습니다.<br /><br />이 때문에 React Korea에서는 React 생태계의 발전을 위해 한국에서는 처음으로 React 개발자 만을 위한 행사를 기획하게 되었습니다.</p>\n<p>예정된 세션은 다음과 같습니다.</p>\n<p>13:30-13:40 <strong>오프닝 - React Seoul</strong> - React Seoul Organizer<br />13:40-14:10 <strong>React로 다른 페이지에 임베드되는 웹앱 개발기</strong> - 안재하 @카카오<br />14:10-14:40 <strong>React/Redux for Smart TV UI</strong> - 이동영 @LG전자<br />15:10-15:40 <strong>리액트 네이티브 어디까지 해봤니?</strong> - 정주원 @인디개발자<br />15:40-16:10 <strong>Storybook Driven Development</strong>: Storybook을 통한 React UI Component 및 State 관리하기 - 진겸 @Foreseer llc.<br />16:30-17:00 <strong>Decorator + HOC + React = Fantastic!!</strong> - 천민호 @ZOYI Corp.</p>\n<p>5명의 발표자분들의 개발 경험담, 기술 이야기를 통해 참가자 분들이 마주친/마주치게 될 문제점과 팁을 얻어가셨으면 좋겠습니다.</p>\n<h2><strong>컨퍼런스 장소 안내</strong></h2>\n<p>주소 : 서울특별시 강남구 테헤란로 142 캐피탈타워 22층, 페이스북코리아<br />교통편 : 지하철 2호선 역삼역 3번출구 <br /><br />컨퍼런스는 11월 4일 페이스북 코리아(<a href="https://goo.gl/maps/wWzKRxSNiJN2" target="_blank">약도</a>)에서 13:00 ~ 17:30(4시간 30분)동안 진행됩니다. 컨퍼런스 종료 이후에는 <strong>디너파티 초대권 후원자에 한정</strong>해서 React Seoul 2017 오거나이저, 스피커와 함께 디너파티를 진행합니다. </p>\n<h2><strong>스페셜 디너파티</strong></h2>\n<p>디너파티는 외부 장소로 이동 후(도보 4분이내) 18:00~ 21:00(3시간)동안 진행됩니다. 디너파티에서는 준비된 음료/주류, 푸짐한 음식을 먹으며 세션 스피커, 관련업계 종사자, React Korea 운영진, React Seoul 오거나이저들과 아이스브레이킹을 진행 후 자유롭게 대화하고 고민을 나눌 수 있는 시간입니다.<br />React Seoul 오거나이저 들이 호스트를 맡아 모두에게 즐거운 시간과 좋은 추억을 만들어 드립니다.</p>\n<p><strong>** 디너파티는 초대권 후원자만 참석 가능합니다. **<br /></strong></p>\n<p> </p>\n<p><strong>컨퍼런스 참가 안내사항<br /></strong></p>\n<p>- 무료 주차는 지원되지 않습니다. 대중교통을 이용하시길 부탁드립니다.<br />- 무선 인터넷, 충전을 위한 콘센트가 준비되어 있습니다.<br />- 발표자료는 컨퍼런스 종료 후 공개됩니다.<br /><br />- 티켓, 초대권 및 스티커는 행사 당일 현장에서 전달해 드립니다.<br />- 디너파티는 사전 신청만 가능하며 현장 신청은 불가능합니다.<br />- 환불은 불가능합니다. 단, 개인간 양도는 가능합니다.<br />- 티켓은 펀딩 후원 후 마감일 다음날인 결제 예정일에 결제가 되셔야하며 펀딩 기한 종료 이후에는 티켓 구매 및 신청이 불가능합니다.<br />- 펀딩 모금 금액이 목표치에 도달하지 못한채 펀딩이 마감될 경우 결제는 이루어지지 않습니다. <br /><br /></p>\n<p> </p>\n<h3><strong>문의</strong></h3>\n<p>비 후원회원은 컨퍼런스 관련 질문은 <a href="https://festi.kr/zlack/team/T543UCP6D/46/" target="_blank">react-seoul 슬랙 채널</a>을 통해서 문의해주세요.<br />후원회원은 슬랙 처널 또는 텀블벅 로그인 후, 창작자에게 문의하기를 통해 진행자에게 문의를 전달할 수 있습니다.</p>\n<p> </p>\n<h3>React</h3>\n<p><a href="https://reactjs.org/" target="_blank">React</a>는 페이스북이 2013년 공개한 오픈소스 자바스크립트 라이브러리 입니다. React는 꾸준히 성장하여 전세계적으로는 물론 국내에도 많은 개발자와 기업이 React 기술을 도입하고 있습니다. React 기술을 모바일 플랫폼에 적용하여 크로스 플랫폼 개발이 가능한 React Native라는 프레임워크도 있습니다.</p>\n<p> </p>\n<h3>React Korea</h3>\n<p><a target="_blank">React Korea</a>는 페이스북 그룹과 슬랙 채널에서 활동하고 있는 커뮤니티입니다.<br />React에 관한 팁, 정보공유 뿐만 아니라 자유로운 질의응답을 통해 더 많은 사용자들이 어려움없이 시작할 수 있도록 도움을 주고 있습니다. </p>\n<p> </p>\n<p> </p>\n<p> </p>',
    mainImg:
      'https://cf.festa.io/img/2018-8-25/8ab76467-10ce-41e6-915f-9e8b218a44ca-리액트서울.jpg',
    place: 'Facebook Korea',
    placeDesc: '교통편 : 지하철 2호선 역삼역 3번출구',
    address: '서울특별시 강남구 테헤란로 142 캐피탈타워 22층',
    createdAt: '2017-11-04T04:00:00.000Z',
  },
  {
    id: 4,
    userId: 1,
    title: 'GDG Devfest 2017',
    startAt: '2017-11-19T03:30:00.000Z',
    endAt: '2017-11-19T08:00:00.000Z',
    isPublic: true,
    desc:
      '<p class="p3">&nbsp;</p><img src="/devfest-image.png" /><p class="p3">&nbsp;</p><h1 class="p1">개발자들의 신나는 페스티벌</h1><p class="p2">Android, Firebase, Google Cloud Platform, TensorFlow, Web <span class="s2">등 최신<span class="s1"> Google </span>개발자 기술 콘텐츠를 만나보세요<span class="s1">!</span></p><p class="p1">서로 지식을 교환하고<span class="s1">, </span>아이디어를 공유하고<span class="s1">, </span>기술에 대한 열정을 표출하는</p><p class="p1">개발자들의 축제에 여러분을 초대합니다<span class="s1">.</span></p><p class="p3">&nbsp;</p><h2 class="p4"><strong>GDG Korea</strong></h2><p class="p5"><a href="http://slack.gdg.kr/">GDG Korea</a><span class="s3">&nbsp;</span><span class="s4">에는</span><span class="s3"> 3</span><span class="s4">개의</span> <span class="s4">지역기반</span> <span class="s4">그룹</span><span class="s3">(<a href="https://www.meetup.com/ko-KR/GDG-Seoul/"><span class="s5">GDG Seoul</span></a>,&nbsp;<a href="https://www.meetup.com/ko-KR/GDG-Incheon/"><span class="s5">GDG Incheon</span></a>,&nbsp;<a href="https://www.meetup.com/ko-KR/GDG-Busan/"><span class="s5">GDG Busan</span></a>), 2</span><span class="s4">개의</span> <span class="s4">기술기반</span> <span class="s4">그룹</span><span class="s3">(<a href="https://www.meetup.com/ko-KR/GDG-Korea-Android/"><span class="s5">GDG Korea Android</span></a>,&nbsp;<a href="https://www.meetup.com/ko-KR/GDG-WebTech/"><span class="s5">GDG Korea WebTech</span></a>), 1</span><span class="s4">개의</span> <span class="s4">스페셜한</span> <span class="s4">그룹</span><span class="s3">(<a href="https://www.meetup.com/ko-KR/GDG-Campus/"><span class="s5">GDG Korea Campus</span></a>)</span><span class="s4">이</span> <span class="s4">있습니다</span><span class="s3">.</span></p><p class="p3">&nbsp;</p><h2 class="p6"><strong>What is GDG?</strong></h2><p class="p7"><span class="s6"><a href="https://developers.google.com/groups/">Google Developers Group (GDG)</a></span>는 전 세계<span class="s1"> 100</span>여 국<span class="s1">, 550</span>여개의 챕터가 있으며<span class="s1">, </span>한국에는 현재<span class="s1"> 7</span>개의 챕터가 있습니다<span class="s1">. Google </span>기술에 관심이 있는 개발자라면 누구나<span class="s1"> GDG </span>맴버가 될 수 있습니다<span class="s1">. </span>구글기술에 관심이 있는 많은 개발자들의 네트워크와 구글기술에 대한 활동이 이어지는 모임으로 진행될 것입니다<span class="s1">. </span>아직<span class="s1"> GDG Korea</span>에 참여를 고민하시나요<span class="s1">? </span>고민하지 마시고 편한 마음으로 참여하십시요<span class="s1">.</span></p><p class="p3">&nbsp;</p>',
    mainImg:
      'https://s3.ap-northeast-2.amazonaws.com/festa-temp/devfest-cover.jpg',
    place: '서울대 글로벌 컨벤션 플라자',
    placeDesc:
      '글로벌컨벤션플라자는 글로벌공학교육센터 내 전문 컨벤션 시설로 최대 9개 세션 약 1,000명을 동시에 수용할 수 있는 규모를 갖추고 있습니다. 또한, 전면 유리로 된 건물로 각 실에서 관악산의 수려한 경관을 감상하실 수 있습니다. 주차는 지원되지 않습니다. 가급적 대중교통을 이용해주세요.',
    address: '서울대 글로벌 컨벤션 플라자',
    createdAt: '2017-11-19T03:30:00.000Z',
  },
  {
    id: 6,
    userId: 1,
    title: 'KCD 2018',
    startAt: '2018-02-24T01:30:00.000Z',
    endAt: '2018-02-24T09:00:00.000Z',
    isPublic: true,
    desc:
      '<div><strong>* 티켓 구입은 2월 5일(월) 오전 10시부터 가능합니다.<br /></strong><br />대한민국 최대 규모의 커뮤니티 소통의 장. 제 7회 한국 커뮤니티 데이에 여러분을 초대합니다.<br /><br />자세한 행사 내용은 <a target="_blank" href="https://kcd2018.festa.io">https://kcd2018.festa.io</a>에서 확인 바랍니다.</div>',
    mainImg:
      'https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-cover-festa.jpg',
    place: '한국 Microsoft 11층',
    placeDesc:
      '주차권을 제공되지 않으니, 가능하면 대중교통수단 이용을 부탁드립니다. 주말의 경우 근처 연합뉴스 건물에 하루종일 5천원에 주차가 가능합니다.',
    address: '한국 Microsoft 11층',
    createdAt: '2018-02-24T01:30:00.000Z',
  },
  {
    id: 6,
    userId: 1,
    title: 'KCD 2018',
    startAt: '2018-02-24T01:30:00.000Z',
    endAt: '2018-02-24T09:00:00.000Z',
    isPublic: true,
    desc:
      '<div><strong>* 티켓 구입은 2월 5일(월) 오전 10시부터 가능합니다.<br /></strong><br />대한민국 최대 규모의 커뮤니티 소통의 장. 제 7회 한국 커뮤니티 데이에 여러분을 초대합니다.<br /><br />자세한 행사 내용은 <a target="_blank" href="https://kcd2018.festa.io">https://kcd2018.festa.io</a>에서 확인 바랍니다.</div>',
    mainImg:
      'https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-cover-festa.jpg',
    place: '한국 Microsoft 11층',
    placeDesc:
      '주차권을 제공되지 않으니, 가능하면 대중교통수단 이용을 부탁드립니다. 주말의 경우 근처 연합뉴스 건물에 하루종일 5천원에 주차가 가능합니다.',
    address: '한국 Microsoft 11층',
    createdAt: '2018-02-24T01:30:00.000Z',
  },
];
cards = [...cards, ...cards, ...cards, ...cards, ...cards, ...cards];

export const cardGrid: React.FC = () => {
  return <CardGrid cards={cards} />;
};
