---
title: fl
---

## .fl - FL Character File Format

Freelancer stores character files in standard ini file format. They may be encryped or in plain text. Freelancer will read both formats.

## .fl - Encryption Algorithm

The first four bytes of an encrypted file are FLS1. The encryption algorithm is show here:

```
private static byte[] gene = { (byte)'G', (byte)'e', (byte)'n', (byte)'e' }; byte[] decrypt(byte[] buf) {

 if (buf.Length >= 4 && buf[0] == 'F' && buf[1] == 'L' && buf[2] == 'S' && buf[3] == '1')
 {
   byte[] dbuf = new byte[buf.Length - 4];
   for (int i = 4; i < buf.Length; i++)
   {
     int k = (gene[i % 4] + (i - 4)) % 256;
     dbuf[i - 4] = (byte)(buf[i] ^ (k | 0x80));
   }
   return dbuf;
 }
 return buf;
}
```

## [Player]

```ini
[Player] 
tstamp = INTEGER, INTEGER 
house = FLOAT, NICKNAME 
visit = HASHCODE, INTEGER
```

| Parameter | Information                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| visit     | The first parameter is the hashcode of the object. The second parameter is a bit field: <br /><br />**0x01** bit 0 - show object on nav map with no description<br />**0x02** bit 1 - show object on nav map and show internal description<br />**0x04** bit 2<br />**0x08** bit 3<br />**0x10** bit 0 - if wreck then this object has been looted<br />**0x02** bit 1 - show object on nav map and show external description<br />**0x04** bit 2 - show trade information if base<br />**0x08** bit 3 - never show object on nav map |

## [mPlayer]

```ini
[mPlayer] 
locked_gate = HASHCODE 
ship_type_killed = HASHCODE 
sys_visited = HASHCODE 
base_visited = HASHCODE 
holes_visited = HASHCODE 
vnpc = HASHCODE, HASHCODE 
total_cash_earned = INTEGER 
total_time_played = FLOAT 
rumor = INTEGER
```

| Parameter         | Information                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| locked_gate       | Hashcode of the jumpgate. Docking with this gate is prohibited.                                                                  |
| ship_type_killed  | Hashcode of a ship. Used to display the number of ships visited on the in game player statistics screen.                         |
| sys_visited       | Hashcode of a system. Used to display the number of systems visited on the in game player statistics screen..                    |
| base_visited      | Hashcode of a base. Used to display the number of bases visited on the in game player statistics screen.                         |
| holes_visited     | Hashcode of a jumphole. Used to display the number of jumpholes visited on the in game player statistics screen.                 |
| vnpc              | Hashcode of NPC character, Hashcode of Base/Room. Used to indicate if a player has talked to a particular NPC character at base. |
| total_cash_earned | Not used. Always zero.                                                                                                           |
| total_time_played | The time in seconds that this character has been online.                                                                         |
| rumor             | The IDS number from the rumor entry in mBases.ini. An entry in this line indicates that this player has viewed the rumor         |
