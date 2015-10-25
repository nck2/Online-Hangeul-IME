/*
※ 반드시 첫가끌 방식으로 한글을 조합하는 자판은 type_name 끝에 '-y'를 붙인다.
※ 신세벌식 자판은 type_name 앞에 'Sin3-'를 붙인다.
※ 본래 방식에서 벗어난 바꾼꼴 신세벌식 자판은 type_name 앞에 'Sin3b-'를 붙인다.
※ 갈마들이 타법을 쓰는 공병우식 배열은 type_name 끝에 '_gm'을 붙인다.
※ 모아치기 방식으로 쓰는 세벌식 자판은 type_name 앞에 '3m-'를 붙인다.
※ 타자기 자판은 벌 수 다음에 't-'를 붙인다. ('3t-', 4t-')
*/

function additional_layouts() {
	var KE; // 한글·영문 상태 (Ko:한글, En:영문)
	var type_name; // 자판 배열 이름 (OHI에서 쓰는 이름)
	var full_name; // 자판 배열 이름
	var layout; // 기본 배열
	var sublayout; // 덧붙여 쓰는 배열	
	var sign_extension_layout; // 기호 확장 배열
	var hangeul_extension_layout;	// 한글 확장 배열
	var hangeul_combination_table; // 한글 낱자 조합 규칙 (이어치기)
	var moachigi_combination_table; // 모아치기 자판의 한글 조합 규칙 (낱자 차례를 따지지 않음)
	var multikey_combination_table;	// 모아치기 자판의 줄여녛기 조합 규칙 (다른 조합 규칙보다 먼저 적용됨)
	var link;
}

additional_keyboard_layout_table_info();
input_hangeul_combination_table_info();

var additional_layouts=[];

additional_layouts.push({KE: 'Ko', type_name: '2-GimJunSeong', full_name: '김준성 풀어쓰기 수동 타자기 (1940년대)', layout: K2_GimJunSeong_typewriter_layout, link: 'http://pat.im/1024'});
additional_layouts.push({KE: 'Ko', type_name: '2-HGS', full_name: '한당욱·김철수·신한종 풀어쓰기 전신 타자기 (1952)', layout: K2_HGS_1952_teletypewriter_layout, link: 'http://pat.im/1025'});
additional_layouts.push({KE: 'Ko', type_name: '2-Jang', full_name: '장봉선 풀어쓰기 전신 타자기 (1953, 체신부 통신용)', layout: K2_Jang_1953_teletypewriter_layout, link: 'http://pat.im/1025'});
additional_layouts.push({KE: 'Ko', type_name: '2-Bak-Song', full_name: '박영효·송계범 전신 타자기 자판 설계안 (1968)', layout: K2_Bak_Song_1968_layout, link: 'http://pat.im/1025'});
additional_layouts.push({KE: 'Ko', type_name: '2-Gaon26KM', full_name: '가온한글26KM', layout: K2_Gaon_KSX5002_layout, link: 'http://cafe.daum.net/kbd-p/8OTK/10'});

additional_layouts.push({KE: 'Ko', type_name: '3-89', full_name: '3-89', layout: K3_89_layout, link: ''});
additional_layouts.push({KE: 'Ko', type_name: '3-2011', full_name: '3-2011', layout: K3_2011_layout, sign_extension_layout: K3_2011_sign_extension_layout, link: 'http://pat.im/855'});
additional_layouts.push({KE: 'Ko', type_name: '3-2011-y', full_name: '3-2011 옛한글', layout: K3_2011_layout, sign_extension_layout: K3_2011y_sign_extension_layout, hangeul_extension_layout: K3_2012y_hangeul_extension_layout, link: 'http://pat.im/908'});
additional_layouts.push({KE: 'Ko', type_name: '3-91_noshift', full_name: '3-91 순아래', layout: K3_3_91_noshift_layout, hangeul_combination_table: K3_3_91_noshift_combination_table, link: 'http://text.youknowone.org/post/106848470561/3final-noshift'});
additional_layouts.push({KE: 'Ko', type_name: '3-Gimguk-38A-y', full_name: '김국 38A 옛한글', layout: K3_Gimguk_38Ay_layout, hangeul_combination_table: Gimguk38Ay_combination_table, link: 'http://cafe.daum.net/kbd-p/8OTK/6'});

additional_layouts.push({KE: 'Ko', type_name: '314_proposal', full_name: '한글문화원 314 자판안', layout: K3_14_proposal_layout, link: 'http://cafe.daum.net/3bulsik/JMKX/4'});
additional_layouts.push({KE: 'Ko', type_name: '314_proposal_gm', full_name: '한글문화원 314 자판안 (+ 갈마들이)', layout: K3_14_proposal_layout, link: 'http://cafe.daum.net/3bulsik/JMKX/4'});
additional_layouts.push({KE: 'Ko', type_name: '3-2014', full_name: '3-2014', layout: K3_2014_layout, sublayout: K3_2014_sublayout, sign_extension_layout: K3_2012y_sign_extension_layout, link: 'http://pat.im/1088'});
additional_layouts.push({KE: 'Ko', type_name: '3-2014-y', full_name: '3-2014 옛한글', layout: K3_2014_layout, sign_extension_layout: K3_2012y_sign_extension_layout, hangeul_extension_layout: K3_2012y_hangeul_extension_layout, link: 'http://pat.im/1090'});
additional_layouts.push({KE: 'Ko', type_name: '3-2015', full_name: '3-2015', layout: K3_2015_layout, hangeul_combination_table: K3_2015_combination_table, sublayout: K3_2015_sublayout, link: 'http://cafe.daum.net/3bulsik/JMKX/34'});
additional_layouts.push({KE: 'Ko', type_name: '3-2015-y', full_name: '3-2015 옛한글', layout: K3_2015y_layout, hangeul_combination_table: K3_2015y_combination_table, link: 'http://cafe.daum.net/3bulsik/JMKX/36'});
additional_layouts.push({KE: 'Ko', type_name: '3-2015M', full_name: '3-2015M', layout: K3_2015M_layout, sublayout: K3_2015M_sublayout, hangeul_combination_table: K3_2015M_combination_table, link: 'http://cafe.daum.net/3bulsik/JMKX/46'});

additional_layouts.push({KE: 'Ko', type_name: 'Sin3-1995', full_name: '신세벌식 1995 (신광조 원안)', layout: K3_Sin3_1995_layout, link:'http://pat.im/1104'});
additional_layouts.push({KE: 'Ko', type_name: 'Sin3-BGN', full_name: '박경남 신세벌식', layout: K3_Sin3_BGN_layout});
additional_layouts.push({KE: 'Ko', type_name: 'Sin3-2012', full_name: '신세벌식 2012', layout: K3_Sin3_2012_layout, sublayout: K3_Sin3_2012_sublayout, link: 'http://pat.im/978'});

additional_layouts.push({KE: 'Ko', type_name: 'Sin3b-2015', full_name: '바꾼꼴 신세벌식 2015', layout: K3_Sin3b_2015_layout, hangeul_combination_table: K3_Sin3b_2015_combination_table, link: 'http://sebeol.org/gnuboard/bbs/board.php?bo_table=lab&wr_id=28'});
additional_layouts.push({KE: 'Ko', type_name: 'Sin3b-M', full_name: '바꾼꼴 신세벌식 M', layout: K3_Sin3b_M_layout, link: 'http://cafe.daum.net/3bulsik/JMKX/95'});

additional_layouts.push({KE: 'Ko', type_name: '3m-Anmatae', full_name: '안마태 소리 글판', layout: K3_Anmatae_layout, hangeul_combination_table: K3_Anmatae_combination_table, link: ''});
additional_layouts.push({KE: 'Ko', type_name: '3-Anmatae', full_name: '안마태 소리 글판 (이어치기 방식)', layout: K3_Anmatae_layout, hangeul_combination_table: K3_Anmatae_combination_table, link: ''});
additional_layouts.push({KE: 'Ko', type_name: '3m-Moa2014', full_name: '모아치기 2014 (세모이 옛 배열)', layout: K3_Moachigi_2014_layout, sublayout: K3_Moachigi_2014_sublayout, hangeul_combination_table: K3_Moachigi_2014_combination_table});
additional_layouts.push({KE: 'Ko', type_name: '3m-Moa2015', full_name: '세모이 (모아치기 2015)', layout: K3_Moachigi_2015_layout, sublayout: K3_Moachigi_2015_sublayout, multikey_combination_table: K3_Moachigi_2015_multikey_combination_table, moachigi_combination_table: K3_Moachigi_2015_combination_table, link: 'http://ssg.wo.tc/220239514856'});
additional_layouts.push({KE: 'Ko', type_name: '3m-Semoi', full_name: '세모이 (모아치기 2015)', layout: K3_Moachigi_2015_layout, sublayout: K3_Moachigi_2015_sublayout, multikey_combination_table: K3_Moachigi_2015_multikey_combination_table, moachigi_combination_table: K3_Moachigi_2015_combination_table, link: 'http://ssg.wo.tc/220239514856'});

additional_layouts.push({KE: 'Ko', type_name: '4t-Pyojun1969', full_name: '1969 표준 네벌식 타자기 (1969)', layout: K4_Pyojun_1969_Typewriter_layout, link: 'http://pat.im/965'});
additional_layouts.push({KE: 'Ko', type_name: '3t-Oesol', full_name: '외솔 타자기 101 (1981, 최동식·김광성)', layout: K3_Oesol_Typewriter_layout, hangeul_combination_table: K3_Oesol_Typewriter_combination_table, link: 'http://pat.im/1026'});
additional_layouts.push({KE: 'Ko', type_name: '4t-Pyojun1985', full_name: '1985 표준 배열 기계식 타자기', layout: K4_Pyojun_1985_Typewriter_layout, link: 'http://pat.im/1026'});

function additional_keyboard_layout_table_info() {
	K2_GimJunSeong_typewriter_layout = [
		0x0000, //0x0021,	/* 0x21 exclam: exclamation mark */
		0x003a, /* 0x22 quotedbl: colon */
		0x0033,	/* 0x23 numbersign: 3 */
		0x0034,	/* 0x24 dollar: 4 */
		0x0035,	/* 0x25 percent: 5 */
		0x0037,	/* 0x26 ampersand: 7 */
		0x116c,	/* 0x27 apostrophe: jungseong oe */
		0x0039,	/* 0x28 parenleft: 9 */
		0x0028,	/* 0x29 parenright: left parenthesis */
		0x0038,	/* 0x2A asterisk: 8 */
		0x002b,	/* 0x2B plus: plus sign */
		0x116e,	/* 0x2C comma: jungseong u */
		0x1170,	/* 0x2D minus: jungseong we */
		0x1172,	/* 0x2E period: jungseong yu */
		0x1171,	/* 0x2F slash: jungseong wi */
		0x116f,	/* 0x30 0: jungseong weo */
		0x0000,	/* 0x31 1: */
		0x0022, /* 0x32 2: quotation mark */
		0x0040,	/* 0x33 3: commertial at */
		0x0027,	/* 0x34 4: apostrophe */
		0x0025,	/* 0x35 5: percent */
		0x002e,	/* 0x36 6: period */
		0x002c,	/* 0x37 7: comma */
		0x116a,	/* 0x38 8: jungseong wa */
		0x116b,	/* 0x39 9: jungseong wae */
		0x003f,	/* 0x3A colon: question mark */
		0x1168,	/* 0x3B semicolon: jungseong ye */
		0x007e,	/* 0x3C less: tilde */
		0x003d,	/* 0x3D equal: equals sign */
		0x002f,	/* 0x3E greater: slash */
		0x005f,	/* 0x3F question: underscore */
		0x0032,	/* 0x40 at: 2 */
		0x0041,	/* 0x41 A */
		0x0042,	/* 0x42 B */
		0x0043,	/* 0x43 C */
		0x0044,	/* 0x44 D */
		0x0045,	/* 0x45 E */
		0x0046,	/* 0x46 F */
		0x0047,	/* 0x47 G */
		0x0048,	/* 0x48 H */
		0x0049,	/* 0x49 I */
		0x004a,	/* 0x4A J */
		0x004b,	/* 0x4B K */
		0x004c,	/* 0x4C L */
		0x004d,	/* 0x4D M */
		0x004e,	/* 0x4E N */
		0x004f,	/* 0x4F O */
		0x0050,	/* 0x50 P */
		0x0051,	/* 0x51 Q */
		0x0052,	/* 0x52 R */
		0x0053,	/* 0x53 S */
		0x0054,	/* 0x54 T */
		0x0055,	/* 0x55 U */
		0x0056,	/* 0x56 V */
		0x0057,	/* 0x57 W */
		0x0058,	/* 0x58 X */
		0x0059,	/* 0x59 Y */
		0x005A,	/* 0x5A Z */
		0x1164,	/* 0x5B bracketleft: jungseong yae */
		0x005c,	/* 0x5C backslash: backslash */
		0x0000,	/* 0x5D bracketright: */
		0x0036,	/* 0x5E asciicircum: 6 */
		0x0029,	/* 0x5F underscore: right parenthesis */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1105,	/* 0x61 a: choseong lieul */
		0x110c,	/* 0x62 b: choseong jieuj */
		0x110f,	/* 0x63 c: choseong kieuk */
		0x1102,	/* 0x64 d: choseong nieun */
		0x1107,	/* 0x65 e: choseong bieub */
		0x1100,	/* 0x66 f: choseong gieug */
		0x1112,	/* 0x67 g: choseong hieuh */
		0x1163,	/* 0x68 h: jungseong ya */
		0x1175,	/* 0x69 i: jungseong i */
		0x1161,	/* 0x6A j: jungseong a */
		0x1165,	/* 0x6B k: jungseong eo */
		0x1167,	/* 0x6C l: jungseong yeo */
		0x1169,	/* 0x6D m: jungseong o */
		0x116d,	/* 0x6E n: jungseong yo */
		0x1166,	/* 0x6F o: jungseong e */
		0x1162,	/* 0x70 p: jungseong ae */
		0x00b0,	/* 0x71 q: degree sign */
		0x1109,	/* 0x72 r: choseong sieus */
		0x1103,	/* 0x73 s: choseong dieud */
		0x110b,	/* 0x74 t: choseong ieung */
		0x1173,	/* 0x75 u: jungseong eu */
		0x110e,	/* 0x76 v: choseong chieuch */
		0x1106,	/* 0x77 w: choseong mieum */
		0x1110,	/* 0x78 x: choseong tieut */
		0x1174,	/* 0x79 y: jungseong eui */
		0x1111,	/* 0x7A z: choseong pieup */
		0x002d,	/* 0x7B braceleft: minus sign */
		0x007c,	/* 0x7C bar: vertical line(bar) */
		0x0000,	/* 0x7D braceright: */
		0x0000 	/* 0x7E asciitilde: */
	];

	K2_HGS_1952_teletypewriter_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x0022,	/* 0x22 quotedbl: quotatioin mark */
		0x0023,	/* 0x23 numbersign: number sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x0026,	/* 0x26 ampersand: ampersand */
		0x0027,	/* 0x27 apostrophe: apostrophe */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x002a,	/* 0x2A asterisk: asterisk */
		0x002b,	/* 0x2B plus: plus sign */
		0x002c,	/* 0x2C comma: comma */
		0x002d,	/* 0x2D minus: minus sign */
		0x002e,	/* 0x2E period: period */
		0x002f,	/* 0x2F slash: slash */
		0x0030,	/* 0x30 0: 0 */
		0x0031,	/* 0x31 1: 1 */
		0x0032,	/* 0x32 2: 2 */
		0x0033,	/* 0x33 3: 3 */
		0x0034,	/* 0x34 4: 4 */
		0x0035,	/* 0x35 5: 5 */
		0x0036,	/* 0x36 6: 6 */
		0x0037,	/* 0x37 7: 7 */
		0x0038,	/* 0x38 8: 8 */
		0x0039,	/* 0x39 9: 9 */
		0x003a,	/* 0x3A colon: colon */
		0x003b,	/* 0x3B semicolon: semicolon */
		0x003c,	/* 0x3C less: less-than sign */
		0x003d,	/* 0x3D equal: equals sign */
		0x003e,	/* 0x3E greater: greater-than sign */
		0x003f,	/* 0x3F question: question mark */
		0x0040,	/* 0x40 at: commertial at */
		0x002d,	/* 0x41 A: minus sign */
		0x003f,	/* 0x42 B: question mark */
		0x003a,	/* 0x43 C: colon */
		0x0024,	/* 0x44 D: dollar sign */
		0x0033,	/* 0x45 E: 3 */
		0x0021,	/* 0x46 F: exclamation mark */
		0x0026,	/* 0x47 G: ampersand */
		0x23f9,	/* 0x48 H: stop */
		0x0038,	/* 0x49 I: 8 */
		0x0022,	/* 0x4A J: quotatioin mark */		
		0x0028,	/* 0x4B K: left parenthesis */
		0x0029,	/* 0x4C L: right parenthesis */
		0x002e,	/* 0x4D M: period */
		0x002c,	/* 0x4E N: comma */
		0x0039,	/* 0x4F O: 9 */
		0x0030,	/* 0x50 P: 0 */
		0x0031,	/* 0x51 Q: 1 */
		0x0034,	/* 0x52 R: 4 */
		0x237e,	/* 0x53 S: bell */
		0x0035,	/* 0x54 T: 5 */
		0x0037,	/* 0x55 U: 7 */
		0x003b,	/* 0x56 V: semicolon */
		0x0032,	/* 0x57 W: 2 */
		0x002f,	/* 0x58 X: slash */
		0x0036,	/* 0x59 Y: 6 */
		0x3003,	/* 0x5A Z: ditto mark */
		0x005b,	/* 0x5B bracketleft: left bracket */
		0x005c,	/* 0x5C backslash: backslash */
		0x005d,	/* 0x5D bracketright: right bracket */
		0x005e,	/* 0x5E asciicircum: circumflex accent */
		0x005f,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1100,	/* 0x61 a: choseong gieug */
		0x116d,	/* 0x62 b: jungseong yo */
		0x1111,	/* 0x63 c: choseong pieup */
		0x1109,	/* 0x64 d: choseong sieus */
		0x1106,	/* 0x65 e: choseong mieum */
		0x1102,	/* 0x66 f: choseong nieun */
		0x110b,	/* 0x67 g: choseong ieung */
		0x1169,	/* 0x68 h: jungseong o */
		0x116e,	/* 0x69 i: jungseong u */
		0x1161,	/* 0x6A j: jungseong a */
		0x1165,	/* 0x6B k: jungseong eo */
		0x1175,	/* 0x6C l: jungseong i */
		0x1173,	/* 0x6D m: jungseong yu */
		0x1172,	/* 0x6E n: jungseong eu */
		0x1162,	/* 0x6F o: jungseong ae */
		0x1166,	/* 0x70 p: jungseong e */
		0x1107,	/* 0x71 q: choseong bieub */
		0x110c,	/* 0x72 r: choseong jieuj */
		0x1105,	/* 0x73 s: choseong lieul */
		0x1112,	/* 0x74 t: choseong hieuh */
		0x1167,	/* 0x75 u: jungseong yeo */
		0x1110,	/* 0x76 v: choseong tieut */
		0x1103,	/* 0x77 w: choseong dieud */
		0x110e,	/* 0x78 x: choseong chieuch */
		0x1163,	/* 0x79 y: jungseong ya */
		0x110f,	/* 0x7A z: choseong kieuk */
		0x007b,	/* 0x7B braceleft: left brace */
		0x007c,	/* 0x7C bar: vertical line(bar) */
		0x007d,	/* 0x7D braceright: right brace */
		0x007e	/* 0x7E asciitilde: tilde */
	];

	K2_Jang_1953_teletypewriter_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x0022,	/* 0x22 quotedbl: quotatioin mark */
		0x0023,	/* 0x23 numbersign: number sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x0026,	/* 0x26 ampersand: ampersand */
		0x0027,	/* 0x27 apostrophe: apostrophe */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x002a,	/* 0x2A asterisk: asterisk */
		0x002b,	/* 0x2B plus: plus sign */
		0x002c,	/* 0x2C comma: comma */
		0x002d,	/* 0x2D minus: minus sign */
		0x002e,	/* 0x2E period: period */
		0x002f,	/* 0x2F slash: slash */
		0x0030,	/* 0x30 0: 0 */
		0x0031,	/* 0x31 1: 1 */
		0x0032,	/* 0x32 2: 2 */
		0x0033,	/* 0x33 3: 3 */
		0x0034,	/* 0x34 4: 4 */
		0x0035,	/* 0x35 5: 5 */
		0x0036,	/* 0x36 6: 6 */
		0x0037,	/* 0x37 7: 7 */
		0x0038,	/* 0x38 8: 8 */
		0x0039,	/* 0x39 9: 9 */
		0x003a,	/* 0x3A colon: colon */
		0x003b,	/* 0x3B semicolon: semicolon */
		0x003c,	/* 0x3C less: less-than sign */
		0x003d,	/* 0x3D equal: equals sign */
		0x003e,	/* 0x3E greater: greater-than sign */
		0x003f,	/* 0x3F question: question mark */
		0x0040,	/* 0x40 at: commertial at */
		0x002d,	/* 0x41 A: minus sign */
		0x003f,	/* 0x42 B: question mark */
		0x003a,	/* 0x43 C: colon */
		0x271c,	/* 0x44 D: Who are you? (ENQ, WRU) */
		0x0033,	/* 0x45 E: 3 */
		0x0025,	/* 0x46 F: percent sign */
		0x0022,	/* 0x47 G: quotatioin mark */
		0x0021,	/* 0x48 H: exclamation mark */
		0x0038,	/* 0x49 I: 8 */
		0x237e,	/* 0x4A J: bell */
		0x0028,	/* 0x4B K: left parenthesis */
		0x0029,	/* 0x4C L: right parenthesis */
		0x002e,	/* 0x4D M: period */
		0x002c,	/* 0x4E N: comma */
		0x0039,	/* 0x4F O: 9 */
		0x0030,	/* 0x50 P: 0 */
		0x0031,	/* 0x51 Q: 1 */
		0x0034,	/* 0x52 R: 4 */
		0x0027,	/* 0x53 S: apostrophe */
		0x0035,	/* 0x54 T: 5 */
		0x0037,	/* 0x55 U: 7 */
		0x003d,	/* 0x56 V: equals sign */
		0x0032,	/* 0x57 W: 2 */
		0x002f,	/* 0x58 X: slash */
		0x0036,	/* 0x59 Y: 6 */
		0x002b,	/* 0x5A Z: plus sign */
		0x005b,	/* 0x5B bracketleft: left bracket */
		0x005c,	/* 0x5C backslash: backslash */
		0x005d,	/* 0x5D bracketright: right bracket */
		0x005e,	/* 0x5E asciicircum: circumflex accent */
		0x005f,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1112,	/* 0x61 a: choseong hieuh */
		0x1111,	/* 0x62 b: choseong pieup */
		0x110e,	/* 0x63 c: choseong chieuch */
		0x1100,	/* 0x64 d: choseong gieug */
		0x1109,	/* 0x65 e: choseong sieus */
		0x1102,	/* 0x66 f: choseong nieun */
		0x110b,	/* 0x67 g: choseong ieung */
		0x1173,	/* 0x68 h: jungseong eu */
		0x1169,	/* 0x69 i: jungseong o */
		0x1161,	/* 0x6A j: jungseong a */
		0x1175,	/* 0x6B k: jungseong i */
		0x1165,	/* 0x6C l: jungseong eo */
		0x116d,	/* 0x6D m: jungseong yo */
		0x1172,	/* 0x6E n: jungseong yu */
		0x1163,	/* 0x6F o: jungseong ya */
		0x1166,	/* 0x70 p: jungseong e */
		0x1110,	/* 0x71 q: choseong tieut */
		0x1103,	/* 0x72 r: choseong dieud */
		0x1105,	/* 0x73 s: choseong lieul */
		0x1106,	/* 0x74 t: choseong mieum */
		0x116e,	/* 0x75 u: jungseong u */
		0x1107,	/* 0x76 v: choseong bieub */
		0x110c,	/* 0x77 w: choseong jieuj */
		0x110f,	/* 0x78 x: choseong kieuk */
		0x1167,	/* 0x79 y: jungseong yeo */
		0x1162,	/* 0x7A z: jungseong ae */
		0x007b,	/* 0x7B braceleft: left brace */
		0x007c,	/* 0x7C bar: vertical line(bar) */
		0x007d,	/* 0x7D braceright: right brace */
		0x007e	/* 0x7E asciitilde: tilde */
	];

	K2_Bak_Song_1968_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x0022,	/* 0x22 quotedbl: quotatioin mark */
		0x0023,	/* 0x23 numbersign: number sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x0026,	/* 0x26 ampersand: ampersand */
		0x0027,	/* 0x27 apostrophe: apostrophe */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x002a,	/* 0x2A asterisk: asterisk */
		0x002b,	/* 0x2B plus: plus sign */
		0x002c,	/* 0x2C comma: comma */
		0x002d,	/* 0x2D minus: minus sign */
		0x002e,	/* 0x2E period: period */
		0x002f,	/* 0x2F slash: slash */
		0x0030,	/* 0x30 0: 0 */
		0x0031,	/* 0x31 1: 1 */
		0x0032,	/* 0x32 2: 2 */
		0x0033,	/* 0x33 3: 3 */
		0x0034,	/* 0x34 4: 4 */
		0x0035,	/* 0x35 5: 5 */
		0x0036,	/* 0x36 6: 6 */
		0x0037,	/* 0x37 7: 7 */
		0x0038,	/* 0x38 8: 8 */
		0x0039,	/* 0x39 9: 9 */
		0x003a,	/* 0x3A colon: colon */
		0x003b,	/* 0x3B semicolon: semicolon */
		0x003c,	/* 0x3C less: less-than sign */
		0x003d,	/* 0x3D equal: equals sign */
		0x003e,	/* 0x3E greater: greater-than sign */
		0x003f,	/* 0x3F question: question mark */
		0x0040,	/* 0x40 at: commertial at */
		0x1104,	/* 0x41 A: choseong ssangdieud */
		0x1163,	/* 0x42 B: jungseong ya*/
		0x1112,	/* 0x43 C: choseong hieuh*/
		0x110b,	/* 0x44 D: choseong ieung*/
		0x1108,	/* 0x45 E: choseong ssangbieub */
		0x1102,	/* 0x46 F: choseong nieun */
		0x1105,	/* 0x47 G: choseong lieul */
		0x1169,	/* 0x48 H: jungseong o */
		0x1168,	/* 0x49 I: jungseong ye */
		0x1173,	/* 0x4A J: jungseong eu */
		0x1161,	/* 0x4B K: jungseong a */
		0x1175,	/* 0x4C L: jungseong i */
		0x1172,	/* 0x4D M: jungseong yu */
		0x116d,	/* 0x4E N: jungseong yo */
		0x1165,	/* 0x4F O: jungseong eo */
		0x1164,	/* 0x50 P: jungseong yae */
		0x110e,	/* 0x51 Q: choseong chieuch */
		0x110a,	/* 0x52 R: choseong ssangsieus */
		0x1101,	/* 0x53 S: choseong ssanggieug */
		0x1106,	/* 0x54 T: choseong mieum*/
		0x116e,	/* 0x55 U: jungseong u */
		0x1110,	/* 0x56 V: choseong tieut */
		0x110d,	/* 0x57 W: choseong ssangjieuj */
		0x1111,	/* 0x58 X: choseong pieup */
		0x1167,	/* 0x59 Y: jungseong yeo */
		0x110f,	/* 0x5A Z: choseong kieuk */
		0x005b,	/* 0x5B bracketleft: left bracket */
		0x005c,	/* 0x5C backslash: backslash */
		0x005d,	/* 0x5D bracketright: right bracket */
		0x005e,	/* 0x5E asciicircum: circumflex accent */
		0x005f,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1103,	/* 0x61 a: choseong dieud */
		0x1163,	/* 0x62 b: jungseong ya */
		0x1112,	/* 0x63 c: choseong hieuh */
		0x110b,	/* 0x64 d: choseong ieung */
		0x1107,	/* 0x65 e: choseong bieub */
		0x1102,	/* 0x66 f: choseong nieun */
		0x1105,	/* 0x67 g: choseong lieul */
		0x1169,	/* 0x68 h: jungseong o */
		0x1166,	/* 0x69 i: jungseong e */
		0x1173,	/* 0x6A j: jungseong eu */
		0x1161,	/* 0x6B k: jungseong a */
		0x1175,	/* 0x6C l: jungseong i */
		0x1172,	/* 0x6D m: jungseong yu */
		0x116d,	/* 0x6E n: jungseong yo */
		0x1165,	/* 0x6F o: jungseong eo */
		0x1162,	/* 0x70 p: jungseong ae */
		0x110e,	/* 0x71 q: choseong chieuch */
		0x1109,	/* 0x72 r: choseong sieus */
		0x1100,	/* 0x73 s: choseong gieug */
		0x1106,	/* 0x74 t: choseong mieum */
		0x116e,	/* 0x75 u: jungseong u */
		0x1110,	/* 0x76 v: choseong tieut */
		0x110c,	/* 0x77 w: choseong jieuj */
		0x1111,	/* 0x78 x: choseong pieup */
		0x1167,	/* 0x79 y: jungseong yeo */
		0x110f,	/* 0x7A z: choseong kieuk */
		0x007b,	/* 0x7B braceleft: left brace */
		0x007c,	/* 0x7C bar: vertical line(bar) */
		0x007d,	/* 0x7D braceright: right brace */
		0x007e	/* 0x7E asciitilde: tilde */
	];

	K2_Gaon_KSX5002_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x0022,	/* 0x22 quotedbl: quotatioin mark */
		0x0023,	/* 0x23 numbersign: number sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x0026,	/* 0x26 ampersand: ampersand */
		0x0027,	/* 0x27 apostrophe: apostrophe */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x002a,	/* 0x2A asterisk: asterisk */
		0x002b,	/* 0x2B plus: plus sign */
		0x002c,	/* 0x2C comma: comma */
		0x002d,	/* 0x2D minus: minus sign */
		0x002e,	/* 0x2E period: period */
		0x002f,	/* 0x2F slash: slash */
		0x0030,	/* 0x30 0: 0 */
		0x0031,	/* 0x31 1: 1 */
		0x0032,	/* 0x32 2: 2 */
		0x0033,	/* 0x33 3: 3 */
		0x0034,	/* 0x34 4: 4 */
		0x0035,	/* 0x35 5: 5 */
		0x0036,	/* 0x36 6: 6 */
		0x0037,	/* 0x37 7: 7 */
		0x0038,	/* 0x38 8: 8 */
		0x0039,	/* 0x39 9: 9 */
		0x003a,	/* 0x3A colon: colon */
		0x003b,	/* 0x3B semicolon: semicolon */
		0x003c,	/* 0x3C less: less-than sign */
		0x003d,	/* 0x3D equal: equals sign */
		0x003e,	/* 0x3E greater: greater-than sign */
		0x003f,	/* 0x3F question: question mark */
		0x0040,	/* 0x40 at: commertial at */
    0x41, //0x1106, /* 0x41 A: choseong mieum */
    0x42, //0x1172, /* 0x42 B: jungseong yu */
    0x43, //0x110e, /* 0x43 C: choseong chieuch */
    0x44, //0x110b, /* 0x44 D: choseong ieung */
    0x45, //0x1104, /* 0x45 E: choseong ssangdieud */
    0x46, //0x1105, /* 0x46 F: choseong lieul */
    0x47, //0x1112, /* 0x47 G: choseong hieuh */
    0x48, //0x1169, /* 0x48 H: jungseong o */
    0x49, //0x1163, /* 0x49 I: jungseong ya */
    0x4A, //0x1165, /* 0x4A J: jungseong eo */
    0x4B, //0x1161, /* 0x4B K: jungseong a */
    0x4C, //0x1175, /* 0x4C L: jungseong i */
    0x4D, //0x1173, /* 0x4D M: jungseong eu */
    0x4E, //0x116e, /* 0x4E N: jungseong u */
    0x4F, //0x1164, /* 0x4F O: jungseong yae */
    0x50, //0x1168, /* 0x50 P: jungseong ye */
    0x51, //0x1108, /* 0x51 Q: choseong ssangbieub */
    0x52, //0x1101, /* 0x52 R: choseong ssanggieug */
    0x53, //0x1102, /* 0x53 S: choseong nieun */
    0x54, //0x110a, /* 0x54 T: choseong ssangsieus */
    0x55, //0x1167, /* 0x55 U: jungseong yeo */
    0x56, //0x1111, /* 0x56 V: choseong pieup */
    0x57, //0x110d, /* 0x57 W: choseong ssangjieuj */
    0x58, //0x1110, /* 0x58 X: choseong tieut */
    0x59, //0x116d, /* 0x59 Y: jungseong yo */
    0x5A, //0x110f, /* 0x5A Z: choseong kieuk */
		0x005b,	/* 0x5B bracketleft: left bracket */
		0x005c,	/* 0x5C backslash: backslash */
		0x005d,	/* 0x5D bracketright: right bracket */
		0x005e,	/* 0x5E asciicircum: circumflex accent */
		0x005f,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
    0x1106, /* 0x61 a: choseong mieum */
    0x1172, /* 0x62 b: jungseong yu */
    0x110e, /* 0x63 c: choseong cieuc */
    0x110b, /* 0x64 d: choseong ieung */
    0x1103, /* 0x65 e: choseong dieud */
    0x1105, /* 0x66 f: choseong lieul */
    0x1112, /* 0x67 g: choseong hieuh */
    0x1169, /* 0x68 h: jungseong o */
    0x1163, /* 0x69 i: jungseong ya */
    0x1165, /* 0x6A j: jungseong eo */
    0x1161, /* 0x6B k: jungseong a */
    0x1175, /* 0x6C l: jungseong i */
    0x1173, /* 0x6D m: jungseong eu */
    0x116e, /* 0x6E n: jungseong u */
    0x1162, /* 0x6F o: jungseong ae */
    0x1166, /* 0x70 p: jungseong e */
    0x1107, /* 0x71 q: choseong bieub */
    0x1100, /* 0x72 r: choseong gieug */
    0x1102, /* 0x73 s: choseong nieun */
    0x1109, /* 0x74 t: choseong sieus */
    0x1167, /* 0x75 u: jungseong yeo */
    0x1111, /* 0x76 v: choseong pieup */
    0x110c, /* 0x77 w: choseong jieuj */
    0x1110, /* 0x78 x: choseong tieut */
    0x116d, /* 0x79 y: jungseong yo */
    0x110f, /* 0x7A z: choseong kieuk */
		0x007b,	/* 0x7B braceleft: left brace */
		0x007c,	/* 0x7C bar: vertical line(bar) */
		0x007d,	/* 0x7D braceright: right brace */
		0x007e	/* 0x7E asciitilde: tilde */
	];

	K4_Pyojun_1969_Typewriter_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x11ae,	/* 0x22 quotedbl: jongseong dieud */		
		0xFFE6,	/* 0x23 numbersign: won sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x003a,	/* 0x26 ampersand: colon */
		0x11b8,	/* 0x27 apostrophe: jongseong bieub */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x0027,	/* 0x2A asterisk: apostrophe */
		0x002b,	/* 0x2B plus: plus sign */
		0x3161,	/* 0x2C comma: hangeul letter eu */
		0x002d,	/* 0x2D minus: minus sign */
		0x11ba,	/* 0x2E period: jongseong sieus */
		0x11bb,	/* 0x2F slash: jongseong ssangsieus */
		0x0030,	/* 0x30 0: 0 */
		0x0031,	/* 0x31 1: 1 */
		0x0032,	/* 0x32 2: 2 */
		0x0033,	/* 0x33 3: 3 */
		0x0034,	/* 0x34 4: 4 */
		0x0035,	/* 0x35 5: 5 */
		0x0036,	/* 0x36 6: 6 */
		0x0037,	/* 0x37 7: 7 */
		0x0038,	/* 0x38 8: 8 */
		0x0039,	/* 0x39 9: 9 */
		0x3156,	/* 0x3A colon: hangeul letter ye */
		0x3154,	/* 0x3B semicolon: hangeul letter e */
		0x002c,	/* 0x3C less: comma */
		0x003d,	/* 0x3D equal: equals sign */
		0x11b9,	/* 0x3E greater: jongseong bieubsieus */
		0x11ad,	/* 0x3F question: jongseong nieunhieuh */
		0x0022,	/* 0x40 at: quotation mark */
		0x110f,	/* 0x41 A: choseong kieuk */
		0x3160,	/* 0x42 B: hangeul letter yu */
		0x11c2,	/* 0x43 C: jongseong hieuh */
		0x110e,	/* 0x44 D: choseong chieuch */
		0x1104,	/* 0x45 E: choseong ssangdieud */
		0x1111,	/* 0x46 F: choseong pieup */
		0x002f,	/* 0x47 G: slash */
		0x315B,	/* 0x48 H: hangeul letter yo */
		0x1163,	/* 0x49 I: jungseong ya */
		0x3155,	/* 0x4A J: hangeul letter yeo */
		0x3151,	/* 0x4B K: hangeul letter ya */
		0x3150,	/* 0x4C L: hangeul lteer ae */
		0x002e,	/* 0x4D M: period */
		0x1172,	/* 0x4E N: jungseong yu */
		0x1162,	/* 0x4F O: jungseong ae */
		0x003f,	/* 0x50 P: question mark */
		0x1108,	/* 0x51 Q: choseong ssangbieub */
		0x1101,	/* 0x52 R: choseong ssanggieug */
		0x1110,	/* 0x53 S: choseong tieut */
		0x110a,	/* 0x54 T: choseong ssangsieus*/
		0x1167,	/* 0x55 U: jungseong yeo */
		0x11c1,	/* 0x56 V: jongseong pieup */
		0x110d,	/* 0x57 W: choseong ssangjieuj */
		0x11c0,	/* 0x58 X: jongseong tieut */
		0x116d,	/* 0x59 Y: jungseong yo */
		0x11bf,	/* 0x5A Z: jongseong kieuk */
		0x11a8,	/* 0x5B bracketleft: jongseong gieug */
		0x0000,	/* 0x5C backslash: */
		0x0000,	/* 0x5D bracketright: */
		0x005f,	/* 0x5E asciicircum: underscore */
		0x00D7,	/* 0x5F underscore: multiplication sign */
		0x0000,	/* 0x60 quoteleft: */
		0x1106,	/* 0x61 a: choseong mieum */
		0x315c,	/* 0x62 b: hangeul letter u */
		0x11bc,	/* 0x63 c: jongseong ieung */
		0x110b,	/* 0x64 d: choseong ieung */
		0x1103,	/* 0x65 e: choseong dieud */
		0x1105,	/* 0x66 f: choseong lieul*/
		0x1112,	/* 0x67 g: choseong hieuh */
		0x3157,	/* 0x68 h: hangeul letter o */
		0x1161,	/* 0x69 i: jungseong a */
		0x3153,	/* 0x6A j: hangeul letter eo */
		0x314F,	/* 0x6B k: hangeul letter a */
		0x3163,	/* 0x6C l: hangeul letter i */
		0x1173,	/* 0x6D m: jungseong eu */
		0x116e,	/* 0x6E n: jungseong u */
		0x1175,	/* 0x6F o: jungseong i */
		0x1166,	/* 0x70 p: jungseong e */
		0x1107,	/* 0x71 q: choseong bieub */
		0x1100,	/* 0x72 r: choseong gieug */
		0x1102,	/* 0x73 s: choseong nieun */
		0x1109,	/* 0x74 t: choseong sieus */
		0x1165,	/* 0x75 u: jungseong u */
		0x11af,	/* 0x76 v: jongseong lieul */
		0x110c,	/* 0x77 w: choseong jieuj */
		0x11ab,	/* 0x78 x: jongseong nieun */
		0x1169,	/* 0x79 y: jungseong o */
		0x11b7,	/* 0x7A z: jongseong mieum */
		0x11bd,	/* 0x7B braceleft: jongseong jieuj */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x0000,	/* 0x7E asciitilde: */
	];

	K3_Oesol_Typewriter_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x00b0,	/* 0x22 quotedbl: degree sign */
		0xFFE6,	/* 0x23 numbersign: won sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x003a,	/* 0x26 ampersand: colon */
		0x116e,	/* 0x27 apostrophe: jungseong u */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x0027,	/* 0x2A asterisk: apostrophe */
		0x002b,	/* 0x2B plus: plus sign */
		0x002c,	/* 0x2C comma: comma */
		0x002d,	/* 0x2D minus: minus sign */
		0x002e,	/* 0x2E period: period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x0030,	/* 0x30 0: 0 */
		0x0031,	/* 0x31 1: 1 */
		0x0032,	/* 0x32 2: 2 */
		0x0033,	/* 0x33 3: 3 */
		0x0034,	/* 0x34 4: 4 */
		0x0035,	/* 0x35 5: 5 */
		0x0036,	/* 0x36 6: 6 */
		0x0037,	/* 0x37 7: 7 */
		0x0038,	/* 0x38 8: 8 */
		0x0039,	/* 0x39 9: 9 */
		0x11ac,	/* 0x3A colon: jongseong nieun-jieuj */
		0x3162,	/* 0x3B semicolon: hangeul letter eui */
		0x002f,	/* 0x3C less: slash */
		0x003d,	/* 0x3D equal: equals sign */
		0x003f,	/* 0x3E greater: question mark */
		0x0040,	/* 0x3F question: commertial at */
		0x0022,	/* 0x40 at: quotatioin mark */
		0x11b7,	/* 0x41 A: jongseong mieum */
		0x11aa,	/* 0x42 B: jongseong gieug-sieus */
		0x11be,	/* 0x43 C: jongseong chieuch */
		0x11bc,	/* 0x44 D: jongseong ieung */
		0x11ae,	/* 0x45 E: jongseong dieud */
		0x11af,	/* 0x46 F: jongseong lieul */
		0x11c2,	/* 0x47 G: jongseong hieuh */
		0x11ad,	/* 0x48 H: jongseong nieun-hieuh */
		0x11b0,	/* 0x49 I: jongseong lieul-gieug */
		0x11b9,	/* 0x4A J: jongseong bieub-sieus */
		0x11bb,	/* 0x4B K: jongseong ssangsieus */
		0x11a9,	/* 0x4C L: jongseong ssanggieug */
		0x11b2,	/* 0x4D M: jongseong lieul-bieub */
		0x11b3,	/* 0x4E N: jongseong lieul-sieus */
		0x11b4,	/* 0x4F O: jongseong lieul-tieut */
		0x11b5,	/* 0x50 P: jongseong lieul-pieup */
		0x11b8,	/* 0x51 Q: jongseong bieub */
		0x11a8,	/* 0x52 R: jongseong gieug */
		0x11ab,	/* 0x53 S: jongseong nieun */
		0x11ba,	/* 0x54 T: jongseong sieus */
		0x11b1,	/* 0x55 U: jongseong lieul-mieum */
		0x11c1,	/* 0x56 V: jongseong pieup */
		0x11bd,	/* 0x57 W: jongseong jieuj */
		0x11c0,	/* 0x58 X: jongseong tieut */
		0x11b6,	/* 0x59 Y: jongseong lieul-hieuh */
		0x110f,	/* 0x5A Z: choseong kieuk */
		0x3156,	/* 0x5B bracketleft: hangeul letter ye */
		0x0000,	/* 0x5C backslash: */
		0x0000,	/* 0x5D bracketright: */
		0x005f,	/* 0x5E asciicircum: underscore */
		0x00D7,	/* 0x5F underscore: multiplication sign */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1106,	/* 0x61 a: choseong mieum */
		0x3160,	/* 0x62 b: hangeul letter yu */
		0x110e,	/* 0x63 c: choseong chieu */
		0x110b,	/* 0x64 d: choseong ieung */
		0x1103,	/* 0x65 e: choseong dieud */
		0x1105,	/* 0x66 f: choseong lieul */
		0x1112,	/* 0x67 g: chchoseong hieuh */
		0x3157,	/* 0x68 h: hangeul letter o */
		0x3151,	/* 0x69 i: hangeul letter ya */
		0x3153,	/* 0x6A j: hangeul letter eo */
		0x314F,	/* 0x6B k: hangeul letter a */
		0x3163,	/* 0x6C l: hangeul letter i */		
		0x3161,	/* 0x6D m: hangeul letter eu */
		0x315c,	/* 0x6E n: hangeul letter u */
		0x3150,	/* 0x6F o: hangeul lteer ae */
		0x3154,	/* 0x70 p: hangeul letter e */
		0x1107,	/* 0x71 q: choseong bieub */
		0x1100,	/* 0x72 r: choseong gieug */
		0x1102,	/* 0x73 s: choseong nieun */
		0x1109,	/* 0x74 t: choseong sieus */
		0x3155,	/* 0x75 u: hangeul letter yeo */
		0x1111,	/* 0x76 v: choseong pieup */
		0x110c,	/* 0x77 w: choseong jieuj */
		0x1110,	/* 0x78 x: choseong tieut */
		0x315B,	/* 0x79 y: hangeul letter yo */
		0x110f,	/* 0x7A z: choseong kieuk */
		0x3152,	/* 0x7B braceleft: hangeul letter yae */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x007e	/* 0x7E asciitilde: tilde */
	];
	
	K4_Pyojun_1985_Typewriter_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x11bb,	/* 0x22 quotedbl: jongseong ssangsieus */
		0xFFE6,	/* 0x23 numbersign: won sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x003a,	/* 0x26 ampersand: colon */
		0x1174,	/* 0x27 apostrophe: jungseong eui */
		0x0029,	/* 0x28 parenleft: right parenthesis */
		0x002d,	/* 0x29 parenright: minus sign */
		0x0028,	/* 0x2A asterisk: left parenthesis *///0x0027 apostrophe
		0x11b5,	/* 0x2B plus: jongseong lieul-pieup */
		0x002c,	/* 0x2C comma: comma */
		0x00D7,	/* 0x2D minus: multiplication sign */
		0x116e,	/* 0x2E period: jungseong u */
		0x1169,	/* 0x2F slash: jungseong o */
		0x0030,	/* 0x30 0: 0 */
		0x0031,	/* 0x31 1: 1 */
		0x0032,	/* 0x32 2: 2 */
		0x0033,	/* 0x33 3: 3 */
		0x0034,	/* 0x34 4: 4 */
		0x0035,	/* 0x35 5: 5 */
		0x0036,	/* 0x36 6: 6 */
		0x0037,	/* 0x37 7: 7 */
		0x0038,	/* 0x38 8: 8 */
		0x0039,	/* 0x39 9: 9 */
		0x11ad,	/* 0x3A colon: jongseong nieun-jieuj */
		0x1168,	/* 0x3B semicolon: jungseong ye */
		0x11b9,	/* 0x3C less: jongseong bieub-sieus */
		0x002b,	/* 0x3D equal: plus sign */ //0x003dplus sign
		0x002e,	/* 0x3E greater: period */
		0x003f,	/* 0x3F question: question mark */
		0x0022,	/* 0x40 at: quotatioin mark */
		0x11b7,	/* 0x41 A: jongseong mieum */
		0x1172, /* 0x42 B: jungseong yu */
		0x11be,	/* 0x43 C: jongseong chieuch */
		0x11bc,	/* 0x44 D: jongseong ieung */
		0x11ae,	/* 0x45 E: jongseong dieud */
		0x11af,	/* 0x46 F: jongseong lieul */
		0x11c2,	/* 0x47 G: jongseong hieuh */
		0x1169, /* 0x48 H: jungseong o */
		0x1163, /* 0x49 I: jungseong ya */
		0x1165, /* 0x4A J: jungseong eo */
		0x1161, /* 0x4B K: jungseong a */
		0x1175, /* 0x4C L: jungseong i */
		0x1173, /* 0x4D M: jungseong eu */
		0x116e, /* 0x4E N: jungseong u */
		0x1162, /* 0x4F O: jungseong ae */
    0x1166, /* 0x50 P: jungseong e */
		0x11b8,	/* 0x51 Q: jongseong bieub */
		0x11a8,	/* 0x52 R: jongseong gieug */
		0x11ab,	/* 0x53 S: jongseong nieun */
		0x11ba,	/* 0x54 T: jongseong sieus */
		0x1167, /* 0x55 U: jungseong yeo */
		0x11c1,	/* 0x56 V: jongseong pieup */
		0x11bd,	/* 0x57 W: jongseong jieuj */
		0x11c0,	/* 0x58 X: jongseong tieut */
		0x116d, /* 0x59 Y: jungseong yo */
		0x110f,	/* 0x5A Z: choseong kieuk */
		0x1164,	/* 0x5B bracketleft: jungseong yae */
		0x0000,	/* 0x5C backslash: */
		0x0000,	/* 0x5D bracketright: */
		0x002f,	/* 0x5E asciicircum: slash */
		0x11a9,	/* 0x5F underscore: jongseong ssanggieug */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1106,	/* 0x61 a: choseong mieum */
		0x3160,	/* 0x62 b: hangeul letter yu */
		0x110e,	/* 0x63 c: choseong chieu */
		0x110b,	/* 0x64 d: choseong ieung */
		0x1103,	/* 0x65 e: choseong dieud */
		0x1105,	/* 0x66 f: choseong lieul */
		0x1112,	/* 0x67 g: chchoseong hieuh */
		0x3157,	/* 0x68 h: hangeul letter o */
		0x3151,	/* 0x69 i: hangeul letter ya */
		0x3153,	/* 0x6A j: hangeul letter eo */
		0x314F,	/* 0x6B k: hangeul letter a */
		0x3163,	/* 0x6C l: hangeul letter i */		
		0x3161,	/* 0x6D m: hangeul letter eu */
		0x315c,	/* 0x6E n: hangeul letter u */
		0x3150,	/* 0x6F o: hangeul lteer ae */
		0x3154,	/* 0x70 p: hangeul letter e */
		0x1107,	/* 0x71 q: choseong bieub */
		0x1100,	/* 0x72 r: choseong gieug */
		0x1102,	/* 0x73 s: choseong nieun */
		0x1109,	/* 0x74 t: choseong sieus */
		0x3155,	/* 0x75 u: hangeul letter yeo */
		0x1111,	/* 0x76 v: choseong pieup */
		0x110c,	/* 0x77 w: choseong jieuj */
		0x1110,	/* 0x78 x: choseong tieut */
		0x315B,	/* 0x79 y: hangeul letter yo */
		0x110f,	/* 0x7A z: choseong kieuk */
		0x11b0,	/* 0x7B braceleft: jongseong lieul-gieug */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x007e	/* 0x7E asciitilde: tilde */
	];

	K3_89_layout = [ // 3-89 자판
		0x11c2,	/* 0x21 exclam: jongseong hieuh */
		0x0023,	/* 0x22 quotedbl: number sign */
		0x11bf,	/* 0x23 numbersign: jongseong kieuk */
		0x11b5,	/* 0x24 dollar: jongseong lieul-pieup */
		0x11b4,	/* 0x25 percent: jongseong lieul-tieut */
		0x0037,	/* 0x26 ampersand: 7 */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0039,	/* 0x28 parenleft: 9 */
		0x0025,	/* 0x29 parenright: percent */
		0x0038,	/* 0x2A asterisk: 8 */
		0x002b,	/* 0x2B plus */
		0x002c,	/* 0x2C comma */
		0x002a,	/* 0x2D minus: aterisk */
		0x002e,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x0029,	/* 0x30 0: parenright */
		0x11b8,	/* 0x31 1: jongseong bieub */
		0x11bb,	/* 0x32 2: jongseong ssangsieus */
		0x116d,	/* 0x33 3: jungseong yo */
		0x1168,	/* 0x34 4: jungseong ye */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x0028,	/* 0x37 7: parenleft */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116e,	/* 0x39 9: jungseong u */
		0x003a,	/* 0x3A colon */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x002c,	/* 0x3C less: comma */
		0x003d,	/* 0x3D equal */
		0x002e,	/* 0x3E greater: period */
		0x0021,	/* 0x3F question: exclam */
		0x11bd,	/* 0x40 at: jongseong jieuj */
		0x11ae,	/* 0x41 A: jongseong dieud */
		0x003f,	/* 0x42 B: exclam: question mark */
		0x11b1,	/* 0x43 C: jongseong lieul-mieum */
		0x11b0, /* 0x44 D: jongseong lieul-gieug */
		0x11ac,	/* 0x45 E: jongseong nieun-jieuj */
		0x11a9,	/* 0x46 F: jongseong ssanggieug */
		0x11aa,	/* 0x47 G: jongseong gieug-sieus */
		0x0022,	/* 0x48 H: quotatioin mark */
		0x0035,	/* 0x49 I: 5 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0030,	/* 0x4D M: 0 */
		0x002d,	/* 0x4E N: minus sign */
		0x0036,	/* 0x4F O: 6 */
		0x007e,	/* 0x50 P: tilde */
		0x11c1,	/* 0x51 Q: jongseong pieup */
		0x11b6,	/* 0x52 R: jongseong lieul-hieuh */
		0x11ad,	/* 0x53 S: jongseong nieun-hieuh */
		0x11b3,	/* 0x54 T: jongseong lieul-sieus */
		0x0034,	/* 0x55 U: 4 */
		0x11b2,	/* 0x56 V: jongseong lieul-bieub */
		0x11c0,	/* 0x57 W: jongseong tieut */
		0x11b9,	/* 0x58 X: jongseong bieub-sieus */
		0x0027,	/* 0x59 Y: apostrophe */
		0x11be,	/* 0x5A Z: jongseong chieuch */
		0x110f,	/* 0x5B choseong kieuk */
		0x005c,	/* 0x5C backslash */
		0x003b,	/* 0x5D bracketright: semicolon */
		0x1164,	/* 0x5E asciicircum: jungseong yae */
		0x002f,	/* 0x5F underscore: slash */
		0x005b,	/* 0x60 quoteleft: bracketleft */
		0x11bc,	/* 0x61 a: jongseong ieung */
		0x116e,	/* 0x62 b: jungseong u */
		0x1166,	/* 0x63 c: jungseong e */
		0x1175,	/* 0x64 d: jungseong i */
		0x1167,	/* 0x65 e: jungseong yeo */
		0x1161,	/* 0x66 f: jungseong a */
		0x1173,	/* 0x67 g: jungseong eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110b,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110c,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110e,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11ba,	/* 0x71 q: jongseong sieus */
		0x1162,	/* 0x72 r: jungseong ae */
		0x11ab,	/* 0x73 s: jongseong nieun */
		0x1165,	/* 0x74 t: jungseong eo */
		0x1103,	/* 0x75 u: choseong dieud */
		0x1169,	/* 0x76 v: jungseong o */
		0x11af,	/* 0x77 w: jongseong lieul */
		0x11a8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11b7,	/* 0x7A z: jongseong mieum */
		0x007b,	/* 0x7B braceleft */
		0x0040,	/* 0x7C bar: commertial at */
		0x007d,	/* 0x7D braceright */
		0x005d	/* 0x7E asciitilde: bracketright */
	];

	K3_Gimguk_38Ay_layout = [
		0x0021,	/* 0x21 exclam: */
		0x0022,	/* 0x22 quotedbl: */
		0x0023,	/* 0x23 numbersign: */
		0x0024,	/* 0x24 dollar: */
		0x0025,	/* 0x25 percent: */
		0x0026,	/* 0x26 ampersand: */
		0x0027,	/* 0x27 apostrophe: */
		0x0028,	/* 0x28 parenleft: */
		0x0029,	/* 0x29 parenright: */
		0x002a,	/* 0x2A asterisk: */
		0x002b,	/* 0x2B plus: */
		0x002c,	/* 0x2C comma: */
		0x002d,	/* 0x2D minus: */
		0x002e,	/* 0x2E period: */
		0x1110,	/* 0x2F slash: */
		0x110f,	/* 0x30 0: */
		0x11BF,	/* 0x31 1: */
		0x11BE,	/* 0x32 2: */
		0x11C1,	/* 0x33 3: */
		0x116D,	/* 0x34 4: */
		0x1172,	/* 0x35 5: */
		0x1163,	/* 0x36 6: */
		0x11C0,	/* 0x37 7: */
		0x11BD,	/* 0x38 8: */
		0x11AE,	/* 0x39 9: */
		0x003A,	/* 0x3A colon: */
		0x1107,	/* 0x3B semicolon: */
		0x003c,	/* 0x3C less: */
		0x003d,	/* 0x3D equal: */
		0x003e,	/* 0x3E greater: */
		0x003f,	/* 0x3F question: */
		0x0040,	/* 0x40 at: */
		0x11F0,	/* 0x41 A: */
		0x113E,	/* 0x42 B: */
		0x00B0,	/* 0x43 C: */
		0x00D7,	/* 0x44 D: */
		0x0033,	/* 0x45 E: */
		0x119E,	/* 0x46 F: */
		0xFF3C,	/* 0x47 G: */
		0x203B,	/* 0x48 H: */
		0x0038,	/* 0x49 I: */
		0x114C,	/* 0x4A J: */
		0x002F,	/* 0x4B K: */
		0x003B,	/* 0x4C L: */
		0x1159,	/* 0x4D M: */
		0x1140,	/* 0x4E N: */
		0x0039,	/* 0x4F O: */
		0x0030,	/* 0x50 P: */
		0x0031,	/* 0x51 Q: */
		0x0034,	/* 0x52 R: */
		0x0307,	/* 0x53 S: */
		0x0035,	/* 0x54 T: */
		0x0037,	/* 0x55 U: */
		0x113C,	/* 0x56 V: */
		0x0032,	/* 0x57 W: */
		0x11F9,	/* 0x58 X: */
		0x0036,	/* 0x59 Y: */
		0x11EB,	/* 0x5A Z: */
		0x005B,	/* 0x5B bracketleft: */
		0x005C,	/* 0x5C backslash: */
		0x005D,	/* 0x5D bracketright: */
		0x005E,	/* 0x5E asciicircum: */
		0x005F,	/* 0x5F underscore: */
		0x0060,	/* 0x60 quoteleft: */
		0x11bc,	/* 0x61 a: */
		0x116e,	/* 0x62 b: */
		0x11a8,	/* 0x63 c: */
		0x1175,	/* 0x64 d: */
		0x11af,	/* 0x65 e: */
		0x1161,	/* 0x66 f: */
		0x1173,	/* 0x67 g: */
		0x1102,	/* 0x68 h: */
		0x1106,	/* 0x69 i: */
		0x110b,	/* 0x6A j: */
		0x1100,	/* 0x6B k: */
		0x110c,	/* 0x6C l: */
		0x1112,	/* 0x6D m: */
		0x1109,	/* 0x6E n: */
		0x110e,	/* 0x6F o: */
		0x1111,	/* 0x70 p: */
		0x11B8,	/* 0x71 q: */
		0x1167,	/* 0x72 r: */
		0x11ab,	/* 0x73 s: */
		0x1165,	/* 0x74 t: */
		0x1103,	/* 0x75 u: */
		0x1169,	/* 0x76 v: */
		0x11ba,	/* 0x77 w: */
		0x11b7,	/* 0x78 x: */
		0x1105,	/* 0x79 y: */
		0x11C2,	/* 0x7A z: */
		0x007B,	/* 0x7B braceleft: */
		0x007C,	/* 0x7C bar: */
		0x007D,	/* 0x7D braceright: */
		0x007E,	/* 0x7E asciitilde: */
	];

	// 3-2011 자판
	K3_2011_layout = [
		0x11a9,	/* 0x21 exclam: jongseong ssanggieug */
		0x0025,	/* 0x22 quotedbl: percent sign */
		0x11AC,	/* 0x23 numbersign: jongseong nieun-jieuj */
		0x0024,	/* 0x24 dollar */
		0x0023,	/* 0x25 percent: number sign */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x007e,	/* 0x2A asterisk: tilde */
		0x002b,	/* 0x2B plus */
		0x002c,	/* 0x2C comma */
		0x005b,	/* 0x2D minus: left bracket */
		0x002e,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x110f,	/* 0x30 0: choseong kieuk */
		0x11c2,	/* 0x31 1: jongseong hieuh */
		0x11bb,	/* 0x32 2: jongseong ssangsieus */
		0x11b8,	/* 0x33 3: jongseong bieub */
		0x116d,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116e,	/* 0x39 9: jungseong u */
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003c,	/* 0x3C less */
		0x005d,	/* 0x3D equal: right bracket */
		0x003e,	/* 0x3E greater */
		0x003f,	/* 0x3F question */
		0x11b0,	/* 0x40 at: jongseong lieul-gieug */
		0x11ae,	/* 0x41 A: jongseong dieud */
		0x0040,	/* 0x42 B: commertial at */
		0x11bf,	/* 0x43 C: jongseong kieuk */
		0x11b2,	/* 0x44 D: jongseong lieul-bieub */
		0x11bd,	/* 0x45 E: jongseong jieuj */
		0x11b1,	/* 0x46 F: jongseong lieul-mieum */
		0x0021,	/* 0x47 G: exclamation mark */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11c1,	/* 0x51 Q: jongseong pieup */
		0x11b6,	/* 0x52 R: jongseong lieul-hieuh */
		0x11ad,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11aa,	/* 0x56 V: jongseong gieug-sieus */
		0x11c0,	/* 0x57 W: jongseong tieut */
		0x11b9,	/* 0x58 X: jongseong bieub-sieus */
		0x0035,	/* 0x59 Y: 5 */
		0x11be,	/* 0x5A Z: jongseong chieuch */
		0x00b7,	/* 0x5B bracketleft: middle dot */
		0x003d,	/* 0x5C backslash: equals sign */
		0x003a,	/* 0x5D bracketright: colon */
		0x005e,	/* 0x5E asciicircum: circumflex accent */
		0x002a,	/* 0x5F underscore: asterisk */
		0x003b,	/* 0x60 quoteleft: semicolon */
		0x11bc,	/* 0x61 a: jongseong ieung */
		0x116e,	/* 0x62 b: jungseong u */
		0x1166,	/* 0x63 c: jungseong e */
		0x1175,	/* 0x64 d: jungseong i */
		0x1167,	/* 0x65 e: jungseong yeo */
		0x1161,	/* 0x66 f: jungseong a */
		0x1173,	/* 0x67 g: jungseong eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110b,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong giueg */
		0x110c,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110e,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11ba,	/* 0x71 q: jongseong sieus */
		0x1165,	/* 0x72 r: jungseong eo */
		0x11ab,	/* 0x73 s: jongseong nieun */
		0x1162,	/* 0x74 t: jungseong ae */
		0x1103,	/* 0x75 u: choseong dieud */
		0x1169,	/* 0x76 v: jungseong o */
		0x11af,	/* 0x77 w: jongseong lieul */
		0x11a8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11b7,	/* 0x7A z: jongseong mieum */
		0x002d,	/* 0x7B braceleft: minus sign */
		0x005c,	/* 0x7C bar: backslash */
		0x002f,	/* 0x7D braceright: slash */
		0x005f	/* 0x7E asciitilde: underscore */
	];

	// 3-2011 자판 기호 확장 배열
	K3_2011_sign_extension_layout = [/*!*/[0,0,0], /*"*/[0x266A,0x266C,0], /*#*/[0,0,0], /*$*/[0xFFE0,0,0], /*%*/[0,0,0],
	/*&*/[0,0,0],	/*'*/[0x326B,0x2030,0x2031], /*(*/[0,0,0], /*)*/[0,0,0], /***/[0,0,0], /*+*/[0x2640,0,0],
	/*,*/[0x3001,0x3008,0x2266], /*-*/[0x3010,0x3014,0x2601], /*.*/[0x3002,0x3009,0x2267], /*/*/[0x2026,0x203B,0x2504],
	/*0*/[0x326A,0x300D,0],	/*1*/[0x3BC,0x2122,0], /*2*/[0xB2,0x2109,0], /*3*/[0xB3,0x2103,0], /*4*/[0xFFE6,0xFFE5,0],
	/*5*/[0x20AC,0xFFE1,0], /*6*/[0x327E,0x2702,0], /*7*/[0xA7,0x300E,0], /*8*/[0,0x300F,0],	/*9*/[0,0x300C,0],
	/*:*/[0x2463,0x246D,0x3254], /*;*/[0x3265,0x2463,0x246D],
	/*<*/[0,0,0], /*=*/[0x3011,0x3015,0x2603], /*>*/[0,0,0], /*?*/[0,0,0], /*@*/[0,0,0],
	/*A*/[0,0,0], /*B*/[0,0,0], /*C*/[0,0,0], /*D*/[0,0,0], /*E*/[0x2715,0,0], /*F*/[0,0,0], /*G*/[0xA6,0x2506,0],
	/*H*/[0x2469,0x2473,0x325A], /*I*/[0x2466,0x2470,0x3257], /*J*/[0x2460,0x246A,0x3251], /*K*/[0x2461,0x246B,0x3252],
	/*L*/[0x2462,0x246C,0x3253], /*M*/[0x201D,0x2019,0], /*N*/[0x201C,0x2018,0], /*O*/[0x2467,0x2471,0x3258],
	/*P*/[0x2468,0x2472,0x3259], /*Q*/[0x2199,0x2196,0x261F], /*R*/[0xB4,0,0], /*S*/[0,0,0], /*T*/[0,0,0x2610],
	/*U*/[0x2465,0x246F,0x3256], /*V*/[0,0,0], /*W*/[0x2198,0x2197,0x261D], /*X*/[0,0,0],
	/*Y*/[0x2464,0x246E,0x3255], /*Z*/[0,0,0], /*[*/[0x7B,0xB1,0x2600], /*\*/[0x2260,0x2252,0xB6],
	/*]*/[0x7D,0xF7,0x2602], /*^*/[0x321C,0,0], /*_*/[0x2642,0,0], /*`*/[0xA9,0xAE,0x2117],
	/*a*/[0x25C7,0x25C8,0x25C6], /*b*/[0x2D0,0x25C1,0x25C0], /*c*/[0xB0,0x260E,0x2668], /*d*/[0x25CB,0x25C9,0x25CF],
	/*e*/[0xD7,0x2194,0x2195], /*f*/[0x2015,0x25B3,0x25B2],	/*g*/[0x7C,0x25BD,0x25BC], /*h*/[0x3261,0x2469,0x2473],
	/*i*/[0x3264,0x2466,0x2470], /*j*/[0x3267,0x2460,0x246A], /*k*/[0x3260,0x2461,0x246B], /*l*/[0x3268,0x2462,0x246C],
	/*m*/[0x326D,0x300B,0], /*n*/[0x3266,0x300A,0], /*o*/[0x3269,0x2467,0x2471], /*p*/[0x326C,0x2468,0x2472],
	/*q*/[0x2190,0x2193,0x261C], /*r*/[0x60,0x2022,0x25E6], /*s*/[0x25A1,0x25A3,0x25A0], /*t*/[0x3003,0x2713,0x2611],
	/*u*/[0x3262,0x2465,0x246F], /*v*/[0,0x25B7,0x25B6], /*w*/[0x2192,0x2191,0x261E], /*x*/[0x2032,0x2606,0x2605],
	/*y*/[0x3263,0x2464,0x246E], /*z*/[0x2033,0x2661,0x2665], /*{*/[0,0,0], /*|*/[0,0,0], /*}*/[0xF7,0,0], /*~*/[0x327F,0,0]];

	K3_2011y_sign_extension_layout = [
		[[0x2921,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x21 exclam */
		[[0x266A,0x266C,0x0000], [0x0000,0x0000,0x0000]], /* 0x22 quotedbl */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x23 numbersign */
		[[0x0000,0x0000,0x0000], [0xFE35,0x0000,0x0000]], /* 0x24 dollar */
		[[0x0000,0x0000,0x0000], [0xFE36,0x0000,0x0000]], /* 0x25 percent */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x26 ampersand */
		[[0x326B,0x3279,0x0000], [0x2030,0x2031,0x0000]], /* 0x27 apostrophe */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x28 parenleft */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x29 parenright */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2A asterisk */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2B plus */
		[[0x3001,0x0000,0x0000], [0x2266,0x226A,0x0000]], /* 0x2C comma */
		[[0x2642,0x2600,0x2601], [0x0000,0x0000,0x0000]], /* 0x2D minus */
		[[0x3002,0x0000,0x0000], [0x2267,0x226B,0x0000]], /* 0x2E period */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2F slash */
		[[0x326A,0x3278,0x0000], [0x2713,0x2611,0x2610]], /* 0x30 0 */
		[[0x2195,0x21C5,0x21F3], [0x03BC,0x0000,0x0000]], /* 0x31 1 */
		[[0x2194,0x21C4,0x2B04], [0x2109,0x0000,0x0000]], /* 0x32 2 */
		[[0xFFE5,0x04B0,0x0000], [0x2103,0x0000,0x0000]], /* 0x33 3 */
		[[0xFFE6,0x0000,0x0000], [0xFFE0,0x0000,0x0000]], /* 0x34 4 */
		[[0x20AC,0xFFE1,0x0000], [0x0000,0x0000,0x0000]], /* 0x35 5 */
		[[0x327E,0x321C,0x327F], [0x2702,0x0000,0x0000]], /* 0x36 6 */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x37 7 */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x38 8 */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x39 9 */
		[[0x2084,0x0000,0x0000], [0x2074,0x0000,0x0000]], /* 0x3A colon */
		[[0x3265,0x3273,0x0000], [0x2463,0x246D,0x3254,0x325E,0x32B9]], /* 0x3B semicolon */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3C less */
		[[0x2640,0x2602,0x2603], [0x2260,0x2245,0x0000]], /* 0x3D equal */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3E greater */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3F question */
		[[0x2922,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x40 at */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x41 A */
		[[0x0000,0x0000,0x0000], [0xFE40,0xFE3E,0x0000]], /* 0x42 B */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x43 C */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x44 D */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x45 E */
		[[0x0000,0x0000,0x0000], [0xFE41,0xFE43,0x0000]], /* 0x46 F */
		[[0x0000,0x0000,0x0000], [0xFE42,0xFE44,0x0000]], /* 0x47 G */
		[[0x2080,0x0000,0x0000], [0x2070,0x0000,0x0000]], /* 0x48 H */
		[[0x2087,0x0000,0x0000], [0x2077,0x0000,0x0000]], /* 0x49 I */
		[[0x2081,0x0000,0x0000], [0x00B9,0x0000,0x0000]], /* 0x4A J */
		[[0x2082,0x0000,0x0000], [0x00B2,0x33A1,0x0000]], /* 0x4B K */
		[[0x2083,0x0000,0x0000], [0x00B3,0x33A5,0x0000]], /* 0x4C L */
		[[0x2019,0x201D,0x0000], [0x0000,0x0000,0x0000]], /* 0x4D M */	
		[[0x2018,0x201C,0x0000], [0x0000,0x0000,0x0000]], /* 0x4E N */
		[[0x2088,0x0000,0x0000], [0x2078,0x0000,0x0000]], /* 0x4F O */
		[[0x2089,0x0000,0x0000], [0x2079,0x0000,0x0000]], /* 0x50 P */
		[[0x2199,0x21B2,0x2B10], [0x2196,0x21B0,0x2B11]], /* 0x51 Q */
		[[0x0000,0x0000,0x0000], [0xFE3B,0xFE39,0x0000]], /* 0x52 R */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x53 S */
		[[0x0000,0x0000,0x0000], [0xFE38,0xFE3C,0xFE3A]], /* 0x54 T */
		[[0x2086,0x0000,0x0000], [0x2076,0x0000,0x0000]], /* 0x55 U */
		[[0x0000,0x0000,0x0000], [0xFE3F,0xFE3D,0x0000]], /* 0x56 V */
 		[[0x2198,0x21B3,0x2B0E], [0x2197,0x21B1,0x2B0F]], /* 0x57 W */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x58 X */
		[[0x2085,0x0000,0x0000], [0x2075,0x0000,0x0000]], /* 0x59 Y */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5A Z */
		[[0x2022,0x25B3,0x25B2], [0x00B1,0x25B7,0x25B6]], /* 0x5B bracketleft */
		[[0x00B6,0x23CE,0x0000], [0x2252,0x2248,0x0000]], /* 0x5C backslash */
		[[0x2025,0x25BD,0x25BC], [0x00F7,0x25C1,0x25C0]], /* 0x5D bracketright */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5E asciicircum */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5F underscore */
		[[0x00A9,0x00AE,0x2117], [0x2122,0x0000,0x0000]], /* 0x60 quoteleft */
		[[0x2026,0x2504,0x0000], [0x25C7,0x25C8,0x25C6]], /* 0x61 a */
		[[0x00A7,0x0000,0x0000], [0x3009,0x300B,0x0000]], /* 0x62 b */
		[[0x00B0,0x0000,0x0000], [0x260E,0x2668,0x0000]], /* 0x63 c */
		[[0x302E,0x0000,0x0000], [0x25CB,0x25C9,0x25CF]], /* 0x64 d */
		[[0x00D7,0x2715,0x0000], [0x203B,0x327C,0x327D]], /* 0x65 e */
		[[0x2015,0x00AF,0xFFE3], [0x300C,0x300E,0x0000]], /* 0x66 f */
		[[0x007C,0x00A6,0x2506], [0x300D,0x300F,0x0000]], /* 0x67 g */
		[[0x3261,0x326F,0x0000], [0x2469,0x2473,0x325A,0x32B5,0x32BF]], /* 0x68 h */
		[[0x3264,0x3272,0x0000], [0x2466,0x2470,0x3257,0x32B2,0x32BC]], /* 0x69 i */
		[[0x3267,0x3275,0x0000], [0x2460,0x246A,0x3251,0x325B,0x32B6]], /* 0x6A j */
		[[0x3260,0x326E,0x0000], [0x2461,0x246B,0x3252,0x325C,0x32B7]], /* 0x6B k */
		[[0x3268,0x3276,0x0000], [0x2462,0x246C,0x3253,0x325D,0x32B8]], /* 0x6C l */
		[[0x326D,0x327B,0x0000], [0x2234,0x2235,0x2261]], /* 0x6D m */
		[[0x3266,0x3274,0x0000], [0x221E,0x221D,0x0000]], /* 0x6E n */
		[[0x3269,0x3277,0x0000], [0x2467,0x2471,0x3258,0x32B3,0x32BD]], /* 0x6F o */
		[[0x326C,0x327A,0x0000], [0x2468,0x2472,0x3259,0x32B4,0x32BE]], /* 0x70 p */
		[[0x2190,0x261C,0x21E6], [0x2193,0x261F,0x21E9]], /* 0x71 q */
		[[0x0060,0x00B4,0x0000], [0x007B,0x3010,0x3014]], /* 0x72 r */
		[[0x302F,0x0000,0x0000], [0x25A1,0x25A3,0x25A0]], /* 0x73 s */
		[[0x3003,0x0000,0x0000], [0x3011,0x3015,0x0000]], /* 0x74 t */
		[[0x3262,0x3270,0x0000], [0x2465,0x246F,0x3256,0x32B1,0x32BB]], /* 0x75 u */
		[[0x02D0,0x0000,0x0000], [0x3008,0x300A,0x0000]], /* 0x76 v */
		[[0x2192,0x261E,0x21E8], [0x2191,0x261D,0x21E7]], /* 0x77 w */
		[[0x2032,0x0000,0x0000], [0x2606,0x2605,0x0000]], /* 0x78 x */
		[[0x3263,0x3271,0x0000], [0x2464,0x246E,0x3255,0x325F,0x32BA]], /* 0x79 y */
		[[0x2033,0x0000,0x0000], [0x2661,0x2665,0x0000]], /* 0x7A z */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x7B braceleft */
		[[0x00A6,0x2506,0x0000], [0x0000,0x0000,0x0000]], /* 0x7C bar */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x7D braceright */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]] /* 0x7E asciitilde */
];

	K3_Sin3_1995_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x0022,	/* 0x22 quotedbl: quotatioin mark */
		0x0023,	/* 0x23 numbersign: number sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x0026,	/* 0x26 ampersand: ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x002a,	/* 0x2A asterisk: asterisk */
		0x002b,	/* 0x2B plus: plus sign */
		0x002c,	/* 0x2C comma: comma */
		0x002d,	/* 0x2D minus: minus sign */
		0x002e,	/* 0x2E period: period */
		0x110f,	/* 0x2F slash: choseong kieuk */
		0x0030,	/* 0x30 0: 0 */
		0x0031,	/* 0x31 1: 1 */
		0x0032,	/* 0x32 2: 2 */
		0x0033,	/* 0x33 3: 3 */
		0x0034,	/* 0x34 4: 4 */
		0x0035,	/* 0x35 5: 5 */
		0x0036,	/* 0x36 6: 6 */
		0x0037,	/* 0x37 7: 7 */
		0x0038,	/* 0x38 8: 8 */
		0x0039,	/* 0x39 9: 9 */
		0x003a,	/* 0x3A colon: colon */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003c,	/* 0x3C less: less-than sign */
		0x003d,	/* 0x3D equal: equals sign */
		0x003e,	/* 0x3E greater: greater-than sign */
		0x003f,	/* 0x3F question: question mark */
		0x0040,	/* 0x40 at: commertial at */
		0x1164,	/* 0x41 A: jungseong yae */
		0x116e,	/* 0x42 B: jungseong u */
		0x1166,	/* 0x43 C: jungseong e */
		0x1175,	/* 0x44 D: jungseong i */
		0x1167,	/* 0x45 E: jungseong yeo */
		0x1161,	/* 0x46 F: jungseong a */
		0x1173,	/* 0x47 G: jungseong eu */
		0x0000,	/* 0x48 H: */
		0x116e,	/* 0x49 I: jungseong o */
		0x003b,	/* 0x4A J: semicolon */
		0x0027,	/* 0x4B K: apostrophe */
		0x0000,	/* 0x4C L: */
		0x002f,	/* 0x4D M: slash */
		0x0000,	/* 0x4E N: */
		0x116e,	/* 0x4F O: jungseong u */
		0x1169,	/* 0x50 P: jungseong o */
		0x1174,	/* 0x51 Q: jungseong eui */
		0x1162,	/* 0x52 R: jungseong ae */
		0x1168,	/* 0x53 S: jungseong ye */
		0x1165,	/* 0x54 T: jungseong eo */
		0x0000,	/* 0x55 U: */
		0x1169,	/* 0x56 V: jungseong o */
		0x1163,	/* 0x57 W: jungseong ya */
		0x116d,	/* 0x58 X: jungseong yo */
		0x0000,	/* 0x59 Y: */
		0x1172,	/* 0x5A Z: jungseong yu */
		0x005b,	/* 0x5B bracketleft: left bracket */
		0x005c,	/* 0x5C backslash: backslash */
		0x005d,	/* 0x5D bracketright: right bracket */
		0x005e,	/* 0x5E asciicircum: circumflex accent */
		0x005f,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x11bc,	/* 0x61 a: jongseong ieung */
		0x11bb,	/* 0x62 b: jongseong ssangsieus */
		0x11be,	/* 0x63 c: jongseong chieuch */
		0x11c2,	/* 0x64 d: jongseong hieuh */
		0x11b8,	/* 0x65 e: jongseong bieub */
		0x11bd,	/* 0x66 f: jongseong jieuj */
		0x11c1,	/* 0x67 g: jongseong pieup */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110b,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110c,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110e,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11ba,	/* 0x71 q: jongseong sieus */
		0x11ae,	/* 0x72 r: jongseong dieud */
		0x11ab,	/* 0x73 s: jongseong nieun */
		0x11c0,	/* 0x74 t: jongseong tieut */
		0x1103,	/* 0x75 u: choseong dieud */
		0x11bf,	/* 0x76 v: jongseong kieuk */
		0x11af,	/* 0x77 w: jongseong lieul */
		0x11a8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11b7,	/* 0x7A z: jongseong mieum */
		0x007b,	/* 0x7B braceleft: left brace */
		0x007c,	/* 0x7C bar: vertical line(bar) */
		0x007d,	/* 0x7D braceright: right brace */
		0x007e	/* 0x7E asciitilde: tilde */
	];

	// 박경남 신세벌식 자판
	K3_Sin3_BGN_layout = [
		0x203B,	/* 0x21 exclam:       reference mark */
		0x00b7,	/* 0x22 quotedbl:     middle dot */
		0x0023,	/* 0x23 numbersign:   number sign */
		0x0024,	/* 0x24 dollar:       dollar sign */
		0x0025,	/* 0x25 percent:      percent sign */
		0x0026,	/* 0x26 ampersand:    ampersand */
		0x1110,	/* 0x27 apostrophe:   choseong tieuh */
		0x0028,	/* 0x28 parenleft:    left parenthesis */
		0x0029,	/* 0x29 parenright:   right parenthesis */
		0x002a,	/* 0x2A asterisk:     asterisk */
		0x002b,	/* 0x2B plus:         plus sign */
		0x002c,	/* 0x2C comma:        comma */
		0x002d,	/* 0x2D minus:        minus sign */
		0x002e,	/* 0x2E period:       period */
		0x110f,	/* 0x2F slash:        choseong kieuk */
		0x0030,	/* 0x30 0:            0 */
		0x0031,	/* 0x31 1:            1 */
		0x0032,	/* 0x32 2:            2 */
		0x0033,	/* 0x33 3:            3 */
		0x0034,	/* 0x34 4:            4 */
		0x0035,	/* 0x35 5:            5 */
		0x0036,	/* 0x36 6:            6 */
		0x0037,	/* 0x37 7:            7 */
		0x0038,	/* 0x38 8:            8 */
		0x0039,	/* 0x39 9:            9 */
		0x003a,	/* 0x3A colon:        colon */
		0x1107,	/* 0x3B semicolon:    choseong  bieub */
		0x003c,	/* 0x3C less:         less-than sign */
		0x003d,	/* 0x3D equal:        equals sign */
		0x003e,	/* 0x3E greater:      greater-than sign */
		0x0021,	/* 0x3F question:     exclamation mark */
		0x0040,	/* 0x40 at:           commertial at */
		0x1172,	/* 0x41 A:            jungseong yu */
		0x116e,	/* 0x42 B:            jungseong u */
		0x1166,	/* 0x43 C:            jungseong e */
		0x1175,	/* 0x44 D:            jungseong i */
		0x1167,	/* 0x45 E:            jungseong yeo */
		0x1161,	/* 0x46 F:            jungseong a */
		0x1173,	/* 0x47 G:            jungseong eu */
		0x0000, /* 0x48 H:            */
		0x1174,	/* 0x49 I:            jungseong eui */
		0x0022, /* 0x4A J:            quotatioin mark */
		0x003b, /* 0x4B K:            semicolon */
		0x0027, /* 0x4C L:            apostrophe */
		0x002f, /* 0x4D M:            slash */
		0x0000, /* 0x4E N:            */
		0x116e,	/* 0x4F O:            jungseong u */
		0x1169,	/* 0x50 P:            jungseong o */
		0x1164,	/* 0x51 Q:            jungseong yae */
		0x1162,	/* 0x52 R:            jungseong ae */
		0x1168,	/* 0x53 S:            jungseong ye */
		0x1165,	/* 0x54 T:            jungseong eo */
		0x0000, /* 0x55 U:            */
		0x1169,	/* 0x56 V:            jungseong o */
		0x1163,	/* 0x57 W:            jungseong ya */
		0x116d,	/* 0x58 X:            jungseong yo */
		0x0000,	/* 0x59 Y:            */
		0x003f,	/* 0x5A Z:            question mark */
		0x005b,	/* 0x5B bracketleft:  left bracket */
		0x005c,	/* 0x5C backslash:    backslash */
		0x005d,	/* 0x5D bracketright: right bracket */
		0x005e,	/* 0x5E asciicircum:  circumflex accent */
		0x005f,	/* 0x5F underscore:   underscore */
		0x0060,	/* 0x60 quoteleft:    grave accent */
		0x11bc,	/* 0x61 a:            jongseong ieung */
		0x11bf,	/* 0x62 b:            jongseong kieuk */
		0x11be,	/* 0x63 c:            jongseong chieuch */
		0x11ae,	/* 0x64 d:            jongseong dieud */
		0x11b8,	/* 0x65 e:            jongseong bieub */
		0x11bb,	/* 0x66 f:            jongseong ssangsieus */
		0x11bd,	/* 0x67 g:            jongseong jieuj */
		0x1102,	/* 0x68 h:            choseong nieun */
		0x1106,	/* 0x69 i:            choseong mieum */
		0x110b,	/* 0x6A j:            choseong ieung */
		0x1100,	/* 0x6B k:            choseong gieug */
		0x110c,	/* 0x6C l:            choseong jieuc */
		0x1112,	/* 0x6D m:            choseong hieuh */
		0x1109,	/* 0x6E n:            choseong sieus */
		0x110e,	/* 0x6F o:            choseong chieuch */
		0x1111,	/* 0x70 p:            choseong pieup */
		0x11ba,	/* 0x71 q:            jongseong sieus */
		0x11c0,	/* 0x72 r:            jongseong tieut */
		0x11ab,	/* 0x73 s:            jongseong nieun */
		0x11c1,	/* 0x74 t:            jongseong pieup */
		0x1103,	/* 0x75 u:            choseong dieud */
		0x11c2,	/* 0x76 v:            jongseong hieuh */
		0x11af,	/* 0x77 w:            jongseong lieul */
		0x11a8,	/* 0x78 x:            jongseong gieug */
		0x1105,	/* 0x79 y:            choseong lieul */
		0x11b7,	/* 0x7A z:            jongseong mieum */
		0x007b,	/* 0x7B braceleft:    left brace */
		0x007c,	/* 0x7C bar:          vertical line(bar) */
		0x007d,	/* 0x7D braceright:   right brace */
		0x007e	/* 0x7E asciitilde:   tilde */
	];

	K3_Sin3_2012_layout = [
		0x0021,	/* 0x21 exclamation */
		0x002f,	/* 0x22 quotedbl: slash */
		0x0023,	/* 0x23 number */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand: ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 left parenthesis */
		0x0029,	/* 0x29 right parenthesis */
		0x002a,	/* 0x2A asterisk */
		0x002b,	/* 0x2B plus */
		0x002c,	/* 0x2C comma */
		0x002d,	/* 0x2D minus */
		0x002e,	/* 0x2E period */
		0x110f,	/* 0x2F slash: choseong kieuk */
		0x0030,	/* 0x30 0 */
		0x0031,	/* 0x31 1 */
		0x0032,	/* 0x32 2 */
		0x0033,	/* 0x33 3 */
		0x0034,	/* 0x34 4 */
		0x0035,	/* 0x35 5 */
		0x0036,	/* 0x36 6 */
		0x0037,	/* 0x37 7 */
		0x0038,	/* 0x38 8 */
		0x0039,	/* 0x39 9 */
		0x003a,	/* 0x3A colon */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003c,	/* 0x3C less-than */
		0x003d,	/* 0x3D equals */
		0x003e,	/* 0x3E greater-than */
		0x003f,	/* 0x3F question */
		0x0040,	/* 0x40 commertial at */
		0x1172,	/* 0x41 A: jungseong yu*/
		0x116e,	/* 0x42 B: jungseong u */
		0x1166,	/* 0x43 C: jungseong e */
		0x1175,	/* 0x44 D: jungseong i */
		0x1167,	/* 0x45 E: jungseong yeo */
		0x1161,	/* 0x46 F: jungseong a */
		0x1173,	/* 0x47 G: jungseong eu*/
		0x25A1,	/* 0x48 H: white squre */
		0x1174,	/* 0x49 I: jungseong eui */
		0x2015,	/* 0x4A J: horizontal bar */
		0x00B7,	/* 0x4B K: middle dot */
		0x003b,	/* 0x4C L: semicolon */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x116e,	/* 0x4F O: jungseong u */
		0x1169,	/* 0x50 P: jungseong o */
		0x1164,	/* 0x51 Q: jungseong yae */
		0x1165,	/* 0x52 R: jungseong eo */
		0x1168,	/* 0x53 S: jungseong ye */
		0x1162,	/* 0x54 T: jungseong ae */
		0x25CB,	/* 0x55 U: white circle */
		0x1169,	/* 0x56 V: jungseong o */
		0x1163,	/* 0x57 W: jungseong ya */
		0x116d,	/* 0x58 X: jungseong yo */
		0x00D7,	/* 0x59 Y: multiplication */
		0x119e,	/* 0x5A Z: jungseong araea*/
		0x005b,	/* 0x5B left bracket */
		0x005c,	/* 0x5C backslash */
		0x005d,	/* 0x5D right bracket */
		0x005e,	/* 0x5E circumflex accent */
		0x005f,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x11bc,	/* 0x61 a: jongseong ieung */
		0x11bf,	/* 0x62 b: jongseong kieuk */
		0x11c2,	/* 0x63 c: jongseong hieuh */
		0x11bb,	/* 0x64 d: jongseong ssangsieus */
		0x11b8,	/* 0x65 e: jongseong bieub */
		0x11be,	/* 0x66 f: jongseong chieuch */
		0x11bd,	/* 0x67 g: jongseong jieuj */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110b,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110c,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110e,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11ba,	/* 0x71 q: jongseong sios  */
		0x11c0,	/* 0x72 r: jongseong tieut */
		0x11ab,	/* 0x73 s: jongseong nieun */
		0x11ae,	/* 0x74 t: jongseong dieud */
		0x1103,	/* 0x75 u: choseong dieud */
		0x11c1,	/* 0x76 v: jongseong pieup */
		0x11af,	/* 0x77 w: jongseong lieul */
		0x11a8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11b7,	/* 0x7A z: jongseong mieum */
		0x007b,	/* 0x7B left brace */
		0x007c,	/* 0x7C vertical line(bar) */
		0x007d,	/* 0x7D right brace */
		0x007e,	/* 0x7E tilde */
	];

	K3_Sin3_2012_sublayout = [
		0x0000,	/* 0x21 exclam: */
		0x0000,	/* 0x22 quotedbl: */
		0x0000,	/* 0x23 numbersign: */
		0x0000,	/* 0x24 dollar: */
		0x0000,	/* 0x25 percent: */
		0x0000,	/* 0x26 ampersand: */
		0x0000,	/* 0x27 apostrophe: */
		0x0000,	/* 0x28 parenleft: */
		0x0000,	/* 0x29 parenright: */
		0x0000,	/* 0x2A asterisk: */
		0x0000,	/* 0x2B plus: */
		0x0000,	/* 0x2C comma: */
		0x0000,	/* 0x2D minus: */
		0x0000,	/* 0x2E period: */
		0x0000,	/* 0x2F slash: */
		0x0000,	/* 0x30 0: */
		0x0000,	/* 0x31 1: */
		0x0000,	/* 0x32 2: */
		0x0000,	/* 0x33 3: */
		0x0000,	/* 0x34 4: */
		0x0000,	/* 0x35 5: */
		0x0000,	/* 0x36 6: */
		0x0000,	/* 0x37 7: */
		0x0000,	/* 0x38 8: */
		0x0000,	/* 0x39 9: */
		0x0000,	/* 0x3A colon: */
		0x0000,	/* 0x3B semicolon: */
		0x0000,	/* 0x3C less: */
		0x0000,	/* 0x3D equal: */
		0x0000,	/* 0x3E greater: */
		0x0000,	/* 0x3F question: */
		0x0000,	/* 0x40 at: */
		0x11B9,	/* 0x41 A: jongseong bieub-sieus */
		0x0000,	/* 0x42 B: */
		0x11B6,	/* 0x43 C: jongseong lieul-hieuh */
		0x11AC,	/* 0x44 D: jongseong nieun-jieuj */
		0x11B2,	/* 0x45 E: jongseong lieul-bieub */
		0x11AA,	/* 0x46 F: jongseong gieug-sieus */
		0x0000,	/* 0x47 G: */
		0x0000,	/* 0x48 H: */
		0x0000,	/* 0x49 I: */
		0x0000,	/* 0x4A J: */
		0x0000,	/* 0x4B K: */
		0x0000,	/* 0x4C L: */
		0x0000,	/* 0x4D M: */
		0x0000,	/* 0x4E N: */
		0x0000,	/* 0x4F O: */
		0x0000,	/* 0x50 P: */
		0x11B3,	/* 0x51 Q: jongseong lieul-sieus */
		0x11B4,	/* 0x52 R: jongseong lieul-tieut */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x0000,	/* 0x54 T: */
		0x0000,	/* 0x55 U: */
		0x11B5,	/* 0x56 V: jongseong lieul-pieup */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11A9,	/* 0x58 X: jongseong ssanggieug  */
		0x0000,	/* 0x59 Y: */
		0x11b1,	/* 0x5A Z: jongseong lieul-mieum */
		0x0000,	/* 0x5B bracketleft: */
		0x0000,	/* 0x5C backslash: */
		0x0000,	/* 0x5D bracketright: */
		0x0000,	/* 0x5E asciicircum: */
		0x0000,	/* 0x5F underscore: */
		0x0000,	/* 0x60 quoteleft: */
		0x11B9,	/* 0x61 a: jongseong bieub-sieus */
		0x0000,	/* 0x62 b: */
		0x11B6,	/* 0x63 c: jongseong lieul-hieuh */
		0x11AC,	/* 0x64 d: jongseong nieun-jieuj */
		0x11B2,	/* 0x65 e: jongseong lieul-bieub */
		0x11AA,	/* 0x66 f: jongseong gieug-sieus */
		0x0000,	/* 0x67 g: */
		0x0000,	/* 0x68 h: */
		0x0000,	/* 0x69 i: */
		0x0000,	/* 0x6A j: */
		0x0000,	/* 0x6B k: */
		0x0000,	/* 0x6C l: */
		0x0000,	/* 0x6D m: */
		0x0000,	/* 0x6E n: */
		0x0000,	/* 0x6F o: */
		0x0000,	/* 0x70 p: */
		0x11B3,	/* 0x71 q: jongseong lieul-sieus */
		0x11B4,	/* 0x72 r: jongseong lieul-tieut */
		0x11AD,	/* 0x73 s: jongseong nieun-hieuh */
		0x0000,	/* 0x74 t: */
		0x0000,	/* 0x75 u: */
		0x11B5,	/* 0x76 v: jongseong lieul-pieup */
		0x11B0,	/* 0x77 w: jongseong lieul-gieug */
		0x11A9,	/* 0x78 x: jongseong ssanggieug  */
		0x0000,	/* 0x79 y: */
		0x11b1,	/* 0x7A z: jongseong lieul-mieum */
		0x0000,	/* 0x7B braceleft: */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x0000,	/* 0x7E asciitilde: */
	];
	
	// 바꾼꼴 신세벌식 2015 자판
	K3_Sin3b_2015_layout = [/*!*/33,/*"*/47,/*#*/35,/*$*/36,/*%*/37,/*&*/38,/*'*/0x1110/*ㅌ*/,/*(*/40,
	/*)*/41,/***/42,/*+*/43,/*,*/44,/*-*/45,/*.*/46,/*/*/0x110f/*ㅋ*/,/*0*/48,
	/*1*/49,/*2*/50,/*3*/51,/*4*/52,/*5*/53,/*6*/54,/*7*/55,/*8*/56,/*9*/57,
	/*:*/58,/*;*/0x1107/*ㅂ*/,/*<*/60,/*=*/61,/*>*/62,/*?*/63,/*@*/64,
	/*A*/0x11bb/*ㅆ*/,/*B*/0x11bf/*ㅋ*/,/*C*/0x11ba/*ㅅ*/,/*D*/0x11af/*ㄹ*/,/*E*/0x11bc/*ㅇ*/,/*F*/0x11c0/*ㅌ*/,/*G*/0x11ae/*ㄷ*/,
	/*H*/0x3008,/*I*/0x2026,/*J*/0x3009,/*K*/183,/*L*/59,/*M*/34,/*N*/39,/*O*/0x116e/*ㅜ*/,/*P*/0x1169/*ㅗ*/,
	/*Q*/0x11c2/*ㅎ*/,/*R*/0x11bd/*ㅈ*/,/*S*/0x11ab/*ㄴ*/,/*T*/0x11c1/*ㅍ*/,/*U*/0x300B,/*V*/0x11be/*ㅊ*/,/*W*/0x11b7/*ㅁ*/,/*X*/0x11a8/*ㄱ*/,
	/*Y*/0x300A,/*Z*/0x11b8/*ㅂ*/,/*[*/91,/*\*/92,/*]*/93,/*^*/94,/*_*/95,/*`*/96,
	/*a*/0x1163/*ㅑ*/,/*b*/0x116e/*ㅜ*/,/*c*/0x1166/*ㅔ*/,/*d*/0x1175/*ㅣ*/,/*e*/0x1167/*ㅕ*/,/*f*/0x1161/*ㅏ*/,/*g*/0x1173/*ㅡ*/,
	/*h*/0x1102/*ㄴ*/,/*i*/0x1106,/*j*/0x110b/*―*/,/*k*/0x1100/*·*/,/*l*/0x110c/*;*/,/*m*/0x1112,/*n*/0x1109,/*o*/0x110e,/*p*/0x1111/*ㅍ*/,
	/*q*/0x1164/*ㅒ*/,/*r*/0x1162/*ㅐ*/,/*s*/0x1174/*ㅢ*/,/*t*/0x1165/*ㅓ*/,/*u*/0x1103/*ㄷ*/,/*v*/0x1169/*ㅗ*/,/*w*/0x1168/*ㅖ*/,/*x*/0x116d/*ㅛ*/,
	/*y*/0x1105/*ㄹ*/,/*z*/0x1172/*ㅠ*/,/*{*/123,/*|*/124,/*}*/125,/*~*/126];
	
	// 바꾼꼴 신세벌식 M 자판
	K3_Sin3b_M_layout = [/*!*/33,/*"*/47,/*#*/35,/*$*/36,/*%*/37,/*&*/38,/*'*/0x1110/*ㅌ*/,/*(*/40,
	/*)*/41,/***/42,/*+*/43,/*,*/44,/*-*/45,/*.*/46,/*/*/0x110f/*ㅋ*/,/*0*/48,
	/*1*/49,/*2*/50,/*3*/51,/*4*/52,/*5*/53,/*6*/54,/*7*/55,/*8*/56,/*9*/57,
	/*:*/58,/*;*/0x1107/*ㅂ*/,/*<*/60,/*=*/61,/*>*/62,/*?*/63,/*@*/64,
	/*A*/0x11bc/*ㅇ*/,/*B*/0x11be/*ㅊ*/,/*C*/0x11c0/*ㅌ*/,/*D*/0x11c2/*ㅎ*/,/*E*/0x11b8/*ㅂ*/,/*F*/0x11bb/*ㅆ*/,/*G*/0x11ae/*ㄷ*/,/*H*/0x300A,
	/*I*/0x203B,/*J*/0x300B,/*K*/183,/*L*/59,/*M*/34,/*N*/39,/*O*/0x116e/*ㅜ*/,/*P*/0x1169/*ㅗ*/,
	/*Q*/0x11ba/*ㅅ*/,/*R*/0x11bd/*ㅈ*/,/*S*/0x11ab/*ㄴ*/,/*T*/0x11bf/*ㅋ*/,/*U*/0x201D,/*V*/0x11c1/*ㅍ*/,/*W*/0x11af/*ㄹ*/,/*X*/0x11a8/*ㄱ*/,
	/*Y*/0x201C,/*Z*/0x11b7/*ㅁ*/,/*[*/91,/*\*/92,/*]*/93,/*^*/94,/*_*/95,/*`*/96,
	/*a*/0x1172/*ㅠ*/,/*b*/0x116e/*ㅜ*/,/*c*/0x1166/*ㅔ*/,/*d*/0x1175/*ㅣ*/,/*e*/0x1167/*ㅕ*/,/*f*/0x1161/*ㅏ*/,/*g*/0x1173/*ㅡ*/,/*h*/0x1102/*ㄴ*/,
	/*i*/0x1106,/*j*/0x110b/*―*/,/*k*/0x1100/*·*/,/*l*/0x110c/*;*/,/*m*/0x1112,/*n*/0x1109,/*o*/0x110e,/*p*/0x1111/*ㅍ*/,
	/*q*/0x1164/*ㅒ*/,/*r*/0x1162/*ㅐ*/,/*s*/0x1174/*ㅢ*/,/*t*/0x1165/*ㅓ*/,/*u*/0x1103,/*v*/0x1169/*ㅗ*/,/*w*/0x1163/*ㅑ*/,/*x*/0x116d/*ㅛ*/,
	/*y*/0x1105,/*z*/0x1168/*ㅖ*/,/*{*/123,/*|*/124,/*}*/125,/*~*/126];

	// 3-2011 / 3-2012 옛한글 자판의 한글 확장 배열
	K3_2012y_hangeul_extension_layout = [
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x21 exclam: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x22 quotedbl: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x23 numbersign: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x24 dollar: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x25 percent: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x26 ampersand: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x27 apostrophe: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x28 parenleft: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x29 parenright: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2A asterisk: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2B plus: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2C comma: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2D minus: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2E period: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2F slash: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x30 0: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x31 1: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x32 2: jongseong ap-sieus(non-standard), jongseong ssang-ap-sieus(non-standard), jongseong dwits-sieus(non-standard), jongseong ssang-dwits-sieus(non-standard) */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x33 3: */
		[[0xD7C2,0x0000], [0x0000,0x0000]], /* 0x34 4: i+yo */
		[[0xD7C3,0x0000], [0x0000,0x0000]], /* 0x35 5: i+yu */
		[[0x1199,0x0000], [0x0000,0x0000]], /* 0x36 6: i+ya */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x37 7: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x38 8: */
		[[0x113C,0x113D], [0x113E,0x113F]], /* 0x39 9: choseong ap-sieus, choseong ssang-ap-sieus, choseong dwits-sieus, choseong ssang-dwits-sieus */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3A colon: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3B semicolon: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3C less: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3D equal: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3E greater: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3F question: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x40 at: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x41 A: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x42 B: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x43 C: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x44 D: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x45 E: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x46 F: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x47 G: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x48 H: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x49 I: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4A J: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4B K: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4C L: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4D M: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4E N: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4F O: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x50 P: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x51 Q: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x52 R: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x53 S: */
		[[0xD7BE,0x0000], [0x0000,0x0000]], /* 0x54 T: i+yae */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x55 U: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x56 V: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x57 W: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x58 X: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x59 Y: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5A Z: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5B */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5C */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5D */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5E */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5F */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x60 */
		[[0x0000,0x0000], [0x11F0,0x11EE]], /* 0x61 a: yes-ieung, ssangyesieung */
		[[0x119B,0x0000], [0x1195,0x0000]], /* 0x62 b: i+u, eu+u */
		[[0x1168,0x0000], [0xD7BB,0x0000]], /* 0x63 c: ye, eu+e */
		[[0xD7C4,0x0000], [0x1174,0x0000]], /* 0x64 d: i+i, eu+i */
		[[0xD7BF,0x0000], [0x119E,0x11A2]], /* 0x65 e: i+yeo, arae-a, ssangarae-a */
		[[0x1198,0x0000], [0xD7B9,0x0000]], /* 0x66 f: i+a, eu+a */
		[[0x119C,0x0000], [0x1196,0x0000]], /* 0x67 g: i+eu, eu+eu */
		[[0x0000,0x0000], [0x1159,0xA97C]], /* 0x68 h: choseong yeorinhieuh, choseong ssangyeorinhieuh */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x69 i: */
		[[0x0000,0x0000], [0x114C,0x0000]], /* 0x6A j: choseong yes-ieung, choseong ssang-yes-ieung(non-standard) */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x6B k: */
		[[0x114E,0x114F], [0x1150,0x1151]], /* 0x6C l: choseong ap-jieuj, choseong ssang-ap-jieuj, choseong dwits-jieuj, choseong ssang-dwits-jieuj */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x6D m: */
		[[0x0000,0x0000], [0x1140,0x0000]], /* 0x6E n: choseong yeorin-sieus*/
		[[0x1154,0x0000], [0x1155,0x0000]], /* 0x6F o: choseong ap-chieuch, choseong dwits-chieuch */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x70 p: */
		[[0x0000,0x0000], [0x11EB,0x0000]], /* 0x71 q: jongseong yeorin-sieus */
		[[0x0000,0x0000], [0xD7BA,0x0000]], /* 0x72 r: eu+eo */
		[[0x0000,0x0000], [0x11F9,0x0000]], /* 0x73 s: jongseong yeorin-hieuh, jongseong yeorin-ssang-hieuh(non-standard) */
		[[0x1164,0xD7BE], [0x0000,0x0000]], /* 0x74 t: yae, i+yae */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x75 u: */
		[[0x119A,0x0000], [0xD7BC,0x0000]], /* 0x76 v: i+o, eu+o */
		[[0x0000,0x0000], [0xD7DD,0x0000]], /* 0x77 w: jongseong lieul-ieung */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x78 x: jongseong ap-jieuj(non-standard), jongseong ssang-ap-jieuj(non-standard), jongseong dwits-jieuj(non-standard), jongseong ssang-dwits-jieuj(non-standard) */
		[[0x0000,0x0000], [0x111B,0x0000]], /* 0x79 y: choseong lieul-ieung */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x7A z: jongseong ap-chieuch(non-standard), jongseong dwits-chieuch(non-standard) */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x7B braceleft: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x7C bar: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x7D braceright: */
		[[0x0000,0x0000], [0x0000,0x0000]]  /* 0x7E asciitilde: */
	];

	K3_2012y_sign_extension_layout = [
		[[0x2921,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x21 exclam */
		[[0x266A,0x266C,0x0000], [0x0000,0x0000,0x0000]], /* 0x22 quotedbl */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x23 numbersign */
		[[0x0000,0x0000,0x0000], [0xFE35,0x0000,0x0000]], /* 0x24 dollar */
		[[0x0000,0x0000,0x0000], [0xFE36,0x0000,0x0000]], /* 0x25 percent */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x26 ampersand */
		[[0x326B,0x3279,0x0000], [0x00F7,0x0000,0x0000]], /* 0x27 apostrophe */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x28 parenleft */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x29 parenright */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2A asterisk */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2B plus */
		[[0x3001,0x0000,0x0000], [0x2266,0x226A,0x0000]], /* 0x2C comma */
		[[0x2642,0x2600,0x2601], [0x00B1,0x002D,0x0000]], /* 0x2D minus */
		[[0x3002,0x0000,0x0000], [0x2267,0x226B,0x0000]], /* 0x2E period */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2F slash */
		[[0x326A,0x3278,0x0000], [0x2713,0x2611,0x2610]], /* 0x30 0 */
		[[0x2195,0x21C5,0x21F3], [0x03BC,0x0000,0x0000]], /* 0x31 1 */
		[[0x2194,0x21C4,0x2B04], [0x2109,0x0000,0x0000]], /* 0x32 2 */
		[[0xFFE5,0x04B0,0x0000], [0x2103,0x0000,0x0000]], /* 0x33 3 */
		[[0xFFE6,0x0000,0x0000], [0xFFE0,0x0000,0x0000]], /* 0x34 4 */
		[[0x20AC,0xFFE1,0x0000], [0x2030,0x2031,0x0000]], /* 0x35 5 */
		[[0x327E,0x321C,0x327F], [0x2702,0x0000,0x0000]], /* 0x36 6 */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x37 7 */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x38 8 */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x39 9 */
		[[0x2084,0x0000,0x0000], [0x2074,0x0000,0x0000]], /* 0x3A colon */
		[[0x3265,0x3273,0x0000], [0x2463,0x246D,0x3254,0x325E,0x32B9]], /* 0x3B semicolon */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3C less */
		[[0x2640,0x2602,0x2603], [0x2260,0x2245,0x0000]], /* 0x3D equal */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3E greater */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3F question */
		[[0x2922,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x40 at */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x41 A */
		[[0x0000,0x0000,0x0000], [0xFE40,0xFE3E,0x0000]], /* 0x42 B */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x43 C */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x44 D */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x45 E */
		[[0x0000,0x0000,0x0000], [0xFE41,0xFE43,0x0000]], /* 0x46 F */
		[[0x0000,0x0000,0x0000], [0xFE42,0xFE44,0x0000]], /* 0x47 G */
		[[0x2080,0x0000,0x0000], [0x2070,0x0000,0x0000]], /* 0x48 H */
		[[0x2087,0x0000,0x0000], [0x2077,0x0000,0x0000]], /* 0x49 I */
		[[0x2081,0x0000,0x0000], [0x00B9,0x0000,0x0000]], /* 0x4A J */
		[[0x2082,0x0000,0x0000], [0x00B2,0x33A1,0x0000]], /* 0x4B K */
		[[0x2083,0x0000,0x0000], [0x00B3,0x33A5,0x0000]], /* 0x4C L */
		[[0x2019,0x201D,0x0000], [0x0000,0x0000,0x0000]], /* 0x4D M */
		[[0x2018,0x201C,0x0000], [0x0000,0x0000,0x0000]], /* 0x4E N */
		[[0x2088,0x0000,0x0000], [0x2078,0x0000,0x0000]], /* 0x4F O */
		[[0x2089,0x0000,0x0000], [0x2079,0x0000,0x0000]], /* 0x50 P */
		[[0x2199,0x21B2,0x2B10], [0x2196,0x21B0,0x2B11]], /* 0x51 Q */
		[[0x0000,0x0000,0x0000], [0xFE3B,0xFE39,0x0000]], /* 0x52 R */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x53 S */
		[[0x0000,0x0000,0x0000], [0xFE3C,0xFE3A,0x0000]], /* 0x54 T */
		[[0x2086,0x0000,0x0000], [0x2076,0x0000,0x0000]], /* 0x55 U */
		[[0x0000,0x0000,0x0000], [0xFE3F,0xFE3D,0x0000]], /* 0x56 V */
		[[0x2198,0x21B3,0x2B0E], [0x2197,0x21B1,0x2B0F]], /* 0x57 W */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x58 X */
		[[0x2085,0x0000,0x0000], [0x2075,0x0000,0x0000]], /* 0x59 Y */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5A Z */
		[[0x25B3,0x25B2,0x0000], [0x25B7,0x25B6,0x0000]], /* 0x5B bracketleft */
		[[0x00B6,0x23CE,0x0000], [0x2252,0x2248,0x0000]], /* 0x5C backslash:*/
		[[0x25BD,0x25BC,0x0000], [0x25C1,0x25C0,0x0000]], /* 0x5D bracketright:*/
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5E asciicircum:*/
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5F */
		[[0x00A9,0x00AE,0x2117], [0x2122,0x0000,0x0000]], /* 0x60 */
		[[0x2026,0x2504,0x0000], [0x25C7,0x25C8,0x25C6]], /* 0x61 a */
		[[0x00A7,0x0000,0x0000], [0x3009,0x300B,0x0000]], /* 0x62 b */
		[[0x00B0,0x0000,0x0000], [0x260E,0x2668,0x0000]], /* 0x63 c */
		[[0x302E,0x0000,0x0000], [0x25CB,0x25C9,0x25CF]], /* 0x64 d */
		[[0x00D7,0x2715,0x0000], [0x203B,0x327C,0x327D]], /* 0x65 e */
		[[0x00B7,0x2022,0x25E6], [0x300C,0x300E,0x0000]], /* 0x66 f */
		[[0x2015,0x00AF,0xFFE3], [0x300D,0x300F,0x0000]], /* 0x67 g */
		[[0x3261,0x326F,0x0000], [0x2469,0x2473,0x325A,0x32B5,0x32BF]], /* 0x68 h */
		[[0x3264,0x3272,0x0000], [0x2466,0x2470,0x3257,0x32B2,0x32BC]], /* 0x69 i */
		[[0x3267,0x3275,0x0000], [0x2460,0x246A,0x3251,0x325B,0x32B6]], /* 0x6A j */
		[[0x3260,0x326E,0x0000], [0x2461,0x246B,0x3252,0x325C,0x32B7]], /* 0x6B k */
		[[0x3268,0x3276,0x0000], [0x2462,0x246C,0x3253,0x325D,0x32B8]], /* 0x6C l */
		[[0x326D,0x327B,0x0000], [0x2234,0x2235,0x2261]], /* 0x6D m */
		[[0x3266,0x3274,0x0000], [0x221E,0x221D,0x0000]], /* 0x6E n */
		[[0x3269,0x3277,0x0000], [0x2467,0x2471,0x3258,0x32B3,0x32BD]], /* 0x6F o */
		[[0x326C,0x327A,0x0000], [0x2468,0x2472,0x3259,0x32B4,0x32BE]], /* 0x70 p */
		[[0x2190,0x261C,0x21E6], [0x2193,0x261F,0x21E9]], /* 0x71 q */
		[[0x00B4,0x0000,0x0000], [0x3010,0x3014,0x0000]], /* 0x72 r */
		[[0x302F,0x0000,0x0000], [0x25A1,0x25A3,0x25A0]], /* 0x73 s */
		[[0x3003,0x0000,0x0000], [0x3011,0x3015,0x0000]], /* 0x74 t */
		[[0x3262,0x3270,0x0000], [0x2465,0x246F,0x3256,0x32B1,0x32BB]], /* 0x75 u */
		[[0x02D0,0x0000,0x0000], [0x3008,0x300A,0x0000]], /* 0x76 v */
		[[0x2192,0x261E,0x21E8], [0x2191,0x261D,0x21E7]], /* 0x77 w */
		[[0x2032,0x0000,0x0000], [0x2606,0x2605,0x0000]], /* 0x78 x */
		[[0x3263,0x3271,0x0000], [0x2464,0x246E,0x3255,0x325F,0x32BA]], /* 0x79 y */
		[[0x2033,0x0000,0x0000], [0x2661,0x2665,0x0000]], /* 0x7A z */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x7B braceleft */
		[[0x00A6,0x2506,0x0000], [0x0000,0x0000,0x0000]], /* 0x7C bar */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x7D braceright */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]]  /* 0x7E asciitilde */
];

	K3_14_proposal_layout = [
		0x0021, /* 0x21 exclam: exclamation mark */
		0x0022, /* 0x22 quotedbl: quotatioin mark */
		0x0023, /* 0x23 numbersign: number sign */
		0x0024, /* 0x24 dollar: dollar sign */
		0x0025, /* 0x25 percent: percent sign */
		0x0026, /* 0x26 ampersand: ampersand */
		0x1110, /* 0x27 apostrophe: choseong tieut */
		0x0028, /* 0x28 parenleft: left parenthesis */
		0x0029, /* 0x29 parenright: right parenthesis */
		0x002a, /* 0x2A asterisk: asterisk */
		0x002b, /* 0x2B plus: plus sign */
		0x002c, /* 0x2C comma: comma */
		0x002d, /* 0x2D minus: minus sign */
		0x002e, /* 0x2E period: period */
		0x1169, /* 0x2F slash: jungseong o */
		0x110f, /* 0x30 0: choseong kieuh */
		0x11c2, /* 0x31 1: jongseong hieuh */
		0x11bb, /* 0x32 2: jongseong ssangsieus */
		0x11b8, /* 0x33 3: jongseong bieub */
		0x116d, /* 0x34 4: jungseong yo */
		0x1172, /* 0x35 5: jungseong yu */
		0x1163, /* 0x36 6: jungseong ya */
		0x1168, /* 0x37 7: jungseong ye */
		0x1174, /* 0x38 8: jungseong eui */
		0x116e, /* 0x39 9: jungseong u */
		0x003a, /* 0x3A colon: colon */
		0x1107, /* 0x3B semicolon: choseong bieub */
		0x0032, /* 0x3C less: 2 */
		0x003d, /* 0x3D equal: euals sign */
		0x0033, /* 0x3E greater: 3 */
		0x003f, /* 0x3F question: question mark */
		0x0040, /* 0x40 at: commertial at */
		0x11ae, /* 0x41 A: jongseong dieud */
		0x002f, /* 0x42 B: slash */
		0x11B5, /* 0x43 C: jongseong lieul-pieup */
		0x1164, /* 0x44 D: jungseong yae */
		0x11bd, /* 0x45 E: jongseong jieuj */
		0x11B4, /* 0x46 F: jongseong lieul-tiuet */
		0x11b0, /* 0x47 G: jongseong lieul-gieug */
		0x0027, /* 0x48 H: apostrophe */
		0x0038, /* 0x49 I: 8 */
		0x0034, /* 0x4A J: 4 */
		0x0035, /* 0x4B K: 5 */
		0x0036, /* 0x4C L: 6 */
		0x0031, /* 0x4D M: 1 */
		0x0030, /* 0x4E N: 0 */
		0x0039, /* 0x4F O: 9 */
		0x003b, /* 0x50 P: semicolon */
		0x11c1, /* 0x51 Q: jongseong pieup */
		0x11AC, /* 0x52 R: jongseong nieun-jieuj */
		0x11ad, /* 0x53 S: jongseong nieun-hieuh */
		0x003c, /* 0x54 T: less-than sign */
		0x0037, /* 0x55 U: 7 */
		0x11bf, /* 0x56 V: jongseong kieuk */
		0x11c0, /* 0x57 W: jongseong tieut */
		0x11b9, /* 0x58 X: jongseong bieub-sieus */
		0x003e, /* 0x59 Y: greater-than sign */
		0x11be, /* 0x5A Z: jongseong chieuch */
		0x005b, /* 0x5B bracketleft: left bracket */
		0x005c, /* 0x5C backslash: backslash */
		0x005d, /* 0x5D bracketright: right bracket */
		0x005e, /* 0x5E asciicircum: circumflex accent */
		0x005f, /* 0x5F underscore: underscore */
		0x0060, /* 0x60 quoteleft: grave accent */
		0x11bc, /* 0x61 a: jongseong ieung */
		0x116e, /* 0x62 b: jungseong u */
		0x1166, /* 0x63 c: jungseong e */
		0x1175, /* 0x64 d: jungseong i */
		0x1167, /* 0x65 e: jungseong yeo */
		0x1161, /* 0x66 f: jungseong a */
		0x1173, /* 0x67 g: jungseong eu */
		0x1102, /* 0x68 h: choseong nieun */
		0x1106, /* 0x69 i: choseong mieum */
		0x110b, /* 0x6A j: choseong ieung */
		0x1100, /* 0x6B k: choseong gieug */
		0x110c, /* 0x6C l: choseong jieuj */
		0x1112, /* 0x6D m: choseong hieuh */
		0x1109, /* 0x6E n: choseong sieus */
		0x110e, /* 0x6F o: choseong chieuch */
		0x1111, /* 0x70 p: choseong pieup */
		0x11ba, /* 0x71 q: jongseong sieus */
		0x1162, /* 0x72 r: jungseong ae */
		0x11ab, /* 0x73 s: jongseong nieun */
		0x1165, /* 0x74 t: jungseong eo */
		0x1103, /* 0x75 u: choseong dieud */
		0x1169, /* 0x76 v: jungseong o */
		0x11af, /* 0x77 w: jongseong lieul */
		0x11a8, /* 0x78 x: jongseong gieug */
		0x1105, /* 0x79 y: choseong lieul  */
		0x11b7, /* 0x7A z: jongseong mieum */
		0x007b, /* 0x7B braceleft: left brace */
		0x007c, /* 0x7C bar: vertical line(bar) */
		0x007d, /* 0x7D braceright: right brace */
		0x007e, /* 0x7E asciitilde: tilde */
		0x0000  /* 0x7F delete */
	];

	K3_2014_layout = [
		0x0021,	/* 0x21 exclam */
		0x002f,	/* 0x22 quotedbl: slash */
		0x0023,	/* 0x23 numbersign */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x002a,	/* 0x2A asterisk */
		0x002b,	/* 0x2B plus */
		0x002c,	/* 0x2C comma */
		0x002d,	/* 0x2D minus */
		0x002e,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x110f,	/* 0x30 0: choseong kieuk */
		0x11c2,	/* 0x31 1: jongseong hieuh */
		0x11bb,	/* 0x32 2: jongseong ssangsieus */
		0x11b8,	/* 0x33 3: jongseong bieub */
		0x116d,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116e,	/* 0x39 9: jungseong u */
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003c,	/* 0x3C less */
		0x003d,	/* 0x3D equal */
		0x003e,	/* 0x3E greater */
		0x003f,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x11b9,	/* 0x41 A: jongseong bieub-sieus */
		0x003b,	/* 0x42 B: semicolon */
		0x11bf,	/* 0x43 C: jongseong kieuk */
		0x11ae, /* 0x44 D: jongseong dieud */
		0x11bd,	/* 0x45 E: jongseong jieuj */
		0x11c0,	/* 0x46 F: jongseong tieut */
		0x003a,	/* 0x47 G: colon */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11b6,	/* 0x51 Q: jongseong lieul-hieuh */
		0x11be,	/* 0x52 R: jongseong chieuch */
		0x11ad,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11c1,	/* 0x56 V: jongseong pieup */
		0x11b0,	/* 0x57 W: jongseong lieul-gieug */
		0x11a9,	/* 0x58 X: jongseong ssanggieug */
		0x0035,	/* 0x59 Y: 5 */
		0x11b1,	/* 0x5A Z: jongseong lieul-mieum */
		0x005b,	/* 0x5B bracketleft */
		0x005c,	/* 0x5C backslash */
		0x005d,	/* 0x5D bracketright */
		0x005e,	/* 0x5E asciicircum */
		0x005f,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11bc,	/* 0x61 a: jongseong ieung */
		0x116e,	/* 0x62 b: jungseong u */
		0x1166,	/* 0x63 c: jungseong e */
		0x1175,	/* 0x64 d: jungseong i */
		0x1167,	/* 0x65 e: jungseong yeo */
		0x1161,	/* 0x66 f: jungseong a */
		0x1173,	/* 0x67 g: jungseong eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110b,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110c,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110e,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11ba,	/* 0x71 q: jongseong sieus */
		0x1165,	/* 0x72 r: jungseong eo */
		0x11ab,	/* 0x73 s: jongseong nieun */
		0x1162,	/* 0x74 t: jungseong ae */
		0x1103,	/* 0x75 u: choseong dieud */
		0x1169,	/* 0x76 v: jungseong o */
		0x11af,	/* 0x77 w: jongseong lieul */
		0x11a8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11b7,	/* 0x7A z: jongseong mieum */
		0x007b,	/* 0x7B braceleft */
		0x007c,	/* 0x7C bar */
		0x007d,	/* 0x7D braceright */
		0x007e	/* 0x7E asciitilde */
	];

	K3_2014_sublayout = [
		0x0000,	/* 0x21 exclam: */
		0x0000,	/* 0x22 quotedbl */
		0x0000,	/* 0x23 numbersign */
		0x0000,	/* 0x24 dollar */
		0x0000,	/* 0x25 percent */
		0x0000,	/* 0x26 ampersand */
		0x0000,	/* 0x27 apostrophe */
		0x0000,	/* 0x28 parenleft */
		0x0000,	/* 0x29 parenright */
		0x0000,	/* 0x2A asterisk */
		0x0000,	/* 0x2B plus */
		0x0000,	/* 0x2C comma */
		0x0000,	/* 0x2D minus */
		0x0000,	/* 0x2E period */
		0x0000,	/* 0x2F slash */
		0x0000,	/* 0x30 0 */
		0x0000,	/* 0x31 1 */
		0x0000,	/* 0x32 2 */
		0x0000,	/* 0x33 3 */
		0x0000,	/* 0x34 4 */
		0x0000,	/* 0x35 5 */
		0x0000,	/* 0x36 6 */
		0x0000,	/* 0x37 7 */
		0x0000,	/* 0x38 8 */
		0x0000,	/* 0x39 9 */
		0x0000,	/* 0x3A colon */
		0x0000,	/* 0x3B semicolon */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x0000,	/* 0x40 at */
		0x11b9,	/* 0x41 A: jongseong bieub-sieuh */
		0x0000,	/* 0x42 B */
		0x11aa,	/* 0x43 C: jongseong gieug-sieus */
		0x11b2, /* 0x44 D: jongseong lieul-bieub */
		0x11ac,	/* 0x45 E: jongseong nieun-jieuj */
		0x11b4,	/* 0x46 F: jongseong lieul-tieut */
		0x0000,	/* 0x47 G */
		0x0000,	/* 0x48 H */
		0x0000,	/* 0x49 I */
		0x0000,	/* 0x4A J */
		0x0000,	/* 0x4B K */
		0x0000,	/* 0x4C L */
		0x0000,	/* 0x4D M */
		0x0000,	/* 0x4E N */
		0x0000,	/* 0x4F O */
		0x0000,	/* 0x50 P */
		0x11b6,	/* 0x51 Q: jongseong lieul-hieuh */
		0x11b3,	/* 0x52 R: jongseong lieul-sieus */
		0x11ad,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0000,	/* 0x55 U */
		0x11b5,	/* 0x56 V: jongseong lieul-pieup */
		0x11b0,	/* 0x57 W: jongseong lieul-gieug */
		0x11a9,	/* 0x58 X: jongseong ssanggieug */
		0x0000,	/* 0x59 Y */
		0x11b1,	/* 0x5A Z: jongseong lieul-mieum */
		0x005b,	/* 0x5B bracketleft */
		0x005c,	/* 0x5C backslash */
		0x005d,	/* 0x5D bracketright */
		0x005e,	/* 0x5E asciicircum */
		0x005f,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11b9,	/* 0x61 a: jongseong bieub-sieus */
		0x0000,	/* 0x62 b */
		0x11aa,	/* 0x63 c: jongseong gieug-sieus */
		0x11b2,	/* 0x64 d: jongseong lieul-bieub */
		0x11ac,	/* 0x65 e: jongseong nieun-jieuj */
		0x11b4,	/* 0x66 f: jongseong lieul-tieut */
		0x0000,	/* 0x67 g */
		0x0000,	/* 0x68 h */
		0x0000,	/* 0x69 i */
		0x0000,	/* 0x6A j */
		0x0000,	/* 0x6B k */
		0x0000,	/* 0x6C l */
		0x0000,	/* 0x6D m */
		0x0000,	/* 0x6E n */
		0x0000,	/* 0x6F o */
		0x0000,	/* 0x70 p */
		0x11b6,	/* 0x71 q: jongseong lieul-hieuh */
		0x11b3,	/* 0x72 r: jongseong lieul-sieus */
		0x11ad,	/* 0x73 s: jongseong nieun-hieuh */
		0x1164,	/* 0x74 t: jungseong yae */
		0x0000,	/* 0x75 u */
		0x11b5,	/* 0x76 v: jongseong lieul-pieup */
		0x11b0,	/* 0x77 w: jongseong lieul-gieug */
		0x11a9,	/* 0x78 x: jongseong ssanggieug */
		0x0000,	/* 0x79 y */
		0x11b1,	/* 0x7A z: jongseong lieul-mieum */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];

	K3_2015_layout = [
		0x0021,	/* 0x21 exclam */
		0x002f,	/* 0x22 quotedbl: slash */
		0x0023,	/* 0x23 numbersign */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x002a,	/* 0x2A asterisk */
		0x002b,	/* 0x2B plus */
		0x002c,	/* 0x2C comma */
		0x002d,	/* 0x2D minus */
		0x002e,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x110f,	/* 0x30 0: choseong kieuk */
		0x11ae,	/* 0x31 1: jongseong dieud */
		0x11bb,	/* 0x32 2: jongseong ssangsieus */
		0x11b8,	/* 0x33 3: jongseong bieub */
		0x116d,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116e,	/* 0x39 9: jungseong u */
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003c,	/* 0x3C less */
		0x003d,	/* 0x3D equal */
		0x003e,	/* 0x3E greater */
		0x003f,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x11b4,	/* 0x41 A: jongseong lieul-tieut */
		0x003b,	/* 0x42 B: semicolon */
		0x11c0,	/* 0x43 C: jongseong tieut */
		0x11c2, /* 0x44 D: jongseong hieuh */
		0x11bd,	/* 0x45 E: jongseong jieuj */
		0x11c1,	/* 0x46 F: jongseong pieup */
		0x003a,	/* 0x47 G: colon */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11a9,	/* 0x51 Q: jongseong ssanggieug */
		0x11be,	/* 0x52 R: jongseong chieuch */
		0x11ad,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11bf,	/* 0x56 V: jongseong kieuk */
		0x11b0,	/* 0x57 W: jongseong lieul-gieug */
		0x11b9,	/* 0x58 X: jongseong bieub-sieuh */
		0x0035,	/* 0x59 Y: 5 */
		0x11b3,	/* 0x5A Z: jongseong lieul-sieus */
		0x005b,	/* 0x5B bracketleft */
		0x005c,	/* 0x5C backslash */
		0x005d,	/* 0x5D bracketright */
		0x005e,	/* 0x5E asciicircum */
		0x005f,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11bc,	/* 0x61 a: jongseong ieung */
		0x116e,	/* 0x62 b: jungseong u */
		0x1166,	/* 0x63 c: jungseong e */
		0x1175,	/* 0x64 d: jungseong i */
		0x1167,	/* 0x65 e: jungseong yeo */
		0x1161,	/* 0x66 f: jungseong a */
		0x1173,	/* 0x67 g: jungseong eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110b,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110c,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110e,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11ba,	/* 0x71 q: jongseong sieus */
		0x1165,	/* 0x72 r: jungseong eo */
		0x11ab,	/* 0x73 s: jongseong nieun */
		0x1162,	/* 0x74 t: jungseong ae */
		0x1103,	/* 0x75 u: choseong dieud */
		0x1169,	/* 0x76 v: jungseong o */
		0x11af,	/* 0x77 w: jongseong lieul */
		0x11a8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11b7,	/* 0x7A z: jongseong mieum */
		0x007b,	/* 0x7B braceleft */
		0x007c,	/* 0x7C bar */
		0x007d,	/* 0x7D braceright */
		0x007e	/* 0x7E asciitilde */
	];

	K3_2015_sublayout = [
		0x0000,	/* 0x21 exclam: */
		0x0000,	/* 0x22 quotedbl */
		0x0000,	/* 0x23 numbersign */
		0x0000,	/* 0x24 dollar */
		0x0000,	/* 0x25 percent */
		0x0000,	/* 0x26 ampersand */
		0x0000,	/* 0x27 apostrophe */
		0x0000,	/* 0x28 parenleft */
		0x0000,	/* 0x29 parenright */
		0x0000,	/* 0x2A asterisk */
		0x0000,	/* 0x2B plus */
		0x0000,	/* 0x2C comma */
		0x0000,	/* 0x2D minus */
		0x0000,	/* 0x2E period */
		0x0000,	/* 0x2F slash */
		0x0000,	/* 0x30 0 */
		0x0000,	/* 0x31 1 */
		0x0000,	/* 0x32 2 */
		0x0000,	/* 0x33 3 */
		0x0000,	/* 0x34 4 */
		0x0000,	/* 0x35 5 */
		0x0000,	/* 0x36 6 */
		0x0000,	/* 0x37 7 */
		0x0000,	/* 0x38 8 */
		0x0000,	/* 0x39 9 */
		0x0000,	/* 0x3A colon */
		0x0000,	/* 0x3B semicolon */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x0000,	/* 0x40 at */
		0x11b4,	/* 0x41 A: jongseong lieul-tieut */
		0x0000,	/* 0x42 B */
		0x11b5,	/* 0x43 C: jongseong lieul-pieup */
		0x11b2, /* 0x44 D: jongseong lieul-bieub */
		0x11ac,	/* 0x45 E: jongseong nieun-jieuj */
		0x11b1,	/* 0x46 F: jongseong lieul-mieum */
		0x0000,	/* 0x47 G */
		0x0000,	/* 0x48 H */
		0x0000,	/* 0x49 I */
		0x0000,	/* 0x4A J */
		0x0000,	/* 0x4B K */
		0x0000,	/* 0x4C L */
		0x0000,	/* 0x4D M */
		0x0000,	/* 0x4E N */
		0x0000,	/* 0x4F O */
		0x0000,	/* 0x50 P */
		0x11a9,	/* 0x51 Q: jongseong ssanggieug */
		0x11b6,	/* 0x52 R: jongseong lieul-hieuh */
		0x11ad,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0000,	/* 0x55 U */
		0x11aa,	/* 0x56 V: jongseong gieug-sieus */
		0x11b0,	/* 0x57 W: jongseong lieul-gieug */
		0x11b9,	/* 0x58 X: jongseong bieub-sieuh */
		0x0000,	/* 0x59 Y */
		0x11b3,	/* 0x5A Z: jongseong lieul-sieus */
		0x0000,	/* 0x5B bracketleft */
		0x0000,	/* 0x5C backslash */
		0x0000,	/* 0x5D bracketright */
		0x0000,	/* 0x5E asciicircum */
		0x0000,	/* 0x5F underscore */
		0x0000,	/* 0x60 quoteleft */
		0x0000,	/* 0x61 a */
		0x0000,	/* 0x62 b */
		0x0000,	/* 0x63 c */
		0x0000,	/* 0x64 d */
		0x0000,	/* 0x65 e */
		0x0000,	/* 0x66 f */
		0x0000,	/* 0x67 g */
		0x0000,	/* 0x68 h */
		0x0000,	/* 0x69 i */
		0x0000,	/* 0x6A j */
		0x0000,	/* 0x6B k */
		0x0000,	/* 0x6C l */
		0x0000,	/* 0x6D m */
		0x0000,	/* 0x6E n */
		0x0000,	/* 0x6F o */
		0x0000,	/* 0x70 p */
		0x0000,	/* 0x71 q */
		0x0000,	/* 0x72 r */
		0x0000,	/* 0x73 s */
		0x0000,	/* 0x74 t */
		0x0000,	/* 0x75 u */
		0x0000,	/* 0x76 v */
		0x0000,	/* 0x77 w */
		0x0000,	/* 0x78 x */
		0x0000,	/* 0x79 y */
		0x0000,	/* 0x7A z */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];

	K3_2015y_layout = [
		0x11f9,	/* 0x21 exclam: jongseong yeolin-hieuh */
		0x002f,	/* 0x22 quotedbl: slash */
		0x0023,	/* 0x23 numbersign */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x002a,	/* 0x2A asterisk */
		0x002b,	/* 0x2B plus */
		0x002c,	/* 0x2C comma */
		0x002d,	/* 0x2D minus */
		0x002e,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x110f,	/* 0x30 0: choseong kieuk */
		0x11c2,	/* 0x31 1: jongseong hieuh */
		0x11bb,	/* 0x32 2: jongseong ssangsieus */
		0x11b8,	/* 0x33 3: jongseong bieub */
		0x116d,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116e,	/* 0x39 9: jungseong u */
		0x003a,	/* 0x3A colon */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x113c,	/* 0x3C less: choseong ab-sieus */
		0x003d,	/* 0x3D equal */
		0x113e,	/* 0x3E greater: choseong dwis-sieus */
		0x003f,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x11f0,	/* 0x41 A: jongseong yes-ieung */
		0x0021,	/* 0x42 B: exclam */
		0x11c0,	/* 0x43 C: jongseong tieut */
		0x11ae, /* 0x44 D: jongseong dieud */
		0x11bd,	/* 0x45 E: jongseong jieuj */
		0x11c1,	/* 0x46 F: jongseong pieup */
		0X119E,	/* 0x47 G: jungseong araea */
		0x00b7,	/* 0x48 H: middle dot */
		0x1154,	/* 0x49 I: choseong ab-chieuch */
		0x114c,	/* 0x4A J: choseong yes-ieung */
		0x114e,	/* 0x4B K: choseong ab-jieuj */
		0x1150,	/* 0x4C L: choseong dwits-jieuj */
		0x1159,	/* 0x4D M: choseong yeolin-hieuh */
		0x1140,	/* 0x4E N: choseong yeolin-sieus */
		0x1155,	/* 0x4F O: choseong dwits-chieuch */
		0x003b,	/* 0x50 P: semicolon */
		0x11eb,	/* 0x51 Q: jongseong yeolin-sieus */
		0x11be,	/* 0x52 R: jongseong chieuch */
		0x0000,	/* 0x53 S: */
		0x1164,	/* 0x54 T: jungseong yae */
		0x302e,	/* 0x55 U: hangeul single dot tone mark */
		0x11bf,	/* 0x56 V: jongseong kieuk */
		0x0000,	/* 0x57 W: */
		0x0000,	/* 0x58 X: */
		0X302F,	/* 0x59 Y: hangeul double dot tone mark */
		0x0000,	/* 0x5A Z: */
		0x005b,	/* 0x5B bracketleft */
		0x005c,	/* 0x5C backslash */
		0x005d,	/* 0x5D bracketright */
		0x005e,	/* 0x5E asciicircum */
		0x005f,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11bc,	/* 0x61 a: jongseong ieung */
		0x116e,	/* 0x62 b: jungseong u */
		0x1166,	/* 0x63 c: jungseong e */
		0x1175,	/* 0x64 d: jungseong i */
		0x1167,	/* 0x65 e: jungseong yeo */
		0x1161,	/* 0x66 f: jungseong a */
		0x1173,	/* 0x67 g: jungseong eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110b,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110c,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110e,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11ba,	/* 0x71 q: jongseong sieus */
		0x1165,	/* 0x72 r: jungseong eo */
		0x11ab,	/* 0x73 s: jongseong nieun */
		0x1162,	/* 0x74 t: jungseong ae */
		0x1103,	/* 0x75 u: choseong dieud */
		0x1169,	/* 0x76 v: jungseong o */
		0x11af,	/* 0x77 w: jongseong lieul */
		0x11a8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11b7,	/* 0x7A z: jongseong mieum */
		0x0027,	/* 0x7B braceleft: apostrophe */
		0x007c,	/* 0x7C bar */
		0x0022,	/* 0x7D braceright: quotatioin mark */
		0x007e	/* 0x7E asciitilde */
	];
	
	K3_2015M_layout = [
		0x0021,	/* 0x21 exclam */
		0x002f,	/* 0x22 quotedbl: slash */
		0x0023,	/* 0x23 numbersign */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x002a,	/* 0x2A asterisk */
		0x002b,	/* 0x2B plus */
		0x002c,	/* 0x2C comma */
		0x002d,	/* 0x2D minus */
		0x002e,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x110f,	/* 0x30 0: choseong kieuk */
		0x11ae,	/* 0x31 1: jongseong dieud */
		0x11bb,	/* 0x32 2: jongseong ssangsieus */
		0x11b8,	/* 0x33 3: jongseong bieub */
		0x116d,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116e,	/* 0x39 9: jungseong u */
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003c,	/* 0x3C less */
		0x003d,	/* 0x3D equal */
		0x003e,	/* 0x3E greater */
		0x003f,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x11b4,	/* 0x41 A: jongseong lieul-tieut */
		0x003b,	/* 0x42 B: semicolon */
		0x11c0,	/* 0x43 C: jongseong tieut */
		0x11c2, /* 0x44 D: jongseong hieuh */
		0x11bd,	/* 0x45 E: jongseong jieuj */
		0x11c1,	/* 0x46 F: jongseong pieup */
		0x003a,	/* 0x47 G: colon */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11a9,	/* 0x51 Q: jongseong ssanggieug */
		0x11be,	/* 0x52 R: jongseong chieuch */
		0x11ad,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11bf,	/* 0x56 V: jongseong kieuk */
		0x11b0,	/* 0x57 W: jongseong lieul-gieug */
		0x11b9,	/* 0x58 X: jongseong bieub-sieuh */
		0x0035,	/* 0x59 Y: 5 */
		0x11b3,	/* 0x5A Z: jongseong lieul-sieus */
		0x005b,	/* 0x5B bracketleft */
		0x005c,	/* 0x5C backslash */
		0x005d,	/* 0x5D bracketright */
		0x005e,	/* 0x5E asciicircum */
		0x005f,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11bc,	/* 0x61 a: jongseong ieung */
		0x116e,	/* 0x62 b: jungseong u */
		0x1166,	/* 0x63 c: jungseong e */
		0x1175,	/* 0x64 d: jungseong i */
		0x1167,	/* 0x65 e: jungseong yeo */
		0x1161,	/* 0x66 f: jungseong a */
		0x1173,	/* 0x67 g: jungseong eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110b,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110c,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110e,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11ba,	/* 0x71 q: jongseong sieus */
		0x1162,	/* 0x72 r: jungseong ae */
		0x11ab,	/* 0x73 s: jongseong nieun */
		0x1165,	/* 0x74 t: jungseong eo */
		0x1103,	/* 0x75 u: choseong dieud */
		0x1169,	/* 0x76 v: jungseong o */
		0x11af,	/* 0x77 w: jongseong lieul */
		0x11a8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11b7,	/* 0x7A z: jongseong mieum */
		0x007b,	/* 0x7B braceleft */
		0x007c,	/* 0x7C bar */
		0x007d,	/* 0x7D braceright */
		0x007e	/* 0x7E asciitilde */
	];

	K3_2015M_sublayout = [
		0x0000,	/* 0x21 exclam: */
		0x0000,	/* 0x22 quotedbl */
		0x0000,	/* 0x23 numbersign */
		0x0000,	/* 0x24 dollar */
		0x0000,	/* 0x25 percent */
		0x0000,	/* 0x26 ampersand */
		0x0000,	/* 0x27 apostrophe */
		0x0000,	/* 0x28 parenleft */
		0x0000,	/* 0x29 parenright */
		0x0000,	/* 0x2A asterisk */
		0x0000,	/* 0x2B plus */
		0x0000,	/* 0x2C comma */
		0x0000,	/* 0x2D minus */
		0x0000,	/* 0x2E period */
		0x0000,	/* 0x2F slash */
		0x0000,	/* 0x30 0 */
		0x0000,	/* 0x31 1 */
		0x0000,	/* 0x32 2 */
		0x0000,	/* 0x33 3 */
		0x0000,	/* 0x34 4 */
		0x0000,	/* 0x35 5 */
		0x0000,	/* 0x36 6 */
		0x0000,	/* 0x37 7 */
		0x0000,	/* 0x38 8 */
		0x0000,	/* 0x39 9 */
		0x0000,	/* 0x3A colon */
		0x0000,	/* 0x3B semicolon */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x0000,	/* 0x40 at */
		0x11b4,	/* 0x41 A: jongseong lieul-tieut */
		0x0000,	/* 0x42 B */
		0x11b5,	/* 0x43 C: jongseong lieul-pieup */
		0x11b2, /* 0x44 D: jongseong lieul-bieub */
		0x11ac,	/* 0x45 E: jongseong nieun-jieuj */
		0x11b1,	/* 0x46 F: jongseong lieul-mieum */
		0x0000,	/* 0x47 G */
		0x0000,	/* 0x48 H */
		0x0000,	/* 0x49 I */
		0x0000,	/* 0x4A J */
		0x0000,	/* 0x4B K */
		0x0000,	/* 0x4C L */
		0x0000,	/* 0x4D M */
		0x0000,	/* 0x4E N */
		0x0000,	/* 0x4F O */
		0x0000,	/* 0x50 P */
		0x11a9,	/* 0x51 Q: jongseong ssanggieug */
		0x11b6,	/* 0x52 R: jongseong lieul-hieuh */
		0x11ad,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0000,	/* 0x55 U */
		0x11aa,	/* 0x56 V: jongseong gieug-sieus */
		0x11b0,	/* 0x57 W: jongseong lieul-gieug */
		0x11b9,	/* 0x58 X: jongseong bieub-sieuh */
		0x0000,	/* 0x59 Y */
		0x11b3	/* 0x5A Z: jongseong lieul-sieus */
	];

	K3_3_91_noshift_layout = [// youknowone
		0x11a9, /* 0x21 exclam:         jongseong ssanggieug */
		0x00b7, /* 0x22 quotedbl:       middle dot */
		0x11bd, /* 0x23 numbersign:     jognseong jieuj */
		0x11b5, /* 0x24 dollar:         jongseong lieul-pieup */
		0x11b4, /* 0x25 percent:        jongseong lieul-thieuth */
		0x201c, /* 0x26 ampersand:      left double quotation mark */
		0x1110, /* 0x27 apostrophe:     choseong  thieuth */
		0x0027, /* 0x28 parenleft:      apostrophe */
		0x007e, /* 0x29 parenright:     Tilde */
		0x201d, /* 0x2A asterisk:       right double quotation mark */
		0x002b, /* 0x2B plus:           plus sign */
		0x002c, /* 0x2C comma:          comma */
		0x0029, /* 0x2D minus:          right parenthesis */
		0x002e, /* 0x2E period:         period */
		0x116c, /* 0x2F slash:          jungseong oe */
		0x110f, /* 0x30 0:              choseong  kieuk */
		0x11c2, /* 0x31 1:              jongseong hieuh              */
		0x11bb, /* 0x32 2:              jongseong ssangsieus          */
		0x11b8, /* 0x33 3:              jongseong bieup              */
		0x116d, /* 0x34 4:              jungseong yo                 */
		0x1172, /* 0x35 5:              jungseong yu                 */
		0x1163, /* 0x36 6:              jungseong ya                 */
		0x1168, /* 0x37 7:              jungseong ye                 */
		0x1174, /* 0x38 8:              jungseong eui                 */
		0x1171, /* 0x39 9:              jungseong wi                 */
		0x0034, /* 0x3A colon:          4                            */
		0x1107, /* 0x3B semicolon:      choseong  bieup              */
		0x002c, /* 0x3C less:           comma                        */
		0x003e, /* 0x3D equal:          greater-than sign            */
		0x002e, /* 0x3E greater:        period                       */
		0x0021, /* 0x3F question:       exclamation mark             */
		0x11b0, /* 0x40 at:             jongseong lieul-gieug       */
		0x11ae, /* 0x41 A:              jongseong dieud             */
		0x003f, /* 0x42 B:              question mark                */
		0x11bf, /* 0x43 C:              jongseong kieuk            */
		0x11b2, /* 0x44 D:              jongseong lieul-bieup        */
		0x11ac, /* 0x45 E:              jongseong nieun-jieuj        */
		0x11b1, /* 0x46 F:              jongseong lieul-mieum        */
		0x1164, /* 0x47 G:              jungseong yae                */
		0x0030, /* 0x48 H:              0 */
		0x0037, /* 0x49 I:              7 */
		0x0031, /* 0x4A J:              1 */
		0x0032, /* 0x4B K:              2 */
		0x0033, /* 0x4C L:              3 */
		0x0022, /* 0x4D M:              double quotation mark */
		0x002d, /* 0x4E N:              minus sign */
		0x0038, /* 0x4F O:              8 */
		0x0039, /* 0x50 P:              9 */
		0x11c1, /* 0x51 Q:              jongseong pieup */
		0x11b6, /* 0x52 R:              jongseong lieul-hieuh */
		0x11ad, /* 0x53 S:              jongseong nieun-hieuh */
		0x11b3, /* 0x54 T:              jongseong lieul-sieus */
		0x0036, /* 0x55 U:              6 */
		0x11aa, /* 0x56 V:              jongseong gieug-sieus */
		0x11c0, /* 0x57 W:              jongseong tieut */
		0x11b9, /* 0x58 X:              jongseong bieup-sieus         */
		0x0035, /* 0x59 Y:              5                            */
		0x11be, /* 0x5A Z:              jongseong chieuch            */
		0x0028, /* 0x5B bracketleft:    left parenthesis             */
    //0x11ff, /* 0x5B bracketleft:    jongseong nieun-nieun */
		0x003a, /* 0x5C backslash:      colon                        */
		0x003c, /* 0x5D bracketright:   less-than sign               */
		0x003d, /* 0x5E asciicircum:    equals sign                  */
		0x003b, /* 0x5F underscore:     semicolon                    */
		0x002a, /* 0x60 quoteleft:      asterisk                     */
		0x11bc, /* 0x61 a:              jongseong ieung              */
		0x116e, /* 0x62 b:              jungseong u                  */
		0x1166, /* 0x63 c:              jungseong e                  */
		0x1175, /* 0x64 d:              jungseong i                  */
		0x1167, /* 0x65 e:              jungseong yeo                */
		0x1161, /* 0x66 f:              jungseong a                  */
		0x1173, /* 0x67 g:              jungseong eu                 */
		0x1102, /* 0x68 h:              choseong  nieun              */
		0x1106, /* 0x69 i:              choseong  mieum */
		0x110b, /* 0x6A j:              choseong  ieung */
		0x1100, /* 0x6B k:              choseong  gieug */
		0x110c, /* 0x6C l:              choseong  jieuj              */
		0x1112, /* 0x6D m:              choseong  hieuh              */
		0x1109, /* 0x6E n:              choseong  sieus               */
		0x110e, /* 0x6F o:              choseong  chieuch            */
		0x1111, /* 0x70 p:              choseong  pieup            */
		0x11ba, /* 0x71 q:              jongseong sieus               */
		0x1162, /* 0x72 r:              jungseong ae                 */
		0x11ab, /* 0x73 s:              jongseong nieun              */
		0x1165, /* 0x74 t:              jungseong eo                 */
		0x1103, /* 0x75 u:              choseong  dieud             */
		0x1169, /* 0x76 v:              jungseong o                  */
		0x11af, /* 0x77 w:              jongseong lieul              */
		0x11a8, /* 0x78 x:              jongseong gieug             */
		0x1105, /* 0x79 y:              choseong  lieul              */
		0x11b7, /* 0x7A z:              jongseong mieum              */
		0x0025, /* 0x7B braceleft:      percent sign                 */
		0x005c, /* 0x7C bar:            backslash                    */
		0x002f, /* 0x7D braceright:     slash                        */
		0x203b /* 0x7E asciitilde:     reference mark               */
];

	K3_Anmatae_layout = [
		0x0021, /* 0x21 exclam: exclamation mark */
		0x0022, /* 0x22 quotedbl: quotation mark */
		0x0023, /* 0x23 numbersign: number sign */
		0x0024, /* 0x24 dollar: dollar sign */
		0x0025, /* 0x25 percent: percent sign */
		0x0026, /* 0x26 ampersand: ampersand */
		0x002e, /* 0x27 apostrophe: period */
		0x0028, /* 0x28 parenleft: left parenthesis */
		0x0029, /* 0x29 parenright: right parenthesis */
		0x002a, /* 0x2A asterisk: asterisk */
		0x002b, /* 0x2B plus: plus sign */
		0x11b7, /* 0x2C comma: jongseong mieum */
		0x002d, /* 0x2D minus: minus sign */
		0x11af, /* 0x2E period: jongseong lieul */
		0x11c2, /* 0x2F slash: jongseong hieuh */
		0x0030, /* 0x30 0: 0 */
		0x0031, /* 0x31 1: 1 */
		0x0032, /* 0x32 2: 2 */
		0x0033, /* 0x33 3: 3 */
		0x0034, /* 0x34 4: 4 */
		0x0035, /* 0x35 5: 5 */
		0x0036, /* 0x36 6: 6 */
		0x0037, /* 0x37 7: 7 */
		0x0038, /* 0x38 8: 8 */
		0x0039, /* 0x39 9: 9 */
		0x003a, /* 0x3A colon: colon */
		0x116e, /* 0x3B semicolon: jungseong u */
		0x003c, /* 0x3C less: less-than sign */
		0x003d, /* 0x3D equal: equals sign */
		0x003e, /* 0x3E greater: greater-than sign */
		0x11f9, /* 0x3F question: jongseong yeorinhieuh */
		0x0040, /* 0x40 at: commercial at */
		0x1107, /* 0x41 A: choseong bieub */
		0x11f0, /* 0x42 B: jongseong yesieung */
		0x11b8, /* 0x43 C: jongseong bieub */
		0x1103, /* 0x44 D: choseong dieud */
		0x1102, /* 0x45 E: choseong nieun */
		0x1100, /* 0x46 F: choseong gieug */
		0x114c, /* 0x47 G: choseong yesieung */
		0x1165, /* 0x48 H: jungseong eo */
		0x002f, /* 0x49 I: slash */
		0x119e, /* 0x4A J: jungseong araea */
		0x1175, /* 0x4B K: jungseong i */
		0x1169, /* 0x4C L: jungseong o */
		0x11ab, /* 0x4D M: jongseong nienu */
		0x11eb, /* 0x4E N: jongseung pansieus */
		0x005b, /* 0x4F O: left bracket */
		0x005d, /* 0x50 P: right bracket */
		0x1106, /* 0x51 Q: choseong mieum */
		0x1105, /* 0x52 R: choseong lieul */
		0x110c, /* 0x53 S: choseong jieuj */
		0x1159, /* 0x54 T: choseong yeorinhieuh */
		0x0027, /* 0x55 U: apostrophe */
		0x11a8, /* 0x56 V: jongseong gieug */
		0x1140, /* 0x57 W: choseong pansieus */
		0x11ae, /* 0x58 X: jongseong dieud */
		0x003b, /* 0x59 Y: semicolon */
		0x11bd, /* 0x5A Z: jongseong jieuj */
		0x002c, /* 0x5B bracketleft:  comma */
		0x005c, /* 0x5C backslash: backslash */
		0x003f, /* 0x5D bracketright: qustion mark */
		0x005e, /* 0x5E asciicircum: circumflex accent */
		0x005f, /* 0x5F underscore: underscore */
		0x0060, /* 0x60 quoteleft: grave accent */
		0x1107, /* 0x61 a: choseong bieub */
		0x11bc, /* 0x62 b: jongseong ieung */
		0x11b8, /* 0x63 c: jongseong bieub */
		0x1103, /* 0x64 d: choseong dieud */
		0x1102, /* 0x65 e: choseong nieun */
		0x1100, /* 0x66 f: choseong gieug */
		0x110b, /* 0x67 g: choseong ieung */
		0x1165, /* 0x68 h: jungseong eo */
		0x1173, /* 0x69 i: jungseong eu */
		0x1161, /* 0x6A j: jungseong a */
		0x1175, /* 0x6B k: jungseong i */
		0x1169, /* 0x6C l: jungseong o */
		0x11ab, /* 0x6D m: jongseong nieun */
		0x11ba, /* 0x6E n: jongseong sieus */
		0x116d, /* 0x6F o: jungseong yo */
		0x1172, /* 0x70 p: jungseong yu */
		0x1106, /* 0x71 q: choseong mieum */
		0x1105, /* 0x72 r: choseong lieul */
		0x110c, /* 0x73 s: choseong jieuj */
		0x1112, /* 0x74 t: choseong hieuh */
		0x1163, /* 0x75 u: jungseong ya */
		0x11a8, /* 0x76 v: jongseong kiyok */
		0x1109, /* 0x77 w: choseong sieus */
		0x11ae, /* 0x78 x: jongseong dieud */
		0x1167, /* 0x79 y: jungseong yeo */
		0x11bd, /* 0x7A z: jongseong jieuj */
		0x007b, /* 0x7B braceleft: left brace */
		0x007c, /* 0x7C bar: vertical bar */
		0x007d, /* 0x7D braceright: right brace */
		0x007e  /* 0x7E asciitilde: tilde */
];

	K3_Moachigi_2014_layout = [
		0x0021, /* 0x21 exclam: exclamation mark */
		0x0022, /* 0x22 quotedbl: quotatioin mark */
		0x0023, /* 0x23 numbersign: number sign */
		0x0024, /* 0x24 dollar: dollar sign */
		0x0025, /* 0x25 percent: percent sign */
		0x0026, /* 0x26 ampersand: ampersand */
		0x1169, /* 0x27 apostrophe: jungseong o */
		0x0028, /* 0x28 parenleft: left parenthesis */
		0x0029, /* 0x29 parenright: right parenthesis */
		0x002a, /* 0x2A asterisk: asterisk */
		0x002b, /* 0x2B plus: plus sign */
		0x002c, /* 0x2C comma: comma */
		0x002d, /* 0x2D minus: minus sign */
		0x002e, /* 0x2E period: period */
		0x002f, /* 0x2F slash: slash */
		0x0030, /* 0x30 0: 0 */
		0x11b9, /* 0x31 1: jongseong bieub-sieus */
		0x11ae, /* 0x32 2: jongseong dieud */
		0x11b8, /* 0x33 3: jongseong bieub */
		0x116d, /* 0x34 4: jungseong yo */
		0x1163, /* 0x35 5: jungseong ya */
		0x119e, /* 0x36 6: jungseong araea */
		0x11a2, /* 0x37 7: jungseong ssangaraea */
		0x0038, /* 0x38 8: 8 */
		0x0039, /* 0x39 9: 9 */
		0x0034, /* 0x3A colon: 4 */
		0x11bb, /* 0x3B semicolon: jongseong ssangsieus */
		0x003c, /* 0x3C less: less-than sign */
		0x003d, /* 0x3D equal: euals sign */
		0x003e, /* 0x3E greater: greater-than sign */
		0x003f, /* 0x3F question: question mark */
		0x0040, /* 0x40 at: commertial at */
		0x2606, /* 0x41 A: ☆ white star */
		0x003b, /* 0x42 B: semicolon */
		0x300c, /* 0x43 C: 「 left corner bracket */
		0x25B2, /* 0x44 D: ▲ black up-pointing triangle */
		0x2192, /* 0x45 E: → rightwards arrow */
		0x00b7, /* 0x46 F: middle dot */
		0x003a, /* 0x47 G: colon */
		0x0030, /* 0x48 H: 0 */
		0x0037, /* 0x49 I: 7 */
		0x0031, /* 0x4A J: 1 */
		0x0032, /* 0x4B K: 2 */
		0x0033, /* 0x4C L: 3 */
		0x0022, /* 0x4D M: quotatioin mark */
		0x0027, /* 0x4E N: apostrophe */
		0x0038, /* 0x4F O: 8 */
		0x0039, /* 0x50 P: 9 */
		0x2661, /* 0x51 Q: ♡ white heart suit */
		0x2194, /* 0x52 R: ↔ left right arrow */
		0x25bd, /* 0x53 S: ▽ white down-pointing triangle */
		0x203b, /* 0x54 T: ※ reference mark */
		0x0036, /* 0x55 U: 6 */
		0x300d, /* 0x56 V: 」 right corner bracket */
		0x2190, /* 0x57 W: ← leftwards arrow */
		0x25ce, /* 0x58 X: ◎ bullseye */
		0x0035, /* 0x59 Y: 5 */
		0x25a1, /* 0x5A Z: □ white square */
		0x005b, /* 0x5B bracketleft: left bracket */
		0x005c, /* 0x5C backslash: backslash */
		0x005d, /* 0x5D bracketright: right bracket */
		0x005e, /* 0x5E asciicircum: circumflex accent */
		0x005f, /* 0x5F underscore: underscore */
		0x0060, /* 0x60 quoteleft: grave accent */
		0x11bc, /* 0x61 a: jongseong ieung */
		0x1166, /* 0x62 b: jungseong e */
		0x116e, /* 0x63 c: jungseong u */
		0x1175, /* 0x64 d: jungseong i */
		0x11af, /* 0x65 e: jongseong lieul */
		0x1161, /* 0x66 f: jungseong a */
		0x1173, /* 0x67 g: jungseong eu */
		0x1102, /* 0x68 h: choseong nieun */
		0x1106, /* 0x69 i: choseong mieum */
		0x110b, /* 0x6A j: choseong ieung */
		0x1100, /* 0x6B k: choseong gieug */
		0x110c, /* 0x6C l: choseong jieuj */
		0x1112, /* 0x6D m: choseong hieuh */
		0x1109, /* 0x6E n: choseong sieus */
		0x1107, /* 0x6F o: choseong bieub */
		0x116e, /* 0x70 p: jungseong u */
		0x11c2, /* 0x71 q: jongseong hieuh */
		0x1165, /* 0x72 r: jungseong eo */
		0x11ab, /* 0x73 s: jongseong nieun */
		0x1167, /* 0x74 t: jungseong yeo */
		0x1103, /* 0x75 u: choseong dieud */
		0x1169, /* 0x76 v: jungseong o */
		0x11ba, /* 0x77 w: jongseong sieus */
		0x11a8, /* 0x78 x: jongseong gieug */
		0x1105, /* 0x79 y: choseong lieul */
		0x11b7, /* 0x7A z: jongseong mieum */
		0x007b, /* 0x7B braceleft: left brace */
		0x007c, /* 0x7C bar: vertical line(bar) */
		0x007d, /* 0x7D braceright: right brace */
		0x007e  /* 0x7E asciitilde: tilde */
	];

	K3_Moachigi_2014_sublayout = [
		0x0000,	/* 0x21 exclam: */
		0x0000,	/* 0x22 quotedbl */
		0x0000,	/* 0x23 numbersign */
		0x0000,	/* 0x24 dollar */
		0x0000,	/* 0x25 percent */
		0x0000,	/* 0x26 ampersand */
		0x0000,	/* 0x27 apostrophe */
		0x0000,	/* 0x28 parenleft */
		0x0000,	/* 0x29 parenright */
		0x0000,	/* 0x2A asterisk */
		0x0000,	/* 0x2B plus */
		0x0000,	/* 0x2C comma */
		0x0000,	/* 0x2D minus */
		0x0000,	/* 0x2E period */
		0x0000,	/* 0x2F slash */
		0x0000,	/* 0x30 0 */
		0x11b3,	/* 0x31 1: jongseong lieul-sieus */
		0x11c0,	/* 0x32 2: jongseong tieut */
		0x11c1,	/* 0x33 3: jongseong pieup */
		0x0000,	/* 0x34 4 */
		0x0000,	/* 0x35 5 */
		0x0000,	/* 0x36 6 */
		0x0000,	/* 0x37 7 */
		0x0000,	/* 0x38 8 */
		0x0000,	/* 0x39 9 */
		0x0000,	/* 0x3A colon */
		0x0000,	/* 0x3B semicolon */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x0000,	/* 0x40 at */
		0x0000,	/* 0x41 A */
		0x0000,	/* 0x42 B */
		0x0000,	/* 0x43 C */
		0x0000, /* 0x44 D */
		0x0000,	/* 0x45 E */
		0x0000,	/* 0x46 F */
		0x0000,	/* 0x47 G */
		0x0000,	/* 0x48 H */
		0x0000,	/* 0x49 I */
		0x0000,	/* 0x4A J */
		0x0000,	/* 0x4B K */
		0x0000,	/* 0x4C L */
		0x0000,	/* 0x4D M */
		0x0000,	/* 0x4E N */
		0x0000,	/* 0x4F O */
		0x0000,	/* 0x50 P */
		0x0000,	/* 0x51 Q */
		0x0000,	/* 0x52 R */
		0x0000,	/* 0x53 S */
		0x0000,	/* 0x54 T */
		0x0000,	/* 0x55 U */
		0x0000,	/* 0x56 V */
		0x0000,	/* 0x57 W */
		0x0000,	/* 0x58 X */
		0x0000,	/* 0x59 Y */
		0x0000,	/* 0x5A Z */
		0x0000,	/* 0x3A colon */
		0x0000,	/* 0x3B semicolon */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x11b8,	/* 0x61 a: jongseong bieub */
		0x0000,	/* 0x62 b */
		0x0000,	/* 0x63 c */
		0x0000,	/* 0x64 d */
		0x11bd,	/* 0x65 e: jongseong jieuj */
		0x0000,	/* 0x66 f */
		0x0000,	/* 0x67 g */
		0x0000,	/* 0x68 h */
		0x0000,	/* 0x69 i */
		0x0000,	/* 0x6A j */
		0x0000,	/* 0x6B k */
		0x0000,	/* 0x6C l */
		0x0000,	/* 0x6D m */
		0x0000,	/* 0x6E n */
		0x0000,	/* 0x6F o */
		0x0000,	/* 0x70 p */
		0x11b6,	/* 0x71 q: jongseong lieul-hieuh */
		0x0000,	/* 0x72 r */
		0x11ad,	/* 0x73 s: jongseong nieun-hieuh */
		0x0000,	/* 0x74 t */
		0x0000,	/* 0x75 u */
		0x0000,	/* 0x76 v */
		0x11be,	/* 0x77 w: jongseong chieuch */
		0x11bf,	/* 0x78 x: jongseong kieuk */
		0x0000,	/* 0x79 y */
		0x11ae,	/* 0x7A z: jongseong dieud */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];
	
	K3_Moachigi_2015_layout = [
		0x0021, /* 0x21 exclam: exclamation mark */
		0x0022, /* 0x22 quotedbl: quotatioin mark */
		0x0023, /* 0x23 numbersign: number sign */
		0x0024, /* 0x24 dollar: dollar sign */
		0x0025, /* 0x25 percent: percent sign */
		0x0026, /* 0x26 ampersand: ampersand */
		0x1169, /* 0x27 apostrophe: jungseong o */
		0x0028, /* 0x28 parenleft: left parenthesis */
		0x0029, /* 0x29 parenright: right parenthesis */
		0x002a, /* 0x2A asterisk: asterisk */
		0x002b, /* 0x2B plus: plus sign */
		0x002c, /* 0x2C comma: comma */
		0x002d, /* 0x2D minus: minus sign */
		0x002e, /* 0x2E period: period */
		0x002f, /* 0x2F slash: slash */
		0x0030, /* 0x30 0: 0 */
		0x0031, /* 0x31 1: 1 */
		0x0032, /* 0x32 2: 2 */
		0x0033, /* 0x33 3: 3 */
		0x0034, /* 0x34 4: 4 */
		0x0035, /* 0x35 5: 5 */
		0x0036, /* 0x36 6: 6 */
		0x0037, /* 0x37 7: 7 */
		0x0038, /* 0x38 8: 8 */
		0x0039, /* 0x39 9: 9 */
		0x003a, /* 0x3A colon: colon */
		0x11bb, /* 0x3B semicolon: jongseong ssangsieus */
		0x003c, /* 0x3C less: less-than sign */
		0x003d, /* 0x3D equal: euals sign */
		0x003e, /* 0x3E greater: greater-than sign */
		0x003f, /* 0x3F question: question mark */
		0x0040, /* 0x40 at: commertial at */
		0x2606, /* 0x41 A: ☆ white star */
		0x0027, /* 0x42 B: apostrophe */
		0x300c, /* 0x43 C: 「 left corner bracket */
		0x25B3, /* 0x44 D: △ white up-pointing triangle */
		0x2192, /* 0x45 E: → rightwards arrow */
		0x25CB, /* 0x46 F: ○ */
		0x00D7, /* 0x47 G: × */
		0x3008, /* 0x48 H: 〈 */
		0x2026, /* 0x49 I: … */
		0x3009, /* 0x4A J: 〉 */
		0x00B7, /* 0x4B K: · */
		0x003B, /* 0x4C L: colon */
		0x300F, /* 0x4D M: 』 */
		0x300E, /* 0x4E N: 『 */
		0x2191, /* 0x4F O: ↑ */
		0x2193, /* 0x50 P: ↓ */
		0x2661, /* 0x51 Q: ♡ white heart suit */
		0x2194, /* 0x52 R: ↔ left right arrow */
		0x25bd, /* 0x53 S: ▽ white down-pointing triangle */
		0x203b, /* 0x54 T: ※ reference mark */
		0x300B, /* 0x55 U: 》 */
		0x300d, /* 0x56 V: 」 right corner bracket */
		0x2190, /* 0x57 W: ← leftwards arrow */
		0x25ce, /* 0x58 X: ◎ bullseye */
		0x300A, /* 0x59 Y: 《 */
		0x25a1, /* 0x5A Z: □ white square */
		0x005b, /* 0x5B bracketleft: left bracket */
		0x005c, /* 0x5C backslash: backslash */
		0x005d, /* 0x5D bracketright: right bracket */
		0x005e, /* 0x5E asciicircum: circumflex accent */
		0x005f, /* 0x5F underscore: underscore */
		0x0060, /* 0x60 quoteleft: grave accent */
		0x11bc, /* 0x61 a: jongseong ieung */
		0x116e, /* 0x62 b: jungseong u */
		0x1166, /* 0x63 c: jungseong e */
		0x1175, /* 0x64 d: jungseong i */
		0x11af, /* 0x65 e: jongseong lieul */
		0x1161, /* 0x66 f: jungseong a */
		0x1173, /* 0x67 g: jungseong eu */
		0x1109, /* 0x68 h: choseong sieus */
		0x1103, /* 0x69 i: choseong dieud */
		0x110b, /* 0x6A j: choseong ieung */
		0x1100, /* 0x6B k: choseong gieug */
		0x110c, /* 0x6C l: choseong jieuj */
		0x1105, /* 0x6D m: choseong lieul */
		0x1112, /* 0x6E n: choseong hieuh */
		0x1107, /* 0x6F o: choseong pieup */
		0x116e, /* 0x70 p: jungseong u */
		0x11ba, /* 0x71 q: jongseong sieus */
		0x1165, /* 0x72 r: jungseong eo */
		0x11ab, /* 0x73 s: jongseong nieun */
		0x1167, /* 0x74 t: jungseong yeo */
		0x1102, /* 0x75 u: choseong nieun */
		0x1169, /* 0x76 v: jungseong o */
		0x11b8, /* 0x77 w: jongseong pieup */
		0x11a8, /* 0x78 x: jongseong gieug */
		0x1106, /* 0x79 y: choseong mieum */
		0x11b7, /* 0x7A z: jongseong mieum */
		0x007b, /* 0x7B braceleft: left brace */
		0x007c, /* 0x7C bar: vertical line(bar) */
		0x007d, /* 0x7D braceright: right brace */
		0x007e  /* 0x7E asciitilde: tilde */
	];

	K3_Moachigi_2015_sublayout = [
		0x0000,	/* 0x21 exclam */
		0x0000,	/* 0x22 quotedbl */
		0x0000,	/* 0x23 numbersign */
		0x0000,	/* 0x24 dollar */
		0x0000,	/* 0x25 percent */
		0x0000,	/* 0x26 ampersand */
		0x0000,	/* 0x27 apostrophe */
		0x0000,	/* 0x28 parenleft */
		0x0000,	/* 0x29 parenright */
		0x0000,	/* 0x2A asterisk */
		0x0000,	/* 0x2B plus */
		0x0000,	/* 0x2C comma */
		0x0000,	/* 0x2D minus */
		0x0000,	/* 0x2E period */
		0x0000,	/* 0x2F slash */
		0x0000,	/* 0x30 0 */
		0x0000,	/* 0x31 1 */
		0x0000,	/* 0x32 2 */
		0x0000,	/* 0x33 3 */
		0x0000,	/* 0x34 4 */
		0x0000,	/* 0x35 5 */
		0x0000,	/* 0x36 6 */
		0x0000,	/* 0x37 7 */
		0x0000,	/* 0x38 8 */
		0x0000,	/* 0x39 9 */
		0x0000,	/* 0x3A colon */
		0x0000,	/* 0x3B semicolon */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x0000,	/* 0x40 at */
		0x0000,	/* 0x41 A */
		0x0000,	/* 0x42 B */
		0x0000,	/* 0x43 C */
		0x0000, /* 0x44 D */
		0x0000,	/* 0x45 E */
		0x0000,	/* 0x46 F */
		0x0000,	/* 0x47 G */
		0x0000,	/* 0x48 H */
		0x0000,	/* 0x49 I */
		0x0000,	/* 0x4A J */
		0x0000,	/* 0x4B K */
		0x0000,	/* 0x4C L */
		0x0000,	/* 0x4D M */
		0x0000,	/* 0x4E N */
		0x0000,	/* 0x4F O */
		0x0000,	/* 0x50 P */
		0x0000,	/* 0x51 Q */
		0x0000,	/* 0x52 R */
		0x0000,	/* 0x53 S */
		0x0000,	/* 0x54 T */
		0x0000,	/* 0x55 U */
		0x0000,	/* 0x56 V */
		0x0000,	/* 0x57 W */
		0x0000,	/* 0x58 X */
		0x0000,	/* 0x59 Y */
		0x0000,	/* 0x5A Z */
		0x0000,	/* 0x3A colon */
		0x0000,	/* 0x3B semicolon */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x11b6,	/* 0x61 a: jongseong lieul-hieuh */
		0x1172,	/* 0x62 b: jungseong yu */
		0x1168,	/* 0x63 c: jungseong ye */
		0x0000,	/* 0x64 d */
		0x11bd,	/* 0x65 e: jongseong jieuj */
		0x0000,	/* 0x66 f */
		0x0000,	/* 0x67 g */
		0x0000,	/* 0x68 h */
		0x0000,	/* 0x69 i */
		0x0000,	/* 0x6A j */
		0x0000,	/* 0x6B k */
		0x0000,	/* 0x6C l */
		0x0000,	/* 0x6D m */
		0x0000,	/* 0x6E n */
		0x0000,	/* 0x6F o */
		0x0000,	/* 0x70 p */
		0x11be,	/* 0x71 q: jongseong chieuch */
		0x1163,	/* 0x72 r: jongseong ya */
		0x11c2,	/* 0x73 s: jongseong hieuh */
		0x1164,	/* 0x74 t: jungseong yae */
		0x0000,	/* 0x75 u */
		0x116d,	/* 0x76 v: jungseong yo */
		0x11c1,	/* 0x77 w: jongseong pieup */
		0x11bf,	/* 0x78 x: jongseong kieuk */
		0x0000,	/* 0x79 y */
		0x11ae,	/* 0x7A z: jongseong dieud */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];

} // additional_keyboard_layout_table_info()

function input_hangeul_combination_table_info() {
	hangeul_combination_table_default = [
		[0x11001100,0x1101], /* choseong  gieug + gieug = ssanggieug */
		[0x11031103,0x1104], /* choseong  dieud + dieud = ssangdieud */
		[0x11071107,0x1108], /* choseong  bieup + bieup = ssangbieup */
		[0x11091109,0x110a], /* choseong  sieus + sieus = ssangsieus */
		[0x110c110c,0x110d], /* choseong  jieuj + jieuj = ssangjieuj */
		[0x11691161,0x116a], /* jungseong o + a = wa */
		[0x11691162,0x116b], /* jungseong o + ae = wae */
		[0x11691175,0x116c], /* jungseong o + i = oe */
		[0x116e1165,0x116f], /* jungseong u + eo = weo */
		[0x116e1166,0x1170], /* jungseong u + e = we */
		[0x116e1175,0x1171], /* jungseong u + i = wi */
		[0x11731175,0x1174], /* jungseong eu + i = eui */
		[0x119e1175,0x11a1], /* jungseong araea + i = araea-i */
		[0x119e119e,0x11a2], /* jungseong araea + araea = ssangaraea */
		[0x11a811a8,0x11a9], /* jongseong gieug + gieug = ssangegieug */
		[0x11a811ba,0x11aa], /* jongseong gieug + sieus = gieug-sieus */
		[0x11ab11bd,0x11ac], /* jongseong nieun + jieuj = jieun-cieuj */
		[0x11ab11c2,0x11ad], /* jongseong nieun + hieuh = nieun-hieuh */
		[0x11af11a8,0x11b0], /* jongseong lieul + gieug = lieul-gieug */
		[0x11af11b7,0x11b1], /* jongseong lieul + mieum = lieul-mieum */
		[0x11af11b8,0x11b2], /* jongseong lieul + bieub = lieul-bieub */
		[0x11af11ba,0x11b3], /* jongseong lieul + sieus = lieul-sieus */
		[0x11af11c0,0x11b4], /* jongseong lieul + tieut = lieul-tieut */
		[0x11af11c1,0x11b5], /* jongseong lieul + pieup = lieul-pieup */
		[0x11af11c2,0x11b6], /* jongseong lieul + hieuh = lieul-hieuh */
		[0x11b811ba,0x11b9], /* jongseong bieub + sieus = bieub-sieus */
		[0x11ba11ba,0x11bb]  /* jongseong sieus + sieus = ssangsieus */
	];

	hangeul_combination_table_full = [
		[0x11001100,0x1101], /* choseong gieug + gieug = ssanggieug */
		[0x11001103,0x115a], /* choseong gieug + dieud = gieug-dieud */
		[0x11021100,0x1113], /* choseong nieun + gieug = nieun-gieug */
		[0x11021102,0x1114], /* choseong nieun + nieun = ssangnieun */
		[0x11021103,0x1115], /* choseong nieun + dieud = nieun-dieud */
		[0x11021107,0x1116], /* choseong nieun + bieub = nieun-bieub */
		[0x11021109,0x115b], /* choseong nieun + sieus = nieun-sieus */
		[0x1102110c,0x115c], /* choseong nieun + jieuj = nieun-jieuj */
		[0x11021112,0x115d], /* choseong nieun + hieuh = nieun-hieuh */
		[0x11031100,0x1117], /* choseong dieud + gieug = dieud-gieug */
		[0x11031103,0x1104], /* choseong dieud + dieud = ssangdieud */
		[0x11031105,0x115e], /* choseong dieud + lieul = dieud-lieul */
		[0x11031106,0xa960], /* choseong dieud + mieum = dieud-mieum */
		[0x11031107,0xa961], /* choseong dieud + bieub = dieud-bieub */
		[0x11031109,0xa962], /* choseong dieud + sieus = dieud-sieus */
		[0x1103110c,0xa963], /* choseong dieud + jieuj = dieud-jieuj */
		[0x11051100,0xa964], /* choseong lieul + gieug = lieul-gieug */
		[0x11051101,0xa965], /* choseong lieul + ssanggieug = lieul-ssanggieug */
		[0x11051102,0x1118], /* choseong lieul + nieun = lieul-nieun */
		[0x11051103,0xa966], /* choseong lieul + dieud = lieul-dieud */
		[0x11051104,0xa967], /* choseong lieul + ssangdieud = lieul-ssangdieud */
		[0x11051105,0x1119], /* choseong lieul + lieul = ssanglieul */
		[0x11051106,0xa968], /* choseong lieul + mieum = lieul-mieum */
		[0x11051107,0xa969], /* choseong lieul + bieub = lieul-bieub */
		[0x11051108,0xa96a], /* choseong lieul + ssangbieub = lieul-ssangbieub */
		[0x11051109,0xa96c], /* choseong lieul + sieus = lieul-sieus */
		[0x1105110b,0x111b], /* choseong lieul + ieung = gabyeounlieul */
		[0x1105110c,0xa96d], /* choseong lieul + jieuj = lieul-jieuj */
		[0x1105110f,0xa96e], /* choseong lieul + kieuk = lieul-kieuk */
		[0x11051112,0x111a], /* choseong lieul + hieuh = lieul-hieuh */
		[0x1105112b,0xa96b], /* choseong lieul + gabyeounbieub = lieul-gabyeounbieub */
		[0x11061100,0xa96f], /* choseong mieum + gieug = mieum-gieug */
		[0x11061103,0xa970], /* choseong mieum + dieud = mieum-dieud */
		[0x11061107,0x111c], /* choseong mieum + bieub = mieum-bieub */
		[0x11061109,0xa971], /* choseong mieum + sieus = mieum-sieus */
		[0x1106110b,0x111d], /* choseong mieum + ieung = gabyeounmieum */
		[0x11071100,0x111e], /* choseong bieub + gieug = bieub-gieug */
		[0x11071102,0x111f], /* choseong bieub + nieun = bieub-nieun */
		[0x11071103,0x1120], /* choseong bieub + dieud = bieub-dieud */
		[0x11071107,0x1108], /* choseong bieub + bieub = ssangbieub */
		[0x11071109,0x1121], /* choseong bieub + sieus = bieub-sieus */
		[0x1107110a,0x1125], /* choseong bieub + ssangsieus = bieub-ssangsieus */
		[0x1107110b,0x112b], /* choseong bieub + ieung = gabyeounbieub */
		[0x1107110c,0x1127], /* choseong bieub + jieuj = bieub-jieuj */
		[0x1107110e,0x1128], /* choseong bieub + chieuch = bieub-chieuch */
		[0x1107110f,0xa973], /* choseong bieub + kieuk = bieub-kieuk */
		[0x11071110,0x1129], /* choseong bieub + tieut = bieub-tieut */
		[0x11071111,0x112a], /* choseong bieub + pieup = bieub-pieup */
		[0x11071112,0xa974], /* choseong bieub + hieuh = bieub-hieuh */
		[0x1107112b,0x112c], /* choseong bieub + gabyeounbieub = gabyeounssangbieub */
		[0x1107112d,0x1122], /* choseong bieub + sieus-gieug = bieub-sieus-gieug */
		[0x1107112f,0x1123], /* choseong bieub + sieus-dieud = bieub-sieus-dieud */
		[0x11071132,0x1124], /* choseong bieub + sieus-bieub = bieub-sieus-bieub */
		[0x11071136,0x1126], /* choseong bieub + sieus-jieuj = bieub-sieus-jieuj */
		[0x11071139,0xa972], /* choseong bieub + sieus-tieut = bieub-sieus-tieut */
		[0x1108110b,0x112c], /* choseong ssangbieub + ieung = gabyeounssangbieub */
		[0x11091100,0x112d], /* choseong sieus + gieug = sieus-gieug */
		[0x11091102,0x112e], /* choseong sieus + nieun = sieus-nieun */
		[0x11091103,0x112f], /* choseong sieus + dieud = sieus-dieud */
		[0x11091105,0x1130], /* choseong sieus + lieul = sieus-lieul */
		[0x11091106,0x1131], /* choseong sieus + mieum = sieus-mieum */
		[0x11091107,0x1132], /* choseong sieus + bieub = sieus-bieub */
		[0x11091109,0x110a], /* choseong sieus + sieus = ssangsieus */
		[0x1109110a,0x1134], /* choseong sieus + ssangsieus = sieus-ssangsieus */
		[0x1109110b,0x1135], /* choseong sieus + ieung = sieus-ieung */
		[0x1109110c,0x1136], /* choseong sieus + jieuj = sieus-jieuj */
		[0x1109110e,0x1137], /* choseong sieus + chieuch = sieus-chieuch */
		[0x1109110f,0x1138], /* choseong sieus + kieuk = sieus-kieuk */
		[0x11091110,0x1139], /* choseong sieus + tieut = sieus-tieut */
		[0x11091111,0x113a], /* choseong sieus + pieup = sieus-pieup */
		[0x11091112,0x113b], /* choseong sieus + hieuh = sieus-hieuh */
		[0x1109111e,0x1133], /* choseong sieus + bieub-gieug = sieus-bieub-gieug */
		[0x11091132,0xa975], /* choseong sieus + sieus-bieub = ssangsieus-bieub */
		[0x110a1107,0xa975], /* choseong ssangsieus + bieub = ssangsieus-bieub */
		[0x110a1109,0x1134], /* choseong ssangsieus + sieus = sieus-ssangsieus */
		[0x110b1100,0x1141], /* choseong ieung + gieug = ieung-gieug */
		[0x110b1103,0x1142], /* choseong ieung + dieud = ieung-dieud */
		[0x110b1105,0xa976], /* choseong ieung + lieul = ieung-lieul */
		[0x110b1106,0x1143], /* choseong ieung + mieum = ieung-mieum */
		[0x110b1107,0x1144], /* choseong ieung + bieub = ieung-bieub */
		[0x110b1109,0x1145], /* choseong ieung + sieus = ieung-sieus */
		[0x110b110b,0x1147], /* choseong ieung + ieung = ssangieung */
		[0x110b110c,0x1148], /* choseong ieung + jieuj = ieung-jieuj */
		[0x110b110e,0x1149], /* choseong ieung + chieuch = ieung-chieuch */
		[0x110b1110,0x114a], /* choseong ieung + tieut = ieung-tieut */
		[0x110b1111,0x114b], /* choseong ieung + pieup = ieung-pieup */
		[0x110b1112,0xa977], /* choseong ieung + hieuh = ieung-hieuh */
		[0x110b1140,0x1146], /* choseong ieung + bansieus = ieung-bansieus */
		[0x110c110b,0x114d], /* choseong jieuj + ieung = jieuj-ieung */
		[0x110c110c,0x110d], /* choseong jieuj + jieuj = ssangjieuj */
		[0x110d1112,0xa978], /* choseong ssangjieuj + hieuh = ssangjieuj-hieuh */
		[0x110e110f,0x1152], /* choseong chieuch + kieuk = chieuch-kieuk */
		[0x110e1112,0x1153], /* choseong chieuch + hieuh = chieuch-hieuh */
		[0x11101110,0xa979], /* choseong tieut + tieut = ssangtieut */
		[0x11111107,0x1156], /* choseong pieup + bieub = pieup-bieub */
		[0x1111110b,0x1157], /* choseong pieup + ieung = gabyeounpieup */
		[0x11111112,0xa97a], /* choseong pieup + hieuh = pieup-hieuh */
		[0x11121109,0xa97b], /* choseong hieuh + sieus = hieuh-sieus */
		[0x11121112,0x1158], /* choseong hieuh + hieuh = ssanghieuh */
		[0x11211100,0x1122], /* choseong bieub-sieus + gieug = bieub-sieus-gieug */
		[0x11211103,0x1123], /* choseong bieub-sieus + dieud = bieub-sieus-dieud */
		[0x11211107,0x1124], /* choseong bieub-sieus + bieub = bieub-sieus-bieub */
		[0x11211109,0x1125], /* choseong bieub-sieus + sieus = bieub-ssangsieus */
		[0x1121110c,0x1126], /* choseong bieub-sieus + jieuj = bieub-sieus-jieuj */
		[0x11211110,0xa972], /* choseong bieub-sieus + tieut = bieub-sieus-tieut */
		[0x11321100,0x1133], /* choseong sieus-bieub + gieug = sieus-bieub-gieug */
		[0x113c113c,0x113d], /* choseong chidueumsieus + chidueumsieus = chidueumssangsieus */
		[0x113e113e,0x113f], /* choseong jeongchieumsieus + jeongchieumsieus = jeongchieumssangsieus */
		[0x114e114e,0x114f], /* choseong chidueumjieuj + chidueumjieuj = chidueumssangjieuj */
		[0x11501150,0x1151], /* choseong jeongchieumjieuj + jeongchieumjieuj = jeongchieumssangjieuj */
		[0x11591159,0xa97c], /* choseong yeorinhieuh + yeorinhieuh = ssangyeorinhieuh */
		[0x11611161,0x119e], /* jungseong a + a  = arae-a */
		[0x11611169,0x1176], /* jungseong a + o  = a-o */
		[0x1161116e,0x1177], /* jungseong a + u  = a-u */
		[0x11611173,0x11a3], /* jungseong a + eu = a-eu */
		[0x11611175,0x1162], /* jungseong a + i  = ae */
		[0x11631169,0x1178], /* jungseong ya + o = ya-o */
		[0x1163116d,0x1179], /* jungseong ya + yo = ya-yo */
		[0x1163116e,0x11a4], /* jungseong ya + u = ya-u */
		[0x11631175,0x1164], /* jungseong ya + i = yae */
		[0x11651169,0x117a], /* jungseong eo + o = eo-o */
		[0x1165116e,0x117b], /* jungseong eo + u = eo-u */
		[0x11651173,0x117c], /* jungseong eo + eu = eo-eu */
		[0x11651175,0x1166], /* jungseong eo + i = e */
		[0x11671163,0x11a5], /* jungseong yeo + ya = yeo-ya */
		[0x11671169,0x117d], /* jungseong yeo + o = yeo-o */
		[0x1167116e,0x117e], /* jungseong yeo + u = yeo-u */
		[0x11671175,0x1168], /* jungseong yeo + i = ye */
		[0x11691161,0x116a], /* jungseong o + a   = wa */
		[0x11691162,0x116b], /* jungseong o + ae  = wae */
		[0x11691163,0x11a6], /* jungseong o + ya  = o-ya */
		[0x11691164,0x11a7], /* jungseong o + yae = o-yae */
		[0x11691165,0x117f], /* jungseong o + eo  = o-eo */
		[0x11691166,0x1180], /* jungseong o + e   = o-e */
		[0x11691167,0xd7b0], /* jungseong o + yeo = o-yeo */
		[0x11691168,0x1181], /* jungseong o + ye  = o-ye */
		[0x11691169,0x1182], /* jungseong o + o   = o-o */
		[0x1169116e,0x1183], /* jungseong o + u   = o-u */
		[0x11691175,0x116c], /* jungseong o + i   = oe */
		[0x116a1175,0x116b], /* jungseong wa + i   = wae */
		[0x116d1161,0xd7b2], /* jungseong yo + a   = yo-a */
		[0x116d1162,0xd7b3], /* jungseong yo + ae  = yo-ae */
		[0x116d1163,0x1184], /* jungseong yo + ya  = yo-ya */
		[0x116d1164,0x1185], /* jungseong yo + yae = yo-yae */
		[0x116d1165,0xd7b4], /* jungseong yo + eo  = yo-eo */
		[0x116d1167,0x1186], /* jungseong yo + yeo = yo-yeo */
		[0x116d1169,0x1187], /* jungseong yo + o   = yo-o */
		[0x116d1175,0x1188], /* jungseong yo + i   = yo-i */
		[0x116e1161,0x1189], /* jungseong u + a    = u-a */
		[0x116e1162,0x118a], /* jungseong u + ae   = u-ae */
		[0x116e1165,0x116f], /* jungseong u + eo   = weo */
		[0x116e1166,0x1170], /* jungseong u + e    = we */
		[0x116e1167,0xd7b5], /* jungseong u + yeo  = u-yeo */
		[0x116e1168,0x118c], /* jungseong u + ye   = u-ye */
		[0x116e116e,0x118d], /* jungseong u + u    = u-u */
		[0x116e1175,0x1171], /* jungseong u + i    = wi */
		[0x116e117c,0x118b], /* jungseong u + eo-eu = u-eo-eu */
		[0x116ed7c4,0xd7b6], /* jungseong u + i-i  = u-i-i */
		[0x116f1173,0x118b], /* jungseong weo + eu = u-eo-eu */
		[0x116f1175,0x1170], /* jungseong weo + i  = we */
		[0x11711175,0xd7b6], /* jungseong wi + i   = u-i-i */
		[0x11721161,0x118e], /* jungseong yu + a   = yu-a */
		[0x11721162,0xd7b7], /* jungseong yu + ae  = yu-ae */
		[0x11721165,0x118f], /* jungseong yu + eo  = yu-eo */
		[0x11721166,0x1190], /* jungseong yu + e   = yu-e */
		[0x11721167,0x1191], /* jungseong yu + yeo = yu-yeo */
		[0x11721168,0x1192], /* jungseong yu + ye  = yu-ye */
		[0x11721169,0xd7b8], /* jungseong yu + o   = yu-o */
		[0x1172116e,0x1193], /* jungseong yu + u   = yu-u */
		[0x11721175,0x1194], /* jungseong yu + i   = yu-i */
		[0x11731161,0xd7b9], /* jungseong eu + a   = eu-a */
		[0x11731165,0xd7ba], /* jungseong eu + eo  = eu-eo */
		[0x11731166,0xd7bb], /* jungseong eu + e   = eu-e */
		[0x11731169,0xd7bc], /* jungseong eu + o   = eu-o */
		[0x1173116e,0x1195], /* jungseong eu + u   = eu-u */
		[0x11731173,0x1196], /* jungseong eu + eu  = eu-eu */
		[0x11731175,0x1174], /* jungseong eu + i   = eui */
		[0x1174116e,0x1197], /* jungseong eui + u  = eui-u */
		[0x11751161,0x1198], /* jungseong i + a    = i-a */
		[0x11751163,0x1199], /* jungseong i + ya   = i-ya */
		[0x11751164,0xd7be], /* jungseong i + yae  = i-yae */
		[0x11751167,0xd7bf], /* jungseong i + yeo  = i-yeo */
		[0x11751168,0xd7c0], /* jungseong i + ye   = i-ye */
		[0x11751169,0x119a], /* jungseong i + o    = i-o */
		[0x1175116d,0xd7c2], /* jungseong i + yo   = i-yo */
		[0x1175116e,0x119b], /* jungseong i + u    = i-u */
		[0x11751172,0xd7c3], /* jungseong i + yu   = i-yu */
		[0x11751173,0x119c], /* jungseong i + eu   = i-eu */
		[0x11751175,0xd7c4], /* jungseong i + i    = i-i */
		[0x11751178,0xd7bd], /* jungseong i + ya-o = i-ya-o */
		[0x1175119e,0x119d], /* jungseong i + araea = i-araea */
		[0x11821175,0xd7b1], /* jungseong o-o + i  = o-o-i */
		[0x11991169,0xd7bd], /* jungseong i-ya + o = i-ya-o */
		[0x119a1175,0xd7c1], /* jungseong i-o + i  = i-o-i */
		[0x119e1161,0xd7c5], /* jungseong araea + a = araea-a */
		[0x119e1165,0x119f], /* jungseong araea + eo = araea-eo */
		[0x119e1166,0xd7c6], /* jungseong araea + e = araea-e */
		[0x119e116e,0x11a0], /* jungseong araea + u = araea-u */
		[0x119e1175,0x11a1], /* jungseong araea + i = araea-i */
		[0x119e119e,0x11a2], /* jungseong araea + araea = ssangaraea */
		[0x11a811a8,0x11a9], /* jongseong gieug + gieug = ssanggieug */
		[0x11a811ab,0x11fa], /* jongseong gieug + nieun = gieug-nieun */
		[0x11a811af,0x11c3], /* jongseong gieug + lieul = gieug-lieul */
		[0x11a811b8,0x11fb], /* jongseong gieug + bieub = gieug-bieub */
		[0x11a811ba,0x11aa], /* jongseong gieug + sieus = gieug-sieus */
		[0x11a811be,0x11fc], /* jongseong gieug + chieuch = gieug-chieuch */
		[0x11a811bf,0x11fd], /* jongseong gieug + kieuk = gieug-kieuk */
		[0x11a811c2,0x11fe], /* jongseong gieug + hieuh = gieug-hieuh */
		[0x11a811e7,0x11c4], /* jongseong gieug + sieus-gieug = gieug-sieus-gieug */
		[0x11aa11a8,0x11c4], /* jongseong gieug-sieus + gieug = gieug-sieus-gieug */
		[0x11ab11a8,0x11c5], /* jongseong nieun + gieug = nieun-gieug */
		[0x11ab11ab,0x11ff], /* jongseong nieun + nieun = ssangnieun */
		[0x11ab11ae,0x11c6], /* jongseong nieun + dieud = nieun-dieud */
		[0x11ab11af,0xd7cb], /* jongseong nieun + lieul = nieun-lieul */
		[0x11ab11ba,0x11c7], /* jongseong nieun + sieus = nieun-sieus */
		[0x11ab11bd,0x11ac], /* jongseong nieun + jieuj = nieun-jieuj */
		[0x11ab11be,0xd7cc], /* jongseong nieun + chieuch = nieun-chieuch */
		[0x11ab11c0,0x11c9], /* jongseong nieun + tieut = nieun-tieut */
		[0x11ab11c2,0x11ad], /* jongseong nieun + hieuh = nieun-hieuh */
		[0x11ab11eb,0x11c8], /* jongseong nieun + bansieus = nieun-bansieus */
		[0x11ae11a8,0x11ca], /* jongseong dieud + gieug = dieud-gieug */
		[0x11ae11ae,0xd7cd], /* jongseong dieud + dieud = ssangdieud */
		[0x11ae11af,0x11cb], /* jongseong dieud + lieul = dieud-lieul */
		[0x11ae11b8,0xd7cf], /* jongseong dieud + bieub = dieud-bieub */
		[0x11ae11ba,0xd7d0], /* jongseong dieud + sieus = dieud-sieus */
		[0x11ae11bd,0xd7d2], /* jongseong dieud + jieuj = dieud-jieuj */
		[0x11ae11be,0xd7d3], /* jongseong dieud + chieuch = dieud-chieuch */
		[0x11ae11c0,0xd7d4], /* jongseong dieud + tieut = dieud-tieut */
		[0x11ae11e7,0xd7d1], /* jongseong dieud + sieus-gieug = dieud-sieus-gieug */
		[0x11aed7cf,0xd7ce], /* jongseong dieud + dieud-bieub = ssangdieud-bieub */
		[0x11af11a8,0x11b0], /* jongseong lieul + gieug = lieul-gieug */
		[0x11af11a9,0xd7d5], /* jongseong lieul + ssanggieug = lieul-ssanggieug */
		[0x11af11aa,0x11cc], /* jongseong lieul + gieug-sieus = lieul-gieug-sieus */
		[0x11af11ab,0x11cd], /* jongseong lieul + nieun = lieul-nieun */
		[0x11af11ae,0x11ce], /* jongseong lieul + dieud = lieul-dieud */
		[0x11af11af,0x11d0], /* jongseong lieul + lieul = ssanglieul */
		[0x11af11b7,0x11b1], /* jongseong lieul + mieum = lieul-mieum */
		[0x11af11b8,0x11b2], /* jongseong lieul + bieub = lieul-bieub */
		[0x11af11b9,0x11d3], /* jongseong lieul + bieub-sieus = lieul-bieub-sieus */
		[0x11af11ba,0x11b3], /* jongseong lieul + sieus = lieul-sieus */
		[0x11af11bb,0x11d6], /* jongseong lieul + ssangsieus = lieul-ssangsieus */
		[0x11af11bc,0xd7dd], /* jongseong lieul + ieung = gabyeounlieul */
		[0x11af11bf,0x11d8], /* jongseong lieul + kieuk = lieul-kieuk */
		[0x11af11c0,0x11b4], /* jongseong lieul + tieut = lieul-tieut */
		[0x11af11c1,0x11b5], /* jongseong lieul + pieup = lieul-pieup */
		[0x11af11c2,0x11b6], /* jongseong lieul + hieuh = lieul-hieuh */
		[0x11af11d8,0xd7d7], /* jongseong lieul + lieul-kieuk = ssanglieul-kieuk */
		[0x11af11da,0x11d1], /* jongseong lieul + mieum-gieug = lieul-mieum-gieug */
		[0x11af11dd,0x11d2], /* jongseong lieul + mieum-sieus = lieul-mieum-sieus */
		[0x11af11e1,0xd7d8], /* jongseong lieul + mieum-hieuh = lieul-mieum-hieuh */
		[0x11af11e4,0xd7da], /* jongseong lieul + bieub-pieup = lieul-bieub-pieup */
		[0x11af11e5,0x11d4], /* jongseong lieul + bieub-hieuh = lieul-bieub-hieuh */
		[0x11af11e6,0x11d5], /* jongseong lieul + gabyeounbieub = lieul-gabyeounbieub */
		[0x11af11eb,0x11d7], /* jongseong lieul + bansieus = lieul-bansieus */
		[0x11af11f0,0xd7db], /* jongseong lieul + yesieung = lieul-yesieung */
		[0x11af11f9,0x11d9], /* jongseong lieul + yeorinhieuh = lieul-yeorinhieuh */
		[0x11af11fe,0xd7d6], /* jongseong lieul + gieug-hieuh = lieul-gieug-hieuh */
		[0x11afd7e3,0xd7d9], /* jongseong lieul + bieub-dieud = lieul-bieub-dieud */
		[0x11b011a8,0xd7d5], /* jongseong lieul-gieug + gieug = lieul-ssanggieug */
		[0x11b011ba,0x11cc], /* jongseong lieul-gieug + sieus = lieul-gieug-sieus */
		[0x11b011c2,0xd7d6], /* jongseong lieul-gieug + hieuh = lieul-gieug-hieuh */
		[0x11b111a8,0x11d1], /* jongseong lieul-mieum + gieug = lieul-mieum-gieug */
		[0x11b111ba,0x11d2], /* jongseong lieul-mieum + sieus = lieul-mieum-sieus */
		[0x11b111c2,0xd7d8], /* jongseong lieul-mieum + hieuh = lieul-mieum-hieuh */
		[0x11b211ae,0xd7d9], /* jongseong lieul-bieub + dieud = lieul-bieub-dieud */
		[0x11b211ba,0x11d3], /* jongseong lieul-bieub + sieus = lieul-bieub-sieus */
		[0x11b211bc,0x11d5], /* jongseong lieul-bieub + ieung = lieul-gabyeounbieub */
		[0x11b211c1,0xd7da], /* jongseong lieul-bieub + pieup = lieul-bieub-pieup */
		[0x11b211c2,0x11d4], /* jongseong lieul-bieub + hieuh = lieul-bieub-hieuh */
		[0x11b311ba,0x11d6], /* jongseong lieul-sieus + sieus = lieul-ssangsieus */
		[0x11b711a8,0x11da], /* jongseong mieum + gieug = mieum-gieug */
		[0x11b711ab,0xd7de], /* jongseong mieum + nieun = mieum-nieun */
		[0x11b711af,0x11db], /* jongseong mieum + lieul = mieum-lieul */
		[0x11b711b7,0xd7e0], /* jongseong mieum + mieum = ssangmieum */
		[0x11b711b8,0x11dc], /* jongseong mieum + bieub = mieum-bieub */
		[0x11b711b9,0xd7e1], /* jongseong mieum + bieub-sieus = mieum-bieub-sieus */
		[0x11b711ba,0x11dd], /* jongseong mieum + sieus = mieum-sieus */
		[0x11b711bb,0x11de], /* jongseong mieum + ssangsieus = mieum-ssangsieus */
		[0x11b711bc,0x11e2], /* jongseong mieum + ieung = gabyeounmieum */
		[0x11b711bd,0xd7e2], /* jongseong mieum + jieuj = mieum-jieuj */
		[0x11b711be,0x11e0], /* jongseong mieum + chieuch = mieum-chieuch */
		[0x11b711c2,0x11e1], /* jongseong mieum + hieuh = mieum-hieuh */
		[0x11b711eb,0x11df], /* jongseong mieum + bansieus = mieum-bansieus */
		[0x11b711ff,0xd7df], /* jongseong mieum + ssangnieun = mieum-ssangnieun */
		[0x11b811ae,0xd7e3], /* jongseong bieub + dieud = bieub-dieud */
		[0x11b811af,0x11e3], /* jongseong bieub + lieul = bieub-lieul */
		[0x11b811b5,0xd7e4], /* jongseong bieub + lieul-pieup = bieub-lieul-pieup */
		[0x11b811b7,0xd7e5], /* jongseong bieub + mieum = bieub-mieum */
		[0x11b811b8,0xd7e6], /* jongseong bieub + bieub = ssangbieub */
		[0x11b811ba,0x11b9], /* jongseong bieub + sieus = bieub-sieus */
		[0x11b811bc,0x11e6], /* jongseong bieub + ieung = gabyeounbieub */
		[0x11b811bd,0xd7e8], /* jongseong bieub + jieuj = bieub-jieuj */
		[0x11b811be,0xd7e9], /* jongseong bieub + chieuch = bieub-chieuch */
		[0x11b811c1,0x11e4], /* jongseong bieub + pieup = bieub-pieup */
		[0x11b811c2,0x11e5], /* jongseong bieub + hieuh = bieub-hieuh */
		[0x11b811e8,0xd7e7], /* jongseong bieub + sieus-dieud = bieub-sieus-dieud */
		[0x11b911ae,0xd7e7], /* jongseong bieub-sieus + dieud = bieub-sieus-dieud */
		[0x11ba11a8,0x11e7], /* jongseong sieus + gieug = sieus-gieug */
		[0x11ba11ae,0x11e8], /* jongseong sieus + dieud = sieus-dieud */
		[0x11ba11af,0x11e9], /* jongseong sieus + lieul = sieus-lieul */
		[0x11ba11b7,0xd7ea], /* jongseong sieus + mieum = sieus-mieum */
		[0x11ba11b8,0x11ea], /* jongseong sieus + bieub = sieus-bieub */
		[0x11ba11ba,0x11bb], /* jongseong sieus + sieus = ssangsieus */
		[0x11ba11bd,0xd7ef], /* jongseong sieus + jieuj = sieus-jieuj */
		[0x11ba11be,0xd7f0], /* jongseong sieus + chieuch = sieus-chieuch */
		[0x11ba11c0,0xd7f1], /* jongseong sieus + tieut = sieus-tieut */
		[0x11ba11c2,0xd7f2], /* jongseong sieus + hieuh = sieus-hieuh */
		[0x11ba11e6,0xd7eb], /* jongseong sieus + gabyeounbieub = sieus-gabyeounbieub */
		[0x11ba11e7,0xd7ec], /* jongseong sieus + sieus-gieug = ssangsieus-gieug */
		[0x11ba11e8,0xd7ed], /* jongseong sieus + sieus-dieud = ssangsieus-dieud */
		[0x11ba11eb,0xd7ee], /* jongseong sieus + bansieus = sieus-bansieus */
		[0x11bb11a8,0xd7ec], /* jongseong ssangsieus + gieug = ssangsieus-gieug */
		[0x11bb11ae,0xd7ed], /* jongseong ssangsieus + dieud = ssangsieus-dieud */
		[0x11bd11b8,0xd7f7], /* jongseong jieuj + bieub = jieuj-bieub */
		[0x11bd11bd,0xd7f9], /* jongseong jieuj + jieuj = ssangjieuj */
		[0x11bdd7e6,0xd7f8], /* jongseong jieuj + ssangbieub = jieuj-ssangbieub */
		[0x11c111b8,0x11f3], /* jongseong pieup + bieub = pieup-bieub */
		[0x11c111ba,0xd7fa], /* jongseong pieup + sieus = bieub-sieus */
		[0x11c111bc,0x11f4], /* jongseong pieup + ieung = gabyeounpieup */
		[0x11c111c0,0xd7fb], /* jongseong pieup + tieut = pieup-tieut */
		[0x11c211ab,0x11f5], /* jongseong hieuh + nieun = hieuh-nieun */
		[0x11c211af,0x11f6], /* jongseong hieuh + lieul = hieuh-lieul */
		[0x11c211b7,0x11f7], /* jongseong hieuh + mieum = hieuh-mieum */
		[0x11c211b8,0x11f8], /* jongseong hieuh + bieub = hieuh-bieub */
		[0x11ce11c2,0x11cf], /* jongseong lieul-dieud + hieuh = lieul-dieud-hieuh */
		[0x11d011bf,0xd7d7], /* jongseong ssanglieul + kieuk = ssanglieul-kieuk */
		[0x11d911c2,0xd7dc], /* jongseong lieul-yeorinhieuh + hieuh = lieul-yeorinhieuh-hieuh */
		[0x11dc11ba,0xd7e1], /* jongseong mieum-bieub + sieus = mieum-bieub-sieus */
		[0x11dd11ba,0x11de], /* jongseong mieum-sieus + sieus = mieum-ssangsieus */
		[0x11e311c1,0xd7e4], /* jongseong bieub-lieul + pieup = bieub-lieul-pieup */
		[0x11ea11bc,0xd7eb], /* jongseong sieus-bieub + ieung = sieus-gabyeounbieub */
		[0x11eb11b8,0xd7f3], /* jongseong bansieus + bieub = bansieus-bieub */
		[0x11eb11e6,0xd7f4], /* jongseong bansieus + gabyeounbieub = bansieus-gabyeounbieub */
		[0x11ec11a8,0x11ed], /* jongseong ieung-gieug + gieug = ieung-ssanggieug */
		[0x11f011a8,0x11ec], /* jongseong yesieung + gieug = yesieung-gieug */
		[0x11f011a9,0x11ed], /* jongseong yesieung + ssanggieug = yesieung-ssanggieug */
		[0x11f011b7,0xd7f5], /* jongseong yesieung + mieum = yesieung-mieum */
		[0x11f011ba,0x11f1], /* jongseong yesieung + sieus = yesieung-sieus */
		[0x11f011bf,0x11ef], /* jongseong yesieung + kieuk = yesieung-kieuk */
		[0x11f011c2,0xd7f6], /* jongseong yesieung + hieuh = yesieung-hieuh */
		[0x11f011eb,0x11f2], /* jongseong yesieung + bansieus = yesieung-bansieus */
		[0x11f011f0,0x11ee], /* jongseong yesieung + yesieung = ssangyesieung */
		[0xa9641100,0xa965], /* choseong lieul-gieug + gieug = lieul-ssanggieug */
		[0xa9661103,0xa967], /* choseong lieul-dieud + dieud = lieul-ssangdieud */
		[0xa9691107,0xa96a], /* choseong lieul-bieub + bieub = lieul-ssangbieub */
		[0xa969110b,0xa96b], /* choseong lieul-bieub + ieung = lieul-gabyeounbieub */
		[0xd7c51161,0x11a2], /* jungseong araea-a + a = ssangaraea */
		[0xd7cd11b8,0xd7ce], /* jongseong ssangdieud + bieub = ssangdieud-bieub */
		[0xd7d011a8,0xd7d1], /* jongseong dieud-sieus + gieug = dieud-sieus-gieug */
		[0xd7de11ab,0xd7df], /* jongseong mieum-nieun + nieun = mieum-ssangnieun */
		[0xd7f311bc,0xd7f4], /* jongseong bansieus-bieub + ieung = bansieus-gabyeounbieub */
		[0xd7f711b8,0xd7f8]  /* jongseong jieuj-bieub + bieub = jieuj-ssangbieub */
	];

	K3_Oesol_Typewriter_combination_table = [
		[0x11001100,0x1101], /* choseong gieug + gieug = ssanggieug */
		[0x11031103,0x1104], /* choseong dieud + dieud = ssangdieud */
		[0x11071107,0x1108], /* choseong bieup + bieup = ssangbieup */
		[0x11091109,0x110a], /* choseong sieus + sieus = ssangsieus */
		[0x110c110c,0x110d], /* choseong jieuj + jieuj = ssangjieuj */
		[0x11691161,0x116a], /* jungseong o  + a  = wa */
		[0x11691162,0x116b], /* jungseong o  + ae = wae */
		[0x11691175,0x116c], /* jungseong o  + i  = oe */
		[0x116e1165,0x116f], /* jungseong u  + eo = weo */
		[0x116e1166,0x1170], /* jungseong u  + e  = we */
		[0x116e1175,0x1171], /* jungseong u  + i  = wi */
		[0x11731175,0x1174]  /* jungseong eu + i  = eui */
	];

	K3_3_91_noshift_combination_table = [
		[0x11001100,0x1101], /* choseong  gieug + gieug = ssanggieug */
		[0x1100110b,0x1101], /* choseong  gieug + ieung = ssanggieug */
		[0x1100110c,0x110d], /* choseong  gieug + jieuj = ssangjieuj */
		[0x11031103,0x1104], /* choseong  dieud + dieud = ssangdieud */
		[0x11031106,0x1104], /* choseong  dieud + mieum = ssangdieud */
		[0x11061103,0x1104], /* choseong  mieum + dieud = ssangdieud */
		[0x11071107,0x1108], /* choseong  bieup + bieup = ssangbieup */
		[0x1107110c,0x1108], /* choseong  bieup + jieuj = ssangbieup */
		[0x11091109,0x110a], /* choseong  sieus + sieus	= ssangsieus */
		[0x11091112,0x110a], /* choseong  sieus + hieuh = ssangsieus */
		[0x110b1100,0x1101], /* choseong  ieung + gieug = ssanggieug */
		[0x110c1100,0x110d], /* choseong  jieuj + gieug = ssangjieuj */
		[0x110c1107,0x1108], /* choseong  jieuj + bieup = ssangbieup */
		[0x110c110c,0x110d], /* choseong  jieuj + jieuj = ssangjieuj */
		[0x11121109,0x110a], /* choseong  hieuh + sieus = ssangsieus */
		[0x1161116c,0x116a], /* jungseong a ㅏ  + oe ㅚ = wa ㅘ */
		[0x1162116c,0x116b], /* jungseong ae ㅐ	+ oe ㅚ = wae ᅟㅙ */
		[0x11651171,0x116f], /* jungseong eo ㅓ + wi ㅟ = weo ㅝ */
		[0x1166116c,0x1170], /* jungseong e ㅔ  + oe ㅚ = we ㅞ	 */
		[0x11661171,0x1170], /* jungseong e ㅔ  + wi ㅟ = we ㅞ	 */
		[0x116c1161,0x116a], /* jungseong oe ㅚ + a ㅏ  = wa ㅘ */
		[0x116c1162,0x116b], /* jungseong oe ㅚ + ae ㅐ = wae ㅙ */
		[0x116c1165,0x116f], /* jungseong oe ㅚ + eo ㅓ = weo ㅝ */
		[0x116c1166,0x1170], /* jungseong oe ㅚ + e ㅔ = we ㅞ */
		[0x116c1167,0x1168], /* jungseong oe ㅚ + yeo ㅕ =  ye  ㅖ */
		[0x116c1169,0x1174], /* jungseong oe ㅚ + o ㅗ = eui ㅢ */
		[0x116c116e,0x1171], /* jungseong oe ㅚ + u ㅜ = wi ㅟ */
		[0x116c1173,0x1164], /* jungseong oe ㅚ + eu ㅡ = yae ㅒ */
		[0x116c1175,0x116c], /* jungseong oe ㅚ + i ㅣ = oe ㅚ */
		[0x11711165,0x116f], /* jungseong wi ㅟ + eo ㅓ = weo ㅝ */
		[0x11711166,0x1170], /* jungseong wi ㅟ + e ㅔ = we ㅞ */
		[0x11711175,0x1171], /* jungseong wi ㅟ + i ㅣ = wi ㅟ */
		[0x1173116c,0x1164], /* jungseong eu ㅡ + oe ㅚ = yae ㅒ */
		//[0x11731175,0x1174], /* jungseong eu ㅡ	+ i ㅣ = eui ㅢ */
		[0x11751171,0x1171], /* jungseong i ㅣ + wi ㅟ = wi ㅟ	 */
		[0x1175116c,0x116c], /* jungseong i ㅣ + oe ㅚ = oe ㅚ	 */
		//[0x11751173,0x1174], /* jungseong i ㅣ + eu ㅡ = eui ㅢ */
		/* jongseong *//* autogen */
		[0x11a811aa,0x11b9], // autogen
		[0x11a811ac,0x11b9], // autogen
		[0x11a811b1,0x11b9], // autogen
		[0x11a811b2,0x11b9], // autogen
		[0x11a811b3,0x11b9], // autogen
		[0x11a811b4,0x11b9], // autogen
		[0x11a811b5,0x11b9], // autogen
		[0x11a811b6,0x11b9], // autogen
		[0x11a811b9,0x11b9], // autogen
		[0x11a811bf,0x11b9], // autogen
		[0x11a811ff,0x11b9], // autogen
		[0x11aa11a8,0x11b9], // autogen
		[0x11aa11ab,0x11ad], // autogen
		[0x11aa11af,0x11c0], // autogen
		[0x11aa11b7,0x11be], // autogen
		[0x11aa11b8,0x11bd], // autogen
		[0x11aa11ba,0x11c1], // autogen
		[0x11aa11bb,0x11b0], // autogen
		[0x11aa11bc,0x11ae], // autogen
		[0x11aa11c2,0x11a9], // autogen
		[0x11ab11aa,0x11ad], // autogen
		[0x11ab11ac,0x11ad], // autogen
		[0x11ab11b1,0x11ad], // autogen
		[0x11ab11b2,0x11ad], // autogen
		[0x11ab11b3,0x11ad], // autogen
		[0x11ab11b4,0x11ad], // autogen
		[0x11ab11b5,0x11ad], // autogen
		[0x11ab11b6,0x11ad], // autogen
		[0x11ab11b9,0x11ad], // autogen
		[0x11ab11bf,0x11ad], // autogen
		[0x11ab11ff,0x11ad], // autogen
		[0x11ac11a8,0x11b9], // autogen
		[0x11ac11ab,0x11ad], // autogen
		[0x11ac11af,0x11c0], // autogen
		[0x11ac11b7,0x11be], // autogen
		[0x11ac11b8,0x11bd], // autogen
		[0x11ac11ba,0x11c1], // autogen
		[0x11ac11bb,0x11b0], // autogen
		[0x11ac11bc,0x11ae], // autogen
		[0x11ac11c2,0x11a9], // autogen
		[0x11af11aa,0x11c0], // autogen
		[0x11af11ac,0x11c0], // autogen
		[0x11af11b1,0x11c0], // autogen
		[0x11af11b2,0x11c0], // autogen
		[0x11af11b3,0x11c0], // autogen
		[0x11af11b4,0x11c0], // autogen
		[0x11af11b5,0x11c0], // autogen
		[0x11af11b6,0x11c0], // autogen
		[0x11af11b9,0x11c0], // autogen
		[0x11af11bf,0x11c0], // autogen
		[0x11af11ff,0x11c0], // autogen
		[0x11b111a8,0x11b9], // autogen
		[0x11b111ab,0x11ad], // autogen
		[0x11b111af,0x11c0], // autogen
		[0x11b111b7,0x11be], // autogen
		[0x11b111b8,0x11bd], // autogen
		[0x11b111ba,0x11c1], // autogen
		[0x11b111bb,0x11b0], // autogen
		[0x11b111bc,0x11ae], // autogen
		[0x11b111c2,0x11a9], // autogen
		[0x11b211a8,0x11b9], // autogen
		[0x11b211ab,0x11ad], // autogen
		[0x11b211af,0x11c0], // autogen
		[0x11b211b7,0x11be], // autogen
		[0x11b211b8,0x11bd], // autogen
		[0x11b211ba,0x11c1], // autogen
		[0x11b211bb,0x11b0], // autogen
		[0x11b211bc,0x11ae], // autogen
		[0x11b211c2,0x11a9], // autogen
		[0x11b311a8,0x11b9], // autogen
		[0x11b311ab,0x11ad], // autogen
		[0x11b311af,0x11c0], // autogen
		[0x11b311b7,0x11be], // autogen
		[0x11b311b8,0x11bd], // autogen
		[0x11b311ba,0x11c1], // autogen
		[0x11b311bb,0x11b0], // autogen
		[0x11b311bc,0x11ae], // autogen
		[0x11b311c2,0x11a9], // autogen
		[0x11b411a8,0x11b9], // autogen
		[0x11b411ab,0x11ad], // autogen
		[0x11b411af,0x11c0], // autogen
		[0x11b411b7,0x11be], // autogen
		[0x11b411b8,0x11bd], // autogen
		[0x11b411ba,0x11c1], // autogen
		[0x11b411bb,0x11b0], // autogen
		[0x11b411bc,0x11ae], // autogen
		[0x11b411c2,0x11a9], // autogen
		[0x11b511a8,0x11b9], // autogen
		[0x11b511ab,0x11ad], // autogen
		[0x11b511af,0x11c0], // autogen
		[0x11b511b7,0x11be], // autogen
		[0x11b511b8,0x11bd], // autogen
		[0x11b511ba,0x11c1], // autogen
		[0x11b511bb,0x11b0], // autogen
		[0x11b511bc,0x11ae], // autogen
		[0x11b511c2,0x11a9], // autogen
		[0x11b611a8,0x11b9], // autogen
		[0x11b611ab,0x11ad], // autogen
		[0x11b611af,0x11c0], // autogen
		[0x11b611b7,0x11be], // autogen
		[0x11b611b8,0x11bd], // autogen
		[0x11b611ba,0x11c1], // autogen
		[0x11b611bb,0x11b0], // autogen
		[0x11b611bc,0x11ae], // autogen
		[0x11b611c2,0x11a9], // autogen
		[0x11b711aa,0x11be], // autogen
		[0x11b711ac,0x11be], // autogen
		[0x11b711b1,0x11be], // autogen
		[0x11b711b2,0x11be], // autogen
		[0x11b711b3,0x11be], // autogen
		[0x11b711b4,0x11be], // autogen
		[0x11b711b5,0x11be], // autogen
		[0x11b711b6,0x11be], // autogen
		[0x11b711b9,0x11be], // autogen
		[0x11b711bf,0x11be], // autogen
		[0x11b711ff,0x11be], // autogen
		[0x11b811aa,0x11bd], // autogen
		[0x11b811ac,0x11bd], // autogen
		[0x11b811b1,0x11bd], // autogen
		[0x11b811b2,0x11bd], // autogen
		[0x11b811b3,0x11bd], // autogen
		[0x11b811b4,0x11bd], // autogen
		[0x11b811b5,0x11bd], // autogen
		[0x11b811b6,0x11bd], // autogen
		[0x11b811b9,0x11bd], // autogen
		[0x11b811bf,0x11bd], // autogen
		[0x11b811ff,0x11bd], // autogen
		[0x11b911a8,0x11b9], // autogen
		[0x11b911ab,0x11ad], // autogen
		[0x11b911af,0x11c0], // autogen
		[0x11b911b7,0x11be], // autogen
		[0x11b911b8,0x11bd], // autogen
		[0x11b911ba,0x11c1], // autogen
		[0x11b911bb,0x11b0], // autogen
		[0x11b911bc,0x11ae], // autogen
		[0x11b911c2,0x11a9], // autogen
		[0x11ba11aa,0x11c1], // autogen
		[0x11ba11ac,0x11c1], // autogen
		[0x11ba11b1,0x11c1], // autogen
		[0x11ba11b2,0x11c1], // autogen
		[0x11ba11b3,0x11c1], // autogen
		[0x11ba11b4,0x11c1], // autogen
		[0x11ba11b5,0x11c1], // autogen
		[0x11ba11b6,0x11c1], // autogen
		[0x11ba11b9,0x11c1], // autogen
		[0x11ba11bf,0x11c1], // autogen
		[0x11ba11ff,0x11c1], // autogen
		[0x11bb11aa,0x11b0], // autogen
		[0x11bb11ac,0x11b0], // autogen
		[0x11bb11b1,0x11b0], // autogen
		[0x11bb11b2,0x11b0], // autogen
		[0x11bb11b3,0x11b0], // autogen
		[0x11bb11b4,0x11b0], // autogen
		[0x11bb11b5,0x11b0], // autogen
		[0x11bb11b6,0x11b0], // autogen
		[0x11bb11b9,0x11b0], // autogen
		[0x11bb11bf,0x11b0], // autogen
		[0x11bb11ff,0x11b0], // autogen
		[0x11bc11aa,0x11ae], // autogen
		[0x11bc11ac,0x11ae], // autogen
		[0x11bc11b1,0x11ae], // autogen
		[0x11bc11b2,0x11ae], // autogen
		[0x11bc11b3,0x11ae], // autogen
		[0x11bc11b4,0x11ae], // autogen
		[0x11bc11b5,0x11ae], // autogen
		[0x11bc11b6,0x11ae], // autogen
		[0x11bc11b9,0x11ae], // autogen
		[0x11bc11bf,0x11ae], // autogen
		[0x11bc11ff,0x11ae], // autogen
		[0x11bf11a8,0x11b9], // autogen
		[0x11bf11ab,0x11ad], // autogen
		[0x11bf11af,0x11c0], // autogen
		[0x11bf11b7,0x11be], // autogen
		[0x11bf11b8,0x11bd], // autogen
		[0x11bf11ba,0x11c1], // autogen
		[0x11bf11bb,0x11b0], // autogen
		[0x11bf11bc,0x11ae], // autogen
		[0x11bf11c2,0x11a9], // autogen
		[0x11c211aa,0x11a9], // autogen
		[0x11c211ac,0x11a9], // autogen
		[0x11c211b1,0x11a9], // autogen
		[0x11c211b2,0x11a9], // autogen
		[0x11c211b3,0x11a9], // autogen
		[0x11c211b4,0x11a9], // autogen
		[0x11c211b5,0x11a9], // autogen
		[0x11c211b6,0x11a9], // autogen
		[0x11c211b9,0x11a9], // autogen
		[0x11c211bf,0x11a9], // autogen
		[0x11c211ff,0x11a9], // autogen
		/* quick shift jongseong part */
		[0x11ff1161,0x11b1], /* jongseong lieul-mieum */
		[0x11ff1162,0x11b6], /* jongseong lieul-hieuh */
		[0x11ff1163,0x11b3], /* jongseong lieul-siot additional */
		[0x11ff1165,0x11b9], /* jongseong bieup-sieus */
		[0x11ff1166,0x11bf], /* jongseong khieukh */		
		[0x11ff1167,0x11ac], /* jongseong nieun-jieuj */
		[0x11ff1169,0x11aa], /* jongseong gieug-sieus */
		[0x11ff116d,0x11b5], /* jongseong lieul-phieuph */
		[0x11ff1172,0x11b4], /* jongseong lieul-thieuth */
		[0x11ff1175,0x11b2], /* jongseong lieul-bieup */   
		/* autogen */
		[0x11ff11a8,0x11b9], // autogen
		[0x11ff11ab,0x11ad], // autogen
		[0x11ff11af,0x11c0], // autogen
		[0x11ff11b7,0x11be], // autogen
		[0x11ff11b8,0x11bd], // autogen
		[0x11ff11ba,0x11c1], // autogen
		[0x11ff11bb,0x11b0], // autogen
		[0x11ff11bc,0x11ae], // autogen
		[0x11ff11c2,0x11a9] // autogen
];

	Gimguk38Ay_combination_table = hangeul_combination_table_full.concat([
		[0x110C113C,0x114E], /* jieuj + ap-sieus = ap-jieuj */
		[0x110C113E,0x1150], /* jieuj + dwit-sieus = dwit-jieuj */
		[0x110D113C,0x114F], /* ssang-jieuj + ap-sieus = ssang-ap-jieuj */
		[0x110D113E,0x1151], /* ssang-jieuj + dwit-sieus = ssang-dwit-jieuj */
		[0x110E113C,0x1154], /* chieuch + ap-sieus = ap-chieuch */
		[0x110E113E,0x1155], /* chieuch + dwit-sieus = dwit-chieuch */		
		[0x11991175,0xD7BE], /* i-ya + i = i-yae */
		[0xD7BF1175,0xD7C0], /* i-yeo + i = i-ye */
		[0xD7BA1175,0xD7BB], /* eu-eo + i = eu-e */
		[0x117F1175,0x1180], /* o-eo + i = o-e */
		[0x11A61175,0x11A7], /* o-ya + i = o-yae */
		[0xD7B21175,0xD7B3], /* yo-a + i = yo-ae */
		[0x11841175,0x1185], /* yo-ya + i = yo-yae */
		[0x11891175,0x118A], /* u-a + i = u-ae */
		[0xD7B51175,0x118C], /* u-yeo + i = u-ye */
		[0x118F1175,0x1190], /* yu-eo + i = yu-e */
		[0x118E1175,0xD7B7], /* yu-a + i = yu-ae */
		[0x119F1175,0xD7C6], /* araea-eo + i = aeara-e */
	]);

	additional_compound_sound_combination_table = [	// 된소리 추가 조합, 겹받침 거꿀차례 조합
		[0x1100110b,0x1101], /* choseong gieug + ieung = ssanggieug */
		[0x110b1100,0x1101], /* choseong ieung + gieug = ssanggieug */
		[0x11031106,0x1104], /* choseong dieud + mieum = ssangdieud */
		[0x11061103,0x1104], /* choseong mieum + dieud = ssangdieud */
		[0x1107110c,0x1108], /* choseong bieub + jieuj = ssangbieub */
		[0x110c1107,0x1108], /* choseong jieuj + bieub = ssangbieub */
		[0x11091112,0x110a], /* choseong sieus + hieuh = ssangsieus */
		[0x11121109,0x110a], /* choseong hieuh + sieus = ssangsieus */
		[0x110c1100,0x110d], /* choseong jieuj + gieug = ssangjieuj */
		[0x1100110c,0x110d], /* choseong gieug + jieuj = ssangjieuj */
		[0x11a811b7,0x11a9], /* jongseong gieug + mieum = ssanggieug */
		[0x11b711a8,0x11a9], /* jongseong gieug + mieum = ssanggieug */
		[0x11ba11a8,0x11aa], /* jongseong sieus + gieug = gieug-sieus */
		[0x11bd11ab,0x11ac], /* jongseong jieuj + nieun = jieun-cieuj */
		[0x11c211ab,0x11ad], /* jongseong hieuh + nieun = nieun-hieuh */
		[0x11a811af,0x11b0], /* jongseong gieug + lieul = lieul-gieug */
		[0x11b711af,0x11b1], /* jongseong mieum + lieul = lieul-mieum */
		[0x11b811af,0x11b2], /* jongseong bieub + lieul = lieul-bieub */
		[0x11ba11af,0x11b3], /* jongseong sieus + lieul = lieul-sieus */
		[0x11c011af,0x11b4], /* jongseong tieut + lieul = lieul-tieut */
		[0x11c111af,0x11b5], /* jongseong pieup + lieul = lieul-pieup */
		[0x11c211af,0x11b6], /* jongseong hieuh + lieul = lieul-hieuh */
		[0x11ba11b8,0x11b9]  /* jongseong sieus + bieub = bieub-sieus */
	];

	K3_2015_combination_table = hangeul_combination_table_default.concat(additional_compound_sound_combination_table);

	K3_2015y_combination_table = hangeul_combination_table_full.slice();
	K3_2015y_combination_table.unshift(
		[0x11bc11a8,0x11ec], /* jongseong ieung + gieug = yesieung-gieug */
		[0x11bc11a9,0x11ed], /* jongseong ieung + ssanggieug = yesieung-ssanggieug */
		[0x11bc11b7,0xd7f5], /* jongseong ieung + mieum = yesieung-mieum */
		[0x11bc11ba,0x11f1], /* jongseong ieung + sieus = yesieung-sieus */
		[0x11bc11bc,0x11ee], /* jongseong ieung + ieung = ssangyesieung */
		[0x11bc11bf,0x11ef], /* jongseong ieung + kieuk = yesieung-kieuk */
		[0x11bc11c2,0xd7f6], /* jongseong ieung + hieuh = yesieung-hieuh */
		[0x11bc11eb,0x11f2], /* jongseong ieung + yeolinsieus = yesieung-yeolinsieus */
		[0x11bc11f0,0x11ee], /* jongseong ieung + yesieung = ssangyesieung */
		[0x11f011bc,0x11ee]  /* jongseong yesieung + ieung = ssangyesieung */
	);
	
	K3_Sin3_extension_combination_table = hangeul_combination_table_full.slice(0);
	K3_Sin3_extension_combination_table.unshift(
		[0x11001109,0x1140], /* choseong gieug + siues = ssanggieug */
		[0x1100110B,0x114C], /* choseong gieug + ieung = yesieung */
		[0x11001112,0x1159], /* choseong gieug + hiueh = yeolinhieuh */
		[0x11591112,0xA97C], /* choseong yeolinhieuh + hiueh = ssangyeolinhieuh */
		[0x11411109,0x1146], /* choseong ieung-gieug + sieus = ieung-yeolinsieus */
		[0x110C1109,0x113C], /* choseong jieuj + siues = ab-sieus */
		[0x113C1109,0x113D], /* choseong ab-sieus + sieus = ssang-ab-sieus */
		[0x110E1109,0x113E], /* choseong chieuch + siues = dwis-sieus */
		[0x113E1109,0x113F], /* choseong dwis-sieus + sieus = ssang-dwis-sieus */
		[0x110C1103,0x114E], /* choseong jieuj + dieug = ab-jieuj */
		[0x110D1103,0x114F], /* choseong ssangjieuj + dieud = ssang-ab-jieuj */
		[0x110C1100,0x1150], /* choseong jieuj + gieug = dwis-jieuj */
		[0x110D1100,0x1151], /* choseong ssangjieuj + gieug = ssang-dwis-jieuj */
		[0x110E1103,0x1154], /* choseong chieuch + dieug = ab-chieuch */
		[0x110E1100,0x1155], /* choseong chieuch + gieug = dwis-chieuch */
		[0x11BA11BB,0x11EB], /* jongseong sieus + ssangsieus = yeolinsieus */
		[0x110A11BB,0xD7EE], /* jongseong ssangsieus + ssangsieus = sieus-yeolinsieus */
		[0x11C711BB,0x11C8], /* jongseong nieun-sieus + ssangsieus = nieun-yeolinsieus */
		[0x11B311BB,0x11D7], /* jongseong lieul-sieus + ssangsieus = lieul-yeolinsieus */
		[0x11DD11BB,0x11DF], /* jongseong mieum-sieus + ssangsieus = mieum-yeolinsieus */
		[0x11BB11BB,0xD7EE], /* jongseong ssangsiues + ssangsieus = sieus-yeolinsieus */
		[0x11F111BB,0x11F2], /* jongseong yesieung-sieus + ssangsieus = yesieung-yeolinsieus */
		[0x11BC11BB,0x11F0], /* jongseong ieung + ssangsieus = yesieung */
		[0x11F011BB,0x11EE], /* jongseong yesieung + ssangsieus = ssangyesieung */
		[0xD7DD11BB,0xD7DB], /* jongseong yeolinlieul + ssangsieus = lieul-yesieung */
		[0x11C211BB,0x11F9], /* jongseong hieuh + ssangsieus = yeolinhieuh */
		[0x11B611BB,0x11D9], /* jongseong lieul-hieuh + ssangsieus = lieul-yeolinhieuh */
		
		[0x11BC11A8,0x11EC], /* jongseong ieung + gieug = yesieung-gieug */
		[0x11BC11A9,0x11EC], /* jongseong ieung + ssanggieug = yesieung-ssanggieug */
		[0x11BC11B7,0xD7F5], /* jongseong ieung + mieum = yesieung-mieum */
		[0x11BC11BA,0x11F1], /* jongseong ieung + sieus = yesieung-sieus */
		[0x11BC11BC,0x11EE], /* jongseong ieung + ieung = ssangyesieung */
		[0x11BC11BF,0x11EF], /* jongseong ieung + ieung = ssangyesieung */
		[0x11BC11C2,0xD7F6]  /* jongseong ieung + ieung = ssangyesieung */
	)

	K3_Sin3b_2015_combination_table = hangeul_combination_table_default.concat(additional_compound_sound_combination_table);

	K3_2015M_combination_table = hangeul_combination_table_default.slice();
	K3_2015M_combination_table.unshift(additional_compound_sound_combination_table);
	K3_2015M_combination_table.unshift(
		[0x11651165,0x1164], /* jungseong eo + eo = yae */
		[0x11621165,0x1164]  /* jungseong ae + eo = yae */
	);

	K3_Anmatae_combination_table = [
		[0x11001103,0x1104], /* choseong gieug + dieud = ssangdieud */
		[0x1100110b,0x1101], /* choseong gieug + ieung = ssanggieug */
		[0x11001112,0x110f], /* choseong gieug + hieuh = kieuk */
		[0x11021109,0x110a], /* choseong nieun + sieus = ssangsieus */
		[0x11031100,0x1104], /* choseong dieud + gieug = ssangdieud */
		[0x1103110c,0x110d], /* choseong dieud + jieuj = ssangjieuj */
		[0x11031112,0x1110], /* choseong dieud + hieuh = tieut */
		[0x1107110c,0x1108], /* choseong bieub + jieuj = ssangbieub */
		[0x11071112,0x1111], /* choseong bieub + hieuh = pieup */
		[0x11091102,0x110a], /* choseong sieus + nieun = ssangsieus */
		[0x110b1100,0x1101], /* choseong ieung + gieug = ssanggieug */
		[0x110c1103,0x110d], /* choseong jieuj + dieud = ssangjieuj */
		[0x110c1107,0x1108], /* choseong jieuj + pieup = ssangpieup */
		[0x110c1112,0x110e], /* choseong jieuj + hieuh = chieuch */
		[0x11121100,0x110f], /* choseong hieuh + gieug = kieuk */
		[0x11121103,0x1110], /* choseong hieuh + dieud = tieut */
		[0x11121107,0x1111], /* choseong hieuh + bieub = pieup */
		[0x1112110c,0x110e], /* choseong hieuh + jieuj = chieuch */
		[0x11611169,0x116a], /* jungseong a   + o   = wa */
		[0x11611175,0x1162], /* jungseong a   + i   = ae */
		[0x11621169,0x116b], /* jungseong ae  + o   = wae */
		[0x11631175,0x1164], /* jungseong ya  + i   = yae  */
		[0x1165116e,0x116f], /* jungseong eo  + u   = weo */
		[0x11651175,0x1166], /* jungseong eo  + i   = e */
		[0x1166116e,0x1170], /* jungseong e   + u   = we */
		[0x11671175,0x1168], /* jungseong yeo + i   = ye */
		[0x11691161,0x116a], /* jungseong o   + a   = wa */
		[0x11691175,0x116c], /* jungseong o   + i   = oe */
		[0x116a1175,0x116b], /* jungseong wa  + i   = wae */
		[0x116c1161,0x116b], /* jungseong oe  + a   = wae */
		[0x116e1165,0x116f], /* jungseong u   + eo  = weo */
		[0x116e1175,0x1171], /* jungseong u   + i   = wi */
		[0x116f1175,0x1170], /* jungseong weo + i   = we */
		[0x11711165,0x1170], /* jungseong wi  + eo  = we */
		[0x11731175,0x1174], /* jungseong eu  + i   = eui */
		[0x11751161,0x1162], /* jungseong i   + a   = ae */
		[0x11751163,0x1164], /* jungseong i   + ya  = yae */
		[0x11751165,0x1166], /* jungseong i   + eo  = e */
		[0x11751167,0x1168], /* jungseong i   + yeo = ye */
		[0x11751169,0x116c], /* jungseong i   + o   = oe */
		[0x1175116e,0x1171], /* jungseong i   + u   = wi */
		[0x11751173,0x1174], /* jungseong i   + eu  = eui */
		[0x11a811af,0x11b0], /* jongseong gieug + lieul = lieul-gieug */
		[0x11a811ba,0x11aa], /* jongseong gieug + sieus = gieug-sieus */
		[0x11a811bc,0x11a9], /* jongseong gieug + ieung = ssanggieug */
		[0x11a811c2,0x11bf], /* jongseong gieug + hieuh = kieuk */
		[0x11ab11ba,0x11bb], /* jongseong nieun + sieus = ssangsieus */
		[0x11ab11bd,0x11ac], /* jongseong nieun + jieuj = nieun-jieuj */
		[0x11ab11c2,0x11ad], /* jongseong nieun + hieuh = nieun-hieuh */
		[0x11ae11af,0x11ce], /* jongseong dieud + lieul = lieul-dieud */
		[0x11ae11c2,0x11c0], /* jongseong dieud + hieuh = tieut */
		[0x11af11a8,0x11b0], /* jongseong lieul + gieug = lieul-gieug */
		[0x11af11ae,0x11ce], /* jongseong lieul + dieud = lieul-dieud */
		[0x11af11b7,0x11b1], /* jongseong lieul + mieum = lieul-mieum */
		[0x11af11b8,0x11b2], /* jongseong lieul + bieub = lieul-bieub */
		[0x11af11ba,0x11b3], /* jongseong lieul + sieus = lieul-sieus */
		[0x11af11c2,0x11b6], /* jongseong lieul + hieuh = lieul-hieuh */
		[0x11b211c2,0x11b5], /* jongseong lieul-bieub + hieuh = lieul-pieup */
		[0x11b611ae,0x11b4], /* jongseong lieul-hieuh + dieud = lieul-tieut */
		[0x11b611b8,0x11b5], /* jongseong lieul-hieuh + bieub = lieul-pieup */
		[0x11b711af,0x11b1], /* jongseong mieum + lieul = lieul-mieum */
		[0x11b811af,0x11b2], /* jongseong bieub + lieul = lieul-bieub */
		[0x11b811ba,0x11b9], /* jongseong bieub + sieus = bieub-sieus */
		[0x11b811c2,0x11c1], /* jongseong bieub + hieuh = pieup */
		[0x11ba11a8,0x11aa], /* jongseong sieus + gieug = gieug-sieus */
		[0x11ba11ab,0x11bb], /* jongseong sieus + nieun = ssangsieus */
		[0x11ba11af,0x11b3], /* jongseong sieus + lieul = lieul-sieus */
		[0x11ba11b8,0x11b9], /* jongseong sieus + bieub = bieub-sieus */
		[0x11bc11a8,0x11a9], /* jongseong ieung + gieug = ssanggieug */
		[0x11bd11ab,0x11ac], /* jongseong jieuj + nieun = nieun-jieuj */
		[0x11bd11c2,0x11be], /* jongseong jieuj + hieuh = chieuch */
		[0x11c011af,0x11b4], /* jongseong tieut + lieul = lieul-tieut */
		[0x11c111af,0x11b5], /* jongseong pieup + lieul = lieul-pieup */
		[0x11c211a8,0x11bf], /* jongseong hieuh + gieug = kieuk */
		[0x11c211ab,0x11ad], /* jongseong hieuh + nieun = nieun-hieuh */
		[0x11c211ae,0x11c0], /* jongseong hieuh + dieud = tieut */
		[0x11c211af,0x11b6], /* jongseong hieuh + lieul = lieul-hieuh */
		[0x11c211b8,0x11c1], /* jongseong hieuh + bieub = pieup */
		[0x11c211bd,0x11be], /* jongseong hieuh + jieuj = chieuch */
		[0x11ce11c2,0x11b4], /* jongseong lieul-dieud + hieuh = lieul-tieut */
	];

	K3_Moachigi_2014_combination_table = [
		[0x1100110b,0x1101], /* choseong gieug + ieung = ssanggieug */
		[0x11001112,0x110f], /* choseong gieug + hieuh = kieuk */
		[0x1103110b,0x1104], /* choseong dieud + ieung = ssangdieud */
		[0x11031112,0x1110], /* choseong dieud + hieuh = tikeut */
		[0x1106110b,0x1104], /* choseong mieum + ieung = ssangdieud */
		[0x1107110b,0x1108], /* choseong bieub + ieung = ssangbieub */
		[0x11071112,0x1111], /* choseong bieub + hieuh = pieup */
		[0x1109110b,0x110a], /* choseong sieus + ieung = ssangsieus */
		[0x11091112,0x110e], /* choseong sieus + hieuh = chieuch */
		[0x110b1100,0x1101], /* choseong ieung + gieug = ssanggieug */
		[0x110b1103,0x1104], /* choseong ieung + dieud = ssangdieud */
		[0x110b1106,0x1104], /* choseong ieung + mieum = ssangdieud */
		[0x110b1107,0x1108], /* choseong ieung + bieub = ssangbieub */
		[0x110b1109,0x110a], /* choseong ieung + sieus = ssangsieus */
		[0x110b110c,0x110d], /* choseong ieung + jieuj = ssangjieuj */
		[0x110c110b,0x110d], /* choseong jieuj + ieung = ssangjieuj */
		[0x110c1112,0x110e], /* choseong jieuj + hieuh = chieuch */
		[0x11121100,0x110f], /* choseong hieuh + gieug = kieuk */
		[0x11121103,0x1110], /* choseong hieuh + dieud = tikeut */
		[0x11121107,0x1111], /* choseong hieuh + bieub = pieup */
		[0x11121109,0x110e], /* choseong hieuh + sieus = chieuch */
		[0x1112110c,0x110e], /* choseong hieuh + jieuj = chieuch */
		[0x11611165,0x116d], /* jungseong a  + eo  = yo */
		[0x11611166,0x1163], /* jungseong a  + e   = ya */
		[0x11611169,0x116a], /* jungseong a  + o   = wa */
		[0x1161116c,0x116b], /* jungseong a  + oe  = wae */
		[0x1161116e,0x1172], /* jungseong a  + u   = yu */
		[0x11611175,0x1162], /* jungseong a  + i   = ae */
		[0x11621169,0x116b], /* jungseong ae + o   = wae */
		[0x11631175,0x1164], /* jungseong ya + i   = yae */
		[0x11651161,0x116d], /* jungseong eo + a   = yo */
		[0x11651167,0x1164], /* jungseong eo + yeo = yae */
		[0x1165116e,0x116f], /* jungseong eo + u   = weo */
		[0x11651171,0x1170], /* jungseong eo + wi  = we */
		[0x11651175,0x1166], /* jungseong eo + i   = e */
		[0x11661161,0x1163], /* jungseong e  + a   = ya */
		[0x1166116e,0x1170], /* jungseong e  + u   = we */
		[0x11661175,0x1168], /* jungseong e  + i   = ye */
		[0x11671165,0x1164], /* jungseong yeo + eo = yae */
		[0x11691161,0x116a], /* jungseong o  + a   = wa */
		[0x11691162,0x116b], /* jungseong o  + ae  = wae */
		[0x1169116e,0x116d], /* jungseong o  + u   = yo */
		[0x11691175,0x116c], /* jungseong o  + i   = oe */
		[0x116a1175,0x116b], /* jungseong wa + i   = wae */
		[0x116c1161,0x116b], /* jungseong oe + a   = wae */
		[0x116e1161,0x1172], /* jungseong u  + a   = yu */
		[0x116e1165,0x116f], /* jungseong u  + eo  = weo */
		[0x116e1166,0x1170], /* jungseong u  + e   = we */
		[0x116e1169,0x116d], /* jungseong u  + o   = yo */
		[0x116e1175,0x1171], /* jungseong u  + i   = wi */
		[0x116f1175,0x1170], /* jungseong weo + i  = we */
		[0x11711165,0x1170], /* jungseong wi + eo  = we */
		[0x11731175,0x1174], /* jungseong eu + i   = eui */
		[0x11751161,0x1162], /* jungseong i  + a   = ae */
		[0x11751163,0x1164], /* jungseong i  + ya  = yae */
		[0x11751165,0x1166], /* jungseong i  + eo  = e */
		[0x11751166,0x1168], /* jungseong i  + e   = ye */
		[0x11751169,0x116c], /* jungseong i  + o   = oe */
		[0x1175116a,0x116b], /* jungseong i  + wa  = wae */
		[0x1175116e,0x1171], /* jungseong i  + u   = wi */
		[0x1175116f,0x1170], /* jungseong i  + weo = we */
		[0x11751173,0x1174], /* jungseong i  + eu  = eui */
		[0x1175119e,0x11a1], /* jungseong i  + araea = araeae */  
		[0x119e1175,0x11a1], /* jungseong araea + i     = araeae */  
		[0x11a811af,0x11b0], /* jongseong gieug + lieul = lieul-gieug */
		[0x11a811b7,0x11b0], /* jongseong gieug + mieum = lieul-gieug */
		[0x11a811ba,0x11aa], /* jongseong gieug + sieus = gieug-sieus */
		[0x11a811bb,0x11bf], /* jongseong gieug + ssangsieus = kieuk */
		[0x11a811bc,0x11a9], /* jongseong gieug + ieung = ssangegieug */
		[0x11a811c2,0x11bf], /* jongseong gieug + hieuh = kieuk */
		[0x11ab11af,0x11ac], /* jongseong nieun + lieul = nieun-jieuj */
		[0x11ab11b7,0x11c0], /* jongseong nieun + mieum = tikeut */
		[0x11ab11bb,0x11ad], /* jongseong nieun + ssangsieus = nieun-hieuh */
		[0x11ab11bc,0x11c1], /* jongseong nieun + ieung = pieup */
		[0x11ab11c2,0x11ad], /* jongseong nieun + hieuh = nieun-hieuh */
		[0x11ae11af,0x11b4], /* jongseong dieud + lieul = lieul-tieut */
		[0x11ae11b8,0x11b5], /* jongseong dieud + bieub = lieul-pieup */
		[0x11ae11bb,0x11c0], /* jongseong dieud + ssangsieus = tikeut */
		[0x11ae11c2,0x11c0], /* jongseong dieud + hieuh = tieut */
		[0x11af11a8,0x11b0], /* jongseong lieul + gieug = lieul-gieug */
		[0x11af11ab,0x11ac], /* jongseong lieul + nieun = nieun-jieuj */
		[0x11af11ae,0x11b4], /* jongseong lieul + dieud = lieul-tieut */
		[0x11af11b7,0x11b1], /* jongseong lieul + mieum = lieul-mieum */
		[0x11af11b8,0x11b5], /* jongseong lieul + bieub = lieul-pieup */
		[0x11af11ba,0x11b9], /* jongseong lieul + sieus = bieub-sieus */
		[0x11af11bb,0x11bd], /* jongseong lieul + ssangsieus = jieuj */
		[0x11af11bc,0x11b2], /* jongseong lieul + ieung = lieul-bieub */
		[0x11af11c2,0x11b6], /* jongseong lieul + hieuh = lieul-hieuh */
		[0x11b711a8,0x11b0], /* jongseong mieum + gieug = lieul-gieug */
		[0x11b711ab,0x11c0], /* jongseong mieum + nieun = tieut */
		[0x11b711af,0x11b1], /* jongseong mieum + lieul = lieul-mieum */
		[0x11b711bb,0x11ae], /* jongseong mieum + ssangsieus = dieud */
		[0x11b711c2,0x11b4], /* jongseong mieum + hieuh = lieul-tieut */
		[0x11b811ae,0x11b5], /* jongseong bieub + dieud = lieul-pieup */
		[0x11b811af,0x11b5], /* jongseong bieub + lieul = lieul-pieup */
		[0x11b811ba,0x11b9], /* jongseong bieub + sieus = bieub-sieus */
		[0x11b811bb,0x11c1], /* jongseong bieub + ssangsieus = pieup */
		[0x11b811c2,0x11c1], /* jongseong bieub + hieuh = pieup */
		[0x11b911bb,0x11b3], /* jongseong bieub-sieus + ssangsieus = lieul-sieus */
		[0x11ba11a8,0x11aa], /* jongseong sieus + gieug = gieug-sieus */
		[0x11ba11af,0x11b9], /* jongseong sieus + lieul = bieub-sieus */
		[0x11ba11b8,0x11b9], /* jongseong sieus + pieup = bieub-sieus */
		[0x11ba11bb,0x11be], /* jongseong sieus + ssangsieus = chieuch */
		[0x11ba11bc,0x11bb], /* jongseong sieus + ieung = ssangsieus */
		[0x11ba11c2,0x11b3], /* jongseong sieus + hieuh = lieul-sieus */
		[0x11bb11a8,0x11bf], /* jongseong ssangsieus + gieug = kieuk */
		[0x11bb11ab,0x11ad], /* jongseong ssangsieus + nieun = nieun-hieuh */
		[0x11bb11ae,0x11c0], /* jongseong ssangsieus + dieud = tieut */
		[0x11bb11af,0x11bd], /* jongseong ssangsieus + lieul = jieuj */
		[0x11bb11b7,0x11ae], /* jongseong ssangsieus + mieum = dieud */
		[0x11bb11b8,0x11c1], /* jongseong ssangsieus + bieub = pieup */
		[0x11bb11b9,0x11b3], /* jongseong ssangsieus + bieub-sieus = lieul-sieus */
		[0x11bb11ba,0x11be], /* jongseong ssangsieus + sieus = chieuch */
		[0x11bb11bc,0x11b8], /* jongseong ssangsieus + ieung = bieub */
		[0x11bb11c2,0x11b6], /* jongseong ssangsieus + hieuh = lieul-hieuh */
		[0x11bc11a8,0x11a9], /* jongseong ieung + gieug = ssangegieug */
		[0x11bc11ab,0x11c1], /* jongseong ieung + nieun = pieup */
		[0x11bc11af,0x11b2], /* jongseong ieung + lieul = lieul-bieub */
		[0x11bc11ba,0x11bb], /* jongseong ieung + sieus = ssangsieus */
		[0x11bc11bb,0x11b8], /* jongseong ieung + ssangsieus = bieub */
		[0x11bc11c2,0x11b5], /* jongseong ieung + hieuh = lieul-pieup */
		[0x11c211a8,0x11bf], /* jongseong hieuh + gieug = kieuk */
		[0x11c211ab,0x11ad], /* jongseong hieuh + nieun = nieun-hieuh */
		[0x11c211ae,0x11c0], /* jongseong hieuh + dieud = tieut */
		[0x11c211af,0x11b6], /* jongseong hieuh + lieul = lieul-hieuh */
		[0x11c211b7,0x11b4], /* jongseong hieuh + mieum = lieul-tieut */
		[0x11c211b8,0x11c1], /* jongseong hieuh + bieub = pieup */
		[0x11c211ba,0x11b3], /* jongseong hieuh + sieus = lieul-sieus */
		[0x11c211bb,0x11b6], /* jongseong hieuh + ssangsieus = lieul-hieuh */
		[0x11c211bc,0x11b5], /* jongseong hieuh + ieung = lieul-pieup */
	];

	K3_Moachigi_2015_multikey_combination_table = [
		{keys: ['u','w'], chars: [0x11b8,0x1102,0x1175,0x1103,0x1161]}, /* ㅂ니다 */
		{keys: ['j','w'], chars: [0x110b,0x1175,0x11b8,0x1102,0x1175,0x1103,0x1161]}, /* 입니다 */
		{keys: ['n','w'], chars: [0x1112,0x1161,0x11b8,0x1102,0x1175,0x1103,0x1161]}, /* 합니다 */
		{keys: ['n','l','s'], chars: [0x1112,0x1161,0x110c,0x1175,0x1106,0x1161,0x11ab]} /* 하지만 */
	];

	K3_Moachigi_2015_combination_table = [
		{phonemes: [0x1169,0x1161,0x1175], char: 0x116a}, /* jungseong o + a + i = wae */
		{phonemes: [0x116e,0x1165,0x1175], char: 0x1170}, /* jungseong u + eo + i = we */
		{phonemes: [0x110b,0x1100], char: 0x1101}, /* choseong ieung + gieug = ssanggieug */
		{phonemes: [0x110b,0x1103], char: 0x1104}, /* choseong ieung + dieud = ssangdieud */
		{phonemes: [0x110b,0x1107], char: 0x1108}, /* choseong ieung + bieub = ssangbieub */
		{phonemes: [0x110b,0x1109], char: 0x110a}, /* choseong ieung + sieus = ssangsieus */
		{phonemes: [0x110b,0x110c], char: 0x110d}, /* choseong ieung + jieuj = ssangjieuj */
		{phonemes: [0x1112,0x1100], char: 0x110f}, /* choseong hieuh + gieug = kieuk */
		{phonemes: [0x1112,0x1103], char: 0x1110}, /* choseong hieuh + dieud = tieut */
		{phonemes: [0x1112,0x1107], char: 0x1111}, /* choseong hieuh + bieub = pieup */
		{phonemes: [0x1112,0x110c], char: 0x110e}, /* choseong hieuh + jieuj = chieuch */
		{phonemes: [0x1161,0x1175], char: 0x1162}, /* jungseong a   + i   = ae */
		{phonemes: [0x1161,0x1165], char: 0x116d}, /* jungseong a   + eo  = yo */
		{phonemes: [0x1165,0x1161], char: 0x116d}, /* jungseong eo  + a   = yo */
		{phonemes: [0x1165,0x1167], char: 0x1164}, /* jungseong eo  + yeo = yae */
		{phonemes: [0x1169,0x1175], char: 0x116c}, /* jungseong o   + i   = oe */
		{phonemes: [0x1169,0x1161], char: 0x116a}, /* jungseong o   + a   = wa */
		{phonemes: [0x1169,0x1166], char: 0x1168}, /* jungseong o   + e   = ye */
		{phonemes: [0x1169,0x1165], char: 0x1163}, /* jungseong o   + eo  = ya */
		{phonemes: [0x1169,0x1169], char: 0x116d}, /* jungseong o   + o   = yo */
		{phonemes: [0x1169,0x116e], char: 0x1172}, /* jungseong o   + u   = yu */	
		{phonemes: [0x116a,0x1175], char: 0x116b}, /* jungseong wa  + i   = wae */
		{phonemes: [0x1169,0x1167], char: 0x1164}, /* jungseong o   + yeo = yae */
		{phonemes: [0x116f,0x1175], char: 0x1170}, /* jungseong weo + i   = we */
		{phonemes: [0x116e,0x1165], char: 0x116f}, /* jungseong u   + eo  = weo */
		{phonemes: [0x116e,0x1166], char: 0x1170}, /* jungseong u   + e   = we */
		{phonemes: [0x116e,0x1175], char: 0x1171}, /* jungseong u   + i   = wi */
		{phonemes: [0x1173,0x1175], char: 0x1174}, /* jungseong eu  + i   = eui */
		{phonemes: [0x119e,0x119e], char: 0x11a2}, /* jungseong araea + araea = ssangaraea */
		{phonemes: [0x11a8,0x11ba], char: 0x11aa}, /* jongseong gieug + sieus = gieug-sieus */
		{phonemes: [0x11ab,0x11ab], char: 0x11ad}, /* jongseong nieun + nieun = nieun-hieuh */
		{phonemes: [0x11ab,0x11af], char: 0x11ac}, /* jongseong nieun + lieul = nieun-jieuj */
		{phonemes: [0x11ab,0x11b7], char: 0x11c0}, /* jongseong nieun + mieum = tieut */
		{phonemes: [0x11ab,0x11c2], char: 0x11ad}, /* jongseong nieun + hieuh = nieun-hieuh */
		{phonemes: [0x11af,0x11a8], char: 0x11b0}, /* jongseong lieul + gieug = lieul-gieug */
		{phonemes: [0x11af,0x11b7], char: 0x11b1}, /* jongseong lieul + mieum = lieul-mieum */
		{phonemes: [0x11af,0x11b8], char: 0x11b2}, /* jongseong lieul + bieub = lieul-bieub */
		{phonemes: [0x11af,0x11ba], char: 0x11b3}, /* jongseong lieul + sieus = lieul-sieus */
		{phonemes: [0x11b7,0x11a8], char: 0x11b0}, /* jongseong mieum + gieug = lieul-gieug */
		{phonemes: [0x11b8,0x11ba], char: 0x11b9}, /* jongseong bieub + sieus = bieub-sieus */
		{phonemes: [0x11bb,0x11a8], char: 0x11bf}, /* jongseong ssangsieus + gieug = kieuk */
		{phonemes: [0x11bb,0x11ab], char: 0x11c2}, /* jongseong ssangsieus + nieun = hieuh */
		{phonemes: [0x11bb,0x11af], char: 0x11bd}, /* jongseong ssangsieus + lieul = jieuj */
		{phonemes: [0x11bb,0x11b7], char: 0x11ae}, /* jongseong ssangsieus + mieum = dieud */
		{phonemes: [0x11bb,0x11b8], char: 0x11c1}, /* jongseong ssangsieus + bieub = pieup */
		{phonemes: [0x11bb,0x11ba], char: 0x11be}, /* jongseong ssangsieus + sieus = chieuch */
		{phonemes: [0x11bb,0x11bc], char: 0x11b6}, /* jongseong ssangsieus + ieung = lieul-hieuh */
		{phonemes: [0x11bc,0x11a8], char: 0x11a9}, /* jongseong ieung + gieug = ssangegieug */
		{phonemes: [0x11bc,0x11ab], char: 0x11ad}, /* jongseong ieung + nieun = nieun-hieuh */
		{phonemes: [0x11bc,0x11b7], char: 0x11b4}, /* jongseong ieung + mieum = lieul-tikeut */
		{phonemes: [0x11bc,0x11b8], char: 0x11b5}, /* jongseong ieung + bieub = lieul-pieup */
		{phonemes: [0x11bc,0x11ba], char: 0x11bb}, /* jongseong ieung + sieus = ssangsieus */
		{phonemes: [0x11bc,0x11bb], char: 0x11b6}, /* jongseong ieung + ssangsieus = lieul-hieuh */
		{phonemes: [0x11c2,0x11a8], char: 0x11bf}, /* jongseong hieuh + gieug = kieuk */
		{phonemes: [0x11c2,0x11ae], char: 0x11c0}, /* jongseong hieuh + dieud = tieut */
		{phonemes: [0x11c2,0x11b8], char: 0x11c1}  /* jongseong hieuh + bieub = pieup */
	];

} // input_hangeul_combination_table_info()