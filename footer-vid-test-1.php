		</div> <!-- Wrapper End -->

		<!-- jQuery -->
		<script src="//code.jquery.com/jquery.js"></script>
		<script src="js/jquery.stellar.min.js"></script>

		<!-- Bootstrap JavaScript -->
		<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

		<!-- Custom JavaScript -->
		<script src="js/jquery.tubular.1.0.js"></script>
		<script src="js/app.js"></script>
    	<!-- // <script type="text/javascript" charset="utf-8" src="js/index.js"></script> -->
    	<script>

    	<?php $youtube =  'WTAHzO1i6Mw'; ?>

    	jQuery('document').ready(function() {
			var options = { videoId: '<?php echo $youtube; ?>', start: 3 };
			// var options = { videoId: 'ab0TSkLe-E0', start: 3 };
			// $('#myVideo').tubular(options);
			$('#wrapper').tubular(options);
			// f-UGhWj1xww cool sepia hd
			// 49SKbS7Xwf4 beautiful barn sepia
		});

    	</script>


	</body>
</html>