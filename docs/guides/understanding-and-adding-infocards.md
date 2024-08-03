---
title: Understanding and adding infocards
---

This is a brief guide on how to use FL-IE and update infocards in Freelancer. This guide is a mirror of the [excellent guide written by Jammi over on the Discovery forums.](https://discoverygc.com/forums/showthread.php?tid=204141&pid=2340058)

1. Using Freelancer Infocard Importer/Exporter.
2. Understanding infocards and XML.
3. Implementing base and object infocards.
4. Rumours and Bar NPCs.
5. Custom Rep Bribes.
6. Custom Knowledge Bribes.

## 1. Using Freelancer Infocard Importer/Exporter.

First of all, you're going to need a copy of [Freelancer Infocard Importer/Exporter](https://drive.google.com/file/d/12q_SEbIeC5IYoB4ENbHqcZlyqNCH7ZUK/view?usp=sharing). This can be used as both a viewer to search for particular keywords across game infocards, and also as a tool for implementing or editing infocards.

:::caution

DO NOT MAKE CHANGES TO THE COPY OF THE GAME YOU CONNECT TO A LIVE SERVER WITH. The file changes will be flagged by the anticheat and you'll cop a ban. Use a duplicate test build for any experimenting you want to do.

:::

First close any copies of Freelancer you have running, then open FL-IE. Every time you open FL-IE, you must load the infocards you want to use. To do this, copy and paste the file path to Freelancer's root directory into the "Freelancer path" box. Once this is done, click "Load".

After this, FL-IE should provide a list of all the DLLs it has successfully loaded (or not), and how many infocards it has loaded. If any errors are reported and a DLL hasn't been loaded, this is likely because you have a copy of the game running, which is basically "locking" those files.

FL-IE will remember the last file path you used, so you won't need to manually re-enter the Freelancer directory each time you use it.

The next step will depend on whether you are a Discovery developer, or simply working on your own project.

**Discovery Devs:** Look in the SERVICE folder of your copy of the development branch mod, there will be a file inside called infocards.txt - this is the input and output file FL-IE uses.

**Everyone else:** Hit the "Export" button after you've loaded your infocards. Select an appropriate location and then name the output whatever you want - infocards.txt works fine though. This will take all of the encrypted infocards from the game DLLs and output them as plaintext you can read (and edit!).
Once you have your exported .txt file, you can make any necessary changes to it (see next section) and get ready to implement it into the game.

To do this, hit the "Import" button, and then select the .txt file you've been working on. FL-IE will present a before-and-after of all the infocards you have added or updated, and provide a confirmation of the number of unchanged, changed and entirely new infocards imported.

If this looks right, hit "Save". FL-IE will again provide a log of all of the DLLs it is updating, with a confirmation of "Done" when it is finished. Again, if there are any errors during this process, it is usually because an instance of the game is running. Congratulations, your revised text is now saved to the game! We'll cover how you make this text appear where you want it later on.

Finally, a basic but extremely useful feature can be found by clicking the Browse tab. This is the infocard viewer, allowing you to search all of the game's infocards using keywords. When you select an infocard, the top window on the right displays the raw text / XML, while the bottom window on the right displays the formatted end result.

## 2. Understanding infocards and XML.

An infocard is basically a section of text that is linked to a unique serial number, called an IDS reference. This number is then use by the game to decide what text is presented where.

There are two categories of infocard:

- **NAME:** This type is used for object or NPC names, news articles and certain other kinds of text such as missions, rep bribes and infobribes. NAME cards do not use XML, and therefore cannot be formatted, other than adding line breaks.

- **INFOCARD:** This type is used for rumours and base, ship or equipment descriptions. INFOCARDs must be properly formatted in valid XML. XML is a bit like HTML or BBcode (ish), in the way that it applies formatting to text through an opening and closing set of tags.
Disco Devs: Team members who need to regularly add infocards are assigned ranges of empty IDS numbers. This ensures we're not accidentally adding infocards using the same IDS ref, as these numbers must be unique. If you haven't been assigned a range yet, raise it in the Infocard or Story channels.

FL-IE reads infocards in a very simple way. Here is an example of both a NAME and INFOCARD for reference:

```
33939
NAME
Hellburner-1
```
```
33940
INFOCARD
<?xml version="1.0" encoding="UTF-16"?><RDL><PUSH/><TEXT>The Hellburners are a Molly support squadron from Mull. Due to the nature of their projects, they are forced to work in exclusion zones outside Molly installations. They have recently been assigned to Arranmore Base to assist with preparing defenses against an anticipated Bretonian invasion.</TEXT><PARA/><POP/></RDL>
```

Every infocard starts with its unique IDS reference number, then either NAME or INFOCARD, and finally the text itself. Infocard text must all be written on a single line - line breaks in-game are added through text formatting. Including an actual line break in this .txt file will ruin the output when you try to display the infocard in-game.

Any line in either infocards.txt or one of Freelancer's .ini files that is prefixed by a semicolon won't be read by FL-IE or the game itself. This can be used to add comments to make things more readable for humans.

**Formatting NAME text:**
NAME text is very simple, being displayed as plaintext. This means you cannot format them with colours, italics, bold, etc. The only formatting that NAME cards can use is linebreaks, which are added by including \n in the text.

**Formatting INFOCARD text:**
All infocards must be written in valid XML. Some important tips to remember:

- Borrow XML from other infocards that you know work. If you are creating rumours, using the formatting of an existing rumour is both safe and saves time.
- Check your XML is valid and displays correctly. This can be done through tools such as the [XML Validator](https://discoverygc.com/infocard_XML/xml_preview.html), or importing your infocards using FL-IE and = - looking at them in the browser.
- Don't forget to verify that your infocards work as intended in-game. The validator is extremely useful but not perfect.

There are some basic XML sections that you will be frequently using. These include:

- Start (mandatory): `<?xml version="1.0" encoding="UTF-16"?><RDL><PUSH/><TEXT>`
- Line break (single): `</TEXT><PARA/><TEXT>`
- Line break (double): `</TEXT><PARA/><PARA/><TEXT>`
- End (mandatory): `</TEXT><PARA/><POP/></RDL>`
- `%` symbol: `%%`
- `&` symbol: `&amp;`
- `>` symbol: `&gt;`
- `<` symbol: `&lt;`
  
Bolding, colours and italics are an enormous pain to apply, so I won't be covering them in this basic guide. If you do want to make use of them, I would recommend finding an existing example and examining the XML they use.

## 3. Implementing Base and Object Infocards.

Now we're going to look at how to assign text to an object in the actual game world. Where you have imported an edited infocards.txt using FL-IE, this means those infocards are now saved to the game's DLLs and associated with a unique IDS reference.

This guide will be focusing on how to update the infocard of an existing base or object, rather than how to create new entities from scratch. This is also going to focus on how to use the game's .ini files, rather than system modding tools like Freelancer Mod Studio, although that may be covered in a later tutorial on system modding.

Each system in the game has its own .ini file containing all of the bases, objects, zones, NPC encounters, etc inside that system. First, I would suggest opening up [DarkStat](https://darklab8.github.io/fl-data-discovery/dark.html). This is an incredibly powerful reference tool for all sorts of data in the game, however what we're mainly interested in right now are internal nicknames.

Every system and entity within a system has a unique internal nickname. Looking on DarkStat's Bases tab, find a station you are interested in. You will notice that on the right, there is a column for base nickname, and system nickname. For now, lets look at Waterloo Station in New London. This is br01_04_base, with New London itself being br01.

Next, in your experimental Freelancer build's main directory, navigate to: `DATA\UNIVERSE\SYSTEMS`

In the SYSTEMS folder, every system in the game has its own subfolder. Open the Br01 folder, then Br01.ini - this is New London's system file. Once it's open, hit CTRL+F and enter br01_04_base. This will give you the following entry:

```ini
[Object]
nickname = Br01_04
ids_name = 196661
pos = -18311.5, 0, 57186
rotate = -180, 85.7, 180
archetype = largestation1
ids_info = 65727
base = Br01_04_Base
dock_with = Br01_04_Base
reputation = co_ic_grp
behavior = NOTHING
voice = atc_leg_f01
space_costume = br_karina_head_gen, br_karina_body
difficulty_level = 7
loadout = space_station_co_01
pilot = pilot_solar_easiest
```

The parts that are currently of interest to us are `IDS_name` and `IDS_info`.

As you might expect, `IDS_Name` is the object's name. Use CTRL+F in your infocards.txt and look up 196661 - you will see that this says "Waterloo Station". Overwriting the infocards.txt entry for this IDS reference, importing it into FL-IE and then saving will change the name of the station in-game.

If you want to replace the `IDS_name` of a dockable base with a new number for some reason (or you are creating a new base), you must also edit another file.

Open: `DATA\UNIVERSE\universe.ini`

This file keeps track of which system dockable bases are located in, and makes their names appear properly in your contacts window. Having bases in the wrong system causes crashes, but for now all we're interested in is making sure the name is correct. Look up Waterloo's internal nickname again, and you will find the following entry:

```ini
[Base]
nickname = br01_04_base
system = br01
strid_name = 196661
file = universe\systems\br01\bases\br01_04_base.ini
BGCS_base_run_by = W02bF23
```

All we need to do here is make sure the `strid_name` matches the `IDS_name` assigned in the system file. If you're changing the number, make sure to change it in both places.

Next, the `IDS_info` value works slightly differently depending on whether the object is a dockable base or not. For dockable stations, the `IDS_info` data is the text that you can see using F9 before you dock with the base. Waterloo is a typical example, providing fluff information about the station class, amenities, crew, etc.

```xml
<?xml version="1.0" encoding="UTF-16"?><RDL><PUSH/><TEXT>CLASS: Zeus</TEXT><PARA/><TEXT>GRAVITY: Complete</TEXT><PARA/><TEXT>DOCKING: Yes</TEXT><PARA/><TEXT>AMENITIES: Yes</TEXT><PARA/><TEXT>CREW: 1090</TEXT><PARA/><POP/></RDL>
```
```
CLASS: Zeus
GRAVITY: Complete
DOCKING: Yes
AMENITIES: Yes
CREW: 1090
```

The rest of the infocard is hidden until you dock. Interestingly, you'll notice that there is no third infocard parameter in Waterloo's Object entry in the system file. So how does the game know where to find the rest of the base description?

For this, we need to look in another file: `DATA\INTERFACE\InfocardMap.ini`

InfocardMap creates linked pairs of infocards for dockable stations. If you use CTRL+F and search for 65727 (Waterloo's IDS_info value), you will find this:

`Map = 65727, 65728`

This is telling the game that when you dock on the object associated with IDS 65727, it must append IDS 65728 to the end of the station's description. If you are editing an existing station's infocard, you don't need to worry too much about this. If you are adding a brand-new station or changing a station's `IDS_info` number, you will need to add an InfocardMap entry too.

Objects that aren't dockable stations are much more straightforward - the full infocard is simply included under a single reference in `IDS_info`. Note that some kinds of Objects are not able to display infocards.

This depends on the Object's Archetype (Waterloo's is `largestation1`), which is defined in `DATA\SOLAR\SolarArch.ini` - this is really a system modding issue, so it will be covered in more detail in a later tutorial.

An extreme simplification is that only Archetypes with the Type of either `MISSION_SATELLITE` or `STATION` can have both `IDS_name` and `IDS_info` cards freely assigned. Other types either cannot display infocards at all, or make use of specific hardcoded infocards for their name, infocard or both.

## 4. Rumours and Bar NPCs.

Next we're going to look at how to set up NPCs in a station bar, and assign rumours to them. This primarily focuses on a file called mBases.ini, which is found in: `DATA\MISSIONS\mBases.ini`.

Every dockable base has an entry in mBases. Each entry begins with an `[mBase]` block, with everything underneath relating to that base until another `[mBase]` block is encountered. Today we're going to be looking at Planet Holstein as an example. This is what the initial sections of Holstein's entry looks like:

```ini
[MBase]
; Planet Holstein
nickname = Rh04_01_Base
local_faction = co_khc_grp
diff = 10
msg_id_prefix = gcs_refer_base_Rh04_01_Base-

[MVendor]
num_offers = 2, 4

[BaseFaction]
faction = co_khc_grp
weight = 62
offers_missions = true
mission_type = DestroyMission, 2.0, 12.0, 300
npc = rh0401_daumann_001_m
npc = rh0401_daumann_002_m
npc = rh0401_daumann_003_m
npc = rh0401_daumann_004_m

[BaseFaction]
faction = fc_core
weight = 20
offers_missions = true
mission_type = DestroyMission, 2.0, 12.0, 100
npc = rh0401_core_001_m

[BaseFaction]
faction = rh_p_grp
weight = 1

[BaseFaction]
faction = rh_m_grp
weight = 1

[BaseFaction]
faction = co_alg_grp
weight = 1

[BaseFaction]
faction = co_rs_grp
weight = 1

[BaseFaction]
faction = co_shi_grp
weight = 1

[BaseFaction]
faction = co_kt_grp
weight = 1

[BaseFaction]
faction = co_ni_grp
weight = 1

[BaseFaction]
faction = ga_efl_grp
weight = 1
```

We'll focus on `[BaseFaction]` for now. These sections have several functions - for example, before an NPC faction is allowed to dock on a station, it must have an associated `[BaseFaction]` block defined.

This is significant, as an NPC spawning or ending a patrol / trade path with no valid destination in range will cause a crash. Most importantly for our purposes however, [BaseFaction] also lists all of the non-vendor NPCs that are allowed to appear inside the station's rooms.

We'll now look at what each of the parameters in a `[BaseFaction]` block does.

| Line                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `[BaseFaction]`<br/>`faction = co_khc_grp`      | This identifies an NPC faction by using its internal nickname. You can again find this using DarkStat by looking up the Factions tab. In this case, the faction is Daumann.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `weight = 62`                                   | Weight affects both the proportion of non-vendor (shopkeeper) NPCs that appear as this faction, and if they are allowed to offer missions on the job board, the proportion that will be theirs. The weight can be arbitrary value, however it is strongly recommended that you ensure all of the NPC weights on your base add up to 100, as this allows you to quickly review your weights as a simple % chance.                                                                                                                                                                                                                                                               |
| `offers_missions = true`                        | Whether an NPC faction is allowed to offer jobs directly through the bar jobs board. Even if this is false, you can still set individual NPCs to offer jobs by talking to them (covered later).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `mission_type = DestroyMission, 2.0, 12.0, 300` | This sets the difficulty range for bar missions offered by that faction. The first parameter must be "DestroyMission", while the second and third parameters are the min and max difficulty. This doesn't directly correspond to the mission level in-game, and there's an [extremely obtuse formula](https://the-starport.com/forums/topic/6123/the-magic-behind-random-missions-and-difficulty/5) that goes into calculating how these values create a spread of mission levels. I'd suggest using the a range set out at the top of mBases and leaving it at that. The final parameter is another weight value, however it does not appear to be actively used by the game. |
| `npc = rh0401_daumann_001_m`                    | Finally, this parameter references the unique nickname of a base NPC that we will be defining further down in this file. A non-vendor NPC must be listed here for it to appear in a base.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

Next we're going to have a look at an NPC block. This is where the appearance and characteristics of our NPCs are defined, as well as the room that they will be hanging out in. It's worth noting that you can create as many NPCs as you want for bars or other rooms, however the room itself will have a maximum occupancy based on the number of hardpoints that have been assigned to the scene for NPCs to sit or stand on.

```ini
[GF_NPC]
nickname = rh0401_core_001_m
body = li_commtrader_body
head = br_sales_head
lefthand = benchmark_male_hand_left
righthand = benchmark_male_hand_right
individual_name = 33643
affiliation = fc_core
bribe = fc_core, 840, 33644
voice = rvp111
room = bar
misn = DestroyMission, 2.0, 12.0
rumor = base_0_rank, mission_end, 3, 33640
rumor = base_0_rank, mission_end, 3, 33641
rumor = base_0_rank, mission_end, 3, 33642
accessory = prop_shades_05
accessory = prop_pda
```

This is Arlo Griswold, a corporate liaison for The Core's Holestein office. He's the sort to wear a poorly tailored suit and sunglasses indoors - real swell guy. Lets have a look at the parameters that go into building an NPC:

| Line                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[GF_NPC]`<br/>`nickname = rh0401_core_001_m`                                                                                                | This is the NPC's unique internal nickname that must be defined in the relevant group's [BaseFaction] block we looked at above.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `body = li_commtrader_body`<br/>`head = br_sales_head`<br/>`lefthand = benchmark_male_hand_left`<br/>`righthand = benchmark_male_hand_right` | The bodyparts NPCs use. These are divided into male and female, with each using different skeletons/animations - don't mix and match or you'll get weird visual glitches.<br/><br/>Most NPC groups have their own specific uniform that you can use, so borrowing the body of an existing NPC with the same affiliation is usually a good idea. A full list of heads / bodies can be found in DATA\\CHARACTERS\\bodyparts.ini.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `individual_name = 33643`                                                                                                                    | This is the NPC's NAME infocard that will be displayed to players as a tooltip on mousing over them. This can display whatever arbitrary text you want. For example, Arlo's name looks like this:<br/><br/>33643<br/>NAME<br/>The Core\\nRheinland Liason\\nArlo Griswold                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `affiliation = fc_core`                                                                                                                      | This is the NPC faction the NPC is associated with. The NPC should be defined under this group's [BaseFaction] block. The player's rep with this faction will also decide how the NPC interacts with them, for example whether they'll offer missions, bribes or rumours.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `voice = rvp111`                                                                                                                             | Does what it says on the tin. The voice the NPC speaks with - I'd recommend stealing borrowing a voice entry that's already used on another NPC, but for variety's sake, try not to give an entire bar the same voice.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `room = bar`                                                                                                                                 | Sets the room the NPC will loiter in. You will usually want to use the bar, however some equipment and commodity dealers do have hardpoints defined to allow NPCs to loiter around in the background too.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `misn = DestroyMission, 2.0, 12.0`                                                                                                           | Much the same as the mission parameter in [BaseFaction]. This parameter allows NPCs to offer missions directly with their own independent difficulty settings (the two numbers are again min/max difficulty), rather than going through the mission board. This could be used to allow a specific NPC to offer missions that are significantly harder or easier than the default settings for the faction on that station.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `rumor = base_0_rank, mission_end, 3, 33640`                                                                                                 | Here is how rumors are actually assigned. The first two values must always display "base_0_rank, mission_end" to present rumours properly in multiplayer. The next value affects the rep threshold that you need with the NPC's parent faction before they'll tell you the rumour. 1 is 0.2, 2 is 0.4, 3 is 0.6 and 4 is 0.0.<br/><br/>The final number is the IDS reference for the infocard the rumour should display. In this case, the rumour reads as follows:<br/><br/>33640<br/>INFOCARD<br/>`<?xml version="1.0" encoding="UTF-16"?><RDL><PUSH/><TEXT>Opening a corporate office on Holstein seemed like good business sense. Some of our best clients include Rheinland corporate and state actors. In reality however, this post has completely failed to live up to expectations - first the Saigon War and Civil War disrupted travel in the area, then the Omicron Rho project collapsed. The locals seem to be amused by this, and tell us Frankfurt is cursed. I’m beginning to believe them.</TEXT><PARA/><POP/></RDL>` |
| `accessory = prop_shades_05`                                                                                                                 | Accessories are rarely used by vanilla NPCs, but you can actually glue props to your NPCs for a bit of customisation. I've previously provided a catalogue of options [here](https://discoverygc.com/forums/showthread.php?tid=177533). Props are designed to be mounted on a specific hardpoint, so you don't need to specify a hardpoint when assigning a prop. If it has an appropriate hardpoint, it'll automatically appear in the correct place. If there isn't an appropriate hardpoint, it won't appear at all.<br/><br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

The above gives you a significant amount of flexibility in how NPCs are portrayed. For example, you can use individual_names for factions that don't mechanically exist in the game ("Holstein Citizen"), or even more subtle effects like espionage.

An example of this would be setting an NPC's affiliation to The Order, placing them on a Military / Navy base they are nominally hostile to*, and then providing an `individual_name` and body type that outwardly displays them as a member of the faction they're hiding inside.

Assigned rumours could then be set to a rep value of '3', meaning you'd need to be friendly to The Order before that particular NPC would give you any of their rumours containing secret intel about their spying activities.

:::caution

Don't do this if the hostile faction can spawn NPCs near the station. By defining the faction in a `[BaseFaction]` block, they'll try to dock on the hostile station and cause a crash.

:::

When you assign rumours to an NPC, remember that a player can only view these once per NPC, per character. That means if someone is repeatedly visiting a base, eventually the NPCs will run out of rumours to serve. Assigning missions to some of the NPC can be a way of giving them some permanent utility regardless.

Next, we'll look at the blocks that set out the rooms on the base.

```ini
[MRoom]
nickname = bar
character_density = 5
fixture = rh0401_fix_bartender, Zs/NPC/Bartender/01/A/Stand, scripts\vendors\li_host_fidget.thn, bartender

[MRoom]
nickname = Planetscape
character_density = 3
fixture = rh0401_fix_ship, Zs/NPC/Shipdealer/01/A/Stand, scripts\vendors\li_shipdealer_fidget.thn, ShipDealer
fixture = rh0401_fix_trader, Zs/NPC/Trader/01/A/Stand, scripts\vendors\li_commtrader_fidget.thn, trader
fixture = rh0401_fix_weaponsdealer, Zs/NPC/Equipment/01/A/Stand, scripts\vendors\li_equipdealer_fidget.thn, Equipment
```

Character density sets the maximum number of NPCs that are allowed to appear in the room at once. This can be set to any arbitrarily high value you want, however as noted above, each room only has a finite number of hardpoints for NPCs to sit and stand on. You can set the density to 200, but if there's only 5 places to stand, you're still only getting 5 NPCs in the room.

The fixture parameter is used to specify which NPCs are vendors that will be permanently stationed in a predefined spot. These are your bartenders, and commodity, equipment and ship dealers. You don't need to define these NPCs in the `[BaseFaction]` block - you're doing it here instead.

## 5. Custom Rep Bribes.

Finally, we'll be looking at how to set up reputation bribes and knowledge bribes for base NPCs. This is also done through the `[GF_NPC]` blocks in a station's mBases entry, so see above to familiarize yourself with that file.

Rep bribes are used to set your character reputation friendly to a certain faction, although this will damage your reputation with that faction's enemies. Knowledge bribes add information to your navmap by changing what's known as a visit flag for particular object(s).

The vanilla game has a small number of standardised infocards it uses for these bribes, which you're probably familiar with. These aren't actually hardcoded, and you can set up your own completely bespoke text for these offers. Lets look at Holstein's bartender:

```ini
[GF_NPC]
nickname = rh0401_fix_bartender
body = rh_shipdealer_body
head = rh_wilham_head
lefthand = benchmark_male_hand_left
righthand = benchmark_male_hand_right
individual_name = 244975
affiliation = co_khc_grp
voice = rvp146
bribe = rh_p_grp, 840, 504724
bribe = co_khc_grp, 840, 504725
bribe = co_rs_grp, 840, 504724
bribe = co_shi_grp, 840, 504724
know = 33404, 33405, 500, 3
```

This NPC offers a number of different rep bribes and a single knowledge bribe. You can include as many rep or knowledge bribes as you want on a single NPC - the NPC will select one of the valid offers at random for the player so long as they meet the necessary rep requirements.

The bribe parameter works as follows:

- The first value is the internal nickname of the NPC faction you want to be bribed. In this case, bribes are offered for Rheinland Police, Daumann, Imperial Shipping and Samura (oddly enough).
- The second value is the cost in credits for increasing the target-faction's rep by 0.1, with rep being increased up to a maximum of 0.6. Buying the example bribe will accordingly cost you around $5,000 if you're starting from 0.0 neutral.
- The final value is the IDS reference setting out the bribe text. Here are the default bribe text infocards:

```
504724
NAME
You could stand to have a better reputation with %F0.  I could hack your record for %d0 credits...that should clear things up.  Of course that will make you less popular with %F1, %F2 and %F3.  What do you say?

504725
NAME
For a small contribution of %d0 credits, I could put in a good word for you with the rest of %F0.  You should know that groups like %F1, %F2 and %F3 might look down on our little transaction. How about it?

504726
NAME
You could stand to have a better reputation with %F0.  I could hack your record for %d0 credits...that should clear things up. What do you say?

504727
NAME
For a small contribution of %d0 credits, I could put in a good word for you with the rest of %F0.  How about it?
```

As you can see, these are basic plaintext infocards, however the game knows to replace certain parts of the text with relevant information. These include:

- %d0 - the calculation of the bribe price.
- %F0 - the faction that is being bribed.
- %F1, %F2, %F3 - a random selection of factions that will have their rep negatively affected by the bribe.

Using these details, you can construct your own custom bribe text. Looking back at Arlo, The Core's corporate liaison on Holstein, he has a very special offer for you! This is what his bribe text looks like:

```
33644
NAME
For a one-time investment of %d0 credits, you too can join The Core's corporate Platinum Affiliates Program. Terms and conditions apply, The Core accepts no responsibility or liabilities for reprisals by groups such as %F1 or %F2. This highly personalized offer is just for you, and your prosperous future! "Bringing the Edge Worlds to the Core of House civilization!"
```

He wears his shades indoors, that's how you know he's charismatic!

## 6. Custom Knowledge Bribes.

Next up, knowledge bribes. These are slightly more involved, and work by manipulating "visit flags". First we'll review how they're used in the `[GF_NPC]` blocks in mBases:

`know = 33404, 33405, 500, 3`

- The first value is the IDS reference of the text to offer the information for purchase. This always automatically ends with "for X Credits".
- The second value is the text for the offer acceptance / completed sale. This is always automatically prefixed by, "The information has been uploaded into Your Neural Net."
- The third value is the price.
- The final value is exactly the same as rumours and is a rep threshold to decide how friendly you need to be with the NPC's faction before they'll sell the info to you. In this case it's set to 3, meaning 0.6 rep - pretty friendly!
- 
The text for this bribe looks like this:

```
33404
NAME
The Federal Police think there's a smuggling ring working out of the Hausenfeld. They don't have the resources to deal with it, but you could check it out. I'll upload all of the info into your Neural Net

33405
NAME
Good luck, don't get yourself killed.
```

Currently this knowledge bribe doesn't actually do anything. The final piece can be found in another file. We'll now need to open: `DATA\INTERFACE\KnowledgeMap.ini`

KnowledgeMap.ini works a lot like InfocardMap.ini which we looked at earlier on. Basically, when you view the specified infocard, it triggers additional effects. The entry for this knowledge bribe looks like this:

`Map = 33405, RH04_hiddencache, 1`
The first value is the IDS reference for the offer acceptance text. Viewing this text (after you've paid) is the trigger for the KnowledgeMap entry taking effect.
The second value is the Object that you want to purchase info about. This must be the internal nickname of an object in a system. If you want to specify a dockable base, you should remember that you need to use an Object in the system file, which will be slightly different to the base interior's name.

For example, if I was to use Mannheim Station, the base's interior is called `rh04_03_base`, however the actual object in Frankfurt that we'd be revealing on the map is `rh04_03`. You can double check this by looking in the system's ini file, as we did in section 2 of this guide.
The final value is the visit flag. This is described in detail below.
Visit flags are basically a value inside your character file that is assigned for each Object you encounter. This tells the game whether the Object should be recorded on the map and what infocard details you can see. The default visit flag for most objects is "0", meaning undiscovered - until you go and find it.

Despite this, system modders can set a specific visit flag when they design an Object if they want to cause a particular effect. Most often, this is using the visit flag "128", which makes an object impossible to map, meaning it can never be discovered on the map and will appear as "Unknown Object" if you select it.

Purchasing a knowledge bribe forces the visit flag to whatever the bribe specifies. This means you can use it to forcibly map secret objects, such as hidden bases. The visit flags the game uses look like this:
- 0: Not visited / discovered.
- 1: Discovered (just basic base info; no info text for zones)
- 2: Internal base infocard for dockable stations.
- 4: Mineable Zones; Commodity list for dockable stations
- 8: Looted Wreck; Zone info; Equipment list for dockable stations.
- 16: Wreck; Ship list for dockable stations.
- 32: Zone.
- 64: Faction.
- 128: Hidden, never appears on the navmap.
You can combine the effects of visit flags by adding their values together.

For example, if you want your bribe to provide the location of a station, but not any of the internal information you'd get from docking, you'd use a visit flag of 1. If you wanted to map the location and the detailed internal infocard, but not any of the commodity, equipment or ship details, you'd use 3 (1 + 2). If you wanted to provide all information about a base including trade data, you'd use 31 (1+2+4+8+16). To reveal an asteroid field, its infocard and its mining zone, you'd use 44 (4+8+32).

You should now experiment with setting some of these knowledge bribes up, and checking whether the correct infocard details have been revealed. If your bribe is working properly, on purchasing the information and closing the confirmation window, your map should immediately open and zoom in on the relevant object.

It's also worth noting that you can include multiple "Map =" entries for the same infocard. This means you could for example set up a knowledge bribe to sell players the data on all the stations of a particular faction, system or region. You need to add a new Map entry in KnowledgeMap for each individual Object you want to have mapped.