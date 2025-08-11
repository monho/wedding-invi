<script lang="ts">
  import AccountItem from './AccountItem.svelte';
  import { AccountInfo } from '../resource/input';

  const {
    groomName, groomBank, groomAccountNum, groomKakaoURL,
    groomFatherName, groomFatherBank, groomFatherAccountNum, groomFatherKakaoURL,
    groomMotherName, groomMotherBank, groomMotherAccountNum, groomMotherKakaoURL,
    brideName, brideBank, brideAccountNum, brideKakaoURL,
    brideFatherName, brideFatherBank, brideFatherAccountNum, brideFatherKakaoURL,
    brideMotherName, brideMotherBank, brideMotherAccountNum, brideMotherKakaoURL
  } = AccountInfo;

  // 1) 표기용 부모 합치기
  const groomParentsLabel = `신랑 측 부 ${groomFatherName}, 모 ${groomMotherName}`;
  const brideParentsLabel = `신부 측 부 ${brideFatherName}, 모 ${brideMotherName}`;

  // 2) 어떤 예금주 계좌를 노출할지 선택 (원하시는 쪽으로 바꾸세요)
  // 예: 신랑측은 어머니 계좌, 신부측은 아버지 계좌
  const groomSelected = {
    bank: groomMotherBank,
    accountNum: groomMotherAccountNum,
    kakaoURL: groomMotherKakaoURL,
    holder: groomMotherName, // 예금주
  };

  const brideSelected = {
    bank: brideFatherBank,
    accountNum: brideFatherAccountNum,
    kakaoURL: brideFatherKakaoURL,
    holder: brideFatherName, // 예금주
  };

  // 3) AccountItem에 "name"에는 합친 부모표시를, 은행/계좌는 선택한 예금주 정보로 전달
  //    AccountItem이 name을 예금주로 쓰는 구조라면, 아래처럼 표시용/예금주를 분리 렌더하세요:
  //    - 표시: {groomParentsLabel}
  //    - 실제 예금주 표기: {groomSelected.bank}({groomSelected.holder})
</script>

<div class="py-5 mb-20">
  <h1 class="text-3xl md:text-3xl m-5 font-bold text-center text-stone-600">마음 전하실 곳</h1>
  <details class="text-center m-2">
    <summary class="cursor-pointer text-lg">신랑, 신부측 계좌번호</summary>
    <AccountItem
      name={brideName}
      bank={groomBank}
      accountNum={groomAccountNum}
      kakaoURL={groomSelected.kakaoURL}
    
    />
  </details>
  <details class="text-center m-2">
    <summary class="cursor-pointer text-lg">신랑측 부모님 계좌번호</summary>
    <AccountItem
      name={groomParentsLabel}
      bank={groomSelected.bank}
      accountNum={groomSelected.accountNum}
      kakaoURL={groomSelected.kakaoURL}
    
    />
  </details>

  <details class="text-center m-2">
    <summary class="cursor-pointer text-lg">신부측 부모님 계좌번호</summary>
    <AccountItem
      name={brideParentsLabel}
      bank={brideSelected.bank}
      accountNum={brideSelected.accountNum}
      kakaoURL={brideSelected.kakaoURL}
    />
  </details>
</div>
