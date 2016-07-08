
all:
	$(MAKE) -C button clean && $(MAKE) -C button
	$(MAKE) -C card clean && $(MAKE) -C card
	$(MAKE) -C checkbox clean && $(MAKE) -C checkbox
	$(MAKE) -C circular-progress clean && $(MAKE) -C circular-pogress
	$(MAKE) -C header clean && $(MAKE) -C header
	$(MAKE) -C icon clean && $(MAKE) -C icon
	$(MAKE) -C menu clean && $(MAKE) -C menu
	$(MAKE) -C modal clean && $(MAKE) -C modal
	$(MAKE) -C navigation clean && $(MAKE) -C navigation
	$(MAKE) -C progress clean && $(MAKE) -C progress
	$(MAKE) -C radiobutton clean && $(MAKE) -C radiobutton
	$(MAKE) -C select clean && $(MAKE) -C select
	$(MAKE) -C slider clean && $(MAKE) -C slider
	$(MAKE) -C snackbar clean && $(MAKE) -C snackbar
	$(MAKE) -C switch clean && $(MAKE) -C switch
	$(MAKE) -C tabs clean && $(MAKE) -C tabs
	$(MAKE) -C textfield clean && $(MAKE) -C textfield
	$(MAKE) -C tooltip clean && $(MAKE) -C tooltip
	$(MAKE) -C upload clean && $(MAKE) -C upload
