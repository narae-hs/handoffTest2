# 📘 DESIGN INTENT (AUTO-GENERATED)

## 🤖 AI Rules

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 문서함 > Local_AI_Rules

Target

docThumbContainer

Logic

Flexible Wrap: DocThumb은 부모 너비에 따라 자동으로 줄바꿈(flex-wrap: wrap)
Alignment: 줄바꿈된 요소는 좌측 정렬(justify-content: flex-start)
Responsive Columns: 화면 해상도에 따라 한 줄에 배치되는 열의 개수를 유동적으로 결정

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 기록/공사 > 기록_상세 > Local_AI_Rules

Target

기록_상세 > topImg

Logic

width: 100% / height: 이미지 원본 비율을 유지하며 너비에 따라 자동 계산, max-height: 520px
Image Style
Fit: object-fit: cover
Position: object-position: center center

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 기록/공사 > 기록메인_공사 > Local_AI_Rules

Target

RecordListItem/thumb

Logic

썸네일 3개 이상일 경우
좌측 thumbnail → width: 60.27%
thumbGroupRight → flex: 1
thumbGroupRight>thumbnail → width:100%

countBadge Logic
Condition: 이미지 총 개수가 3장을 초과할 경우 표시
Display: 3번째 썸네일 상단에 countBadge를 오버레이하며, 텍스트는 ‘+’(n-3)으로 표기
Image Style
Fit: object-fit: cover
Position: object-position: center center

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 현장선택 > Local_AI_Rules

Target

fixedBottomLayout

Logic

화면 하단에 영역 고정

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 전문가상세 > 전문가상세_RD > Local_AI_Rules

Target

triggerTooltip

Overlay

<Tooltip>

Logic

Trigger: triggerTooltip 클릭 시 <Tooltip> 노출
Position: IconButton의 가로 중앙(Center), 하단(Bottom) 8px 아래에 위치
Dismiss: 
<Tooltip>이 노출된 상태에서 triggerTooltip 클릭 
<Tooltip> 내의 <IconButton> (style: ic_close_bold) 클릭 시 <Tooltip> 닫음

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 홈 > 01.홈_현장없음 케이스 > Local_AI_Rules

Target

<FloatingButton>

Logic

Position: 화면 하단 Fixed, 레이어 최상단 배치

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 홈 > 01.홈_디폴트 > Local_AI_Rules

Target

ContentCard

Logic

width: 86.133%, max-width: 480px
Aspect Ratio: 323:430 비율을 유지하며 높이가 너비에 따라 자동 계산되도록 설정
ContentCard 1개만 존재할 경우
width: calc(100% - 32px(화면의 좌우 margin 제외)), 중앙 정렬

Target

ContentCard > topThumbLayout

Logic

countBadge Logic
Condition: 이미지 총 개수가 6장을 초과할 경우 표시
Display: 3번째 썸네일 상단에 countBadge를 오버레이하며, 텍스트는 ‘+’(n-6)으로 표기
Image Style
Fit: object-fit: cover
Position: object-position: center center

Target

banner > ProductUnit

Logic

width: 50.933%
Aspect Ratio: 191:253 비율을 유지하며 높이가 너비에 따라 자동 계산되도록 설정

Target

ContentCard > bottomThumbLayout

UI Case

Logic

썸네일 이미지가 1장 이상 존재 시 노출 (0장일 경우 영역을 비워둠)
최대 3장의 이미지를 우측 상단 방향으로 겹쳐서(Stacked) 배치

12.09

(화)

+

4

+

4

공정명

계약 상담 이후 상담 내용 공유드리겠습니다. 계약 내용은 다음과 같으며 시간되실 때 확인부탁드립니다. 계약 상담 이후 상담 내용 공유드리겠습니다. 계약 내용은 다음과 같으며 시간되실 때 확인부탁드립니다. 계약 내용은 다음과 같으며 시간되실 때 확인부탁드립니다.계약 상담 이후 상담 내용 공유드리겠습니다. 계약 내용은 다음과 같으며 시간되실 때 확인부탁드립니다. 계약 상담 이후 상담 내용 공유드리겠습니다. 계약 내용은 다음과 같으며 시간되실 때 확인부탁드립니다. 계약 내용은 다음과 같으며 시간되실 때 확인부탁드립니다.  계약 내용은 다음과 같으며 시간되실 때 확인부탁드립니다. 계약 내용은 다음과 같으며 시간되실 때 확인부탁드립니다.

5

2

Target

calendarContainer

Logic

viewType: weekly
Navigation
Horizontal Swipe: 좌/우 스와이프 시 1주(7일) 단위로 Snapping 이동
btnPrev / btnNext 클릭: 스와이프와 동일하게 1주(7일) 단위로 Snapping 이동

Default State
오늘 날짜 기준으로 노출
오늘 일정이 있는 경우 → CalendarDate: selected + default
오늘 일정이 없는 경우 → CalendarDate: disabled + today

Data Sync: 선택된 날짜의 일정을 DailySchedule에 노출
Month Text Rule (혼합 주차)
두 달이 섞인 주차로 이동 시: monthText는 이동 직전의 월을 유지
CASE 1 (btnPrev 클릭): 12월에서 이전 주로 이동하여 11월과 섞인 주가 보일 때, monthText는 12월 유지
CASE 2 (btnNext 클릭): 11월에서 다음 주로 이동하여 12월과 섞인 주가 보일 때, monthText는 11월 유지
monthText는 selected 상태의 CalendarDate에 해당하는 월을 표기
DailySchedule 클릭 시 달력 상세 페이지로 이동

Target

DailySchedule

UI Case

실측 상담

15:00

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

철거

15:00

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

바스

15:00

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

목공

12.10(수) - 12.12(금)

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

실측 상담

15:00

등록된 일정이 없습니다.

등록된 일정이 없습니다.

Logic

CalendarDate가 disabled + today일 경우 → state: empty
CalendarDate가 selected일 경우 → state: default

Target

CalendarDate

Logic

enabled: 일정 있음
disabled: 일정 없음
today: 오늘
default: 오늘 외 날짜
selected: Tap으로 선택

4

4

4

4

4

4

enabled

disabled

default

today

selected

Target

#bg

Logic

width: 100vw
height: 410px
Image: object-fit: cover
object-position: top center

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 홈 > 홈_캘린더 > Local_AI_Rules

Target

detailCalendarContainer

Logic

DailySchedule-List에는 현재 선택된 한 달 단위의 모든 scheduleCard 전체를 노출
날짜가 selected 되면 해당 scheduleCard를 리스트 최상단에 Anchor 이동
weeklyView: selected 된 날짜가 현재 주차에 없으면 해당 주차로 이동
animation
타겟 주차가 현재 표시되는 주보다 아래에 있을 때: 전체 시트를 위로 올림 → 새로운 주가 아래에서 위로(Upward) 나타남
타겟 주차가 현재 표시되는 주보다 위에 있을 때: 전체 시트를 아래로 내림 → 새로운 주가 위에서 아래로(Downward) 나타남
뷰 전환 및 초기화
viewType: monthly
(최우선) 홈에서 선택된 날짜 selected 상태, 해당 scheduleCard가 최상단 위치에 노출된 상태로 진입
(홈에서 selected된 날짜 없음) btn_schedule로 진입한 경우: 해당 월 중 일정 존재하는 가장 빠른 날짜를 selected 상태로 진입
등록된 일정이 없는 경우: 오늘이 포함된 월로 진입
Transition 
monthlyView에서 weeklyView로 축소
리스트 스크롤 시
Calendar 아래에서 위로 드래그 시 
weeklyView에서 monthlyView로 확대
최상단으로 스크롤 시
Calendar 위에서 아래로 드래그 시
선택 및 동기화
날짜 Selection Trigger
사용자 Tap: 달력 날짜 클릭 시 즉시 selected 상태로 전환
Auto Scroll: 리스트 스크롤 시 영역 최상단에 도달한 일정의 날짜를 자동으로 selected 상태로 전환
네비게이션 제어 (btnPrev / btnNext)
monthlyView, weeklyView 공통 Logic 
btnPrev / btnNext 클릭, 시 이전 / 다음 월로 이동
이동한 월의 일정 데이터가 있는 경우, 가장 최신 일정 날짜를 selected 상태로 전환
이동한 월의 일정 데이터가 없는 경우,
monthlyView: 이동한 월의 일정 데이터가 없는 경우에도 monthlyView 노출
weeklyView: 이동한 월의 일정 데이터가 없는 경우, 마지막 주 노출
weeklyView에서 Month Text Rule (혼합 주차)
두 달이 섞인 주차로 이동 시: monthText는 이동 직전의 월을 유지
CASE 1 (btnPrev 클릭): 12월에서 이전 주로 이동하여 11월과 섞인 주가 보일 때, monthText는 12월 유지
CASE 2 (btnNext 클릭): 11월에서 다음 주로 이동하여 12월과 섞인 주가 보일 때, monthText는 11월 유지

Target

scheduleCard

UI Case

26.1.9(금)

실측 상담

15:00

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

철거

15:00

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

바스

15:00

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

목공

12.10(수) - 12.12(금)

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

사전에 말씀해 주신 '햇살이 잘 드는 따뜻한 거실' 컨셉을 실현하기 위해 창가 주변의 채광과 가구 배치 동선을 집중적으로 살펴볼 예정입니다. 혹시 미처 말씀 못 하신 아이디어나 평소 생활하시며 불편했던 점이 있다면 오늘 편하게 들려주세요.

실측 상담

15:00

등록된 일정이 없습니다.

등록된 일정이 없습니다.

Logic

해당 월에 등록된 일정이 없을 경우: scheduleCard  → state: empty

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 이미지상세 > Local_AI_Rules

Target

imgArea

Logic

width: 100%, height: calc(100% - (92px + thumbnailArea 높이값))
내부 이미지 원본 비율 유지하며 가로/세로 중앙 위치
영역 초과 시 상하 Crop 처리

Target

thumbnailArea

UI Case

3

4

3

4

3

4

Logic

selected 상태의 썸네일은 항상 화면 가로 중앙(Center) 위치를 유지
thumbnail은 영역 내에서 좌우 스와이프 됨

Target

thumbnailArea > thumbnail

Logic

thumbnail의 이미지는 내부 이미지 원본 비율 유지하며 가로/세로 중앙 위치, 영역 초과 시 상하 Crop 처리
thumbnailArea에 노출된 이미지 thumbnail은 selected 상태로 전환

Target

<Toast>

Trigger

dropdown_list_item 선택 후 이미지 저장 완료 후 호출

Logic

toast_Definition 로직 준수 (🔗 보러가기)

Target

dropdown_bottomsheet

Trigger

btnSaveImg 선택 직후 호출

Logic

종료: dropdown_list_item 선택 또는 외부 영역 클릭 시 종료
animation:
호출 시: 아래에서 위로 move-in
종료 시: 위에서 아래로 move-out

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 설정 > Local_AI_Rules

Target

versionInfo

UI Case

현재 버전

5.5.77

(강조)

업데이트

(강조)

Target

switchPushAlarm

UI Case

Logic

현재 Push 알림 수신 동의 → state: enabled_on
현재 Push 알림 수신 미동의 → state: enabled_off

Target

bannerNotice

Logic

시스템 설정 알림이 켜져 있을 경우: bannerNotice 미노출

Target

<Toast>

Trigger

btnDeleteCache 캐시 삭제 후 호출

Logic

toast_Definition 로직 준수 (🔗 보러가기)

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 팝업_앱접근권한안내 > Local_AI_Rules

Target

Dialog

Logic

dialog_btn 클릭 시,  Dialog and Scrim 닫기
Dialog_Definition 로직 준수 (🔗 보러가기)

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 인테리어가이드 > Local_AI_Rules

Target

intGuideImg*

Logic

export spec: 3x

Target

intGuideBanner*

Logic

export spec: 3x

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 서비스 소개 > 앱설치유도_랜딩페이지 > Local_AI_Rules

Target

topVisual

Logic

height: calc(100dvh - 72px)

Target

topVisualBg

Logic

Height: 119.38% (topVisual 높이 기준) topVisualBg 레이어의 높이는 가변하는 topVisual 높이값에 연동되며, 항상 119.38% 비율을 유지함.
디바이스 높이가 늘어나 topVisual이 커지면 bg 역시 동일 비율로 동기화되어 scaling 되어야 하며, 상하좌우 현재 정렬 상태를 고정함.

Target

fixedBottomLayout

Logic

화면 하단에 영역 고정

Target

scrolldown_animation

Logic

해당 레이어에는 별도 전달드린 scrolldown_animation.json 파일을 적용하여 애니메이션으로 구현.
Playback Settings: autoplay & loop 적용.

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 서비스 소개 > 홈_현장없음케이스_서비스안내 > Local_AI_Rules

Target

topVisual

Logic

height: calc(100vh - 48px)

Target

topVisualBg

Logic

Height: 119.38% (topVisual 높이 기준) topVisualBg 레이어의 높이는 가변하는 topVisual 높이값에 연동되며, 항상 119.38% 비율을 유지함.
디바이스 높이가 늘어나 topVisual이 커지면 bg 역시 동일 비율로 동기화되어 scaling 되어야 하며, 상하좌우 현재 정렬 상태를 고정함.

Target

fixedBottomLayout

Logic

화면 하단에 영역 고정

Target

scrolldown_animation

Logic

해당 레이어에는 별도 전달드린 scrolldown_animation.json 파일을 적용하여 애니메이션으로 구현.
Playback Settings: autoplay & loop 적용.

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 내정보 > Local_AI_Rules

Target

<Confirm>

Logic

Confirm_Definition 로직 준수 (🔗 보러가기)

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 내정보 > Local_AI_Rules

Footer_Definition 공통 패턴 적용 (🔗 보러가기)

프로토타입(해상도 변경하며 확인해주세요) (🔗 보러가기)

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Component > FAB_TR_info_Definition > Local_AI_Rules

Target

FAB_TR_info

Logic

Position: 화면 하단 Fixed, 레이어 최상단 배치
Interaction (Scroll-based):
Scroll at Top: expanded type 
Scrolling Down: Collapsed type으로 축소
Transition: 확장과 축소 사이 전환은 Ease-in-out 애니메이션 적용

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Component > <Toast>_Definition > Local_AI_Rules

Target

<Toast>

Logic

Position
Horizontal alignment: center
bottom: 32px, Safe Area 제외
width: calc(100% - 32px)

Interaction

duration: 1000ms 상태 유지 후 종료 
Show/Hide Animation: ease-in-out 효과를 적용하여 자연스럽게 나타나고 소멸 처리

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Component > Dialog_Definition > Popup_Definition > Local_AI_Rules

Target

PopupSlot

Logic

각 화면에 맞는 컴포넌트를 호출하여 교체함
Height: 교체된 인스턴스의 높이에 맞춰 가변

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Component > Dialog_Definition > Local_AI_Rules

Target

Dialog

Logic

Position: screen Center
Hierarchy: WebView_* < Scrim < Dialog (최상위)
Interaction: <IconButton> [ic_close]  or Scrim 클릭 시,  Dialog and Scrim 닫기

Mapping

[Type=Popup] ↔ Popup_Definition
[Type=Confirm] ↔ Confirm_Definition

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Component > Dialog_Definition > Confirm_Definition > Local_AI_Rules

Target

<Confirm>

Logic

<Confirm> 마스터의 모든 Property 옵션 무시
SetA, SetB의 시각적 조합만 생성
SetA
[close]: False
[Description]: True / False 선택 가능
btn1 + btn2 노출
SetB
[close]: True
[Description]: True / False 선택 가능
btn1 노출

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Component > Scrim_Definition > Local_AI_Rules

Target

Scrim

Logic

width: 100dvw, height: 100dvh
Position: Full Viewport Coverage



---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Component > TopNavRehaus_Definition > Local_AI_Rules

Target

navTitle

Logic

width: calc(100% - 180px) 적용
Position: 화면 최상단 고정

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Component > TopNavRehaus_Definition > Local_AI_Rules

Target

btnNoti

UI Case

Logic

미확인 알림 발생: show <DotBadge>
모든 알림확인: hide <DotBadge>

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Component > TopNavRehaus_Definition > Local_AI_Rules

Target

addressValue

Logic

max-width: calc(100% - 174px(화면의 좌우 margin, ‘현장’ 고정문구, arrow, 우측 버튼, 그 외 간격 제외))
최대 한 줄 노출하며, max-width 초과 시 말줄임(...) 처리

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Component > Footer_Definition > Local_AI_Rules

Target

Footer

Trigger Context

페이지 로드, 뷰포트 리사이즈, 아코디언 토글 완료

Logic

footer는 문서 흐름(flow) 안에 배치, position: fixed/sticky 사용 금지
contents ↔ footer 기본 간격: 0

조건 A

(contents + footer) < container 높이
→ footer의 margin-top 동적 계산하여 화면 최하단에 고정

조건 B

(contents + footer) ≥ container 높이
→ margin-top: 0, contents 바로 아래 배치 (일반 스크롤)

*적용 조건: footer를 포함하는 화면은 스크롤 영역을 container, 콘텐츠 영역을 contents로 네이밍할 것

Target

down_list

Trigger Context

accordion 영역 클릭 — State: Closed ↔ Opend 토글

Motion

Expand: down_list height 0 → scrollHeight (accordion 기준 아래로만 확장)
Collapse: down_list height scrollHeight → 0
Easing: cubic-bezier(0.4, 0, 0.2, 1)
Duration: 300ms

Layout

Expand 중: footer의 margin-top transition 비활성화 (위치 고정)
Collapse 중: footer의 margin-top 실시간 재계산 (하단 복귀, Easing 동일)
토글 완료 후 Layout 재계산 (조건 A/B 재판단)

Auto Scroll

Expand 후 container.scrollHeight > viewport → 하단으로 smooth scroll
Expand 후 container.scrollHeight ≤ viewport → 스크롤 없음
Collapse 시 → 스크롤 없음

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Interaction > Local_AI_Rules

Target

topFixedArea

Logic

Position: 화면 최상단 고정

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Interaction > Local_AI_Rules

Target

All Screens (BNB 탭 간 이동 제외)

Trigger Context

순방향 화면 전환, 새 창 띄우기

Motion

Direction: Right(100%) → Left(0%) Slidein
Easing: Cubic-bezier(0.1, 0, 0, 1)
Duration: 300ms

Below Screen

Motion: translateX(0%) → translateX(-30%)

 Dim

#000000, Opacity 0%→12%

Target

All Screens (BNB 탭 간 이동 제외)

Trigger Context

역방향 화면 전환, 새 창 닫기((iOS Edge Swipe, 시스템 백 버튼 포함)

Gesture

iOS Edge Swipe, Android Back Swipe/Key
Threshold: 30% of screen width

Motion

Direction: Left(100%) → Right(0%) SlideOut
Easing: Cubic-bezier(0.1, 0, 0, 1)
Duration: 300ms

Below Screen

Motion: translateX(-30%) → translateX(0%)

 Dim

 #000000, Opacity 12%→0%

Target

Dialog, Toast

Trigger Context

부분 오버레이

Motion

Entrance: FadeIn
Exit: FadeOut
Duration: 200ms

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Common_pattern > Loading > Local_AI_Rules

Target

commonLoadingSpinner

Trigger Context

데이터 호출이나 화면 렌더링으로 인해 0.1초 이상의 빈 화면이 노출되는 모든 화면 전환 케이스에 노출
타겟 화면의 기본 레이아웃과 데이터 렌더링이 완료되는 시점에 스피너를 제거

Placement

화면(viewport) 가로/세로 정중앙에 위치

---

### 📌 Global_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Global_AI_Rules

[IGNORE]: 코드 생성 금지

Webview_: 프론트엔드 개발 대상 모든 컴포넌트 구조의 시작점

Last Updated: 2026-02-02

‘hidden/invisible’ 처리된 레이어, 컴포넌트 규칙

Ignore Hidden: 비활성화(Hidden) 레이어는 코드 생성에서 제외할 것.
Conditional Render: Variant 상태에 따른 노출은 Property 기반 조건부 로직으로 구현할 것.
Clean DOM: 불필요한 Wrapper div나 스타일 생성을 금지하고 DOM 구조를 최적화할 것.

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > 스플래쉬 > Local_AI_Rules

Target

splashLogo

Base Area

safeArea.Bottom 디바이스의 물리적 화면 전체가 아닌 하단 시스템 영역(OS 영역)을 제외한 컨텐츠 영역의 최하단 지점을 기준으로 함.

placement

세로 위치 : splashLogo.bottom=safeArea.Bottom-60px
가로 위치 : 화면 전체의 중앙에 위치

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > interiorPlanner > Local_AI_Rules

Target

RecordListItem/thumb

Logic

썸네일 3개 이상일 경우
좌측 thumbnail → width: 60.27%
thumbGroupRight → flex: 1
thumbGroupRight>thumbnail → width:100%

countBadge Logic
Condition: 이미지 총 개수가 3장을 초과할 경우 표시
Display: 3번째 썸네일 상단에 countBadge를 오버레이하며, 텍스트는 ‘+’(n-3)으로 표기
Image Style
Fit: object-fit: cover
Position: object-position: center center

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > preset test > interaction > Footer_Definition > Local_AI_Rules

Target

Footer

Trigger Context

페이지 로드, 뷰포트 리사이즈, 아코디언 토글 완료

Logic

footer는 문서 흐름(flow) 안에 배치, position: fixed/sticky 사용 금지
contents ↔ footer 기본 간격: 0

조건 A

(contents + footer) < container 높이
→ footer의 margin-top 동적 계산하여 화면 최하단에 고정

조건 B

(contents + footer) ≥ container 높이
→ margin-top: 0, contents 바로 아래 배치 (일반 스크롤)

*적용 조건: footer를 포함하는 화면은 스크롤 영역을 container, 콘텐츠 영역을 contents로 네이밍할 것

Target

down_list

Trigger Context

accordion 영역 클릭 — State: Closed ↔ Opend 토글

Motion

Expand: down_list height 0 → scrollHeight (accordion 기준 아래로만 확장)
Collapse: down_list height scrollHeight → 0
Easing: cubic-bezier(0.4, 0, 0.2, 1)
Duration: 300ms

Layout

Expand 중: footer의 margin-top transition 비활성화 (위치 고정)
Collapse 중: footer의 margin-top 실시간 재계산 (하단 복귀, Easing 동일)
토글 완료 후 Layout 재계산 (조건 A/B 재판단)

Auto Scroll

Expand 후 container.scrollHeight > viewport → 하단으로 smooth scroll
Expand 후 container.scrollHeight ≤ viewport → 스크롤 없음
Collapse 시 → 스크롤 없음

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > preset test > size > test1 > Local_AI_Rules

Target

RecordListItem/thumb

Logic

썸네일 3개 이상일 경우
좌측 thumbnail → width: 60.27%
thumbGroupRight → flex: 1
thumbGroupRight>thumbnail → width:100%

countBadge Logic
Condition: 이미지 총 개수가 3장을 초과할 경우 표시
Display: 3번째 썸네일 상단에 countBadge를 오버레이하며, 텍스트는 ‘+’(n-3)으로 표기

Image Style
Fit: object-fit: cover
Position: object-position: center center

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > preset test > size > test1 > Local_AI_Rules

Target

thumbnail

Logic

id: thumbnail
width: 60.27%

Target

RecordListItem/thumb

Logic

id: RecordListItem/thumb
[Condition:썸네일이 3개 이상일 경우]
thumbnail width: 60.27%

---

### 📌 Local_AI_Rules
> 경로: Document > Page 1 > preset test > size > test1 > Section 2 > Local_AI_Rules

Target

RecordListItem/thumb

Logic

Frame 2609279/thumbnailLeft → 가변

---

## 📦 Component Metadata

- **os=ios(x 이상), bg=basic**  _(key: b1c8d51e0ae87c2fd1c082af240b446c0fb8da9e)_
- **type=sub, style=solid**  _(key: e98bf46e196dbb27ec9836214cfd35a094286e70)_
- **ic_arrow_back_bold**  _(key: be949a9e67d3c6570843e3e3443fd0d7b2161d93)_
- **mode=light**  _(key: d79e3f41ea60792b79d2fd26cb9cfd9bc9152ad5)_
- **ic_my_bold**  _(key: c723a84984ed80efb7e0ee080ae57cede72b9bb4)_
- **btnNoti**  _(key: 759ab3d890365144f9fd6da24b9abd3ac2c02b7f)_
- **style=ic_notification_bold**  _(key: 1f876952a2577d09ff25435a4754cd8e6c196a61)_
- **size=small(4)**  _(key: 02544c80a7917921b29e29ee89cef62557ca7f9b)_
- **style=ic_close_bold**  _(key: 2c751263315175b2180ed32b59cc740d776c8e64)_
- **centerItems**  _(key: a46cda77bc4cdbed627f33956f7462dcb33a6ec9)_
- **size=xs(20), state=enabled**  _(key: 40d6ab36bc64214f34e3a27d64e6ae2d190ac8b2)_
- **style=ic_arrow_left_bold**  _(key: 8f64269b009aa464f02ea57a738ed3f99429bf55)_
- **style=ic_arrow_right_bold**  _(key: cc1bab42013be84eae144ec2d3df0f3092d4848c)_
- **type=home, style=solid**  _(key: e2e6858411b5dde5ff61cf9cbc16347ea607afc4)_
- **centerItems**  _(key: a46cda77bc4cdbed627f33956f7462dcb33a6ec9)_
- **leftItems**  _(key: 285703da3f0d52c3a8075105b6af6f08746daee2)_
- **type=primary**  _(key: 5a3da8b90f6c457fc72f2f400649e8c4ff3f1ad7)_
- **style=ic_arrow_down_bold**  _(key: 49850d0986ddd543891cef73db49e725eccb27a3)_
- **Type=no preview, state=enabled**  _(key: b968b50869e3f7d80014b06899be7afb8b80c46c)_
- **ic_paper_solid**  _(key: d201c5279fe2fb4dff19527ca7257c226807cc29)_
- **variants=solid, D_variants_color=gray_50/Accent, icon align=right, font style=Regular**  _(key: 07838c9d12e9bb9d5a5f45e3df7178bd691c13ed)_
- **ic_premium**  _(key: 2b61e201027aadd96d1c954137640453ad415ce9)_
- **ic_link**  _(key: 07568c4197ea76584ed3a4afd58b4283ba2f3de0)_
- **ic_pdf**  _(key: fb247d3a22992add6fd97c7be3a5968a435f3b42)_
- **size=large(6)**  _(key: 8af7251432c593bba327078f6add57ea1e2e8761)_
- **ic_pdf**  _(key: fb247d3a22992add6fd97c7be3a5968a435f3b42)_
- **Type=no preview, state=disabled**  _(key: 22867e131490a9744aeee260a560a67197c4e877)_
- **type=expanded**  _(key: 7cfd024e2924e9ae682578156b6637b52a246e7a)_
- **variants=person, size=xs**  _(key: 81729e30300c8a91e6cd073742e0749a77f5e0de)_
- **size=xxsm(16), state=enabled**  _(key: 1288fb21f4462288448e2b3db521b410bbd096c7)_
- **ic_call_solid**  _(key: ff776be7741605ce359cc147490e554ecaa85f21)_
- **ic_comment_solid**  _(key: a3c89c8221df770eccf9236b78fac8628f59c666)_
- **Current=문서**  _(key: bf608b164a173461ee450b1a7f92c7012d448b0a)_
- **ic_home_bold**  _(key: 6585a56b23f4bf66d308ac1d6d3973e7d179111a)_
- **ic_paper_bold**  _(key: 7670800b2914bc40cd272dcf58a009fa80fb89ca)_
- **ic_chat_bold**  _(key: a134b47db71ab47ad0a4a759ebf7cb860cc558f1)_
- **ic_opened_file_solid**  _(key: e75cd82f585725a34ebcafc8f39bee9d572fe0cf)_
- **os=ios**  _(key: 5f2456cf40799558ac94ff201762a3c3f06c9087)_
- **icon=yes**  _(key: 272b3b09cc76881cbd1c882ffee543ec95f3b3b7)_
- **style=ic_alert_light**  _(key: 1d05977f815d65c38a19948cf880bdf7d7ff7b18)_
- **type=sub, style=solid**  _(key: e98bf46e196dbb27ec9836214cfd35a094286e70)_
- **type=Point**  _(key: 75c36e562ff62272e90933c4bdc1e70bc7e535a0)_
- **type=link, expired=valid, read=read**  _(key: a7a5c949415a84e9e8edfea61ba2564836b18a78)_
- **state=enabled**  _(key: b968b50869e3f7d80014b06899be7afb8b80c46c)_
- **ic_paper_solid**  _(key: ee33fa9a2184989b8cddb84967dfb29e25a55da4)_
- **type=file(default thumb), expired=valid, read=read**  _(key: 4035fcd7e6a214cc65eb102286410c01154c659a)_
- **thumb=4장이상, read=read**  _(key: b0301ba252a185856caf01e465b3b0f853207194)_
- **type=feed**  _(key: da40b38f7a9ff6abcbe7e29cd091aaf406597fec)_
- **type=4장이상**  _(key: b6579529be4ca6af4d451bf0abaf5ca10cde811e)_
- **countBadge**  _(key: bdb0f60c6918eb20e90c2f9b04dd7d58d4040e4a)_
- **type=compact**  _(key: 43c27302171adb0881a4571c4079dfad42bfebcd)_
- **style=ic_paperclip_bold**  _(key: 0f93eb7b91a6d81256ef4e97ab1227885b8fb02d)_
- **ic_homeplanner**  _(key: ac6a48be329c698d94f45b6442e3cfeda868a6ac)_
- **type=Horizontal, primary=line4, color=gray_100, stroke=1line**  _(key: a55e94f7a63eef02fe316c924cdb0048f8771f0d)_
- **thumb=4장이상, read=unread**  _(key: 6b9fc6d67d001f2eb6e5ad2546f7b52add82d3d1)_
- **thumb=3장, read=read**  _(key: 107ec7256288fbbdf8e491e70ceb53c60558f385)_
- **type=3장**  _(key: 9bdf59f2dc6634a489e6cf70a5ebe2c041ff78ac)_
- **thumb=2장, read=read**  _(key: 21eef4a29b44f830c7646a5fbd226d41ab105a15)_
- **type=2장**  _(key: 530b89446b62680bef44910810e6ebe90af82b07)_
- **thumb=1장, read=read**  _(key: 880d3f119ccd5c7e7c4e454355358861821c3a44)_
- **type=1장**  _(key: 25632d9d99eea242b8b4569a8c69a923f9f3fd7f)_
- **thumb=3장, read=unread**  _(key: 390183b2c9ad54ef39692be1bffbf96526eabff6)_
- **thumb=2장, read=unread**  _(key: 4831c7168d86c8b165166414ebfd4a316775264f)_
- **thumb=1장, read=unread**  _(key: fd21588b6830ed9959df9b3d669a0afc8eb4bda1)_
- **thumb=2장 이상, read=read, attachment=active, vr=active**  _(key: a83dd87e425cea9bd184d10a45167a60dc03eb1a)_
- **type=compact**  _(key: 43c27302171adb0881a4571c4079dfad42bfebcd)_
- **thumb=2장 이상, read=read, attachment=active, vr=inactive**  _(key: cbb85efe5984d22228f7377f66cd81e1c071fd0c)_
- **thumb=2장 이상, read=read, attachment=inactive, vr=active**  _(key: 9fd7e3a346b53f58f16941a40813cf49bfef5e23)_
- **thumb=1장, read=read, attachment=active, vr=active**  _(key: 2cb3da455485759806ec731b915ca9b0a66e86c9)_
- **thumb=1장, read=read, attachment=active, vr=inactive**  _(key: b1c9e237cbc5159879d708d1e99dca8bd3b34f0c)_
- **thumb=1장, read=read, attachment=inactive, vr=active**  _(key: 3948c83f8a05c1d54082eeee0c65b9d7f2081e83)_
- **thumb=none, read=read, attachment=active, vr=active**  _(key: ebefa34612383705490a76ff376a96f39c46db8e)_
- **thumb=none, read=read, attachment=active, vr=inactive**  _(key: 335c5e518f38f4f7bd283377649cc73213282e8d)_
- **thumb=none, read=read, attachment=inactive, vr=active**  _(key: bf44cf24f44a1e13f99ab0320f7d42c60fcd6e57)_
- **thumb=2장 이상, read=unread, attachment=active, vr=active**  _(key: 47d72492af61cceaf7234ad2f76660ab64d45e25)_
- **thumb=2장 이상, read=unread, attachment=active, vr=inactive**  _(key: 5d226746d9a6e7db868559a86c1b361b20d70c99)_
- **thumb=2장 이상, read=unread, attachment=inactive, vr=active**  _(key: 1b26f7c2238473c1fdaba2cfd4377152470da14c)_
- **thumb=1장, read=unread, attachment=active, vr=active**  _(key: 5a41e3d6af78f5fbbc39c29b1ab8511d2f855772)_
- **thumb=1장, read=unread, attachment=active, vr=inactive**  _(key: 4b155504c5b1fe7a3207d27d5dd0a456e5ba00ab)_
- **thumb=1장, read=unread, attachment=inactive, vr=active**  _(key: 36834d8435a7274cf5c187d5cd27bb516dcd886c)_
- **thumb=none, read=unread, attachment=active, vr=active**  _(key: 14a50d1ea94c5aebfbcc6989083f037d0c8c5778)_
- **thumb=none, read=unread, attachment=active, vr=inactive**  _(key: 715fbac4299886623c735bf40886d0c5aee657ca)_
- **thumb=none, read=unread, attachment=inactive, vr=active**  _(key: 6c634c4dd6e2f97e210cb1da77cb793ebd623910)_
- **thumb=2장 이상, read=read, attachment=inactive, vr=inactive**  _(key: 897d1cdf874629e91d8cf674c9843df187d47934)_
- **thumb=1장, read=read, attachment=inactive, vr=inactive**  _(key: d93599f9bb22eaef7c7e82eae0baed8f5d6092a7)_
- **thumb=none, read=read, attachment=inactive, vr=inactive**  _(key: e9e185a8102e801d82bebc4096982d7cf06d26cb)_
- **thumb=2장 이상, read=unread, attachment=inactive, vr=inactive**  _(key: c8595efb6a79bebf77a9bd00fc0b61e59ad82757)_
- **thumb=1장, read=unread, attachment=inactive, vr=inactive**  _(key: 517e93fe05f2de93e1e79eea1f49798a453ea78f)_
- **thumb=none, read=unread, attachment=inactive, vr=inactive**  _(key: 1a5f29faff717b089b0a62f7b3ceb818decf15ca)_
- **spcing=8**  _(key: c1258cbf730d58ad887497a565f8273e8e1f3460)_
- **state=focused, icon align=right**  _(key: bd0bf563e8f59042b8cacd9c6e899ddf833ece94)_
- **style=ic_arrow_down**  _(key: 6a382419f22bee460e00015e6a45ba6fd4c514d2)_
- **variants=style1**  _(key: e4f587770b090e69db03c0594a47c8092d58eafd)_
- **state=enabled, icon align=right**  _(key: cefa98ac3994a037af3042bd1e6faaaacfe01d03)_
- **badge type=number**  _(key: fdb832005d01e359908ca7ff094184fec4df024f)_
- **variants=style1, D_color=red**  _(key: 47e8962075da7b893864f8f785e11ceb7f4ab0b8)_
- **Current=기록**  _(key: c3d8f6ca30c8df79b0804a6503fa6ac1e8f1e2d3)_
- **ic_opened_file_bold**  _(key: 02e8963fdc3a7a2d216ec1a2e48ac9214ac566c0)_
- **variants=number_icon**  _(key: 86073a0219f6c7cafbdb91cfde6494d2d23e947a)_
- **style=ic_plus_bold**  _(key: c6b3fa546458bf0d0b145b0a3feff603900d93bd)_
- **ic_won_solid**  _(key: 0e66157280369b48fe4b87d9268bea92c2460ced)_
- **ic_calendar_selected_solid**  _(key: fc839d1c259b79911fe4f1ea5a358a4a15860119)_
- **size=xs(20), emphasis=low, State=enabled, icon align=right, variants_color=primary, alignment=center**  _(key: a665bdbda6607b53b156237f30cf073fd2646a7c)_
- **ic_external_link**  _(key: 95d21a3026f2ecfa2c1b892c938bcc22f87c6bfb)_
- **type=file**  _(key: b9e0a06d2783b18236312cc8f2ceae0a7b29f333)_
- **DocThumb-compact/fullcase**  _(key: 6eda4efac14c257fcf6bf80c79991a343ce08424)_
- **type=link**  _(key: 5daa043020dbd17fbc96d4f43d03fd00b0806cb9)_
- **type=homeplanner**  _(key: ca878526493ae18657e5f52fed7b6135550da585)_
- **variants=style2, D_btn=1, D_icon=none, system=한샘몰**  _(key: 0c1bb4d3172842e3f2cd6d3e22b75bb4e19010d8)_
- **type=Horizontal, primary=line3, color=gray_200, stroke=1line**  _(key: 25304bdcfa6cf555c43c1ada36357ac49125dec0)_
- **variants=btn2**  _(key: 25a8fe460ecdee89462b4493c36a23271e079a82)_
- **size=lg(48), icon align=left, emphasis=mediuma, State=enabled, variants_color=primary**  _(key: bcb45b3f055bbf944b58016e086bb6f64eb0c08e)_
- **ic_phone**  _(key: 801ce8266f1d69be1e8b927d8a6bb786d369e25b)_
- **size=lg(48), icon align=left, emphasis=high, State=enabled, variants_color=primary**  _(key: ff3f9ad37c6d8340efc91671fe04f5e73aaae44a)_
- **type=feed**  _(key: da40b38f7a9ff6abcbe7e29cd091aaf406597fec)_
- **type=4장이상**  _(key: b6579529be4ca6af4d451bf0abaf5ca10cde811e)_
- **state=enabled**  _(key: 82c611aa0667ba96e18ff5d5fd17bf1c6f368c13)_
- **states=enabled, size=md(24)**  _(key: d9b0d36d983fd4356c3c8cf709b73db4dd5b4bc1)_
- **variants=solid, D_variants_color=black, icon align=right, font style=Regular**  _(key: e27156241056ad3cb818981e7559977df75dc367)_
- **variants=person, size=xxxs**  _(key: 80914be3c4a2e37c6b5a8d07a76465840f35ea49)_
- **type=Vertical, primary=line3, color=gray_200, stroke=1line**  _(key: bb684ea7fe391c4fb3d9bfd1784897da0d368ecf)_
- **state=ongoing_consult**  _(key: 2c341a95612ea226b251e0fbe286ec8dd390af9d)_
- **state=selected**  _(key: 614a8f07004560537029bd5d3bf44b41c9252ca2)_
- **states=selected, size=md(24)**  _(key: 3ee6ce301dcbcc23e921495482a0e4d4307feb79)_
- **state=disabled**  _(key: 322be8e81c30626a1764cda393c8d7d083fc5001)_
- **states=disabled_check, size=md(24)**  _(key: f2b7cda33f1b74c9054538c4190714ae86bfe54f)_
- **state=cancel**  _(key: 9e16205dd3bff1ca86bae30f21c034a2579221ec)_
- **type=modal, style=solid**  _(key: cbb8fb1962a24ce8ac7064f7137507c46a2a46d0)_
- **state=ongoing_interior**  _(key: f34e211fafa07d0052e4ef026599d774db5e0735)_
- **size=md, variants=text_icon, state=enabled, icon align=right**  _(key: 5a25c5d08d01db767f3c3c37f9f6149ad752d7a0)_
- **variants=style2**  _(key: b7dbe6ea8e12237188f09577f1780983cf0b4a0f)_
- **states=checked, size=sm(20)**  _(key: db992155f758c94c35faa367c849afd108c47417)_
- **style=ic_check_bold**  _(key: 50bb6b3f576d5b9070c6388f4119f8a6f21ed21e)_
- **type=Horizontal, primary=line3, color=gray_200, stroke=1line**  _(key: 25304bdcfa6cf555c43c1ada36357ac49125dec0)_
- **size=lg(48), icon align=left, emphasis=high, State=disabled, variants_color=primary**  _(key: d76f0bf91c93e3c31016349e5cdb54f9b0af4870)_
- **state=complete**  _(key: 659be9a8af6e637847ef4cb6c5a9c5862ceff11a)_
- **style=ic_arrow_up**  _(key: 59f5c34c84595ee3c2b9606be7bebbc2d6a8be60)_
- **states=disabled_blank, size=sm(20)**  _(key: db2de90a12939281d3fe56b58e0ee2a0cdb02f41)_
- **states=enabled, size=sm(20)**  _(key: 2a94b67f1d20661d0045b56380984375244e12a8)_
- **states=disabled_check, size=sm(20)**  _(key: 46118783196e33499b39cf9baddbb4a40e5fee08)_
- **record/listItem**  _(key: a8e6dc6f45e905b059b15b7114bb205a674e3123)_
- **Type=record**  _(key: f79977b258e5e10f999feb966e5cb429498ab600)_
- **ic_paper**  _(key: 21448eeb3734a5914ca9a2028fb400a94e1ad795)_
- **document_simple_listItem**  _(key: 3900ab1f5bbc66acd34791558661fe6f6465265f)_
- **Type=schedule**  _(key: 44ef159df355067cf5f0359f5033fd12fc291832)_
- **ic_calendar**  _(key: 1521653e9e2a94310bbc34c9fdb1f66b5d1e6a82)_
- **variants=person, size=md**  _(key: 6d7439e64ea58b7e990074f45292de52e2d66c62)_
- **Contents/ic_official_badge_tail_custom_contents**  _(key: 1e4221eb1d393ecc37ef0b5878ea695c730447ea)_
- **type=primary**  _(key: f8bf1e1cbc91713d0e7619d0a56b34f815603675)_
- **ic_star_solid**  _(key: f1b670a9bc2f5247afebdbaeeb46805acf8c7332)_
- **Contents/ic_official_badge_custom_contents**  _(key: b92f3fc2f9930980a73e2c8cb5afb81e62221429)_
- **Contents/ic_premium_badge_tail_custom_contents**  _(key: 5689aa33d7e0cea7cd00ac7667178bd31ad08077)_
- **ic_premium_solid**  _(key: 08c90807f56a0ae137d2329d404361d743627fd5)_
- **size=sm(24), state=enabled**  _(key: 5dfa4f46fb2a970adc36e00013b2358ff1d7a289)_
- **ic_information**  _(key: 19f6e1b8de6c7c7e118c6d2cfcdf2effd641d34d)_
- **Contents/ic_premium_badge_custom_contents**  _(key: 3ad159fda085edace90f3a17edc746d3e506428d)_
- **ic_special_solid**  _(key: 7ab4be20c2f52e3a297c942c5c3ddc2bd5fde55e)_
- **variants=solid, D_variants_color=blue_500/Accent, icon align=left, font style=Regular**  _(key: df6f96214c93ae700279c37e594a69fe9b5f3581)_
- **variants=solid, D_variants_color=red_50, icon align=left, font style=Regular**  _(key: 606cb600357a36cda3b2d6b686c27369223fe10e)_
- **style=ic_check_done**  _(key: c13dcb0d239a07c75c736b2908dc34c12a364605)_
- **variants=solid, D_variants_color=yellow_50, icon align=left, font style=Regular**  _(key: 3c9f7bb25bf7f5c51ec79a4a8080968d0aaa959d)_
- **variants=solid, D_variants_color=yellow_50, icon align=right, font style=Regular**  _(key: 54e859e4074d1b1369bf471407be07d6abc74b30)_
- **variants=solid, D_variants_color=blue_50, icon align=right, font style=Regular**  _(key: e2ad356a47a3604fef68396eaa2a83631a57cb19)_
- **ic_location_solid**  _(key: 0b51924ce916f4482fa93e1675b80a3d52d14bbf)_
- **type=yes**  _(key: 057f06762924ea9a6554c92956f5530bc3a46a2d)_
- **variants=default_person, size=md**  _(key: 0fd4e15a3449b4c4c5f7f4785130fa4e1b4681bf)_
- **ic_profile**  _(key: 80a8f7a2cf40d12a8ace56a3c88ef4aeb3149e74)_
- **type=Horizontal, primary=line5, color=gray_50, stroke=8line**  _(key: fe25244f774d2335471300cc6917c52355a3f61d)_
- **thumb=none, attachment=active, homeplanner vr=active**  _(key: d0400a225cb87c044279c2234ff944eecf3f7672)_
- **type=text**  _(key: 5bbd176f3779e03b1e97f0995adbd4917a8efc46)_
- **thumb=none, attachment=active, homeplanner vr=inactive**  _(key: c293d95c1a288a5dcd76b57901afba67c4b9dea2)_
- **thumb=none, attachment=inactive, homeplanner vr=active**  _(key: 87e649eefcfd7165d0bfbcd79af98e03349d3633)_
- **thumb=none, attachment=inactive, homeplanner vr=inactive**  _(key: 1d1c698595a8ffee746d07ead6a7396fa89f9495)_
- **thumb=3장이상, attachment=inactive, homeplanner vr=inactive**  _(key: bfb69f92a0bdc1e692102162572bc0525949c85e)_
- **thumb=2장, attachment=inactive, homeplanner vr=inactive**  _(key: a3a17474245730624ded75355f14dc9dc63a0bc6)_
- **thumb=1장, attachment=inactive, homeplanner vr=inactive**  _(key: 907189aa481bafec66c9a455bbbf59d968e3d530)_
- **thumb=3장이상, attachment=active, homeplanner vr=active**  _(key: 36875f93484dbff097106f3f4b331d186f226705)_
- **thumb=3장이상, attachment=active, homeplanner vr=inactive**  _(key: f7a47f265a84d4bb0ae778e22c335f2068e5b7f9)_
- **thumb=3장이상, attachment=inactive, homeplanner vr=active**  _(key: 7c8266510dfaaaf185c2e5173ba9c03de9c84e21)_
- **thumb=2장, attachment=active, homeplanner vr=active**  _(key: b320ac06ca49f7ff9494c43a72958bffe4c68bc0)_
- **thumb=2장, attachment=active, homeplanner vr=inactive**  _(key: 968a57d0161f60512448bbba60afbbc0432b05d6)_
- **thumb=2장, attachment=inactive, homeplanner vr=active**  _(key: 90df60603fffa2048bcd318475773070c18273b8)_
- **thumb=1장, attachment=active, homeplanner vr=active**  _(key: 8c0b15acaef4c26819e2bf97c4443445fac170e3)_
- **thumb=1장, attachment=active, homeplanner vr=inactive**  _(key: a720223575406df3ae8e1d5a7ff00f90fa98bd60)_
- **thumb=1장, attachment=inactive, homeplanner vr=active**  _(key: 9bfcd256c90fe2dcec90a71c0cce11c97adb7424)_
- **photo=3장**  _(key: 2ef1852690853e73da9b354d18060b7f2dcab287)_
- **type=visual**  _(key: 7fc72bf6ad677c102a06de0fbdef364587fd0162)_
- **photo=6장 이상**  _(key: 15833dd3fbb38b9abb1398aac83805c0725ed7f3)_
- **photo=2장**  _(key: a6e8b3f65dd89c2165bb2ac3ca1da04a02fb0a3d)_
- **photo=5장**  _(key: 8e317ff17f5b2c23c82303f7aa619ca3a885c398)_
- **photo=1장**  _(key: bcaeebdbdfcee750b467a18d53c3d1fed45b8bbf)_
- **photo=4장**  _(key: c456b6c8e0f8f933b9909b6ca8276542692b1601)_
- **type=home, style=solid**  _(key: e2e6858411b5dde5ff61cf9cbc16347ea607afc4)_
- **ic_arrow_forward_bold**  _(key: 0ed68b15fe4df8f17d89b26c800464dae4858e9c)_
- **style=ic_arrow_right**  _(key: bdd8a5ccbc4865fe009bc5635539c8c8a2732b8a)_
- **ic_remodeling_solid**  _(key: 3acfc4edc6fe18fd535cee2b92fa8a164db35fe6)_
- **variants=text_icon, color style=black, icon align=left**  _(key: 86703963a1b26c2b4fb7579e38ea8c831a2fc2ba)_
- **ic_map**  _(key: e45bff670899fef7a1bb6a0f70252819fa92de2d)_
- **state=default**  _(key: 8cc96de9887ca06ca103df94cf8518c1567b23ac)_
- **DailySchedule/TimelineItem/row**  _(key: d3f44a87752b55e92e8d77d7eed8083afdf62a49)_
- **state=empty**  _(key: edd3ecbec5604c38f3c0bf0c23ad84ca17b9639e)_
- **state=disabled, dateType=default**  _(key: 17c23824c2b9c3c03aa2851c22bac14fc6bce037)_
- **state=enabled, dateType=default**  _(key: a7e98df409448c4c29e1ac9b9d6e626e50abe6ed)_
- **state=selected, dateType=default**  _(key: 312f544cd96e5a746cc8d3508d3c553e6472e7fe)_
- **state=disabled, dateType=today**  _(key: 42bef0d005c652680695a3a1c314ff1367a41a17)_
- **state=enabled, dateType=today**  _(key: acb7a89d338ad84e01020f1b7ffda6370b4e2df7)_
- **type=home, style=ghost**  _(key: 922f0b43932d87efee0b455224ade932280c9a20)_
- **type=white+primary**  _(key: 3257624c5ebde2e1e69dfa5f49f811b3b288f522)_
- **mode=dark**  _(key: 26618d9d3dd5dd1170711c4f2d45f92113951aee)_
- **ic_notification_solid**  _(key: 9127222377ade724544caf4e2ced583ad5410dae)_
- **viewType=weekly**  _(key: a5bd233a34fd6e86bbbd7d715cbe94bc876917d5)_
- **size=md(36), icon align=right, emphasis=low, State=enabled, variants_color=primary**  _(key: 15da9950cc1d8e3b8c42807f36b08cc80cb5dc24)_
- **Current=홈**  _(key: e167eebbc47be0b7cf30f0d98797520e8834e0fd)_
- **ic_home_solid**  _(key: 19d20fbc8f35daf7327a53cce805426c51b66d57)_
- **os=ios(x 이상), bg=ghost**  _(key: e9c9a17a92f14179d3ebdd1af3ce027678c450bc)_
- **ic_check_done_solid**  _(key: 7c1e0037e321ce42f1badc6f06708b5b5c968cee)_
- **Type=preview, state=enabled**  _(key: 12ee901d2bf5119dd4117048c8cc773de185c11e)_
- **viewType=monthly**  _(key: deb711bfce8f3579cc51c89936b55c947f2970e8)_
- **state=default**  _(key: c3ef051cf2d2aa99a16b33dd9dd44cc780852df5)_
- **state=empty**  _(key: 4523860e27840a4e2727298f3555ee9a86bf3f6d)_
- **type=basic, level=info, button=no, D_Lines=one line, text align=center**  _(key: fbdac5f19c46992a0543fc878a8cf0abfc6494f3)_
- **ic_idea**  _(key: 8ece8764f1c0da5f665e04493ed675bd6306e330)_
- **size=lg, variants=basic, state=inactive**  _(key: 62a37cd33d4c7673580db93b54eaa72259fd56f4)_
- **size=md, variants=text, state=enabled, icon align=none**  _(key: c737face71053b585b30cc3519e331f532e36f51)_
- **size=lg(48), emphasis=high, State=enabled, icon align=left, variants_color=primary, alignment=center**  _(key: c9c7d7cbef63efac6c19875be6bc76ab44393d4e)_
- **style=ic_check**  _(key: 5ec810894b2e8daa0bf578b03102d00024136d4b)_
- **logo/ic_login_kakao_custom_logo**  _(key: 425b4b8513daee08da16e675f7f0583de062e3c2)_
- **symbol/ic_kakao_custom_logo**  _(key: 3876e756ab449d9c240a989fd4023aaea7f31bcc)_
- **logo/ic_login_apple_custom_logo**  _(key: ca20195e35ded89c56a7057190e4848a61baa482)_
- **symbol/ic_apple_custom_logo**  _(key: 9caf24d46d5c2848957ad32b44bab7a26f63a2e6)_
- **size=lg(48), emphasis=medium, State=enabled, icon align=left, variants_color=primary, alignment=center**  _(key: f59e044fc0958b2beec102a965a6dae116d6b38b)_
- **type=modal, style=ghost**  _(key: 1ec9c72324ecce4343ea725a5cb64cb200c9a038)_
- **size=lg, variants=text_icon, state=enabled, icon align=right**  _(key: 7ffde3dbf6c5784dba342ac3782222054465b338)_
- **ic_download**  _(key: ccdef5af61c27249c8c6fe90a5080c682b754ec5)_
- **Property 1=selected**  _(key: 997d6134d83830c8f1ffd3a218531bdffdbc6a2a)_
- **Property 1=enabled**  _(key: 3c2860c94b537c5bfc06c23b8018c1167ce1e6a6)_
- **variants=number**  _(key: a9491cc4c929512a358a0ba6b173e45c92bc5f21)_
- **Sheet header=Handlebar, button=no**  _(key: 808414bbd2ebd2ce69da51dcd110ac409789949e)_
- **state=Default, Orientation=Vertical, D_Thumb Size=50%**  _(key: 9f981e0e3c77833352da0d4496ef919c4291128d)_
- **state=checked**  _(key: 425442f6a351a3dff0bd7b786927e56ffcb66963)_
- **size=xs(20), emphasis=low, State=enabled, icon align=left, variants_color=primary, alignment=center**  _(key: e9b86c3e27ca93005f7730c2ef7498cda538814c)_
- **states=enabled_off**  _(key: 482e4927260e815b6118534dc141c2ed5f197484)_
- **states=enabled_on**  _(key: a62f2d0ee4d4ad0bb0e25fa48e911110fbebef37)_
- **_item_ic_right**  _(key: 345b2f0f275e9c8e18eb35a04e45d71ba37e0b53)_
- **size=xmd(36사용금지/필요시 문의 필요), state=enabled**  _(key: 62e089c6357d4bdc7d94fea33f07ca292299cf26)_
- **style=ic_notification**  _(key: b91d1faf1a12d16f96a6793c46d705329835cdbe)_
- **style=ic_search**  _(key: fbddbf644306eeb4f037e77b32c9111afadb3e93)_
- **ic_home**  _(key: 6071b813a41433d8a946674bf3267a73519c2f01)_
- **style=ic_shopping**  _(key: 878083f1f7179e65724c2163396b2cde4bbe9fd3)_
- **ic_share**  _(key: 6bf52088d8af9effa6b1fd3b9030a06e5e91c04e)_
- **style=ic_bookmark**  _(key: 773ac7a12930881db6e0b86f29993ccf8c2a962d)_
- **style=ic_alert**  _(key: 6214641d64f8bfda8d1d751531f86482c41f7b53)_
- **ic_category_menu_mo**  _(key: 43731235db159bee13cc187f7986ca972409f9c5)_
- **size=xs, variants=text_icon, state=enabled, icon align=right**  _(key: 3aba19b55d139db92849d23efdc79f969962ec64)_
- **Dialog**  _(key: f33452c1e3018eef431c9b31142fba83b3c202a5)_
- **ic_sort_thumb**  _(key: 64ff46e5529a0ef5505b42a240a52ca8b2d431e3)_
- **DialogSlot_AccessPermission**  _(key: 64012cd365b3917e9662c963a856061ec29a588b)_
- **ic_camera**  _(key: 5f9558c453416fe153835f1c40a820cef6d8bcdb)_
- **variants=style1**  _(key: 67c7ecc11dee410287cc4c1059cf61d3eb1220b5)_
- **type=basic, state=enabled**  _(key: a6f94cb2ba5625e0412fb41796b3af4d26211ee3)_
- **ic_copyright**  _(key: 7e69fc2d6cbd6f308e0606350ec232de071c8ef4)_
- **Current=채팅**  _(key: 6d2e5423ffd9e3be3d4124e287171345c616cad8)_
- **ic_chat_soild**  _(key: 9a9bfd7f16d228a18b285b86035134089b2a6ccb)_
- **iPhone**  _(key: 0e31d3eefb5d0af490f87be241eca76152dff960)_
- **Frame=1**  _(key: 5abcd44a52eeec53c849a9e471b71ebf50530ec8)_
- **ic_arrow_scrolldown**  _(key: b5f107a53126d83c3bf34ddd7871d018043f444b)_
- **Property 1=02.기록**  _(key: 4d00a679283457a140fecfbca3695cc5e5d391db)_
- **Property 1=03.캘린더**  _(key: cbef810b934163221dd1d97ceca93ebf5df2590d)_
- **Property 1=04.채팅**  _(key: 8728425498baff907db69a83e44a3a019166cf1f)_
- **Property 1=05.문서함**  _(key: 5c9a4a29bf34178da106994e904969ab981414de)_
- **type=modal, style=solid**  _(key: cbb8fb1962a24ce8ac7064f7137507c46a2a46d0)_
- **type=Vertical, primary=line4, color=gray_100, stroke=1line**  _(key: 20b31a1c44aeef32d0324647de4ad21ef10bd621)_
- **size=lg, variants=underline, state=enabled, icon align=none**  _(key: 6ad31143b2906d5e6f9a916788fb3f051e69ac93)_
- **variants=style1, Botton Style=red**  _(key: 8182fd314045ab7ea3f26c8d1859a1467fcd9e9c)_
- **variants=style3**  _(key: 385a2c7f792333135de63af0c8f51cbbcf51cd48)_
- **type=Vertical, primary=line3, color=gray_200, stroke=1line**  _(key: bb684ea7fe391c4fb3d9bfd1784897da0d368ecf)_
- **type=Accent, state=enabled**  _(key: 350a46093ac2eeb9759a2ce35d90352d6dd5c1af)_
- **type=sub, style=solid**  _(key: e98bf46e196dbb27ec9836214cfd35a094286e70)_
- **State=Closed**  _(key: f928790544e591cc873446d293787a8208cb1cae)_
- **type=primary**  _(key: 5a3da8b90f6c457fc72f2f400649e8c4ff3f1ad7)_
- **size=xs, variants=text, state=enabled, icon align=none**  _(key: 7ad042be0480b59358a61eba9ff78d74eed61f64)_
- **size=md, variants=underline, state=enabled, icon align=none**  _(key: 9b6c3795f5174a037b7134551148a31c03b63cbd)_
- **variants=line, H size=lg(40), color=gray_200**  _(key: f2f68c70a2dca0681f043e80d2ae50fe4becb21b)_
- **symbol/ic_kakao_txt_custom_logo**  _(key: 87138271b03cdf4cef963a2478ee78b39877517b)_
- **variants=solid, H size=lg(40), color=gray_100**  _(key: c433e7c2442aba5f2cea2666f39c8a4b6fe6e3d8)_
- **variants=solid, H size=md(36), color=gray_200**  _(key: 6c03d52121bdf1c2e5214f0617777ce64c503072)_
- **type=collapsed**  _(key: d99049922a0d281920176387eb65bba6754bcec9)_
- **variants=default_person, size=xs**  _(key: 0dc5e0a976bcfff78763d08af2a9d95ee56d1c34)_
- **Type=Popup**  _(key: 6cd1a923c044308cd9c4610db47c7f95cc944939)_
- **Popup**  _(key: f33452c1e3018eef431c9b31142fba83b3c202a5)_
- **PopupSlot**  _(key: 8c271461a5158e804fd929a3d2b87915f4144d4b)_
- **Type=Comfirm**  _(key: 19d55814df55810afb4b82a5da485a3fa66b84ab)_
- **type=home, style=solid**  _(key: e2e6858411b5dde5ff61cf9cbc16347ea607afc4)_
- **leftItems**  _(key: 285703da3f0d52c3a8075105b6af6f08746daee2)_
- **type=home, style=ghost**  _(key: 922f0b43932d87efee0b455224ade932280c9a20)_
- **type=modal, style=solid**  _(key: cbb8fb1962a24ce8ac7064f7137507c46a2a46d0)_
- **State=Opend**  _(key: 4c8a460de7ccf81e02d4afb62f6ab847712e9aeb)_
- **style=ic_arrow_up_bold**  _(key: 1822d17ca0644bf4b2ea59cb292bf59a3494385d)_
- **size=xs, variants=underline, state=enabled, icon align=none**  _(key: 598732c059179dae208089d6a097f2e1cfd1b960)_
- **state=ongoing_consult**  _(key: 2c341a95612ea226b251e0fbe286ec8dd390af9d)_
- **state=prep-interior**  _(key: 4f75c0cee5bba8c7487716be7aac48ae46f73783)_
- **state=complet-contract**  _(key: 967af88f2b366e955d425be7698e3181492fa43b)_
- **state=cancel**  _(key: 9e16205dd3bff1ca86bae30f21c034a2579221ec)_
- **style=ic_paperclip_regular**  _(key: f358b92e0a4bed8df8df50de9e0166d694400a32)_
- **ic_my_solid**  _(key: 5f5b1647f1f272c76dd3ce71dec24a778b23d44d)_
- **ic_hashtag_bold**  _(key: 60b52d3702d9534e8a75556df1032a4371a271bc)_
- **ic_education_solid**  _(key: fafa63a96f8f5cefb2ebc7c8182eee3892c9cf26)_
- **style=ic_arrow_left**  _(key: 9747ab9c2bcb4e015856b9e76033b669fd181426)_
- **ic_paper_cancel_solid**  _(key: 56e6409117312b3db620ea9d8efd6f5eabfeb292)_
- **BasicButton/ic_opened_file**  _(key: fb6f3ecbe10dfd8b7e81585207708d7b57f07fd8)_
- **size=lg(48), icon align=left, emphasis=low, State=disabled, variants_color=primary**  _(key: daff6d8d12988d7fc89f0a324cdca2b435bed40a)_
- **size=lg(48), icon align=left, emphasis=mediuma, State=disabled, variants_color=primary**  _(key: 07bbe0dba2febf9833952c433b8b3d8f866a3862)_
- **size=lg(48), icon align=left, emphasis=low, State=pressed, variants_color=primary**  _(key: 64e1738f3105f9624ada6b85bc1a51a2ec348eed)_
- **size=lg(48), icon align=left, emphasis=mediuma, State=pressed, variants_color=primary**  _(key: 633f36d071560049210ff947f359cb15dd115223)_
- **size=lg(48), icon align=left, emphasis=high, State=pressed, variants_color=primary**  _(key: 8af5769d6d0d5a7db6b9d5f34e9098ceb7be332f)_
- **size=lg(48), icon align=left, emphasis=low, State=enabled, variants_color=primary**  _(key: 485402986b3e06718cdde411900a00309cbdf6f3)_
- **size=md(36), icon align=left, emphasis=low, State=disabled, variants_color=primary**  _(key: 815d80802391c6348eceece795463243ecefac14)_
- **size=md(36), icon align=left, emphasis=mediuma, State=disabled, variants_color=primary**  _(key: 72d4c7e38fac57323333624508fd9ba30bdf86cd)_
- **size=md(36), icon align=left, emphasis=high, State=disabled, variants_color=primary**  _(key: 6cae244407ca5a320c1f716139b4e0ad36ffaf28)_
- **size=md(36), icon align=left, emphasis=low, State=pressed, variants_color=primary**  _(key: e771b2ea3fb509a8925ed089efbc5bb1600da061)_
- **size=md(36), icon align=left, emphasis=mediuma, State=pressed, variants_color=primary**  _(key: 0f4bbac9cf423db22849e1bee7b11431a43bd562)_
- **size=md(36), icon align=left, emphasis=high, State=pressed, variants_color=primary**  _(key: d2964b6813b2532c8067f62a5641c9570a17ac50)_
- **size=md(36), icon align=left, emphasis=low, State=enabled, variants_color=primary**  _(key: 6098a1ed5b7123a70cb4557023ad6d6daf5c4084)_
- **size=md(36), icon align=left, emphasis=mediuma, State=enabled, variants_color=primary**  _(key: 0a6793140d92eb2dc44773d1658d94dcde81f9f2)_
- **size=md(36), icon align=left, emphasis=high, State=enabled, variants_color=primary**  _(key: c4211bb5fc69a501b90f227ed1d3cb26d8b029f9)_
- **size=lg, variants=text, state=enabled, icon align=none**  _(key: 70a7adde7c0f21028aad90a3bd21dd8ccf846626)_
- **size=lg, variants=text, state=pressed, icon align=none**  _(key: 2c26b347242b7bd31d7443d0b3aa367cca20d3b4)_
- **size=lg, variants=text_icon, state=pressed, icon align=right**  _(key: c339cc0eb385ab50924e7262eca320d6cdcd2fc0)_
- **size=md, variants=text_icon, state=pressed, icon align=right**  _(key: 6e531a9368c5e50aedf8e2e3fcde6bf50aad7745)_
- **size=md, variants=text, state=pressed, icon align=none**  _(key: 273963410c23f89fbc48e7789cc1a4b74e25d40c)_
- **size=xs, variants=text_icon, state=pressed, icon align=right**  _(key: b7384994e9c99c3d189ac44b457d0e3772e614af)_
- **size=lg, variants=underline, state=pressed, icon align=none**  _(key: 48c947160858fa9bb4f954a0ee0d3ddd93f7f7db)_
- **size=md, variants=underline, state=pressed, icon align=none**  _(key: 69e1e70c5d8341d74cacb262b09d734577dc3373)_
- **size=xs, variants=underline, state=pressed, icon align=none**  _(key: 132bd318a83824dd2d0de923b524e4e156df6a91)_
- **size=xs, variants=text, state=pressed, icon align=none**  _(key: 2e505b83b8a4235c62cfd5c9ef6e3df0c764f584)_
- **size=lg(48), emphasis=low, State=disabled, icon align=left, variants_color=primary, alignment=center**  _(key: 53e4d55cedd1865730490c259e8bc9308161fb0a)_
- **size=lg(48), emphasis=medium, State=disabled, icon align=left, variants_color=primary, alignment=center**  _(key: 90fc1905068ca1877b9d324881373bfb2d6c8d3a)_
- **size=lg(48), emphasis=high, State=disabled, icon align=left, variants_color=primary, alignment=center**  _(key: 283264f6deac31cf03f9fa0d03612305359a1ba5)_
- **size=lg(48), emphasis=low, State=pressed, icon align=left, variants_color=primary, alignment=center**  _(key: 3973efff37409cd3f2e78edee52de935eb8e6c6c)_
- **size=lg(48), emphasis=medium, State=pressed, icon align=left, variants_color=primary, alignment=center**  _(key: 412b10860a6c0e01961fef1909e7db336de9f1d2)_
- **size=lg(48), emphasis=high, State=pressed, icon align=left, variants_color=primary, alignment=center**  _(key: 2e4912d14763da27ad00c44bd87c6873fffe29fa)_
- **size=lg(48), emphasis=low, State=enabled, icon align=left, variants_color=primary, alignment=center**  _(key: 46f67fff4135048830cb5aea31dfc3f3be61d5d2)_
- **size=xs(20), emphasis=medium, State=enabled, icon align=left, variants_color=primary, alignment=center**  _(key: ad9b709bcc00bf44253fe4442476e442bd67a6f7)_
- **size=xs(20), emphasis=high, State=enabled, icon align=left, variants_color=primary, alignment=center**  _(key: c2d83862109f4a4d0ed6c48f62eb94ac46794131)_
- **size=xs(20), emphasis=low, State=pressed, icon align=left, variants_color=primary, alignment=center**  _(key: 9e38a72476d29dea89f42af568504d84d227c7d7)_
- **size=xs(20), emphasis=medium, State=pressed, icon align=left, variants_color=primary, alignment=center**  _(key: ddea18ccb44096f391afeee8a17d623dc50e9195)_
- **size=xs(20), emphasis=high, State=pressed, icon align=left, variants_color=primary, alignment=center**  _(key: 185d3290098c60b418463651509c5f1288e4a95d)_
- **size=xs(20), emphasis=low, State=disabled, icon align=left, variants_color=primary, alignment=center**  _(key: ce6bd292cd33be14a9e95546f9229e6aa343c829)_
- **size=xs(20), emphasis=medium, State=disabled, icon align=left, variants_color=primary, alignment=center**  _(key: e7b52ff9780b49787896574fda3269e71dbf1e60)_
- **size=xs(20), emphasis=high, State=disabled, icon align=left, variants_color=primary, alignment=center**  _(key: 336ce45f590a34af773faf42ee240146c04edf7c)_
- **size=md(32), state=enabled**  _(key: acac8308b42ca4c72a46264f1bc5bcd19d828171)_
- **size=md(32), state=disabled**  _(key: 3259d67c62d62955b031807d304f438ec3c36bb3)_
- **size=md(32), state=pressed**  _(key: fd132925600a910c1345335f2a7a9317a4981629)_
- **size=lg(40), state=enabled**  _(key: abe83d7b00dea28dbcad825043062dd67da7484a)_
- **size=lg(40), state=disabled**  _(key: ddff51cf443810789ea47061afc7d4c96837c2f0)_
- **size=xmd(36사용금지/필요시 문의 필요), state=disabled**  _(key: bb6ee70cf2493650e6954c7f5f192b97cc3c1cf8)_
- **size=lg(40), state=pressed**  _(key: 215d0ad9dab3a4f0960da797e82a4e70242451d9)_
- **size=xmd(36사용금지/필요시 문의 필요), state=pressed**  _(key: 54ee4e99538543eb0d3271bb707b84b39038c967)_
- **size=sm(24), state=disabled**  _(key: 66dd5e1e8a06ff17759916e16b7a50d87d8f0d49)_
- **size=sm(24), state=pressed**  _(key: d3d891bf921645fdd2db0eae1b20baa1ee8787ae)_
- **size=xs(20), state=disabled**  _(key: a48630b11a74795d1265b6b131d7a1cb1e0208f2)_
- **size=xs(20), state=pressed**  _(key: 7ce9037eccadf16d49e7870ab685d888935b6e50)_
- **size=xxsm(16), state=disabled**  _(key: ae942905b50ddeaf7c6c362e72679ee249297dfc)_
- **size=xxsm(16), state=pressed**  _(key: 959dd607a8faeafe59c5ddfaf12978c1f49de592)_
- **상담일지**  _(key: 2bdf4f4a510b5ec235d581c590bfb4eee74e0b2b)_
- **공사일지**  _(key: 65cb094e7e98625eeb8e8b21bab7c55c29d0af8f)_
- **배너**  _(key: 1c499775a700db72c4faa69a3d1eb66e8dae3873)_
- **문서함**  _(key: 00237c0f81cb231a81fd45dcde9211883d1817b8)_
- **type=Nomal**  _(key: 1ab037b1ec01b818903a640a7e9b6093c0415467)_
- **title**  _(key: 48fc27f8266cf1105021fe1e5237dc92ff655a84)_
- **size=small(4)**  _(key: 02544c80a7917921b29e29ee89cef62557ca7f9b)_
- **state=enabled**  _(key: 6caf396cf95247df219d459cfb181ffed910ccd1)_
- **Property 1=yes**  _(key: bf17418bb9c58c332bd5708c89a4e9e17e570a4a)_
- **name=kitchen**  _(key: 8bce3af45c3598fb2c5503deb15a08b4e1a6710f)_
- **review_illust_thumb/test/kitchen**  _(key: 047d8793a31cf2a8f33cd640d6778ff00e3a24af)_
- **Property 1=selected**  _(key: 62e0c021b4e69d80108ee8b674b9657316b39f2a)_
- **state=selected**  _(key: e5659a64517b5f388f1b6db6f7c3a19b69ea0d1d)_
- **state=enabled**  _(key: a4a30f82571cd275cd0a7fc94f476ca37c0c1d91)_
- **<NudgingFlag>**  _(key: e27bd31727b2b9dc8ae2bcd0560f19202d42f39f)_
- **style=ic_plus**  _(key: e495f8f26702a2df4bb772943cd8643593f6df66)_
- **ic_thumb_up**  _(key: 6d88637934fa44221f2a2951047347924aa60a75)_
- **type=textarea**  _(key: 768f58575cbff117a6ca92839f4c996dbf3bc13b)_
- **type=basic, state=inactive**  _(key: ca11524e18347f88fb6711a29d0f947f5494f3e4)_
- **variants=style2, D_btn=1, D_icon=none, system=한샘몰**  _(key: 0c1bb4d3172842e3f2cd6d3e22b75bb4e19010d8)_
- **os=ios**  _(key: 5f2456cf40799558ac94ff201762a3c3f06c9087)_
- **style=basic**  _(key: 2e8de4d13884e0930d20a113c767b06c810dde9f)_
- **type=default, style=basic**  _(key: 480ec7654dbebf62f0d7bac3896273e54c4e30b0)_
- **ic_arrow_back**  _(key: 2f66520b343619c9dd56b3b1bf92583c2e855bd9)_

## 🎨 Styles

| 이름 | 타입 | 설명 |
|------|------|------|
| color_chip/Primary | FILL | Primary |
| color_chip/gray_500 | FILL | - |
| icon_grid | GRID | - |
| color_chip/Primary | FILL | Primary |
| color_chip/red_500(red) | FILL | - |
| subtitle1(SemiBold(600)) | TEXT | - |
| icon_guide | GRID | - |
| color_chip/white | FILL | - |
| subtitle2(SemiBold(600)) | TEXT | - |
| color_chip/gray_100 | FILL | - |
| caption3(Regular(400)) | TEXT | - |
| color_chip/gray_50 | FILL | - |
| color_chip/gray_800 | FILL | - |
| color_chip/gray_200 | FILL | - |
| body2(Regular(400)) | TEXT | - |
| color_chip/gray_600 | FILL | - |
| caption1(Regular(400)) | TEXT | - |
| dimmed/light/dimmed_60 | FILL | - |
| color_chip/gray_50 | FILL | - |
| color_chip/red_500(red) | FILL | - |
| shadow_10% | EFFECT | - |
| label/sm_m (Medium(500)) | TEXT | - |
| label/sm_b(bold(700)) | TEXT | - |
| color_chip/gray_700 | FILL | - |
| color_chip/white | FILL | - |
| body1(Regular(400)) | TEXT | - |
| color_chip/gray_600 | FILL | - |
| body3(Regular(400)) | TEXT | - |
| color_chip/blue_500(blue) | FILL | - |
| Elevated Card | EFFECT | - |
| etc/etc02(Medium(500)) | TEXT | - |
| label/lg_r(Regular(400)) | TEXT | - |
| color_chip/gray_300 | FILL | - |
| color_chip/gray_700 | FILL | - |
| color_chip/gray_300 | FILL | - |
| color_chip/gray_500 | FILL | - |
| dimmed(사용x)/dimmed_2 | FILL | - |
| label/lg_m (Medium(500)) | TEXT | - |
| label/md_m (Medium(500)) | TEXT | - |
| subtitle3(SemiBold(600)) | TEXT | - |
| label/xs_r(Regular(400)) | TEXT | - |
| color_chip/gray_200 | FILL | - |
| etc/etc05(bold(700)) | TEXT | - |
| label/md_r(Regular(400)) | TEXT | - |
| label/xlg_r(Regular(400)) | TEXT | - |
| color_chip/blue_500(blue) | FILL | - |
| color_chip/red_50(light) | FILL | - |
| color_chip/yellow_50(light) | FILL | - |
| color_chip/blue_50(light) | FILL | - |
| etc/etc01(light(300)) | TEXT | - |
| headline5(bold(700)) | TEXT | - |
| shadow_15% | EFFECT | - |
| color_chip/gray_400 | FILL | - |
| label/xs_m (Medium(500)) | TEXT | - |
| dimmed/light/dimmed_10 | FILL | - |
| dimmed(사용x)/dimmed_3 | FILL | - |
| Neutral/01 Black | FILL | - |
| dimmed/dark/dimmed_70 | FILL | - |
| dimmed(사용x)/dimmed_1 | FILL | - |
| color_chip/red_50(light) | FILL | - |
| color_chip/red_100 | FILL | - |
| color_chip/gray_40 | FILL | - |
| headline6(bold(700)) | TEXT | - |
| headline3(Medium(500)) | TEXT | - |
| headline4(SemiBold(600)) | TEXT | - |
| etc/etc03(bold(700)) | TEXT | - |
| etc/etc04(SemiBold(600)) | TEXT | - |
| dimmed/dark/dimmed_50 | FILL | - |
| accent_colors/Primary | FILL | - |
| caption2(Regular(400)) | TEXT | - |
| color_chip/gray_800 | FILL | - |
| color_chip/gray_100 | FILL | - |
| Neutral/02 Caption | FILL | - |
| label/sm_r(Regular(400)) | TEXT | - |
| accent_colors/Primary | FILL | - |
| color_chip/red_200 | FILL | - |
| label/xlg_m(Medium(500)) | TEXT | - |
| color_chip/gray_40 | FILL | - |

